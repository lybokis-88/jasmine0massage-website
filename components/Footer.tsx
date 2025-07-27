"use client"

import { MessageCircle, MessageSquare, FileText, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import SafeImage from "@/components/SafeImage"
import type { Language } from "@/lib/translations"

interface FooterProps {
  siteInfo: {
    companyName: string
    phone: string
    address: Record<Language, string>
    operatingHours: Record<Language, string>
  }
  language: Language
  onKakaoConsult: () => void
  onWhatsAppContact: () => void
  onPriceListClick: () => void
}

export default function Footer({
  siteInfo,
  language,
  onKakaoConsult,
  onWhatsAppContact,
  onPriceListClick,
}: FooterProps) {
  return (
    <footer className="bg-stone-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <SafeImage
                src="/placeholder.svg?height=32&width=32&text=J"
                alt="Jasmine Massage Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold">{siteInfo.companyName}</h3>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              {language === "ko"
                ? "2006년부터 운영되는 코타키나발루 최초의 한인 마사지샵"
                : "Kota Kinabalu's first Korean massage shop since 2006"}
            </p>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{language === "ko" ? "연락처" : "Contact Info"}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-stone-300">{siteInfo.address[language]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-stone-300">{siteInfo.operatingHours[language]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-stone-300">{siteInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{language === "ko" ? "빠른 상담" : "Quick Contact"}</h4>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onKakaoConsult}
                className="w-full justify-start bg-transparent border-stone-600 text-stone-300 hover:bg-stone-700 hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-yellow-400" />
                {language === "ko" ? "카카오톡 상담" : "KakaoTalk"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onWhatsAppContact}
                className="w-full justify-start bg-transparent border-stone-600 text-stone-300 hover:bg-stone-700 hover:text-white"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-green-400" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onPriceListClick}
                className="w-full justify-start bg-transparent border-stone-600 text-stone-300 hover:bg-stone-700 hover:text-white"
              >
                <FileText className="w-4 h-4 mr-2 text-blue-400" />
                {language === "ko" ? "요금표 보기" : "Price List"}
              </Button>
            </div>
          </div>

          {/* 운영 시간 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{language === "ko" ? "운영 시간" : "Operating Hours"}</h4>
            <div className="text-sm text-stone-300 space-y-1">
              <div>{language === "ko" ? "매일 운영" : "Open Daily"}</div>
              <div className="font-medium text-emerald-400">
                {language === "ko" ? "오전 10시 - 밤 12시" : "10AM - 12AM"}
              </div>
              <div className="text-xs text-stone-400">
                {language === "ko" ? "(라스트 오더 11시)" : "(Last Order 11PM)"}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p className="text-stone-400 text-sm">
            © 2024 Jasmine Massage. {language === "ko" ? "모든 권리 보유." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
