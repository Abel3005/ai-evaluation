import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const assessmentId = Number.parseInt(params.id)

  // 실제 구현에서는 데이터베이스에서 평가 결과를 가져옵니다
  // 여기서는 간단한 예시로 하드코딩된 데이터를 반환합니다
  const result = {
    assessmentId,
    title: "기업 세금 최적화 AI 활용 종합 평가",
    overallScore: 82,
    categoryScores: [
      { category: "선택 (Selection)", score: 90, weight: 0.2 },
      { category: "입력 (Input)", score: 75, weight: 0.2 },
      { category: "출력 (Output)", score: 85, weight: 0.15 },
      { category: "효율 (Efficiency)", score: 70, weight: 0.15 },
      { category: "개선 (Improve)", score: 85, weight: 0.1 },
      { category: "추가 (Add)", score: 80, weight: 0.1 },
      { category: "제거 (Remove)", score: 90, weight: 0.1 },
    ],
    sectionResults: [
      {
        sectionId: 1,
        title: "모델 선택",
        category: "selection",
        score: 90,
        feedback:
          "모델 선택은 적절했으며, 금융 데이터 처리 정확도를 언급한 점이 좋았습니다. 다만, 구체적인 예시나 벤치마크 결과를 추가했다면 더 설득력 있었을 것입니다.",
        userAnswer: {
          selectedModel: "gpt-4o",
          explanation:
            "GPT-4o는 복잡한 세금 법령 맥락 이해와 핵심 조항 추출에 더 뛰어나며, 금융 데이터 처리 정확도가 더 높습니다.",
        },
        correctAnswer: {
          model: "gpt-4o",
          explanation:
            "GPT-4o는 복잡한 법령 맥락 이해, 금융 데이터 정확도, 핵심 조항 추출에 더 뛰어나며 Claude-3보다 세금 법령 특화 벤치마크에서 15% 높은 성능을 보입니다.",
        },
      },
      {
        sectionId: 2,
        title: "정보 추출",
        category: "input",
        score: 75,
        feedback: "대부분의 정보를 정확하게 추출했습니다. 일부 연도의 기준액이 누락되었으며, 출처 정보가 불완전합니다.",
      },
      {
        sectionId: 3,
        title: "오류 검증",
        category: "output",
        score: 85,
        feedback: "대부분의 오류를 정확하게 식별하고 수정했습니다. 설명이 명확합니다.",
      },
      {
        sectionId: 4,
        title: "프롬프트 최적화",
        category: "efficiency",
        score: 70,
        feedback: "토큰 수는 목표 내로 줄였지만, 일부 중요한 정보가 누락되었습니다.",
      },
      {
        sectionId: 5,
        title: "프롬프트 개선",
        category: "improve",
        score: 85,
        feedback: "프롬프트가 크게 개선되었으며, 문제점을 정확히 식별했습니다.",
      },
    ],
    radarData: [
      { subject: "선택", A: 90, fullMark: 100 },
      { subject: "입력", A: 75, fullMark: 100 },
      { subject: "출력", A: 85, fullMark: 100 },
      { subject: "효율", A: 70, fullMark: 100 },
      { subject: "개선", A: 85, fullMark: 100 },
      { subject: "추가", A: 80, fullMark: 100 },
      { subject: "제거", A: 90, fullMark: 100 },
    ],
    strengths: [
      "AI 모델 선택 능력이 뛰어납니다.",
      "오류 검증 및 수정 능력이 우수합니다.",
      "프롬프트 개선 능력이 좋습니다.",
    ],
    improvements: [
      "정보 추출의 완전성을 높이세요.",
      "프롬프트 최적화 시 핵심 정보 유지에 더 주의하세요.",
      "출처 정보를 더 정확하게 명시하세요.",
    ],
  }

  return NextResponse.json({ result })
}
