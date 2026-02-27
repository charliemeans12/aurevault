'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, TrendingUp, Vault, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

export function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    {
      href: '/dashboard',
      label: 'Overview',
      icon: BarChart3,
      exact: true,
    },
    {
      href: '/dashboard/insights',
      label: 'Insights',
      icon: TrendingUp,
    },
    {
      href: '/dashboard/tracker',
      label: 'Tracker',
      icon: Settings,
    },
    {
      href: '/dashboard/vault',
      label: 'Vault',
      icon: Vault,
    },
  ]

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-40">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto py-0">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href) && item.href !== '/dashboard'

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 border-transparent',
                  isActive
                    ? 'border-accent text-accent'
                    : 'text-muted-foreground hover:text-foreground hover:border-border',
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
