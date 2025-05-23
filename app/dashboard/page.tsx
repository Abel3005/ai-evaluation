import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"

export default function DashboardPage() {
  // 실제 구현에서는 API를 통해 사용자 데이터를 가져옵니다
  const userData = {
    name: "사용자",
    completedAssessments: 2,
    totalAssessments: 5,
    overallScore: 78,
    categoryScores: [
      { category: "선택 (Selection)", score: 85 },
      { category: "입력 (Input)", score: 70 },
      { category: "출력 (Output)", score: 90 },
      { category: "효율 (Efficiency)", score: 65 },
      { category: "개선 (Improve)", score: 80 },
      { category: "추가 (Add)", score: 75 },
      { category: "제거 (Remove)", score: 80 },
    ],
    recentAssessments: [
      {
        id: 1,
        title: "기업 세금 최적화 AI 활용 종합 평가",
        score: 82,
        completedAt: "2025년 5월 22일",
      },
      {
        id: 2,
        title: "마케팅 콘텐츠 생성 AI 활용 종합 평가",
        score: 75,
        completedAt: "2025년 5월 15일",
      },
    ],
    radarData: [
      { subject: "선택", A: 85, fullMark: 100 },
      { subject: "입력", A: 70, fullMark: 100 },
      { subject: "출력", A: 90, fullMark: 100 },
      { subject: "효율", A: 65, fullMark: 100 },
      { subject: "개선", A: 80, fullMark: 100 },
      { subject: "추가", A: 75, fullMark: 100 },
      { subject: "제거", A: 80, fullMark: 100 },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold">내 대시보드</h1>
        <p className="text-gray-500">AI 활용 능력 평가 결과와 진행 상황을 확인하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>종합 점수</CardTitle>
          </CardHeader>
          <CardContent>
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
                    strokeDashoffset={350 - (350 * userData.overallScore) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <span className="absolute text-3xl font-bold">{userData.overallScore}</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">100점 만점</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>진행 상황</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="w-full space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>완료한 평가</span>
                    <span className="font-medium">
                      {userData.completedAssessments}/{userData.totalAssessments}
                    </span>
                  </div>
                  <Progress value={(userData.completedAssessments / userData.totalAssessments) * 100} className="h-2" />
                </div>
                <div className="flex justify-center">
                  <p className="text-sm text-gray-500">
                    {Math.round((userData.completedAssessments / userData.totalAssessments) * 100)}% 완료
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>다음 추천 평가</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between h-[calc(100%-32px)]">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">당신의 현재 점수를 기반으로 추천하는 다음 평가입니다.</p>
              <h3 className="font-medium">데이터 분석 AI 활용 종합 평가</h3>
              <Badge className="bg-amber-100 text-amber-800">효율 중점</Badge>
            </div>
            <Button asChild className="mt-4 w-full gap-2">
              <Link href="/assessment/3">
                평가 시작하기 <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>역량 분석</CardTitle>
            <CardDescription>각 평가 축별 점수를 확인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userData.radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar name="점수" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>세부 점수</CardTitle>
            <CardDescription>각 평가 축별 세부 점수와 강점/약점을 확인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.categoryScores.map((item, index) => (
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
          <CardFooter>
            <div className="w-full space-y-2">
              <Separator />
              <div className="space-y-1">
                <h3 className="text-sm font-medium">강점</h3>
                <p className="text-sm text-gray-500">출력 (Output) - LLM 응답의 오류를 잘 식별합니다.</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium">개선 필요</h3>
                <p className="text-sm text-gray-500">효율 (Efficiency) - 프롬프트 최적화 능력을 향상시키세요.</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 완료한 평가</CardTitle>
          <CardDescription>최근에 완료한 종합 평가와 결과를 확인하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userData.recentAssessments.map((assessment) => (
              <div key={assessment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <BarChart2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{assessment.title}</h3>
                    <span className="text-xs text-gray-500">{assessment.completedAt}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold">{assessment.score}</span>
                    <p className="text-xs text-gray-500">점수</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/assessment/${assessment.id}/result`}>결과 보기</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/assessment">새 평가 시작하기</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
