import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PerformanceSection } from "@/components/performance-section"
import { InstructorSection } from "@/components/instructor-section"
import { ModelsSection } from "@/components/models-section"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <PerformanceSection />
      <InstructorSection />
      <ModelsSection />
      <CraftsmanshipSection />
      <SiteFooter />
    </main>
  )
}
