import Link from "next/link"
import { UserButton } from "@/components/user-button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-primary font-bold">AI 평가 시스템</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/tasks" className="text-sm font-medium hover:underline underline-offset-4">
            종합 평가
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            내 대시보드
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium hover:underline underline-offset-4">
            리더보드
          </Link>
          <Link href="/guide" className="text-sm font-medium hover:underline underline-offset-4">
            이용 가이드
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <UserButton />
        </div>
      </div>
    </header>
  )
}
