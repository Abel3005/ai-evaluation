"use client"

import type React from "react"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const parseMarkdown = (text: string): React.ReactNode[] => {
    const lines = text.split("\n")
    const elements: React.ReactNode[] = []
    let currentList: React.ReactNode[] = []
    let currentOrderedList: React.ReactNode[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    let codeBlockLanguage = ""

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1 mb-4">
            {currentList}
          </ul>,
        )
        currentList = []
      }
    }

    const flushOrderedList = () => {
      if (currentOrderedList.length > 0) {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-1 mb-4">
            {currentOrderedList}
          </ol>,
        )
        currentOrderedList = []
      }
    }

    const flushCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        elements.push(
          <pre key={`code-${elements.length}`} className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm font-mono">{codeBlockContent.join("\n")}</code>
          </pre>,
        )
        codeBlockContent = []
        codeBlockLanguage = ""
      }
    }

    const parseInlineElements = (text: string): React.ReactNode[] => {
      const parts: React.ReactNode[] = []
      let remaining = text
      let key = 0

      while (remaining.length > 0) {
        // 굵은 글씨 **text**
        const boldMatch = remaining.match(/^\*\*(.*?)\*\*/)
        if (boldMatch) {
          parts.push(
            <strong key={key++} className="font-bold">
              {boldMatch[1]}
            </strong>,
          )
          remaining = remaining.slice(boldMatch[0].length)
          continue
        }

        // 기울임 *text*
        const italicMatch = remaining.match(/^\*(.*?)\*/)
        if (italicMatch) {
          parts.push(
            <em key={key++} className="italic">
              {italicMatch[1]}
            </em>,
          )
          remaining = remaining.slice(italicMatch[0].length)
          continue
        }

        // 인라인 코드 `code`
        const codeMatch = remaining.match(/^`(.*?)`/)
        if (codeMatch) {
          parts.push(
            <code key={key++} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
              {codeMatch[1]}
            </code>,
          )
          remaining = remaining.slice(codeMatch[0].length)
          continue
        }

        // 일반 텍스트
        const nextSpecialChar = remaining.search(/[*`]/)
        if (nextSpecialChar === -1) {
          parts.push(remaining)
          break
        } else {
          parts.push(remaining.slice(0, nextSpecialChar))
          remaining = remaining.slice(nextSpecialChar)
        }
      }

      return parts
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // 코드 블록 처리
      if (trimmedLine.startsWith("```")) {
        if (inCodeBlock) {
          flushCodeBlock()
          inCodeBlock = false
        } else {
          flushList()
          flushOrderedList()
          inCodeBlock = true
          codeBlockLanguage = trimmedLine.slice(3)
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      // 빈 줄
      if (trimmedLine === "") {
        flushList()
        flushOrderedList()
        return
      }

      // 제목 처리
      if (trimmedLine.startsWith("# ")) {
        flushList()
        flushOrderedList()
        elements.push(
          <h1 key={`h1-${index}`} className="text-2xl font-bold mb-4 mt-6">
            {trimmedLine.slice(2)}
          </h1>,
        )
        return
      }

      if (trimmedLine.startsWith("## ")) {
        flushList()
        flushOrderedList()
        elements.push(
          <h2 key={`h2-${index}`} className="text-xl font-bold mb-3 mt-5">
            {trimmedLine.slice(3)}
          </h2>,
        )
        return
      }

      if (trimmedLine.startsWith("### ")) {
        flushList()
        flushOrderedList()
        elements.push(
          <h3 key={`h3-${index}`} className="text-lg font-bold mb-2 mt-4">
            {trimmedLine.slice(4)}
          </h3>,
        )
        return
      }

      // 순서 없는 리스트
      if (trimmedLine.startsWith("- ")) {
        flushOrderedList()
        currentList.push(
          <li key={`li-${index}`} className="text-sm">
            {parseInlineElements(trimmedLine.slice(2))}
          </li>,
        )
        return
      }

      // 순서 있는 리스트
      const orderedListMatch = trimmedLine.match(/^(\d+)\.\s+(.*)/)
      if (orderedListMatch) {
        flushList()
        currentOrderedList.push(
          <li key={`oli-${index}`} className="text-sm">
            {parseInlineElements(orderedListMatch[2])}
          </li>,
        )
        return
      }

      // 일반 문단
      if (trimmedLine) {
        flushList()
        flushOrderedList()
        elements.push(
          <p key={`p-${index}`} className="mb-3 leading-relaxed">
            {parseInlineElements(trimmedLine)}
          </p>,
        )
      }
    })

    // 마지막에 남은 리스트들 처리
    flushList()
    flushOrderedList()
    flushCodeBlock()

    return elements
  }

  return <div className={`prose max-w-none ${className}`}>{parseMarkdown(content)}</div>
}
