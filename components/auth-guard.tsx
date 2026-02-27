"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

const AUTH_KEYS = {
  LOGIN: "aurevault_login_passed",
  VERIFY: "aurevault_verify_passed",
  SESSION_TS: "aurevault_session_ts",
  USER_NAME: "userName",
  USER_EMAIL: "userEmail",
} as const

// Session expires after 24 hours
const SESSION_MAX_AGE_MS = 24 * 60 * 60 * 1000

function isSessionValid(): boolean {
  if (typeof window === "undefined") return false

  const loginPassed = localStorage.getItem(AUTH_KEYS.LOGIN) === "true"
  const verifyPassed = localStorage.getItem(AUTH_KEYS.VERIFY) === "true"

  if (!loginPassed || !verifyPassed) return false

  const sessionTs = localStorage.getItem(AUTH_KEYS.SESSION_TS)
  if (!sessionTs) return false

  const elapsed = Date.now() - new Date(sessionTs).getTime()
  if (elapsed > SESSION_MAX_AGE_MS) return false

  return true
}

function clearAllAuth() {
  if (typeof window === "undefined") return
  localStorage.removeItem(AUTH_KEYS.LOGIN)
  localStorage.removeItem(AUTH_KEYS.VERIFY)
  localStorage.removeItem(AUTH_KEYS.SESSION_TS)
  localStorage.removeItem(AUTH_KEYS.USER_NAME)
  localStorage.removeItem(AUTH_KEYS.USER_EMAIL)
  localStorage.removeItem("isAuthenticated")
  localStorage.removeItem("loginTimestamp")
}

export { AUTH_KEYS, clearAllAuth, isSessionValid }

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter()
  const [isAuthed, setIsAuthed] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (isSessionValid()) {
      setIsAuthed(true)
    } else {
      clearAllAuth()
      router.replace("/login")
    }

    setIsChecking(false)
  }, [router])

  if (isChecking || !isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-accent" />
      </div>
    )
  }

  return <>{children}</>
}
