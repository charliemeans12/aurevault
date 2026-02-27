"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface WatermarkedImageProps {
  src: string
  alt: string
  watermarkSrc?: string
  className?: string
  priority?: boolean
  opacity?: number
  watermarkSize?: "small" | "medium" | "large"
  watermarkRotation?: number
}

export function WatermarkedImage({
  src,
  alt,
  watermarkSrc = "/assets/aurevault-logo.png",
  className = "",
  priority = false,
  opacity = 0.2,
  watermarkSize = "medium",
  watermarkRotation = -15,
}: WatermarkedImageProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Determine watermark size
  const sizeClasses = {
    small: "h-32 w-32",
    medium: "h-64 w-64",
    large: "h-96 w-96",
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Main image */}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        priority={priority}
        sizes="100vw"
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`relative ${sizeClasses[watermarkSize]}`}
          style={{
            opacity: opacity,
            transform: `rotate(${watermarkRotation}deg)`,
          }}
        >
          <Image src={watermarkSrc || "/placeholder.svg"} alt="Watermark" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}
