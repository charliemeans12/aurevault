import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the experts behind Aurevault Precious Metals Pty LTD's success in precious metals storage and transport.",
  openGraph: {
    title: "Our Team | Aurevault Precious Metals Pty LTD",
    description:
      "Meet the experts behind Aurevault Precious Metals Pty LTD's success in precious metals storage and transport.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/team",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Aurevault Precious Metals Pty LTD",
    description:
      "Meet the experts behind Aurevault Precious Metals Pty LTD's success in precious metals storage and transport.",
  },
  robots: {
    index: true,
    follow: true,
  },
}


const teamMembers = [
  {
    name: "Mitchel Angelina",
    role: "Operations Executive",
    image: "/team/team-member-new-female-2.jpeg",
    bio: "Mitchel oversees the day-to-day operational efficiency of Aurevault Precious Metals Pty LTD. Her expertise in logistics and client relations ensures seamless transactions and exceptional service, maintaining our reputation for reliability and excellence.",
    linkedin: "#",
    email: "mitchelangelina@aol.com",
  },
  {
    name: "Christopher Leschen",
    role: "Vault Manager",
    image: "/team/team-member-new-male-1.jpeg",
    bio: "Christopher brings extensive experience in high-security vault operations and precious metal handling. He ensures the meticulous organization and impenetrable security of all assets within Aurevault Precious Metals, upholding the highest standards of integrity and precision.",
    linkedin: "#",
    email: "christopherleschen3@gmail.com",
  },
  {
    name: "Lara Matthias",
    role: "Client Relations Manager",
    image: "/team/team-member-new-female-1.jpeg",
    bio: "Lara is dedicated to fostering strong client relationships and ensuring exceptional service. Her proactive approach and deep understanding of client needs make her an invaluable asset in delivering personalized and secure asset management solutions.",
    linkedin: "#",
    email: "laramatthias1@outlook.com",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/heroes/team-fullbleed.jpg"
            alt="Corporate boardroom with city skyline view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[hsl(220,25%,14%)]/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Leadership
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
                  The People Behind Aurevault
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                  Decades of combined expertise in high-security operations, precious metals handling, and institutional-grade asset management.
                </p>
                {/* Portrait row inline with hero */}
                <div className="flex items-center gap-3">
                  {teamMembers.map((member, i) => (
                    <div key={member.name} className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-accent ${i > 0 ? "-ml-3" : ""}`}>
                      <Image src={member.image} alt={member.name} fill className="object-cover" />
                    </div>
                  ))}
                  <span className="text-sm text-primary-foreground/60 ml-2">Meet our team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="border border-border rounded-lg bg-card overflow-hidden"
              >
                {/* Profile Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    )}
                    <Link
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </Link>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-muted-foreground hover:text-accent transition-colors ml-auto"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-6 bg-secondary border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">Values</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Our Commitment to Security</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Every member of our leadership team brings decades of combined experience in high-security operations, precious metals handling, and institutional-grade asset management.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Security First",
                description: "Impenetrable vault operations with advanced security protocols",
              },
              {
                title: "Client Trust",
                description: "Personalized service and transparent communication at all times",
              },
              {
                title: "Excellence",
                description: "Institutional-grade standards in every aspect of our operations",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-accent font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
