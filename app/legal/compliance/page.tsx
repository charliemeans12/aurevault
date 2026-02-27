import type { Metadata } from "next"
import { Shield, FileCheck, Users, Eye, AlertTriangle, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance",
  description: "Aurevault Precious Metals Pty LTD regulatory compliance framework — AML/CTF, AUSTRAC, KYC, sanctions screening, and industry standards.",
  openGraph: {
    title: "Regulatory Compliance | Aurevault Precious Metals Pty LTD",
    description: "Aurevault Precious Metals Pty LTD regulatory compliance framework — AML/CTF, AUSTRAC, KYC, sanctions screening, and industry standards.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/legal/compliance",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regulatory Compliance | Aurevault Precious Metals Pty LTD",
    description: "Learn about our regulatory compliance framework and standards.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Regulatory Compliance
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
              <h2 className="text-xl font-semibold text-foreground mb-3">Our Commitment to Compliance</h2>
              <p className="leading-relaxed">
                Aurevault Precious Metals Pty LTD operates within a robust regulatory compliance framework designed to protect our clients, preserve the integrity of the precious metals and diamond markets, and ensure full compliance with Australian and international laws and regulations. We are committed to upholding the highest standards of transparency, accountability, and ethical conduct in all aspects of our operations.
              </p>
            </div>

            {/* Compliance Overview Cards */}
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              {[
                { icon: Shield, title: "AML/CTF Program", desc: "Comprehensive anti-money laundering and counter-terrorism financing program compliant with Australian legislation." },
                { icon: FileCheck, title: "AUSTRAC Enrolled", desc: "Enrolled as a reporting entity with AUSTRAC, Australia's financial intelligence agency." },
                { icon: Users, title: "KYC Verification", desc: "Mandatory Know Your Customer identity verification for all clients before service commencement." },
                { icon: Eye, title: "Ongoing Monitoring", desc: "Continuous transaction monitoring and enhanced due diligence for high-risk activities." },
                { icon: AlertTriangle, title: "Sanctions Screening", desc: "Real-time screening against DFAT, UN, EU, OFAC, and other international sanctions lists." },
                { icon: Globe, title: "International Standards", desc: "Adherence to FATF recommendations and international precious metals industry best practices." },
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
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Anti-Money Laundering and Counter-Terrorism Financing (AML/CTF)</h2>
              <p className="leading-relaxed">
                Aurevault maintains a comprehensive AML/CTF program developed in accordance with the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth) (&ldquo;AML/CTF Act&rdquo;), the Anti-Money Laundering and Counter-Terrorism Financing Rules Instrument 2007 (No. 1) (&ldquo;AML/CTF Rules&rdquo;), and guidelines issued by the Australian Transaction Reports and Analysis Centre (AUSTRAC). Our AML/CTF program includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Governance and Oversight:</strong> Our AML/CTF program is approved by senior management and overseen by a designated AML/CTF Compliance Officer who reports directly to the Board of Directors. The program is reviewed and updated at least annually, or more frequently in response to legislative changes, emerging risks, or the findings of internal or external audits.</li>
                <li><strong className="text-foreground">Risk Assessment:</strong> We conduct a comprehensive enterprise-wide money laundering and terrorism financing (ML/TF) risk assessment that considers the nature of our services, our client base, delivery channels, geographic exposure, and the specific risk indicators associated with dealing in precious metals and diamonds. The risk assessment informs the design and calibration of our compliance controls.</li>
                <li><strong className="text-foreground">Employee Training:</strong> All employees, contractors, and agents receive initial and ongoing AML/CTF training commensurate with their roles and responsibilities. Training covers the identification and reporting of suspicious matters, sanctions obligations, customer due diligence procedures, and the consequences of non-compliance.</li>
                <li><strong className="text-foreground">Record Keeping:</strong> We maintain all AML/CTF records, including customer identification documents, transaction records, suspicious matter reports, and compliance audit reports, for a minimum of seven (7) years in accordance with the AML/CTF Act.</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Customer Due Diligence (CDD) and Know Your Customer (KYC)</h2>
              <p className="leading-relaxed">
                Aurevault applies a risk-based approach to customer due diligence in accordance with the AML/CTF Act and AUSTRAC guidance. Our CDD procedures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Initial Identification and Verification:</strong> All clients must provide acceptable identification documents (passport, driver&rsquo;s licence, or other government-issued photo identification) and proof of address before services are provided. Identification information is verified using reliable, independent sources, which may include electronic verification services, document verification, and database checks.</li>
                <li><strong className="text-foreground">Beneficial Ownership:</strong> For corporate, trust, and partnership clients, we identify and verify the beneficial owners who ultimately own or control the entity, including any natural person who holds 25% or more of the ownership interest or who exercises effective control.</li>
                <li><strong className="text-foreground">Enhanced Due Diligence (EDD):</strong> Enhanced due diligence is applied to clients or transactions that present a higher risk of ML/TF, including politically exposed persons (PEPs), clients from high-risk jurisdictions, complex or unusual transaction structures, and high-value or high-volume transactions that are inconsistent with the client&rsquo;s known profile.</li>
                <li><strong className="text-foreground">Ongoing Customer Due Diligence:</strong> We conduct ongoing monitoring of client relationships and transactions to ensure that customer information remains current and that transactions are consistent with our knowledge of the client, their business, and risk profile. Re-verification may be required periodically or when triggered by changes in risk indicators.</li>
                <li><strong className="text-foreground">Source of Funds and Source of Wealth:</strong> For higher-risk clients and transactions above specified thresholds, we require documentary evidence of the source of funds used to acquire or deposit assets, and may also require declarations and evidence regarding the client&rsquo;s source of wealth.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Transaction Monitoring and Suspicious Matter Reporting</h2>
              <p className="leading-relaxed">
                Aurevault maintains systems and procedures to monitor client transactions for unusual or suspicious patterns. Transaction monitoring is both automated (using rule-based and risk-scoring systems) and manual (through review by trained compliance personnel). Where a transaction or activity gives rise to a suspicion or reasonable grounds to suspect that it may relate to money laundering, terrorism financing, proceeds of crime, or tax evasion, we are required by law to submit a Suspicious Matter Report (SMR) to AUSTRAC. We also report Threshold Transaction Reports (TTRs) for cash transactions of AUD 10,000 or more.
              </p>
              <p className="leading-relaxed mt-3">
                Aurevault personnel are prohibited from disclosing to any person (including the relevant client) the existence or content of a suspicious matter report, in accordance with the tipping-off provisions of the AML/CTF Act. We cooperate fully with AUSTRAC, law enforcement agencies, and other competent authorities in their investigations.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Sanctions Compliance</h2>
              <p className="leading-relaxed">
                Aurevault is committed to full compliance with Australian sanctions laws administered by the Department of Foreign Affairs and Trade (DFAT) under the Autonomous Sanctions Act 2011 (Cth), the Charter of the United Nations Act 1945 (Cth), and associated regulations. We also screen against international sanctions lists, including those maintained by the United Nations Security Council, the European Union, and the United States Office of Foreign Assets Control (OFAC).
              </p>
              <p className="leading-relaxed mt-3">
                All clients, beneficial owners, and transaction counterparties are screened against applicable sanctions lists at onboarding and on an ongoing basis. Any match or potential match triggers an immediate investigation and, where required, blocking and reporting to the relevant authorities.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Tax Compliance and Reporting</h2>
              <p className="leading-relaxed">
                Aurevault complies with all applicable Australian tax laws and reporting obligations, including the Goods and Services Tax (GST), Common Reporting Standard (CRS) as implemented under Division 396 of the Taxation Administration Act 1953, and Foreign Account Tax Compliance Act (FATCA) as implemented under the Australian-United States intergovernmental agreement. Where required, we collect tax residency self-certification from clients and report relevant account information to the Australian Taxation Office (ATO).
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Protection and Privacy Compliance</h2>
              <p className="leading-relaxed">
                Our collection, use, storage, and disclosure of personal information is governed by the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). We maintain a comprehensive privacy compliance framework, including a Privacy Impact Assessment (PIA) process for new initiatives, an incident response plan compliant with the Notifiable Data Breaches (NDB) scheme, and a dedicated Privacy Officer responsible for overseeing privacy compliance. For full details, please refer to our <a href="/legal/privacy" className="text-accent hover:underline">Privacy Policy</a>.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Industry Standards and Best Practices</h2>
              <p className="leading-relaxed">
                In addition to statutory and regulatory compliance, Aurevault adheres to recognised industry standards and best practices for the handling, storage, and transport of precious metals and diamonds, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Financial Action Task Force (FATF) Recommendations on combating money laundering and terrorist financing, including the specific guidance on dealers in precious metals and stones.</li>
                <li>London Bullion Market Association (LBMA) Good Delivery standards for gold and silver bars.</li>
                <li>Responsible sourcing standards, including conflict minerals due diligence aligned with OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.</li>
                <li>AS/NZS ISO 27001 information security management principles for the protection of client data and digital systems.</li>
                <li>Australian Security Industry Association Limited (ASIAL) best practice guidelines for the secure transport and storage of high-value goods.</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Internal Audit and Independent Review</h2>
              <p className="leading-relaxed">
                Our compliance framework is subject to regular internal audits conducted by our internal compliance team and periodic independent external reviews conducted by qualified third-party auditors. Audit findings are reported to senior management and the Board of Directors, and corrective actions are tracked to completion. Independent assurance is provided annually on the design and operating effectiveness of our AML/CTF controls, custody and custodial record-keeping processes, and information security controls.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Whistleblower and Reporting Mechanisms</h2>
              <p className="leading-relaxed">
                Aurevault maintains a whistleblower policy in accordance with Part 9.4AAA of the Corporations Act 2001 (Cth). Employees, contractors, suppliers, and other eligible persons are encouraged to report suspected misconduct, illegal activity, or compliance breaches without fear of retaliation. Reports may be made to our AML/CTF Compliance Officer, our external auditors, ASIC, APRA, or another prescribed regulatory body. Aurevault is committed to protecting the identity and confidentiality of whistleblowers to the fullest extent permitted by law.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact</h2>
              <p className="leading-relaxed">
                If you have any questions about our compliance framework, wish to report a concern, or require further information regarding our regulatory obligations, please contact our Compliance Officer:
              </p>
              <div className="mt-4 p-4 border border-border rounded-md bg-secondary/50">
                <p className="text-foreground font-medium">AML/CTF Compliance Officer</p>
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
