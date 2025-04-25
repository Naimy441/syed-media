"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="h-screen flex flex-col relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[#050530] z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 via-purple-900/50 to-transparent z-10"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-tl from-orange-600/30 via-purple-600/20 to-transparent rounded-full blur-3xl z-0"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 z-0">
        <div className="bg-black/20 backdrop-blur-sm"></div>
        <div className="bg-black/20 backdrop-blur-sm"></div>
        <div className="bg-black/20 backdrop-blur-sm"></div>
        <div className="bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="w-40 overflow-hidden"
          >
            <Image
              src="/logo.png"
              alt="Syed Media Logo"
              width={160}
              height={60}
              className="object-contain object-left"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-full bg-orange-500/20 backdrop-blur-sm hover:bg-orange-500/30 transition-colors"
            aria-label="Menu"
          >
            <Menu size={24} />
          </motion.button>
        </header>

        {/* Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-md rounded-xl z-30 mt-28 mx-4"
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
                <Link
                  href="/hamza-syed"
                  className="text-white py-4 px-4 hover:bg-orange-500/10 rounded-md transition-colors"
                >
                  Hamza Syed
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-end p-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="max-w-3xl mb-[10vh]"
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
                href="/programs"
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-orange-600 transition-colors"
              >
                SEE ALL PROGRAMS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
