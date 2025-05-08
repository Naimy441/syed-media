"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Sparkles, Video, Users, BarChart3, Mail, CreditCard } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"

export default function InnovativeMarketing() {
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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16 relative z-10">
            <motion.div
              animate={{
                background: [
                  "linear-gradient(90deg, #8b5cf6, #10b981)",
                  "linear-gradient(180deg, #10b981, #8b5cf6)",
                  "linear-gradient(270deg, #8b5cf6, #10b981)",
                  "linear-gradient(0deg, #10b981, #8b5cf6)",
                  "linear-gradient(90deg, #8b5cf6, #10b981)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block px-4 py-2 rounded-full mb-6"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">Premium Service</span>
              </div>
            </motion.div>

            <h1 className="pb-2  text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
              Innovative Marketing Membership
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Perfect for profitable companies ready to amplify their social media presence
            </p>
          </div>

          <FadeInSection className="relative z-10 p-8 md:p-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why you should buy</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                In today's digital landscape, strategic media marketing isn't a luxury — it's a necessity. 
                Yet many businesses fall behind due to inconsistent, low-impact content. <span className="text-emerald-400 font-medium">Syed Media changes that.</span>
              </p>
              <p>
                We handle the entire brand scaling media process, delivering professionally edited, high-converting ads — 
                including attention-grabbing comedy skits — tailored to elevate your brand.
              </p>
              <p>
                Our structured, platform-optimized posting strategy keeps your brand visible, relevant, and engaging across all major channels. 
                Within just one month, your page will transform into a polished portfolio of impactful content.
              </p>
              <p className="font-medium text-white">
                Expect measurable growth — in followers, engagement, and ultimately, in sales and brand recognition.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection className="p-8 md:p-10 rounded-xl mb-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Essential Plan */}
              <motion.div 
                className="bg-slate-900/50 rounded-lg p-6 border border-white/50"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Essential</h3>
                  <div className="bg-gradient-to-r from-white/20 to-white/10 px-4 py-2 rounded-lg mb-4">
                    <span className="text-2xl font-bold text-white">8</span>
                    <span className="text-white ml-2">High-Quality Ads / Month</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Video Shoot included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Thumbnails included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Captions included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Premium editing included</span>
                  </li>
                </ul>
              </motion.div>

              {/* Extra Plan */}
              <motion.div 
                className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/50 relative"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Extra</h3>
                  <div className="bg-gradient-to-r from-purple-500/30 to-purple-400/20 px-4 py-2 rounded-lg mb-4">
                    <span className="text-2xl font-bold text-purple-400">12</span>
                    <span className="text-purple-400 ml-2">High-Quality Ads / Month</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Video Shoot included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Thumbnails included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Captions included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Premium editing included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-purple-400">Custom series for your brand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-purple-400">Social media page management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-purple-400">Actors & Ideas provided for skits</span>
                  </li>
                </ul>
              </motion.div>

              {/* Premium Plan */}
              <motion.div 
                className="bg-slate-900/50 rounded-lg p-6 border border-yellow-500/50"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Premium</h3>
                  <div className="bg-gradient-to-r from-yellow-500/30 to-yellow-400/20 px-4 py-2 rounded-lg mb-4">
                    <span className="text-2xl font-bold text-yellow-400">20</span>
                    <span className="text-yellow-400 ml-2">High-Quality Ads / Month</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Video Shoot included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Thumbnails included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Captions included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white">Premium editing included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-purple-400">Custom series for your brand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-purple-400">Social media page management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-purple-400">Actors & Ideas provided for skits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-yellow-400">Brand Collaborations arranged</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-yellow-400">
                      <span className="bg-gradient-to-r from-yellow-500/30 to-yellow-400/20 px-2 py-0.5 rounded-md font-semibold">100,000+</span> views guaranteed in the first month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span className="text-yellow-400">Web development & unlimited IT support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </FadeInSection>

          <FadeInSection>
            {/* CTA Section */}
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              {/* Left: Text and Button */}
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">INNOVATIVE MARKETING</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">READY TO START<br />YOUR JOURNEY?</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <Link href="mailto:contact@syedmedia.com" className="w-full md:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full text-lg h-14 border-purple-500/50 hover:bg-purple-500/10 text-purple-300"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email us
                    </Button>
                  </Link>
                  <Link href="mailto:contact@syedmedia.com?subject=Start%20Scaling%20-%20Payment%20Request" className="w-full md:w-auto">
                    <Button
                      size="lg"
                      className="w-full text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Start Scaling Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center p-4 md:p-8">
                <img
                  src="/growth2.png"
                  alt="Digital Launchpad Visual"
                  className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-xl"
                  style={{ minHeight: '260px' }}
                />
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
    </main>
  )
}