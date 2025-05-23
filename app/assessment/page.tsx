import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Clock, FileText } from "lucide-react"

export default function AssessmentPage() {
  // 실제 구현에서는 API를 통해 종합 테스트 정보를 가져옵니다
  const assessment = {
    id: 1,
    title: "기업 세금 최적화 AI 활용 종합 평가",
    description:
      "기업의 세금 최적화를 위한 AI 활용 능력을 종합적으로 평가하는 테스트입니다. 이 테스트에서는 적절한 AI 모델 선택, 세금 법령 정보 추출, 오류 검증, 프롬프트 최적화 등 다양한 AI 활용 역량을 평가합니다.",
    estimatedTime: "45분",
    difficulty: "중간",
    deadline: "2025년 5월 30일 23:59",
    sections: [
      {
        id: 1,
        title: "모델 선택",
        description: "세금 법령 분석에 가장 적합한 AI 모델 선택",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        id: 2,
        title: "정보 추출",
        description: "세금 법령 문서에서 핵심 정보 추출",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        id: 3,
        title: "오류 검증",
        description: "AI 응답의 오류 식별 및 수정",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        id: 4,
        title: "프롬프트 최적화",
        description: "효율적인 프롬프트 작성",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        id: 5,
        title: "프롬프트 개선",
        description: "기존 프롬프트 개선 및 분석",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">종합 AI 활용 능력 평가</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-xl">{assessment.title}</CardTitle>
              <CardDescription className="mt-2">{assessment.description}</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {assessment.estimatedTime}
              </Badge>
              <Badge className="bg-amber-100 text-amber-800">{assessment.difficulty}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">평가 영역</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800">선택 (Selection)</Badge>
                    <span className="text-sm text-gray-500">20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">입력 (Input)</Badge>
                    <span className="text-sm text-gray-500">20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800">출력 (Output)</Badge>
                    <span className="text-sm text-gray-500">15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-100 text-amber-800">효율 (Efficiency)</Badge>
                    <span className="text-sm text-gray-500">15%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-rose-100 text-rose-800">개선 (Improve)</Badge>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal-100 text-teal-800">추가 (Add)</Badge>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-indigo-100 text-indigo-800">제거 (Remove)</Badge>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">테스트 구성</h3>
              <div className="border rounded-lg divide-y">
                {assessment.sections.map((section, index) => (
                  <div key={section.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium">{section.title}</h4>
                        <p className="text-sm text-gray-500">{section.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">중요 안내</h3>
              <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                <li>테스트는 총 5개 섹션으로 구성되어 있으며, 순차적으로 진행됩니다.</li>
                <li>각 섹션은 이전 섹션의 결과를 기반으로 하므로, 순서대로 완료해야 합니다.</li>
                <li>테스트 중간에 저장이 가능하며, 나중에 이어서 진행할 수 있습니다.</li>
                <li>모든 섹션을 완료한 후에만 최종 평가 결과를 확인할 수 있습니다.</li>
                <li>제출 기한: {assessment.deadline}</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2">
            <Link href="/assessment/1/section/1">
              테스트 시작하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
