"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { MarketingModal } from "@/components/modals/marketing-modal"

export default function InnovativeMarketing() {
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false)

  return (
    <main className="bg-gradient-to-br text-white overflow-x-hidden pb-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative z-10">
          <Link href="/services" className="inline-block">
            <Button variant="outline" className="mb-8 border-white bg-transparent hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16 relative z-10">
            <motion.div className="inline-block px-4 py-2 rounded-full mb-6 bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">Premium Service</span>
              </div>
            </motion.div>

            <h1 className="pb-2  text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
              Strategic Marketing
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Perfect for profitable companies ready to amplify their social media presence
            </p>
          </div>

          <FadeInSection className="relative z-10 p-8 md:p-10 rounded-xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why you should buy</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                In today&apos;s digital landscape, strategic media marketing isn&apos;t a luxury — it&apos;s a necessity. Yet many businesses fall behind due to
                inconsistent, low-impact marketing. <span className="text-emerald-400 font-medium">Syed Media changes that.</span>
              </p>
              <p>
                We handle the entire brand scaling media process, delivering professionally edited, high-converting ads—including attention-grabbing comedy skits—strategically
                crafted using proven creative frameworks and the latest trends to elevate your brand.
              </p>
              <p>
                Our structured, platform-optimized posting strategy keeps your brand visible, relevant, and engaging across all major channels. Within just one month, your page
                will transform into a polished portfolio of impactful content.
              </p>
              <p className="font-medium text-white">
                Expect measurable growth in followers, engagement, and ultimately, in sales and brand recognition.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-xl mb-12 relative z-10 bg-slate-900/60 border border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What We Offer</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We deliver high-impact ad campaigns across all major social media platforms, designed to generate measurable results—often within the first week. Our strategy
                focuses on precision targeting so your content reaches the people most likely to convert.
              </p>
              <p>
                We reach your ideal audience based on exact demographics, including age, gender, interests, and location. For example, if your brand is targeting customers in
                Houston, Texas, your ads will be shown directly to users within that specific area across their social feeds and devices.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-xl mb-12 relative z-10 bg-slate-900/60 border border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How We Refine Your Audience</h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              A successful campaign starts with the right audience. We carefully define and optimize targeting so your budget is spent where it matters most.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Demographics</div>
                    <p className="text-gray-300 text-sm md:text-base">
                      We tailor campaigns to match your ideal customer profile, from income level to industry and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Interests & Online Behavior</div>
                    <p className="text-gray-300 text-sm md:text-base">
                      We target based on what your audience actually watches, follows, and engages with online.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Age & Gender</div>
                    <p className="text-gray-300 text-sm md:text-base">
                      We tailor creative and offers to resonate with the exact age and gender segments you want to reach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Geographic Location</div>
                    <p className="text-gray-300 text-sm md:text-base">
                      We can narrow your reach to a precise mile radius or scale it across multiple cities or states—ensuring your brand is seen by the people most likely to
                      convert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">STRATEGIC MARKETING</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Scale Your Brand?</h2>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  onClick={() => setIsMarketingModalOpen(true)}
                >
                  Start Strategic Marketing
                </Button>
              </div>
              <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <BarChart3 className="w-full max-w-xs h-auto text-emerald-400 bg-white/10 rounded-2xl p-8 shadow-xl" />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
      <MarketingModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
        serviceName="Strategic Marketing"
      />
    </main>
  )
}