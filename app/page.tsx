import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Aurevault Precious Metals | Premium Gold & Diamond Storage",
  description:
    "Australia's trusted solution for secure precious metals and diamond storage with advanced real-time tracking, certified vaults, and global transport services. Based in Melbourne, Victoria.",
  openGraph: {
    title: "Aurevault Precious Metals | Premium Gold & Diamond Storage",
    description:
      "Australia's trusted solution for secure precious metals and diamond storage with advanced real-time tracking, certified vaults, and global transport services. Based in Melbourne, Victoria.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurevault Precious Metals | Premium Gold & Diamond Storage",
    description:
      "Australia's trusted solution for secure precious metals and diamond storage with advanced real-time tracking, certified vaults, and global transport services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function Home() {
  return <ClientPage />
}
