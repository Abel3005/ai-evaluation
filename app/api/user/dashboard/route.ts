import { NextResponse } from "next/server"

// 샘플 사용자 데이터 (실제 구현에서는 데이터베이스에서 가져옵니다)
const userData = {
  name: "사용자",
  completedTasks: 3,
  totalTasks: 15,
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
  recentTasks: [
    {
      id: 1,
      title: "기업 연봉 협상 자동 요약 모델 선택",
      category: "selection",
      score: 85,
      completedAt: "2025년 5월 22일",
    },
    {
      id: 2,
      title: "세금 법령 정보 추출",
      category: "input",
      score: 70,
      completedAt: "2025년 5월 20일",
    },
    {
      id: 3,
      title: "LLM 응답 오류 검출",
      category: "output",
      score: 90,
      completedAt: "2025년 5월 18일",
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

export async function GET() {
  return NextResponse.json({ userData })
}
