"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, FileText, User, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CareerModalProps {
    isOpen: boolean
    onClose: () => void
    jobTitle: string
}

export function CareerModal({ isOpen, onClose, jobTitle }: CareerModalProps) {
    const emailAddress = "careers@syedmedia.com"
    const emailSubject = `Application for ${jobTitle} Position`
    const emailBody = `Dear Syed Media Team,\n\nI am writing to express my interest in the ${jobTitle} position at Syed Media.\n\nPlease find my resume attached.\n\nBest regards,`

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-lg bg-slate-900 rounded-xl border border-slate-800 shadow-2xl mx-4"
                    >
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-white">Apply for {jobTitle}</h2>
                                <button
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Application Instructions */}
                            <div className="space-y-6">
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-purple-400" />
                                        Application Instructions
                                    </h3>
                                    <p className="text-slate-300 mb-4">
                                        To apply for this position, please send an email to our careers team with the following information:
                                    </p>
                                    <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <User className="w-5 h-5 text-purple-400 mt-0.5" />
                                            <span>Your full name</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                                            <span>Your phone number</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                                            <span>Your email address</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FileText className="w-5 h-5 text-purple-400 mt-0.5" />
                                            <span>Your resume (PDF format)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center">
                                    <p className="text-slate-400 mb-4">
                                        Click the button below to open your email client with a pre-filled template:
                                    </p>
                                    <a href={mailtoLink} className="inline-block">
                                        <Button
                                            className="bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            Open Email Client
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
} 