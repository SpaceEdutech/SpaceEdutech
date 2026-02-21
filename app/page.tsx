import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import { PartnersSection } from "@/components/partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProgramsSection } from "@/components/programs-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />

        {/* ✅ Gallery Added Here */}
        <GallerySection />

        <PartnersSection />
        <TestimonialsSection />
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  )
}