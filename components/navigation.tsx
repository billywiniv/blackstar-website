"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Simulators", href: "/#models" },
  { label: "Performance", href: "/#performance" },
  { label: "Engineering", href: "/#craftsmanship" },
  { label: "Timeline", href: "/timeline" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 lg:px-12">
        <Link 
          href="/" 
          className="flex flex-col"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-mono text-lg tracking-[0.3em] text-foreground uppercase">
            Blackstar
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-primary">
            Flight Simulations
          </span>
        </Link>

        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
