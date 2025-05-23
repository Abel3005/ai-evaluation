import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { userId: string } }) {
  const userId = params.userId

  // 실제 구현에서는 데이터베이스에서 사용자별 순위 정보를 조회합니다
  const userRankings = {
    overall: {
      rank: 5,
      totalScore: 85,
      completedAssessments: 3,
      averageScore: 82.3,
      percentile: 85, // 상위 15%
    },
    monthly: {
      rank: 2,
      totalScore: 85,
      completedAssessments: 2,
      averageScore: 82.3,
      percentile: 95, // 상위 5%
    },
    weekly: {
      rank: 1,
      totalScore: 85,
      completedAssessments: 1,
      averageScore: 82.3,
      percentile: 100, // 상위 0% (1위)
    },
  }

  const improvementSuggestions = [
    "더 많은 종합 평가를 완료하여 경험을 쌓으세요",
    "약점 영역을 집중적으로 학습하여 점수를 향상시키세요",
    "정기적으로 평가를 받아 꾸준한 성장을 보여주세요",
    "다른 사용자들의 우수 답변을 참고하여 학습하세요",
  ]

  return NextResponse.json({
    userId,
    rankings: userRankings,
    suggestions: improvementSuggestions,
  })
}
