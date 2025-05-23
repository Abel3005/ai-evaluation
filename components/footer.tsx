import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-8">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2025 AI 활용 능력 평가 시스템. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm text-gray-500 hover:underline underline-offset-4">
            이용약관
          </Link>
          <Link href="/privacy" className="text-sm text-gray-500 hover:underline underline-offset-4">
            개인정보처리방침
          </Link>
          <Link href="/contact" className="text-sm text-gray-500 hover:underline underline-offset-4">
            문의하기
          </Link>
        </div>
      </div>
    </footer>
  )
}
