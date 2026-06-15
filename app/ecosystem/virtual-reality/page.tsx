import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { VirtualRealityFeature } from "@/components/ecosystem/virtual-reality-feature"

export const metadata = {
  title: "Virtual Reality — Varjo XR-4 | BLACKSTAR",
  description:
    "The Blackstar Eclipse AATD is built around the Varjo XR-4 — the mixed-reality headset trusted by militaries and governments worldwide, now bringing dome-level immersion to flight training.",
}

export default function VirtualRealityPage() {
  return (
    <main>
      <Navigation />
      <VirtualRealityFeature />
      <SiteFooter />
    </main>
  )
}
