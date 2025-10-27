import GeometricNavigation from "@/components/geometric-navigation"
import FluidHeroSection from "@/components/scroll-sections/fluid-hero-section"
import AboutScrollSection from "@/components/scroll-sections/about-scroll-section"
import StackScrollSection from "@/components/scroll-sections/stack-scroll-section"
import ExperienceScrollSection from "@/components/scroll-sections/experience-scroll-section"
import ContactScrollSection from "@/components/scroll-sections/contact-scroll-section"
import SectionDivider from "@/components/ui/section-divider"

export default function Home() {
  return (
    <main className="relative bg-[#030303]">
      <GeometricNavigation />
      <FluidHeroSection />
      <SectionDivider />
      <AboutScrollSection />
      <SectionDivider />
      <StackScrollSection />
      <SectionDivider />
      <ExperienceScrollSection />
      <SectionDivider />
      <ContactScrollSection />
    </main>
  )
}