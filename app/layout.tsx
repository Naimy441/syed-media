import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import Header from "@/components/header"
import SmoothScroll from "@/components/SmoothScroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Syed Media - Where Ideas Meet Reality",
  description: "A practical solution to affordable digital brand scaling.",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SmoothScroll>
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Persistent Background */}
          <div className="fixed inset-0 bg-black z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#0a2a66_0%,_#050530_40%,_black_100%)]" />
          </div>
          <AnimatedBackground />

          {/* Page Layout */}
          <main className="flex flex-col relative z-20 w-full flex-1">
            <Header />
            
              {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
    </SmoothScroll>
  )
}
