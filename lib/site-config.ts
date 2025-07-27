import type { Language } from "./translations"

export const siteConfig = {
  companyName: "Jasmine Massage",
  phone: "+60 16-931 8439",
  address: {
    ko: "말레이시아 코타키나발루 와리산 스퀘어 2층 2-13",
    en: "Warisan Square 2nd Floor, 2-13, Kota Kinabalu, Malaysia",
  } as Record<Language, string>,
  operatingHours: {
    ko: "매일 오전 10시 - 밤 12시", 
    en: "Daily 10AM - 12AM",
  } as Record<Language, string>,
  googleMapsUrl: "https://maps.app.goo.gl/jQLozKz8o9FihJj97",
  kakaoId: "jasminekota",
  kakaoChannelUrl: "https://pf.kakao.com/_VxbAxcd",
  whatsappNumber: "60169318439",
}
