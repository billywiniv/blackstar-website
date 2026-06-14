"use client"

import { Monitor, Users, BarChart3, Headphones, Settings, Zap, type LucideIcon } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type Feature = { icon: LucideIcon; title: string; description: string }

const features: Feature[] = [
  {
    icon: Monitor,
    title: "Real-Time Monitoring",
    description: "Watch student performance live with comprehensive flight-data overlays and instrument tracking.",
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
    description: "Built-in ATC simulation and direct communication between instructor and student.",
  },
  {
    icon: Settings,
    title: "Scenario Control",
    description: "Inject weather, failures, and traffic in real time to create dynamic training scenarios.",
  },
  {
    icon: Zap,
    title: "Instant Replay",
    description: "Pause, rewind, and replay any moment of the flight for detailed analysis.",
  },
]

export function AtlasSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="atlas" className="relative border-t border-border py-24 lg:py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`text-center max-w-3xl mx-auto mb-14 lg:mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl tracking-[0.25em] uppercase text-primary mb-5">Atlas — The Instructor Station</p>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05] text-balance mb-6">
            Total control of every training session.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Atlas gives instructors complete command of the ecosystem — integrated with both Prepar3D and X-Plane for
            one unified teaching experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group p-8 border border-border bg-card hover:border-primary/50 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <feature.icon size={30} className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-mono text-lg uppercase tracking-wide text-foreground mb-3">{feature.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
