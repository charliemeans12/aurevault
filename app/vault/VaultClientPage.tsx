"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MarketValues } from "@/components/market-values"
import { Lock, Shield, Unlock, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function VaultClientPage() {
  const router = useRouter()

  const handleAccessVault = () => {
    router.push("/login")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="container px-4 md:px-6 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="text-foreground hover:text-accent hover:bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/heroes/vault-hero-wide.jpg"
            alt="Massive vault door with golden interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[hsl(220,25%,14%)]/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Secure Vault
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
                  Your Assets. Our Fortress.
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                  Institutional-grade diamond and precious metals storage with biometric access, 24/7 surveillance, and comprehensive insurance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={handleAccessVault}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Unlock className="mr-2 h-4 w-4" />
                    Access Your Vault
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    onClick={() => router.push("/contact")}
                  >
                    Request Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8">

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-border">
              <CardHeader>
                <Shield className="h-6 w-6 text-accent mb-2" />
                <CardTitle className="text-foreground">Maximum Security</CardTitle>
                <CardDescription>
                  Multi-layered security systems with 24/7 monitoring and advanced biometric controls.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <Lock className="h-6 w-6 text-accent mb-2" />
                <CardTitle className="text-foreground">Private Access</CardTitle>
                <CardDescription>
                  Discrete, appointment-only access with private viewing rooms and personal assistance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <Shield className="h-6 w-6 text-accent mb-2" />
                <CardTitle className="text-foreground">Insurance Coverage</CardTitle>
                <CardDescription>
                  Comprehensive insurance coverage with international protection guarantees.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Market Values Section */}
          <div className="mt-4 mb-12">
            <MarketValues />
          </div>
        </div>
      </div>
    </main>
  )
}
