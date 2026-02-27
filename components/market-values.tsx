"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { MoreVertical } from "lucide-react"

export function MarketValues() {
  const marketChartData = [
    { time: "02:00 AM", value: 5890.7 },
    { time: "04:00 AM", value: 6120.5 },
    { time: "06:00 AM", value: 5980.3 },
    { time: "08:00 AM", value: 6200.1 },
  ]

  const marketActives = [
    { name: "Vodafone Idea Ltd", symbol: "VODAFONEIDE", value: 11.16, change: "-0.89%", isNegative: true },
    { name: "Easy Trip Planners Ltd", symbol: "EASEMYTRIP", value: 9.3, change: "+0.87%", isNegative: false },
    { name: "Filatex Fashions Ltd", symbol: "FILATFASH", value: 0.24, change: "-4.00%", isNegative: true },
    { name: "Dharan Infra-EPC Ltd", symbol: "DHARAN", value: 0.15, change: "+0.00%", isNegative: false },
    { name: "Suzlon Energy Ltd", symbol: "SUZLON", value: 44.46, change: "-1.75%", isNegative: true },
  ]

  const metalsPrices = [
    { name: "Gold (Au)", price: 5090.7, change: "+3.30%", isPositive: true },
    { name: "Silver (Ag)", price: 90.812, change: "-0.206%", isPositive: false },
    { name: "Platinum (Pt)", price: 2050, change: "+2.1%", isPositive: true },
    { name: "Palladium (Pd)", price: 965, change: "+1.5%", isPositive: true },
  ]

  return (
    <div className="w-full space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Markets Chart */}
        <div className="bg-primary rounded-lg p-6 text-primary-foreground border border-primary-foreground/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-base">Markets</h3>
            <button className="p-1 hover:bg-primary-foreground/10 rounded" aria-label="More options">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { label: "Dow Jones", value: "768.92", change: "+3.47 (+0.44%)", isNeg: false },
              { label: "FTSE All World", value: "692.89", change: "+2.02 (+0.29%)", isNeg: false },
              { label: "US Oil WTI", value: "66.71", change: "-0.31 (-0.47%)", isNeg: true },
              { label: "Gold", value: "5,090.70", change: "+93.30 (+1.87%)", isNeg: false },
              { label: "US Dollar/INR", value: "90.812", change: "-0.206 (-0.23%)", isNeg: true },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-primary-foreground/50">{item.label}</p>
                <p className="text-lg font-bold">{item.value}</p>
                <p className={`text-xs ${item.isNeg ? "text-red-400" : "text-emerald-400"}`}>{item.change}</p>
              </div>
            ))}
          </div>

          <div className="h-36 bg-primary-foreground/5 rounded">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.3)" style={{ fontSize: "11px" }} />
                <YAxis stroke="rgba(255,255,255,0.3)" style={{ fontSize: "11px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 25%, 14%)",
                    border: "1px solid hsl(220, 20%, 24%)",
                    borderRadius: "6px",
                    color: "white",
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="hsl(40, 60%, 50%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex gap-2 mt-3 text-xs text-primary-foreground/40">
            {["1D", "5D", "1M", "1Y", "5Y", "Max"].map((t) => (
              <button key={t} className="px-2 py-1 hover:text-primary-foreground transition-colors">
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Market Actives */}
        <div className="bg-primary rounded-lg p-6 text-primary-foreground border border-primary-foreground/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-base">Market Actives</h3>
            <button className="p-1 hover:bg-primary-foreground/10 rounded" aria-label="More options">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {marketActives.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm border-b border-primary-foreground/10 pb-2">
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-primary-foreground/40">{item.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">{item.value}</p>
                  <p className={`text-xs ${item.isNegative ? "text-red-400" : "text-emerald-400"}`}>{item.change}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="text-accent text-sm mt-4 hover:text-accent/80 transition-colors font-medium">
            {"See market actives \u2192"}
          </button>
        </div>

        {/* Precious Metals */}
        <div className="bg-primary rounded-lg p-6 text-primary-foreground border border-primary-foreground/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-base">Precious Metals</h3>
            <button className="p-1 hover:bg-primary-foreground/10 rounded" aria-label="More options">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {metalsPrices.map((metal, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm border-b border-primary-foreground/10 pb-2">
                <div>
                  <p className="font-medium text-sm">{metal.name}</p>
                  <p className="text-xs text-primary-foreground/40">Live price</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">${metal.price}</p>
                  <p className={`text-xs ${metal.isPositive ? "text-emerald-400" : "text-red-400"}`}>
                    {metal.isPositive ? "\u25B2" : "\u25BC"} {metal.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="text-accent text-sm mt-4 hover:text-accent/80 transition-colors font-medium">
            {"See precious metals \u2192"}
          </button>
        </div>
      </div>
    </div>
  )
}
