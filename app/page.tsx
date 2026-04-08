"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Hyperspeed from "@/components/Hyperspeed.jsx"

const BG = "#090e11"
const SAFARI_BG = "#000000"

function HeroCorners() {
  return (
    <>
      <div className="pointer-events-none absolute -left-px -top-px z-30 h-4 w-4 border-l-2 border-t-2 border-[#00ffff] opacity-100 sm:h-5 sm:w-5" />
      <div className="pointer-events-none absolute -right-px -top-px z-30 h-4 w-4 border-r-2 border-t-2 border-[#00ffff] opacity-100 sm:h-5 sm:w-5" />
      <div className="pointer-events-none absolute -bottom-px -left-px z-30 h-4 w-4 border-b-2 border-l-2 border-[#00ffff] opacity-100 sm:h-5 sm:w-5" />
      <div className="pointer-events-none absolute -bottom-px -right-px z-30 h-4 w-4 border-b-2 border-r-2 border-[#00ffff] opacity-100 sm:h-5 sm:w-5" />
    </>
  )
}

function SystemLine() {
  return (
    <motion.p
      className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.26em] text-white/60 sm:mb-4 sm:text-[10px] sm:tracking-[0.32em]"
      animate={{ opacity: [0.82, 0.6, 0.82] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.span
        className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#22c55e] shadow-[0_0_10px_#4ade80,0_0_18px_rgba(74,222,128,0.45)] sm:h-1.5 sm:w-1.5"
        animate={{ opacity: [0.85, 1, 0.85], scale: [1, 0.92, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <span className="text-[#4ade80]/90">System online</span>
    </motion.p>
  )
}

function HeroCtaLink() {
  return (
    <Link
      href="/services"
      className="group inline-flex w-full max-w-[18rem] items-center justify-center gap-2.5 border-2 border-[#00ffff]/60 bg-[#090e11] px-5 py-3 text-center text-xs font-semibold tracking-[0.1em] text-white transition-colors duration-200 hover:border-[#00ffff] hover:text-[#00ffff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffff] sm:max-w-xs sm:py-3.5 sm:text-sm sm:tracking-[0.12em]"
    >
      <span>Start Creating</span>
      <ArrowRight
        className="h-3.5 w-3.5 shrink-0 text-[#00ffff] transition-transform duration-200 group-hover:translate-x-0.5 sm:h-4 sm:w-4"
        aria-hidden
      />
    </Link>
  )
}

function HeroMainBlock({ isBoxOpen }: { isBoxOpen: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isBoxOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 1.05, delay: 0.2, ease: "easeOut" }}
      className="px-1"
    >
      <motion.div
        className="flex justify-center"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.18 },
        }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <Image
          src="/new-images/landing-logo.png"
          alt="Syed Media"
          width={280}
          height={280}
          className="h-auto w-[min(48vw,9.5rem)] object-contain mix-blend-screen sm:w-[11rem] md:w-[12.5rem] lg:w-[12rem] xl:w-[13rem]"
          priority
        />
      </motion.div>

      <motion.p
        className="mt-1 text-center font-display text-2xl font-semibold leading-[1.45] tracking-[0.01em] text-white sm:mt-2 sm:text-3xl md:text-4xl"
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        Where Ideas Meet Reality
      </motion.p>

      <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-6 sm:gap-3.5">
        <motion.div
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="flex w-full justify-center"
        >
          <HeroCtaLink />
        </motion.div>
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 sm:text-xs sm:tracking-[0.25em]">
          Video · AI · Web · Media
        </p>
      </div>
    </motion.div>
  )
}

function HeroInner({ isBoxOpen }: { isBoxOpen: boolean }) {
  return (
    <>
      <SystemLine />
      <HeroMainBlock isBoxOpen={isBoxOpen} />
    </>
  )
}

export default function Home() {
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSafari, setIsSafari] = useState(false)

  const hyperspeedOptions = useMemo(
    () => ({
      onSpeedUp: () => {},
      onSlowDown: () => {},
      distortion: "turbulentDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 3,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [12, 80],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        // Syed Media theme: orange + electric blue on deep black
        roadColor: 0x07090b,
        islandColor: 0x0b0f14,
        background: 0,
        shoulderLines: 0x1a2330,
        brokenLines: 0x1a2330,
        leftCars: [0xf87017, 0xffa24d, 0xff6a00],
        rightCars: [0x00a3ff, 0x1b6bff, 0x00d4ff],
        sticks: 0x00a3ff,
      },
    }),
    [],
  )

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

  useEffect(() => {
    if (typeof navigator === "undefined") return
    const ua = navigator.userAgent
    const safari = /Safari/i.test(ua) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS|Android/i.test(ua)
    setIsSafari(safari)
  }, [])

  const pageBg = isSafari ? SAFARI_BG : BG

  return (
    <div
      className="overflow-x-hidden overflow-y-hidden text-white lg:overflow-visible"
      style={{
        backgroundColor: pageBg,
        height: "100dvh",
        maxHeight: "100dvh",
      }}
    >
      <div className="relative h-full w-full overflow-x-hidden overflow-y-hidden lg:overflow-visible">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: pageBg }}>
          <Hyperspeed effectOptions={hyperspeedOptions} />
        </div>

        <div className="pointer-events-none relative z-10 flex h-full min-h-0 translate-y-[4vh] flex-col items-center justify-center overflow-x-hidden overflow-y-hidden px-4 py-2 sm:px-6 md:translate-y-[2.2vh] lg:overflow-visible">
          <motion.div
            initial={{ clipPath: "inset(48% 0 48% 0)", opacity: 0.35 }}
            animate={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              if (!isBoxOpen) {
                setIsBoxOpen(true)
                window.dispatchEvent(new CustomEvent("landing-hero-opened"))
              }
            }}
            className="pointer-events-auto flex w-full max-w-[min(100%,22rem)] flex-col items-center justify-center overflow-x-hidden overflow-y-hidden sm:max-w-md lg:max-w-none lg:overflow-visible"
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap="rest"
              variants={{
                rest: { y: 0 },
                hover: { y: -1 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative mx-auto w-full select-none border border-[#00ffff]/55 bg-[#090e11]/30 px-4 py-4 backdrop-blur-sm [-webkit-touch-callout:none] [touch-action:manipulation] transition-[border-color,box-shadow] duration-200 sm:px-6 sm:py-5 lg:aspect-square lg:w-[min(30rem,calc(100vw-7rem),min(90dvh,90vw))] lg:px-6 lg:py-5 hover:border-[#00ffff]/95 hover:shadow-[0_0_60px_rgba(0,255,255,0.12)] ${
                isMobile ? "shadow-[0_0_22px_rgba(0,255,255,0.045)]" : "shadow-[0_0_48px_rgba(0,255,255,0.08)]"
              }`}
            >
              {/* Dedicated border layer so all sides strengthen on hover */}
              <div className="pointer-events-none absolute inset-0 z-20 border border-[#00ffff]/35 transition-colors duration-200 group-hover:border-[#00ffff]" aria-hidden />
              <HeroCorners />
              <HeroInner isBoxOpen={isBoxOpen} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
