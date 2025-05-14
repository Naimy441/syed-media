"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Copyright() {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-2 left-2 md:bottom-4 md:left-4 z-50"
      onClick={() => {
        if (isMobile) {
          setIsExpanded(!isExpanded)
        }
      }}
    >
      <motion.div 
        className="text-xs text-white/50 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10"
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
          {(!isMobile || isExpanded) ? (
            <motion.span
              key="full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              © 2025 Syed Media. All rights reserved.
            </motion.span>
          ) : (
            <motion.span
              key="short"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              © 2025
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
} 