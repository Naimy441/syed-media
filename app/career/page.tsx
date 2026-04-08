"use client"

import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { CareerModal } from "@/components/modals/career-modal"
import { GradientText } from "@/components/site/MarketingUI"

export default function CareerPage() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const jobs = [
    {
      key: "editor",
      title: "VIDEO EDITOR",
      image: "/career-editor.png",
      location: "",
      badge: "Work from Home",
      bgPosition: 'center 40%',
      content: (
        <>
          <p className="text-lg text-white/75 mb-4">
            We're looking for skilled and experienced video editors to join our fast-growing creative team. If you're passionate about storytelling through visuals and can match the high-energy, high-impact style of Syed Media, we want to hear from you.
          </p>
          <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
            <li>Proven editing experience with a strong portfolio to showcase your work</li>
            <li>Ability to replicate or align with Syed Media's signature editing style</li>
            <li>In-depth knowledge of transitions, video effects, and motion graphics</li>
            <li>Up-to-date with the latest editing trends, tools, and terminology</li>
            <li>Must be able to work efficiently and meet quick turnaround times</li>
          </ul>
          <p className="text-white/60 mb-4">We're looking for someone who doesn't just edit — but elevates content.</p>
          <Button
            size="lg"
            className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
            onClick={() => setSelectedJob("Video Editor")}
          >
            Apply Now
          </Button>
        </>
      ),
    },
    {
      key: "videographer",
      title: "VIDEOGRAPHER",
      image: "/career-videographer.png",
      location: "On Site",
      badge: "On Site",
      bgPosition: 'center 25%',
      content: (
        <>
          <p className="text-lg text-white/75 mb-4">
            We're looking for skilled and dependable videographers to join the Syed Media team and help us capture dynamic, high-quality content for our growing list of clients.
          </p>
          <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
            <li>Must be 18 years or older</li>
            <li>Must have a portfolio or resume showcasing previous videography work</li>
            <li>Must have experience using a DJI stabilizer or similar camera equipment</li>
            <li>Strong understanding of framing, lighting, and visual storytelling is a plus</li>
          </ul>
          <p className="text-white/60 mb-4">If you're passionate about creating content, working with brands, and being part of a fast-moving media company — this is your chance. Apply now and let's shoot something great.</p>
          <Button
            size="lg"
            className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
            onClick={() => setSelectedJob("Videographer")}
          >
            Apply Now
          </Button>
        </>
      ),
    },
    {
      key: "actor",
      title: "ON-CAMERA ACTOR",
      image: "/career-actor.png",
      location: "On Site",
      badge: "On Site",
      bgPosition: 'center 30%',
      content: (
        <>
          <p className="text-lg text-white/75 mb-4">
            Syed Media is looking for confident, charismatic individuals to star in skits, ads, and branded content across social media platforms.
          </p>
          <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
            <li>Must be 18 years or older</li>
            <li>Must be presentable and comfortable on camera</li>
            <li>Strong verbal communication skills and a natural speaking presence</li>
            <li>Prior acting or public speaking experience is a plus, but not required</li>
          </ul>
          <p className="text-white/60 mb-4">If you've got the personality and presence to connect with audiences and bring stories to life, we want you on set. Apply now and start building your on-camera portfolio with Syed Media.</p>
          <Button
            size="lg"
            className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
            onClick={() => setSelectedJob("On-Camera Actor")}
          >
            Apply Now
          </Button>
        </>
      ),
    },
    {
      key: "marketing-strategist",
      title: "MARKETING STRATEGIST",
      image: "/career-videographer.png",
      location: "Hybrid",
      badge: "Hybrid",
      bgPosition: 'center 40%',
      content: (
        <>
          <p className="text-lg text-white/75 mb-4">
            We&apos;re looking for a creative and strategic marketing expert to help drive the next phase of growth at Syed Media. If you&apos;re passionate about innovative
            campaigns, bold ideas, and building brands that stand out — this is your opportunity.
          </p>
          <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
            <li>Must be 18 years or older</li>
            <li>Must have a degree in Marketing or a related field</li>
            <li>Must have a portfolio or resume showcasing previous marketing projects or campaigns</li>
            <li>Must be willing to sign an NDA</li>
            <li>Must be willing to work behind the scenes with our team to develop and execute strategic marketing initiatives</li>
          </ul>
          <p className="text-white/60 mb-4">
            We&apos;re looking for someone who doesn&apos;t just follow trends — but creates them. Someone who can think outside the box, plan high-impact marketing stunts, and
            help position Syed Media as a leader in the creative industry.
          </p>
          <p className="text-white/60 mb-4">
            If you&apos;re ready to build, innovate, and scale with a fast-growing media company — apply now and let&apos;s make moves.
          </p>
          <Button
            size="lg"
            className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
            onClick={() => setSelectedJob("Marketing Strategist")}
          >
            Apply Now
          </Button>
        </>
      ),
    },
  ]

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white" style={{ backgroundColor: "#090e11" }}>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:gap-20 md:py-20">
        {/* Hero Section */}
        <FadeInSection className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="py-1 text-sm font-medium uppercase tracking-wider text-[#00ffff]">Career</span>
          </div>
          <h1 className="bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Help Create, Capture, and Elevate Content for Brands and Creators Worldwide
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Join a fast-moving creative team building{" "}
            <GradientText as="span" className="font-medium">
              high-impact media
            </GradientText>{" "}
            for brands that want to stand out.
          </p>
        </FadeInSection>

        {/* Job Cards (Mobile) */}
        <div className="flex flex-col gap-8 md:hidden">
          {jobs.map((job) => (
            <div key={job.key} className="border border-white/12 bg-white/[0.02]">
              <button
                type="button"
                onClick={() => setExpanded(expanded === job.key ? null : job.key)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left"
              >
                <div className="flex min-w-0 items-start gap-4">
                  <div className="shrink-0">
                    <div className="h-14 w-14 overflow-hidden border border-white/10 bg-[#090e11]">
                      <img
                        src={job.image}
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ objectPosition: job.bgPosition || "center 60%" }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase tracking-[0.22em] text-white/55">Open role</p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-white">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {!job.location ? (
                        <span className="border border-[#00ffff]/35 bg-[#00ffff]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#00ffff]">
                          {job.badge}
                        </span>
                      ) : job.badge?.toLowerCase() === job.location?.toLowerCase() ? (
                        <span className="border border-[#00ffff]/35 bg-[#00ffff]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#00ffff]">
                          {job.badge}
                        </span>
                      ) : (
                        <>
                          <span className="border border-[#00ffff]/35 bg-[#00ffff]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#00ffff]">
                            {job.badge}
                          </span>
                          <span className="border border-white/10 bg-[#090e11] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                            {job.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <span className="mt-1 shrink-0 text-xs font-semibold uppercase tracking-wider text-[#00ffff]">
                  {expanded === job.key ? "Close" : "View"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {expanded === job.key && (
                  <motion.div
                    key="expand"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10 bg-white/[0.02] p-5"
                  >
                    {job.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Sections */}
        <div className="hidden md:flex flex-col gap-20">
          {/* Video Editor Position */}
          <FadeInSection>
            <section className="relative flex flex-col items-center overflow-hidden rounded-none border border-white/15 bg-[#090e11] transition-colors duration-300 hover:border-[#00ffff]/25 md:flex-row">
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center border border-[#00ffff]/50 bg-[#00ffff]/15 px-3 py-1.5 text-sm font-bold text-[#00ffff]">
                  <span>Work from Home</span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src="/career-editor.png"
                    alt="Video Editor Visual"
                    className="h-32 w-32 border border-white/10 object-cover md:hidden md:h-48 md:w-48"
                  />
                  <div>
                    <div className="mb-4 inline-block border border-white/10 bg-white/[0.05] px-4 py-2">
                      <span className="text-lg font-semibold tracking-wide text-[#00ffff]">VIDEO EDITOR</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Syed Media Team</h2>
                  </div>
                </div>
                <p className="text-lg text-white/75 mb-4">
                  We're looking for skilled and experienced video editors to join our fast-growing creative team. If you're passionate about storytelling through visuals and can match the high-energy, high-impact style of Syed Media, we want to hear from you.
                </p>
                <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
                  <li>Proven editing experience with a strong portfolio to showcase your work</li>
                  <li>Ability to replicate or align with Syed Media's signature editing style</li>
                  <li>In-depth knowledge of transitions, video effects, and motion graphics</li>
                  <li>Up-to-date with the latest editing trends, tools, and terminology</li>
                  <li>Must be able to work efficiently and meet quick turnaround times</li>
                </ul>
                <p className="text-white/60 mb-4">We're looking for someone who doesn't just edit — but elevates content.</p>
                <Button
                  size="lg"
                  className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
                  onClick={() => setSelectedJob("Video Editor")}
                >
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center p-4 md:p-8">
                <img
                  src="/career-editor.png"
                  alt="Video Editor Visual"
                  className="w-full max-w-lg border border-white/10 object-cover"
                  style={{ minHeight: '260px' }}
                />
              </div>
            </section>
          </FadeInSection>

          {/* Videographer Position */}
          <FadeInSection>
            <section className="relative mb-8 mt-8 flex flex-col items-center overflow-hidden rounded-none border border-white/15 bg-[#090e11] transition-colors duration-300 hover:border-[#00ffff]/25 md:flex-row">
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center border border-[#d966ff]/50 bg-[#d966ff]/15 px-3 py-1.5 text-sm font-bold text-[#d966ff]">
                  <span>On Site</span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src="/career-videographer.png"
                    alt="Videographer Visual"
                    className="h-32 w-32 border border-white/10 object-cover md:hidden md:h-48 md:w-48"
                  />
                  <div>
                    <div className="mb-4 inline-block border border-white/10 bg-white/[0.05] px-4 py-2">
                      <span className="text-lg font-semibold tracking-wide text-[#00ffff]">VIDEOGRAPHER</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Syed Media Crew</h2>
                  </div>
                </div>
                <p className="text-lg text-white/75 mb-4">
                  We're looking for skilled and dependable videographers to join the Syed Media team and help us capture dynamic, high-quality content for our growing list of clients.
                </p>
                <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
                  <li>Must be 18 years or older</li>
                  <li>Must have a portfolio or resume showcasing previous videography work</li>
                  <li>Must have experience using a DJI stabilizer or similar camera equipment</li>
                  <li>Strong understanding of framing, lighting, and visual storytelling is a plus</li>
                </ul>
                <p className="text-white/60 mb-4">If you're passionate about creating content, working with brands, and being part of a fast-moving media company — this is your chance. Apply now and let's shoot something great.</p>
                <Button
                  size="lg"
                  className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
                  onClick={() => setSelectedJob("Videographer")}
                >
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center p-4 md:p-8">
                <img
                  src="/career-videographer.png"
                  alt="Videographer Visual"
                  className="w-full max-w-lg border border-white/10 object-cover"
                  style={{ minHeight: '260px' }}
                />
              </div>
            </section>
          </FadeInSection>

          {/* On-Camera Actor Position */}
          <FadeInSection>
            <section className="relative mb-8 mt-8 flex flex-col items-center overflow-hidden rounded-none border border-white/15 bg-[#090e11] transition-colors duration-300 hover:border-[#00ffff]/25 md:flex-row">
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center border border-[#d966ff]/50 bg-[#d966ff]/15 px-3 py-1.5 text-sm font-bold text-[#d966ff]">
                  <span>On Site</span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src="/career-actor.png"
                    alt="On-Camera Actor Visual"
                    className="h-32 w-32 border border-white/10 object-cover md:hidden md:h-48 md:w-48"
                  />
                  <div>
                    <div className="mb-4 inline-block border border-white/10 bg-white/[0.05] px-4 py-2">
                      <span className="text-lg font-semibold tracking-wide text-[#00ffff]">ON-CAMERA ACTOR</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Be the Face of Syed Media Content</h2>
                  </div>
                </div>
                <p className="text-lg text-white/75 mb-4">
                  Syed Media is looking for confident, charismatic individuals to star in skits, ads, and branded content across social media platforms.
                </p>
                <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
                  <li>Must be 18 years or older</li>
                  <li>Must be presentable and comfortable on camera</li>
                  <li>Strong verbal communication skills and a natural speaking presence</li>
                  <li>Prior acting or public speaking experience is a plus, but not required</li>
                </ul>
                <p className="text-white/60 mb-4">If you've got the personality and presence to connect with audiences and bring stories to life, we want you on set. Apply now and start building your on-camera portfolio with Syed Media.</p>
                <Button
                  size="lg"
                  className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
                  onClick={() => setSelectedJob("On-Camera Actor")}
                >
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center p-4 md:p-8">
                <img
                  src="/career-actor.png"
                  alt="On-Camera Actor Visual"
                  className="w-full max-w-lg border border-white/10 object-cover"
                  style={{ minHeight: '260px' }}
                />
              </div>
            </section>
          </FadeInSection>

          {/* Marketing Strategist Position */}
          <FadeInSection>
            <section className="relative mb-8 mt-8 flex flex-col items-center overflow-hidden rounded-none border border-white/15 bg-[#090e11] transition-colors duration-300 hover:border-[#00ffff]/25 md:flex-row">
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center border border-[#00ffff]/50 bg-[#00ffff]/15 px-3 py-1.5 text-sm font-bold text-[#00ffff]">
                  <span>Hybrid</span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src="/career-videographer.png"
                    alt="Marketing Strategist Visual"
                    className="h-32 w-32 border border-white/10 object-cover md:hidden md:h-48 md:w-48"
                  />
                  <div>
                    <div className="mb-4 inline-block border border-white/10 bg-white/[0.05] px-4 py-2">
                      <span className="text-lg font-semibold tracking-wide text-[#00ffff]">MARKETING STRATEGIST</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Syed Media Growth Team</h2>
                  </div>
                </div>
                <p className="text-lg text-white/75 mb-4">
                  We&apos;re looking for a creative and strategic marketing expert to help drive the next phase of growth at Syed Media. If you&apos;re passionate about innovative
                  campaigns, bold ideas, and building brands that stand out — this is your opportunity.
                </p>
                <ul className="list-disc list-inside text-white/75 space-y-2 mb-4">
                  <li>Must be 18 years or older</li>
                  <li>Must have a degree in Marketing or a related field</li>
                  <li>Must have a portfolio or resume showcasing previous marketing projects or campaigns</li>
                  <li>Must be willing to sign an NDA</li>
                  <li>Must be willing to work behind the scenes with our team to develop and execute strategic marketing initiatives</li>
                </ul>
                <p className="text-white/60 mb-4">
                  We&apos;re looking for someone who doesn&apos;t just follow trends — but creates them. Someone who can think outside the box, plan high-impact marketing stunts,
                  and help position Syed Media as a leader in the creative industry.
                </p>
                <p className="text-white/60 mb-4">
                  If you&apos;re ready to build, innovate, and scale with a fast-growing media company — apply now and let&apos;s make moves.
                </p>
                <Button
                  size="lg"
                  className="h-14 w-full rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-lg text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] md:w-auto"
                  onClick={() => setSelectedJob("Marketing Strategist")}
                >
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center p-4 md:p-8">
                <img
                  src="/career-videographer.png"
                  alt="Marketing Strategist Visual"
                  className="w-full max-w-lg border border-white/10 object-cover"
                  style={{ minHeight: '260px' }}
                />
              </div>
            </section>
          </FadeInSection>
        </div>
      </div>

      {/* Career Modal */}
      <CareerModal
        isOpen={selectedJob !== null}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob || ""}
      />
    </main>
  )
}
