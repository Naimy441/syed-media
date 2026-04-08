"use client"

import { useState, useEffect, useRef } from "react"
import FadeInSection from "@/components/FadeInSection"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Sparkles, Send, BicepsFlexed, CreditCard, Mail, Copyright } from "lucide-react"
import { ContactModal } from "@/components/modals/contact-modal"
import { MarketingModal } from "@/components/modals/marketing-modal"
import { CreatorHeart } from "@/components/3ata-heart"
import { GradientText } from "@/components/site/MarketingUI"
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'strategy' | 'collaboration'>('strategy')

  const openContactModal = (type: 'strategy' | 'collaboration') => {
    setModalType(type)
    setIsContactModalOpen(true)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white" style={{ backgroundColor: "#090e11" }}>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 md:gap-24 md:py-24">
        {/* Hero Section */}
        <FadeInSection className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="py-1 text-sm font-medium uppercase tracking-wider text-[#00ffff]">Our Mission</span>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            To Create Value for all Entrepreneurs via Media
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/75">
            One person at a time, we hope to empower entrepreneurs and make brand scaling accessible to anyone, anywhere, anytime.
          </p>
          <div className="mx-auto mt-10 max-w-xl border border-white/10 bg-white/[0.02] px-8 py-8 text-center">
              <span className="bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                <AnimatedCounter target={240000} duration={2.5} />
              </span>
              <div className="mt-3 text-sm uppercase tracking-wider text-[#00ffff]/80">Client impact</div>
              <p className="mt-4 text-base text-white/70">
                Total views accumulated for one of our clients&apos; TikTok pages in a single month.
              </p>
          </div>
        </FadeInSection>

        {/* Mission Statement */}
        <FadeInSection className="mx-auto max-w-3xl text-center">
          <div className="border border-white/10 bg-white/[0.02] px-6 py-10 md:px-10 md:py-12">
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
              <GradientText as="span">At Syed Media, our mission is simple</GradientText>
            </h2>
            <p className="mb-6 text-lg font-medium text-white">
              Make high-quality, affordable marketing accessible to growing businesses — and do it with integrity.
            </p>
            <p className="mb-4 text-left text-lg leading-relaxed text-white/70 md:text-center">
              The marketing industry has become oversaturated with quick-cash freelancers, botted views, and low-effort content. Too many business owners are paying top dollar for
              marketing that doesn&apos;t move the needle. No strategy. No creativity. No results.
            </p>
            <p className="mb-4 text-lg text-[#00ffff]">We set out to change that.</p>
            <p className="text-left text-lg leading-relaxed text-white/60 md:text-center">
              Before launching our services, we focused on building something most agencies forget: credibility. We earned our name by delivering real results to real clients — and
              letting their success speak for itself.
            </p>
          </div>
        </FadeInSection>

        {/* Testimonial Section */}
        <FadeInSection className="max-w-4xl mx-auto px-4">
          <Card className="rounded-none border border-white/10 bg-white/[0.02]">
            <CardHeader className="border-b border-white/10 p-4 md:p-6">
              <CardTitle className="text-xl font-semibold leading-snug text-white md:text-2xl">
                Let&apos;s hear what Asim Dar, Founder of Crypto Burger, shares about how Syed Media helped elevate his brand.
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 md:p-6">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute left-0 top-0 h-full w-full rounded-none border border-white/10"
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
        <FadeInSection className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-start gap-8 border border-white/10 bg-white/[0.02] p-6 md:flex-row md:p-10">
            <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center border border-[#00ffff]/40 bg-[#00ffff]/10 md:mx-0 md:h-20 md:w-20">
              <Sparkles className="h-8 w-8 text-[#00ffff] md:h-10 md:w-10" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-center text-2xl font-semibold md:text-left md:text-3xl">
                <GradientText as="span">Marketing on Autopilot</GradientText>
              </h2>
              <p className="mb-4 text-base text-white/75 md:text-lg">We designed a model that takes media off your plate — so you can focus on your business.</p>
              <p className="mb-4 text-base text-white/75 md:text-lg">With one flat, affordable monthly fee, we deliver:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffff]"></span>
                  <span className="text-base text-white/80 md:text-lg">High-performing ad campaigns that drive results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffff]"></span>
                  <span className="text-base text-white/80 md:text-lg">Scroll-stopping thumbnails designed to convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffff]"></span>
                  <span className="text-base text-white/80 md:text-lg">Sustainable, organic audience growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffff]"></span>
                  <span className="text-base text-white/80 md:text-lg">Premium, studio-quality editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffff]"></span>
                  <span className="text-base text-white/80 md:text-lg">Content aligned with the latest digital trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffff]"></span>
                  <span className="text-base text-white/80 md:text-lg">Strategic presence across all major platforms</span>
                </li>
              </ul>
              <p className="mb-2 text-base text-white/60 md:text-lg">All managed by our team. All done for you.</p>
              <p className="text-base text-[#d966ff]/90 md:text-lg">Cancel anytime. No pressure. Just results.</p>
            </div>
          </div>
        </FadeInSection>

        {/* Social Media Section */}
        <FadeInSection className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
            <GradientText as="span">Follow Our Journey</GradientText>
          </h2>
          <p className="mb-8 text-lg text-white/75">
            Stay connected with us on social media for the latest updates, success stories, and behind-the-scenes content.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://youtube.com/@hamzasyedd?si=DQVwrybKM5ghBBlZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00ffff]/40">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-white/10 bg-red-500/15 transition-colors group-hover:border-red-500/40 group-hover:bg-red-500/25">
                  <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">YouTube</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/syedmedia_?igsh=OTJndmxtN25zcWFp"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00ffff]/40">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-white/10 bg-pink-500/15 transition-colors group-hover:border-pink-500/40 group-hover:bg-pink-500/25">
                  <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">Instagram</span>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@syedmedia_?_t=ZT-8w9DbvgVnsB&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00ffff]/40">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-white/10 bg-white/[0.06] transition-colors group-hover:border-[#00ffff]/35">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">TikTok</span>
              </div>
            </a>
          </div>
        </FadeInSection>

        {/* Call to Action Section */}
        <FadeInSection>
          <section className="mb-8 mt-8 flex flex-col items-center overflow-hidden border border-[#00ffff]/30 bg-[#090e11] md:flex-row">
            <div className="flex flex-1 flex-col items-start justify-center p-8 md:p-12">
              <div className="mb-6">
                <div className="mb-4 inline-block border border-white/10 bg-white/[0.05] px-4 py-2">
                  <span className="text-lg font-semibold tracking-wide text-[#00ffff]">SYED MEDIA</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">READY TO GROW?</h2>
              </div>
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <Button
                  size="lg"
                  className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
                  onClick={() => setIsMarketingModalOpen(true)}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Get Started Today
                </Button>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center p-4 md:p-8">
              <div className="hidden flex-1 items-center justify-center p-4 md:flex md:p-8">
                <BicepsFlexed className="h-auto w-full max-w-xs border border-white/10 bg-white/[0.05] p-8 text-[#d966ff]" />
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Collaboration Section */}
        <FadeInSection>
          <section className="mb-8 mt-8 flex flex-col items-center overflow-hidden border border-white/10 bg-white/[0.02] md:flex-row">
            <div className="flex flex-1 flex-col items-start justify-center p-8 md:p-12">
              <div className="mb-6">
                <div className="mb-4 inline-block border border-[#d966ff]/40 bg-[#d966ff]/10 px-4 py-2">
                  <span className="text-lg font-semibold tracking-wide text-[#d966ff]">COLLABORATE</span>
                </div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">LET'S COLLABORATE!</h2>
              </div>
              <p className="mb-8 text-lg text-white/70">
                We're not just a media agency. We're a network of passionate entrepreneurs who genuinely love marketing and innovation. If you're looking to collaborate, sponsor, or build something powerful together, we'd love to hear from you.
              </p>
              <p className="mb-8 text-lg text-white/70">Let's create something that leaves a mark.</p>
              <Button
                size="lg"
                className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-transparent text-lg text-[#00ffff] hover:bg-[#00ffff]/10 md:w-auto"
                onClick={() => openContactModal('collaboration')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
            <div className="hidden flex-1 items-center justify-center p-4 md:flex md:p-8">
              <Send className="h-auto w-full max-w-xs border border-white/10 bg-white/[0.05] p-8 text-[#00ffff]" />
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

        {/* Contact Modal */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />

        {/* Marketing Modal */}
        <MarketingModal
          isOpen={isMarketingModalOpen}
          onClose={() => setIsMarketingModalOpen(false)}
        />
      </div>
      {/* <CreatorHeart /> */}
      <Copyright />
    </main>
  )
}
