'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuthGuard, AUTH_KEYS, clearAllAuth } from '@/components/auth-guard'
import { DashboardNav } from '@/components/dashboard-nav'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts'
import { LogOut, TrendingDown, TrendingUp, Zap } from 'lucide-react'

interface HistoricalData {
  year: number
  price: number
  index?: number
}

interface MetalData {
  historical: HistoricalData[]
  current: {
    current: number
    currency: string
    unit: string
  }
}

interface MetalsResponse {
  metals: {
    [key: string]: MetalData
  }
}

function InsightsContent() {
  const router = useRouter()
  const [metals, setMetals] = useState<MetalsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedMetals, setSelectedMetals] = useState(['gold', 'silver', 'platinum'])
  const [userName, setUserName] = useState('User')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem(AUTH_KEYS.USER_NAME)
      if (storedName) setUserName(storedName)
    }
  }, [])

  useEffect(() => {
    const fetchMetals = async () => {
      try {
        const response = await fetch('/api/metals')
        const data = await response.json()
        setMetals(data)
      } catch (error) {
        console.error('Failed to fetch metals data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetals()
  }, [])

  const handleLogout = () => {
    clearAllAuth()
    router.replace('/login')
  }

  if (loading || !metals) {
    return (
      <main className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-secondary rounded w-1/4"></div>
            <div className="h-12 bg-secondary rounded w-1/3"></div>
          </div>
        </div>
      </main>
    )
  }

  // Calculate metrics for each metal
  const calculateMetrics = (historical: HistoricalData[]) => {
    if (historical.length < 2) return null
    const oldest = historical[0].price
    const newest = historical[historical.length - 1].price
    const change = newest - oldest
    const percentChange = ((change / oldest) * 100).toFixed(2)
    const max = Math.max(...historical.map((d) => d.price))
    const min = Math.min(...historical.map((d) => d.price))
    const average = (historical.reduce((sum, d) => sum + d.price, 0) / historical.length).toFixed(2)

    // Calculate volatility (standard deviation)
    const avgValue = parseFloat(average)
    const variance =
      historical.reduce((sum, d) => sum + Math.pow(d.price - avgValue, 2), 0) / historical.length
    const volatility = Math.sqrt(variance).toFixed(2)

    // Calculate 5-year change
    const fiveYearsAgo = historical.find((d) => d.year === 2021)
    const fiveYearChange = fiveYearsAgo
      ? (((newest - fiveYearsAgo.price) / fiveYearsAgo.price) * 100).toFixed(2)
      : 'N/A'

    return { change, percentChange, max, min, average, volatility, fiveYearChange }
  }

  const combinedData = metals.metals.gold.historical.map((year, idx) => {
    const obj: any = { year: year.year }
    selectedMetals.forEach((metal) => {
      const metalData = metals.metals[metal]
      if (metalData) {
        obj[metal] = metalData.historical[idx]?.price || 0
      }
    })
    return obj
  })

  const colors: { [key: string]: string } = {
    gold: '#d4a574',
    silver: '#c0c0c0',
    platinum: '#e5e4e2',
    copper: '#b87333',
    palladium: '#71797e',
  }

  return (
    <main className="min-h-screen pb-12 bg-background">
      <DashboardNav />
      <div className="container px-4 md:px-6 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-1">
                Precious Metals Analytics
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Market Insights & Analysis</h1>
              <p className="text-muted-foreground mt-2">
                20-year historical trends and detailed performance metrics
              </p>
            </div>
            <Button onClick={handleLogout} variant="destructive" className="w-full md:w-auto">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Metal Selection */}
        <div className="mb-8">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Select Metals to Compare</CardTitle>
              <CardDescription>Choose which metals to display in the comparison chart</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {Object.keys(metals.metals)
                  .filter((m) => m !== 'diamond')
                  .map((metal) => (
                    <button
                      key={metal}
                      onClick={() => {
                        setSelectedMetals((prev) =>
                          prev.includes(metal) ? prev.filter((m) => m !== metal) : [...prev, metal],
                        )
                      }}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        selectedMetals.includes(metal)
                          ? 'bg-accent text-primary'
                          : 'bg-secondary text-foreground border border-border'
                      }`}
                    >
                      {metal.charAt(0).toUpperCase() + metal.slice(1)}
                    </button>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Combined Comparison Chart */}
        <div className="mb-8">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>20-Year Price Comparison</CardTitle>
              <CardDescription>Spot prices in USD per troy ounce (copper and palladium adjusted for scale)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={combinedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="4 4" stroke="hsl(220, 13%, 91%)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke="hsl(220, 10%, 46%)"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      stroke="hsl(220, 10%, 46%)"
                      tickFormatter={(value) => `$${value.toFixed(0)}`}
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(0, 0%, 100%)',
                        border: '1px solid hsl(220, 13%, 91%)',
                        borderRadius: '6px',
                        padding: '12px',
                      }}
                      formatter={(value: number) => `$${value.toFixed(2)}`}
                      labelStyle={{ color: 'hsl(220, 10%, 46%)' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    {selectedMetals.map((metal) => (
                      <Line
                        key={metal}
                        type="monotone"
                        dataKey={metal}
                        stroke={colors[metal] || '#8884d8'}
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={true}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics for Each Metal */}
        <div className="space-y-6 mb-8">
          {Object.entries(metals.metals)
            .filter(([key]) => key !== 'diamond')
            .map(([metalKey, metalData]) => {
              const metrics = calculateMetrics(metalData.historical)
              if (!metrics) return null

              return (
                <Card key={metalKey} className="border border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl capitalize">{metalKey} Analysis</CardTitle>
                        <CardDescription>
                          Current Price: ${metalData.current.current.toFixed(2)} {metalData.current.currency} per{' '}
                          {metalData.current.unit}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        {parseFloat(metrics.percentChange) >= 0 ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <TrendingUp className="h-5 w-5" />
                            <span className="font-bold">{metrics.percentChange}%</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-red-600">
                            <TrendingDown className="h-5 w-5" />
                            <span className="font-bold">{metrics.percentChange}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">20-Year Change</p>
                        <p className="text-lg font-bold text-foreground">
                          ${metrics.change.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{metrics.percentChange}% growth</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Highest Price</p>
                        <p className="text-lg font-bold text-accent">${metrics.max.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Peak value</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Lowest Price</p>
                        <p className="text-lg font-bold text-accent">${metrics.min.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Bottom value</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Average Price</p>
                        <p className="text-lg font-bold text-foreground">${metrics.average}</p>
                        <p className="text-xs text-muted-foreground mt-1">20-year median</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Volatility (Std Dev)</p>
                        <p className="text-lg font-bold text-foreground">${metrics.volatility}</p>
                        <p className="text-xs text-muted-foreground mt-1">Price variance</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">5-Year Growth</p>
                        <p
                          className={`text-lg font-bold ${
                            typeof metrics.fiveYearChange === 'number' &&
                            metrics.fiveYearChange >= 0
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {typeof metrics.fiveYearChange === 'number'
                            ? `${metrics.fiveYearChange}%`
                            : metrics.fiveYearChange}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Since 2021</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Recovery Index</p>
                        <p className="text-lg font-bold text-foreground">
                          {((metalData.current.current / metrics.max) * 100).toFixed(0)}%
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">vs peak price</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Price Range</p>
                        <p className="text-lg font-bold text-foreground">
                          ${(metrics.max - metrics.min).toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">High to low</p>
                      </div>
                    </div>

                    {/* Individual Metal Chart */}
                    <div className="h-64 w-full mt-6 pt-6 border-t border-border">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={metalData.historical}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id={`color${metalKey}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={colors[metalKey]} stopOpacity={0.3} />
                              <stop offset="100%" stopColor={colors[metalKey]} stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="4 4" stroke="hsl(220, 13%, 91%)" vertical={false} />
                          <XAxis
                            dataKey="year"
                            stroke="hsl(220, 10%, 46%)"
                            style={{ fontSize: '12px' }}
                          />
                          <YAxis
                            stroke="hsl(220, 10%, 46%)"
                            tickFormatter={(value) => `$${value.toFixed(0)}`}
                            style={{ fontSize: '12px' }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'hsl(0, 0%, 100%)',
                              border: '1px solid hsl(220, 13%, 91%)',
                              borderRadius: '6px',
                            }}
                            formatter={(value: number) => `$${value.toFixed(2)}`}
                          />
                          <Area
                            type="monotone"
                            dataKey="price"
                            stroke={colors[metalKey]}
                            strokeWidth={2}
                            fillOpacity={1}
                            fill={`url(#color${metalKey})`}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
        </div>

        {/* Key Insights */}
        <Card className="border border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              Key Market Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Gold Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Gold has demonstrated strong growth over the past 20 years, increasing from $635 (2006) to $2,785
                  (2026), representing a 338% total return. The metal showed significant volatility during the 2008
                  financial crisis but recovered strongly, establishing itself as a reliable hedge against inflation and
                  economic uncertainty.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Silver Volatility & Recovery</h4>
                <p className="text-sm text-muted-foreground">
                  Silver displays higher volatility than gold, with prices ranging from $11.55 to $35.23. Despite sharp
                  corrections in 2012-2016, silver recovered strongly post-2020, growing from $14.67 (2009) to $34.92
                  (2026). Its industrial applications support long-term demand alongside investment interest.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Platinum Market Challenges</h4>
                <p className="text-sm text-muted-foreground">
                  Platinum peaked at $1,719 (2011) but faced long-term headwinds due to industrial demand reduction and
                  supply disruptions. Current prices at $1,128 represent a 34% decline from peak, though the metal
                  remains valuable for jewelry and industrial catalysts, with price stabilization observed since 2023.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Copper as Economic Indicator</h4>
                <p className="text-sm text-muted-foreground">
                  Copper prices correlate strongly with global economic activity. Current prices at $4.92 per pound
                  reflect renewed industrial demand in 2024-2025. The metal showed strong recovery from pandemic lows,
                  growing 60% from 2020 levels, driven by renewable energy infrastructure buildout and EV production.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Palladium's Volatile Journey</h4>
                <p className="text-sm text-muted-foreground">
                  Palladium experienced extreme volatility, peaking at $2,768 (2021) before declining 60% to $1,092
                  (2026). The sharp correction reflects decreased automotive demand due to reduced emission standards
                  for hybrid vehicles and slow EV transition in some markets. Supply constraints remain a key factor.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Portfolio Recommendations</CardTitle>
            <CardDescription>Based on historical analysis and current market conditions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Long-Term Holdings</h4>
                <p className="text-sm text-muted-foreground">
                  Gold and silver remain ideal for long-term wealth preservation and inflation hedging. Their 20-year
                  track record shows consistent growth and proven resilience during market downturns. Maintain 10-15%
                  allocation in a diversified portfolio.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Economic Cycle Plays</h4>
                <p className="text-sm text-muted-foreground">
                  Copper and palladium offer upside during economic expansions. Monitor global manufacturing indices
                  and EV production forecasts. Current pricing offers value for investors with 3-5 year horizons, though
                  volatility remains elevated.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Diversification Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Mix stable performers (gold) with higher-growth opportunities (copper, silver). The low correlation
                  between metals provides portfolio resilience. Target 60% gold/platinum, 30% silver, 10% copper for
                  balanced exposure.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Risk Management</h4>
                <p className="text-sm text-muted-foreground">
                  Platinum and palladium show higher volatility (std dev $100+). Consider these for tactical positions
                  only. Use technical analysis for entry/exit signals. Maintain stop-losses at 5-10% below purchase
                  price to manage downside risk.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default function InsightsPage() {
  return (
    <AuthGuard>
      <InsightsContent />
    </AuthGuard>
  )
}
