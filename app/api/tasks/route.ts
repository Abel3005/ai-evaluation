import { NextResponse } from "next/server"

// 샘플 과제 데이터
const tasks = [
  {
    id: 1,
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
    correctAnswer: {
      model: "gpt-4o",
      explanation:
        "GPT-4o는 복잡한 협상 맥락 이해, 금융 데이터 정확도, 핵심 조건 추출에 더 뛰어나며 Claude-3보다 연봉 협상 특화 벤치마크에서 15% 높은 성능을 보입니다.",
    },
  },
  {
    id: 2,
    title: "세금 법령 정보 추출",
    description: "첨부된 '2024_국세청_법령.pdf'에서 '간이 과세기준' 조항을 찾아 해당 연도별 기준액을 표로 정리하라.",
    category: "input",
    difficulty: "어려움",
    estimatedTime: "15분",
  },
  {
    id: 3,
    title: "LLM 응답 오류 검출",
    description: "다음 LLM 응답에서 오류·허위 정보를 검출하고, 잘못된 부분을 지적 및 수정하라.",
    category: "output",
    difficulty: "중간",
    estimatedTime: "12분",
  },
  {
    id: 4,
    title: "프롬프트 최적화",
    description: "위와 동일한 표를 20토큰 이내로 요청 프롬프트를 재작성하라.",
    category: "efficiency",
    difficulty: "쉬움",
    estimatedTime: "8분",
  },
  {
    id: 5,
    title: "프롬프트 개선",
    description: "아래 프롬프트를 개선해 답변 품질을 높이고, 이전 답변이 왜 불충분했는지 2가지 이유를 제시하라.",
    category: "improve",
    difficulty: "중간",
    estimatedTime: "10분",
  },
]

export async function GET() {
  return NextResponse.json({ tasks })
}
