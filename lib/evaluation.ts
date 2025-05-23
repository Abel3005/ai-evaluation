// 평가 로직 유틸리티

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

/**
 * 종합 평가 결과를 계산합니다.
 */
export async function calculateAssessmentResult(assessmentId: number, sectionResults: any[]) {
  // 카테고리별 가중치
  const categoryWeights = {
    selection: 0.2,
    input: 0.2,
    output: 0.15,
    efficiency: 0.15,
    improve: 0.1,
    add: 0.1,
    remove: 0.1,
  }

  // 카테고리별 점수 계산
  const categoryScores = Object.keys(categoryWeights).map((category) => {
    const sectionsByCategory = sectionResults.filter((section) => section.category === category)
    if (sectionsByCategory.length === 0) {
      return {
        category: getCategoryLabel(category),
        score: 0,
        weight: categoryWeights[category as keyof typeof categoryWeights],
      }
    }

    const totalScore = sectionsByCategory.reduce((sum, section) => sum + section.score, 0)
    const averageScore = Math.round(totalScore / sectionsByCategory.length)

    return {
      category: getCategoryLabel(category),
      score: averageScore,
      weight: categoryWeights[category as keyof typeof categoryWeights],
    }
  })

  // 종합 점수 계산
  const overallScore = Math.round(categoryScores.reduce((sum, item) => sum + item.score * item.weight, 0))

  // LLM을 사용하여 강점과 개선점 분석
  const { text: analysisResult } = await generateText({
    model: openai("gpt-4o"),
    system: "You are an expert evaluator of AI utilization skills.",
    prompt: `
      Analyze these category scores and provide 3 strengths and 3 areas for improvement:
      
      ${JSON.stringify(categoryScores, null, 2)}
      
      Return your analysis as JSON with the following structure:
      {
        "strengths": ["strength1", "strength2", "strength3"],
        "improvements": ["improvement1", "improvement2", "improvement3"]
      }
    `,
  })

  // LLM 응답을 파싱합니다
  const analysis = JSON.parse(analysisResult)

  return {
    assessmentId,
    overallScore,
    categoryScores,
    sectionResults,
    radarData: categoryScores.map((item) => ({
      subject: item.category.split(" ")[0],
      A: item.score,
      fullMark: 100,
    })),
    strengths: analysis.strengths,
    improvements: analysis.improvements,
  }
}

/**
 * 카테고리 레이블을 반환합니다.
 */
function getCategoryLabel(category: string): string {
  const labels = {
    selection: "선택 (Selection)",
    input: "입력 (Input)",
    output: "출력 (Output)",
    efficiency: "효율 (Efficiency)",
    improve: "개선 (Improve)",
    add: "추가 (Add)",
    remove: "제거 (Remove)",
  }
  return labels[category as keyof typeof labels] || category
}
