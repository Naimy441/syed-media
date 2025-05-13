"use client"

import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { CareerModal } from "@/components/modals/career-modal"

export default function CareerPage() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const jobs = [
    {
      key: "editor",
      title: "VIDEO EDITOR",
      image: "/career-editor.png",
      location: "Remote",
      badge: "Work from Home",
      bgPosition: 'center 40%',
      content: (
        <>
          <p className="text-lg text-gray-300 mb-4">
            We're looking for skilled and experienced video editors to join our fast-growing creative team. If you're passionate about storytelling through visuals and can match the high-energy, high-impact style of Syed Media, we want to hear from you.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Proven editing experience with a strong portfolio to showcase your work</li>
            <li>Ability to replicate or align with Syed Media's signature editing style</li>
            <li>In-depth knowledge of transitions, video effects, and motion graphics</li>
            <li>Up-to-date with the latest editing trends, tools, and terminology</li>
            <li>Must be able to work efficiently and meet quick turnaround times</li>
          </ul>
          <p className="text-gray-400 mb-4">We're looking for someone who doesn't just edit — but elevates content.</p>
          <Button
            size="lg"
            className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
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
          <p className="text-lg text-gray-300 mb-4">
            We're looking for skilled and dependable videographers to join the Syed Media team and help us capture dynamic, high-quality content for our growing list of clients.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Must be 18 years or older</li>
            <li>Must have a portfolio or resume showcasing previous videography work</li>
            <li>Must have experience using a DJI stabilizer or similar camera equipment</li>
            <li>Strong understanding of framing, lighting, and visual storytelling is a plus</li>
          </ul>
          <p className="text-gray-400 mb-4">If you're passionate about creating content, working with brands, and being part of a fast-moving media company — this is your chance. Apply now and let's shoot something great.</p>
          <Button
            size="lg"
            className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
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
          <p className="text-lg text-gray-300 mb-4">
            Syed Media is looking for confident, charismatic individuals to star in skits, ads, and branded content across social media platforms.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Must be 18 years or older</li>
            <li>Must be presentable and comfortable on camera</li>
            <li>Strong verbal communication skills and a natural speaking presence</li>
            <li>Prior acting or public speaking experience is a plus, but not required</li>
          </ul>
          <p className="text-gray-400 mb-4">If you've got the personality and presence to connect with audiences and bring stories to life, we want you on set. Apply now and start building your on-camera portfolio with Syed Media.</p>
          <Button
            size="lg"
            className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
            onClick={() => setSelectedJob("On-Camera Actor")}
          >
            Apply Now
          </Button>
        </>
      ),
    },
  ]

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
            <span className="font-medium py-1">Career</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
            Help Create, Capture, and Elevate Content for Brands and Creators Worldwide
          </h1>
        </FadeInSection>

        {/* Job Cards (Mobile) */}
        <div className="flex flex-col gap-8 md:hidden">
          {jobs.map((job) => (
            <div key={job.key} className="relative">
              <motion.div
                layout
                initial={{ borderRadius: 24 }}
                className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] relative cursor-pointer"
                onClick={() => setExpanded(expanded === job.key ? null : job.key)}
                style={{ minHeight: 220, transition: 'min-height 0.3s' }}
              >
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${job.image})`, filter: 'brightness(0.7)', backgroundPosition: job.bgPosition || 'center 60%',}}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#2563eb_0%,_#1e40af_5%,_transparent_100%)]" />

                {/* Absolutely centered job title */}
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-white drop-shadow-lg text-center w-full pointer-events-none select-none" style={{ lineHeight: 1.1, zIndex: 20 }}>{job.title}</span>

                {/* Absolutely positioned location badge */}
                <span className="absolute bottom-4 right-4 bg-slate-800/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 z-20">
                  {job.location === 'Remote' ? (
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  ) : (
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                  )}
                  {job.badge}
                </span>
              </motion.div>
              <AnimatePresence initial={false}>
                {expanded === job.key && (
                  <motion.div
                    key="expand"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/60 rounded-b-2xl p-4 mt-2"
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
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl relative">
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-emerald-500 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center">
                  <span>Work from Home</span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src="/career-editor.png"
                    alt="Video Editor Visual"
                    className="rounded-2xl w-32 h-32 md:w-48 md:h-48 object-cover shadow-xl md:hidden"
                  />
                  <div>
                    <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                      <span className="text-lg font-semibold tracking-wide text-white">VIDEO EDITOR</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Syed Media Team</h2>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  We're looking for skilled and experienced video editors to join our fast-growing creative team. If you're passionate about storytelling through visuals and can match the high-energy, high-impact style of Syed Media, we want to hear from you.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Proven editing experience with a strong portfolio to showcase your work</li>
                  <li>Ability to replicate or align with Syed Media's signature editing style</li>
                  <li>In-depth knowledge of transitions, video effects, and motion graphics</li>
                  <li>Up-to-date with the latest editing trends, tools, and terminology</li>
                  <li>Must be able to work efficiently and meet quick turnaround times</li>
                </ul>
                <p className="text-gray-400 mb-4">We're looking for someone who doesn't just edit — but elevates content.</p>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  onClick={() => setSelectedJob("Video Editor")}
                >
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center p-4 md:p-8">
                <img
                  src="/career-editor.png"
                  alt="Video Editor Visual"
                  className="rounded-2xl w-full max-w-lg object-cover shadow-xl"
                  style={{ minHeight: '260px' }}
                />
              </div>
            </section>
          </FadeInSection>

          {/* Videographer Position */}
          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl relative">
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-purple-500 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center">
                  <span>On Site</span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src="/career-videographer.png"
                    alt="Videographer Visual"
                    className="rounded-2xl w-32 h-32 md:w-48 md:h-48 object-cover shadow-xl md:hidden"
                  />
                  <div>
                    <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                      <span className="text-lg font-semibold tracking-wide text-white">VIDEOGRAPHER</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Syed Media Crew</h2>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  We're looking for skilled and dependable videographers to join the Syed Media team and help us capture dynamic, high-quality content for our growing list of clients.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Must be 18 years or older</li>
                  <li>Must have a portfolio or resume showcasing previous videography work</li>
                  <li>Must have experience using a DJI stabilizer or similar camera equipment</li>
                  <li>Strong understanding of framing, lighting, and visual storytelling is a plus</li>
                </ul>
                <p className="text-gray-400 mb-4">If you're passionate about creating content, working with brands, and being part of a fast-moving media company — this is your chance. Apply now and let's shoot something great.</p>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  onClick={() => setSelectedJob("Videographer")}
                >
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center p-4 md:p-8">
                <img
                  src="/career-videographer.png"
                  alt="Videographer Visual"
                  className="rounded-2xl w-full max-w-lg object-cover shadow-xl"
                  style={{ minHeight: '260px' }}
                />
              </div>
            </section>
          </FadeInSection>

          {/* On-Camera Actor Position */}
          <FadeInSection>
            <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl relative">
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-purple-500 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center">
                  <span>On Site</span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <img
                    src="/career-actor.png"
                    alt="On-Camera Actor Visual"
                    className="rounded-2xl w-32 h-32 md:w-48 md:h-48 object-cover shadow-xl md:hidden"
                  />
                  <div>
                    <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                      <span className="text-lg font-semibold tracking-wide text-white">ON-CAMERA ACTOR</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Be the Face of Syed Media Content</h2>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  Syed Media is looking for confident, charismatic individuals to star in skits, ads, and branded content across social media platforms.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Must be 18 years or older</li>
                  <li>Must be presentable and comfortable on camera</li>
                  <li>Strong verbal communication skills and a natural speaking presence</li>
                  <li>Prior acting or public speaking experience is a plus, but not required</li>
                </ul>
                <p className="text-gray-400 mb-4">If you've got the personality and presence to connect with audiences and bring stories to life, we want you on set. Apply now and start building your on-camera portfolio with Syed Media.</p>
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                  onClick={() => setSelectedJob("On-Camera Actor")}
                >
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:flex flex-1 items-center justify-center p-4 md:p-8">
                <img
                  src="/career-actor.png"
                  alt="On-Camera Actor Visual"
                  className="rounded-2xl w-full max-w-lg object-cover shadow-xl"
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
