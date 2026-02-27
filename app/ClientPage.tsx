"use client"

import { Button } from "@/components/ui/button"
import {
  Lock,
  TrendingUp,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { TransitionLoader } from "@/components/transition-loader"
import { StructuredData } from "@/components/structured-data"
import { ServiceCard } from "@/components/service-card"
import { BlogCard } from "@/components/blog-card"
import { LocationCard } from "@/components/location-card"
import { isSessionValid } from "@/components/auth-guard"

export default function ClientPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", message: "" })
  const router = useRouter()

  const handleTrackAssets = () => {
    if (!isSessionValid()) {
      router.push("/login")
      return
    }
    setIsLoading(true)
  }

  const handleLoadingComplete = () => {
    router.push("/dashboard/tracker")
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", phone: "", message: "" })
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aurevault Precious Metals Pty LTD",
    url: "https://aurevault.com.au",
    logo: "https://aurevault.com.au/assets/aurevault-logo.png",
    description: "Premium precious metals and diamond storage with advanced tracking and security.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3792 Collin's Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3068",
      addressCountry: "Australia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61480831062",
      contactType: "customer service",
      email: "reply-aurevaultltd@proton.me",
    },
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <StructuredData data={structuredData} />

      <TransitionLoader
        isLoading={isLoading}
        duration={1800}
        message="Preparing Asset Tracking System..."
        onComplete={handleLoadingComplete}
      />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/images/design-mode/IMG_1754.jpeg"
            alt="Secure precious metals vault"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[hsl(220,25%,14%)]/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Established in Australia
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
                  Premium Precious Metals & Diamonds
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                  {"Australia's trusted solution for secure storage, real-time tracking, and portfolio management of your most valuable assets."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={handleTrackAssets}
                  >
                    Track Assets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/login">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    >
                      Access Vault
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose Aurevault</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive solutions for storing and managing your precious metals and gemstones with
              industry-leading security and transparency.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={Lock}
              title="Secure Storage"
              description="State-of-the-art vault facilities with biometric access, 24/7 surveillance, and multi-layer security protocols."
              href="/about"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Real-Time Tracking"
              description="Monitor your assets 24/7 with our advanced tracking system and detailed portfolio analytics."
              href="/dashboard/tracker"
            />
            <ServiceCard
              icon={Globe}
              title="Global Transport"
              description="Secure logistics services for transporting precious assets worldwide with full insurance coverage."
              href="/about"
            />
            <ServiceCard
              icon={Shield}
              title="Certification"
              description="Third-party authentication and certification services ensuring authenticity and value verification."
              href="/about"
            />
          </div>
        </div>
      </section>

      {/* Victoria Operations */}
      <section className="py-20 px-4 md:px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Location</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Melbourne Hub</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Premium precious metals storage and tracking services based in Victoria, serving clients across Australia.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <LocationCard
                state="Victoria"
                city="Melbourne"
                        address="3792 Collin's Street, Melbourne VIC 3068"
                phone="+61480831062"
                email="replyaurevaultltd@yahoo.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/assets/diamond-display.jpeg"
                alt="Advanced tracking platform"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Technology</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Advanced Tracking Technology
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Our proprietary platform provides real-time asset monitoring, comprehensive analytics, and seamless
                integration with your existing systems.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time asset tracking and notifications",
                  "Blockchain-verified ownership records",
                  "24/7 portfolio analytics dashboard",
                  "Mobile app and API access",
                  "Multi-factor authentication security",
                  "International insurance partnerships",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 md:px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-base text-muted-foreground">
              Industry news, security updates, and investment insights for precious metals collectors
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <BlogCard
              title="How to Secure Your Gold Investment"
              category="Security"
              description="Best practices for protecting your precious metals portfolio with modern storage solutions and insurance options."
              imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apet72u2v9pb1-scaled-RDurbPFdDV0nQoCdQl3AzOjVyCW9Y8.avif"
              href="/blog/secure-gold-investment"
              date="Feb 15, 2024"
            />
            <BlogCard
              title="Diamond Market Trends in 2024"
              category="Investment"
              description="Understanding market dynamics, pricing factors, and the best strategies for building a valuable diamond collection."
              imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/348s-ctCQ21M1r31buFoVcHBBzUAnYnvx0T.jpg"
              href="/blog/diamond-trends"
              date="Feb 10, 2024"
            />
            <BlogCard
              title="Australia's Role in Precious Metals"
              category="Industry News"
              description="Exploring Australia's position in global precious metals markets and why local storage is increasingly important."
              imageUrl="/assets/precious-metals-footer-image.png"
              href="/blog/australia-metals"
              date="Feb 5, 2024"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-border text-foreground hover:bg-card">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{"Let's Discuss Your Security Needs"}</h2>
              <p className="text-base text-primary-foreground/70">
                Our team is ready to help you find the perfect storage and tracking solution
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your storage needs..."
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent resize-none"
                  required
                />
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Headquarters</p>
                        <p className="text-primary-foreground/60 text-sm">3792 Collin's Street</p>
                        <p className="text-primary-foreground/60 text-sm">Melbourne, VIC 30687</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-primary-foreground/60 text-sm">+61480831062</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-primary-foreground/60 text-sm">reply-aurevaultltd@proton.me</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-foreground/5 rounded-md p-5 border border-primary-foreground/10">
                  <p className="text-sm text-primary-foreground/60">
                    <strong className="text-primary-foreground/80">Response Time:</strong> We typically respond to
                    inquiries within 2 business hours during business hours (9am-5pm AEST, Monday-Friday).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
