import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Clock, BarChart2, Eye } from "lucide-react"

export default function TasksPage() {
  // 종합 평가 목록 (실제로는 API에서 가져와야 함)
  const assessments = [
    {
      id: 1,
      title: "기업 세금 최적화 AI 활용 종합 평가",
      description:
        "기업의 세금 최적화를 위한 AI 활용 능력을 종합적으로 평가합니다. 세금 법령 분석, 정보 추출, 오류 검증, 프롬프트 최적화 등 다양한 AI 활용 역량을 평가합니다.",
      difficulty: "중간",
      estimatedTime: "45분",
      sectionsCount: 5,
      status: "completed", // completed, in-progress, not-started
      score: 82,
      completedAt: "2025년 5월 22일",
      categories: ["선택", "입력", "출력", "효율", "개선"],
    },
    {
      id: 2,
      title: "마케팅 콘텐츠 생성 AI 활용 종합 평가",
      description:
        "마케팅 콘텐츠 생성을 위한 AI 활용 능력을 종합적으로 평가합니다. 타겟 분석, 콘텐츠 기획, 텍스트 생성, 품질 검증 등의 역량을 평가합니다.",
      difficulty: "쉬움",
      estimatedTime: "35분",
      sectionsCount: 4,
      status: "in-progress",
      score: null,
      completedAt: null,
      categories: ["선택", "입력", "개선", "추가"],
    },
    {
      id: 3,
      title: "데이터 분석 AI 활용 종합 평가",
      description:
        "데이터 분석을 위한 AI 활용 능력을 종합적으로 평가합니다. 데이터 전처리, 패턴 분석, 인사이트 도출, 결과 해석 등의 역량을 평가합니다.",
      difficulty: "어려움",
      estimatedTime: "60분",
      sectionsCount: 6,
      status: "not-started",
      score: null,
      completedAt: null,
      categories: ["선택", "입력", "출력", "효율", "개선", "제거"],
    },
    {
      id: 4,
      title: "고객 서비스 AI 활용 종합 평가",
      description:
        "고객 서비스 개선을 위한 AI 활용 능력을 종합적으로 평가합니다. 고객 문의 분석, 응답 생성, 감정 분석, 서비스 개선 등의 역량을 평가합니다.",
      difficulty: "중간",
      estimatedTime: "40분",
      sectionsCount: 5,
      status: "not-started",
      score: null,
      completedAt: null,
      categories: ["선택", "입력", "출력", "개선", "추가"],
    },
    {
      id: 5,
      title: "법률 문서 분석 AI 활용 종합 평가",
      description:
        "법률 문서 분석을 위한 AI 활용 능력을 종합적으로 평가합니다. 계약서 검토, 조항 분석, 리스크 식별, 개선 제안 등의 역량을 평가합니다.",
      difficulty: "어려움",
      estimatedTime: "55분",
      sectionsCount: 5,
      status: "not-started",
      score: null,
      completedAt: null,
      categories: ["선택", "입력", "출력", "효율", "개선"],
    },
  ]

  const getStatusColor = (status: string) => {
    const colors = {
      completed: "bg-green-100 text-green-800",
      "in-progress": "bg-amber-100 text-amber-800",
      "not-started": "bg-gray-100 text-gray-800",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getStatusText = (status: string) => {
    const texts = {
      completed: "완료",
      "in-progress": "진행 중",
      "not-started": "시작 전",
    }
    return texts[status as keyof typeof texts] || "알 수 없음"
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      쉬움: "bg-green-100 text-green-800",
      중간: "bg-amber-100 text-amber-800",
      어려움: "bg-rose-100 text-rose-800",
    }
    return colors[difficulty as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold">AI 활용 능력 종합 평가</h1>
        <p className="text-gray-500">
          다양한 분야의 AI 활용 능력을 종합적으로 평가하는 테스트입니다. 각 테스트를 완료하여 당신의 AI 활용 역량을
          평가해보세요.
        </p>
      </div>

      {/* 통계 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">전체 평가</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold">{assessments.length}</div>
            <p className="text-xs text-gray-500">개의 종합 평가</p>
          </div>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">완료한 평가</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-green-600">
              {assessments.filter((a) => a.status === "completed").length}
            </div>
            <p className="text-xs text-gray-500">개 완료</p>
          </div>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">진행 중인 평가</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-amber-600">
              {assessments.filter((a) => a.status === "in-progress").length}
            </div>
            <p className="text-xs text-gray-500">개 진행 중</p>
          </div>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">평균 점수</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-blue-600">
              {assessments.filter((a) => a.score).length > 0
                ? Math.round(
                    assessments.filter((a) => a.score).reduce((sum, a) => sum + (a.score || 0), 0) /
                      assessments.filter((a) => a.score).length,
                  )
                : "-"}
            </div>
            <p className="text-xs text-gray-500">점 (100점 만점)</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {assessments.map((assessment) => (
          <Card key={assessment.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight">{assessment.title}</CardTitle>
                    {assessment.status === "completed" && assessment.completedAt && (
                      <p className="text-xs text-gray-500 mt-1">완료일: {assessment.completedAt}</p>
                    )}
                  </div>
                </div>
                {assessment.status === "completed" && assessment.score && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{assessment.score}</div>
                    <div className="text-xs text-gray-500">점</div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className={getStatusColor(assessment.status)}>{getStatusText(assessment.status)}</Badge>
                <Badge className={getDifficultyColor(assessment.difficulty)}>{assessment.difficulty}</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {assessment.estimatedTime}
                </Badge>
                <Badge variant="outline">{assessment.sectionsCount}개 섹션</Badge>
              </div>

              <CardDescription className="text-sm">{assessment.description}</CardDescription>

              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-2">평가 영역:</p>
                <div className="flex flex-wrap gap-1">
                  {assessment.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardFooter className="mt-auto pt-4">
              <div className="flex gap-2 w-full">
                {assessment.status === "completed" ? (
                  <>
                    <Button asChild variant="outline" className="flex-1 gap-2">
                      <Link href={`/assessment/${assessment.id}/result`}>
                        <Eye className="h-4 w-4" />
                        결과 보기
                      </Link>
                    </Button>
                    <Button asChild className="flex-1 gap-2">
                      <Link href={`/assessment/${assessment.id}`}>
                        <BarChart2 className="h-4 w-4" />
                        다시 도전하기
                      </Link>
                    </Button>
                  </>
                ) : assessment.status === "in-progress" ? (
                  <>
                    <Button asChild variant="outline" className="flex-1 gap-2">
                      <Link href={`/assessment/${assessment.id}`}>
                        <ArrowRight className="h-4 w-4" />
                        이어서 하기
                      </Link>
                    </Button>
                    <Button asChild className="flex-1 gap-2">
                      <Link href={`/assessment/${assessment.id}/section/1`}>
                        <Brain className="h-4 w-4" />
                        처음부터 다시
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button asChild className="w-full gap-2">
                    <Link href={`/assessment/${assessment.id}`}>
                      평가 시작하기 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* 추가 정보 섹션 */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">종합 평가 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">평가 방식</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 각 종합 평가는 여러 섹션으로 구성됩니다</li>
              <li>• 섹션별로 다른 AI 활용 역량을 평가합니다</li>
              <li>• 실제 업무 환경과 유사한 과제를 제공합니다</li>
              <li>• 완료 후 상세한 피드백을 받을 수 있습니다</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">평가 결과</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 종합 점수와 영역별 세부 점수를 제공합니다</li>
              <li>• 강점과 개선점을 분석해드립니다</li>
              <li>• 다른 사용자와의 비교 결과를 확인할 수 있습니다</li>
              <li>• 개인 대시보드에서 진행 상황을 추적할 수 있습니다</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
