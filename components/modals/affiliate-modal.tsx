"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, MessageSquare, Send, Loader2, User, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
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
                                <h2 className="text-2xl font-bold text-white">Join Our Affiliate Program</h2>
                                <button
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Success Message */}
                            {state.succeeded ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-emerald-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Application Received!</h3>
                                    <p className="text-slate-400">
                                        Thank you for your interest in our affiliate program. We'll review your application and get back to you within 24 hours.
                                    </p>
                                    <Button
                                        onClick={onClose}
                                        className="mt-6 bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600"
                                    >
                                        Close
                                    </Button>
                                </motion.div>
                            ) : (
                                /* Affiliate Form */
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-slate-400 mb-2"
                                        >
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                                placeholder="Enter your full name"
                                            />
                                            <User className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                                        </div>
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-slate-400 mb-2"
                                        >
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="phone"
                                                type="tel"
                                                name="phone"
                                                required
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                                placeholder="Enter your phone number"
                                            />
                                            <Phone className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                                        </div>
                                        <ValidationError
                                            prefix="Phone"
                                            field="phone"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-slate-400 mb-2"
                                        >
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                                placeholder="Enter your email"
                                            />
                                            <Mail className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                                        </div>
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="hasLead"
                                            className="block text-sm font-medium text-slate-400 mb-2"
                                        >
                                            Do you have a potential lead?
                                        </label>
                                        <Select
                                            value={hasLead}
                                            onValueChange={(value) => setHasLead(value)}
                                            required
                                        >
                                            <SelectTrigger className="w-full bg-slate-800/50 border-slate-700 text-white">
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-slate-800 border-slate-700">
                                                <SelectItem value="yes">Yes, I have a lead</SelectItem>
                                                <SelectItem value="no">No, not yet</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <input
                                            type="hidden"
                                            name="hasLead"
                                            value={hasLead}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-slate-400 mb-2"
                                        >
                                            Additional Information
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={3}
                                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                                                placeholder="Tell us about yourself and your network"
                                            />
                                            <MessageSquare className="w-5 h-5 text-slate-400 absolute right-3 top-3" />
                                        </div>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={state.submitting || isSubmitting}
                                        className="w-full bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        {state.submitting || isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Submit Application
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
} 