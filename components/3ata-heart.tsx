"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export function CreatorHeart() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    if (isMobile && isExpanded) {
      timeoutId = setTimeout(() => {
        setIsExpanded(false)
      }, 5000)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isMobile, isExpanded])

  return (
    <Link 
      href="https://3ata.org" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-2 right-2 md:bottom-4 md:right-4 z-50"
      onClick={(e) => {
        if (isMobile) {
          e.preventDefault()
          if (isExpanded) {
            window.open("https://3ata.org", "_blank", "noopener,noreferrer")
          } else {
            setIsExpanded(true)
          }
        }
      }}
    >
      <motion.div
        className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          width: isExpanded ? "auto" : "auto",
          paddingLeft: isExpanded ? "0.75rem" : "0.75rem",
          paddingRight: isExpanded ? "0.75rem" : "0.75rem",
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {(!isMobile || isExpanded) && (
            <motion.span
              key="made-with"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="text-xs text-white/70"
            >
              made with
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
        <AnimatePresence mode="wait">
          {(!isMobile || isExpanded) && (
            <motion.span
              key="by-3ata"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="text-xs text-white/70"
            >
              by 3ata
            </motion.span>
          )}
        </AnimatePresence>
        {isMobile && isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ml-1.5"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/50"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </Link>
  )
} 