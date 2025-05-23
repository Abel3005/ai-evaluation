import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function GET(request: Request, { params }: { params: { id: string; sectionId: string } }) {
  const assessmentId = Number.parseInt(params.id)
  const sectionId = Number.parseInt(params.sectionId)

  // 실제 구현에서는 데이터베이스에서 섹션 정보를 가져옵니다
  // 여기서는 간단한 예시로 하드코딩된 데이터를 반환합니다
  const section = {
    id: sectionId,
    assessmentId,
    title: getSectionTitle(sectionId),
    description: getSectionDescription(sectionId),
    instructions: getSectionInstructions(sectionId),
    category: getSectionCategory(sectionId),
  }

  return NextResponse.json({ section })
}

export async function POST(request: Request, { params }: { params: { id: string; sectionId: string } }) {
  const assessmentId = Number.parseInt(params.id)
  const sectionId = Number.parseInt(params.sectionId)

  try {
    const body = await request.json()
    const category = getSectionCategory(sectionId)

    // 실제 구현에서는 LLM을 사용하여 제출된 답변을 평가합니다
    // 여기서는 간단한 예시로 하드코딩된 평가 결과를 반환합니다
    let evaluationResult

    switch (category) {
      case "selection":
        evaluationResult = await evaluateSelectionAnswer(body)
        break
      case "input":
        evaluationResult = await evaluateInputAnswer(body)
        break
      case "output":
        evaluationResult = await evaluateOutputAnswer(body)
        break
      case "efficiency":
        evaluationResult = await evaluateEfficiencyAnswer(body)
        break
      case "improve":
        evaluationResult = await evaluateImproveAnswer(body)
        break
      default:
        evaluationResult = {
          score: 70,
          feedback: "평가 결과가 없습니다.",
        }
    }

    return NextResponse.json({
      success: true,
      sectionId,
      assessmentId,
      evaluation: evaluationResult,
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

// 섹션 정보 유틸리티 함수
function getSectionTitle(sectionId: number): string {
  const titles = {
    1: "모델 선택",
    2: "정보 추출",
    3: "오류 검증",
    4: "프롬프트 최적화",
    5: "프롬프트 개선",
  }
  return titles[sectionId as keyof typeof titles] || "섹션"
}

function getSectionDescription(sectionId: number): string {
  const descriptions = {
    1: "세금 법령 분석에 가장 적합한 AI 모델을 선택하고 그 이유를 설명하세요.",
    2: "주어진 세금 법령 문서에서 간이 과세기준에 관한 핵심 정보를 추출하세요.",
    3: "AI가 생성한 세금 정보 응답에서 오류를 식별하고 수정하세요.",
    4: "동일한 정보를 얻기 위한 프롬프트를 최소한의 토큰으로 최적화하세요.",
    5: "기존의 불충분한 프롬프트를 개선하고 문제점을 분석하세요.",
  }
  return descriptions[sectionId as keyof typeof descriptions] || ""
}

function getSectionInstructions(sectionId: number): string {
  // 실제 구현에서는 데이터베이스에서 가져옵니다
  return "섹션 지시사항"
}

function getSectionCategory(sectionId: number): string {
  const categories = {
    1: "selection",
    2: "input",
    3: "output",
    4: "efficiency",
    5: "improve",
  }
  return categories[sectionId as keyof typeof categories] || ""
}

// 평가 함수들
async function evaluateSelectionAnswer(answer: any) {
  // 실제 구현에서는 LLM을 사용하여 평가합니다
  const { text: evaluationResult } = await generateText({
    model: openai("gpt-4o"),
    system: "You are an expert evaluator of AI model selection reasoning.",
    prompt: `
      Evaluate the quality of this explanation for why ${answer.selectedModel} is better for analyzing tax regulations:
      
      User explanation: "${answer.explanation}"
      
      Score the model selection appropriateness from 0-100, the reasoning clarity from 0-100, and the conciseness from 0-100.
      Provide brief feedback on strengths and areas for improvement.
      
      Return your evaluation as JSON with the following structure:
      {
        "score": number,
        "modelSelectionScore": number,
        "reasoningScore": number,
        "conciseScore": number,
        "feedback": "string"
      }
    `,
  })

  // LLM 응답을 파싱합니다
  return JSON.parse(evaluationResult)
}

async function evaluateInputAnswer(answer: any) {
  // 실제 구현에서는 LLM을 사용하여 평가합니다
  return {
    score: 75,
    accuracyScore: 80,
    completenessScore: 70,
    formatScore: 75,
    feedback: "대부분의 정보를 정확하게 추출했습니다. 일부 연도의 기준액이 누락되었습니다.",
  }
}

async function evaluateOutputAnswer(answer: any) {
  // 실제 구현에서는 LLM을 사용하여 평가합니다
  return {
    score: 85,
    errorDetectionScore: 90,
    explanationScore: 80,
    correctionScore: 85,
    feedback: "대부분의 오류를 정확하게 식별하고 수정했습니다. 설명이 명확합니다.",
  }
}

async function evaluateEfficiencyAnswer(answer: any) {
  // 실제 구현에서는 LLM을 사용하여 평가합니다
  return {
    score: 70,
    tokenEfficiencyScore: 75,
    resultAccuracyScore: 65,
    feedback: "토큰 수는 목표 내로 줄였지만, 일부 중요한 정보가 누락되었습니다.",
  }
}

async function evaluateImproveAnswer(answer: any) {
  // 실제 구현에서는 LLM을 사용하여 평가합니다
  return {
    score: 85,
    improvementScore: 85,
    analysisScore: 85,
    feedback: "프롬프트가 크게 개선되었으며, 문제점을 정확히 식별했습니다.",
  }
}
