"use client"

import type React from "react"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingScreen } from "@/components/loading-screen"
import { AUTH_KEYS, clearAllAuth } from "@/components/auth-guard"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"


export default function LoginClientPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  // Clear ALL auth flags on mount so the user must go through the full flow
  useEffect(() => {
    if (typeof window !== "undefined") {
      clearAllAuth()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const validEmail = "lucascampbellalex90@hotmail.com"
    const validPassword = "Al268thC@beLL"

    if (email.toLowerCase() === validEmail.toLowerCase() && password === validPassword) {
      setIsLoading(true)
      if (typeof window !== "undefined") {
        // Set ONLY the login flag - verify is still false
        localStorage.setItem(AUTH_KEYS.LOGIN, "true")
        localStorage.setItem(AUTH_KEYS.SESSION_TS, new Date().toISOString())
        localStorage.setItem(AUTH_KEYS.USER_NAME, "Lucas Campbell")
        localStorage.setItem(AUTH_KEYS.USER_EMAIL, email)
      }
      setTimeout(() => {
        router.push("/login/verify")
      }, 1500)
      return
    }

    setError("Invalid email or password. Please check your credentials and try again.")
  }

  return (
    <LoadingScreen loadingTime={1000}>
      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24 relative overflow-hidden">
        {/* Logo Banner extending from navbar */}
        <div className="absolute top-16 md:top-20 left-0 right-0 -z-10 flex items-center justify-center opacity-15">
          <div className="relative h-32 w-full sm:h-40 md:h-48">
            <Image
              src="/assets/aurevault-logo.png"
              alt="Aurevault Precious Metals Pty LTD"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/design-mode/IMG_1630.webp"
            alt="Secure gold vault storage"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
        </div>

        <div className="container relative flex items-center justify-center px-4 py-8 sm:py-12">
          <div className="w-full max-w-md space-y-6 bg-background/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative h-20 sm:h-24 w-48 sm:w-56">
                <Image
                  src="/assets/aurevault-logo.png"
                  alt="Aurevault Precious Metals Pty LTD"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-sm text-muted-foreground">Please login to access your vault</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-background/50 backdrop-blur-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-background/50 backdrop-blur-sm"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Sign In"}
              </Button>
              <Link href="/forgot-password" className="block text-center text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </form>
          </div>
        </div>
      </main>
    </LoadingScreen>
  )
}
