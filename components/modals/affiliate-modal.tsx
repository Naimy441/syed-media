"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, MessageSquare, Send, Loader2, User, Phone, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  cyanButtonClass,
  modalBackdropClass,
  modalCloseButtonClass,
  modalInputClass,
  modalLabelClass,
  modalPanelClass,
  modalSuccessIconWrapClass,
  modalTextareaClass,
} from "@/components/site/MarketingUI"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AffiliateModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AffiliateModal({ isOpen, onClose }: AffiliateModalProps) {
    const [state, handleSubmit] = useForm("mkgrqlrk")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasLead, setHasLead] = useState("")

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true)
        await handleSubmit(e)
        setIsSubmitting(false)
    }

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
                                    Join Our Affiliate Program
                                </h2>
                                <button type="button" onClick={onClose} className={modalCloseButtonClass} aria-label="Close">
                                    <X className="h-6 w-6 shrink-0" />
                                </button>
                            </div>

                            {/* Success Message */}
                            {state.succeeded ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className={modalSuccessIconWrapClass}>
                                        <Users className="h-8 w-8" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Application Received!</h3>
                                    <p className="text-white/65">
                                        Thank you for your interest in our affiliate program. We'll review your
                                        application and get back to you within 24 hours.
                                    </p>
                                    <button type="button" onClick={onClose} className={cn(cyanButtonClass, "mt-6 w-full")}>
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                /* Affiliate Form */
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className={modalLabelClass}>
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                required
                                                className={cn(modalInputClass, "pr-11")}
                                                placeholder="Enter your full name"
                                            />
                                            <User className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                                        </div>
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className={modalLabelClass}>
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="phone"
                                                type="tel"
                                                name="phone"
                                                required
                                                className={cn(modalInputClass, "pr-11")}
                                                placeholder="Enter your phone number"
                                            />
                                            <Phone className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                                        </div>
                                        <ValidationError
                                            prefix="Phone"
                                            field="phone"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className={modalLabelClass}>
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                className={cn(modalInputClass, "pr-11")}
                                                placeholder="Enter your email"
                                            />
                                            <Mail className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                                        </div>
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="hasLead" className={modalLabelClass}>
                                            Do you have a potential lead?
                                        </label>
                                        <Select
                                            value={hasLead}
                                            onValueChange={(value) => setHasLead(value)}
                                            required
                                        >
                                            <SelectTrigger
                                                className={cn(
                                                  modalInputClass,
                                                  "h-auto min-h-[2.75rem] justify-between py-2 [&>span]:line-clamp-1",
                                                )}
                                            >
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-none border border-white/15 bg-[#090e11] text-white">
                                                <SelectItem
                                                  value="yes"
                                                  className="rounded-none focus:bg-[#00ffff]/15 focus:text-white"
                                                >
                                                  Yes, I have a lead
                                                </SelectItem>
                                                <SelectItem
                                                  value="no"
                                                  className="rounded-none focus:bg-[#00ffff]/15 focus:text-white"
                                                >
                                                  No, not yet
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input
                                            type="hidden"
                                            name="hasLead"
                                            value={hasLead}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className={modalLabelClass}>
                                            Additional Information
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={3}
                                                className={cn(modalTextareaClass, "pr-11")}
                                                placeholder="Tell us about yourself and your network"
                                            />
                                            <MessageSquare className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-white/40" />
                                        </div>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={state.submitting || isSubmitting}
                                        className={cn(cyanButtonClass, "w-full py-3.5 disabled:opacity-50")}
                                    >
                                        {state.submitting || isSubmitting ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5" />
                                                Submit Application
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
} 