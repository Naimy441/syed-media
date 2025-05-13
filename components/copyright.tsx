"use client"

import { motion } from "framer-motion"

export function Copyright() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="text-xs text-white/50 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
        © 2025 Syed Media. All rights reserved.
      </div>
    </motion.div>
  )
} 