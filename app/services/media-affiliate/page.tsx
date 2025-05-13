"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Users, DollarSign, CheckCircle, CreditCard } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { AffiliateModal } from "@/components/modals/affiliate-modal"

export default function MediaAffiliate() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAffiliateModalOpen, setIsAffiliateModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
            <p className="text-lg text-gray-300 mb-6">A passive income referral program that you can trust — in 3 easy steps.</p>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5" />
                  <span>1. Refer a business to us.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5" />
                  <span>2. If we close the deal, you earn <span className="text-emerald-400 font-semibold">$150/month</span> for each active client — every single month they stay subscribed.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5" />
                  <span>3. Our current cancellation rate is <span className="text-orange-400 font-semibold">0%</span>, which means long-term, recurring income for you.</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CheckCircle className="inline w-6 h-6 text-emerald-400" /> Earning Potential</h2>
            <p className="text-lg text-gray-300 mb-6">Take it seriously and the numbers add up quickly.</p>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5" />
                  <span>Bring 5 clients = <span className="text-emerald-400 font-semibold">$750/month</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5" />
                  <span>Bring 10 clients = <span className="text-emerald-400 font-semibold">$1,500/month</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5" />
                  <span><span className="text-orange-400 font-semibold">No cap</span> on your earnings</span>
                </div>
              </div>
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
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  onClick={() => setIsAffiliateModalOpen(true)}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Start Earning Now
                </Button>
              </div>
              <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <Users className="w-full max-w-xs h-auto text-orange-400 bg-white/10 rounded-2xl p-8 shadow-xl" />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>

      {/* Affiliate Modal */}
      <AffiliateModal 
        isOpen={isAffiliateModalOpen} 
        onClose={() => setIsAffiliateModalOpen(false)} 
      />
    </main>
  )
}
