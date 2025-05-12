"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowDown, Sparkles, Users } from "lucide-react"
import Header from "@/components/OverlayHeader"

const nextSlideThreshold = 800;

const slides = [
  {
    id: 1,
    title: "Where Ideas Meet Reality",
    subtitle: "A practical solution to affordable digital brand scaling",
    image: "/editing-course.png",
    gradient: "from-purple-500/20 to-emerald-500/20",
    textGradient: "from-purple-400 to-emerald-400",
    cta: "SEE ALL SERVICES",
    ctaLink: "/services",
    floatingText: "Innovate • Create • Scale"
  },
    {
    id: 2,
    title: "Innovative Marketing",
    subtitle: "Perfect for profitable companies ready to amplify their social media presence",
    image: "/editing-course.png",
    gradient: "from-purple-500/20 to-emerald-500/20",
    textGradient: "from-purple-400 to-emerald-400",
    cta: "EXPLORE",
    ctaLink: "/services/innovative-marketing",
    floatingText: "Grow • Engage • Convert"
  },
  {
    id: 3,
    title: "Premium Video Editing",
    subtitle: "Professional editing services at your fingertips",
    image: "/editing-course.png",
    gradient: "from-orange-500/20 to-blue-500/20",
    textGradient: "from-orange-400 to-blue-400",
    cta: "LEARN MORE",
    ctaLink: "/services/digital-editing",
    floatingText: "Edit • Enhance • Transform"
  },
  {
    id: 4,
    title: "Digital Editing Course",
    subtitle: "Learn to edit and immediately start earning",
    image: "/digital-editing.png",
    gradient: "from-orange-500/20 to-purple-500/20",
    textGradient: "from-orange-400 to-purple-400",
    cta: "COMING SOON",
    ctaLink: "#",
    floatingText: "Learn • Earn • Succeed",
    isComingSoon: true
  },
  {
    id: 5,
    title: "Become a Syed Media Affiliate",
    subtitle: "Get paid for connecting us with brands that need better marketing",
    image: "/editing-course.png",
    gradient: "from-emerald-500/20 to-orange-500/20",
    textGradient: "from-emerald-400 to-orange-400",
    cta: "JOIN NOW",
    ctaLink: "/services/media-affiliate",
    floatingText: "Connect • Earn • Scale",
    icon: Users
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [revealedWords, setRevealedWords] = useState(0)
  const [scrollThreshold, setScrollThreshold] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault()
    
    if (isScrolling) return

    const currentSlideWords = slides[currentSlide].title.split(" ").length
    
    if (revealedWords < currentSlideWords) {
      setScrollThreshold(prev => {
        const newThreshold = prev + Math.abs(e.deltaY)
        if (newThreshold >= 200) {
          setRevealedWords(prev => prev + 1)
          return 0
        }
        return newThreshold
      })
      return
    }
    
    const direction = e.deltaY > 0 ? 1 : -1
    const nextSlide = Math.max(0, Math.min(slides.length - 1, currentSlide + direction))
    
    if (nextSlide !== currentSlide) {
      setScrollThreshold(prev => {
        const newThreshold = prev + Math.abs(e.deltaY)
        if (newThreshold >= nextSlideThreshold) {
          setIsScrolling(true)
          setCurrentSlide(nextSlide)
          setRevealedWords(0)
          setScrollThreshold(0)
          setTimeout(() => {
            setIsScrolling(false)
          }, nextSlideThreshold)
        }
        return newThreshold
      })
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false })
      return () => container.removeEventListener("wheel", handleScroll)
    }
  }, [currentSlide, isScrolling, revealedWords])

  useEffect(() => {
    setRevealedWords(0)
    setScrollThreshold(0)
  }, [currentSlide])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Overlay Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Navigation Dots and Scroll Text */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === slides.length - 1 
              ? (revealedWords < slides[currentSlide].title.split(" ").length ? 1 : 0)
              : 1 
          }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-xs tracking-[0.2em] uppercase text-white/60 font-light"
          >
            Scroll
          </motion.div>
        </motion.div>

        <div className="flex gap-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Image */}
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="absolute inset-0 z-0"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-black/40" />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Text */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: revealedWords > 0 ? 1 : 0, y: revealedWords > 0 ? 0 : 50 }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-1/4 left-0 right-0 text-center z-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-white/80"
                  >
                    {slide.floatingText}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl px-4">
                  <div className="mb-8">
                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                      {slide.title.split(" ").map((word, i) => {
                        const isCurrentWord = i === revealedWords;
                        const isRevealed = i < revealedWords;
                        const currentWordProgress = isCurrentWord ? Math.min(scrollThreshold / 200, 1) : 0;
                        
                        return (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: isRevealed ? 1 : currentWordProgress,
                              y: isRevealed ? 0 : 20 * (1 - currentWordProgress)
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`inline-block mr-2 pb-2 ${
                              isRevealed || isCurrentWord 
                                ? `bg-clip-text text-transparent bg-gradient-to-r ${slide.textGradient}`
                                : 'text-white/30'
                            }`}
                            style={{
                              backgroundSize: isCurrentWord ? `${currentWordProgress * 100}% 100%` : '100% 100%',
                              backgroundPosition: isCurrentWord ? 'left' : 'left',
                              backgroundRepeat: 'no-repeat'
                            }}
                          >
                            {word}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: revealedWords > 0 ? 1 : 0, y: revealedWords > 0 ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: revealedWords > 0 ? 1 : 0, y: revealedWords > 0 ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Link
                      href={slide.ctaLink}
                      className={`inline-flex items-center ${
                        slide.isComingSoon 
                          ? "bg-gradient-to-r from-orange-500 to-purple-500 text-white" 
                          : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
                      } px-8 py-4 font-medium tracking-wide transition-all duration-300 group rounded-full`}
                    >
                      {slide.isComingSoon && <Sparkles className="mr-2 h-4 w-4" />}
                      {slide.icon && <slide.icon className="mr-2 h-4 w-4" />}
                      {slide.cta} 
                      {!slide.isComingSoon && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  )
}