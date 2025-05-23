'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Home, ListChecks } from "lucide-react"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"

interface ResultPageProps {
  params: {
    id: string
  }
}

export default function ResultPage({ params }: ResultPageProps) {
  const assessmentId = Number.parseInt(params.id)

  // 실제 구현에서는 API를 통해 결과 정보를 가져옵니다
  const result = {
    assessmentId,
    title: "기업 세금 최적화 AI 활용 종합 평가",
    overallScore: 82,
    categoryScores: [
      { category: "선택 (Selection)", score: 90, weight: 0.2 },
      { category: "입력 (Input)", score: 75, weight: 0.2 },
      { category: "출력 (Output)", score: 85, weight: 0.15 },
      { category: "효율 (Efficiency)", score: 70, weight: 0.15 },
      { category: "개선 (Improve)", score: 85, weight: 0.1 },
      { category: "추가 (Add)", score: 80, weight: 0.1 },
      { category: "제거 (Remove)", score: 90, weight: 0.1 },
    ],
    sectionResults: [
      {
        sectionId: 1,
        title: "모델 선택",
        category: "selection",
        score: 90,
        feedback:
          "모델 선택은 적절했으며, 금융 데이터 처리 정확도를 언급한 점이 좋았습니다. 다만, 구체적인 예시나 벤치마크 결과를 추가했다면 더 설득력 있었을 것입니다.",
        userAnswer: {
          selectedModel: "gpt-4o",
          explanation:
            "GPT-4o는 복잡한 세금 법령 맥락 이해와 핵심 조항 추출에 더 뛰어나며, 금융 데이터 처리 정확도가 더 높습니다.",
        },
        correctAnswer: {
          model: "gpt-4o",
          explanation:
            "GPT-4o는 복잡한 법령 맥락 이해, 금융 데이터 정확도, 핵심 조항 추출에 더 뛰어나며 Claude-3보다 세금 법령 특화 벤치마크에서 15% 높은 성능을 보입니다.",
        },
      },
      {
        sectionId: 2,
        title: "정보 추출",
        category: "input",
        score: 75,
        feedback: "대부분의 정보를 정확하게 추출했습니다. 일부 연도의 기준액이 누락되었으며, 출처 정보가 불완전합니다.",
      },
      {
        sectionId: 3,
        title: "오류 검증",
        category: "output",
        score: 85,
        feedback: "대부분의 오류를 정확하게 식별하고 수정했습니다. 설명이 명확합니다.",
      },
      {
        sectionId: 4,
        title: "프롬프트 최적화",
        category: "efficiency",
        score: 70,
        feedback: "토큰 수는 목표 내로 줄였지만, 일부 중요한 정보가 누락되었습니다.",
      },
      {
        sectionId: 5,
        title: "프롬프트 개선",
        category: "improve",
        score: 85,
        feedback: "프롬프트가 크게 개선되었으며, 문제점을 정확히 식별했습니다.",
      },
    ],
    radarData: [
      { subject: "선택", A: 90, fullMark: 100 },
      { subject: "입력", A: 75, fullMark: 100 },
      { subject: "출력", A: 85, fullMark: 100 },
      { subject: "효율", A: 70, fullMark: 100 },
      { subject: "개선", A: 85, fullMark: 100 },
      { subject: "추가", A: 80, fullMark: 100 },
      { subject: "제거", A: 90, fullMark: 100 },
    ],
    strengths: [
      "AI 모델 선택 능력이 뛰어납니다.",
      "오류 검증 및 수정 능력이 우수합니다.",
      "프롬프트 개선 능력이 좋습니다.",
    ],
    improvements: [
      "정보 추출의 완전성을 높이세요.",
      "프롬프트 최적화 시 핵심 정보 유지에 더 주의하세요.",
      "출처 정보를 더 정확하게 명시하세요.",
    ],
  }

  const getCategoryColor = (category: string) => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href="/assessment">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">종합 평가 결과</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">종합 점수</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative flex items-center justify-center">
                  <svg className="w-32 h-32">
                    <circle
                      className="text-gray-200"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                    />
                    <circle
                      className="text-primary"
                      strokeWidth="10"
                      strokeDasharray={350}
                      strokeDashoffset={350 - (350 * result.overallScore) / 100}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold">{result.overallScore}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">100점 만점</p>
              </div>

              <div className="space-y-4">
                {result.categoryScores.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.category}</span>
                      <span className="font-medium">{item.score}%</span>
                    </div>
                    <Progress value={item.score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-2">
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="/assessment">
                  <ListChecks className="h-4 w-4" />
                  다른 평가 시작하기
                </Link>
              </Button>
              <Button asChild className="w-full gap-2">
                <Link href="/dashboard">
                  <Home className="h-4 w-4" />
                  대시보드로 이동
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>역량 분석</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={result.radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar name="점수" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>섹션별 결과</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {result.sectionResults.map((section) => (
                  <div key={section.sectionId} className="border rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-gray-50">
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(section.category)}>섹션 {section.sectionId}</Badge>
                        <h3 className="font-medium">{section.title}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{section.score}</span>
                        <span className="text-sm text-gray-500">/ 100</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">피드백</h4>
                      <p className="text-sm">{section.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>종합 피드백</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">강점</h3>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">개선 필요 사항</h3>
              <ul className="space-y-2">
                {result.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
