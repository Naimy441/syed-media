"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, FileText, User, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  cyanButtonClass,
  modalBackdropClass,
  modalCloseButtonClass,
  modalInsetCalloutClass,
  modalPanelClass,
} from "@/components/site/MarketingUI"

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
                        className={modalBackdropClass}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className={modalPanelClass}
                    >
                        <div className="p-6">
                            {/* Header */}
                            <div className="mb-6 flex items-center justify-between gap-3">
                                <h2 className="font-display text-2xl font-semibold leading-[1.5] text-white">
                                    Apply for {jobTitle}
                                </h2>
                                <button type="button" onClick={onClose} className={modalCloseButtonClass} aria-label="Close">
                                    <X className="h-6 w-6 shrink-0" />
                                </button>
                            </div>

                            {/* Application Instructions */}
                            <div className="space-y-6">
                                <div className={modalInsetCalloutClass}>
                                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                                        <Mail className="h-5 w-5 text-[#00ffff]" />
                                        Application Instructions
                                    </h3>
                                    <p className="mb-4 text-white/75">
                                        To apply for this position, please send an email to our careers team with the
                                        following information:
                                    </p>
                                    <ul className="space-y-3 text-white/80">
                                        <li className="flex items-start gap-2">
                                            <User className="mt-0.5 h-5 w-5 shrink-0 text-[#00ffff]" />
                                            <span>Your full name</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#00ffff]" />
                                            <span>Your phone number</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#00ffff]" />
                                            <span>Your email address</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#00ffff]" />
                                            <span>Your resume (PDF format)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center">
                                    <p className="mb-4 text-white/65">
                                        Click the button below to open your email client with a pre-filled template:
                                    </p>
                                    <a href={mailtoLink} className={cn(cyanButtonClass, "inline-flex gap-2")}>
                                        <Send className="h-5 w-5" />
                                        Open Email Client
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