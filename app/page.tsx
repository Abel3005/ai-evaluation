import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart2, Brain, CheckCircle, FileText, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center space-y-8 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">AI 활용 능력 평가 시스템</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            당신의 생성형 AI 활용 생산성 역량을 종합적으로 평가하고 개선하세요
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/tasks">
              종합 평가 시작하기 <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/dashboard">내 평가 결과 보기</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="md:col-span-2">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>종합 AI 활용 능력 평가</CardTitle>
            </div>
            <CardDescription>하나의 종합 테스트를 통해 AI 활용의 모든 핵심 역량을 동시에 평가합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              실제 업무 환경과 유사한 복합적인 과제를 해결하면서 AI 모델 선택, 정보 추출, 오류 검증, 프롬프트 최적화 등
              다양한 AI 활용 역량을 종합적으로 평가받을 수 있습니다. 각 영역별 세부 점수와 개선 방향을 제공합니다.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>평가 영역</CardTitle>
            </div>
            <CardDescription>종합 테스트에서 평가하는 7가지 핵심 역량</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                  <Brain className="h-4 w-4 text-blue-800" />
                </div>
                <div>
                  <span className="font-medium">선택 (Selection)</span>
                  <p className="text-sm text-gray-500">주어진 시나리오에 가장 적합한 LLM 모델을 결정하는 능력</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <FileText className="h-4 w-4 text-green-800" />
                </div>
                <div>
                  <span className="font-medium">입력 (Input)</span>
                  <p className="text-sm text-gray-500">LLM을 활용해 특정 정보를 정확히 획득하는 능력</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4 text-purple-800" />
                </div>
                <div>
                  <span className="font-medium">출력 (Output)</span>
                  <p className="text-sm text-gray-500">LLM의 응답 중 허위·오류 정보를 판별하는 능력</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                  <Zap className="h-4 w-4 text-amber-800" />
                </div>
                <div>
                  <span className="font-medium">효율 (Efficiency)</span>
                  <p className="text-sm text-gray-500">동일한 결과를 더 적은 토큰으로, 더 빠르게 얻어내는 능력</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-primary" />
              <CardTitle>추가 평가 영역</CardTitle>
            </div>
            <CardDescription>종합 테스트에서 평가하는 추가 역량</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="bg-rose-100 p-1 rounded-full mt-0.5">
                  <BarChart2 className="h-4 w-4 text-rose-800" />
                </div>
                <div>
                  <span className="font-medium">개선 (Improve)</span>
                  <p className="text-sm text-gray-500">
                    기존 프롬프트를 리팩토링하거나 재구성해 답변 품질을 높이는 능력
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-teal-100 p-1 rounded-full mt-0.5">
                  <FileText className="h-4 w-4 text-teal-800" />
                </div>
                <div>
                  <span className="font-medium">추가 (Add)</span>
                  <p className="text-sm text-gray-500">과제에 필요한 문장·조건을 정확히 덧붙이는 능력</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-indigo-100 p-1 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4 text-indigo-800" />
                </div>
                <div>
                  <span className="font-medium">제거 (Remove)</span>
                  <p className="text-sm text-gray-500">불필요하거나 모호한 요소를 걸러내는 능력</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">평가 프로세스</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">1. 종합 과제 수령</h3>
            <p className="text-sm text-gray-500 mt-1">실제 업무 환경과 유사한 복합적인 과제를 제시받습니다</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">2. 단계별 해결</h3>
            <p className="text-sm text-gray-500 mt-1">과제의 여러 단계를 순차적으로 해결합니다</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">3. 결과 제출</h3>
            <p className="text-sm text-gray-500 mt-1">작성한 프롬프트와 결과를 제출합니다</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <BarChart2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">4. 종합 평가</h3>
            <p className="text-sm text-gray-500 mt-1">각 영역별 점수와 종합 역량 평가를 받습니다</p>
          </div>
        </div>
      </div>
    </div>
  )
}
