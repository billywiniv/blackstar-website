"use client"

import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [threshold])

  return { ref, inView }
}

function AnimatedCounter({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function PerformanceSection() {
  const { ref, inView } = useInView(0.15)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return
    if (inView) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [inView])

  return (
    <section id="performance" className="relative">
      {/* Full-width video banner */}
      <div ref={ref} className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/swipe.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <p
            className={`text-xs tracking-[0.4em] uppercase text-primary mb-4 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Systems Active
          </p>
          <h2
            className={`font-mono text-3xl md:text-5xl lg:text-7xl text-foreground tracking-tight text-balance uppercase transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Total
            <br />
            Immersion.
          </h2>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: 360, suffix: "", label: "Visibility", unit: "deg" },
            { value: 4, suffix: "K", label: "Visual Resolution", unit: "" },
            { value: 2, suffix: "ms", label: "System Latency", unit: "" },
            { value: 6, suffix: "", label: "Axes of Motion", unit: "DOF" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-12 px-6 ${
                i < 3 ? "border-r border-border" : ""
              }`}
            >
              <p className="font-mono text-3xl md:text-5xl text-primary mb-1">
                {stat.suffix === "ms" ? (
                  <>
                    <AnimatedCounter target={stat.value} inView={inView} />
                    {stat.suffix}
                  </>
                ) : stat.suffix === "K" ? (
                  <>
                    <AnimatedCounter target={stat.value} inView={inView} />
                    {stat.suffix}
                  </>
                ) : (
                  <>
                    <AnimatedCounter target={stat.value} inView={inView} />
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </>
                )}
                {stat.unit && (
                  <span className="text-lg text-muted-foreground ml-1">
                    {stat.unit}
                  </span>
                )}
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
