"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = document.documentElement.scrollHeight * 2

    canvas.width = width
    canvas.height = height

    let scrollOffset = 0
    let targetScrollOffset = 0

    const particles: Particle[] = []
    const particleCount = 70

    class Particle {
      x: number
      y: number
      baseY: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.baseY = Math.random() * height
        this.y = this.baseY
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3

        const colors = [
          "#8b5cf6", "#4f46e5", "#3b82f6", "#0ea5e9", "#06b6d4", "#14b8a6", "#10b981"
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.baseY += this.speedY

        if (this.x > width) this.x = 0
        else if (this.x < 0) this.x = width

        if (this.baseY > height) this.baseY = 0
        else if (this.baseY < 0) this.baseY = height

        this.y = this.baseY - scrollOffset * 0.2
      }

      draw() {
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      scrollOffset += (targetScrollOffset - scrollOffset) * 0.05

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = document.documentElement.scrollHeight * 2

      // Scale existing particle positions proportionally
      const scaleX = newWidth / width
      const scaleY = newHeight / height

      particles.forEach(p => {
        p.x *= scaleX
        p.baseY *= scaleY
        p.y = p.baseY - scrollOffset * 0.2
      })

      // Add more particles if needed to maintain density
      const desiredCount = Math.round((particleCount / height) * newHeight)
      while (particles.length < desiredCount) {
        particles.push(new Particle())
      }

      width = newWidth
      height = newHeight
      canvas.width = width
      canvas.height = height
    }

    const handleScroll = () => {
      targetScrollOffset = window.scrollY
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}