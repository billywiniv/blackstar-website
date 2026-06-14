"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Users, BarChart3, Headphones, Settings, Zap } from "lucide-react"

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

const features = [
  {
    icon: Monitor,
    title: "Real-Time Monitoring",
    description: "Watch student performance live with comprehensive flight data overlays and instrument tracking.",
  },
  {
    icon: Users,
    title: "Multi-Student Sessions",
    description: "Manage multiple simulator stations simultaneously from a single instructor interface.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detailed post-flight debriefs with recorded metrics, scoring, and progress tracking over time.",
  },
  {
    icon: Headphones,
    title: "Integrated Comms",
    description: "Built-in ATC simulation and direct communication channels between instructor and student.",
  },
  {
    icon: Settings,
    title: "Scenario Control",
    description: "Inject weather, failures, and traffic in real-time to create dynamic training scenarios.",
  },
  {
    icon: Zap,
    title: "Instant Replay",
    description: "Pause, rewind, and replay any moment of the flight for detailed analysis and instruction.",
  },
]

export function InstructorSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="instructor" className="relative py-[14px] bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Command Center
          </p>
          <h2 className="font-mono text-3xl md:text-5xl text-foreground tracking-tight uppercase mb-6">
            Instructor App
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A powerful companion application that gives instructors complete control 
            over training sessions. Seamlessly integrated with both PREPAR3D and X-PLANE 
            platforms for a unified teaching experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group p-8 border border-border bg-background hover:border-primary/40 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <feature.icon 
                size={28} 
                className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300" 
              />
              <h3 className="font-mono text-sm uppercase tracking-wide text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Available on
          </p>
          <p className="font-mono text-lg text-foreground uppercase tracking-wide">
            <span className="text-primary">PREPAR3D</span>
            <span className="text-muted-foreground mx-3">+</span>
            <span className="text-primary">X-PLANE</span>
          </p>
        </div>
      </div>
    </section>
  )
}
