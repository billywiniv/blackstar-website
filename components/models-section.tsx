"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const models = [
  {
    name: "PREPAR3D",
    tagline: "Professional Simulation",
    image: "/images/prepar3d.jpg",
    href: "/prepar3d",
  },
  {
    name: "X-PLANE",
    tagline: "Advanced Flight Model",
    image: "/images/xplane.jpg",
    href: "/xplane",
  },
]

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

export function ModelsSection() {
  const { ref, inView } = useInView()

  return (
    <section id="models" className="relative py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`mb-20 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            The Fleet
          </p>
          <h2 className="font-mono text-3xl md:text-5xl text-foreground tracking-tight uppercase">
            Select Your Platform
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border">
          {models.map((model, i) => (
            <ModelCard key={model.name} model={model} index={i} parentInView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ModelCard({
  model,
  index,
  parentInView,
}: {
  model: (typeof models)[0]
  index: number
  parentInView: boolean
}) {
  return (
    <div
      className={`group relative bg-card overflow-hidden transition-all duration-1000 ${
        parentInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative h-80 lg:h-96 overflow-hidden">
        <Image
          src={model.image}
          alt={`${model.name} - ${model.tagline}`}
          fill
          sizes="(max-width: 768px) 50vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-orange-500/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      <div className="p-8 lg:p-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
          {model.tagline}
        </p>
        <h3 className="font-mono text-xl lg:text-2xl text-foreground mb-6 uppercase tracking-wide">
          {model.name}
        </h3>

        <Link
          href={model.href}
          className="inline-block text-xs tracking-[0.25em] uppercase border border-primary/40 text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}


