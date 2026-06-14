"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Calendly "Blackstar Consultation" event. Theming params match the site
 * (near-black background, light text, orange accent) so the widget feels native.
 */
// Branded Blackstar Flight Simulations team event (round-robin). Calendar-only
// (hide_event_type_details) to keep the org-level Community Aviation logo out of
// the embed. Calendly renders this as a fixed-width column, so the wrapper
// scales it up to fill the booking card.
const BASE_URL = "https://calendly.com/blackstar-flight/consultation"
export const CALENDLY_URL =
  `${BASE_URL}?hide_gdpr_banner=1&hide_event_type_details=1&background_color=0a0a0a&text_color=e8e4de&primary_color=ff4f00`

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

let calendlyPromise: Promise<void> | null = null

/** Inject the Calendly script + stylesheet once, shared across all callers. */
function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.Calendly) return Promise.resolve()
  if (calendlyPromise) return calendlyPromise

  calendlyPromise = new Promise<void>((resolve, reject) => {
    if (!document.querySelector("link[data-calendly]")) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      link.dataset.calendly = "true"
      document.head.appendChild(link)
    }
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load Calendly"))
    document.body.appendChild(script)
  })
  return calendlyPromise
}

type BookButtonProps = {
  children?: React.ReactNode
  className?: string
  variant?: "primary" | "outline"
}

/**
 * "Book a Consultation" button. Opens the Calendly event in a branded popup
 * modal; if the widget can't load, falls back to opening the booking page.
 */
export function BookButton({ children = "Book a Consultation", className, variant = "primary" }: BookButtonProps) {
  const base =
    "inline-flex items-center justify-center text-center min-h-[48px] px-8 py-3.5 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground",
  }

  const open = () => {
    loadCalendly()
      .then(() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL }))
      // If the popup widget can't load, scroll to the inline embed rather than
      // linking out to an external Calendly booking page.
      .catch(() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" }))
  }

  return (
    <button type="button" onClick={open} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  )
}

/** Inline Calendly embed, framed by the surrounding Blackstar branding. */
export function CalendlyInline({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadCalendly()
      .then(() => {
        if (cancelled || !ref.current) return
        ref.current.innerHTML = ""
        window.Calendly?.initInlineWidget({ url: CALENDLY_URL, parentElement: ref.current })
      })
      .catch(() => !cancelled && setFailed(true))
    return () => {
      cancelled = true
    }
  }, [])

  if (failed) {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
          Open the booking page
        </a>
      </div>
    )
  }

  // Calendly's calendar-only embed renders at a fixed ~470px width, so widening
  // the box only adds empty space. We instead give it that natural width and
  // scale it up on larger screens to fill the card. A *definite* height is also
  // required — Calendly's iframe is height:100%, which would otherwise collapse
  // to the 150px HTML default.
  return (
    <div className={cn("flex justify-center overflow-hidden", className)}>
      <div
        ref={ref}
        className="w-[470px] max-w-full h-[600px] sm:h-[500px] sm:[zoom:1.4]"
        aria-label="Book a consultation"
      />
    </div>
  )
}
