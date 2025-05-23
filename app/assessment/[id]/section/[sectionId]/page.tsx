"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import AssessmentForm from "@/components/assessment-form"
import MarkdownRenderer from "@/components/markdown-renderer"
import { useEffect, useState } from "react"

interface SectionPageProps {
  params: {
    id: string
    sectionId: string
  }
}

export default function SectionPage({ params }: SectionPageProps) {
  const assessmentId = Number.parseInt(params.id)
  const sectionId = Number.parseInt(params.sectionId)
  const [completedSections, setCompletedSections] = useState<number[]>([])

  // 실제 구현에서는 API를 통해 섹션 정보를 가져옵니다
  const section = {
    id: sectionId,
    assessmentId,
    title: getSectionTitle(sectionId),
    description: getSectionDescription(sectionId),
    instructions: getSectionInstructions(sectionId),
    category: getSectionCategory(sectionId),
    totalSections: 5,
    nextSectionId: sectionId < 5 ? sectionId + 1 : null,
    prevSectionId: sectionId > 1 ? sectionId - 1 : null,
  }

  // 완료된 섹션 정보 가져오기
  useEffect(() => {
    // 실제 구현에서는 API를 통해 완료된 섹션 정보를 가져옵니다
    // 여기서는 localStorage를 사용하여 클라이언트 측에서 관리합니다
    const fetchCompletedSections = () => {
      try {
        const storedData = localStorage.getItem(`assessment_${assessmentId}_completed_sections`)
        if (storedData) {
          setCompletedSections(JSON.parse(storedData))
        }
      } catch (error) {
        console.error("완료된 섹션 정보를 가져오는데 실패했습니다:", error)
      }
    }

    fetchCompletedSections()
  }, [assessmentId])

  // 섹션 완료 상태 업데이트 함수 (AssessmentForm에 전달)
  const updateCompletedSection = (completedSectionId: number) => {
    const updatedSections = [...completedSections]
    if (!updatedSections.includes(completedSectionId)) {
      updatedSections.push(completedSectionId)
      setCompletedSections(updatedSections)

      // localStorage에 저장
      try {
        localStorage.setItem(`assessment_${assessmentId}_completed_sections`, JSON.stringify(updatedSections))
      } catch (error) {
        console.error("완료된 섹션 정보를 저장하는데 실패했습니다:", error)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link
              href={
                section.prevSectionId ? `/assessment/${assessmentId}/section/${section.prevSectionId}` : "/assessment"
              }
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">
            섹션 {sectionId}: {section.title}
          </h1>
        </div>
        <Badge className={getCategoryColor(section.category)}>{getCategoryLabel(section.category)}</Badge>
      </div>

      {/* 진행 상황 표시 */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>진행 상황</span>
          <span>
            {sectionId}/{section.totalSections} 섹션
          </span>
        </div>
        <Progress value={(sectionId / section.totalSections) * 100} className="h-2 mb-4" />

        {/* 섹션별 상태 표시 */}
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: section.totalSections }, (_, i) => i + 1).map((num) => (
            <Link
              key={num}
              href={`/assessment/${assessmentId}/section/${num}`}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs cursor-pointer ${
                completedSections.includes(num)
                  ? "bg-green-100 text-green-800"
                  : num === sectionId
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              {completedSections.includes(num) && <CheckCircle className="h-3 w-3" />}
              섹션 {num}
              {num === sectionId && " (현재)"}
              {completedSections.includes(num) && " (완료)"}
            </Link>
          ))}
        </div>
      </div>

      <Tabs defaultValue="instructions">
        <TabsList className="mb-4">
          <TabsTrigger value="instructions">과제 설명</TabsTrigger>
          <TabsTrigger value="submission">제출</TabsTrigger>
        </TabsList>
        <TabsContent value="instructions">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">{section.description}</p>
              <MarkdownRenderer content={section.instructions} />
            </CardContent>
            <CardFooter className="flex justify-between">
              {section.prevSectionId && (
                <Button variant="outline" asChild>
                  <Link href={`/assessment/${assessmentId}/section/${section.prevSectionId}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> 이전 섹션
                  </Link>
                </Button>
              )}
              <div className="flex gap-2">
                <Button asChild>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .querySelector('[data-value="submission"]')
                        ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                    }}
                  >
                    제출 페이지로 <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                {section.nextSectionId && (
                  <Button variant="outline" asChild>
                    <Link href={`/assessment/${assessmentId}/section/${section.nextSectionId}`}>
                      다음 섹션 미리보기 <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="submission">
          <AssessmentForm
            assessmentId={assessmentId}
            sectionId={sectionId}
            category={section.category}
            nextSectionId={section.nextSectionId}
            onSectionComplete={updateCompletedSection}
            isCompleted={completedSections.includes(sectionId)}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

// 섹션 정보 유틸리티 함수들은 동일하게 유지...
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
  const instructions = {
    1: `# 과제 설명
      
기업 세금 최적화를 위한 세금 법령 분석 시스템을 구축하려고 합니다.
이 시스템은 국세청 법령 문서에서 기업에 적용되는 세금 규정을 자동으로 추출하고 분석해야 합니다.

# 요구사항

1. **'GPT-4o'**와 **'Claude-3'** 중 어느 모델이 이 작업에 더 적합한지 결정하세요.
2. 선택한 이유를 **100자 이내**로 간결하게 설명하세요.
3. 모델의 특성, 강점, 약점을 고려하여 판단하세요.

# 평가 기준

- **모델 선택의 적절성** (50%)
- **선택 이유의 명확성과 논리성** (30%)
- **설명의 간결성** (20%)

## 참고사항

세금 법령 분석은 다음과 같은 특성을 가집니다:
- 복잡한 법률 용어와 조항 해석
- 정확한 수치 정보 추출
- 맥락적 이해가 중요한 규정 분석`,

    2: `# 과제 설명

첨부된 **'2024_국세청_법령.pdf'**에서 **'간이 과세기준'** 조항을 찾아 해당 연도별 기준액을 표로 정리해야 합니다.

# 요구사항

1. PDF 문서에서 **'간이 과세기준'**에 관한 조항을 정확히 찾아내세요.
2. **2020년부터 2024년까지**의 연도별 기준액을 추출하세요.
3. 추출한 정보를 **연도별로 정리된 표 형태**로 제시하세요.
4. 관련 **조항 번호와 페이지**를 함께 명시하세요.

# 평가 기준

- **정보 추출의 정확성** (40%)
- **정보의 완전성** (30%)
- **표 형식의 명확성** (20%)
- **출처 명시의 정확성** (10%)

## 예시 표 형식

\`\`\`
| 연도 | 간이 과세기준 | 조항 번호 | 페이지 |
|------|---------------|-----------|--------|
| 2020 | 8,000만원     | 제25조    | p.42   |
| 2021 | 8,000만원     | 제25조    | p.42   |
\`\`\`

## 주의사항

- 모든 연도의 정보를 빠짐없이 포함해야 합니다.
- 금액은 정확한 단위(만원, 억원 등)로 표기하세요.`,

    3: `# 과제 설명

다음 AI 응답에서 **오류·허위 정보**를 검출하고, 잘못된 부분을 지적 및 수정해야 합니다.

## AI 응답

> "2025년 간이 과세기준은 연 매출 **1억 원 이하**입니다. 이는 2024년 기준인 **8,000만 원**에서 상향 조정된 것으로, 소규모 사업자의 세금 부담을 줄이기 위한 조치입니다. 간이 과세자는 일반과세자에 비해 신고 절차가 간소화되며, 부가가치세율도 **5%**로 낮게 적용됩니다. 또한 **2025년부터는 모든 간이 과세자에게 전자세금계산서 발행이 의무화**됩니다."

# 요구사항

1. 위 응답에서 **사실과 다른 정보**를 모두 찾아내세요.
2. 각 오류에 대해 **왜 잘못되었는지** 설명하세요.
3. **올바른 정보로 수정**하세요.

# 평가 기준

- **오류 검출의 정확성** (40%)
- **오류 설명의 명확성** (30%)
- **수정 정보의 정확성** (30%)

## 답변 형식

각 오류에 대해 다음 형식으로 답변하세요:

**오류 1:** [잘못된 내용]
**문제점:** [왜 잘못되었는지 설명]
**수정:** [올바른 정보]`,

    4: `# 과제 설명

다음 프롬프트를 **20토큰 이내**로 최적화하여 동일한 결과를 얻어야 합니다.

## 원본 프롬프트

\`\`\`
"2024년 국세청 법령에서 간이 과세기준에 관한 내용을 찾아서 2020년부터 2024년까지의 연도별 기준액을 표 형태로 정리해주세요. 각 연도별로 기준액이 어떻게 변화했는지 명확하게 보여주는 것이 중요합니다. 표에는 연도와 기준액 두 열만 포함하면 됩니다."
\`\`\`

**현재 토큰 수:** 약 65토큰

# 요구사항

1. 원본 프롬프트의 **핵심 요구사항을 유지**하세요.
2. 최적화된 프롬프트는 **20토큰 이내**여야 합니다.
3. 최적화된 프롬프트로 **원본과 동일한 결과**를 얻을 수 있어야 합니다.

# 평가 기준

- **토큰 효율성** (50%)
- **결과의 동등성** (40%)
- **명확성 유지** (10%)

## 최적화 팁

- 불필요한 수식어 제거
- 핵심 키워드만 유지
- 간결한 표현 사용
- 중복 표현 제거

## 토큰 계산 방법

일반적으로 한국어는 1글자당 약 1토큰으로 계산됩니다.`,

    5: `# 과제 설명

다음 프롬프트를 개선하여 **더 정확하고 유용한 응답**을 얻어야 합니다.

## 원본 프롬프트

\`\`\`
"PDF에서 세금 정보 알려줘"
\`\`\`

## AI 응답

> "PDF 문서에서 세금 정보를 찾기 위해서는 더 구체적인 정보가 필요합니다. 어떤 PDF 문서인지, 어떤 종류의 세금 정보를 찾고 있는지, 특정 연도나 지역에 관한 정보인지 알려주시면 더 도움이 될 것 같습니다."

# 요구사항

1. 원본 프롬프트를 개선하여 **더 명확하고 구체적인 응답**을 얻을 수 있도록 하세요.
2. 개선된 프롬프트는 **200자 이내**여야 합니다.
3. 원본 프롬프트의 **불충분한 점을 2가지 이상** 지적하세요.

# 평가 기준

- **프롬프트 개선의 효과성** (40%)
- **문제점 분석의 정확성** (30%)
- **개선된 프롬프트의 명확성** (30%)

## 개선 가이드라인

좋은 프롬프트는 다음을 포함해야 합니다:
- **구체적인 문서 정보**
- **원하는 정보의 종류**
- **출력 형식 지정**
- **필요한 세부사항**

## 답변 형식

**원본 프롬프트의 문제점:**
1. [문제점 1]
2. [문제점 2]
3. [문제점 3] (선택사항)

**개선된 프롬프트:**
\`\`\`
[개선된 프롬프트 내용]
\`\`\``,
  }
  return instructions[sectionId as keyof typeof instructions] || ""
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

function getCategoryLabel(category: string): string {
  const labels = {
    selection: "선택 (Selection)",
    input: "입력 (Input)",
    output: "출력 (Output)",
    efficiency: "효율 (Efficiency)",
    improve: "개선 (Improve)",
    add: "추가 (Add)",
    remove: "제거 (Remove)",
  }
  return labels[category as keyof typeof labels] || category
}

function getCategoryColor(category: string): string {
  const colors = {
    selection: "bg-blue-100 text-blue-800",
    input: "bg-green-100 text-green-800",
    output: "bg-purple-100 text-purple-800",
    efficiency: "bg-amber-100 text-amber-800",
    improve: "bg-rose-100 text-rose-800",
    add: "bg-teal-100 text-teal-800",
    remove: "bg-indigo-100 text-indigo-800",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
}
