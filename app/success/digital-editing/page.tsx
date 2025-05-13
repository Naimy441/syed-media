"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Video, Clock, Globe } from "lucide-react"
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
                        Welcome to Premium Video Editing!
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="space-y-6 mb-12"
                    >
                        <p className="text-xl text-gray-300">
                            Thank you for subscribing to our Premium Video Editing service. Your content is in expert hands!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                            >
                                <Video className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Premium Editing</h3>
                                <p className="text-sm text-gray-400">Professional-grade video editing services</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                            >
                                <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">24/7 Access</h3>
                                <p className="text-sm text-gray-400">Round-the-clock editing support</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1.2 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                            >
                                <Globe className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Worldwide Service</h3>
                                <p className="text-sm text-gray-400">Available globally, anytime</p>
                            </motion.div>
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
