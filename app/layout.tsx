import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://aurevault.com.au"),
  title: {
    default: "Aurevault Precious Metals Pty LTD - Secure Gold & Diamond Storage in Australia",
    template: "%s | Aurevault Precious Metals Pty LTD",
  },
  description:
    "Secure storage, transport, and trustee services for precious metals and diamonds across Australia. Based in Victoria.",
  keywords: [
    "gold storage",
    "diamond storage",
    "precious metals",
    "Australia",
    "Victoria",
    "secure storage",
    "vault storage",
  ],
  authors: [{ name: "Aurevault Precious Metals Pty LTD" }],
  creator: "Aurevault Precious Metals Pty LTD",
  publisher: "Aurevault Precious Metals Pty LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://aurevault.com.au",
    title: "Aurevault Precious Metals Pty LTD - Secure Storage in Victoria",
    description:
      "Secure storage, transport, and trustee services for precious metals and diamonds across Australia.",
    siteName: "Aurevault Precious Metals Pty LTD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurevault Precious Metals Pty LTD - Secure Storage in Victoria",
    description:
      "Secure storage, transport, and trustee services for precious metals and diamonds across Australia.",
  },
  icons: {
    icon: [{ url: "/assets/precious-metals-favicon.png" }],
  },
  manifest: "/site.webmanifest",
  generator: "Next.js",
}

export const viewport: Viewport = {
  themeColor: "#1a2236",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
