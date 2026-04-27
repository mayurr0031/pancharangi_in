"use client"

import { LanguageProvider } from '@/contexts/language-context'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { GallerySection } from '@/components/gallery-section'
import { PricingSection } from '@/components/pricing-section'
import { TeamSection } from '@/components/team-section'
import { ContactSection } from '@/components/contact-section'
import { LocationSection } from '@/components/location-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#0f0c09]">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <PricingSection />
        <TeamSection />
        <ContactSection />
        <LocationSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
