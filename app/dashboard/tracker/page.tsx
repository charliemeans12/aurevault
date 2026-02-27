import type { Metadata } from "next"
import TrackingPageClient from "./TrackingPageClient"

export const metadata: Metadata = {
  title: "Asset Tracking",
  description:
    "Track your diamonds in real-time with our advanced tracking system. Monitor your valuable assets securely.",
  openGraph: {
    title: "Asset Tracking | Aurevault Precious Metals Pty LTD",
    description:
      "Track your diamonds in real-time with our advanced tracking system. Monitor your valuable assets securely.",
  },
}

export default function TrackingPage() {
  return <TrackingPageClient />
}
