"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function PlatformsSection() {
  const { ref, inView } = useInView(0.15)

  return (
    <section id="platforms" className="relative surface-gradient border-t border-border py-24 lg:py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.35em] uppercase text-primary mb-5">No Compromises</p>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05] text-balance mb-6">
            One device. Both platforms.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            A single Blackstar ATD runs on both Lockheed Martin Prepar3D and X-Plane — switchable at the flip of a
            switch, on the same machine. No second device, no second purchase. Varjo, RealNav Data, Community Aviation,
            and Atlas all work on either engine.
          </p>
        </div>

        {/* Platform pairing with a central "switch" motif */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 items-stretch relative">
          {[
            { name: "Prepar3D", tagline: "Lockheed Martin", image: "/images/prepar3d.jpg" },
            { name: "X-Plane", tagline: "Advanced Flight Model", image: "/images/xplane.jpg" },
          ].map((p, i) => (
            <div
              key={p.name}
              className={`relative h-72 lg:h-96 overflow-hidden border border-border transition-all duration-1000 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <Image
                src={p.image}
                alt={`${p.name} — ${p.tagline}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">{p.tagline}</p>
                <h3 className="font-mono text-2xl lg:text-3xl text-foreground uppercase tracking-wide">{p.name}</h3>
              </div>
            </div>
          ))}

          {/* Center switch badge */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center h-20 w-20 rounded-full bg-background border border-primary transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">P3D / XP</span>
          </div>
        </div>
      </div>
    </section>
  )
}
