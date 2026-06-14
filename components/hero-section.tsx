"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { BookButton } from "@/components/calendly"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [textColor, setTextColor] = useState("#991b1b")

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
    const timer = setTimeout(() => setTextColor("#ff5a0c"), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background video */}
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
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-6 py-28 text-center">
        <p
          className="text-xs sm:text-sm tracking-[0.35em] uppercase text-primary mb-6 animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Integrated Flight Training Ecosystem
        </p>
        <h1
          className="font-mono text-5xl sm:text-6xl lg:text-8xl text-foreground leading-[0.95] tracking-tight text-balance animate-fade-in-up uppercase"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <span style={{ color: textColor, transition: "color 3s ease-in-out" }}>This Changes</span>
          <br />
          Everything
        </h1>
        <p
          className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed text-foreground/85 animate-fade-in"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          The Blackstar ATD is the hub of a complete flight-training ecosystem — professional VR, live global
          navigation data, and a full training operating system, on one device that runs both Prepar3D and X-Plane.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in w-full sm:w-auto"
          style={{ animationDelay: "1.2s", opacity: 0 }}
        >
          <BookButton className="w-full sm:w-auto" />
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.18em] border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Explore the Ecosystem
          </a>
        </div>

        <p
          className="mt-8 text-xs tracking-[0.3em] uppercase text-muted-foreground animate-fade-in"
          style={{ animationDelay: "1.45s", opacity: 0 }}
        >
          <span className="text-primary">●</span> FAA-Approved AATD
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.7s", opacity: 0 }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Scroll</span>
        <ChevronDown size={16} className="text-primary animate-bounce" />
      </div>
    </section>
  )
}
