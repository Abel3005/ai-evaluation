import { NextResponse } from "next/server"

// 샘플 과제 데이터 (실제 구현에서는 데이터베이스에서 가져옵니다)
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
  // 다른 과제들...
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const task = tasks.find((t) => t.id === id)

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 })
  }

  return NextResponse.json({ task })
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const task = tasks.find((t) => t.id === id)

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 })
  }

  try {
    const body = await request.json()

    // 실제 구현에서는 여기서 제출된 답변을 평가하고 점수를 계산합니다
    // 예시로 간단한 평가 로직을 구현합니다

    let modelSelectionScore = 0
    let reasoningScore = 0
    let conciseScore = 0

    // 모델 선택 평가
    if (body.selectedModel === task.correctAnswer.model) {
      modelSelectionScore = 90
    } else {
      modelSelectionScore = 40
    }

    // 설명 평가 (실제로는 LLM을 사용하여 평가할 수 있습니다)
    reasoningScore = 80 // 예시 점수

    // 간결성 평가
    conciseScore = body.explanation.length <= 100 ? 85 : 60

    // 종합 점수 계산
    const totalScore = modelSelectionScore * 0.5 + reasoningScore * 0.3 + conciseScore * 0.2

    const result = {
      taskId: id,
      userAnswer: body,
      evaluation: {
        score: Math.round(totalScore),
        modelSelectionScore,
        reasoningScore,
        conciseScore,
        feedback:
          "모델 선택은 적절했으며, 금융 데이터 처리 정확도를 언급한 점이 좋았습니다. 다만, 구체적인 예시나 벤치마크 결과를 추가했다면 더 설득력 있었을 것입니다.",
        correctAnswer: task.correctAnswer,
      },
    }

    return NextResponse.json({ result })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
