"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, MessageSquare, Sparkles, Video } from "lucide-react"
import { AffiliateModal } from "@/components/modals/affiliate-modal"
import { MarketingModal } from "@/components/modals/marketing-modal"
import ReviewModal from "@/components/modals/review-modal"
import Particles from "@/components/Particles"
import {
  GradientText,
  RectButton,
  SectionShell,
  cyanButtonOutlineClass,
} from "@/components/site/MarketingUI"

type Plan = {
  name: string
  tag: string
  price: string
  items: string[]
  premium?: boolean
}

function PremiumPlanSparkles() {
  const dots = [
    { t: "10%", l: "12%", d: 0 },
    { t: "22%", l: "88%", d: 0.35 },
    { t: "45%", l: "6%", d: 0.7 },
    { t: "58%", l: "78%", d: 0.2 },
    { t: "72%", l: "24%", d: 0.55 },
    { t: "86%", l: "62%", d: 0.1 },
    { t: "34%", l: "44%", d: 0.9 },
    { t: "18%", l: "52%", d: 0.45 },
  ]
    return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {dots.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#00ffff] shadow-[0_0_8px_#00ffff,0_0_16px_rgba(217,102,255,0.45)]"
          style={{ top: p.t, left: p.l }}
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.35, 0.8] }}
          transition={{
            duration: 2.2 + (i % 4) * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.d,
          }}
        />
      ))}
      <motion.div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#00ffff]/25 to-transparent blur-3xl"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-8 -left-6 h-36 w-36 rounded-full bg-gradient-to-tr from-[#d966ff]/18 to-transparent blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    />
                </div>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  if (plan.premium) {
    return (
      <div className="relative isolate flex min-h-full flex-col overflow-hidden border-2 border-[#00ffff]/45 bg-[#060a0d]/95 p-6 shadow-[0_0_48px_rgba(0,255,255,0.2),0_0_96px_rgba(217,102,255,0.08),inset_0_0_72px_rgba(0,255,255,0.04)] md:-mt-1 md:mb-1 md:scale-[1.02]">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(145deg, rgba(0,255,255,0.12) 0%, transparent 42%, rgba(217,102,255,0.08) 100%)",
          }}
        />
        <PremiumPlanSparkles />
        <div className="relative flex flex-wrap items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#00ffff]" aria-hidden />
          <h4 className="bg-gradient-to-r from-[#00ffff] via-white to-[#d966ff] bg-clip-text text-lg font-semibold text-transparent">
            {plan.name}
          </h4>
          <span className="rounded-none border border-[#d966ff]/55 bg-[#d966ff]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#e9a8ff]">
            Flagship
          </span>
        </div>
        <p className="relative mt-2 text-sm text-white/70">{plan.tag}</p>
        <ul className="relative mt-6 flex-1 space-y-2 text-sm text-white/85">
          {plan.items.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-[#00ffff]">▸</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <div className="relative mt-8 border-t border-[#00ffff]/20 pt-6">
          <p className="bg-gradient-to-r from-white via-[#00ffff] to-[#d966ff] bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            {plan.price}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#00ffff]/80">
            Full-funnel creative + web + support
          </p>
                </div>
            </div>
    )
  }

  return (
    <div className="flex flex-col border border-white/10 bg-[#090e11]/80 p-6">
      <h4 className="text-lg font-semibold text-[#00ffff]">{plan.name}</h4>
      <p className="mt-2 text-sm text-white/65">{plan.tag}</p>
      <ul className="mt-6 flex-1 space-y-2 text-sm text-white/80">
        {plan.items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="text-[#00ffff]">▸</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-2xl font-bold text-white">{plan.price}</p>
    </div>
  )
}

function PortalHeroVisual() {
    return (
    <div className="relative mx-auto flex w-full justify-center py-4 md:py-8">
      <div className="relative w-full max-w-[min(94vw,22rem)] sm:max-w-[min(90vw,28rem)] md:max-w-[min(88vw,34rem)] lg:max-w-[min(52vw,42rem)] xl:max-w-[44rem]">
        {/* Glow layers — fade in when section enters view */}
        <motion.div
          className="pointer-events-none absolute inset-[-8%] md:inset-[-14%]"
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(0,255,255,0.35)_0%,rgba(217,102,255,0.12)_35%,transparent_65%)] blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="absolute inset-[6%] rounded-full border border-[#00ffff]/35 shadow-[0_0_50px_rgba(0,255,255,0.25),0_0_100px_rgba(217,102,255,0.12)]"
            animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            aria-hidden
          />
          <motion.div
            className="absolute inset-[2%] rounded-full border border-dashed border-[#d966ff]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
          <motion.div
            className="absolute inset-[12%] rounded-full border border-dashed border-[#00ffff]/25"
            animate={{ rotate: -360 }}
            transition={{ duration: 96, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
        </motion.div>

        {/* Main artwork — scale up on view, then gentle float + shifting glow */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.78, y: 36 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28, margin: "-60px 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
                    <motion.div
                        animate={{
                filter: [
                  "drop-shadow(0 0 32px rgba(0,255,255,0.55)) drop-shadow(0 0 64px rgba(217,102,255,0.28)) drop-shadow(0 0 100px rgba(0,255,255,0.12))",
                  "drop-shadow(0 0 48px rgba(217,102,255,0.45)) drop-shadow(0 0 80px rgba(0,255,255,0.35)) drop-shadow(0 0 120px rgba(217,102,255,0.15))",
                  "drop-shadow(0 0 32px rgba(0,255,255,0.55)) drop-shadow(0 0 64px rgba(217,102,255,0.28)) drop-shadow(0 0 100px rgba(0,255,255,0.12))",
                ],
              }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/new-images/portal-hero.png"
                alt="Magic Editing Portal"
                width={880}
                height={880}
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [reviewOpen, setReviewOpen] = useState(false)
  const [marketingOpen, setMarketingOpen] = useState(false)
  const [marketingService, setMarketingService] = useState("General Marketing Inquiry")
  const [affiliateOpen, setAffiliateOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const openMarketing = (serviceName: string) => {
    setMarketingService(serviceName)
    setMarketingOpen(true)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <div className="text-white" style={{ backgroundColor: "#090e11" }}>
      <section id="our-services" className="relative isolate overflow-hidden border-t border-white/5 scroll-mt-24">
        {!isMobile && (
          <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
            <Particles
              particleColors={["#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.03}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
              className="h-full w-full"
            />
          </div>
        )}
        <div className={`pointer-events-none absolute inset-0 z-10 ${isMobile ? "bg-[#090e11]/45" : "bg-[#090e11]/65"}`} />
        <div className="relative z-20 mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">
            <GradientText as="span" className="uppercase">Our services</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            End-to-end creative and growth support—built for brands that want to show up with clarity and impact.
          </p>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Strategic Marketing",
                desc: "Perfect for profitable companies ready to amplify their social media presence.",
                id: "strategic-marketing",
              },
              {
                title: "Magic Editing Portal",
                desc: "Turn your raw footage into tailored, polished, ready-to-watch cinema.",
                id: "magic-editing-portal",
              },
              {
                title: "Video Shooting",
                desc: "Bring a production team directly to your location to turn your ideas into high-quality content.",
                id: "video-shooting",
              },
              {
                title: "Image Alchemy",
                badge: "New",
                desc: "Turn your thoughts into visual art—thumbnails, AI images, enhancements.",
                id: "image-alchemy",
              },
              {
                title: "Affiliate Marketing",
                desc: "Earn $150 for every client you bring us. That's $1,500 just for finding 10 businesses. Ready to start?",
                id: "affiliate-marketing",
              },
              {
                title: "Passive Marketing",
                badge: "beta",
                desc: "Automated content and ad strategies that work in the background while you scale.",
                id: "passive-marketing",
              },
              {
                title: "Website Development",
                desc: "High-converting websites built from scratch to grow your brand.",
                id: "website-development",
              },
            ].map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex h-full flex-col border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00ffff]/40"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-lg font-semibold text-white group-hover:text-[#00ffff]">{s.title}</span>
                    {s.badge && (
                      <span className="rounded-none border border-[#d966ff]/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#d966ff]">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{s.desc}</p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#00ffff]">View details →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionShell id="strategic-marketing" className="bg-white/[0.02]">
        <h2 className="text-3xl font-semibold md:text-4xl">
          <GradientText as="span" className="uppercase">Strategic Marketing</GradientText>
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-white/75">
          Perfect for profitable companies ready to amplify their social media presence.
        </p>

        <h3 className="mt-14 text-xl font-semibold text-white">Strategic Marketing Plans</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Essential",
              tag: "Perfect for brands getting started with consistent, high-quality content.",
              price: "$1,200 / month",
              items: [
                "8 High-Converting Ad Creatives / Month",
                "Professional Video Shoot Included",
                "Custom Thumbnails",
                "SEO Optimized Captions",
              ],
            },
            {
              name: "Pro",
              tag: "Built for brands ready to grow faster and dominate their niche.",
              price: "$1,800 / month",
              items: [
                "12 High-Converting Ad Creatives / Month",
                "Professional Video Shoot Included",
                "Custom Thumbnails",
                "SEO Optimized Captions",
                "Full Social Media Management",
                "Branded Content Series",
              ],
            },
            {
              name: "Premium",
              premium: true,
              tag: "For brands serious about scaling, automation, and full digital presence.",
              price: "$2,999 / month",
              items: [
                "20 High-Converting Ad Creatives / Month",
                "Professional Video Shoot Included",
                "Custom Thumbnails",
                "SEO Optimized Captions",
                "Full Social Media Management",
                "Branded Content Series",
                "Custom Website Development",
                "Unlimited IT Support",
              ],
            },
          ].map((plan) => (
            <PlanCard key={plan.name} plan={plan as Plan} />
          ))}
        </div>
        <p className="mt-8 text-sm text-white/60">
          Single ad creative (without a subscription): <span className="text-white">$350</span>. Choose a plan to unlock
          better value and lower pricing.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[#00ffff]">Why It Matters</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              In today's digital landscape, attention is currency—and inconsistent, low-quality marketing quietly kills
              growth. Most brands don't fail because of their product, but because of how they show up.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#00ffff]">What We Do</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We manage your entire content and advertising ecosystem from concept to execution. We produce
              high-converting, professionally edited ads—including engaging, attention-grabbing skits—built on proven
              creative frameworks and real-time trends. Our platform-optimized posting strategy ensures your brand stays
              visible, relevant, and top-of-mind across all major channels.
            </p>
          </div>
        </div>

        <div className="mt-12 border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-lg font-semibold text-white">The Result</h3>
          <p className="mt-3 text-sm text-white/70">
            Within 30 days, your social presence evolves into a polished, high-performing content portfolio—designed to
            drive:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
            {["Stronger brand positioning", "Higher engagement", "Consistent audience growth", "Increased conversions and revenue"].map(
              (x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-[#d966ff]">◆</span>
                  {x}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold text-[#00ffff]">Precision Targeting</h3>
          <p className="mt-3 max-w-3xl text-sm text-white/70">
            A powerful campaign starts with the right audience. We don't guess—we define and refine your audience using
            data-driven targeting, including:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
            {["Demographics", "Interests and online behavior", "Age and gender", "Geographic location"].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="text-[#00ffff]">▸</span>
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/65">
            Whether you're targeting a specific neighborhood in Houston or expanding across multiple cities and states,
            we position your brand directly in front of the people most likely to convert.
          </p>
        </div>

        <div className="mt-10">
          <RectButton variant="outline" onClick={() => openMarketing("Strategic Marketing")}>
            Get started — Strategic Marketing
          </RectButton>
        </div>
      </SectionShell>

      <SectionShell id="magic-editing-portal">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              <GradientText as="span" className="uppercase">Magic Editing Portal</GradientText>
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Transform your raw footage into a polished, high-impact video—customized to your vision and budget.
            </p>
            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-[#00ffff]">How it works</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-white/75">
              <li>Upload your footage through our seamless portal</li>
              <li>Connect with a Syed Media specialist to align on your vision, goals, and creative direction</li>
              <li>Receive a fully edited, high-quality production—ready to post and perform</li>
            </ol>
            <div className="mt-8 flex flex-wrap gap-4">
              <RectButton onClick={() => openMarketing("Magic Editing Portal")}>
                Start your project — Get a custom quote
              </RectButton>
            </div>
          </div>
          <PortalHeroVisual />
        </div>
      </SectionShell>

      <SectionShell id="video-shooting" className="bg-white/[0.02]">
        <h2 className="text-3xl font-semibold md:text-4xl">
          <GradientText as="span" className="uppercase">Video Shooting</GradientText>
        </h2>
        <p className="mt-4 text-lg text-white/75">
          Bring a production team directly to your location to turn your ideas into high-quality content.
        </p>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70">
          Syed Media brings a full production team directly to your location, turning your ideas into high-quality,
          scroll-stopping content. From camera work and angles to lighting, audio, and on-set direction—we handle every
          detail so you can focus on delivering your message with confidence. No retakes stress. No guesswork. Just a
          seamless, professional shoot with same-day content delivery.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden border border-[#00ffff]/35 bg-gradient-to-br from-[#090e11] via-[#090e11] to-[#0a1418] p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
            <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#00ffff]/10 blur-3xl" aria-hidden />
            <div className="flex items-center gap-2 text-[#00ffff]">
              <Video className="h-5 w-5 shrink-0" aria-hidden />
              <h3 className="text-lg font-semibold text-white">On-location session</h3>
            </div>
            <p className="mt-4 bg-gradient-to-r from-white via-[#00ffff] to-white/90 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              $350
              <span className="ml-1 text-lg font-semibold tracking-normal text-white/50 md:text-xl">/ shoot</span>
            </p>
            <p className="mt-2 text-sm text-white/65">One polished video, full crew, professional audio & lighting.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Directed on-site shoot at your location",
                "Pro camera, lighting & audio",
                "1 hero edit included, delivery-ready",
                "Same-day media handoff when schedule allows",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00ffff]" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between border border-white/12 bg-white/[0.02] p-8">
            <div>
              <h3 className="text-lg font-semibold text-[#d966ff]">Add more from the same day</h3>
              <p className="mt-2 text-3xl font-bold text-white md:text-4xl">
                $200
                <span className="ml-1 text-base font-medium text-white/45">each extra video</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Capture multiple angles or formats in one visit—additional edits are billed per finished piece, not per
                hour of idle time.
              </p>
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-xs font-mono uppercase tracking-wider text-white/45">
              Bundle Tip · Ask about pairing with a Strategic Marketing plan for bundled shoot credits.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <RectButton variant="outline" onClick={() => openMarketing("Video Shooting")}>
            Book a video shoot
          </RectButton>
        </div>
      </SectionShell>

      <SectionShell id="image-alchemy">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              <GradientText as="span" className="uppercase">Image Alchemy</GradientText>
            </h2>
            <span className="mt-2 inline-block border border-[#d966ff]/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#d966ff]">
              New
            </span>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-lg text-white/75">
          Turn your ideas into striking visuals—crafted with precision, creativity, and advanced AI.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { src: "/new-images/image_alchemy/thumbnail1.PNG", alt: "Thumbnail sample one" },
            { src: "/new-images/image_alchemy/thumbnail2.PNG", alt: "Thumbnail sample two" },
            { src: "/new-images/image_alchemy/thumbnail3.PNG", alt: "Thumbnail sample three" },
          ].map((img) => (
            <div key={img.src} className="overflow-hidden border border-white/10 bg-[#090e11]">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={520}
                unoptimized
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="border border-white/10 p-6">
            <h3 className="font-semibold text-[#00ffff]">Thumbnails — $15</h3>
            <p className="mt-2 text-sm text-white/70">
              High-converting thumbnails designed to capture attention and boost clicks across any platform. Explore a
              selection of our work above.
            </p>
          </div>
          <div className="border border-white/10 p-6">
            <h3 className="font-semibold text-[#00ffff]">Creative Lab — $15</h3>
            <p className="mt-2 text-sm text-white/70">
              Bring any concept to life. From product mockups and surreal visuals to architectural renders and unique
              ideas—if you can imagine it, we can create it.
            </p>
          </div>
          <div className="border border-white/10 p-6">
            <h3 className="font-semibold text-[#00ffff]">Logo Design — $20</h3>
            <p className="mt-2 text-sm text-white/70">
              Clean, modern logos crafted with expert direction to elevate your brand identity.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <RectButton variant="outline" onClick={() => openMarketing("Image Alchemy")}>
            Get started — Image Alchemy
          </RectButton>
        </div>
      </SectionShell>

      <SectionShell id="affiliate-marketing" className="bg-white/[0.02]">
        <h2 className="text-3xl font-semibold md:text-4xl">
          <GradientText as="span" className="uppercase">Syed Media Affiliate Program</GradientText>
        </h2>
        <p className="mt-4 text-lg text-white/75">Turn your network into income.</p>

        <div className="relative mt-8 overflow-hidden border border-[#00ffff]/25 bg-gradient-to-r from-[#00ffff]/10 via-[#090e11] to-[#d966ff]/10 p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,255,255,0.14),transparent)]" aria-hidden />
          <p className="relative text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#00ffff]/80">
            Commission per closed deal
          </p>
          <p className="relative mt-2 text-center text-5xl font-bold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-[#00ffff] via-white to-[#d966ff] bg-clip-text text-transparent">
              $150
            </span>
          </p>
          <p className="relative mx-auto mt-3 max-w-xl text-center text-sm text-white/70">
            Flat payout for every referred client we onboard—no tiers to unlock, no fine print on the base commission.
          </p>
        </div>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-[#00ffff]">How It Works</h3>
        <p className="mt-2 text-sm text-white/65">A straightforward referral system designed for fast payouts:</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-white/80">
          <li>Refer a business to Syed Media</li>
          <li>We close the deal</li>
          <li>You earn $150 per client—no hassle, no extra work</li>
        </ol>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-white">Earning snapshots</h3>
          <p className="mt-2 text-sm text-white/60">Same $150 per referral—see how it stacks:</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "5 referrals", sub: "Side hustle pace", total: "$750" },
              { label: "10 referrals", sub: "Strong quarter", total: "$1,500", highlight: true },
              { label: "25 referrals", sub: "Network builder", total: "$3,750" },
            ].map((tier) => (
              <div
                key={tier.label}
                className={`relative flex flex-col border p-6 transition-colors ${
                  tier.highlight
                    ? "border-[#00ffff]/50 bg-gradient-to-b from-[#00ffff]/8 to-transparent shadow-[0_0_32px_rgba(0,255,255,0.12)]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {tier.highlight && (
                  <span className="mb-3 inline-flex w-fit rounded-none border border-[#00ffff]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#00ffff]">
                    Popular milestone
                  </span>
                )}
                <span className="text-sm font-medium text-white/80">{tier.label}</span>
                <span className="mt-1 text-xs text-white/45">{tier.sub}</span>
                <span className="mt-4 bg-gradient-to-r from-white to-[#00ffff]/90 bg-clip-text text-2xl font-bold text-transparent">
                  {tier.total}
                </span>
                <span className="mt-1 text-[11px] text-white/50">at $150 × closed deals</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-white/10 bg-[#090e11]/80 p-6">
          <h3 className="font-semibold text-white">Why It Works</h3>
          <p className="mt-3 text-sm text-white/70">
            New businesses are launching every day—and most of them need high-quality marketing to grow. You simply
            connect the right people to the right service—we handle the rest.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-sm font-semibold text-white">Get Started</p>
          <p className="mt-2 text-sm text-white/70">Know a business that needs better content, ads, or branding?</p>
          <div className="mt-4">
            <RectButton onClick={() => setAffiliateOpen(true)}>Start earning today</RectButton>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="passive-marketing">
        <h2 className="text-3xl font-semibold md:text-4xl">
          <GradientText as="span" className="uppercase">Passive Marketing</GradientText>{" "}
          <span className="text-base font-normal text-[#d966ff]">(Sponsorships)</span>
        </h2>
        <span className="mt-3 inline-block border border-[#00ffff]/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#00ffff]">
          beta
        </span>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70">
          Currently in beta. We're developing automated marketing systems designed to deliver consistent visibility,
          brand exposure, and measurable results—while you stay focused on running your business.
        </p>
        <div className="mt-10 border border-[#d966ff]/25 bg-[#090e11] p-8">
          <h3 className="text-lg font-semibold text-[#d966ff]">Early Access Investment</h3>
          <p className="mt-3 text-sm text-white/75">
            Secure your spot at <span className="font-semibold text-white">$200/month</span> and promote your brand
            across our growing media ecosystem. This is an early-stage opportunity to grow alongside our platforms.
          </p>
          <p className="mt-4 text-sm text-white/60">
            Projected value by 2030: <span className="text-[#00ffff]">$5,000/month</span>
          </p>
          <p className="mt-2 text-sm text-white/55">Get in early. Build visibility now. Scale with us.</p>
        </div>
        <div className="mt-8">
          <RectButton variant="outline" onClick={() => openMarketing("Passive Marketing")}>
            Get started — Passive Marketing (beta)
          </RectButton>
        </div>
      </SectionShell>

      <SectionShell id="website-development" className="border-b border-white/5 bg-white/[0.02]">
        <h2 className="text-3xl font-semibold md:text-4xl">
          <GradientText as="span" className="uppercase">Website Development</GradientText>
        </h2>
        <p className="mt-4 text-lg text-white/75">Modern, high-converting websites—built to elevate your brand.</p>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70">
          Your website is your digital presence. If it doesn't feel premium, fast, and intentional—you're losing clients.
          We design and develop custom, performance-driven websites that not only look exceptional, but convert.
        </p>
        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-[#00ffff]">What You Get</h3>
        <ul className="mt-4 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
          {[
            "Fully custom, brand-tailored design",
            "Conversion-focused structure",
            "Fast, seamless performance",
            "Mobile-optimized experience",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-[#00ffff]">▸</span>
              {x}
            </li>
          ))}
        </ul>
        <div className="mt-10 border border-[#00ffff]/30 p-8">
          <p className="text-2xl font-bold text-white">
            Website Development Starting at <span className="text-[#00ffff]">$699</span>
          </p>
          <p className="mt-3 text-sm text-white/70">
            Unlock unlimited IT support & ongoing website maintenance for $200/month
          </p>
          <p className="mt-6 text-sm font-medium text-white/90">Built to impress. Engineered to convert.</p>
        </div>
        <div className="mt-8">
          <RectButton variant="outline" onClick={() => openMarketing("Website Development")}>
            Get started — Website Development
          </RectButton>
        </div>
      </SectionShell>

      <SectionShell id="reviews" className="border-t border-white/5 pb-24">
        <div className="mx-auto max-w-3xl border border-white/10 bg-white/[0.02] px-8 py-10 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            <GradientText as="span" >Share Your Experience</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
            Have you used our services? We'd love to hear about your experience and how we can improve.
          </p>
          <button
            type="button"
            onClick={() => setReviewOpen(true)}
            className={`${cyanButtonOutlineClass} mt-8 gap-2`}
          >
            <MessageSquare className="h-4 w-4" aria-hidden />
            Write a Review
          </button>
        </div>
      </SectionShell>

      <ReviewModal isOpen={reviewOpen} onClose={() => setReviewOpen(false)} />
      <MarketingModal
        isOpen={marketingOpen}
        onClose={() => setMarketingOpen(false)}
        serviceName={marketingService}
      />
      <AffiliateModal isOpen={affiliateOpen} onClose={() => setAffiliateOpen(false)} />
            </div>
    )
}
