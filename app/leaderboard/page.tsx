import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Trophy, Medal, Award, TrendingUp, Users, Calendar, BarChart3, Crown, Star, Target } from "lucide-react"

export default function LeaderboardPage() {
  // 실제 구현에서는 API를 통해 데이터를 가져옵니다
  const leaderboardData = {
    overall: [
      {
        rank: 1,
        userId: "user_001",
        username: "AI마스터",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 94,
        completedAssessments: 8,
        averageScore: 91.5,
        lastActive: "2025-05-23",
        badges: ["🏆", "⭐", "🎯"],
        isCurrentUser: false,
      },
      {
        rank: 2,
        userId: "user_002",
        username: "프롬프트킹",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 92,
        completedAssessments: 6,
        averageScore: 89.3,
        lastActive: "2025-05-23",
        badges: ["🥈", "⭐"],
        isCurrentUser: false,
      },
      {
        rank: 3,
        userId: "user_003",
        username: "AI전문가",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 90,
        completedAssessments: 7,
        averageScore: 87.8,
        lastActive: "2025-05-22",
        badges: ["🥉", "🎯"],
        isCurrentUser: false,
      },
      {
        rank: 4,
        userId: "user_004",
        username: "데이터분석러",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 88,
        completedAssessments: 5,
        averageScore: 86.2,
        lastActive: "2025-05-22",
        badges: ["⭐"],
        isCurrentUser: false,
      },
      {
        rank: 5,
        userId: "user_005",
        username: "사용자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 85,
        completedAssessments: 3,
        averageScore: 82.3,
        lastActive: "2025-05-23",
        badges: ["🎯"],
        isCurrentUser: true,
      },
      {
        rank: 6,
        userId: "user_006",
        username: "AI학습자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 83,
        completedAssessments: 4,
        averageScore: 80.5,
        lastActive: "2025-05-21",
        badges: [],
        isCurrentUser: false,
      },
      {
        rank: 7,
        userId: "user_007",
        username: "프롬프터",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 81,
        completedAssessments: 3,
        averageScore: 79.7,
        lastActive: "2025-05-20",
        badges: [],
        isCurrentUser: false,
      },
      {
        rank: 8,
        userId: "user_008",
        username: "AI초보자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 78,
        completedAssessments: 2,
        averageScore: 76.5,
        lastActive: "2025-05-19",
        badges: [],
        isCurrentUser: false,
      },
      {
        rank: 9,
        userId: "user_009",
        username: "학습중",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 75,
        completedAssessments: 2,
        averageScore: 74.0,
        lastActive: "2025-05-18",
        badges: [],
        isCurrentUser: false,
      },
      {
        rank: 10,
        userId: "user_010",
        username: "신규사용자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 72,
        completedAssessments: 1,
        averageScore: 72.0,
        lastActive: "2025-05-17",
        badges: [],
        isCurrentUser: false,
      },
    ],
    monthly: [
      {
        rank: 1,
        userId: "user_002",
        username: "프롬프트킹",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 92,
        completedAssessments: 3,
        averageScore: 89.3,
        lastActive: "2025-05-23",
        badges: ["🏆", "⭐"],
        isCurrentUser: false,
      },
      {
        rank: 2,
        userId: "user_005",
        username: "사용자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 85,
        completedAssessments: 2,
        averageScore: 82.3,
        lastActive: "2025-05-23",
        badges: ["🥈", "🎯"],
        isCurrentUser: true,
      },
      {
        rank: 3,
        userId: "user_006",
        username: "AI학습자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 83,
        completedAssessments: 2,
        averageScore: 80.5,
        lastActive: "2025-05-21",
        badges: ["🥉"],
        isCurrentUser: false,
      },
    ],
    weekly: [
      {
        rank: 1,
        userId: "user_005",
        username: "사용자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 85,
        completedAssessments: 1,
        averageScore: 82.3,
        lastActive: "2025-05-23",
        badges: ["🏆", "🎯"],
        isCurrentUser: true,
      },
      {
        rank: 2,
        userId: "user_002",
        username: "프롬프트킹",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 92,
        completedAssessments: 1,
        averageScore: 89.3,
        lastActive: "2025-05-23",
        badges: ["🥈", "⭐"],
        isCurrentUser: false,
      },
      {
        rank: 3,
        userId: "user_006",
        username: "AI학습자",
        avatar: "/placeholder.svg?height=40&width=40",
        totalScore: 83,
        completedAssessments: 1,
        averageScore: 80.5,
        lastActive: "2025-05-21",
        badges: ["🥉"],
        isCurrentUser: false,
      },
    ],
  }

  const stats = {
    totalUsers: 1247,
    activeThisWeek: 89,
    averageScore: 78.5,
    totalAssessments: 3421,
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-sm font-medium text-gray-500">#{rank}</span>
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 text-yellow-800"
      case 2:
        return "bg-gray-100 text-gray-800"
      case 3:
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-amber-600"
    return "text-gray-600"
  }

  const renderLeaderboard = (data: typeof leaderboardData.overall) => (
    <div className="space-y-3">
      {data.map((user, index) => (
        <Card
          key={user.userId}
          className={`transition-all hover:shadow-md ${user.isCurrentUser ? "ring-2 ring-primary bg-primary/5" : ""}`}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12">
                  {user.rank <= 3 ? (
                    <div className={`p-2 rounded-full ${getRankBadgeColor(user.rank)}`}>{getRankIcon(user.rank)}</div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      <span className="text-sm font-medium text-gray-600">#{user.rank}</span>
                    </div>
                  )}
                </div>

                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.username} />
                  <AvatarFallback>{user.username.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-medium ${user.isCurrentUser ? "text-primary" : ""}`}>
                      {user.username}
                      {user.isCurrentUser && <span className="text-xs text-primary ml-1">(나)</span>}
                    </h3>
                    <div className="flex gap-1">
                      {user.badges.map((badge, idx) => (
                        <span key={idx} className="text-sm">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>평가 완료: {user.completedAssessments}회</span>
                    <span>평균: {user.averageScore}점</span>
                    <span>최근 활동: {user.lastActive}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className={`text-2xl font-bold ${getScoreColor(user.totalScore)}`}>{user.totalScore}</div>
                <div className="text-xs text-gray-500">최고 점수</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Trophy className="h-8 w-8 text-yellow-500" />
          리더보드
        </h1>
        <p className="text-gray-500">AI 활용 능력 평가에서 우수한 성과를 거둔 사용자들을 확인하세요.</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <Users className="h-4 w-4" />
              전체 사용자
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-gray-500">명</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              이번 주 활성 사용자
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.activeThisWeek}</div>
            <p className="text-xs text-gray-500">명</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              전체 평균 점수
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.averageScore}</div>
            <p className="text-xs text-gray-500">점</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <Target className="h-4 w-4" />총 평가 완료
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.totalAssessments.toLocaleString()}</div>
            <p className="text-xs text-gray-500">회</p>
          </CardContent>
        </Card>
      </div>

      {/* 상위 3명 하이라이트 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            이번 달 TOP 3
          </CardTitle>
          <CardDescription>이번 달 가장 우수한 성과를 거둔 사용자들입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leaderboardData.monthly.slice(0, 3).map((user, index) => (
              <div
                key={user.userId}
                className={`text-center p-6 rounded-lg border-2 ${
                  user.isCurrentUser ? "border-primary bg-primary/5" : "border-gray-200"
                } ${index === 0 ? "bg-gradient-to-b from-yellow-50 to-white" : ""}`}
              >
                <div className="flex justify-center mb-3">
                  {index === 0 && <Crown className="h-8 w-8 text-yellow-500" />}
                  {index === 1 && <Medal className="h-8 w-8 text-gray-400" />}
                  {index === 2 && <Award className="h-8 w-8 text-amber-600" />}
                </div>
                <Avatar className="h-16 w-16 mx-auto mb-3">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.username} />
                  <AvatarFallback className="text-lg">{user.username.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className={`font-bold mb-1 ${user.isCurrentUser ? "text-primary" : ""}`}>
                  {user.username}
                  {user.isCurrentUser && <span className="text-xs text-primary ml-1">(나)</span>}
                </h3>
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(user.totalScore)}`}>{user.totalScore}</div>
                <div className="text-sm text-gray-500">
                  평가 {user.completedAssessments}회 완료
                  <br />
                  평균 {user.averageScore}점
                </div>
                <div className="flex justify-center gap-1 mt-2">
                  {user.badges.map((badge, idx) => (
                    <span key={idx} className="text-lg">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 리더보드 탭 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            전체 순위
          </CardTitle>
          <CardDescription>기간별 사용자 순위를 확인하세요. (최고 점수 기준)</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overall" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overall" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                전체 기간
              </TabsTrigger>
              <TabsTrigger value="monthly" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                이번 달
              </TabsTrigger>
              <TabsTrigger value="weekly" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                이번 주
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overall" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">전체 기간 순위</h3>
                <Badge variant="outline">총 {leaderboardData.overall.length}명</Badge>
              </div>
              {renderLeaderboard(leaderboardData.overall)}
            </TabsContent>

            <TabsContent value="monthly" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">이번 달 순위</h3>
                <Badge variant="outline">총 {leaderboardData.monthly.length}명</Badge>
              </div>
              {renderLeaderboard(leaderboardData.monthly)}
            </TabsContent>

            <TabsContent value="weekly" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">이번 주 순위</h3>
                <Badge variant="outline">총 {leaderboardData.weekly.length}명</Badge>
              </div>
              {renderLeaderboard(leaderboardData.weekly)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 내 순위 요약 */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />내 순위 요약
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5위</div>
              <div className="text-sm text-gray-600">전체 기간</div>
              <Progress value={85} className="mt-2" />
              <div className="text-xs text-gray-500 mt-1">85점 (최고 점수)</div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">2위</div>
              <div className="text-sm text-gray-600">이번 달</div>
              <Progress value={85} className="mt-2" />
              <div className="text-xs text-gray-500 mt-1">2회 평가 완료</div>
            </div>

            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">1위</div>
              <div className="text-sm text-gray-600">이번 주</div>
              <Progress value={85} className="mt-2" />
              <div className="text-xs text-gray-500 mt-1">1회 평가 완료</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">🎯 순위 향상 팁</h4>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• 더 많은 종합 평가를 완료하여 경험을 쌓으세요</li>
              <li>• 약점 영역을 집중적으로 학습하여 점수를 향상시키세요</li>
              <li>• 정기적으로 평가를 받아 꾸준한 성장을 보여주세요</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
