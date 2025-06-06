"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, Clock, MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { FaApplePay, FaYoutube, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa"

export default function DigitalEditing() {
  const [isVisible, setIsVisible] = useState(false)

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
                  "linear-gradient(90deg, #f59e42, #3b82f6)",
                  "linear-gradient(180deg, #3b82f6, #f59e42)",
                  "linear-gradient(270deg, #f59e42, #3b82f6)",
                  "linear-gradient(0deg, #3b82f6, #f59e42)",
                  "linear-gradient(90deg, #f59e42, #3b82f6)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block px-4 py-2 rounded-full mb-6"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">Personal Digital Editing</span>
              </div>
            </motion.div>

            <h1 className="pb-2 text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-500">
              Premium Video Editing Services, At Your Fingertips
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Subscribe now for just <span className="text-white font-bold">$49.99/month</span> and gain exclusive access to a dedicated video editor, ready to bring your projects to life anytime, from anywhere.
            </p>
          </div>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Clock className="inline w-6 h-6 text-purple-400" /> 24/7 Access & On-Demand Editing</h2>
            <ul className="text-left space-y-4 text-lg">
              <li>• Your subscription unlocks on-demand, premium editing services — fully tailored to your vision and schedule.</li>
              <li>• Enjoy industry-leading turnaround times and the most responsive client support team in the business.</li>
              <li>• Empower your content with platform-ready videos, exactly the way you envision, with just a few clicks.</li>
            </ul>
            <div className="mt-6 bg-slate-900/50 border border-slate-700/50 rounded-lg p-4">
              <div className="text-sm text-gray-300">
                <span className="font-medium text-white">Please note:</span> Each project is billed separately. The subscription gives you priority access to professional editing whenever you need it.
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Sparkles className="inline w-6 h-6 text-emerald-400" /> Unlock More Than Just an Editor</h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">24/7 Access to Your Personal Editor</div>
                  <div className="text-gray-300 mt-1">No delays. No time zones. Your editor is always within reach—ready when you are.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Unlimited Revisions</div>
                  <div className="text-gray-300 mt-1">We don't stop until it's perfect. Refine your project as many times as needed until you're 100% satisfied.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Direct & Consistent Communication</div>
                  <div className="text-gray-300 mt-1">Stay in the loop at every stage. Enjoy open, consistent updates and a collaborative editing process that puts you in control.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-emerald-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Vision-Driven Editing</div>
                  <div className="text-gray-300 mt-1">Your style. Your vision. Your ideas. Work with an editor who gets it—and makes it even better.</div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] p-8 shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">Generate Content On Any Platform</h3>
                <div className="grid grid-cols-4 gap-8">
                  <motion.div 
                    className="flex flex-col items-center gap-3"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0
                    }}
                  >
                    <div className="bg-red-500/10 p-4 rounded-full">
                      <FaYoutube className="h-10 w-10 text-red-500" />
                    </div>
                    <span className="text-base text-gray-300">YouTube</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center gap-3"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.75
                    }}
                  >
                    <div className="bg-white/10 p-4 rounded-full">
                      <FaTiktok className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-base text-gray-300">TikTok</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center gap-3"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <div className="bg-pink-500/10 p-4 rounded-full">
                      <FaInstagram className="h-10 w-10 text-pink-500" />
                    </div>
                    <span className="text-base text-gray-300">Instagram</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center gap-3"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 2.25
                    }}
                  >
                    <div className="bg-blue-600/10 p-4 rounded-full">
                      <FaFacebook className="h-10 w-10 text-blue-600" />
                    </div>
                    <span className="text-base text-gray-300">Facebook</span>
                  </motion.div>
                </div>
              </div>
            </section>
          </FadeInSection>
          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              {/* Left: Text and Button */}
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">PERSONAL DIGITAL EDITING</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Unlock Premium Editing?</h2>
                </div>
                <Link href="https://buy.stripe.com/28oeVMfas4cCa9a7ss" className="w-full md:w-auto">
                  <Button size="lg" className="flex items-center gap-3 text-lg md:text-xl px-8 py-5 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-purple-200 transition-all mb-6">
                    <FaApplePay className="h-8 w-16" />
                    <span>Subscribe with Apple Pay</span>
                  </Button>
                </Link>

              </div>
              <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <Sparkles className="w-full max-w-[260px] md:max-w-md h-auto text-purple-400 bg-white/10 rounded-2xl p-8 shadow-xl" />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
    </main>
  )
}
