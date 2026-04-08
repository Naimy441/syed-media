"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  cyanButtonClass,
  cyanButtonOutlineClass,
  GradientText,
  modalDialogContentClass,
  modalFormLabelClass,
} from "@/components/site/MarketingUI"

interface ReviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("rating", rating.toString())

    try {
      const response = await fetch("https://formspree.io/f/xqaqjkyn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        onClose()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass =
    "rounded-none border-white/15 bg-[#090e11] text-white placeholder:text-white/40 focus-visible:border-[#00ffff]/50 focus-visible:ring-[#00ffff]/45"

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(next) => {
        if (!next) onClose()
      }}
    >
      <DialogContent className={cn(modalDialogContentClass, "sm:max-w-[425px]")}>
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-semibold leading-[1.5] text-white">
            <GradientText as="span">Share Your Experience</GradientText>
          </DialogTitle>
          <DialogDescription className="text-white/65">
            Help others by sharing your thoughts about Syed Media
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <span className={modalFormLabelClass}>Rating</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="rounded-none p-0.5 text-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090e11]"
                >
                  <Star
                    className={cn(
                      "h-6 w-6",
                      star <= rating ? "fill-[#00ffff] text-[#00ffff]" : "text-white/25",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="review-name" className={modalFormLabelClass}>
              Name
            </label>
            <Input
              id="review-name"
              name="name"
              placeholder="Your name"
              className={fieldClass}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="review-text" className={modalFormLabelClass}>
              Review
            </label>
            <Textarea
              id="review-text"
              name="review"
              placeholder="Share your experience..."
              className={cn(fieldClass, "min-h-[100px]")}
              required
            />
          </div>
          <div className="flex flex-col-reverse justify-end gap-3 pt-4 sm:flex-row">
            <button type="button" onClick={onClose} className={cn(cyanButtonOutlineClass, "w-full sm:w-auto")}>
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(cyanButtonClass, "w-full sm:w-auto disabled:opacity-50")}
            >
              {isSubmitting ? "Submitting…" : "Submit Review"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
