"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, billing address, and payment information.

We also automatically collect certain information when you use our services, including your IP address, device type, browser type, operating system, and usage data about how you interact with our website and simulators.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:
    
• Provide, maintain, and improve our products and services
• Process transactions and send related information
• Send promotional communications (with your consent)
• Respond to your comments, questions, and customer service requests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and other illegal activities
• Personalize and improve your experience`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:

• Service providers who assist us in operating our website and conducting our business
• Professional advisors such as lawyers, auditors, and insurers
• Government authorities when required by law
• Business partners with your consent`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.`,
  },
  {
    title: "Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings and other tools. For more information, please see our Cookie Policy.

We may also use analytics services provided by third parties to help us understand how users engage with our website and services.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:

• The right to access your personal information
• The right to correct inaccurate information
• The right to delete your information
• The right to restrict or object to processing
• The right to data portability
• The right to withdraw consent

To exercise these rights, please contact us using the information provided below.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the context of the processing and our legal obligations.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

BLACKSTAR Flight Simulations
Email: privacy@blackstarflightsim.com
Address: 123 Aviation Way, Suite 400, San Francisco, CA 94102`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Legal
          </p>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight uppercase mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: March 13, 2026
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            BLACKSTAR Flight Simulations (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or use our flight simulation products and
            services.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`py-10 ${
                index !== sections.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <h2 className="font-mono text-xl text-foreground uppercase tracking-wide mb-6">
                {section.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
