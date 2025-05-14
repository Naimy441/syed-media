"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TestimonialMarquee } from "@/components/TestimonialMarquee"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Mobile-only blue gradient overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#0a2a66_0%,_#050530_40%,_transparent_100%)]" />
      </div>

      {/* Testimonial marquee background for all screens */}
      <TestimonialMarquee />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col">
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
        <div className="min-h-[calc(100vh-190px)] md:min-h-[calc(100vh-180px)] flex flex-col justify-end p-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="w-fit mr-auto relative z-30 bg-black/20 backdrop-blur-sm p-8 rounded-3xl"
          >
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Where Ideas Meet Reality.
            </h2>
            <p className="text-gray-100 text-xl mb-8 drop-shadow-md">
              A practical solution to affordable digital brand scaling.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-4 font-bold tracking-wide hover:bg-orange-600 transition-colors group rounded-2xl shadow-lg"
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