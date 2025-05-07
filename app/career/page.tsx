"use client"

import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"
import { AnimatedBackground } from "@/components/animated-background"

export default function CareerPage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col gap-20">
        {/* Hero Section */}
        <FadeInSection className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
            Career
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the Syed Media team and help us create, capture, and elevate content for brands and creators worldwide.
          </p>
        </FadeInSection>

        {/* Video Editor Position */}
        <FadeInSection>
          <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
            <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
              <div className="mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                  <span className="text-lg font-semibold tracking-wide text-white">VIDEO EDITOR</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Syed Media Team</h2>
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
              <a href="/apply" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                >
                  Apply Now
                </Button>
              </a>
            </div>
            <div className="flex-1 flex items-center justify-center p-4 md:p-8">
              <img
                src="/marketing1.png"
                alt="Video Editor Visual"
                className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-xl"
                style={{ minHeight: '260px' }}
              />
            </div>
          </section>
        </FadeInSection>

        {/* Videographer Position */}
        <FadeInSection>
          <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
            <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
              <div className="mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                  <span className="text-lg font-semibold tracking-wide text-white">VIDEOGRAPHER</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Join the Syed Media Crew</h2>
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
              <a href="/apply" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                >
                  Apply Now
                </Button>
              </a>
            </div>
            <div className="flex-1 flex items-center justify-center p-4 md:p-8">
              <img
                src="/marketing4.png"
                alt="Videographer Visual"
                className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-xl"
                style={{ minHeight: '260px' }}
              />
            </div>
          </section>
        </FadeInSection>

        {/* On-Camera Actor Position */}
        <FadeInSection>
          <section className="mt-8 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1833] via-[#2d1e3c] to-[#0a2a66] flex flex-col md:flex-row items-center shadow-2xl">
            <div className="flex-1 p-8 md:p-12 flex flex-col items-start justify-center">
              <div className="mb-6">
                <div className="bg-white/10 px-4 py-2 rounded-md mb-4 inline-block">
                  <span className="text-lg font-semibold tracking-wide text-white">ON-CAMERA ACTOR</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Be the Face of Syed Media Content</h2>
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
              <a href="/apply" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full text-lg h-14 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 shadow-lg shadow-purple-500/20"
                >
                  Apply Now
                </Button>
              </a>
            </div>
            <div className="flex-1 flex items-center justify-center p-4 md:p-8">
              <img
                src="/marketing3.png"
                alt="On-Camera Actor Visual"
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
