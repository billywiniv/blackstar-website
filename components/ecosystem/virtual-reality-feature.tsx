"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ScanEye,
  Maximize,
  Hand,
  Glasses,
  Activity,
  ShieldCheck,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { BookButton } from "@/components/calendly"

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView(0.15)
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  inView,
}: {
  value: number
  prefix?: string
  suffix?: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (t: number) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * value))
      if (p < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])
  return (
    <span className="whitespace-nowrap">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = parallaxRef.current
    if (!el) return
    const r = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - r.left) / r.width - 0.5
    const dy = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `translate(${dx * 18}px, ${dy * 18}px)`
  }
  const resetMove = () => {
    if (parallaxRef.current) parallaxRef.current.style.transform = "translate(0,0)"
  }

  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      className="relative overflow-hidden border-b border-border pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12"
    >
      <div className="absolute inset-0 glow-orange pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Copy */}
        <div className="animate-fade-in-up" style={{ opacity: 0 }}>
          <Link
            href="/#ecosystem"
            className="inline-flex items-center gap-2 text-base md:text-lg tracking-[0.25em] uppercase text-primary mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={16} />
            Ecosystem · Virtual Reality
          </Link>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight uppercase leading-[1.02] text-balance mb-8">
            See the cockpit. Reach out and fly it.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl mb-10">
            The Blackstar Eclipse AATD is built around the Varjo XR-4 — the mixed-reality headset trusted by militaries
            and governments worldwide, now bringing dome-level immersion to flight training.
          </p>
          <BookButton />
        </div>

        {/* Visual */}
        <div className="flex justify-center">
          <div ref={parallaxRef} className="transition-transform duration-300 ease-out w-full max-w-md">
            <div className="animate-float relative mx-auto aspect-square w-full">
              <div className="absolute inset-6 rounded-full bg-primary/20 blur-3xl" aria-hidden />
              <div className="relative h-full w-full rounded-[2.75rem] overflow-hidden border-2 border-primary/40 shadow-2xl">
                <Image
                  src="/images/varjo-pilot.jpg"
                  alt="A pilot wearing the Varjo XR-4 mixed-reality headset in the cockpit"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.75rem]" aria-hidden />
              </div>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.3em] uppercase text-foreground/90 bg-background/60 backdrop-blur px-4 py-1.5 border border-border">
                Varjo XR-4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Core idea — Real controls, virtual world (VR <-> MR slider)         */
/* ------------------------------------------------------------------ */

function Immersion() {
  const [split, setSplit] = useState(55)

  return (
    <section className="relative border-b border-border py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <p className="text-xl md:text-2xl tracking-[0.25em] uppercase text-primary mb-5">Real controls, virtual world</p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            In full VR you&rsquo;re immersed in a virtual world. In mixed reality with masking, the XR-4 blends that
            virtual cockpit with your real hands and real hardware. Reach out to tune a radio or load a flight plan and
            you&rsquo;re turning physical knobs and pressing real switches — the muscle memory you build transfers
            straight to the aircraft.
          </p>
          <p className="mt-6 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Drag to blend VR &nbsp;⟷&nbsp; Mixed Reality
          </p>
        </Reveal>

        <Reveal delay={150}>
          {/* Before/after blend slider */}
          <div className="relative aspect-[16/11] w-full overflow-hidden border border-border select-none">
            {/* Mixed-reality base — real Varjo XR-4 passthrough */}
            <Image
              src="/images/varjo-through-the-lens.jpg"
              alt="Mixed reality — a real hand on a real cockpit display, seen through the Varjo XR-4"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute top-3 right-3 z-20 font-mono text-[11px] tracking-[0.25em] uppercase text-foreground/90 bg-background/60 backdrop-blur px-3 py-1 border border-border">
              Mixed Reality
            </span>
            {/* Full-VR layer, revealed from the left */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
              <Image
                src="/images/prepar3d-hero.jpg"
                alt="Full VR — the virtual cockpit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.25em] uppercase text-foreground/90 bg-background/60 backdrop-blur px-3 py-1 border border-border">
                Full VR
              </span>
            </div>
            {/* Divider + handle */}
            <div className="absolute top-0 bottom-0 z-10 w-0.5 bg-primary pointer-events-none" style={{ left: `${split}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-mono">
                ⟷
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={split}
              onChange={(e) => setSplit(Number(e.target.value))}
              aria-label="Blend between full VR and mixed reality"
              className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
          <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground/70">
            Mixed-reality view through the Varjo XR-4.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Featured stats                                                      */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: 120, suffix: "°", label: "Field of View" },
  { value: 51, suffix: " PPD", label: "Visual Resolution" },
  { value: 20, prefix: "Dual ", suffix: " MP", label: "Passthrough" },
  { value: 10000, suffix: ":1", label: "Contrast Ratio" },
  { value: 200, suffix: " Hz", label: "Eye Tracking" },
]

function Stats() {
  const { ref, inView } = useInView(0.2)
  return (
    <section ref={ref} className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center justify-center text-center py-10 px-3 border-border ${
              i !== STATS.length - 1 ? "lg:border-r" : ""
            } border-b lg:border-b-0 ${i % 2 === 0 ? "border-r sm:border-r" : ""} ${
              i % 3 !== 2 ? "sm:border-r" : "sm:border-r-0"
            } lg:border-r`}
          >
            <p className="font-mono text-3xl md:text-4xl lg:text-[2.75rem] text-primary mb-2">
              <AnimatedStat value={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} />
            </p>
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Features -> training benefits                                       */
/* ------------------------------------------------------------------ */

type Feature = { icon: LucideIcon; title: string; body: React.ReactNode }

const FEATURES: Feature[] = [
  {
    icon: ScanEye,
    title: "Read every instrument",
    body: (
      <>
        51 pixels per degree, near human-eye resolution. Gauges, labels, and chart fine print stay crisp — essential
        for instrument scan and procedure training.
      </>
    ),
  },
  {
    icon: Maximize,
    title: "Natural field of view",
    body: (
      <>
        120°. Peripheral vision for traffic scans, pattern work, and situational awareness, like the real cockpit.
      </>
    ),
  },
  {
    icon: Hand,
    title: "Real controls, virtual cockpit",
    body: (
      <>
        Dual 20 MP passthrough, adjustable masking, and hand occlusion let trainees see and operate the actual
        hardware. Tactile training VR-only sims can&rsquo;t match.
      </>
    ),
  },
  {
    icon: Glasses,
    title: "Comfort for long sessions",
    body: (
      <>
        Zero-gravity fit, eyeglasses support, and shared-usage support keep students comfortable through full lessons;
        one headset serves many trainees.
      </>
    ),
  },
  {
    icon: Activity,
    title: "Instructor insight",
    body: (
      <>
        200 Hz eye tracking and foveated rendering reveal where a student&rsquo;s attention goes, enabling scan-pattern
        analysis (integrates with Atlas).
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Proven where it matters",
    body: <>Battle-tested in military and government training, now brought to general aviation.</>,
  },
]

function Features() {
  const { ref, inView } = useInView(0.1)
  return (
    <section className="border-b border-border py-24 lg:py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <p className="text-xl md:text-2xl tracking-[0.25em] uppercase text-primary mb-5">Built to train</p>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05]">
            Specs that become skills.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`group p-8 border border-border bg-card hover:border-primary/50 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <f.icon size={32} className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-mono text-xl uppercase tracking-wide text-foreground mb-3">{f.title}</h3>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Headset tiers + Focal Edition sharpness toggle                      */
/* ------------------------------------------------------------------ */

function Tiers() {
  const [focal, setFocal] = useState(false)

  const tiers = [
    {
      name: "Varjo XR-4",
      badge: "Standard",
      img: "/images/varjo-headset.jpg",
      desc: "Included with every Blackstar Eclipse AATD.",
      highlight: false,
    },
    {
      name: "XR-4 Focal Edition",
      badge: "Upgrade",
      img: "/images/varjo-focal.jpg",
      desc: "Adds gaze-driven autofocus passthrough, keeping small instruments and chart text razor-sharp at any focal distance. Ideal for instrument-heavy, procedure-dense training.",
      highlight: true,
    },
  ]

  return (
    <section className="border-b border-border surface-gradient py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <p className="text-xl md:text-2xl tracking-[0.25em] uppercase text-primary mb-5">Two tiers</p>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight uppercase leading-[1.05]">
            Choose your edge.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Tier cards */}
          <div className="grid gap-6">
            {tiers.map((t) => (
              <Reveal key={t.name}>
                <div className={`overflow-hidden border bg-card ${t.highlight ? "border-primary" : "border-border"}`}>
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={t.img} alt={`${t.name} headset`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-mono text-2xl lg:text-3xl uppercase tracking-wide text-foreground">{t.name}</h3>
                      <span
                        className={`text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 border ${
                          t.highlight ? "border-primary text-primary" : "border-border text-muted-foreground"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sharpness toggle demo */}
          <Reveal delay={150}>
            <div className="border border-border bg-card p-6">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">
                Reading a small instrument
              </p>
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-border">
                <Image
                  src="/images/varjo-through-the-lens.jpg"
                  alt="A cockpit display read through the Varjo XR-4"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover scale-150 transition-all duration-500 ${
                    focal ? "blur-0" : "blur-[2.5px]"
                  }`}
                />
                <span className="absolute bottom-3 left-3 font-mono text-[11px] tracking-[0.25em] uppercase text-foreground/90 bg-background/70 backdrop-blur px-3 py-1 border border-border">
                  {focal ? "Focal Edition — sharp" : "Standard"}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFocal(false)}
                  className={`min-h-[44px] text-xs tracking-[0.2em] uppercase border transition-colors ${
                    !focal ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setFocal(true)}
                  className={`min-h-[44px] text-xs tracking-[0.2em] uppercase border transition-colors ${
                    focal ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  Focal Edition
                </button>
              </div>
              <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground/70 text-center">
                Illustrative of gaze-driven autofocus.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Closing CTA                                                         */
/* ------------------------------------------------------------------ */

function ClosingCta() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12">
      <div className="absolute inset-0 glow-orange pointer-events-none" aria-hidden />
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight uppercase leading-[1.0] mb-6">
          See it for yourself.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10">
          Book a consultation and we&rsquo;ll put you in the headset — and let&rsquo;s talk about how the Eclipse AATD
          fits your flight training program.
        </p>
        <BookButton className="mx-auto" />
      </Reveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function VirtualRealityFeature() {
  return (
    <>
      <Hero />
      <Immersion />
      <Stats />
      <Features />
      <Tiers />
      <ClosingCta />
    </>
  )
}
