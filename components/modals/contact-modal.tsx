"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, MessageSquare, Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  cyanButtonClass,
  GradientText,
  modalBackdropClass,
  modalCloseButtonClass,
  modalInputClass,
  modalInsetCalloutClass,
  modalLabelClass,
  modalPanelClass,
  modalSuccessIconWrapClass,
  modalTextareaClass,
} from "@/components/site/MarketingUI"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [state, handleSubmit] = useForm("xldbpvdq")
    const [isSubmitting, setIsSubmitting] = useState(false)

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
                                    <GradientText as="span">Contact Us</GradientText>
                                </h2>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className={modalCloseButtonClass}
                                    aria-label="Close"
                                >
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
                                        <Mail className="h-8 w-8" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold text-white">Message Sent!</h3>
                                    <p className="text-white/65">
                                        Thank you for reaching out. We'll get back to you soon.
                                    </p>
                                    <button type="button" onClick={onClose} className={cn(cyanButtonClass, "mt-6 w-full")}>
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                /* Contact Form */
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div className={modalInsetCalloutClass}>
                                        <p className="text-sm leading-relaxed text-white/70">
                                            Tell us what you are trying to build and we will recommend the best next step.
                                        </p>
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
                                        <label htmlFor="message" className={modalLabelClass}>
                                            Message
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                className={cn(modalTextareaClass, "min-h-[7rem] pr-11")}
                                                placeholder="How can we help you?"
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
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5" />
                                                Send Message
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