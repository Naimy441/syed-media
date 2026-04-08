"use client"

import { useEffect, useState, type ElementType, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Galaxy from "@/components/Galaxy"

const BG = "#090e11"
/** Main is below fixed header (~logo + padding); keeps landing in one viewport without page scroll */
const LANDING_MAIN_H = "calc(100dvh - 6.5rem)"

function GradientText({
  children,
  as: Tag = "span",
  className = "",
}: {
  children: ReactNode
  as?: ElementType
  className?: string
}) {
  return (
    <Tag
      className={`bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  )
}

export default function Home() {
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsBoxOpen(false)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <div
      className="text-white overflow-hidden"
      style={{ backgroundColor: BG, height: LANDING_MAIN_H, maxHeight: LANDING_MAIN_H }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: BG }}>
          <Galaxy
            mouseRepulsion={!isMobile}
            mouseInteraction={!isMobile}
            density={isMobile ? 0.55 : 1}
            glowIntensity={isMobile ? 0.22 : 0.35}
            saturation={isMobile ? 0.08 : 0.15}
            hueShift={140}
            twinkleIntensity={isMobile ? 0.12 : 0.3}
            rotationSpeed={0.1}
            repulsionStrength={isMobile ? 1 : 2}
            autoCenterRepulsion={0}
            starSpeed={isMobile ? 0.25 : 0.5}
            speed={isMobile ? 0.6 : 1}
            className={isMobile ? "opacity-70" : "opacity-95"}
          />
        </div>

        <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center px-4 py-2 sm:px-6">
          <motion.div
            initial={{ scaleY: 0.05, opacity: 0.35 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "center center" }}
            onAnimationComplete={() => {
              if (!isBoxOpen) {
                setIsBoxOpen(true)
                window.dispatchEvent(new CustomEvent("landing-hero-opened"))
              }
            }}
            className="relative w-full max-w-[min(100%,22rem)] border border-[#00ffff]/40 bg-[#090e11]/50 px-4 py-4 shadow-[0_0_48px_rgba(0,255,255,0.08)] backdrop-blur-md sm:max-w-md sm:px-6 sm:py-5"
          >
            <div className="pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#00ffff] sm:h-5 sm:w-5" />
            <div className="pointer-events-none absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-[#00ffff] sm:h-5 sm:w-5" />
            <div className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-[#00ffff] sm:h-5 sm:w-5" />
            <div className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#00ffff] sm:h-5 sm:w-5" />

            <motion.p
              className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.26em] text-[#00ffff]/70 sm:mb-4 sm:text-[10px] sm:tracking-[0.32em]"
              animate={{ opacity: [0.82, 0.6, 0.82] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#00ffff] shadow-[0_0_8px_#00ffff] sm:h-1.5 sm:w-1.5"
                animate={{ opacity: [0.9, 0.45, 0.9], scale: [1, 0.9, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              System online
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isBoxOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 1.05, delay: 0.2, ease: "easeOut" }}
              className="px-1"
            >
              {/* Screen blend removes solid black from the PNG so the panel/galaxy read through */}
              <div className="flex justify-center">
                <Image
                  src="/new-images/landing-logo.png"
                  alt="Syed Media"
                  width={280}
                  height={280}
                  className="h-auto w-[min(48vw,9.5rem)] object-contain mix-blend-screen sm:w-[11rem] md:w-[12.5rem]"
                  priority
                />
              </div>

              <p className="mt-1 text-center font-display text-2xl font-semibold leading-[1.45] tracking-[0.01em] text-white sm:mt-2 sm:text-3xl md:text-4xl">
                Where Ideas Meet Reality
              </p>

              <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-6 sm:gap-3.5">
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  className="w-full max-w-[14rem] sm:max-w-xs"
                >
                  <Link
                    href="/services"
                    className="inline-flex w-full items-center justify-center border-2 border-[#00ffff] bg-[#00ffff] px-5 py-2.5 text-center text-xs font-semibold tracking-wide text-[#090e11] transition-all duration-300 hover:bg-[#33ffff] hover:border-[#33ffff] hover:shadow-[0_0_22px_rgba(0,255,255,0.45)] rounded-none sm:py-3 sm:text-sm"
                  >
                    Start Creating
                  </Link>
                </motion.div>
                <p className="text-center text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 sm:text-xs sm:tracking-[0.25em]">
                  Video · AI · Web · Media
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
