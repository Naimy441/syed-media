import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Syed Media",
  description: "Our commitment to your privacy and data protection.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#090e11" }}>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="mb-10 bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          {[
            {
              title: "Our Commitment to Privacy",
              body: (
                <p className="leading-relaxed text-white/75">
                  At Syed Media, we believe in complete transparency regarding data collection and privacy. We are committed to protecting your privacy and ensuring you have a
                  safe and secure experience on our website.
                </p>
              ),
            },
            {
              title: "Data Collection",
              body: (
                <>
                  <p className="leading-relaxed text-white/75">We collect data only in two specific circumstances:</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
                    <li>When you voluntarily submit information through our contact or service request forms</li>
                    <li>When you make a payment through our secure Stripe payment system</li>
                  </ul>
                  <p className="mt-4 leading-relaxed text-white/75">
                    We do not use tracking cookies, analytics tools, or any other form of passive data collection. Your privacy is our priority, and we maintain a strict policy of
                    only collecting data that you explicitly provide to us.
                  </p>
                </>
              ),
            },
            {
              title: "Payment Information",
              body: (
                <p className="leading-relaxed text-white/75">
                  All payments are processed securely through Stripe. We do not store any payment information on our servers. Stripe handles all payment data in compliance with PCI
                  DSS standards. For more information about how Stripe handles your payment data, please refer to Stripe&apos;s privacy policy.
                </p>
              ),
            },
            {
              title: "Form Submissions",
              body: (
                <p className="leading-relaxed text-white/75">
                  When you submit information through our forms, we collect only the information you provide. This may include your name, email address, and any other details you
                  choose to share. We use this information solely to respond to your inquiries and provide our services.
                </p>
              ),
            },
            {
              title: "Data Protection",
              body: (
                <p className="leading-relaxed text-white/75">
                  We implement appropriate security measures to protect any information you provide. Your data is stored securely and is only accessible to authorized personnel who
                  need it to perform their duties.
                </p>
              ),
            },
            {
              title: "Contact Information",
              body: (
                <p className="leading-relaxed text-white/75">
                  If you have any questions about our privacy policy or practices, please feel free to contact us. We&apos;re here to address any concerns you may have about your
                  privacy while using our website.
                </p>
              ),
            },
            {
              title: "Policy Updates",
              body: (
                <p className="leading-relaxed text-white/75">
                  This privacy policy may be updated periodically to reflect any changes in our practices. We will notify you of any significant changes to how we handle your data.
                </p>
              ),
            },
          ].map((section) => (
            <section key={section.title} className="border border-white/10 bg-white/[0.02] p-8">
              <h2 className="mb-4 text-xl font-semibold text-[#00ffff]">{section.title}</h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
