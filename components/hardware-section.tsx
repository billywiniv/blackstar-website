"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const cards = [
  {
    title: "Mixed-Reality Immersion",
    description:
      "A professional Varjo headset runs full VR or mixed-reality passthrough with masking, blending a true-to-life virtual cockpit with your real hands and surroundings.",
  },
  {
    title: "Real Controls, Virtual Cockpit",
    description:
      "Physical knobs, switches, and instruments are paired one-to-one with their virtual counterparts. Reach out and you're working real hardware — identical tactile feedback, exactly where you expect it.",
  },
  {
    title: "Authentic Flight Models",
    description:
      "Powered by Lockheed Martin Prepar3D and X-Plane for accurate, certifiable aircraft behavior.",
  },
]

// Real Varjo XR-4 specs (source: varjo.com/products/xr-4).
const stats = [
  { value: 120, prefix: "", suffix: "°", label: "Field of View" },
  { value: 51, prefix: "", suffix: " PPD", label: "Visual Resolution" },
  { value: 20, prefix: "Dual ", suffix: " MP", label: "Mixed-Reality Cameras" },
  { value: 10000, prefix: "", suffix: ":1", label: "Contrast Ratio" },
]

function AnimatedStat({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function HardwareSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="hardware" className="relative border-t border-border py-24 lg:py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Intro + visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
          <div
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl tracking-[0.25em] uppercase text-primary mb-5">Hardware Engineering</p>
            <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05] mb-8">
              Built for realism.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              The Blackstar ATD blends a professional Varjo headset with real flight hardware. In VR or mixed-reality
              with masking, you see a true-to-life cockpit and your own hands — and when you reach out to set a
              frequency or enter a flight plan, you&rsquo;re turning real knobs and pressing real buttons. Virtual
              instruments, paired one-to-one with physical controls.
            </p>
          </div>

          {/* PLACEHOLDER IMAGE — replace with real VR-headset / paired-controls photography (brief open question #3). */}
          <div
            className={`relative h-72 lg:h-[26rem] overflow-hidden border border-border transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <Image src="/images/detail.jpg" alt="Blackstar ATD cockpit hardware detail" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <h3 className="font-mono text-lg uppercase tracking-wide text-foreground mb-3">{card.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Varjo XR-4 stat counters */}
        <div className="bg-card border border-border">
          <p className="text-center text-base md:text-lg tracking-[0.25em] uppercase text-muted-foreground pt-8 px-4">
            The Visual System — Powered by <span className="text-primary">Varjo XR-4</span>
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-10 px-3 text-center border-border ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b lg:border-b-0" : ""} ${i < 3 ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <p className="font-mono text-3xl md:text-4xl lg:text-5xl text-primary mb-2 whitespace-nowrap">
                  <AnimatedStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm leading-relaxed text-muted-foreground px-6 pb-8 max-w-2xl mx-auto">
            The Blackstar ATD ships with the Varjo XR-4 by default, with the{" "}
            <span className="text-foreground">XR-4 Focal Edition</span> — gaze-driven autofocus for sharper reading of
            small instruments — available as a supported option.
          </p>
        </div>
      </div>
    </section>
  )
}
