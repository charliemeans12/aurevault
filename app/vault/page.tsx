import type { Metadata } from "next"
import VaultClientPage from "./VaultClientPage"

export const metadata: Metadata = {
  title: "Secure Vault Access",
  description:
    "Access your stored diamonds with our state-of-the-art vault system. Maximum security for your precious assets.",
  openGraph: {
    title: "Secure Vault Access | Aurevault Precious Metals Pty LTD",
    description:
      "Access your stored diamonds with our state-of-the-art vault system. Maximum security for your precious assets.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/vault",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Vault Access | Aurevault Precious Metals Pty LTD",
    description:
      "Access your stored diamonds with our state-of-the-art vault system. Maximum security for your precious assets.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function VaultPage() {
  return <VaultClientPage />
}
