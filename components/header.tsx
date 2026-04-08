"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import { ContactModal } from "@/components/modals/contact-modal"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Mission", href: "/mission" },
  { name: "Career", href: "/career" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") {
      setIsLoaded(true)
      return
    }

    setIsLoaded(false)

    const reveal = () => setIsLoaded(true)
    window.addEventListener("landing-hero-opened", reveal)

    // Fallback for edge cases where the landing event is missed.
    const fallback = window.setTimeout(reveal, 1700)

    return () => {
      window.removeEventListener("landing-hero-opened", reveal)
      window.clearTimeout(fallback)
    }
  }, [pathname])

  return (
    <>
      <header
        className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 pt-6"
      >
        {/* Logo on left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="w-40 overflow-hidden"
        >
          <Link href="/" aria-label="Home">
            <img
              src="/logo.png"
              alt="Syed Media Logo"
              width={120}
              height={60}
              className="object-contain object-left"
            />
          </Link>
        </motion.div>

        {/* Desktop menu with animation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex items-center gap-8"
        >
          <div className="flex gap-8 text-sm border border-transparent bg-transparent px-8 py-4 rounded-none">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white/90 hover:text-[#00ffff] transition-colors relative pb-1 font-medium ${
                  pathname === item.href ? "text-[#00ffff]" : ""
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ffff]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 border-2 border-[#00ffff] bg-transparent text-[#00ffff] rounded-none transition-colors font-medium hover:bg-[#00ffff] hover:text-[#090e11]"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </button>
        </motion.nav>

        {/* Hamburger (mobile only) */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#00ffff] p-2 rounded-none border border-[#00ffff]/40 bg-transparent hover:bg-[#00ffff]/10 transition-colors"
          aria-label="Menu"
        >
          <Menu size={24} />
        </motion.button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:hidden absolute top-0 left-0 right-0 bg-transparent border border-white/10 rounded-none z-40 mt-28 mx-4"
          >
            <nav className="flex flex-col p-4 text-[0.82em]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white py-4 px-4 hover:bg-[#00ffff]/10 rounded-none transition-colors ${
                    pathname === item.href ? "bg-[#00ffff]/10 text-[#00ffff]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsContactModalOpen(true)
                }}
                className="flex items-center gap-2 py-4 px-4 mt-2 border-2 border-[#00ffff] bg-[#00ffff] text-[#090e11] rounded-none transition-colors font-medium hover:bg-[#33ffff] hover:border-[#33ffff]"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}