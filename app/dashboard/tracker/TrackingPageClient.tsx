"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AuthGuard, clearAllAuth } from "@/components/auth-guard"
import { DashboardNav } from "@/components/dashboard-nav"
import { LogOut, TrendingUp, TrendingDown, Eye } from "lucide-react"
import Link from "next/link"

function TrackingContent() {
  const router = useRouter()

  const handleLogout = () => {
    clearAllAuth()
    router.replace("/login")
  }

  // Sample tracking data
  const trackedAssets = [
    {
      id: 1,
      name: "Gold Bar 100g",
      type: "Gold",
      weight: "100g",
      quantity: 5,
      purchasePrice: 6500,
      currentPrice: 7850,
      totalValue: 39250,
      change: 20.8,
    },
    {
      id: 2,
      name: "Diamond Collection",
      type: "Diamond",
      carats: "87.5 ct",
      certification: "GIA Certified",
      purchasePrice: 15000,
      currentPrice: 21500,
      totalValue: 21500,
      change: 43.3,
    },
    {
      id: 3,
      name: "Silver Ingot 1kg",
      type: "Silver",
      weight: "1kg",
      quantity: 12,
      purchasePrice: 850,
      currentPrice: 1020,
      totalValue: 12240,
      change: 20.0,
    },
    {
      id: 4,
      name: "Platinum Bars",
      type: "Platinum",
      weight: "50g",
      quantity: 3,
      purchasePrice: 2800,
      currentPrice: 2950,
      totalValue: 8850,
      change: 5.4,
    },
  ]

  const totalPortfolioValue = trackedAssets.reduce((sum, asset) => sum + asset.totalValue, 0)
  const totalInvestment = trackedAssets.reduce((sum, asset) => sum + asset.purchasePrice * asset.quantity, 0)
  const overallGain = totalPortfolioValue - totalInvestment

  return (
    <main className="min-h-screen pb-12 bg-background">
      <DashboardNav />
      <div className="container px-4 md:px-6 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-1">Asset Management</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Tracker</h1>
              <p className="text-muted-foreground mt-2">Monitor and manage your precious metal holdings</p>
            </div>
            <Button onClick={handleLogout} variant="destructive" className="w-full md:w-auto">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>


        {/* Tracked Assets */}
        <div className="space-y-4">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Your Assets</h2>
          </div>

          {trackedAssets.map((asset) => (
            <Card key={asset.id} className="border border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{asset.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {asset.type} {asset.weight && `• ${asset.weight}`}
                        {asset.quantity && ` • Qty: ${asset.quantity}`}
                        {asset.carats && `• ${asset.carats}`}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Current Value</p>
                      <p className="font-bold text-foreground">
                        ${asset.totalValue.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Purchase Price</p>
                      <p className="text-sm text-muted-foreground">
                        ${asset.purchasePrice.toLocaleString("en-AU")}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Current Price</p>
                      <p className="text-sm text-muted-foreground">
                        ${asset.currentPrice.toLocaleString("en-AU")}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      {asset.change >= 0 ? (
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingUp className="h-4 w-4" />
                          <span className="font-bold text-sm">{asset.change}%</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-red-600">
                          <TrendingDown className="h-4 w-4" />
                          <span className="font-bold text-sm">{asset.change}%</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Link href={`/dashboard/tracker/${asset.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-5 bg-secondary rounded-lg border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Track your precious metals and diamond holdings in real-time. Monitor price changes, calculate returns,
            and manage your portfolio effectively. All values are updated based on current market prices. For detailed
            asset information and historical tracking, click "Details" on any asset.
          </p>
        </div>
      </div>
    </main>
  )
}

export default function TrackingPageClient() {
  return (
    <AuthGuard>
      <TrackingContent />
    </AuthGuard>
  )
}
