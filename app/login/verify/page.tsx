"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LoadingScreen } from "@/components/loading-screen"
import { AUTH_KEYS, clearAllAuth } from "@/components/auth-guard"
import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Lock } from "lucide-react"

export default function VerifyPage() {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [timeLeft, setTimeLeft] = useState(120)
  const [userName, setUserName] = useState("")
  const [isAllowed, setIsAllowed] = useState(false)
  const router = useRouter()

  const validCodes = ["3792", "9026", "6619", "5102", "7810"]

  // Reset login flag and redirect back to login
  const expireSession = useCallback(() => {
    if (typeof window !== "undefined") {
      // Only clear login flag so user must re-authenticate from scratch
      clearAllAuth()
    }
    router.replace("/login")
  }, [router])

  useEffect(() => {
    if (typeof window === "undefined") return

    // Gate: user MUST have passed login step
    const loginPassed = localStorage.getItem(AUTH_KEYS.LOGIN) === "true"
    if (!loginPassed) {
      router.replace("/login")
      return
    }

    // Already fully verified? Send straight to dashboard
    const verifyPassed = localStorage.getItem(AUTH_KEYS.VERIFY) === "true"
    if (verifyPassed) {
      router.replace("/dashboard")
      return
    }

    setIsAllowed(true)

    const storedName = localStorage.getItem(AUTH_KEYS.USER_NAME)
    if (storedName) setUserName(storedName)
  }, [router])

  // Countdown timer
  useEffect(() => {
    if (!isAllowed) return

    if (timeLeft <= 0) {
      expireSession()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, isAllowed, expireSession])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (validCodes.includes(code)) {
      setIsLoading(true)
      if (typeof window !== "undefined") {
        localStorage.setItem(AUTH_KEYS.VERIFY, "true")
        // Refresh session timestamp on successful verify
        localStorage.setItem(AUTH_KEYS.SESSION_TS, new Date().toISOString())
      }
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } else {
      setError("Invalid verification code. Please try again.")
      setCode("")
    }
  }

  // Don't render anything until we've confirmed access
  if (!isAllowed) return null

  return (
    <LoadingScreen loadingTime={1000}>
      <main className="min-h-screen pt-24 bg-gradient-to-br from-background to-background/95">
        <div className="container flex items-center justify-center px-4 min-h-[calc(100vh-6rem)]">
          <Card className="w-full max-w-md border shadow-lg">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-center mb-2">
                <div className="relative h-20 w-48">
                  <Image
                    src="/assets/aurevault-logo.png"
                    alt="Aurevault Precious Metals Pty LTD"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-accent" />
                <CardTitle className="text-2xl text-center">Two-Step Verification</CardTitle>
              </div>
              <CardDescription className="text-center">
                A verification code has been sent to our administration. Please enter it below to proceed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-foreground">Verification Code</label>
                    <Input
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter 4-digit code"
                      value={code}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        setCode(value)
                      }}
                      className="text-center text-2xl tracking-widest font-semibold"
                      maxLength={4}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Code expires in</span>
                    <span className={`font-semibold ${timeLeft <= 30 ? "text-destructive" : "text-foreground"}`}>
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                </div>
                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-sm text-destructive text-center">{error}</p>
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isLoading || code.length !== 4 || timeLeft <= 0}
                >
                  {isLoading ? "Verifying..." : "Verify Code"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </LoadingScreen>
  )
}
