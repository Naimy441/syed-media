import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Syne } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import Header from "@/components/header"
import SmoothScroll from "@/components/SmoothScroll"
import { CreatorHeart } from "@/components/3ata-heart"
import { Copyright } from "@/components/copyright"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Syed Media - Where Ideas Meet Reality",
  description: "A practical solution to affordable digital brand scaling.",
  icons: {
    icon: '/favicon.ico',
    apple: "/apple-touch-icon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${outfit.variable} ${syne.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SmoothScroll>
            <div
              className="fixed inset-0 z-0 pointer-events-none"
              style={{ backgroundColor: "#090e11" }}
              aria-hidden
            />

            {/* Page Layout */}
            <main className="flex flex-col relative z-20 w-full flex-1">
              <Header />
              {children}
            </main>
            <Copyright />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
