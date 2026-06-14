import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TheShiftSection } from "@/components/the-shift-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { PlatformsSection } from "@/components/platforms-section"
import { AtlasSection } from "@/components/atlas-section"
import { HardwareSection } from "@/components/hardware-section"
import { ClosingCta } from "@/components/closing-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <TheShiftSection />
      <EcosystemSection />
      <PlatformsSection />
      <AtlasSection />
      <HardwareSection />
      <ClosingCta />
      <SiteFooter />
    </main>
  )
}
