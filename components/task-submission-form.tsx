"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Send } from "lucide-react"

interface TaskSubmissionFormProps {
  taskId: number
}

export default function TaskSubmissionForm({ taskId }: TaskSubmissionFormProps) {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState<string>("")
  const [explanation, setExplanation] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 실제 구현에서는 API를 통해 제출합니다
      console.log({
        taskId,
        selectedModel,
        explanation,
      })

      // 제출 성공 후 결과 페이지로 이동
      setTimeout(() => {
        router.push(`/tasks/${taskId}/result`)
      }, 1500)
    } catch (error) {
      console.error("제출 오류:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>과제 제출</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>1. 어떤 모델이 더 적합하다고 생각하나요?</Label>
            <RadioGroup value={selectedModel} onValueChange={setSelectedModel}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gpt-4o" id="gpt-4o" />
                <Label htmlFor="gpt-4o">GPT-4o</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="claude-3" id="claude-3" />
                <Label htmlFor="claude-3">Claude-3</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="explanation">
              2. 선택한 이유를 100자 이내로 설명하세요
              <span className="text-sm text-gray-500 ml-2">({explanation.length}/100자)</span>
            </Label>
            <Textarea
              id="explanation"
              placeholder="선택한 모델이 더 적합한 이유를 간결하게 설명해주세요..."
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              rows={4}
              maxLength={100}
              className="resize-none"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full gap-2" disabled={!selectedModel || !explanation || isSubmitting}>
            {isSubmitting ? "제출 중..." : "제출하기"}
            {!isSubmitting && <Send className="h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
