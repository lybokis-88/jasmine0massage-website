"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Globe,
  Star,
  Heart,
  Award,
  Menu,
  X,
  Camera,
  MapIcon,
  Plane,
  ChevronDown,
  FileText,
  MessageSquare,
  Headphones,
  Phone,
} from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import SafeImage from "@/components/SafeImage"
import Footer from "@/components/Footer"
import { translations, type Language } from "@/lib/translations"
import { DEFAULT_IMAGES } from "@/lib/images"
import { siteConfig } from "@/lib/site-config"

function Page() {
  const [language, setLanguage] = useState<Language>("ko")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const t = translations[language]

  // 클라이언트 사이드 확인
  useEffect(() => {
    setIsClient(true)
    // 저장된 언어 설정 로드
    const savedLanguage = localStorage.getItem("jasmine-language")
    if (savedLanguage === "en" || savedLanguage === "ko") {
      setLanguage(savedLanguage)
    }
  }, [])

  // 언어 변경
  const toggleLanguage = useCallback(() => {
    const newLanguage = language === "ko" ? "en" : "ko"
    setLanguage(newLanguage)
    if (isClient) {
      localStorage.setItem("jasmine-language", newLanguage)
    }
  }, [language, isClient])

  // 스크롤 함수
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }, [])

  // 연락처 핸들러들
  const handleKakaoConsult = useCallback(() => {
    window.open(`kakao://add/jasminekota`, "_blank")
  }, [])

  const handleKakaoChannel = useCallback(() => {
    window.open("https://pf.kakao.com/_VxbAxcd", "_blank")
  }, [])

  const handleWhatsApp = useCallback(() => {
    const message = encodeURIComponent(
      language === "ko"
        ? "안녕하세요! WhatsApp 상담을 요청합니다."
        : "Hello! I would like to request a consultation via WhatsApp.",
    )
    window.open(`https://wa.me/60169318439?text=${message}`, "_blank")
  }, [language])

  const handlePriceList = useCallback(() => {
    window.open(DEFAULT_IMAGES.priceList.ko, "_blank")
  }, [])

  // 로딩 상태
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-stone-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SafeImage
                src={DEFAULT_IMAGES.logo}
                alt="Jasmine Massage Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h1 className="text-lg font-bold text-stone-800 sm:text-sm">Jasmine Massage</h1>
            </div>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden lg:flex items-center space-x-6">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="text-stone-600 hover:text-emerald-600 transition-colors text-sm font-medium"
                >
                  {value}
                </button>
              ))}
            </nav>

            {/* 데스크톱 액션 버튼들 */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-stone-300 text-stone-600 hover:bg-stone-100 bg-transparent px-2 py-1 text-xs"
              >
                <Globe className="h-3 w-3 mr-1" />
                {language === "ko" ? "EN" : "한"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePriceList}
                className="border-stone-300 text-stone-600 hover:bg-stone-100 bg-transparent px-2 py-1 text-xs"
              >
                <FileText className="h-3 w-3 mr-1" />
                {t.priceList}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs">
                    <Headphones className="h-3 w-3 mr-1" />
                    {t.consultMenu}
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={handleKakaoConsult} className="cursor-pointer">
                    <MessageCircle className="h-4 w-4 mr-2 text-yellow-500" />
                    {t.kakaoConsult}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleWhatsApp} className="cursor-pointer">
                    <MessageSquare className="h-4 w-4 mr-2 text-green-500" />
                    {t.whatsappConsult}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleKakaoChannel} className="cursor-pointer">
                    <MessageCircle className="h-4 w-4 mr-2 text-yellow-600" />
                    {t.kakaoChannel}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-stone-300 text-stone-600 hover:bg-stone-100 bg-transparent px-2 py-1 text-xs"
              >
                <Globe className="h-3 w-3" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileMenuOpen(true)}
                className="border-stone-300 text-stone-600 hover:bg-stone-100 bg-transparent px-2 py-1"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 사이드바 메뉴 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-screen w-80 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-stone-800">메뉴</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-stone-300 text-stone-600 hover:bg-stone-100 bg-transparent h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 border-b bg-stone-50">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <Button
                  size="sm"
                  onClick={handlePriceList}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm h-10"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {t.priceList}
                </Button>
                <Button
                  size="sm"
                  onClick={handleKakaoConsult}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium h-10"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  카톡상담
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm h-10"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  onClick={handleKakaoChannel}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm h-10"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  카카오채널
                </Button>
              </div>
            </div>
            <nav className="p-4 space-y-3">
              {[
                { id: "about", icon: Award, label: t.nav.about },
                { id: "programs", icon: Heart, label: t.nav.programs },
                { id: "tours", icon: Plane, label: t.nav.tours },
                { id: "services", icon: Star, label: t.nav.services },
                { id: "gallery", icon: Camera, label: t.nav.gallery },
                { id: "contacts", icon: Phone, label: t.nav.contacts },
                { id: "location", icon: MapIcon, label: t.nav.location },
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <Icon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700 font-medium text-base">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={DEFAULT_IMAGES.hero}
            alt="Jasmine Massage Hero Background"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6 bg-emerald-600/90 text-white backdrop-blur-sm shadow-lg text-xs px-3 py-1 rounded-full inline-block">
              {t.premiumHealing}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              {t.heroTitle}
              <span className="text-emerald-400 block">{t.heroSubtitle}</span>
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-stone-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm inline-block">
                {t.aboutBadge}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-4 sm:mb-6">{t.aboutTitle}</h3>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">{t.aboutDescription}</p>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden border-2 border-stone-300">
                <SafeImage
                  src={DEFAULT_IMAGES.about}
                  alt="Professional Massage Therapy Service"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        siteInfo={siteConfig}
        language={language}
        onKakaoConsult={handleKakaoConsult}
        onWhatsAppContact={handleWhatsApp}
        onPriceListClick={handlePriceList}
      />
    </div>
  )
}

export default Page
