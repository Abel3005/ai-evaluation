"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { ArrowRight, Save, CheckCircle, ArrowLeft, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface AssessmentFormProps {
  assessmentId: number
  sectionId: number
  category: string
  nextSectionId: number | null
  onSectionComplete: (sectionId: number) => void
  isCompleted: boolean
}

export default function AssessmentForm({
  assessmentId,
  sectionId,
  category,
  nextSectionId,
  onSectionComplete,
  isCompleted,
}: AssessmentFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [submissionResult, setSubmissionResult] = useState<any>(null)

  // 이미 완료된 섹션인 경우 제출 완료 상태로 설정
  useEffect(() => {
    if (isCompleted) {
      setIsSubmitted(true)
      setSubmissionResult({
        success: true,
        sectionId,
        score: 85, // 예시 점수
        feedback: "이미 제출 완료된 섹션입니다. 다음 섹션으로 진행하거나 결과를 확인할 수 있습니다.",
        nextSectionId,
      })
    }
  }, [isCompleted, sectionId, nextSectionId])

  // 로컬 스토리지에서 저장된 답변 불러오기
  useEffect(() => {
    const loadSavedAnswer = () => {
      try {
        const savedData = localStorage.getItem(`assessment_${assessmentId}_section_${sectionId}_answer`)
        if (savedData) {
          const parsedData = JSON.parse(savedData)
          switch (category) {
            case "selection":
              setSelectionState(parsedData)
              break
            case "input":
              setInputState(parsedData)
              break
            case "output":
              setOutputState(parsedData)
              break
            case "efficiency":
              setEfficiencyState(parsedData)
              break
            case "improve":
              setImproveState(parsedData)
              break
          }
        }
      } catch (error) {
        console.error("저장된 답변을 불러오는데 실패했습니다:", error)
      }
    }

    if (!isCompleted) {
      loadSavedAnswer()
    }
  }, [assessmentId, sectionId, category, isCompleted])

  // 카테고리별 폼 상태 관리
  const [selectionState, setSelectionState] = useState({
    selectedModel: "",
    explanation: "",
  })

  const [inputState, setInputState] = useState({
    extractedInfo: "",
    sourceReference: "",
  })

  const [outputState, setOutputState] = useState({
    errorDetection: "",
    explanation: "",
    correction: "",
  })

  const [efficiencyState, setEfficiencyState] = useState({
    optimizedPrompt: "",
  })

  const [improveState, setImproveState] = useState({
    improvedPrompt: "",
    issueAnalysis: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 현재 섹션의 답변 데이터
      const submissionData = {
        assessmentId,
        sectionId,
        category,
        answer: getAnswerByCategory(),
      }

      console.log("제출 데이터:", submissionData)

      // 로컬 스토리지에 답변 저장
      try {
        localStorage.setItem(
          `assessment_${assessmentId}_section_${sectionId}_answer`,
          JSON.stringify(getAnswerByCategory()),
        )
      } catch (error) {
        console.error("답변을 저장하는데 실패했습니다:", error)
      }

      // 모의 API 응답
      const mockResult = {
        success: true,
        sectionId,
        score: Math.floor(Math.random() * 30) + 70, // 70-100 사이 랜덤 점수
        feedback:
          "제출이 완료되었습니다. 답변이 저장되었으며, 모든 섹션 완료 후 상세한 평가 결과를 확인할 수 있습니다.",
        nextSectionId,
      }

      // 1.5초 후 결과 표시
      setTimeout(() => {
        setSubmissionResult(mockResult)
        setIsSubmitted(true)
        setIsSubmitting(false)

        // 섹션 완료 상태 업데이트
        onSectionComplete(sectionId)
      }, 1500)
    } catch (error) {
      console.error("제출 오류:", error)
      setIsSubmitting(false)
    }
  }

  const handleSaveDraft = () => {
    // 로컬 스토리지에 임시 저장
    try {
      localStorage.setItem(
        `assessment_${assessmentId}_section_${sectionId}_answer`,
        JSON.stringify(getAnswerByCategory()),
      )
      alert("임시 저장되었습니다.")
    } catch (error) {
      console.error("임시 저장에 실패했습니다:", error)
      alert("임시 저장에 실패했습니다.")
    }
  }

  const handleNextSection = () => {
    if (nextSectionId) {
      router.push(`/assessment/${assessmentId}/section/${nextSectionId}`)
    } else {
      router.push(`/assessment/${assessmentId}/result`)
    }
  }

  // 카테고리별 답변 데이터 가져오기
  const getAnswerByCategory = () => {
    switch (category) {
      case "selection":
        return selectionState
      case "input":
        return inputState
      case "output":
        return outputState
      case "efficiency":
        return efficiencyState
      case "improve":
        return improveState
      default:
        return {}
    }
  }

  // 제출 완료 후 결과 화면
  if (isSubmitted && submissionResult) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            섹션 {sectionId} 제출 완료
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant={isCompleted ? "default" : "success"}>
            {isCompleted ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
            <AlertDescription>{submissionResult.feedback}</AlertDescription>
          </Alert>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">제출 정보</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>• 섹션: {sectionId}번</p>
              <p>• 제출 시간: {isCompleted ? "이전에 제출됨" : new Date().toLocaleString("ko-KR")}</p>
              <p>• 상태: 제출 완료</p>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              💡 <strong>안내:</strong> 모든 섹션을 완료한 후 종합 평가 결과와 상세한 피드백을 확인할 수 있습니다.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href={`/assessment/${assessmentId}/section/${sectionId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              섹션 다시 보기
            </Link>
          </Button>

          {nextSectionId ? (
            <Button onClick={handleNextSection} className="gap-2">
              다음 섹션으로 <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleNextSection} className="gap-2">
              평가 결과 보기 <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    )
  }

  // 폼 유효성 검사
  const isFormValid = () => {
    switch (category) {
      case "selection":
        return selectionState.selectedModel && selectionState.explanation.trim()
      case "input":
        return inputState.extractedInfo.trim() && inputState.sourceReference.trim()
      case "output":
        return outputState.errorDetection.trim() && outputState.explanation.trim() && outputState.correction.trim()
      case "efficiency":
        return efficiencyState.optimizedPrompt.trim()
      case "improve":
        return improveState.improvedPrompt.trim() && improveState.issueAnalysis.trim()
      default:
        return false
    }
  }

  // 카테고리별 폼 렌더링
  const renderFormByCategory = () => {
    switch (category) {
      case "selection":
        return renderSelectionForm()
      case "input":
        return renderInputForm()
      case "output":
        return renderOutputForm()
      case "efficiency":
        return renderEfficiencyForm()
      case "improve":
        return renderImproveForm()
      default:
        return <p>지원되지 않는 카테고리입니다.</p>
    }
  }

  // 선택(Selection) 카테고리 폼
  const renderSelectionForm = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>1. 어떤 모델이 더 적합하다고 생각하나요?</Label>
        <RadioGroup
          value={selectionState.selectedModel}
          onValueChange={(value) => setSelectionState({ ...selectionState, selectedModel: value })}
        >
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
          <span className="text-sm text-gray-500 ml-2">({selectionState.explanation.length}/100자)</span>
        </Label>
        <Textarea
          id="explanation"
          placeholder="선택한 모델이 더 적합한 이유를 간결하게 설명해주세요..."
          value={selectionState.explanation}
          onChange={(e) => setSelectionState({ ...selectionState, explanation: e.target.value })}
          rows={4}
          maxLength={100}
          className="resize-none"
        />
      </div>
    </div>
  )

  // 입력(Input) 카테고리 폼
  const renderInputForm = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="extractedInfo">1. 추출한 간이 과세기준 정보를 표 형태로 작성하세요</Label>
        <Textarea
          id="extractedInfo"
          placeholder="연도별 간이 과세기준액을 표 형태로 작성해주세요..."
          value={inputState.extractedInfo}
          onChange={(e) => setInputState({ ...inputState, extractedInfo: e.target.value })}
          rows={8}
          className="font-mono"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sourceReference">2. 출처 정보 (조항 번호, 페이지 등)</Label>
        <Input
          id="sourceReference"
          placeholder="예: 제25조, p.42"
          value={inputState.sourceReference}
          onChange={(e) => setInputState({ ...inputState, sourceReference: e.target.value })}
        />
      </div>
    </div>
  )

  // 출력(Output) 카테고리 폼
  const renderOutputForm = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="errorDetection">1. 발견한 오류를 모두 나열하세요</Label>
        <Textarea
          id="errorDetection"
          placeholder="AI 응답에서 발견한 오류를 모두 나열해주세요..."
          value={outputState.errorDetection}
          onChange={(e) => setOutputState({ ...outputState, errorDetection: e.target.value })}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="explanation">2. 각 오류가 잘못된 이유를 설명하세요</Label>
        <Textarea
          id="explanation"
          placeholder="각 오류가 왜 잘못되었는지 설명해주세요..."
          value={outputState.explanation}
          onChange={(e) => setOutputState({ ...outputState, explanation: e.target.value })}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="correction">3. 올바른 정보로 수정하세요</Label>
        <Textarea
          id="correction"
          placeholder="올바른 정보로 수정한 전체 내용을 작성해주세요..."
          value={outputState.correction}
          onChange={(e) => setOutputState({ ...outputState, correction: e.target.value })}
          rows={6}
        />
      </div>
    </div>
  )

  // 효율(Efficiency) 카테고리 폼
  const renderEfficiencyForm = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="optimizedPrompt">
          최적화된 프롬프트 (20토큰 이내)
          <span className="text-sm text-gray-500 ml-2">
            (예상 토큰 수: {Math.ceil(efficiencyState.optimizedPrompt.length / 4)})
          </span>
        </Label>
        <Textarea
          id="optimizedPrompt"
          placeholder="원본 프롬프트를 20토큰 이내로 최적화하세요..."
          value={efficiencyState.optimizedPrompt}
          onChange={(e) => setEfficiencyState({ ...efficiencyState, optimizedPrompt: e.target.value })}
          rows={4}
          className="font-mono"
        />
        {Math.ceil(efficiencyState.optimizedPrompt.length / 4) > 20 && (
          <p className="text-sm text-red-500">⚠️ 토큰 수가 20개를 초과했습니다. 더 간결하게 작성해주세요.</p>
        )}
      </div>
    </div>
  )

  // 개선(Improve) 카테고리 폼
  const renderImproveForm = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="improvedPrompt">
          1. 개선된 프롬프트 (200자 이내)
          <span className="text-sm text-gray-500 ml-2">({improveState.improvedPrompt.length}/200자)</span>
        </Label>
        <Textarea
          id="improvedPrompt"
          placeholder="원본 프롬프트를 개선하여 작성해주세요..."
          value={improveState.improvedPrompt}
          onChange={(e) => setImproveState({ ...improveState, improvedPrompt: e.target.value })}
          rows={4}
          maxLength={200}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="issueAnalysis">2. 원본 프롬프트의 문제점 분석 (2가지 이상)</Label>
        <Textarea
          id="issueAnalysis"
          placeholder="원본 프롬프트의 문제점을 2가지 이상 분석해주세요..."
          value={improveState.issueAnalysis}
          onChange={(e) => setImproveState({ ...improveState, issueAnalysis: e.target.value })}
          rows={4}
        />
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>섹션 {sectionId} 제출</CardTitle>
        </CardHeader>
        <CardContent>{renderFormByCategory()}</CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={handleSaveDraft} className="gap-2">
            <Save className="h-4 w-4" /> 임시 저장
          </Button>
          <Button type="submit" className="gap-2" disabled={isSubmitting || !isFormValid()}>
            {isSubmitting ? "제출 중..." : "제출하기"}
            {!isSubmitting && <ArrowRight className="h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
