import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "PREPAR3D | BLACKSTAR Flight Simulation",
  description: "Professional-grade flight simulation powered by Lockheed Martin's PREPAR3D platform.",
}

const features = [
  {
    title: "Military-Grade Fidelity",
    description: "Built on Lockheed Martin's simulation technology used by military and commercial aviation training programs worldwide.",
  },
  {
    title: "Dynamic Weather System",
    description: "Real-time weather integration with accurate atmospheric modeling, turbulence, and visibility conditions.",
  },
  {
    title: "Global Scenery",
    description: "High-resolution terrain and airport data covering the entire planet with stunning visual detail.",
  },
  {
    title: "Aircraft Systems",
    description: "Fully functional cockpit systems, flight dynamics, and failure modeling for authentic training scenarios.",
  },
  {
    title: "Multi-Monitor Support",
    description: "Native support for wrap-around displays, projector systems, and VR headsets.",
  },
  {
    title: "Developer SDK",
    description: "Extensive API for custom aircraft, scenery, and training scenario development.",
  },
]

const specs = [
  { label: "Platform", value: "Lockheed Martin PREPAR3D v5" },
  { label: "Resolution", value: "Up to 8K per display" },
  { label: "Frame Rate", value: "90+ FPS native" },
  { label: "Latency", value: "< 4ms input lag" },
  { label: "FOV Support", value: "Up to 220 degrees" },
  { label: "Motion Axes", value: "6-DOF compatible" },
]

export default function Prepar3dPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/prepar3d.jpg"
            alt="PREPAR3D flight simulation cockpit"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Professional Simulation Platform
          </p>
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl text-foreground uppercase tracking-tight mb-6">
            PREPAR3D
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Powered by Lockheed Martin's world-renowned simulation technology. 
            The same platform trusted by military and commercial aviation professionals.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Capabilities
            </p>
            <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase tracking-tight">
              Platform Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="border border-border p-8 bg-card hover:border-primary/30 transition-colors duration-300"
              >
                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                  0{index + 1}
                </p>
                <h3 className="font-mono text-lg text-foreground uppercase tracking-wide mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 px-6 lg:px-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Technical
            </p>
            <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase tracking-tight">
              Specifications
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {specs.map((spec) => (
              <div key={spec.label}>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {spec.label}
                </p>
                <p className="font-mono text-lg text-foreground">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-6">
            Ready to Experience PREPAR3D?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contact us to schedule a demo session and experience professional-grade 
            flight simulation firsthand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#models"
              className="text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-3.5 hover:bg-primary/90 transition-all duration-300"
            >
              Back to Platforms
            </Link>
            <Link
              href="/xplane"
              className="text-xs tracking-[0.25em] uppercase border border-foreground/20 text-foreground px-10 py-3.5 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              View X-PLANE
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
