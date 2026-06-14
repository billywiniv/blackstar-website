"use client"

import { useInView } from "@/hooks/use-in-view"

export function TheShiftSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="shift" className="relative surface-gradient border-t border-border py-24 lg:py-32 px-6 lg:px-12">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xl md:text-2xl tracking-[0.25em] uppercase text-primary mb-6">The Problem</p>
        <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05] text-balance mb-10">
          For decades, the ATD has been an island.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
          Flight training resources have been fragmented forever, and the aviation training device has been the most
          isolated piece of all — a closed box, cut off from a school&rsquo;s scheduling, curriculum, and student
          progress. <span className="text-foreground">Blackstar changes that.</span> We built our ATD as an open
          platform that connects to everything your program already runs on, turning the most isolated tool in the
          building into the hub that ties it all together.
        </p>
      </div>
    </section>
  )
}
