import Link from "next/link"
import { BookButton } from "@/components/calendly"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="font-mono text-lg tracking-[0.3em] text-foreground uppercase">Blackstar</span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-primary mb-4">Flight Simulation</span>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The connected hub of a complete flight-training ecosystem.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] tracking-[0.3em] uppercase text-foreground">Connect</span>
            <BookButton className="px-6 py-2.5 min-h-[44px] text-xs">Contact</BookButton>
            <BookButton variant="outline" className="px-6 py-2.5 min-h-[44px] text-xs">Support</BookButton>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            2026 Blackstar Flight Simulation. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
