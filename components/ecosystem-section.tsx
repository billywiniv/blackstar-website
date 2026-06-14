"use client"

import { Glasses, LayoutGrid, Globe, SlidersHorizontal, type LucideIcon } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type Component = {
  icon: LucideIcon
  category: string
  title: string
  body: string
}

const components: Component[] = [
  {
    icon: Glasses,
    category: "Virtual Reality",
    title: "Varjo XR-4",
    body: "Professional mixed-reality, proven in military and government training and now making its general-aviation debut. With adjustable masking you see your real hands and real controls inside a true-to-life virtual cockpit — reach out and turn a real knob.",
  },
  {
    icon: LayoutGrid,
    category: "Operating System",
    title: "Community Aviation",
    body: "Scheduling, records, curriculum, lesson plans, and scenarios in one place — all grounded in the Learn-Do-Fly Training Standard, with a built-in knowledge engine.",
  },
  {
    icon: Globe,
    category: "Navigation Data",
    title: "RealNav Data",
    body: "Global, commercially licensed navigation data on 4x and 13x cycles. Students train on the same data the real world flies on.",
  },
  {
    icon: SlidersHorizontal,
    category: "Instructor Station",
    title: "Atlas",
    body: "The integrator. Build scenarios, inject weather, accept bookings, and communicate across the entire ecosystem — from one station built specifically for the Blackstar family.",
  },
]

function HubDiagram() {
  // Decorative hub-and-spokes motif: the Blackstar ATD at the center, the four
  // components connected around it.
  const nodes = [
    { x: 70, y: 50, label: "VR" },
    { x: 530, y: 50, label: "OS" },
    { x: 70, y: 210, label: "DATA" },
    { x: 530, y: 210, label: "ATLAS" },
  ]
  return (
    <svg
      viewBox="0 0 600 260"
      className="w-full max-w-2xl mx-auto h-auto"
      role="img"
      aria-label="The Blackstar ATD at the center, connected to four components"
    >
      {nodes.map((n) => (
        <line
          key={n.label}
          x1="300"
          y1="130"
          x2={n.x}
          y2={n.y}
          stroke="hsl(var(--primary))"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n) => (
        <g key={`node-${n.label}`}>
          <circle cx={n.x} cy={n.y} r="30" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            className="font-mono"
            fontSize="13"
            letterSpacing="1"
            fill="hsl(var(--muted-foreground))"
          >
            {n.label}
          </text>
        </g>
      ))}
      <circle cx="300" cy="130" r="52" fill="hsl(var(--primary) / 0.12)" />
      <circle cx="300" cy="130" r="44" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <text x="300" y="125" textAnchor="middle" className="font-mono" fontSize="14" fontWeight="600" fill="hsl(var(--foreground))">
        BLACKSTAR
      </text>
      <text x="300" y="143" textAnchor="middle" className="font-mono" fontSize="11" letterSpacing="2" fill="hsl(var(--primary))">
        ATD
      </text>
    </svg>
  )
}

export function EcosystemSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="ecosystem" className="relative border-t border-border py-24 lg:py-32 px-6 lg:px-12">
      <div className="absolute inset-0 glow-orange pointer-events-none" aria-hidden />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.35em] uppercase text-primary mb-5">The Ecosystem</p>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05] text-balance mb-6">
            Four systems. One connected whole.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Each component is powerful on its own. Connected through Blackstar, they become something none of them is
            alone: a fully integrated flight-training ecosystem.
          </p>
        </div>

        <div
          className={`mb-14 transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <HubDiagram />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {components.map((c, i) => (
            <article
              key={c.title}
              className={`group flex flex-col h-full p-8 lg:p-10 bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <c.icon size={36} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{c.category}</p>
              <h3 className="font-mono text-2xl lg:text-3xl text-foreground uppercase tracking-wide mb-4">{c.title}</h3>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
