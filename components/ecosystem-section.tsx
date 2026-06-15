"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Glasses, LayoutGrid, Globe, SlidersHorizontal, type LucideIcon } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type Component = {
  icon: LucideIcon
  category: string
  title: string
  body: string
  href?: string
}

const components: Component[] = [
  {
    icon: Glasses,
    category: "Varjo XR-4",
    title: "Virtual Reality",
    href: "/ecosystem/virtual-reality",
    body: "Professional mixed-reality, proven in military and government training and now making its general-aviation debut. With adjustable masking you see your real hands and real controls inside a true-to-life virtual cockpit — reach out and turn a real knob.",
  },
  {
    icon: LayoutGrid,
    category: "Community Aviation",
    title: "Operating System",
    body: "Scheduling, records, curriculum, lesson plans, and scenarios in one place — all grounded in the Learn-Do-Fly Training Standard, with a built-in knowledge engine.",
  },
  {
    icon: Globe,
    category: "RealNav Data",
    title: "Navigation Data",
    body: "Global, commercially licensed navigation data on 4x and 13x cycles. Students train on the same data the real world flies on.",
  },
  {
    icon: SlidersHorizontal,
    category: "Atlas",
    title: "Instructor Station",
    body: "The integrator. Build scenarios, inject weather, accept bookings, and communicate across the entire ecosystem — from one station built specifically for the Blackstar family.",
  },
]

function HubDiagram() {
  // Decorative hub-and-spokes motif: the Eclipse hub at the center, the four
  // components connected around it. Full-name labels sit outside each node so
  // they read consistently with the cards below.
  const router = useRouter()
  const cx = 340
  const cy = 160
  const nodes: { x: number; y: number; label: string; place: "top" | "bottom"; href?: string }[] = [
    { x: 120, y: 80, label: "Virtual Reality", place: "top", href: "/ecosystem/virtual-reality" },
    { x: 560, y: 80, label: "Operating System", place: "top" },
    { x: 120, y: 240, label: "Navigation Data", place: "bottom" },
    { x: 560, y: 240, label: "Instructor Station", place: "bottom" },
  ]
  return (
    <svg
      viewBox="0 0 680 320"
      className="w-full max-w-3xl mx-auto h-auto"
      role="img"
      aria-label="The Eclipse hub at the center, connected to Virtual Reality, Operating System, Navigation Data, and the Instructor Station"
    >
      {nodes.map((n) => (
        <line
          key={`line-${n.label}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke="hsl(var(--primary))"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n) => {
        const content = (
          <>
            <circle cx={n.x} cy={n.y} r="9" fill="hsl(var(--primary))" />
            <circle cx={n.x} cy={n.y} r="15" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1.5" />
            <text
              x={n.x}
              y={n.place === "top" ? n.y - 28 : n.y + 38}
              textAnchor="middle"
              className="font-mono"
              fontSize="17"
              letterSpacing="0.5"
              fill="hsl(var(--foreground))"
            >
              {n.label}
            </text>
          </>
        )
        return n.href ? (
          <g
            key={`node-${n.label}`}
            className="hub-link"
            role="link"
            tabIndex={0}
            aria-label={`${n.label} — learn more`}
            onClick={() => router.push(n.href!)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") router.push(n.href!)
            }}
          >
            {content}
          </g>
        ) : (
          <g key={`node-${n.label}`}>{content}</g>
        )
      })}
      <circle cx={cx} cy={cy} r="58" fill="hsl(var(--primary) / 0.12)" />
      <circle cx={cx} cy={cy} r="48" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <text x={cx} y={cy + 7} textAnchor="middle" className="font-mono" fontSize="20" fontWeight="600" letterSpacing="2" fill="hsl(var(--primary))">
        ECLIPSE
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
          <p className="text-xl md:text-2xl tracking-[0.25em] uppercase text-primary mb-5">The Ecosystem</p>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05] text-balance mb-6">
            Four systems. One connected whole.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Each component is powerful on its own. Connected through the Blackstar hub, they add up to something none
            could be alone — a single, fully integrated flight-training ecosystem.
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
          {components.map((c, i) => {
            const cardClass = `group flex flex-col h-full p-8 lg:p-10 bg-card border border-border transition-all duration-500 ${
              c.href ? "hover:border-primary hover:-translate-y-1" : "hover:border-primary/50"
            } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`
            const inner = (
              <>
                <c.icon size={36} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xl sm:text-2xl lg:text-3xl tracking-[0.15em] uppercase text-muted-foreground mb-2">{c.category}</p>
                <h3 className="font-mono text-3xl lg:text-4xl text-foreground uppercase tracking-wide mb-4">{c.title}</h3>
                <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">{c.body}</p>
                {c.href && (
                  <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-primary">
                    Explore
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                )}
              </>
            )
            return c.href ? (
              <Link key={c.title} href={c.href} className={cardClass} style={{ transitionDelay: `${300 + i * 120}ms` }}>
                {inner}
              </Link>
            ) : (
              <article key={c.title} className={cardClass} style={{ transitionDelay: `${300 + i * 120}ms` }}>
                {inner}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
