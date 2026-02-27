import Link from "next/link"
import { Linkedin, Facebook, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Aurevault</h3>
            <p className="text-sm text-primary-foreground/60 mb-6 leading-relaxed">
              Premium precious metals and diamond storage with advanced security and real-time tracking.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/50 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/vault" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Vault Storage
                </Link>
              </li>
              <li>
                <Link href="/dashboard/tracker" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Asset Tracking
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Global Transport
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/compliance" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/legal/security" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div>
                <p className="text-primary-foreground/80 font-medium mb-1">Melbourne HQ</p>
                <p>3792 Collin's Street</p>
                <p>Melbourne, VIC 3068</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground/80">+61480831062</p>
                <p>replyaurevaultltd@yahoo.com</p>
              </div>
              <p className="text-xs text-primary-foreground/40 pt-2">Response: 2 business hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              &copy; {currentYear} Aurevault Precious Metals Pty LTD. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/40">
              ABN: 58 174 649 285 | Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
