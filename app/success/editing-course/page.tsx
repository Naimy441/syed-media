"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const ReactConfetti = dynamic(() => import('react-confetti'), {
    ssr: false
})

export default function SuccessPage() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [showConfetti, setShowConfetti] = useState(true)

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0)

        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                )
            })
        }

        // Initial dimensions
        updateDimensions()

        // Update dimensions on resize
        window.addEventListener('resize', updateDimensions)

        return () => {
            window.removeEventListener('resize', updateDimensions)
        }
    }, [])

    return (
        <main className="min-h-screen text-white">
            {showConfetti && (
                <ReactConfetti
                    width={dimensions.width}
                    height={dimensions.height}
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.2}
                    colors={['#10b981', '#8b5cf6', '#ffffff']}
                    style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}
                />
            )}
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8"
                    >
                        <CheckCircle2 className="w-24 h-24 text-emerald-500 mx-auto" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Your Spot is Reserved!
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-6 mb-12"
                    >
                        <p className="text-xl text-gray-300">
                            Thank you for reserving your spot in our upcoming Digital Editing Course. We'll notify you as soon as the course opens!
                        </p>
                        
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                                <Calendar className="w-5 h-5 mr-2 text-emerald-500" />
                                What to Expect
                            </h3>
                            <ul className="space-y-3 text-left">
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                    className="flex items-center"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                                    Early access notification when the course launches
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 1 }}
                                    className="flex items-center"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                                    Priority enrollment in the first cohort
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 1.2 }}
                                    className="flex items-center"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                                    Exclusive pre-launch content and updates
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        <Link href="/">
                            <Button className="bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-lg px-8 py-6">
                                Return Home
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}
