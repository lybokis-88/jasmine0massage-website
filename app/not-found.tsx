"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-3xl font-bold">404</span>
          </div>
          <CardTitle className="text-2xl text-gray-900">페이지를 찾을 수 없습니다</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="flex-1">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Home className="w-4 h-4 mr-2" />
                홈으로 이동
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="flex-1">
              <ArrowLeft className="w-4 h-4 mr-2" />
              이전 페이지
            </Button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">자스민 마사지 연락처</h3>
            <p className="text-sm text-gray-600">
              전화: +60 16-931 8439
              <br />
              위치: Warisan Square 2F, 2-13, Kota Kinabalu
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
