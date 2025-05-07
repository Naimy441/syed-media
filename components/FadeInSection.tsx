"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import type { ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
  className?: string
}

export default function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, controls])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
} 