"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/FadeInSection"

export default function PassiveMarketing() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#090e11] text-white overflow-x-hidden pb-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative z-10">
          <Link href="/services" className="inline-block">
            <Button variant="outline" className="mb-8 rounded-none border-2 border-[#00ffff] bg-transparent text-[#00ffff] hover:bg-[#00ffff]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 relative z-10">
            <motion.div className="inline-block px-4 py-2 rounded-none mb-6 border border-white/10 bg-white/[0.04]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">Passive Marketing • Beta</span>
              </div>
            </motion.div>

            <h1 className="pb-2 text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-transparent">
              Automated content and ad strategies that work in the background while you scale.
            </h1>
          </div>

          <FadeInSection className="relative z-10 p-8 md:p-10 rounded-none border border-white/10 bg-white/[0.02]">
            <p className="text-gray-300 text-lg text-center">
              This service is currently in beta. Automated systems and strategies are being refined to help you generate consistent visibility and results while you focus on
              building your business.
            </p>
          </FadeInSection>
        </motion.div>
      </div>
    </main>
  )
}

