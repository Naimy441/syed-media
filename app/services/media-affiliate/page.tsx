"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Users, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"

export default function MediaAffiliate() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="bg-gradient-to-br text-white overflow-x-hidden pb-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative z-10">
          <Link href="/services" className="inline-block">
            <Button variant="ghost" className="mb-8 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 relative z-10">
            <motion.div
              animate={{
                background: [
                  "linear-gradient(90deg, #10b981, #f59e42)",
                  "linear-gradient(180deg, #f59e42, #10b981)",
                  "linear-gradient(270deg, #10b981, #f59e42)",
                  "linear-gradient(0deg, #f59e42, #10b981)",
                  "linear-gradient(90deg, #10b981, #f59e42)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block px-4 py-2 rounded-full mb-6"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">Affiliate Program</span>
              </div>
            </motion.div>

            <h1 className="pb-2 text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-orange-400">
              Become a Syed Media Affiliate
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Looking for a simple, scalable way to earn passive income? As a Syed Media affiliate, you can get paid just for connecting us with brands that need better marketing.
            </p>
          </div>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><DollarSign className="inline w-6 h-6 text-emerald-400" /> How It Works</h2>
            <ul className="text-left space-y-4 text-lg">
              <li>1. Refer a business to us.</li>
              <li>2. If we close the deal, you earn <span className="text-emerald-400 font-semibold">$150/month</span> for each active client — every single month they stay subscribed.</li>
              <li>3. Our current cancellation rate is <span className="text-orange-400 font-semibold">0%</span>, which means long-term, recurring income for you.</li>
            </ul>
          </FadeInSection>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CheckCircle className="inline w-6 h-6 text-emerald-400" /> Earning Potential</h2>
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-3"><span className="text-emerald-400 text-2xl">✅</span> Bring 5 clients = <span className="font-bold">$750/month</span></div>
              <div className="flex items-center gap-3"><span className="text-emerald-400 text-2xl">✅</span> Bring 10 clients = <span className="font-bold">$1,500/month</span></div>
              <div className="flex items-center gap-3"><span className="text-emerald-400 text-2xl">✅</span> <span className="font-bold">No cap</span> on your earnings</div>
            </div>
          </FadeInSection>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Users className="inline w-6 h-6 text-orange-400" /> Why Now?</h2>
            <div className="text-gray-300 space-y-4 text-lg">
              <p>Every day, 50–100 new brands are launched in Houston, TX alone — and many of them need exactly what we offer.</p>
              <p>Some of our current affiliates are earning <span className="text-emerald-400 font-semibold">$1,500+ per month</span> in <span className="font-semibold">PASSIVE income</span> as a side hustle.</p>
              <p className="font-medium text-white">Get in early. Ride the wave.</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              {/* Left: Text and Button */}
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">SYED MEDIA AFFILIATE</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Start Earning?</h2>
                </div>
                <Link href="mailto:contact@syedmedia.com?subject=Affiliate%20Sign%20Up">
                  <Button size="lg" className="text-lg md:text-xl px-8 py-5 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-orange-200 transition-all mb-6">
                    Start Earning
                  </Button>
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-center p-4 md:p-8">
                <Users className="w-full max-w-xs h-auto text-orange-400 bg-white/10 rounded-2xl p-8 shadow-xl" />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
    </main>
  )
}
