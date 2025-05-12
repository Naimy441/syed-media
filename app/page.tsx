"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Mobile-only background image for home page */}
      <div
        className="fixed inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: "url('/growth2-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Mobile-only blue gradient overlay */}
      <div className="fixed inset-0 pointer-events-none md:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#0a2a66_0%,_#050530_40%,_transparent_100%)]" />
      </div>
      {/* Mobile-only animated background */}
      <div className="block md:hidden">
        <AnimatedBackground />
      </div>
      {/* Floating centerpiece image */}
      <motion.div
        initial={{ opacity: 0, x: 200, rotate: 5, scale: 1.1 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 200, rotate: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
        className="absolute hidden md:block z-10 pointer-events-none"
        style={{
          right: "calc(5% + 1vw)",
          top: "25%",
          transform: "translateY(-50%)",
          width: "clamp(320px, 40%, 500px)"
        }}
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="rounded-3xl overflow-hidden mix-blend-lighten bg-black/10 backdrop-blur-sm">
            <img
              src="/growth2.png"
              alt="Marketing Visual"
              width={500}
              height={500}
              className="object-contain drop-shadow-2xl rounded-3xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col">
        {/* Header */}
        {/* <Header /> */}

        {/* Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-md rounded-xl z-40 mt-28 mx-4"
            >
              <nav className="flex flex-col p-4 text-[0.82em]">
                <Link
                  href="/"
                  className="text-white py-4 px-4 hover:bg-orange-500/10 rounded-md transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-white py-4 px-4 hover:bg-orange-500/10 rounded-md transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/mission"
                  className="text-white py-4 px-4 hover:bg-orange-500/10 rounded-md transition-colors"
                >
                  Our Mission
                </Link>
                <Link
                  href="/career"
                  className="text-white py-4 px-4 hover:bg-orange-500/10 rounded-md transition-colors"
                >
                  Career
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="min-h-[calc(100vh-180px)] flex flex-col justify-end p-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="max-w-xl md:max-w-2xl lg:max-w-3xl relative z-30"
          >
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              Where Ideas Meet Reality.
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              A practical solution to affordable digital brand scaling.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-4 font-bold tracking-wide hover:bg-orange-600 transition-colors group rounded-2xl"
              >
                SEE ALL SERVICES <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}