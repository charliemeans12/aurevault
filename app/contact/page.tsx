import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Phone, Copy, Check } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aurevault Precious Metals Pty LTD to learn more about our secure storage and tracking services for your precious assets.",
  openGraph: {
    title: "Contact Us | Aurevault Precious Metals Pty LTD",
    description:
      "Get in touch with Aurevault Precious Metals Pty LTD to learn more about our secure storage and tracking services for your precious assets.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/contact",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aurevault Precious Metals Pty LTD",
    description:
      "Get in touch with Aurevault Precious Metals Pty LTD to learn more about our secure storage and tracking services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/heroes/contact-fullbleed.jpg"
            alt="Melbourne skyline at golden hour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[hsl(220,25%,14%)]/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Contact Us
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
                  {"Let's Start a Conversation"}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                  Whether you need secure storage, asset transport, or a private
                  consultation, our Melbourne-based team is ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+61480831062">
                    <Button
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      +61 480 831 062
                    </Button>
                  </a>
                  <a href="mailto:replyaurevaultltd@yahoo.com">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Building2 className="h-5 w-5 text-accent" />
                  Headquarters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-base font-semibold text-foreground">
                  Aurevault Precious Metals Pty LTD
                </p>
                <p className="text-sm text-muted-foreground">
                  3792 Collin's Street
                </p>
                <p className="text-sm text-muted-foreground">
                  Melbourne, VIC 3068
                </p>
                <p className="text-sm text-muted-foreground">Australia</p>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="h-5 w-5 text-accent" />
                  Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+61480831062"
                  className="text-base font-semibold text-accent hover:underline"
                >
                  +61480831062
                </a>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Mail className="h-5 w-5 text-accent" />
                  Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EmailCopyButton email="replyaurevaultltd@yahoo.com" />
              </CardContent>
            </Card>
          </div>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="text-foreground">
                Send Us a Message
              </CardTitle>
              <CardDescription>
                {
                  "Fill out the form below and we'll get back to you within 24 hours"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+61 000 000 000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="asset-type">Asset Type</Label>
                  <Input
                    id="asset-type"
                    placeholder="Gold, Diamonds, etc."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    className="min-h-[100px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
