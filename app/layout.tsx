import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ErrorBoundary from "@/components/ErrorBoundary"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "자스민 마사지 - 코타키나발루",
  description: "코타키나발루 프리미엄 마사지샵",
  keywords: "코타키나바루 마사지, 쟈스민 마사지, 말레이시아 마사지, 아로마테라피, 핫스톤 마사지, 타이마사지",
  authors: [{ name: "Jasmine Massage" }],
  creator: "Jasmine Massage",
  publisher: "Jasmine Massage",

  // Open Graph
  openGraph: {
    title: "자스민 마사지 - 코타키나발루",
    description: "코타키나발루 프리미엄 마사지샵",
    url: "https://www.jasminemassage.co.kr",
    siteName: "Jasmine Massage",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/jasmine-logo.jpg",
        width: 1200,
        height: 630,
        alt: "쟈스민 마사지 로고",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "자스민 마사지 - 코타키나발루",
    description: "코타키나발루 프리미엄 마사지샵",
    images: ["/images/jasmine-logo.jpg"],
  },

  // 기본 메타태그
  metadataBase: new URL("https://www.jasminemassage.co.kr"),
  alternates: {
    canonical: "https://www.jasminemassage.co.kr",
  },

  // 로봇 설정
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 기타 설정
  category: "health",
  classification: "massage therapy",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ErrorBoundary>
          <LanguageProvider>{children}</LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
