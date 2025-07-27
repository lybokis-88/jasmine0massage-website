"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("페이지 오류:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-red-800">오류가 발생했습니다</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 text-center">페이지를 로드하는 중 문제가 발생했습니다.</p>

          <div className="flex space-x-2">
            <Button onClick={reset} className="flex-1 bg-transparent" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              다시 시도
            </Button>
            <Button onClick={() => (window.location.href = "/")} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              <Home className="w-4 h-4 mr-2" />
              홈으로
            </Button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">자스민 마사지</h3>
            <p className="text-sm text-gray-600">
              전화: +60 16-931 8439
              <br />
              Warisan Square 2F, 2-13, Kota Kinabalu
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
