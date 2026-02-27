import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Aurevault Precious Metals Pty LTD Privacy Policy — how we collect, use, store, and protect your personal information under Australian law.",
  openGraph: {
    title: "Privacy Policy | Aurevault Precious Metals Pty LTD",
    description: "Aurevault Precious Metals Pty LTD Privacy Policy — how we collect, use, store, and protect your personal information under Australian law.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/legal/privacy",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Aurevault Precious Metals Pty LTD",
    description: "Learn about our privacy practices and how we protect your personal information.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Privacy Policy
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

            {/* 1. Introduction */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p className="leading-relaxed">
                Aurevault Precious Metals Pty LTD (ABN 58 174 649 285), together with its subsidiaries, affiliates, and related entities (collectively, &ldquo;Aurevault,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), respects your privacy and is committed to protecting the personal information you provide to us. This Privacy Policy explains how we collect, use, disclose, store, and safeguard your personal information in accordance with the Australian Privacy Act 1988 (Cth) (&ldquo;Privacy Act&rdquo;) and the Australian Privacy Principles (&ldquo;APPs&rdquo;).
              </p>
              <p className="leading-relaxed mt-3">
                This Privacy Policy applies to all interactions with Aurevault, including through our website (www.aurevault.com.au), mobile applications, in-person consultations, telephone and email communications, vault access services, shipment and tracking services, and any other channels through which we collect personal information.
              </p>
            </div>

            {/* 2. Personal Information We Collect */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Personal Information We Collect</h2>
              <p className="leading-relaxed">We may collect the following categories of personal information depending on the nature of your interaction with us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Identity Information:</strong> Full legal name, date of birth, nationality, gender, and photographs or scanned copies of government-issued identification documents (passport, driver&rsquo;s licence, or national identity card).</li>
                <li><strong className="text-foreground">Contact Information:</strong> Residential and postal addresses, email addresses, telephone numbers, and emergency contact details.</li>
                <li><strong className="text-foreground">Financial Information:</strong> Bank account details, credit or debit card numbers, billing addresses, payment and transaction histories, tax file numbers (where lawfully required), and source-of-funds declarations.</li>
                <li><strong className="text-foreground">Vault and Asset Information:</strong> Details of precious metals and diamonds stored in our vault facilities, including type, weight, purity, certification identifiers, serial numbers, insurance valuations, and custodial records.</li>
                <li><strong className="text-foreground">Verification and Compliance Information:</strong> Information collected for Know-Your-Customer (&ldquo;KYC&rdquo;), Anti-Money Laundering (&ldquo;AML&rdquo;), and Counter-Terrorism Financing (&ldquo;CTF&rdquo;) purposes, including beneficial ownership information, politically exposed person (&ldquo;PEP&rdquo;) screenings, and sanctions checks.</li>
                <li><strong className="text-foreground">Technical Information:</strong> IP addresses, browser type and version, device identifiers, operating system, access times, referring URLs, pages viewed, clickstream data, and cookies or similar tracking technologies.</li>
                <li><strong className="text-foreground">Communications:</strong> Records and content of correspondence, telephone calls (which may be recorded for quality and compliance purposes), and any feedback, reviews, or survey responses you provide.</li>
                <li><strong className="text-foreground">CCTV and Access Records:</strong> Video surveillance footage and biometric access logs captured at our vault and office facilities for security purposes.</li>
              </ul>
            </div>

            {/* 3. How We Collect Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Collect Personal Information</h2>
              <p className="leading-relaxed">We collect personal information through the following means:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Directly from you when you register for an account, engage our services, make enquiries, visit our facilities, or submit forms through our website or other channels.</li>
                <li>From third-party sources, including identity verification providers, credit reporting agencies, financial institutions, government registers and public databases, and our business partners and service providers.</li>
                <li>Through automated technologies when you interact with our website or digital platforms, including cookies, web beacons, server logs, and analytics services.</li>
                <li>From CCTV systems and access control systems at our vault and office locations.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Where practicable, we will collect personal information directly from you. If we receive unsolicited personal information that we are not permitted to collect under the APPs, we will destroy or de-identify that information as soon as practicable.
              </p>
            </div>

            {/* 4. Purpose of Collection */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Purpose of Collection and Use</h2>
              <p className="leading-relaxed">We collect and use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>To provide, administer, and improve our vault storage, shipment, tracking, and trustee services.</li>
                <li>To verify your identity and conduct due diligence in accordance with AML/CTF legislation, AUSTRAC reporting obligations, and our internal compliance programs.</li>
                <li>To process transactions, manage your account, and maintain accurate custodial records of assets held on your behalf.</li>
                <li>To communicate with you regarding your account, services, and any changes to our terms, policies, or operations.</li>
                <li>To comply with applicable Australian and international laws, regulations, industry standards, and court or governmental orders.</li>
                <li>To detect, prevent, and investigate fraud, money laundering, terrorist financing, theft, and other illegal or unauthorised activities.</li>
                <li>To manage our business operations, including risk management, auditing, record keeping, insurance, and dispute resolution.</li>
                <li>To maintain the safety and security of our facilities, personnel, customers, and assets through surveillance and access control systems.</li>
                <li>To conduct research and analysis to improve our services, customer experience, and security protocols.</li>
              </ul>
            </div>

            {/* 5. Disclosure of Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Disclosure of Personal Information</h2>
              <p className="leading-relaxed">We may disclose your personal information to the following categories of third parties:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Service Providers:</strong> Third-party providers who assist us in delivering our services, including vault operators, armoured transport companies, insurance underwriters, IT service providers, payment processors, identity verification services, and professional advisors (legal, accounting, and audit).</li>
                <li><strong className="text-foreground">Regulatory and Government Bodies:</strong> AUSTRAC, the Australian Securities and Investments Commission (ASIC), the Australian Taxation Office (ATO), law enforcement agencies, courts, and other regulatory authorities as required by law or in response to lawful requests.</li>
                <li><strong className="text-foreground">Financial Institutions:</strong> Banks and other financial institutions for the purpose of processing transactions, verifying source of funds, and complying with financial reporting requirements.</li>
                <li><strong className="text-foreground">Related Entities:</strong> Our parent companies, subsidiaries, and affiliated entities for purposes consistent with this Privacy Policy.</li>
                <li><strong className="text-foreground">Corporate Transactions:</strong> In the event of a merger, acquisition, reorganisation, sale of assets, or insolvency, your personal information may be transferred as part of that transaction.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.
              </p>
            </div>

            {/* 6. Overseas Disclosure */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Overseas Disclosure</h2>
              <p className="leading-relaxed">
                In the course of providing our services, we may disclose personal information to recipients located outside of Australia, including in jurisdictions where our vault facilities, service providers, or related entities operate. Where we disclose personal information overseas, we take reasonable steps to ensure that the overseas recipient does not breach the APPs, or that you consent to the disclosure, or that the disclosure is required or authorised by law.
              </p>
            </div>

            {/* 7. Data Security */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Security</h2>
              <p className="leading-relaxed">
                We maintain administrative, technical, and physical safeguards designed to protect your personal information against unauthorised access, modification, disclosure, loss, misuse, or destruction. These measures include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>256-bit AES encryption for data at rest and TLS 1.3 encryption for data in transit.</li>
                <li>Multi-factor authentication and role-based access controls for all systems containing personal information.</li>
                <li>Regular security audits, penetration testing, and vulnerability assessments conducted by independent security consultants.</li>
                <li>Strict access controls, including biometric verification, at all physical facilities.</li>
                <li>Staff training on privacy and information security obligations.</li>
                <li>Incident response plans for data breaches in accordance with the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act.</li>
              </ul>
            </div>

            {/* 8. Data Retention */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Retention</h2>
              <p className="leading-relaxed">
                We retain personal information only for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law. In general, personal information is retained for the duration of your relationship with us plus a minimum of seven (7) years following the termination of that relationship to satisfy our legal, regulatory, audit, and record-keeping obligations, including under the AML/CTF Act 2006 (Cth) which requires retention of certain records for seven years. After the applicable retention period, personal information is securely destroyed or de-identified.
              </p>
            </div>

            {/* 9. Your Rights */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Your Rights</h2>
              <p className="leading-relaxed">Under the Privacy Act and the APPs, you have the following rights in relation to your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Access:</strong> You may request access to the personal information we hold about you. We will respond to your request within a reasonable period (generally within 30 days).</li>
                <li><strong className="text-foreground">Correction:</strong> You may request that we correct any personal information that is inaccurate, out-of-date, incomplete, irrelevant, or misleading.</li>
                <li><strong className="text-foreground">Complaints:</strong> If you believe your privacy has been breached, you may lodge a complaint with us. We will investigate and respond to your complaint within 30 days. If you are not satisfied with our response, you may escalate your complaint to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.</li>
                <li><strong className="text-foreground">Opt-Out:</strong> You may opt out of receiving marketing communications from us at any time by contacting us or using the unsubscribe mechanism in our communications.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise any of these rights, please contact our Privacy Officer using the contact details provided below. We may need to verify your identity before processing your request.
              </p>
            </div>

            {/* 10. Cookies */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website uses cookies, web beacons, and similar tracking technologies to collect information about your browsing activities, improve site functionality, and analyse usage patterns. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired). You can manage your cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features of our website.
              </p>
            </div>

            {/* 11. Third-Party Links */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites, applications, or services that are not operated or controlled by Aurevault. This Privacy Policy does not apply to such third-party services. We encourage you to review the privacy policies of any third-party services before providing personal information.
              </p>
            </div>

            {/* 12. Children */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Children&rsquo;s Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected personal information from a child under 18, we will take reasonable steps to delete that information promptly.
              </p>
            </div>

            {/* 13. Changes */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will post the updated Privacy Policy on our website and update the &ldquo;Last Updated&rdquo; date. Where changes are material, we will take reasonable steps to notify you, including by email or through a prominent notice on our website. Your continued use of our services after such changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* 14. Contact */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">14. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, wish to exercise your privacy rights, or have a complaint about how we have handled your personal information, please contact our Privacy Officer:
              </p>
              <div className="mt-4 p-4 border border-border rounded-md bg-secondary/50">
                <p className="text-foreground font-medium">Privacy Officer</p>
                <p className="mt-1">Aurevault Precious Metals Pty LTD</p>
                <p>3792 Collin's Street, Melbourne VIC 3068</p>
                <p>Email: replyaurevaultltd@yahoo.com</p>
                <p>Phone: +61 480 831 062</p>
              </div>
              <p className="leading-relaxed mt-4 text-sm">
                If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC): Phone: 1300 363 992 | Web: www.oaic.gov.au
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
