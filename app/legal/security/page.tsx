import type { Metadata } from "next"
import { Shield, Lock, Fingerprint, Eye, Server, FileCheck, Radio, HardDrive } from "lucide-react"

export const metadata: Metadata = {
  title: "Security",
  description: "Aurevault Precious Metals Pty LTD security measures — physical vault security, digital infrastructure, insurance, and asset protection standards.",
  openGraph: {
    title: "Security | Aurevault Precious Metals Pty LTD",
    description: "Aurevault Precious Metals Pty LTD security measures — physical vault security, digital infrastructure, insurance, and asset protection standards.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/legal/security",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security | Aurevault Precious Metals Pty LTD",
    description: "Learn about our comprehensive security measures and asset protection standards.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Security
          </h1>
          <p className="text-primary-foreground/60 text-sm">
            Effective Date: 1 January 2025 &middot; Last Updated: 1 January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">

            {/* Intro */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Our Approach to Security</h2>
              <p className="leading-relaxed">
                At Aurevault Precious Metals Pty LTD, the security of your assets, personal information, and our operational infrastructure is our highest priority. We employ a layered, defence-in-depth approach that integrates physical, operational, digital, and procedural security controls across every aspect of our business. Our security program is designed to meet or exceed the standards expected of institutional-grade precious metals custodians and is subject to regular independent audit and review.
              </p>
            </div>

            {/* Security Overview Cards */}
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              {[
                { icon: Lock, title: "Physical Vault Security", desc: "Class 5 rated vault rooms with reinforced concrete, time-delayed access, and multi-point locking mechanisms." },
                { icon: Fingerprint, title: "Biometric Access Control", desc: "Multi-factor biometric authentication including fingerprint, retinal scan, and PIN verification for all vault access." },
                { icon: Eye, title: "24/7 Surveillance", desc: "Continuous CCTV monitoring with on-site and off-site security personnel, motion detection, and tamper alerts." },
                { icon: Server, title: "Digital Infrastructure", desc: "256-bit AES encryption, TLS 1.3, multi-factor authentication, and ISO 27001 aligned information security controls." },
                { icon: Radio, title: "Intrusion Detection", desc: "Multi-zone alarm systems with seismic, thermal, and vibration sensors connected to 24/7 monitoring centres." },
                { icon: Shield, title: "Comprehensive Insurance", desc: "All-risk insurance covering theft, loss, damage, and natural disaster for the full declared value of stored assets." },
                { icon: FileCheck, title: "Independent Audit", desc: "Annual independent security audits and penetration testing by accredited third-party security consultants." },
                { icon: HardDrive, title: "Disaster Recovery", desc: "Geographically distributed backup systems with defined RTOs and RPOs to ensure business continuity." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 border border-border rounded-md bg-card">
                  <Icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Physical Security</h2>
              <p className="leading-relaxed">
                Our vault facilities are purpose-built to the highest physical security standards and incorporate the following measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Vault Construction:</strong> Class 5 rated vault rooms constructed with reinforced concrete walls, floors, and ceilings, integrated steel reinforcing bar (rebar) mesh, and anti-drill, anti-cut, and anti-torch plate. Vault doors are multi-point locking with time-delay mechanisms and dual custody (two-person) opening protocols.</li>
                <li><strong className="text-foreground">Access Control:</strong> All access to secure areas requires multi-factor authentication combining biometric verification (fingerprint and/or retinal scan), personal identification number (PIN), and physical access credentials. Access is restricted to authorised personnel only and is logged and auditable at all times.</li>
                <li><strong className="text-foreground">Surveillance:</strong> High-definition, 360-degree CCTV cameras are deployed throughout all facilities, including vault rooms, corridors, loading bays, and external perimeters. All footage is recorded, stored for a minimum of 90 days, and monitored in real-time by on-site and off-site security operations centres. Video analytics including motion detection, facial recognition, and behavioural anomaly detection are employed.</li>
                <li><strong className="text-foreground">Intrusion Detection:</strong> Multi-zone alarm systems incorporating seismic sensors (to detect drilling, cutting, or forced entry attempts), passive infrared (PIR) motion sensors, vibration sensors, glass break detectors, and magnetic door contacts. All alarms are connected to a 24/7 monitoring centre with armed response capability.</li>
                <li><strong className="text-foreground">Perimeter Security:</strong> Secure perimeter fencing with anti-climb and anti-cut features, controlled vehicle entry with bollards and barriers, security lighting with backup power, and manned security checkpoints.</li>
                <li><strong className="text-foreground">Environmental Controls:</strong> Climate-controlled vault environments with fire suppression systems (clean agent / inert gas), smoke and heat detection, flood detection and mitigation, and uninterruptible power supply (UPS) with generator backup.</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Secure Transport</h2>
              <p className="leading-relaxed">
                All transportation of precious metals and high-value assets is conducted via armoured vehicles operated by licensed and vetted security personnel. Transport operations include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>GPS-tracked armoured vehicles with real-time monitoring and geofencing alerts.</li>
                <li>Dual-custody protocols requiring a minimum of two authorised security personnel for all asset movements.</li>
                <li>Pre-planned and risk-assessed routes with contingency route options.</li>
                <li>Tamper-evident seals and serialised packaging for all shipments with photographic chain-of-custody documentation at each transfer point.</li>
                <li>Full insurance coverage for the declared value of assets during the entire transit period.</li>
                <li>Immediate notification to the client upon departure, arrival, and secure handover of assets.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Digital and Information Security</h2>
              <p className="leading-relaxed">
                Our digital security program is aligned with AS/NZS ISO 27001 information security management principles and includes the following controls:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Encryption:</strong> All sensitive data is encrypted at rest using 256-bit AES encryption and in transit using TLS 1.3 or higher. Cryptographic keys are managed through a hardware security module (HSM) with strict access controls and key rotation policies.</li>
                <li><strong className="text-foreground">Authentication:</strong> Multi-factor authentication (MFA) is required for all user accounts and administrative access. Password policies enforce minimum complexity, length, and rotation requirements. Privileged access management (PAM) solutions are deployed for all systems containing sensitive data.</li>
                <li><strong className="text-foreground">Network Security:</strong> Enterprise-grade firewalls, intrusion detection and prevention systems (IDS/IPS), web application firewalls (WAF), and distributed denial-of-service (DDoS) mitigation. Network segmentation isolates critical systems and data.</li>
                <li><strong className="text-foreground">Vulnerability Management:</strong> Regular vulnerability assessments and external penetration testing conducted by independent, accredited security consultants. Critical vulnerabilities are remediated within defined SLAs.</li>
                <li><strong className="text-foreground">Security Monitoring:</strong> 24/7 security event monitoring through a Security Information and Event Management (SIEM) system with automated alerting and incident escalation procedures.</li>
                <li><strong className="text-foreground">Data Backup and Recovery:</strong> Geographically distributed, encrypted backup systems with defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO). Backup restoration is tested at least quarterly.</li>
                <li><strong className="text-foreground">Secure Development:</strong> Application code is developed following OWASP Secure Coding Practices and undergoes security review and testing before deployment.</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Personnel Security</h2>
              <p className="leading-relaxed">
                All Aurevault employees, contractors, and third-party personnel with access to secure areas, client data, or critical systems undergo:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Pre-employment background checks including criminal history, identity verification, employment and qualification verification, and financial history (where permitted by law).</li>
                <li>Execution of confidentiality and non-disclosure agreements.</li>
                <li>Security awareness training at induction and annually thereafter, covering physical security, cybersecurity, social engineering, and incident reporting.</li>
                <li>Role-based access control (RBAC) ensuring personnel have access only to the systems and areas necessary for their duties (principle of least privilege).</li>
                <li>Periodic review of access rights and prompt revocation of access upon role change or termination.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Insurance and Asset Protection</h2>
              <p className="leading-relaxed">
                All client assets stored in Aurevault vault facilities are covered by comprehensive, all-risk insurance policies underwritten by reputable, A-rated (or equivalent) insurance carriers. Our insurance coverage includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Coverage for theft (including employee dishonesty), robbery, burglary, and mysterious disappearance.</li>
                <li>Coverage for physical damage from fire, flood, natural disaster, and other insured perils.</li>
                <li>Transit coverage for all assets during armoured transport, from point of collection to point of delivery.</li>
                <li>Professional indemnity insurance covering errors, omissions, and negligent acts in the provision of custodial and advisory services.</li>
                <li>Cyber liability insurance covering data breach response costs, client notification, credit monitoring, and regulatory defence costs.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Evidence of insurance coverage is available to clients upon request. Insurance policies are reviewed and renewed annually to ensure adequacy of coverage limits relative to assets under custody. The cost of standard insurance coverage is included in storage fees.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Incident Response</h2>
              <p className="leading-relaxed">
                Aurevault maintains a documented Incident Response Plan (IRP) that defines procedures for the detection, assessment, containment, eradication, recovery, and post-incident review of security incidents affecting physical assets, digital systems, or personal information. The IRP is tested at least annually through tabletop exercises and simulated incident scenarios. In the event of a data breach involving personal information that is likely to result in serious harm, Aurevault will notify affected individuals and the Office of the Australian Information Commissioner (OAIC) in accordance with the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act 1988 (Cth).
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Business Continuity</h2>
              <p className="leading-relaxed">
                We maintain a Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP) to ensure the continued availability of our services and the protection of client assets in the event of a disruptive incident. Key elements include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Identification and assessment of critical business functions and dependencies.</li>
                <li>Defined recovery strategies for each critical function, including failover to secondary sites where applicable.</li>
                <li>Regular testing and exercising of BCP and DRP procedures.</li>
                <li>Communication plans for notifying clients, regulators, and stakeholders in the event of a significant disruption.</li>
                <li>Post-incident review and continuous improvement processes.</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Responsible Disclosure</h2>
              <p className="leading-relaxed">
                Aurevault encourages responsible disclosure of security vulnerabilities in our digital systems. If you believe you have discovered a security vulnerability, please contact our Security Team at the details below. We request that you provide us with reasonable time to investigate and remediate the vulnerability before making any public disclosure, and that you refrain from accessing or modifying other users&rsquo; data.
              </p>
              <div className="mt-4 p-4 border border-border rounded-md bg-secondary/50">
                <p className="text-foreground font-medium">Security Team</p>
                <p className="mt-1">Aurevault Precious Metals Pty LTD</p>
                <p>3792 Collin's Street, Melbourne VIC 3068</p>
                <p>Email: replyaurevaultltd@yahoo.com</p>
                <p>Phone: +61 480 831 062</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
