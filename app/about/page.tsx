import type { Metadata } from "next"
import { Shield, Users, Building, Trophy, Globe, Award, Star, Diamond } from "lucide-react"
import { GoldShowcase } from "@/components/gold-showcase"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aurevault Precious Metals Pty LTD's history, mission, and commitment to secure precious metals storage and transport in Victoria, Australia.",
  openGraph: {
    title: "About Aurevault Precious Metals Pty LTD",
    description:
      "Learn about Aurevault Precious Metals Pty LTD's history, mission, and commitment to secure precious metals storage and transport in Victoria, Australia.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/about",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aurevault Precious Metals Pty LTD",
    description:
      "Learn about Aurevault Precious Metals Pty LTD's history, mission, and commitment to secure precious metals storage and transport.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/heroes/about-fullbleed.jpg"
            alt="High-security vault corridor with deposit boxes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[hsl(220,25%,14%)]/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  About Aurevault
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
                  Protecting Wealth Across Generations
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                  Secure shipment, vault storage, and trustee services for precious metals and diamonds across Australia since establishment.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-3xl font-bold text-accent">10K+</p>
                    <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">Trusted Clients</p>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div>
                    <p className="text-3xl font-bold text-accent">5+</p>
                    <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">Secure Facilities</p>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div>
                    <p className="text-3xl font-bold text-accent">24/7</p>
                    <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6">
        {/* Gold Showcase */}
        <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden mt-12">
          <GoldShowcase />
        </div>

        {/* Features Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {[
            { icon: Shield, label: "Industry-leading security protocols" },
            { icon: Users, label: "Expert team of security professionals" },
            { icon: Building, label: "State-of-the-art facilities" },
            { icon: Trophy, label: "Award-winning tracking technology" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
              <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
              <p className="text-sm text-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        {/* History & Mission */}
        <section className="py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-widest uppercase text-accent">Our Story</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our History</h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Aurevault Precious Metals Pty Ltd was established in Australia with a focused objective: to provide secure and reliable shipment services for gold and diamonds within the growing precious metals industry. The company began its operations in Western Australia, a region globally recognized for its rich mining activity and strong gold production sector.
                </p>
                <p>
                  In its early years, Aurevault concentrated on high-value logistics. We developed structured transport systems designed specifically for precious metals and gemstones, ensuring every shipment was managed with strict chain-of-custody procedures, comprehensive insurance coverage, and discreet handling protocols.
                </p>
                <p>
                  As client relationships deepened, it became clear that secure transportation alone was not enough. Many investors, families, and estate planners required a trusted institution where gold and diamonds could be stored safely over the long term. In response, we expanded our services to include advanced vault facilities.
                </p>
                <p>
                  Over time, the needs of our clients evolved further, particularly in matters involving estate planning and probate protection. This led to the introduction of our trustee and custodial services.
                </p>
                <p>
                  To strengthen our operational reach, Aurevault strategically transitioned its primary base to Victoria. From Victoria, we now coordinate nationwide shipment logistics, manage secure vault operations, and oversee trustee-based asset protection services.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-widest uppercase text-accent">Purpose</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  The mission of Aurevault Precious Metals Pty Ltd is to provide secure, transparent, and legally structured protection for gold and diamonds through specialized shipment, advanced vault storage, and trustee custodial services.
                </p>
                <p>
                  We exist to safeguard wealth -- not only in transit, but across generations. Gold and diamonds often represent legacy, family stability, and long-term investment. Our purpose is to ensure that these assets remain protected against risk, uncertainty, and mismanagement.
                </p>
                <p>
                  We are committed to delivering secure and insured transportation of precious metals and gemstones, advanced vault storage with multilayered security systems, trustee-based custodial services for estate planning and probate processes, and transparent documentation and accountability at every stage.
                </p>
                <p>
                  Our mission extends beyond physical protection. We aim to provide peace of mind. Whether assets are being transported across Australia, stored for long-term preservation, or held in trust for children during probate proceedings, we operate with integrity, discretion, and strict compliance standards.
                </p>
                <p>
                  At Aurevault Precious Metals Pty Ltd, our mission is clear: to protect what is valuable today while preserving what matters for tomorrow and for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operations */}
        <section className="py-16 md:py-20 border-t border-border">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">How We Operate</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">Our Operations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Australia Operations",
                content: [
                  "Our headquarters, located in Victoria, Australia, serves as the central hub for our gold storage and security operations. With Australia being a leading global producer of precious metals, our strategic presence here allows us to work directly with mining operations, refineries, and exporters.",
                  "Our facilities across Australia specialize in diamond security and certification. Australia is renowned for its diamonds and precious stones, and our presence allows us to offer specialized services for diamond miners, dealers, and investors.",
                ],
              },
              {
                icon: Diamond,
                title: "Advanced Security",
                content: [
                  "Our facilities across Australia are equipped with the latest in security technology, including biometric access, 24/7 surveillance, and advanced alarm systems. We ensure that every asset is protected under the highest industry standards.",
                  "We continuously update our security protocols to counter emerging threats, providing our clients with peace of mind that their valuable assets are always safe within our Australian vaults.",
                ],
              },
              {
                icon: Diamond,
                title: "Global Connectivity",
                content: [
                  "From our strategic location in Victoria, Australia, we offer unparalleled connectivity to global markets. This allows for efficient and secure transportation of assets to and from major financial centers worldwide.",
                  "Our logistics network, managed from Australia, ensures that your precious assets can be securely moved across continents, maintaining integrity and security at every step.",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <div className="text-muted-foreground space-y-3 text-sm leading-relaxed">
                  {item.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 border-t border-border">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">What We Offer</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Secure Storage",
                description: "Our state-of-the-art vaults across Australia offer the highest level of security for your precious metals and gemstones. With multiple layers of protection, including biometric access controls, 24/7 armed security, and advanced surveillance systems, your assets remain safe yet accessible.",
              },
              {
                icon: Globe,
                title: "Global Transport",
                description: "We provide secure transportation of precious assets from our facilities in Australia to destinations worldwide. Our logistics team coordinates with trusted partners and employs advanced tracking technology to ensure your valuables reach their destination safely.",
              },
              {
                icon: Award,
                title: "Authentication & Certification",
                description: "Our team of experts across Australia provides comprehensive authentication and certification services for gold, diamonds, and other precious items. We work with leading international certification bodies to ensure your assets are properly documented.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-border rounded-lg bg-card space-y-3">
                <item.icon className="h-8 w-8 text-accent" />
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ethical Practices */}
        <section className="py-16 md:py-20 border-t border-border">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Responsibility</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Our Commitment to Ethical Practices</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
            <p>
              At Aurevault Precious Metals Pty LTD, we recognize the importance of ethical practices in precious resource extraction. We are committed to being part of the solution by promoting and implementing ethical practices throughout our operations in Australia.
            </p>
            <p>
              We work only with verified suppliers who adhere to strict environmental and labor standards. Our proprietary tracking systems allow us to maintain a complete chain of custody for all assets in our care, ensuring they are conflict-free and ethically sourced.
            </p>
            <p>
              We actively participate in industry initiatives aimed at improving transparency and ethical standards in the precious metals and gemstone trades. Our leadership regularly contributes to international forums on responsible mining and trading practices.
            </p>
            <p>
              We believe that ethical business is good business. Our commitment to responsible practices has earned us the trust of clients who share our values and want assurance that their investments do not contribute to conflict or exploitation.
            </p>
          </div>
        </section>

        {/* Global Presence Stats */}
        <section className="py-16 md:py-20 mb-12 bg-primary rounded-lg">
          <div className="px-6 md:px-10">
            <div className="text-center">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Reach</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-10">Global Presence</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-accent">1</h3>
                  <p className="text-sm text-primary-foreground/60">Country (Primary Operations)</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-accent">5+</h3>
                  <p className="text-sm text-primary-foreground/60">Secure Facilities</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-accent">10K+</h3>
                  <p className="text-sm text-primary-foreground/60">Trusted Clients Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20 border-t border-border">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">Client Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "As an international investor with significant holdings in precious metals, I've worked with many security firms. Aurevault's operations in Australia provide unique insights and capabilities that have proven invaluable for my portfolio.",
                author: "J.R., Private Investor",
              },
              {
                quote: "Aurevault's tracking technology gives me peace of mind that my assets are secure and accounted for at all times. Their team provides exceptional service and expertise that is unmatched in the industry.",
                author: "M.K., Jewelry Designer",
              },
              {
                quote: "As a mining company operating in Australia, we needed a security partner who understands the local landscape. Aurevault's deep roots in Australia have made them an invaluable partner in securing our supply chain.",
                author: "T.L., Mining Executive",
              },
            ].map((item) => (
              <div key={item.author} className="p-6 border border-border rounded-lg bg-card space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  {`"${item.quote}"`}
                </p>
                <p className="text-sm font-medium text-foreground">{"-- "}{item.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="py-16 md:py-20 border-t border-border">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Innovation</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Our Technology</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
            <p>
              At the heart of Aurevault's operations is our proprietary tracking and security technology, developed by our team of experts in Australia. This technology represents the culmination of decades of experience in precious asset security and has set new standards for the industry.
            </p>
            <p>
              Our tracking system employs multiple redundant methods to monitor assets at every stage of their journey. From secure RFID tags and blockchain verification to physical inspections and biometric access controls, we maintain an unbroken chain of custody for every item in our care.
            </p>
            <p>
              For diamonds and other gemstones, we utilize advanced imaging technology that creates a unique digital fingerprint for each stone. This allows for instant verification and prevents substitution or tampering.
            </p>
            <p>
              Our vault facilities feature state-of-the-art security systems, including seismic sensors, thermal imaging, and advanced access controls. These systems are monitored 24/7 by our security team.
            </p>
          </div>
        </section>

        {/* Future */}
        <section className="py-16 md:py-20 border-t border-border mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Vision</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Looking to the Future</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
            <p>
              As we look to the future, Aurevault Precious Metals Pty LTD remains committed to our founding principles while embracing innovation and growth. Our vision includes expanding our presence in key markets while maintaining our core operations in Australia.
            </p>
            <p>
              We are investing in new technologies that will further enhance our security and tracking capabilities, including advanced AI systems for predictive security and blockchain solutions for transparent asset verification and transfer.
            </p>
            <p>
              Environmental sustainability is increasingly central to our operations. We are implementing green technologies across our facilities and working with partners who share our commitment to responsible resource management.
            </p>
            <p>
              As global markets evolve, we are positioning Aurevault to be at the forefront of secure asset management for traditional precious metals and gemstones while also exploring new asset classes that require our unique security expertise.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
