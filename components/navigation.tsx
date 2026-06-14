"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { BookButton } from "@/components/calendly"

const navLinks = [
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Atlas", href: "/#atlas" },
  { label: "Components", href: "/#ecosystem" },
  { label: "Eclipse AATD", href: "/#hardware" },
  { label: "Timeline", href: "/timeline" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex flex-col" onClick={() => setMenuOpen(false)}>
          <span className="font-mono text-2xl lg:text-3xl tracking-[0.25em] text-foreground uppercase leading-none">Blackstar</span>
          <span className="text-xs lg:text-sm tracking-[0.3em] uppercase text-primary mt-1">Flight Simulations</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base xl:text-lg tracking-[0.12em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <BookButton className="px-6 py-2.5 min-h-[44px] text-sm" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center h-11 w-11 -mr-2 text-foreground"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3.5 text-lg tracking-[0.16em] uppercase text-foreground/90 hover:text-primary transition-colors border-b border-border/60"
              >
                {link.label}
              </Link>
            ))}
            <BookButton className="mt-5 w-full" />
          </div>
        </div>
      )}
    </header>
  )
}
