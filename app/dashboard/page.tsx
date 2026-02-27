"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, TrendingUp, Lock, Clock } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { AuthGuard, AUTH_KEYS, clearAllAuth } from "@/components/auth-guard"
import { DashboardNav } from "@/components/dashboard-nav"

function DashboardContent() {
  const router = useRouter()
  const [userName, setUserName] = useState("User")
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [loginTime, setLoginTime] = useState<string>("")

  const chartData = [
    { time: "2018", value: 9500000 },
    { time: "2019", value: 10200000 },
    { time: "2020", value: 11100000 },
    { time: "2021", value: 11800000 },
    { time: "2022", value: 12400000 },
    { time: "2023", value: 12950000 },
    { time: "2024", value: 13200000 },
    { time: "2025", value: 13500000 },
    { time: "2026", value: 13948820 },
  ]

  const vaultValue = 13948820.0

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem(AUTH_KEYS.USER_NAME)
      const sessionTs = localStorage.getItem(AUTH_KEYS.SESSION_TS)

      if (storedName) setUserName(storedName)

      if (sessionTs) {
        const loginDate = new Date(sessionTs)
        setLoginTime(
          loginDate.toLocaleString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "Australia/Melbourne",
          }),
        )
      }
    }

    const updateTime = () => setCurrentTime(new Date())
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleLogout = () => {
    clearAllAuth()
    router.replace("/login")
  }

  const formattedCurrentTime = currentTime?.toLocaleString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Australia/Melbourne",
  })

  const formattedValue = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
  }).format(vaultValue)

  return (
    <main className="min-h-screen pb-12 bg-background">
      <DashboardNav />
      <div className="container px-4 md:px-6 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-1">Dashboard</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                Welcome, {userName}
              </h1>
              <p className="text-muted-foreground">Your Aurevault Precious Metals Account</p>
            </div>
            <Button onClick={handleLogout} variant="destructive" className="w-full md:w-auto">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card 
            className="border border-border cursor-pointer hover:border-accent transition-colors"
            onClick={() => router.push('/dashboard/insights')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <TrendingUp className="h-5 w-5 text-accent" />
                Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Analyze 20-year precious metals trends</p>
            </CardContent>
          </Card>

          <Card 
            className="border border-border cursor-pointer hover:border-accent transition-colors"
            onClick={() => router.push('/dashboard/tracker')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <TrendingUp className="h-5 w-5 text-accent" />
                Your Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Monitor your asset holdings</p>
            </CardContent>
          </Card>

          <Card 
            className="border border-border cursor-pointer hover:border-accent transition-colors"
            onClick={() => router.push('/dashboard/vault')}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <Lock className="h-5 w-5 text-accent" />
                Your Vault
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Access your secure storage info</p>
            </CardContent>
          </Card>
        </div>

        {/* Key Information Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <Clock className="h-5 w-5 text-accent" />
                Current Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold font-mono text-foreground">{formattedCurrentTime}</p>
              <p className="text-xs text-muted-foreground mt-1">Melbourne, Australia (AEST)</p>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <Lock className="h-5 w-5 text-accent" />
                Login Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-mono text-foreground break-words">{loginTime}</p>
              <p className="text-xs text-muted-foreground mt-1">Session Start</p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <TrendingUp className="h-5 w-5 text-accent" />
                Total Vault Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">{formattedValue}</p>
              <p className="text-xs text-muted-foreground mt-1">Current Market Value</p>
            </CardContent>
          </Card>
        </div>

        {/* Market Value Chart */}
        <div className="mb-8">
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl text-foreground">Market Value Trend</CardTitle>
                  <CardDescription className="mt-1">
                    Performance analysis with current market value
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Current Value</p>
                  <p className="text-xl font-bold text-accent">{formattedValue}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(40, 60%, 50%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(40, 60%, 50%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 4" stroke="hsl(220, 13%, 91%)" vertical={false} />
                    <XAxis
                      dataKey="time"
                      stroke="hsl(220, 10%, 46%)"
                      style={{ fontSize: "12px" }}
                    />
                    <YAxis
                      stroke="hsl(220, 10%, 46%)"
                      tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                      style={{ fontSize: "12px" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 13%, 91%)",
                        borderRadius: "6px",
                        padding: "10px",
                      }}
                      formatter={(value: number) =>
                        new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                          minimumFractionDigits: 0,
                        }).format(value)
                      }
                    />
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke="hsl(40, 60%, 50%)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorValueGradient)"
                      isAnimationActive={true}
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground border-t border-border pt-4">
                <span>2018 - 2026</span>
                <span className="text-accent font-medium">+46.8% Growth</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Diamond Showcase */}
        <div className="mb-8">
          <Card className="border border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex items-center justify-center p-6 md:p-8 bg-secondary">
                <div className="w-full aspect-video bg-black rounded overflow-hidden">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    poster="/assets/sealed-diamonds-logo.jpeg"
                    controlsList="nodownload"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/87oifg-nW0vb0YQXCP4R17TQx0nBNFTVk7Bgn.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <CardTitle className="text-xl text-foreground mb-1">Premium Diamond Collection</CardTitle>
                <CardDescription className="mb-6">Lucas Campbell - Certified & Secure</CardDescription>
                <div className="space-y-4">
                  {[
                    { label: "Total Carats", value: "100.515 ct" },
                    { label: "Certification", value: "GIA Certified" },
                    { label: "Vault Location", value: "Melbourne, VIC" },
                    { label: "Insurance", value: "100% Covered", highlight: true },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className={`text-base font-semibold ${item.highlight ? "text-accent" : "text-foreground"}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="p-5 bg-secondary rounded-lg border border-border mb-12">
          <p className="text-sm text-muted-foreground leading-relaxed">
            All assets are fully insured and stored in our secure Melbourne, Victoria facilities. Your account is
            protected by advanced multi-factor authentication and 24/7 security protocols. Real-time market tracking
            and regular audits ensure your precious metals and diamonds remain safe and properly valued. For any
            inquiries, please contact our customer service team.
          </p>
        </div>
      </div>
    </main>
  )
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  )
}
