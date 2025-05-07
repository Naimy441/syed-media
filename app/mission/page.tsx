"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"
import FadeInSection from "@/components/FadeInSection"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
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
        <FadeInSection className="max-w-2xl mx-auto">
          <Card className="bg-slate-900/70 border-slate-700">
            <CardHeader>
              <CardTitle>Let's hear what Asim Dar, co-owner of Crypto Burger, wants to share about how Syed Media helped elevate his brand.</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace with actual video embed */}
              <div className="aspect-video w-full bg-black rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[Testimonial Video Placeholder]</span>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>

        {/* Marketing on Autopilot Section */}
        <FadeInSection className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Placeholder for autopilot icon */}
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-emerald-400 rounded-full flex items-center justify-center text-4xl">
              {/* <AutopilotIcon className="w-12 h-12 text-white" /> */}
              <span role="img" aria-label="Autopilot">🛫</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing on Autopilot</h2>
              <p className="text-lg text-gray-300 mb-4">We designed a model that takes media off your plate — so you can focus on your business.</p>
              <p className="text-lg text-gray-300 mb-4">With one flat, affordable monthly fee, we deliver:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>High-performing ad campaigns that drive results</li>
                <li>Scroll-stopping thumbnails designed to convert</li>
                <li>Sustainable, organic audience growth</li>
                <li>Premium, studio-quality editing</li>
                <li>Content aligned with the latest digital trends</li>
                <li>Strategic presence across all major platforms</li>
              </ul>
              <p className="text-gray-400 mb-2">All managed by our team. All done for you.</p>
              <p className="text-gray-400 mb-2">Cancel anytime. No pressure. Just results.</p>
            </div>
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
              <img
                src="/marketing2.png"
                alt="Syed Media CTA Visual"
                className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-xl"
                style={{ minHeight: '260px' }}
              />
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
            <div className="flex-1 flex items-center justify-center p-4 md:p-8">
              <img
                src="/marketing3.png"
                alt="Collaboration Visual"
                className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-xl"
                style={{ minHeight: '260px' }}
              />
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>
  )
}
