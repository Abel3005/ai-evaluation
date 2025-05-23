// API 클라이언트 유틸리티

/**
 * 과제 목록을 가져옵니다.
 */
export async function getTasks() {
  const response = await fetch("/api/tasks")
  if (!response.ok) {
    throw new Error("과제 목록을 가져오는데 실패했습니다.")
  }
  return response.json()
}

/**
 * 특정 과제의 상세 정보를 가져옵니다.
 */
export async function getTask(id: number) {
  const response = await fetch(`/api/tasks/${id}`)
  if (!response.ok) {
    throw new Error("과제 정보를 가져오는데 실패했습니다.")
  }
  return response.json()
}

/**
 * 과제 답변을 제출합니다.
 */
export async function submitTask(id: number, data: any) {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("과제 제출에 실패했습니다.")
  }

  return response.json()
}

/**
 * 사용자 대시보드 데이터를 가져옵니다.
 */
export async function getUserDashboard() {
  const response = await fetch("/api/user/dashboard")
  if (!response.ok) {
    throw new Error("대시보드 데이터를 가져오는데 실패했습니다.")
  }
  return response.json()
}

/**
 * 리더보드 데이터를 가져옵니다.
 */
export async function getLeaderboard() {
  const response = await fetch("/api/leaderboard")
  if (!response.ok) {
    throw new Error("리더보드 데이터를 가져오는데 실패했습니다.")
  }
  return response.json()
}
