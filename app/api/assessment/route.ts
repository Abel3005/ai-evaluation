import { NextResponse } from "next/server"

// 샘플 종합 평가 데이터
const assessments = [
  {
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
        category: "selection",
      },
      {
        id: 2,
        title: "정보 추출",
        description: "세금 법령 문서에서 핵심 정보 추출",
        category: "input",
      },
      {
        id: 3,
        title: "오류 검증",
        description: "AI 응답의 오류 식별 및 수정",
        category: "output",
      },
      {
        id: 4,
        title: "프롬프트 최적화",
        description: "효율적인 프롬프트 작성",
        category: "efficiency",
      },
      {
        id: 5,
        title: "프롬프트 개선",
        description: "기존 프롬프트 개선 및 분석",
        category: "improve",
      },
    ],
  },
  // 다른 평가들...
]

export async function GET() {
  return NextResponse.json({ assessments })
}
