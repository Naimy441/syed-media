"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReviewModal from "@/components/modals/review-modal"

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <main className="text-white">
            <div className="container mx-auto px-4 py-12 md:py-20">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Innovative Marketing Membership */}
                    <ServiceCard
                        index={0}
                        title="Innovative Marketing Membership"
                        description="Perfect for profitable companies ready to amplify their social media presence"
                        buttonText="Start scaling"
                        buttonLink="/services/innovative-marketing"
                        isAnimated={true}
                        isLoaded={isLoaded}
                    />

                    {/* Syed Media Affiliate */}
                    <ServiceCard
                        index={1}
                        title="Become a Syed Media Affiliate"
                        description="Earn $150/month for every client you bring us. That's $1,500/month just for finding 10 businesses. Ready to start?"
                        buttonText="Start earning"
                        buttonLink="/services/media-affiliate"
                        isLoaded={isLoaded}
                    />

                    {/* Personal Digital Editing */}
                    <ServiceCard
                        index={2}
                        title="Personal Digital Editing"
                        description="Premium Video Editing Services, At Your Fingertips — 24/7 Access, worldwide."
                        buttonText="Subscribe Now"
                        buttonLink="/services/digital-editing"
                        isLoaded={isLoaded}
                    />

                    {/* Digital Editing Course */}
                    <ServiceCard
                        index={3}
                        title="Digital Editing Course"
                        description="Learn to edit and immediately start earning money."
                        buttonText="Learn more"
                        buttonLink="/services/editing-course"
                        isComingSoon={true}
                        isLoaded={isLoaded}
                    />
                </div>

                {/* Review Section */}
                <div className="max-w-6xl mx-auto mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-transparent z-0" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Experience</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Have you used our services? We'd love to hear about your experience and how we can improve.
                            </p>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => setIsReviewModalOpen(true)}
                                className="border-white/20 hover:bg-white/10"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Write a Review
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ReviewModal 
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
            />
        </main>
    )
}

interface ServiceCardProps {
    index: number
    title: string
    description: string
    buttonText: string
    buttonLink: string
    isAnimated?: boolean
    isComingSoon?: boolean
    isLoaded: boolean
}

function ServiceCard({
    index,
    title,
    description,
    buttonText,
    buttonLink,
    isAnimated = false,
    isComingSoon = false,
    isLoaded,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-transparent z-0" />

            {isAnimated && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1500 animate-[pulse_4s_ease-in-out_infinite]" />
            )}

            <div className="relative p-6 md:p-8 z-10 h-full flex flex-col">
                {isComingSoon && (
                    <div className="absolute top-4 right-4 md:top-4 md:right-4 bg-emerald-500 text-white text-[10px] md:text-sm font-bold px-1.5 py-0.5 md:px-3 md:py-1.5 rounded-full flex items-center">
                        <Sparkles className="w-2 h-2 md:w-3 md:h-3 mr-0.5 md:mr-1" />
                        Coming Soon
                    </div>
                )}

                {isAnimated && (
                    <motion.div
                        animate={{
                            background: [
                                "linear-gradient(90deg, #8b5cf6, #10b981)",
                                "linear-gradient(180deg, #10b981, #8b5cf6)",
                                "linear-gradient(270deg, #8b5cf6, #10b981)",
                                "linear-gradient(0deg, #10b981, #8b5cf6)",
                                "linear-gradient(90deg, #8b5cf6, #10b981)",
                            ],
                        }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute -inset-1 rounded-xl opacity-20 z-0 pointer-events-none"
                    />
                )}

                <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>

                <p className="text-gray-300 mb-6 flex-grow">{description}</p>

                <Link href={buttonLink} className="mt-auto relative z-10">
                    <Button
                        className={`w-full group ${isAnimated ? "bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600" : ""}`}
                        variant={isAnimated ? "default" : "default"}
                    >
                        {buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}
