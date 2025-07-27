"use client"

import Image from "next/image"
import { useState } from "react"

interface SafeImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  debug?: boolean
  priority?: boolean
}

export default function SafeImage({
  src,
  alt,
  width = 300,
  height = 200,
  className = "",
  debug = false,
  priority = false,
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (debug) {
      console.log(`Image load failed for: ${src}`)
    }
    setHasError(true)
    // 기본 플레이스홀더 이미지로 대체
    setImgSrc(`/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(alt)}`)
  }

  const handleLoad = () => {
    if (debug) {
      console.log(`Image load success for: ${src}`)
    }
    setHasError(false)
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      unoptimized={imgSrc.startsWith("data:") || hasError || imgSrc.includes("placeholder.svg")}
      priority={priority}
    />
  )
}
