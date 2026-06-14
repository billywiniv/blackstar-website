"use client"

import Image from "next/image"
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

const features = [
  {
    title: "Replica Avionics",
    description:
      "Every switch, dial, and display is sourced or replicated from actual aircraft cockpits. Identical tactile feedback, identical layout, zero shortcuts.",
  },
  {
    title: "Custom Motion Platform",
    description:
      "Our 6-DOF electric motion systems deliver sub-millisecond response times with G-force simulation up to 2G sustained, built on aerospace-grade actuators.",
  },
  {
    title: "Adaptive Visual Engine",
    description:
      "Real-time weather, terrain mesh, and procedural lighting rendered at 8K across wraparound displays. Every session is different.",
  },
]

export function CraftsmanshipSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="craftsmanship" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/chair-blur.jpg"
                alt="BLACKSTAR Flight Simulation gaming chair with orange logo"
                width={1200}
                height={900}
                className="w-full h-auto ml-[-2px] mb-[-2px]"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-8 hidden lg:block">
              <p className="font-mono text-5xl text-primary">500+</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                Active Inputs Per Cockpit
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Hardware Engineering
            </p>
            <h2 className="font-mono text-3xl md:text-5xl text-foreground tracking-tight mb-8 leading-tight uppercase">
              Built for
              <br />
              Realism
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Every BLACKSTAR simulator is assembled from military-spec
              components. No off-the-shelf compromises. Purpose-built systems
              for the most demanding pilots.
            </p>

            <div className="flex flex-col gap-10">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`border-l-2 border-primary/30 pl-6 transition-all duration-700 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${600 + i * 200}ms` }}
                >
                  <h3 className="text-sm tracking-[0.15em] uppercase text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
