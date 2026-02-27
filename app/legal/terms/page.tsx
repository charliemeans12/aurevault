import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Aurevault Precious Metals Pty LTD Terms of Service governing the use of our vault storage, shipment, tracking, and related services.",
  openGraph: {
    title: "Terms of Service | Aurevault Precious Metals Pty LTD",
    description: "Aurevault Precious Metals Pty LTD Terms of Service governing the use of our vault storage, shipment, tracking, and related services.",
    type: "website",
    locale: "en_AU",
    url: "https://www.aurevault.com.au/legal/terms",
    siteName: "Aurevault",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Aurevault Precious Metals Pty LTD",
    description: "Review our terms of service governing vault storage and asset tracking.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Legal</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Terms of Service
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

            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Aurevault Precious Metals Pty LTD (ABN 58 174 649 285), including its subsidiaries and affiliates (collectively, &ldquo;Aurevault,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our website, creating an account, engaging our services, or visiting our facilities, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our services.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Eligibility</h2>
              <p className="leading-relaxed">
                Our services are available only to individuals who are at least 18 years of age and are legally capable of entering into binding contracts under the laws of the Commonwealth of Australia. By using our services, you represent and warrant that you meet these eligibility requirements. Entities engaging our services must be duly registered and authorised to do business in Australia, and the individual accepting these Terms on behalf of such entity represents and warrants that they have the authority to bind the entity to these Terms.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Description of Services</h2>
              <p className="leading-relaxed">
                Aurevault provides the following services, subject to applicable service agreements:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-foreground">Vault Storage:</strong> Secure, insured custody of precious metals (gold, silver, platinum, palladium), diamonds, gemstones, and other high-value assets in our climate-controlled, high-security vault facilities across Australia.</li>
                <li><strong className="text-foreground">Secure Shipment:</strong> Armoured and insured transport of precious metals and high-value assets between Aurevault facilities, approved depository institutions, refineries, and designated client locations within Australia and internationally.</li>
                <li><strong className="text-foreground">Asset Tracking:</strong> Real-time digital tracking of assets in transit and in storage, including chain-of-custody documentation, status notifications, and location verification.</li>
                <li><strong className="text-foreground">Trustee and Custodial Services:</strong> Acting as custodian or trustee for precious metals and assets held on behalf of clients, including maintenance of custodial records, periodic valuations, and regulatory reporting.</li>
                <li><strong className="text-foreground">Certification and Authentication:</strong> Independent verification, grading, and certification of precious metals and diamonds through approved assayers and gemological institutes.</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Client Registration and Verification</h2>
              <p className="leading-relaxed">
                To access our services, you must complete our registration process and provide accurate, current, and complete information. You are required to undergo identity verification (&ldquo;Know Your Customer&rdquo; or &ldquo;KYC&rdquo;) procedures in accordance with the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth) and associated AUSTRAC rules and guidelines. This may include providing government-issued identification, proof of address, source-of-funds declarations, beneficial ownership information, and such other documentation as we may reasonably require. You agree to promptly update your information if it changes.
              </p>
              <p className="leading-relaxed mt-3">
                We reserve the right to refuse, suspend, or terminate your account at any time if we are unable to verify your identity, if we suspect fraudulent or illegal activity, or if you fail to comply with any provision of these Terms.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Ownership of Stored Assets</h2>
              <p className="leading-relaxed">
                All precious metals, diamonds, and other assets deposited with Aurevault remain your property at all times. Aurevault acts solely as a custodian and bailee of your assets. Your assets are held under a bailment arrangement and are not assets of Aurevault, are not recorded on Aurevault&rsquo;s balance sheet, and are not available to Aurevault&rsquo;s creditors in the event of Aurevault&rsquo;s insolvency. Your assets will not be lent, pledged, hypothecated, or used as collateral by Aurevault for any purpose whatsoever.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Fees and Payment</h2>
              <p className="leading-relaxed">
                Fees for our services are set out in the applicable service agreement or fee schedule provided to you at or before the commencement of services. Storage fees are typically charged on a periodic basis (monthly or annually) and are calculated based on the type, weight, and value of stored assets. Shipment and transport fees are quoted on a per-engagement basis and are subject to insurance requirements, distance, and security classification.
              </p>
              <p className="leading-relaxed mt-3">
                All fees are quoted in Australian Dollars (AUD) and are exclusive of Goods and Services Tax (GST) unless otherwise stated. Payment must be made by the method specified in your service agreement. Overdue payments may accrue interest at the rate of 2% per month or the maximum rate permitted by law, whichever is less. Aurevault reserves the right to suspend services and restrict access to stored assets in the event of non-payment.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Insurance</h2>
              <p className="leading-relaxed">
                All assets stored in Aurevault vault facilities are insured against theft, loss, and physical damage under comprehensive insurance policies maintained by Aurevault with reputable insurance underwriters. The cost of standard insurance coverage is included in your storage fees. Evidence of insurance is available upon request. Insurance coverage is subject to the terms, conditions, limitations, and exclusions of the relevant insurance policy. Aurevault&rsquo;s liability in the event of a claim shall not exceed the insured value of the assets.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Access, Withdrawal, and Delivery</h2>
              <p className="leading-relaxed">
                Access to vault facilities is by prior appointment only and requires biometric verification and valid government-issued identification. Physical withdrawal of stored assets is subject to a minimum 48-hour notice period, identity verification, and execution of withdrawal documentation. Aurevault reserves the right to impose daily withdrawal limits for operational and security reasons.
              </p>
              <p className="leading-relaxed mt-3">
                For delivery of assets to designated locations, you must provide a verified delivery address. All deliveries are conducted via insured armoured transport. Risk of loss transfers to you upon delivery to the designated address and signed acknowledgement of receipt by you or your authorised representative.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Prohibited Activities</h2>
              <p className="leading-relaxed">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Store, ship, or deal in stolen, counterfeit, or illegally obtained assets.</li>
                <li>Engage in or facilitate money laundering, terrorist financing, sanctions evasion, tax evasion, or any other illegal activity.</li>
                <li>Misrepresent your identity, the ownership of assets, or the source of funds.</li>
                <li>Interfere with or disrupt the security, integrity, or operation of our systems, facilities, or services.</li>
                <li>Attempt to gain unauthorised access to our vault facilities, systems, or other clients&rsquo; accounts or assets.</li>
                <li>Use our services for any purpose that is prohibited by applicable law or regulation.</li>
              </ul>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, materials, trademarks, trade names, logos, designs, and proprietary information displayed on or through our website and services (collectively, &ldquo;Aurevault Materials&rdquo;) are the property of Aurevault or its licensors and are protected by Australian and international intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any Aurevault Materials without our prior written consent.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Aurevault&rsquo;s total liability to you for any claim arising out of or in connection with these Terms or our services shall not exceed the total fees paid by you to Aurevault in the twelve (12) months preceding the event giving rise to the claim. In no event shall Aurevault be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, loss of business opportunity, or loss of goodwill, regardless of the cause of action or theory of liability.
              </p>
              <p className="leading-relaxed mt-3">
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or any other applicable law that cannot be excluded, restricted, or modified by agreement.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Aurevault, its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with: (a) your use of our services; (b) your breach of these Terms; (c) your violation of any applicable law or regulation; or (d) any misrepresentation made by you.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Force Majeure</h2>
              <p className="leading-relaxed">
                Aurevault shall not be liable for any failure or delay in performing its obligations under these Terms to the extent such failure or delay results from circumstances beyond its reasonable control, including but not limited to natural disasters, acts of God, war, terrorism, pandemic, epidemic, government orders or restrictions, civil disturbance, fire, flood, power failure, telecommunications failure, cyberattack, labour disputes, or disruption of transportation or supply chains.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">14. Termination</h2>
              <p className="leading-relaxed">
                Either party may terminate the service relationship by providing thirty (30) days&rsquo; written notice to the other party. Aurevault may terminate or suspend your access to our services immediately, without prior notice, if: (a) you breach any provision of these Terms; (b) we are required to do so by law or regulatory authority; (c) we reasonably suspect fraud, money laundering, or other illegal activity; or (d) you fail to pay any fees due.
              </p>
              <p className="leading-relaxed mt-3">
                Upon termination, you must arrange for the withdrawal or transfer of your stored assets within sixty (60) days. After this period, Aurevault may, at its discretion, continue to store your assets and charge applicable storage fees, or arrange for the assets to be transferred to a licensed third-party custodian at your expense.
              </p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">15. Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any dispute, controversy, or claim arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall first be referred to mediation administered by the Australian Disputes Centre (ADC) in Melbourne, Victoria. If the dispute is not resolved by mediation within forty-five (45) days, it shall be referred to and finally resolved by arbitration administered by the ADC in accordance with the ADC Arbitration Rules. The seat of arbitration shall be Melbourne, Victoria, Australia. The language of the arbitration shall be English.
              </p>
            </div>

            {/* 16 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">16. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the State of Victoria, Australia. You irrevocably submit to the exclusive jurisdiction of the courts of the State of Victoria and the Federal Court of Australia sitting in Victoria for the resolution of any disputes that are not resolved through the dispute resolution procedures set out above.
              </p>
            </div>

            {/* 17 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">17. Amendments</h2>
              <p className="leading-relaxed">
                Aurevault reserves the right to modify these Terms at any time. We will provide you with at least thirty (30) days&rsquo; notice of any material changes by posting the updated Terms on our website and, where practicable, notifying you by email. Your continued use of our services after the effective date of such changes constitutes your acceptance of the modified Terms. If you do not agree with the modified Terms, you must discontinue use of our services and arrange for withdrawal of your assets.
              </p>
            </div>

            {/* 18 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">18. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if such modification is not possible, shall be severed from these Terms. The invalidity of any provision shall not affect the validity or enforceability of the remaining provisions.
              </p>
            </div>

            {/* 19 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">19. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy, any applicable service agreements, and fee schedules, constitute the entire agreement between you and Aurevault with respect to the subject matter hereof and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, with respect to such subject matter.
              </p>
            </div>

            {/* 20 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">20. Contact</h2>
              <p className="leading-relaxed">
                For any questions regarding these Terms, please contact us:
              </p>
              <div className="mt-4 p-4 border border-border rounded-md bg-secondary/50">
                <p className="text-foreground font-medium">Aurevault Precious Metals Pty LTD</p>
                <p className="mt-1">3792 Collin's Street, Melbourne VIC 3068</p>
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
