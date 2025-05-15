"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, Sparkles, Laptop, DollarSign, Users, Star, Video, Wrench, Image, Phone, TrendingUp, Lock, RefreshCw, Briefcase, Mic } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import GlowingParticles from "@/components/GlowingParticles"

export default function EditingCourse() {
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
                  "linear-gradient(90deg, #f59e42, #6366f1)",
                  "linear-gradient(180deg, #6366f1, #f59e42)",
                  "linear-gradient(270deg, #f59e42, #6366f1)",
                  "linear-gradient(0deg, #6366f1, #f59e42)",
                  "linear-gradient(90deg, #f59e42, #6366f1)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block px-4 py-2 rounded-full mb-6"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium py-1">Digital Editing Course</span>
              </div>
            </motion.div>

            <h1 className="pb-2 text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
              Digital Editing Course
              <span className="inline-flex items-center align-top ml-2 mt-4 md:mt-0">
                <div className="bg-emerald-500 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </div>
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Learn to edit and immediately start earning. No experience needed. Just a smartphone.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <img src="/editing-course.png" alt="Jackpot" className="max-w-[330px] md:max-w-xl h-auto object-contain rounded-xl shadow-lg bg-black/10" />
            </div>
          </div>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Laptop className="inline w-6 h-6 text-purple-400" /> What's Included</h2>
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
              <div className="space-y-4 text-lg">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Video className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Step-by-step lessons using the exact tools Syed Media relies on</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Wrench className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Learn to edit from scratch — no experience needed</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Image className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Master thumbnail design that drives views</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Phone className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Proven cold-call script to land your first client</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <TrendingUp className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Strategy to scale your editing skills to $10K+/month</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Lock className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Exclusive member-only video drops</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <RefreshCw className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Regular updates to match evolving trends</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Briefcase className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Work with real brands to build your portfolio</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <CheckCircle className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Opportunity to join Syed Media's editing team</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Users className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Access to a thriving editor & entrepreneur community</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                  <Mic className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Live virtual Q&As with Hamza Syed whenever you need editing support</span>
                </motion.div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="p-8 mb-8 relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><DollarSign className="inline w-6 h-6 text-emerald-400" /> Why This Course?</h2>
            <div className="text-gray-300 space-y-4 text-lg">
              <p>Unlock the skills to turn editing into a real income stream. Whether you're starting from zero or looking to sharpen your craft, this course — led by Hamza Syed — gives you everything you need to succeed.</p>
              <p>If you want a real course that gets straight to the point, exposes all the shortcuts, and takes you from beginner to seasoned editor, this is the right place to be. You've hit a jackpot.</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
              {/* Left: Text and Button */}
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                    <span className="text-lg font-semibold tracking-wide text-white">DIGITAL EDITING COURSE</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Waitlist Today</h2>
                </div>
                <Link href="https://buy.stripe.com/cN27tkfascJ8gxy8wx" className="w-full md:w-auto">
                  <Button
                    size="lg"
                    className="w-full text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  >
                    Reserve Now — $10
                  </Button>
                </Link>
                <div className="text-sm text-gray-300 mt-4 max-w-md">
                  <span className="font-semibold text-white">Get on the waitlist now before our prices increase, and be the first to know when we launch.</span><br />
                  The $10 application fee will be credited toward your course fee upon enrollment.
                </div>
              </div>
              <div className="relative flex-1 flex items-center justify-center p-4 md:p-8">
                <div className="relative w-full max-w-md">
                  <img src="/digital-editing.png" alt="Digital Editing" className="w-full h-auto rounded-2xl shadow-xl bg-black/10" />
                  <GlowingParticles count={24} />
                </div>
              </div>
            </section>
          </FadeInSection>
        </motion.div>
      </div>
    </main>
  )
}