"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles, Clock, Film, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { MarketingModal } from "@/components/modals/marketing-modal"

export default function MagicEditingPortal() {
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
                <span className="font-medium">Magic Editing Portal</span>
              </div>
            </motion.div>

            <h1 className="pb-2 text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-transparent">
              Turn Raw Footage Into Ready-to-Watch Cinema
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Perfect for creators and businesses who need fast, professional editing without long-term contracts.
            </p>
          </div>

          <FadeInSection className="relative z-10 p-8 md:p-10 rounded-none border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-2">
              <Clock className="h-6 w-6 text-[#00ffff]" />
              Why You Should Buy
            </h2>
            <div className="text-gray-300 space-y-4 text-lg">
              <p>
                In today&apos;s fast-paced digital world, speed and quality matter. Raw footage sitting in your camera roll does nothing for your brand. The Magic Editing Portal
                transforms your clips into tailored, polished, ready-to-watch cinema — delivered the same day.
              </p>
              <p>
                Whether it&apos;s a one-time project, a last-minute campaign, or occasional content support, this portal is built for efficiency without sacrificing quality.
              </p>
              <p>
                We focus on precision editing, cinematic pacing, clean transitions, captions, sound design, and platform optimization — ensuring your video feels intentional,
                professional, and engaging.
              </p>
              <p>
                You won&apos;t just receive an edit. You&apos;ll receive a finished product that reflects your vision. Expect fast turnaround, clear communication, and a final
                delivery that looks custom-crafted — not templated.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-none mb-12 relative z-10 border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-2">
              <Film className="h-6 w-6 text-[#d966ff]" />
              What We Offer
            </h2>
            <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
              We take your raw footage and transform it into a fully edited, platform-ready video within the same day. Every project includes:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="border border-white/10 bg-[#090e11]/80 rounded-none p-6 space-y-3">
                <p className="text-gray-100 font-medium">Core Edit</p>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  <li>• Professional cuts and pacing</li>
                  <li>• Clean transitions and motion elements</li>
                  <li>• Captioning (if requested)</li>
                </ul>
              </div>
              <div className="border border-white/10 bg-[#090e11]/80 rounded-none p-6 space-y-3">
                <p className="text-gray-100 font-medium">Polish & Platform</p>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  <li>• Sound design and music integration</li>
                  <li>• Platform optimization (Reels, TikTok, YouTube, etc.)</li>
                  <li>• Delivery ready to upload the same day</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-8 text-center max-w-2xl mx-auto">
              This service is designed for one-time or occasional projects that require premium execution — fast.
            </p>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-none mb-12 relative z-10 border border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-2">
              <MessageCircle className="h-6 w-6 text-[#00ffff]" />
              How We Bring Your Vision to Life
            </h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              A great edit starts with understanding the goal. We refine your project by focusing on:
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Your intended platform</li>
              <li>• Your target audience</li>
              <li>• Your brand tone and style</li>
              <li>• The emotion or action you want to drive</li>
            </ul>
            <p className="text-gray-300 mt-6">
              You drop the footage. We craft the experience. You receive a polished, ready-to-publish video — the same day.
            </p>
          </FadeInSection>

          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">MAGIC EDITING PORTAL</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Transform Your Footage?</h2>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] font-semibold shadow-none"
                  onClick={() => setIsMarketingModalOpen(true)}
                >
                  Start Your Edit
                </Button>
              </div>
              <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <Film className="w-full max-w-xs h-auto text-[#d966ff] border border-white/10 bg-white/[0.05] rounded-none p-8 shadow-xl" />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
      <MarketingModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
        serviceName="Magic Editing Portal"
      />
    </main>
  )
}

