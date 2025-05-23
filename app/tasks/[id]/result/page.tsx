import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Home, ListChecks } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface ResultPageProps {
  params: {
    id: string
  }
}

export default function ResultPage({ params }: ResultPageProps) {
  const taskId = Number.parseInt(params.id)

  // 실제 구현에서는 API를 통해 결과 정보를 가져옵니다
  const result = {
    taskId,
    taskTitle: "기업 연봉 협상 자동 요약 모델 선택",
    category: "selection",
    userAnswer: {
      selectedModel: "gpt-4o",
      explanation:
        "GPT-4o는 복잡한 협상 맥락 이해와 핵심 금액/조건 추출에 더 뛰어나며, 금융 데이터 처리 정확도가 더 높습니다.",
    },
    evaluation: {
      score: 85,
      modelSelectionScore: 90,
      reasoningScore: 80,
      conciseScore: 85,
      feedback:
        "모델 선택은 적절했으며, 금융 데이터 처리 정확도를 언급한 점이 좋았습니다. 다만, 구체적인 예시나 벤치마크 결과를 추가했다면 더 설득력 있었을 것입니다.",
      correctAnswer: {
        model: "gpt-4o",
        explanation:
          "GPT-4o는 복잡한 협상 맥락 이해, 금융 데이터 정확도, 핵심 조건 추출에 더 뛰어나며 Claude-3보다 연봉 협상 특화 벤치마크에서 15% 높은 성능을 보입니다.",
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/tasks/${taskId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">평가 결과</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                      strokeDashoffset={350 - (350 * result.evaluation.score) / 100}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="56"
                      cx="64"
                      cy="64"
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold">{result.evaluation.score}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">100점 만점</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>모델 선택 적절성</span>
                    <span className="font-medium">{result.evaluation.modelSelectionScore}%</span>
                  </div>
                  <Progress value={result.evaluation.modelSelectionScore} className="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>선택 이유의 명확성</span>
                    <span className="font-medium">{result.evaluation.reasoningScore}%</span>
                  </div>
                  <Progress value={result.evaluation.reasoningScore} className="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>설명의 간결성</span>
                    <span className="font-medium">{result.evaluation.conciseScore}%</span>
                  </div>
                  <Progress value={result.evaluation.conciseScore} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-2">
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="/tasks">
                  <ListChecks className="h-4 w-4" />
                  다른 과제 보기
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
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{result.taskTitle}</CardTitle>
                <Badge className="bg-blue-100 text-blue-800">선택 (Selection)</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">내 답변</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-medium mb-2">선택한 모델: {result.userAnswer.selectedModel}</p>
                    <p>{result.userAnswer.explanation}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">모범 답안</h3>
                  <div className="bg-green-50 p-4 rounded-md">
                    <p className="font-medium mb-2">선택한 모델: {result.evaluation.correctAnswer.model}</p>
                    <p>{result.evaluation.correctAnswer.explanation}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">피드백</h3>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p>{result.evaluation.feedback}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">개선 포인트</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>구체적인 벤치마크 결과나 성능 수치를 포함하면 더 설득력 있는 답변이 됩니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>두 모델의 차이점을 더 명확하게 대조하여 설명하면 좋습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>연봉 협상 맥락에 특화된 기능이나 특성을 더 구체적으로 언급하면 좋습니다.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
