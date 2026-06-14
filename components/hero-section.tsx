"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [textColor, setTextColor] = useState("#991b1b")

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
    const timer = setTimeout(() => {
      setTextColor("#e8730c")
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Next-Gen Flight Simulation
        </p>
        <h1
          className="font-mono text-4xl md:text-6xl lg:text-8xl text-foreground leading-[0.95] tracking-tight text-balance animate-fade-in-up uppercase"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <span style={{ color: textColor, transition: "color 3s ease-in-out" }}>This Changes</span>
          <br />
          Everything
        </h1>
        <p
          className="mt-8 text-sm md:text-base max-w-lg leading-relaxed tracking-wide animate-fade-in"
          style={{ animationDelay: "0.9s", opacity: 0, color: "#d1d5db" }}
        >
          Full-immersion cockpit experiences powered by military-grade hardware.
          Train harder. Fly smarter. Push every limit.
        </p>
        <div
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "1.2s", opacity: 0 }}
        >
          <a
            href="#models"
            className="text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-3.5 hover:bg-primary/90 transition-all duration-300"
          >
            Explore Simulators
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.6s", opacity: 0 }}>
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          Scroll to Explore
        </span>
        <ChevronDown size={16} className="text-primary animate-bounce" />
      </div>
    </section>
  )
}
