import Link from "next/link"

const footerLinks = {
  Connect: ["Contact", "Support"],
}

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-[10px] pb-12">
        <div className="flex flex-col">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="font-mono text-base tracking-[0.3em] text-foreground uppercase">
              Blackstar
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-primary">
              Flight Simulations
            </span>
          </div>
          
          {/* Connect Links */}
          <div className="flex items-center gap-4 mt-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-foreground">Connect:</span>
            {footerLinks.Connect.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            {"2026 BLACKSTAR Flight Simulations. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
