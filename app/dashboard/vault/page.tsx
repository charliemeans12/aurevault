'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuthGuard, clearAllAuth } from '@/components/auth-guard'
import { DashboardNav } from '@/components/dashboard-nav'
import { LogOut, Lock, Shield, MapPin, Zap } from 'lucide-react'
import Image from 'next/image'

function VaultContent() {
  const router = useRouter()

  const handleLogout = () => {
    clearAllAuth()
    router.replace('/login')
  }

  const vaultLocations = [
    {
      name: 'Melbourne Vault',
      address: '3792 Collin\'s Street, Melbourne VIC 3068',
      capacity: '500,000+',
      assetCount: 58,
      temperature: '18-22°C',
      humidity: '45-55%',
    },
  ]

  const vaultStats = [
    {
      label: 'Total Assets',
      value: '58',
      icon: '🏆',
    },
    {
      label: 'Total Value',
      value: '$13,948,820.00',
      icon: '💎',
    },
    {
      label: 'Insurance Coverage',
      value: '100%',
      icon: '🛡️',
    },
    {
      label: 'Security Level',
      value: 'Tier 1',
      icon: '🔒',
    },
  ]

  return (
    <main className="min-h-screen pb-12 bg-background">
      <DashboardNav />
      <div className="container px-4 md:px-6 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-1">Secure Storage</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Your Vault</h1>
              <p className="text-muted-foreground mt-2">Institutional-grade asset storage and management</p>
            </div>
            <Button onClick={handleLogout} variant="destructive" className="w-full md:w-auto">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Vault Statistics */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          {vaultStats.map((stat, idx) => (
            <Card key={idx} className="border border-border">
              <CardHeader>
                <CardTitle className="text-base">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vault Information */}
        <div className="mb-8">
          <Card className="border border-border overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">Melbourne Vault Facility</CardTitle>
              <CardDescription>Your primary secure storage location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground font-medium">{vaultLocations[0].address}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Temperature</p>
                      <p className="text-foreground font-medium">{vaultLocations[0].temperature}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Humidity</p>
                      <p className="text-foreground font-medium">{vaultLocations[0].humidity}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Storage Capacity</p>
                      <p className="text-foreground font-medium">{vaultLocations[0].capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Your Assets</p>
                      <p className="text-foreground font-medium">{vaultLocations[0].assetCount}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-secondary rounded-lg">
                  <div className="relative w-full h-48">
                    <Image
                      src="/assets/sealed-diamonds-logo.jpeg"
                      alt="Lucas Campbell Premium Diamond Collection - 100.515 Carats"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-border">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <CardTitle className="text-base">Multi-Layer Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Biometric access control</p>
                <p>✓ 24/7 surveillance monitoring</p>
                <p>✓ Motion sensors and alarms</p>
                <p>✓ Reinforced vault doors</p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-5 w-5 text-accent" />
                  <CardTitle className="text-base">Insurance & Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ 100% asset coverage</p>
                <p>✓ International protection</p>
                <p>✓ Regular audits and certifications</p>
                <p>✓ Comprehensive documentation</p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <CardTitle className="text-base">Environmental Control</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Temperature regulation (18-22°C)</p>
                <p>✓ Humidity control (45-55%)</p>
                <p>✓ Backup power systems</p>
                <p>✓ Climate monitoring</p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <CardTitle className="text-base">Access Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Appointment-based access</p>
                <p>✓ Biometric verification</p>
                <p>✓ Private viewing rooms</p>
                <p>✓ Professional staff assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Access Request */}
        <Card className="border border-border mb-8">
          <CardHeader>
            <CardTitle>Schedule Vault Access</CardTitle>
            <CardDescription>Request an appointment to access or manage your stored assets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                To access your vault or discuss your stored assets, please schedule an appointment with our team. We
                offer flexible viewing hours and private consultation rooms for your convenience.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Appointment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="p-5 bg-secondary rounded-lg border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your assets are stored in our state-of-the-art vault facility with institutional-grade security. We
            maintain comprehensive insurance coverage, regular security audits, and strict environmental controls to
            ensure your precious metals and diamonds remain safe and properly preserved. Contact our customer service
            team for any questions about your stored assets or vault access.
          </p>
        </div>
      </div>
    </main>
  )
}

export default function VaultPage() {
  return (
    <AuthGuard>
      <VaultContent />
    </AuthGuard>
  )
}
