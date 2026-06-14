"use client"

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    title: "The Idea",
    description:
      "It started with a simple question: why isn't there an accessible, high-fidelity flight simulator for general aviation? That spark ignited everything that followed.",
  },
  {
    title: "The Team",
    description:
      "A small group of pilots, engineers, and aviation enthusiasts came together with a shared vision. Each brought unique expertise to transform the idea into reality.",
  },
  {
    title: "The Prototype",
    description:
      "Countless late nights in a cramped garage led to our first working prototype. It was rough around the edges, but it proved the concept was viable.",
  },
  {
    title: "The Materials",
    description:
      "Sourcing aircraft-grade components and custom-engineered hardware. Every material was selected for authenticity and durability to match real cockpit experiences.",
  },
  {
    title: "The First Build",
    description:
      "Our first production simulator came to life. Watching a pilot step in and forget they weren't in a real aircraft validated years of hard work.",
  },
  {
    title: "The Final",
    description:
      "Refinement after refinement. The final product represents thousands of hours of testing, feedback, and iteration to achieve simulation perfection.",
  },
  {
    title: "The Future",
    description:
      "This is just the beginning. We're pushing into VR integration, expanded aircraft models, and making professional-grade simulation accessible to everyone.",
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0]
  index: number
}) {
  const { ref, inView } = useInView(0.3)
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex items-center gap-8 lg:gap-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}
      >
        <div
          className={`transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <h3 className="font-mono text-3xl lg:text-4xl text-primary uppercase tracking-wide mb-4">
            {milestone.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Center Line & Dot */}
      <div className="hidden lg:flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
            inView
              ? "bg-primary border-primary scale-100"
              : "bg-transparent border-muted-foreground scale-75"
          }`}
        />
        {index < milestones.length - 1 && (
          <div className="w-px h-32 bg-border" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block flex-1" />
    </div>
  )
}

export default function TimelinePage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-1.5 lg:pt-40 lg:pb-1.5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase text-primary mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Our Journey
          </p>
          <h1
            className="font-mono text-4xl md:text-6xl lg:text-7xl text-foreground uppercase tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            The BLACKSTAR
            <br />
            Timeline
          </h1>
          <p
            className="text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            From a simple idea to the first ever in general aviation.
            Welcome to our story.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Mobile: Vertical line on left */}
          <div className="lg:hidden relative pl-8 border-l-2 border-border space-y-16">
            {milestones.map((milestone, index) => (
              <MobileTimelineItem
                key={milestone.title}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>

          {/* Desktop: Alternating layout */}
          <div className="hidden lg:block space-y-0">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={milestone.title}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Join us as we continue to push the boundaries of flight simulation
            technology. The best is yet to come.
          </p>
          <a
            href="/#models"
            className="inline-block text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-3.5 hover:bg-primary/90 transition-all duration-300"
          >
            Explore Our Simulators
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function MobileTimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0]
  index: number
}) {
  const { ref, inView } = useInView(0.3)

  return (
    <div ref={ref} className="relative">
      {/* Dot on the line */}
      <div
        className={`absolute -left-[25px] top-0 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
          inView
            ? "bg-primary border-primary"
            : "bg-transparent border-muted-foreground"
        }`}
      />

      <div
        className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <h3 className="font-mono text-2xl text-primary uppercase tracking-wide mb-3">
          {milestone.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  )
}
