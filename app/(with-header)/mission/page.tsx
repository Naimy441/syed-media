"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import FadeInSection from "@/components/FadeInSection"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Sparkles, Send, BicepsFlexed } from "lucide-react"
// import { AutopilotIcon } from "@/components/icons/autopilot" // Placeholder for autopilot icon

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const frame = useRef(0)

  useEffect(() => {
    let start = 0
    const end = target
    const totalFrames = Math.round(duration * 60)
    function animate() {
      frame.current++
      const progress = Math.min(frame.current / totalFrames, 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    animate()
    return () => { frame.current = 0 }
  }, [target, duration])

  return <span>{count.toLocaleString()}+</span>
}

export default function MissionPage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col gap-20">
        {/* Hero Section */}
        <FadeInSection className="text-center max-w-4xl mx-auto">
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
            <span className="font-medium py-1">Our Mission</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
            To Create Value for all entrepreneurs through the Media
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            One person at a time, we hope to empower entrepreneurs and make brand scaling accessible to anyone, anywhere, anytime.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
            <div className="text-center">
              <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
                <AnimatedCounter target={240000} duration={2.5} />
              </span>
              <div className="text-lg text-gray-300 mt-2">
                Total number of views accumulated for one of our clients' TikTok pages this month.
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Mission Statement */}
        <FadeInSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">At Syed Media, our mission is simple:</h2>
          <p className="text-lg text-gray-300 mb-6">
            Make high-quality, affordable marketing accessible to growing businesses — and do it with integrity.
          </p>
          <p className="text-lg text-gray-400 mb-4">
            The marketing industry has become oversaturated with quick-cash freelancers, botted views, and low-effort content. Too many business owners are paying top dollar for marketing that doesn't move the needle. No strategy. No creativity. No results.
          </p>
          <p className="text-lg text-gray-400 mb-4">
            We set out to change that.
          </p>
          <p className="text-lg text-gray-400 mb-4">
            Before launching our services, we focused on building something most agencies forget: credibility. We earned our name by delivering real results to real clients — and letting their success speak for itself.
          </p>
        </FadeInSection>

        {/* Testimonial Section */}
        <FadeInSection className="max-w-4xl mx-auto px-4">
          <Card className="bg-slate-900/70 border-slate-700">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl">Let's hear what Asim Dar, Founder of Crypto Burger, wants to share about how Syed Media helped elevate his brand.</CardTitle>
            </CardHeader>
            <CardContent className="p-0 md:p-6">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/fwPMD_BhP_o?autoplay=1&mute=1"
                  title="Asim Dar Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </FadeInSection>

        {/* Marketing on Autopilot Section */}
        <FadeInSection className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-emerald-400 rounded-full flex items-center justify-center text-3xl md:text-4xl mx-auto md:mx-0">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Marketing on Autopilot</h2>
              <p className="text-base md:text-lg text-gray-300 mb-4">We designed a model that takes media off your plate — so you can focus on your business.</p>
              <p className="text-base md:text-lg text-gray-300 mb-4">With one flat, affordable monthly fee, we deliver:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 flex-shrink-0"></span>
                  <span className="text-base md:text-lg text-gray-300">High-performing ad campaigns that drive results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 flex-shrink-0"></span>
                  <span className="text-base md:text-lg text-gray-300">Scroll-stopping thumbnails designed to convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 flex-shrink-0"></span>
                  <span className="text-base md:text-lg text-gray-300">Sustainable, organic audience growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 flex-shrink-0"></span>
                  <span className="text-base md:text-lg text-gray-300">Premium, studio-quality editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 flex-shrink-0"></span>
                  <span className="text-base md:text-lg text-gray-300">Content aligned with the latest digital trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 flex-shrink-0"></span>
                  <span className="text-base md:text-lg text-gray-300">Strategic presence across all major platforms</span>
                </li>
              </ul>
              <p className="text-base md:text-lg text-gray-400 mb-2">All managed by our team. All done for you.</p>
              <p className="text-base md:text-lg text-gray-400">Cancel anytime. No pressure. Just results.</p>
            </div>
          </div>
        </FadeInSection>

        {/* Social Media Section */}
        <FadeInSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Follow Our Journey</h2>
          <p className="text-lg text-gray-300 mb-8">
            Stay connected with us on social media for the latest updates, success stories, and behind-the-scenes content.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://youtube.com/@hamzasyedd?si=DQVwrybKM5ghBBlZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">YouTube</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/syedmedia_?igsh=OTJndmxtN25zcWFp"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-500/20 rounded-full flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                  <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">Instagram</span>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@syedmedia_?_t=ZT-8w9DbvgVnsB&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-black/20 rounded-full flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">TikTok</span>
              </div>
            </a>
          </div>
        </FadeInSection>

        {/* Call to Action Section */}
        <FadeInSection>
          <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
            {/* Left: Text and Button */}
            <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
              <div className="mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                  <span className="text-lg font-semibold tracking-wide text-white">SYED MEDIA</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">READY TO GROW?</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <a href="mailto:hello@syedmedia.com?subject=Free%20Strategy%20Call" className="w-full md:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg h-14 border-purple-500/50 hover:bg-purple-500/10 text-purple-300"
                  >
                    {/* You can import and use the Mail icon if desired */}
                    Book a Free Strategy Call
                  </Button>
                </a>
                <a href="/payment" className="w-full md:w-auto">
                  <Button
                    size="lg"
                    className="w-full text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  >
                    {/* You can import and use the CreditCard icon if desired */}
                    Get Started Today
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-4 md:p-8">
              {/* <img
                src="/mission1.png"
                alt="Syed Media CTA Visual"
                className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-xl"
                style={{ minHeight: '260px', maxHeight: '512px' }}
              /> */}
              <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <BicepsFlexed className="w-full max-w-xs h-auto text-red-500 bg-white/10 rounded-2xl p-8 shadow-xl" />
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Collaboration Section */}
        <FadeInSection>
          <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
            {/* Left: Text and Button */}
            <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
              <div className="mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                  <span className="text-lg font-semibold tracking-wide text-white">COLLABORATE</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">LET'S COLLABORATE!</h2>
              </div>
              <p className="text-lg text-gray-300 mb-8">
                We're not just a media agency. We're a network of passionate entrepreneurs who genuinely love marketing and innovation. If you're looking to collaborate, sponsor, or build something powerful together, we'd love to hear from you.
              </p>
              <p className="text-lg text-gray-300 mb-8">Let's create something that leaves a mark.</p>
              <a href="mailto:hello@syedmedia.com?subject=Collaboration" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                >
                  Email Us
                </Button>
              </a>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center p-4 md:p-8">
                <Send className="w-full max-w-xs h-auto text-purple-500 bg-white/10 rounded-2xl p-8 shadow-xl" />
              </div>
            {/* <div className="flex-1 flex items-center justify-center p-4 md:p-8">
              <img
                src="/mission2.png"
                alt="Collaboration Visual"
                className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-xl"
                style={{ minHeight: '260px', maxHeight: '512px' }}
              />
            </div> */}
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
