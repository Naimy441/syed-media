import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Syed Media",
  description: "Our commitment to your privacy and data protection.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="space-y-8">
          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Our Commitment to Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              At Syed Media, we believe in complete transparency regarding data collection and privacy. 
              We are committed to protecting your privacy and ensuring you have a safe and secure experience 
              on our website.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Data Collection</h2>
            <p className="text-gray-300 leading-relaxed">
              We collect data only in two specific circumstances:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>When you voluntarily submit information through our contact or service request forms</li>
              <li>When you make a payment through our secure Stripe payment system</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We do not use tracking cookies, analytics tools, or any other form of passive data collection. 
              Your privacy is our priority, and we maintain a strict policy of only collecting data that you 
              explicitly provide to us.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Payment Information</h2>
            <p className="text-gray-300 leading-relaxed">
              All payments are processed securely through Stripe. We do not store any payment information on our servers. 
              Stripe handles all payment data in compliance with PCI DSS standards. For more information about how Stripe 
              handles your payment data, please refer to Stripe's privacy policy.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Form Submissions</h2>
            <p className="text-gray-300 leading-relaxed">
              When you submit information through our forms, we collect only the information you provide. This may include 
              your name, email address, and any other details you choose to share. We use this information solely to 
              respond to your inquiries and provide our services.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Data Protection</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect any information you provide. Your data is stored securely 
              and is only accessible to authorized personnel who need it to perform their duties.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about our privacy policy or practices, please feel free to contact us. 
              We're here to address any concerns you may have about your privacy while using our website.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-orange-400">Policy Updates</h2>
            <p className="text-gray-300 leading-relaxed">
              This privacy policy may be updated periodically to reflect any changes in our practices. 
              We will notify you of any significant changes to how we handle your data.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
