"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { MarketingModal } from "@/components/modals/marketing-modal"

export default function ImageAlchemy() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16 relative z-10">
            <motion.div className="inline-block px-4 py-2 rounded-full mb-6 bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">Image Alchemy • New</span>
              </div>
            </motion.div>

            <h1 className="pb-2 text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
              Perfect for creators and brands ready to turn ideas into high-impact visuals.
            </h1>
          </div>

          <FadeInSection className="relative z-10 p-8 md:p-10 rounded-xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why You Should Buy</h2>
            <div className="text-gray-300 space-y-4 text-lg">
              <p>
                In today&apos;s attention economy, visuals decide everything. A powerful image can double your clicks, elevate your brand authority, and instantly separate you
                from competitors.
              </p>
              <p>
                Image Alchemy transforms your thoughts into visual art — from high-converting thumbnails to detailed infographics and AI-generated concepts that previously only
                existed in your imagination.
              </p>
              <p>You bring the idea. We execute it with precision, creativity, and advanced AI.</p>
              <p className="font-medium text-white">This is where imagination meets execution.</p>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-xl mb-12 relative z-10 bg-slate-900/60 border border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-2">
              <ImageIcon className="h-6 w-6 text-emerald-400" />
              What We Offer
            </h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">We create custom visuals for:</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-6 space-y-3">
                <p className="text-gray-100 font-medium">Content & Thumbnails</p>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  <li>• YouTube thumbnails</li>
                  <li>• Instagram and TikTok covers</li>
                  <li>• Business infographics</li>
                </ul>
              </div>
              <div className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-6 space-y-3">
                <p className="text-gray-100 font-medium">AI & Enhancements</p>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  <li>• AI-generated brand visuals</li>
                  <li>• Photo enhancements and upscaling</li>
                  <li>• Concept art and promotional images</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              Every image is strategically designed for clarity, impact, and platform performance.
            </p>
          </FadeInSection>

          <FadeInSection className="mt-12 p-8 md:p-10 rounded-xl mb-12 relative z-10 bg-slate-900/60 border border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How We Bring Your Vision to Life</h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              Every project begins with your concept. We refine it by focusing on:
            </p>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>• Platform optimization</li>
              <li>• Visual hierarchy and click psychology</li>
              <li>• Brand consistency</li>
              <li>• Color, lighting, and composition</li>
            </ul>
            <p className="text-gray-300 mt-6">
              Using advanced AI tools combined with creative direction, we transform raw ideas into polished, scroll-stopping visuals. If you can imagine it — we can build it.
            </p>
          </FadeInSection>

          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">IMAGE ALCHEMY</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Turn Ideas Into Visuals?</h2>
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  onClick={() => setIsMarketingModalOpen(true)}
                >
                  Start Creating Visuals
                </Button>
              </div>
              <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <ImageIcon className="w-full max-w-xs h-auto text-purple-400 bg-white/10 rounded-2xl p-8 shadow-xl" />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
      <MarketingModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
        serviceName="Image Alchemy"
      />
    </main>
  )
}

