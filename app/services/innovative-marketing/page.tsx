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

            {/* Cool price animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15, 
                delay: 0.5 
              }}
              className="relative my-14 mx-auto w-fit"
            >
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-emerald-500/30 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative  rounded-xl px-8 py-5 text-center">
                <p className="text-gray-400 font-medium">Ideal budget</p>
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold text-white mr-1">$</span>
                  <motion.span 
                    className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    999
                  </motion.span>
                  <span className="text-2xl font-bold text-white">/month</span>
                </div>
              </div>
            </motion.div>
          </div>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4">What's Included</h2>
            <ul className="text-left space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-purple-500/20 p-1 rounded-full">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Strategic Social Media Management</h3>
                  <p className="text-gray-300">
                    Comprehensive management of your social media platforms with data-driven strategies.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-emerald-500/20 p-1 rounded-full">
                  <Sparkles className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Content Creation & Curation</h3>
                  <p className="text-gray-300">
                    Professional content tailored to your brand voice and audience preferences.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-500/20 p-1 rounded-full">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Performance Analytics</h3>
                  <p className="text-gray-300">
                    Detailed reports and insights to track growth and optimize your marketing strategy.
                  </p>
                </div>
              </li>
            </ul>
          </FadeInSection>

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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What you get</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1 bg-purple-500/20 p-2 rounded-full">
                    <Video className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-xl">Premium Content Creation</h3>
                </div>
                <ul className="space-y-3 text-gray-300 pl-12">
                  <li className="list-disc">8-20 high-quality ads created every month</li>
                  <li className="list-disc">Video Shoot included</li>
                  <li className="list-disc">Thumbnails included</li>
                  <li className="list-disc">Captions included</li>
                  <li className="list-disc">Premium editing included</li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1 bg-emerald-500/20 p-2 rounded-full">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-xl">Strategy & Management</h3>
                </div>
                <ul className="space-y-3 text-gray-300 pl-12">
                  <li className="list-disc">Our proven marketing model</li>
                  <li className="list-disc">Social media page management</li>
                  <li className="list-disc">Actors & Ideas provided for skits</li>
                  <li className="list-disc">Collaborations with other brands</li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-lg relative z-10 inline-block max-w-2xl"
              >
                <p className="text-blue-300">
                  <span className="font-semibold">Located outside of Houston or don't need on-site filming?</span> No problem — we offer remote ad campaigns too! Contact us below to see how we can bring your vision to life from anywhere.
                </p>
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
                  src="/marketing2.png"
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