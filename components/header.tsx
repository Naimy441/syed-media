"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Mission", href: "/mission" },
  { name: "Career", href: "/career" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <header className="flex justify-between items-center px-6 pt-6 relative z-10">
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
              width={160}
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
          className="hidden lg:flex gap-8 text-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-white hover:text-orange-400 transition-colors relative pb-1 ${
                pathname === item.href ? "text-orange-500 font-medium" : ""
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </Link>
          ))}
        </motion.nav>

        {/* Hamburger (mobile only) */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2 rounded-full bg-orange-500/20 backdrop-blur-sm hover:bg-orange-500/30 transition-colors"
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
            className="lg:hidden absolute top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-md rounded-xl z-40 mt-28 mx-4"
          >
            <nav className="flex flex-col p-4 text-[0.82em]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white py-4 px-4 hover:bg-orange-500/10 rounded-md transition-colors ${
                    pathname === item.href ? "bg-orange-500/10" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}