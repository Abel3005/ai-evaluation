// A/B 테스트 유틸리티

/**
 * 과제 템플릿에 대한 A/B 테스트를 설정합니다.
 */
export function setupABTest(taskId: string, variantA: any, variantB: any) {
  // A/B 테스트 설정 로직
  return {
    taskId,
    variants: {
      A: variantA,
      B: variantB,
    },
    startDate: new Date(),
    metrics: {
      completionRate: 0,
      averageScore: 0,
      averageTime: 0,
      userSatisfaction: 0,
    },
  }
}

/**
 * A/B 테스트 결과를 분석합니다.
 */
export function analyzeABTestResults(testId: string, results: any) {
  // 결과 분석 로직
  const variantA = results.filter((r: any) => r.variant === "A")
  const variantB = results.filter((r: any) => r.variant === "B")

  const variantAMetrics = {
    completionRate: calculateCompletionRate(variantA),
    averageScore: calculateAverageScore(variantA),
    averageTime: calculateAverageTime(variantA),
    userSatisfaction: calculateUserSatisfaction(variantA),
  }

  const variantBMetrics = {
    completionRate: calculateCompletionRate(variantB),
    averageScore: calculateAverageScore(variantB),
    averageTime: calculateAverageTime(variantB),
    userSatisfaction: calculateUserSatisfaction(variantB),
  }

  // 승자 결정
  const winner = determineWinner(variantAMetrics, variantBMetrics)

  return {
    testId,
    variantAMetrics,
    variantBMetrics,
    winner,
    sampleSize: results.length,
    endDate: new Date(),
  }
}

/**
 * 완료율을 계산합니다.
 */
function calculateCompletionRate(results: any[]) {
  const completed = results.filter((r) => r.completed).length
  return (completed / results.length) * 100
}

/**
 * 평균 점수를 계산합니다.
 */
function calculateAverageScore(results: any[]) {
  if (results.length === 0) return 0
  const sum = results.reduce((acc, r) => acc + r.score, 0)
  return sum / results.length
}

/**
 * 평균 소요 시간을 계산합니다.
 */
function calculateAverageTime(results: any[]) {
  if (results.length === 0) return 0
  const sum = results.reduce((acc, r) => acc + r.timeSpent, 0)
  return sum / results.length
}

/**
 * 사용자 만족도를 계산합니다.
 */
function calculateUserSatisfaction(results: any[]) {
  if (results.length === 0) return 0
  const sum = results.reduce((acc, r) => acc + r.satisfaction, 0)
  return sum / results.length
}

/**
 * A/B 테스트 승자를 결정합니다.
 */
function determineWinner(metricsA: any, metricsB: any) {
  // 가중치 적용
  const scoreA = metricsA.completionRate * 0.3 + metricsA.averageScore * 0.4 + metricsA.userSatisfaction * 0.3

  const scoreB = metricsB.completionRate * 0.3 + metricsB.averageScore * 0.4 + metricsB.userSatisfaction * 0.3

  if (scoreA > scoreB) {
    return "A"
  } else if (scoreB > scoreA) {
    return "B"
  } else {
    return "tie"
  }
}
