"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Hyperspeed from "@/components/Hyperspeed.jsx"
import { CardBody, CardContainer, CardItem, useMouseEnter } from "@/components/ui/3d-card"

const BG = "#090e11"
const SAFARI_BG = "#000000"

function HeroCorners() {
  return (
    <>
      <div className="pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#00ffff] sm:h-5 sm:w-5" />
      <div className="pointer-events-none absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-[#00ffff] sm:h-5 sm:w-5" />
      <div className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-[#00ffff] sm:h-5 sm:w-5" />
      <div className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#00ffff] sm:h-5 sm:w-5" />
    </>
  )
}

function HeroLayer({
  use3d,
  z,
  hoverBoostZ,
  className,
  children,
}: {
  use3d: boolean
  z: number
  hoverBoostZ?: number
  className?: string
  children: ReactNode
}) {
  if (use3d) {
    return (
      <CardItem
        translateZ={z}
        hoverBoostZ={hoverBoostZ}
        className={className ?? "w-full"}
      >
        {children}
      </CardItem>
    )
  }
  return <div className={className}>{children}</div>
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

function HeroLogo3D() {
  const [isMouseEntered] = useMouseEnter()

  return (
    <motion.div
      className="flex origin-center justify-center will-change-transform [transform-style:preserve-3d]"
      animate={{ scale: isMouseEntered ? 1.18 : 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.85 }}
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

function HeroInner({ use3d, isBoxOpen }: { use3d: boolean; isBoxOpen: boolean }) {
  if (!use3d) {
    return (
      <>
        <SystemLine />
        <HeroMainBlock isBoxOpen={isBoxOpen} />
      </>
    )
  }

  return (
    <>
      <HeroLayer use3d z={75} className="w-full">
        <SystemLine />
      </HeroLayer>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isBoxOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.05, delay: 0.2, ease: "easeOut" }}
        className="flex w-full flex-col items-stretch px-1"
      >
        <HeroLayer use3d z={135} hoverBoostZ={72} className="w-full">
          <HeroLogo3D />
        </HeroLayer>
        <HeroLayer use3d z={110} className="mt-1 w-full sm:mt-2">
          <p className="text-center font-display text-2xl font-semibold leading-[1.45] tracking-[0.01em] text-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
            Where Ideas Meet Reality
          </p>
        </HeroLayer>
        <HeroLayer use3d z={175} className="mt-5 w-full sm:mt-6 lg:mt-5">
          <div className="flex flex-col items-center gap-2.5 sm:gap-3.5">
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
        </HeroLayer>
      </motion.div>
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
        roadColor: 526344,
        islandColor: 657930,
        background: 0,
        shoulderLines: 1250072,
        brokenLines: 1250072,
        leftCars: [14177983, 6770850, 12732332],
        rightCars: [242627, 941733, 3294549],
        sticks: 242627,
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
            {/* Mobile / tablet: flat panel */}
            <div
              className={`relative w-full border border-[#00ffff]/40 bg-[#090e11]/30 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5 lg:hidden ${
                isMobile ? "shadow-[0_0_22px_rgba(0,255,255,0.045)]" : "shadow-[0_0_48px_rgba(0,255,255,0.08)]"
              }`}
            >
              <HeroCorners />
              <HeroInner use3d={false} isBoxOpen={isBoxOpen} />
            </div>

            {/* Desktop: 3D tilt card */}
            <div className="hidden w-full justify-center overflow-visible px-6 py-10 sm:px-10 lg:flex">
              <CardContainer
                containerClassName="!py-0 flex items-center justify-center overflow-visible"
                className="shrink-0 overflow-visible"
              >
                <CardBody
                  className={`relative flex aspect-square !h-auto w-[min(30rem,calc(100vw-7rem),min(90dvh,90vw))] shrink-0 flex-col justify-center overflow-visible rounded-none border border-[#00ffff]/40 bg-[#090e11]/30 px-6 py-5 shadow-[0_0_48px_rgba(0,255,255,0.08)] backdrop-blur-sm [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]`}
                >
                  <HeroCorners />
                  <HeroInner use3d isBoxOpen={isBoxOpen} />
                </CardBody>
              </CardContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
