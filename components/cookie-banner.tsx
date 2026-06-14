"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("blackstar-cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("blackstar-cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("blackstar-cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-card border-t border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to enhance your browsing experience and analyze site traffic.{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="text-xs tracking-[0.2em] uppercase border border-foreground/20 text-foreground px-6 py-2.5 hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-2.5 hover:bg-primary/90 transition-all duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
