"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu, Shield, Package, Info, Users, Phone } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/dashboard/tracker", label: "Tracking" },
  { href: "/vault", label: "Vault" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
]

const mobileLinks = [
  { href: "/about", label: "About Us", icon: Info },
  { href: "/dashboard/tracker", label: "Track Assets", icon: Package },
  { href: "/vault", label: "Vault Access", icon: Shield },
  { href: "/team", label: "Our Team", icon: Users },
  { href: "/contact", label: "Contact Us", icon: Phone },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-40 sm:h-14 sm:w-48 md:h-16 md:w-56">
            <Image
              src="/assets/aurevault-logo.png"
              alt="Aurevault Precious Metals Pty LTD"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors",
                pathname === link.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56"
            sideOffset={8}
          >
            {mobileLinks.map((link, index) => (
              <div key={link.href}>
                <DropdownMenuItem asChild>
                  <Link href={link.href} className="gap-3 py-3">
                    <link.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </DropdownMenuItem>
                {index === 3 && <DropdownMenuSeparator />}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  )
}
