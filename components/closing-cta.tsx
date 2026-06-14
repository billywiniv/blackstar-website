"use client"

import { CalendlyInline } from "@/components/calendly"
import { useInView } from "@/hooks/use-in-view"

export function ClosingCta() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="book" className="relative border-t border-border py-24 lg:py-32 px-6 lg:px-12">
      <div className="absolute inset-0 glow-orange pointer-events-none" aria-hidden />
      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto text-center transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight uppercase leading-[1.0] mb-6">
          See it for yourself.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-12">
          Book a consultation and we&rsquo;ll show you how a Blackstar ATD fits into your training program.
        </p>

        <div className="bg-card border border-border p-2 sm:p-4">
          <CalendlyInline />
        </div>
      </div>
    </section>
  )
}
