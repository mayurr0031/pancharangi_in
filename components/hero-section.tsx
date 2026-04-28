"use client"

import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c09] via-[#1a1410] to-[#0f0c09]" />
      
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/80 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#f5f0e8]/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#e53935]/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="animate-fade-in-up mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden bg-[#f5f0e8] shadow-2xl">
            <Image
              src="/logo.jpeg"
              alt="ಪಂಚರಂಗಿ.in Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up delay-100 font-[var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5f0e8] mb-6 text-balance">
          {t(
            'We Capture Moments, Create Memories',
            'ನಾವು ಕ್ಷಣಗಳನ್ನು ಸೆರೆಹಿಡಿಯುತ್ತೇವೆ, ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ'
          )}
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-[#f5f0e8]/70 max-w-2xl mx-auto mb-10">
          {t(
            'Photography • Event Management • Graphic Design',
            'ಛಾಯಾಗ್ರಹಣ • ಕಾರ್ಯಕ್ರಮ ನಿರ್ವಹಣೆ • ಗ್ರಾಫಿಕ್ ವಿನ್ಯಾಸ'
          )}
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-[#f5f0e8] text-[#0f0c09] hover:bg-[#f5f0e8]/90 px-8 py-6 text-lg font-medium rounded-full"
          >
            <a href="#gallery">{t('View Our Work', 'ನಮ್ಮ ಕೆಲಸ ನೋಡಿ')}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#f5f0e8]/30 text-[#f5f0e8] hover:bg-[#f5f0e8]/10 px-8 py-6 text-lg font-medium rounded-full"
          >
            <a href="#contact">{t('Contact Us', 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ')}</a>
          </Button>
        </div>

        {/* Shutter color accent line */}
        <div className="animate-fade-in-up delay-400 mt-16 flex justify-center gap-2">
          <div className="w-12 h-1 rounded-full bg-[#e53935]" />
          <div className="w-12 h-1 rounded-full bg-[#fdd835]" />
          <div className="w-12 h-1 rounded-full bg-[#43a047]" />
          <div className="w-12 h-1 rounded-full bg-[#1e88e5]" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#f5f0e8]/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-[#f5f0e8]/50" />
        </div>
      </div>
    </section>
  )
}
