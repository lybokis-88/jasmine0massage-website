import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "자스민 마사지",
  description: "코타키나발루 마사지샵",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body style={{
        margin: 0, 
        padding: 0, 
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white'
      }}>
        {children}
      </body>
    </html>
  )
}
