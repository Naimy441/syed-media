import type { ElementType, ReactNode } from "react"
import Link from "next/link"

export const SITE_BG = "#090e11"

/** Primary rectangular CTA — matches services page methodology */
export const cyanButtonClass =
  "inline-flex items-center justify-center border-2 border-[#00ffff] bg-[#00ffff] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#090e11] transition-colors hover:bg-[#33ffff] hover:border-[#33ffff] rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffff]"

export const cyanButtonOutlineClass =
  "inline-flex items-center justify-center border-2 border-[#00ffff] bg-transparent px-8 py-3.5 text-sm font-semibold tracking-wide text-[#00ffff] transition-colors hover:bg-[#00ffff]/10 rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffff]"

/** Large CTA used on legacy `Button` components */
export const cyanButtonLgClass =
  "w-full md:w-auto text-lg h-14 rounded-none border-2 border-[#00ffff] bg-[#00ffff] text-[#090e11] hover:bg-[#33ffff] hover:border-[#33ffff] font-semibold shadow-none"

/** Framer `motion` modals: dim layer + panel */
export const modalBackdropClass = "absolute inset-0 bg-[#090e11]/80 backdrop-blur-sm"

export const modalPanelClass =
  "relative w-full max-w-lg rounded-none border-2 border-[#00ffff]/30 bg-[#090e11] shadow-[0_0_60px_rgba(0,255,255,0.12)] mx-4"

const modalFieldBase =
  "w-full rounded-none border border-white/15 bg-[#090e11] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff]/45 focus-visible:border-[#00ffff]/50 transition-colors"

export const modalLabelClass = "block text-sm font-medium text-white/65 mb-2"

/** Label inside forms where spacing is handled by `space-y-*` wrappers */
export const modalFormLabelClass = "text-sm font-medium text-white/65"

export const modalInputClass = modalFieldBase

export const modalTextareaClass = `${modalFieldBase} resize-none min-h-[6rem]`

export const modalCloseButtonClass =
  "text-white/55 hover:text-[#00ffff] transition-colors rounded-none p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090e11]"

export const modalSuccessIconWrapClass =
  "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-none border-2 border-[#00ffff]/40 bg-[#00ffff]/10 text-[#00ffff]"

export const modalInsetCalloutClass = "rounded-none border border-white/10 bg-white/[0.02] p-4"

/** Radix `DialogContent` overrides for marketing dialogs */
export const modalDialogContentClass =
  "z-[100] gap-0 rounded-none border-2 border-[#00ffff]/30 bg-[#090e11] p-6 text-white shadow-[0_0_60px_rgba(0,255,255,0.12)] sm:rounded-none"

export function GradientText({
  children,
  as: Tag = "span",
  className = "",
}: {
  children: ReactNode
  as?: ElementType
  className?: string
}) {
  return (
    <Tag
      className={`bg-gradient-to-r from-[#00ffff] to-[#d966ff] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  )
}

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">{children}</div>
    </section>
  )
}

type RectButtonProps = {
  children: ReactNode
  variant?: "primary" | "outline"
  className?: string
} & (
  | { href: string; onClick?: never; type?: never }
  | { href?: undefined; onClick: () => void; type?: "button" | "submit" }
)

export function RectButton({
  href,
  onClick,
  type = "button",
  children,
  variant = "primary",
  className = "",
}: RectButtonProps) {
  const styles = variant === "primary" ? cyanButtonClass : cyanButtonOutlineClass
  const cls = `${styles} ${className}`
  if (href != null && href !== "") {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`min-h-screen text-white ${className}`} style={{ backgroundColor: SITE_BG }}>
      {children}
    </div>
  )
}
