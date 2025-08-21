import GeometricNavigation from "@/components/geometric-navigation"
import HeroScrollSection from "@/components/scroll-sections/hero-scroll-section"
import ServicesScrollSection from "@/components/scroll-sections/services-scroll-section"
import AboutScrollSection from "@/components/scroll-sections/about-scroll-section"
import ContactScrollSection from "@/components/scroll-sections/contact-scroll-section"
import SectionDivider from "@/components/ui/section-divider"

export default function Home() {
  return (
    <main className="relative bg-[#030303]">
      <GeometricNavigation />
      <HeroScrollSection />
      <SectionDivider />
      <ServicesScrollSection />
      <SectionDivider />
      <AboutScrollSection />
      <SectionDivider />
      <ContactScrollSection />
    </main>
  )
}