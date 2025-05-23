// 데이터베이스 스키마 정의 (Prisma 스키마 예시)

/*
// 사용자 프로필
model User {
  id                String      @id @default(cuid())
  name              String
  email             String      @unique
  password          String
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  assessments       AssessmentSubmission[]
  scores            CategoryScore[]
}

// 종합 평가 템플릿
model Assessment {
  id                String      @id @default(cuid())
  title             String
  description       String
  estimatedTime     String
  difficulty        String      // easy, medium, hard
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  sections          Section[]
  submissions       AssessmentSubmission[]
}

// 평가 섹션
model Section {
  id                String      @id @default(cuid())
  assessmentId      String
  title             String
  description       String
  category          String      // selection, input, output, efficiency, improve, add, remove
  instructions      String      @db.Text
  order             Int
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
  assessment        Assessment  @relation(fields: [assessmentId], references: [id])
  submissions       SectionSubmission[]
}

// 종합 평가 제출
model AssessmentSubmission {
  id                String      @id @default(cuid())
  userId            String
  assessmentId      String
  status            String      // in-progress, completed
  overallScore      Int?
  startedAt         DateTime    @default(now())
  completedAt       DateTime?
  user              User        @relation(fields: [userId], references: [id])
  assessment        Assessment  @relation(fields: [assessmentId], references: [id])
  sectionSubmissions SectionSubmission[]
  result            AssessmentResult?
}

// 섹션 제출
model SectionSubmission {
  id                    String      @id @default(cuid())
  assessmentSubmissionId String
  sectionId             String
  answer                Json        // 사용자 답변 (JSON 형식)
  score                 Int?
  feedback              String?     @db.Text
  submittedAt           DateTime    @default(now())
  assessmentSubmission  AssessmentSubmission @relation(fields: [assessmentSubmissionId], references: [id])
  section               Section     @relation(fields: [sectionId], references: [id])
}

// 종합 평가 결과
model AssessmentResult {
  id                    String      @id @default(cuid())
  assessmentSubmissionId String      @unique
  overallScore          Int
  categoryScores        Json        // 카테고리별 점수 (JSON 형식)
  strengths             Json        // 강점 목록 (JSON 형식)
  improvements          Json        // 개선점 목록 (JSON 형식)
  createdAt             DateTime    @default(now())
  assessmentSubmission  AssessmentSubmission @relation(fields: [assessmentSubmissionId], references: [id])
}

// 사용자 카테고리 점수
model CategoryScore {
  id                String      @id @default(cuid())
  userId            String
  category          String      // selection, input, output, efficiency, improve, add, remove
  score             Int
  updatedAt         DateTime    @updatedAt
  user              User        @relation(fields: [userId], references: [id])
}

// LLM 세션 로그
model LLMSession {
  id                String      @id @default(cuid())
  sectionSubmissionId String?
  model             String      // 사용된 LLM 모델
  prompt            String      @db.Text
  response          String      @db.Text
  tokens            Int         // 사용된 토큰 수
  latency           Int         // 응답 시간 (ms)
  createdAt         DateTime    @default(now())
}

// A/B 테스트 결과
model ABTest {
  id                String      @id @default(cuid())
  assessmentId      String
  variant           String      // A 또는 B
  metrics           Json        // 테스트 결과 지표 (JSON 형식)
  sampleSize        Int         // 테스트 참여자 수
  startDate         DateTime
  endDate           DateTime?
  createdAt         DateTime    @default(now())
}
*/
