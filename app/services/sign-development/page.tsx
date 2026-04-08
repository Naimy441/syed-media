"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { MarketingModal } from "@/components/modals/marketing-modal"

export default function SignDevelopment() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#090e11] text-white overflow-x-hidden pb-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative z-10">
          <Link href="/services" className="inline-block">
            <Button variant="outline" className="mb-8 rounded-none border-2 border-[#00ffff] bg-transparent text-[#00ffff] hover:bg-[#00ffff]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16 relative z-10">
            <motion.div className="inline-block px-4 py-2 rounded-none mb-6 border border-white/10 bg-white/[0.04]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">Sign Development</span>
              </div>
            </motion.div>

            <h1 className="pb-2 text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-transparent">
              Perfect for businesses ready to elevate their physical presence and command attention.
            </h1>
          </div>

          <FadeInSection className="relative z-10 p-8 md:p-10 rounded-none border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why You Should Buy</h2>
            <div className="text-gray-300 space-y-4 text-lg">
              <p>
                Your sign is often the first impression customers have of your brand. A weak or outdated sign quietly pushes people away. A powerful sign pulls them in.
              </p>
              <p>
                Whether you need a premium, modern storefront installation for a large organization or a bold neon display designed to capture the attention of thousands, we
                design and produce signage that makes your brand impossible to ignore.
              </p>
              <p>
                Through our direct manufacturing connections in China, we deliver exceptional quality at highly competitive pricing — without compromising durability, finish, or
                visual impact.
              </p>
              <p className="font-medium text-white">This isn&apos;t just a sign. It&apos;s a statement.</p>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-none mb-12 relative z-10 border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What We Offer</h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              We design and develop custom signage for a wide range of environments and use cases:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="border border-white/10 bg-[#090e11]/80 rounded-none p-6 space-y-3">
                <p className="text-gray-100 font-medium">Everyday Presence</p>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  <li>• Storefronts</li>
                  <li>• Offices</li>
                  <li>• Studios</li>
                </ul>
              </div>
              <div className="border border-white/10 bg-[#090e11]/80 rounded-none p-6 space-y-3">
                <p className="text-gray-100 font-medium">High-Impact Installs</p>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  <li>• Events</li>
                  <li>• Indoor and outdoor installations</li>
                  <li>• Large-scale commercial projects</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              From sleek metal and illuminated acrylic to vibrant neon and LED builds, we handle projects of any size, style, and location.
            </p>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-none mb-12 relative z-10 border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How We Bring Your Vision to Life</h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              Every sign begins with strategy. We refine your project by focusing on:
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Brand identity and color scheme</li>
              <li>• Placement and visibility</li>
              <li>• Size and material selection</li>
              <li>• Lighting and installation requirements</li>
            </ul>
            <p className="text-gray-300 mt-6">
              We handle design, production, and coordination — ensuring your sign is built to last and built to stand out. Book a call today and let&apos;s begin creating a sign
              that represents your brand at its highest level.
            </p>
          </FadeInSection>

          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">SIGN DEVELOPMENT</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Build a Standout Sign?</h2>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] font-semibold shadow-none"
                  onClick={() => setIsMarketingModalOpen(true)}
                >
                  Book a Call
                </Button>
              </div>
              <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <Sparkles className="w-full max-w-xs h-auto text-[#00ffff] border border-white/10 bg-white/[0.05] rounded-none p-8 shadow-xl" />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
      <MarketingModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
        serviceName="Sign Development"
      />
    </main>
  )
}

