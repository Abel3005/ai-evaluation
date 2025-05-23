import { NextResponse } from "next/server"

// 샘플 리더보드 데이터
const generateLeaderboardData = () => {
  const users = [
    { username: "AI마스터", totalScore: 94, completedAssessments: 8, averageScore: 91.5 },
    { username: "프롬프트킹", totalScore: 92, completedAssessments: 6, averageScore: 89.3 },
    { username: "AI전문가", totalScore: 90, completedAssessments: 7, averageScore: 87.8 },
    { username: "데이터분석러", totalScore: 88, completedAssessments: 5, averageScore: 86.2 },
    { username: "사용자", totalScore: 85, completedAssessments: 3, averageScore: 82.3 },
    { username: "AI학습자", totalScore: 83, completedAssessments: 4, averageScore: 80.5 },
    { username: "프롬프터", totalScore: 81, completedAssessments: 3, averageScore: 79.7 },
    { username: "AI초보자", totalScore: 78, completedAssessments: 2, averageScore: 76.5 },
    { username: "학습중", totalScore: 75, completedAssessments: 2, averageScore: 74.0 },
    { username: "신규사용자", totalScore: 72, completedAssessments: 1, averageScore: 72.0 },
  ]

  return users.map((user, index) => ({
    rank: index + 1,
    userId: `user_${String(index + 1).padStart(3, "0")}`,
    username: user.username,
    avatar: `/placeholder.svg?height=40&width=40`,
    totalScore: user.totalScore,
    completedAssessments: user.completedAssessments,
    averageScore: user.averageScore,
    lastActive: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    badges: getBadges(user.totalScore, user.completedAssessments),
    isCurrentUser: user.username === "사용자",
  }))
}

function getBadges(score: number, assessments: number) {
  const badges = []
  if (score >= 90) badges.push("🏆")
  if (score >= 85) badges.push("⭐")
  if (assessments >= 5) badges.push("🎯")
  return badges
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const period = searchParams.get("period") || "overall"

  const leaderboardData = generateLeaderboardData()

  // 기간별 필터링 (실제 구현에서는 데이터베이스에서 기간별로 조회)
  let filteredData = leaderboardData
  if (period === "monthly") {
    // 이번 달 데이터만 (예시로 상위 몇 명만)
    filteredData = leaderboardData.slice(0, 5)
  } else if (period === "weekly") {
    // 이번 주 데이터만 (예시로 상위 몇 명만)
    filteredData = leaderboardData.slice(0, 3)
  }

  const stats = {
    totalUsers: 1247,
    activeThisWeek: 89,
    averageScore: 78.5,
    totalAssessments: 3421,
  }

  return NextResponse.json({
    leaderboard: filteredData,
    stats,
    period,
  })
}
