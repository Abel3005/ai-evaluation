import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Clock,
  FileText,
  BarChart2,
  Zap,
  AlertCircle,
  Play,
  Save,
  Eye,
  Target,
  Users,
  Award,
} from "lucide-react"

export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold">AI 활용 능력 평가 시스템 이용 가이드</h1>
        <p className="text-gray-500">AI 활용 능력을 종합적으로 평가하고 개선하는 방법을 안내합니다.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="assessment">종합 평가</TabsTrigger>
          <TabsTrigger value="categories">평가 영역</TabsTrigger>
          <TabsTrigger value="process">진행 방법</TabsTrigger>
          <TabsTrigger value="scoring">채점 기준</TabsTrigger>
          <TabsTrigger value="tips">활용 팁</TabsTrigger>
        </TabsList>

        {/* 개요 탭 */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI 활용 능력 평가 시스템이란?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                AI 활용 능력 평가 시스템은 사용자의 생성형 AI 활용 생산성 역량을 종합적으로 평가하는 웹 기반
                서비스입니다. 실제 업무 환경과 유사한 시나리오를 통해 AI 모델 선택부터 결과 검증까지 전 과정의 역량을
                평가합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium text-blue-900">평가 목적</h3>
                  </div>
                  <p className="text-sm text-blue-700">AI 활용 역량을 객관적으로 측정하고 개선점을 제시합니다.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <h3 className="font-medium text-green-900">대상 사용자</h3>
                  </div>
                  <p className="text-sm text-green-700">AI를 업무에 활용하고자 하는 모든 직장인과 학습자입니다.</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    <h3 className="font-medium text-purple-900">평가 결과</h3>
                  </div>
                  <p className="text-sm text-purple-700">종합 점수와 영역별 세부 점수, 개선 방향을 제공합니다.</p>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>중요:</strong> 이 시스템은 개별 과제가 아닌 <strong>종합 평가</strong> 방식으로 운영됩니다.
                  하나의 복합적인 시나리오를 통해 여러 AI 활용 역량을 동시에 평가합니다.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>시스템 특징</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium">✨ 주요 특징</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>실제 업무 환경과 유사한 종합 시나리오 제공</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>7가지 핵심 AI 활용 역량을 종합적으로 평가</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>섹션별 순차 진행 및 중간 저장 기능</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>상세한 피드백과 개선 방향 제시</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium">🎯 평가 방식</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>하나의 종합 시나리오를 여러 섹션으로 분할</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>각 섹션은 서로 연관된 과제로 구성</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>섹션별 독립적인 제출 및 평가</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>최종 종합 점수 및 영역별 세부 분석</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 종합 평가 탭 */}
        <TabsContent value="assessment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                종합 평가 구조
              </CardTitle>
              <CardDescription>하나의 복합적인 시나리오를 통해 AI 활용의 전 과정을 평가합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">📋 현재 제공 중인 종합 평가</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-blue-900">기업 세금 최적화 AI 활용 종합 평가</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      중견 제조업체 '한빛테크'의 R&D 세액공제 최적화 전략을 AI로 도출하는 종합 과제
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline">5개 섹션</Badge>
                      <Badge variant="outline">45분 소요</Badge>
                      <Badge variant="outline">중간 난이도</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">🔄 종합 평가 진행 과정</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-sm">1. 시나리오 확인</h4>
                    <p className="text-xs text-gray-500 mt-1">기업 상황과 목표 이해</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Play className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-medium text-sm">2. 섹션별 진행</h4>
                    <p className="text-xs text-gray-500 mt-1">순차적으로 과제 해결</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Save className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-sm">3. 중간 저장</h4>
                    <p className="text-xs text-gray-500 mt-1">언제든 저장 후 재개</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="font-medium text-sm">4. 섹션 완료</h4>
                    <p className="text-xs text-gray-500 mt-1">각 섹션별 제출</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-rose-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <BarChart2 className="h-6 w-6 text-rose-600" />
                    </div>
                    <h4 className="font-medium text-sm">5. 종합 결과</h4>
                    <p className="text-xs text-gray-500 mt-1">전체 평가 및 피드백</p>
                  </div>
                </div>
              </div>

              <Alert>
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  종합 평가는 <strong>순차적으로 진행</strong>됩니다. 이전 섹션의 결과가 다음 섹션에 영향을 줄 수
                  있으므로, 순서대로 완료하는 것이 중요합니다.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>섹션 구성 예시</CardTitle>
              <CardDescription>기업 세금 최적화 종합 평가의 5개 섹션</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "모델 선택",
                    category: "Selection",
                    description: "세금 법령 분석에 가장 적합한 AI 모델 선택",
                    color: "bg-blue-100 text-blue-800",
                  },
                  {
                    id: 2,
                    title: "정보 추출",
                    category: "Input",
                    description: "세금 법령 문서에서 핵심 정보 추출",
                    color: "bg-green-100 text-green-800",
                  },
                  {
                    id: 3,
                    title: "오류 검증",
                    category: "Output",
                    description: "AI 응답의 오류 식별 및 수정",
                    color: "bg-purple-100 text-purple-800",
                  },
                  {
                    id: 4,
                    title: "프롬프트 최적화",
                    category: "Efficiency",
                    description: "효율적인 프롬프트 작성",
                    color: "bg-amber-100 text-amber-800",
                  },
                  {
                    id: 5,
                    title: "프롬프트 개선",
                    category: "Improve",
                    description: "기존 프롬프트 개선 및 분석",
                    color: "bg-rose-100 text-rose-800",
                  },
                ].map((section) => (
                  <div key={section.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                          {section.id}
                        </div>
                        <div>
                          <h4 className="font-medium">{section.title}</h4>
                          <p className="text-sm text-gray-500">{section.description}</p>
                        </div>
                      </div>
                      <Badge className={section.color}>{section.category}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 평가 영역 탭 */}
        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                7가지 AI 활용 역량 평가 영역
              </CardTitle>
              <CardDescription>각 영역별 평가 내용과 중요성을 확인하세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    category: "Selection",
                    title: "선택 (모델 결정)",
                    icon: <Brain className="h-5 w-5" />,
                    color: "bg-blue-100 text-blue-800 border-blue-200",
                    description: "주어진 시나리오에 가장 적합한 LLM 모델을 결정하는 능력",
                    details: ["모델별 특성과 강점 이해", "업무 요구사항에 맞는 모델 선택", "선택 근거의 논리적 설명"],
                    weight: "20%",
                  },
                  {
                    category: "Input",
                    title: "입력 (정보 획득)",
                    icon: <FileText className="h-5 w-5" />,
                    color: "bg-green-100 text-green-800 border-green-200",
                    description: "LLM을 활용해 특정 정보를 정확히 획득하는 능력",
                    details: ["효과적인 프롬프트 작성", "원하는 정보의 정확한 추출", "출처 및 근거 명시"],
                    weight: "20%",
                  },
                  {
                    category: "Output",
                    title: "출력 (오류 검증)",
                    icon: <CheckCircle className="h-5 w-5" />,
                    color: "bg-purple-100 text-purple-800 border-purple-200",
                    description: "LLM의 응답 중 허위·오류 정보를 판별하는 능력",
                    details: ["AI 응답의 사실 확인", "오류 및 허위 정보 식별", "올바른 정보로 수정"],
                    weight: "15%",
                  },
                  {
                    category: "Efficiency",
                    title: "효율 (최적화)",
                    icon: <Zap className="h-5 w-5" />,
                    color: "bg-amber-100 text-amber-800 border-amber-200",
                    description: "동일한 결과를 더 적은 토큰으로, 더 빠르게 얻어내는 능력",
                    details: ["프롬프트 길이 최적화", "불필요한 표현 제거", "핵심 요구사항 유지"],
                    weight: "15%",
                  },
                  {
                    category: "Improve",
                    title: "개선 (리팩토링)",
                    icon: <BarChart2 className="h-5 w-5" />,
                    color: "bg-rose-100 text-rose-800 border-rose-200",
                    description: "기존 프롬프트를 리팩토링하거나 재구성해 답변 품질을 높이는 능력",
                    details: ["기존 프롬프트 문제점 분석", "개선된 프롬프트 작성", "품질 향상 효과 검증"],
                    weight: "10%",
                  },
                  {
                    category: "Add",
                    title: "추가 (요소 보강)",
                    icon: <FileText className="h-5 w-5" />,
                    color: "bg-teal-100 text-teal-800 border-teal-200",
                    description: "과제에 필요한 문장·조건을 정확히 덧붙이는 능력",
                    details: ["누락된 요구사항 식별", "필요한 조건 추가", "맥락에 맞는 보강"],
                    weight: "10%",
                  },
                  {
                    category: "Remove",
                    title: "제거 (요소 정제)",
                    icon: <CheckCircle className="h-5 w-5" />,
                    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
                    description: "불필요하거나 모호한 요소를 걸러내는 능력",
                    details: ["불필요한 요소 식별", "모호한 표현 제거", "핵심 내용 집중"],
                    weight: "10%",
                  },
                ].map((item, index) => (
                  <Card key={index} className={`border-2 ${item.color.split(" ")[2]}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-full ${item.color.split(" ")[0]} ${item.color.split(" ")[1]}`}>
                            {item.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <Badge variant="outline" className="mt-1">
                              {item.weight}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">평가 요소:</h4>
                        <ul className="text-sm space-y-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 진행 방법 탭 */}
        <TabsContent value="process" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                종합 평가 진행 방법
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium text-blue-900 mb-2">1️⃣ 평가 시작하기</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 메인 페이지에서 "종합 평가 시작하기" 버튼 클릭</li>
                    <li>• 또는 상단 메뉴의 "종합 평가" 페이지에서 원하는 평가 선택</li>
                    <li>• 평가 개요와 예상 소요 시간을 확인 후 시작</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-medium text-green-900 mb-2">2️⃣ 시나리오 이해하기</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 기업 배경 정보와 목표를 꼼꼼히 읽어보세요</li>
                    <li>• 제약 조건과 요구사항을 파악하세요</li>
                    <li>• 전체 과제의 맥락을 이해하는 것이 중요합니다</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-medium text-purple-900 mb-2">3️⃣ 섹션별 진행하기</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 각 섹션은 "과제 설명"과 "제출" 탭으로 구성됩니다</li>
                    <li>• 과제 설명을 먼저 읽고 요구사항을 파악하세요</li>
                    <li>• 제출 탭에서 답변을 작성하고 제출하세요</li>
                    <li>• 임시 저장 기능을 활용해 중간에 저장할 수 있습니다</li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-medium text-amber-900 mb-2">4️⃣ 답변 작성 요령</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 각 섹션의 평가 기준을 참고하여 답변하세요</li>
                    <li>• 구체적이고 논리적인 근거를 제시하세요</li>
                    <li>• 글자 수나 토큰 수 제한이 있는 경우 준수하세요</li>
                    <li>• 실제 업무 상황이라고 가정하고 진지하게 접근하세요</li>
                  </ul>
                </div>

                <div className="border-l-4 border-rose-500 pl-4">
                  <h3 className="font-medium text-rose-900 mb-2">5️⃣ 결과 확인하기</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 모든 섹션 완료 후 종합 평가 결과를 확인하세요</li>
                    <li>• 영역별 세부 점수와 피드백을 검토하세요</li>
                    <li>• 강점과 개선점을 파악하여 향후 학습에 활용하세요</li>
                    <li>• 대시보드에서 진행 상황과 성과를 추적하세요</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <Save className="h-4 w-4" />
                <AlertDescription>
                  <strong>중간 저장 기능:</strong> 각 섹션에서 "임시 저장" 버튼을 클릭하면 작성 중인 답변이 저장됩니다.
                  나중에 다시 접속해도 저장된 내용을 불러올 수 있습니다.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>섹션 네비게이션</CardTitle>
              <CardDescription>섹션 간 이동과 진행 상황 확인 방법</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">🧭 진행 상황 표시</h4>
                <p className="text-sm text-gray-600 mb-3">
                  각 평가 페이지 상단에서 현재 진행 상황을 확인할 수 있습니다.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">✓ 섹션 1 (완료)</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">섹션 2 (현재)</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">섹션 3</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">섹션 4</span>
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">섹션 5</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">✅ 섹션 완료 후</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 제출 확인 화면이 표시됩니다</li>
                    <li>• "다음 섹션으로" 버튼으로 진행합니다</li>
                    <li>• 완료된 섹션은 언제든 다시 볼 수 있습니다</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">🔄 섹션 간 이동</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 진행 상황 표시에서 섹션을 클릭하여 이동</li>
                    <li>• 이전/다음 섹션 버튼 활용</li>
                    <li>• 완료되지 않은 섹션은 제한적 접근</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 채점 기준 탭 */}
        <TabsContent value="scoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                채점 기준 및 점수 체계
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">📊 종합 점수 산출 방식</h3>
                <p className="text-sm text-blue-700 mb-3">
                  각 영역별 점수에 가중치를 적용하여 종합 점수(100점 만점)를 계산합니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-medium">Selection</div>
                    <div className="text-blue-600">20%</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-medium">Input</div>
                    <div className="text-blue-600">20%</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-medium">Output</div>
                    <div className="text-blue-600">15%</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-medium">Efficiency</div>
                    <div className="text-blue-600">15%</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm mt-2">
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-medium">Improve</div>
                    <div className="text-blue-600">10%</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-medium">Add</div>
                    <div className="text-blue-600">10%</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="font-medium">Remove</div>
                    <div className="text-blue-600">10%</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">🎯 점수 등급 기준</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {[
                    {
                      grade: "우수",
                      range: "90-100점",
                      color: "bg-green-100 text-green-800",
                      desc: "탁월한 AI 활용 능력",
                    },
                    {
                      grade: "양호",
                      range: "80-89점",
                      color: "bg-blue-100 text-blue-800",
                      desc: "우수한 AI 활용 능력",
                    },
                    {
                      grade: "보통",
                      range: "70-79점",
                      color: "bg-yellow-100 text-yellow-800",
                      desc: "기본적인 AI 활용 능력",
                    },
                    {
                      grade: "미흡",
                      range: "60-69점",
                      color: "bg-orange-100 text-orange-800",
                      desc: "개선이 필요한 수준",
                    },
                    {
                      grade: "불량",
                      range: "0-59점",
                      color: "bg-red-100 text-red-800",
                      desc: "추가 학습이 필요한 수준",
                    },
                  ].map((item, index) => (
                    <div key={index} className={`p-3 rounded-lg ${item.color}`}>
                      <div className="font-medium">{item.grade}</div>
                      <div className="text-sm">{item.range}</div>
                      <div className="text-xs mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">📋 세부 평가 기준</h3>
                <div className="space-y-3">
                  {[
                    {
                      category: "Selection (모델 선택)",
                      criteria: [
                        "모델 선택의 적절성 (50%)",
                        "선택 이유의 명확성과 논리성 (30%)",
                        "설명의 간결성 (20%)",
                      ],
                    },
                    {
                      category: "Input (정보 획득)",
                      criteria: [
                        "정보 추출의 정확성 (40%)",
                        "정보의 완전성 (30%)",
                        "표 형식의 명확성 (20%)",
                        "출처 명시의 정확성 (10%)",
                      ],
                    },
                    {
                      category: "Output (오류 검증)",
                      criteria: ["오류 검출의 정확성 (40%)", "오류 설명의 명확성 (30%)", "수정 정보의 정확성 (30%)"],
                    },
                    {
                      category: "Efficiency (최적화)",
                      criteria: ["토큰 효율성 (50%)", "결과의 동등성 (40%)", "명확성 유지 (10%)"],
                    },
                    {
                      category: "Improve (개선)",
                      criteria: [
                        "프롬프트 개선의 효과성 (40%)",
                        "문제점 분석의 정확성 (30%)",
                        "개선된 프롬프트의 명확성 (30%)",
                      ],
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">{item.category}</h4>
                      <ul className="text-sm space-y-1">
                        {item.criteria.map((criterion, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            <span>{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 활용 팁 탭 */}
        <TabsContent value="tips" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                효과적인 평가 활용 팁
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-green-700">✅ 평가 전 준비사항</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>충분한 시간을 확보하세요 (평균 45분 소요)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>안정적인 인터넷 환경에서 진행하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>AI 모델들의 기본 특성을 미리 학습하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>프롬프트 작성 기본 원칙을 숙지하세요</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-blue-700">💡 답변 작성 요령</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>구체적이고 논리적인 근거를 제시하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>글자 수나 토큰 수 제한을 준수하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>실제 업무 상황이라고 가정하고 진지하게 접근하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>각 섹션의 평가 기준을 참고하여 답변하세요</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-medium text-amber-900 mb-3">⚡ 고득점을 위한 전략</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Selection 영역</h4>
                    <ul className="space-y-1">
                      <li>• 모델별 특성과 강점을 명확히 구분</li>
                      <li>• 업무 요구사항과 모델 특성의 연관성 설명</li>
                      <li>• 간결하면서도 논리적인 근거 제시</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Input 영역</h4>
                    <ul className="space-y-1">
                      <li>• 정확한 정보 추출과 완전성 확보</li>
                      <li>• 명확한 표 형식으로 정리</li>
                      <li>• 출처와 근거를 정확히 명시</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Output 영역</h4>
                    <ul className="space-y-1">
                      <li>• 모든 오류를 빠짐없이 식별</li>
                      <li>• 오류의 원인과 문제점을 명확히 설명</li>
                      <li>• 정확한 정보로 체계적으로 수정</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Efficiency 영역</h4>
                    <ul className="space-y-1">
                      <li>• 핵심 키워드만 유지하여 간결화</li>
                      <li>• 불필요한 수식어와 중복 표현 제거</li>
                      <li>• 원본과 동일한 결과 보장</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">🔄 결과 활용 방법</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Eye className="h-4 w-4 text-purple-500" />
                      결과 분석
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• 영역별 세부 점수 확인</li>
                      <li>• 강점과 약점 파악</li>
                      <li>• 피드백 내용 숙지</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-green-500" />
                      개선 계획
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• 약점 영역 집중 학습</li>
                      <li>• 관련 자료 및 교육 수강</li>
                      <li>• 실습을 통한 역량 강화</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <BarChart2 className="h-4 w-4 text-blue-500" />
                      진행 추적
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• 정기적인 재평가 실시</li>
                      <li>• 점수 변화 추이 확인</li>
                      <li>• 목표 달성도 점검</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>추천:</strong> 첫 번째 평가 후에는 약점 영역을 집중적으로 학습한 뒤, 1-2주 후에 다시 평가를
                  받아보세요. 개선 효과를 명확히 확인할 수 있습니다.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>자주 묻는 질문 (FAQ)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    q: "평가를 중간에 중단했다가 나중에 이어서 할 수 있나요?",
                    a: "네, 가능합니다. 각 섹션에서 '임시 저장' 기능을 사용하면 작성 중인 답변이 저장되며, 나중에 다시 접속해도 저장된 내용을 불러올 수 있습니다.",
                  },
                  {
                    q: "한 번 제출한 답변을 수정할 수 있나요?",
                    a: "섹션별로 제출한 후에는 해당 섹션의 답변을 수정할 수 없습니다. 단, 완료된 섹션을 다시 보거나 다음 섹션으로 진행하는 것은 가능합니다.",
                  },
                  {
                    q: "평가 결과는 언제까지 확인할 수 있나요?",
                    a: "평가 결과는 계정에 영구적으로 저장되며, 대시보드에서 언제든지 확인할 수 있습니다. 과거 평가 결과와 비교하여 성장 추이도 확인 가능합니다.",
                  },
                  {
                    q: "같은 평가를 여러 번 받을 수 있나요?",
                    a: "네, 동일한 평가를 여러 번 받을 수 있습니다. 학습 후 재평가를 통해 실력 향상을 확인하는 것을 권장합니다.",
                  },
                  {
                    q: "평가 결과가 다른 사용자에게 공개되나요?",
                    a: "개인의 평가 결과는 비공개이며, 본인만 확인할 수 있습니다. 리더보드에는 익명화된 순위 정보만 표시됩니다.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b pb-3">
                    <h4 className="font-medium mb-1">Q. {item.q}</h4>
                    <p className="text-sm text-gray-600">A. {item.a}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 시작하기 버튼 */}
      <div className="flex justify-center mt-8">
        <Button asChild size="lg" className="gap-2">
          <Link href="/tasks">
            지금 종합 평가 시작하기 <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
