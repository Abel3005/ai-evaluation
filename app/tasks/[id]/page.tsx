import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock } from "lucide-react"
import TaskSubmissionForm from "@/components/task-submission-form"

interface TaskPageProps {
  params: {
    id: string
  }
}

export default function TaskPage({ params }: TaskPageProps) {
  const taskId = Number.parseInt(params.id)

  // 실제 구현에서는 API를 통해 과제 정보를 가져옵니다
  const task = {
    id: taskId,
    title: "기업 연봉 협상 자동 요약 모델 선택",
    description:
      "기업 연봉 협상 자동 요약에는 'GPT-4o'와 'Claude-3' 중 어느 모델이 더 적합한가? 이유를 100자 이내로 설명하라.",
    category: "selection",
    difficulty: "중간",
    estimatedTime: "10분",
    instructions: `
      # 과제 설명
      
      기업 연봉 협상 과정에서 발생하는 대화를 자동으로 요약하는 AI 시스템을 구축하려고 합니다.
      이 시스템은 협상 과정에서 언급된 주요 금액, 조건, 합의점 등을 정확하게 추출하여 요약해야 합니다.
      
      # 요구사항
      
      1. 'GPT-4o'와 'Claude-3' 중 어느 모델이 이 작업에 더 적합한지 결정하세요.
      2. 선택한 이유를 100자 이내로 간결하게 설명하세요.
      3. 모델의 특성, 강점, 약점을 고려하여 판단하세요.
      
      # 평가 기준
      
      - 모델 선택의 적절성 (50%)
      - 선택 이유의 명확성과 논리성 (30%)
      - 설명의 간결성 (20%)
    `,
    deadline: "2025년 5월 30일 23:59",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href="/tasks">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">{task.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>과제 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">카테고리</h3>
                <Badge className="mt-1 bg-blue-100 text-blue-800">선택 (Selection)</Badge>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">난이도</h3>
                <Badge className="mt-1 bg-amber-100 text-amber-800">{task.difficulty}</Badge>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">예상 소요 시간</h3>
                <p className="flex items-center gap-1 mt-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  {task.estimatedTime}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">제출 기한</h3>
                <p className="mt-1 text-sm">{task.deadline}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="instructions">
            <TabsList className="mb-4">
              <TabsTrigger value="instructions">과제 설명</TabsTrigger>
              <TabsTrigger value="submission">제출</TabsTrigger>
            </TabsList>
            <TabsContent value="instructions">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: task.instructions.replace(/\n/g, "<br />") }} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="submission">
              <TaskSubmissionForm taskId={taskId} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
