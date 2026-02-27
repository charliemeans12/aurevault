import type React from "react";
import type { Metadata } from "next";
import LoginClientPage from "./client";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Secure login to your Aurevault Precious Metals account. Access your vault, tracking, and portfolio management.",
  openGraph: {
    title: "Login | Aurevault Precious Metals Pty LTD",
    description:
      "Secure login to your Aurevault Precious Metals account. Access your vault, tracking, and portfolio management.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/login",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | Aurevault Precious Metals Pty LTD",
    description:
      "Secure login to access your precious metals vault and portfolio.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginPage() {
  return <LoginClientPage />;
}
