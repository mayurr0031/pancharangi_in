"use client"

import { useLanguage } from '@/contexts/language-context'
import { Camera, PartyPopper, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Camera,
    titleEn: 'Photography',
    titleKn: 'ಛಾಯಾಗ್ರಹಣ',
    descEn: 'Professional wedding, portrait, and event photography that captures your most precious moments with artistic excellence.',
    descKn: 'ವೃತ್ತಿಪರ ಮದುವೆ, ಭಾವಚಿತ್ರ ಮತ್ತು ಈವೆಂಟ್ ಛಾಯಾಗ್ರಹಣವು ನಿಮ್ಮ ಅತ್ಯಮೂಲ್ಯ ಕ್ಷಣಗಳನ್ನು ಕಲಾತ್ಮಕ ಉತ್ಕೃಷ್ಟತೆಯೊಂದಿಗೆ ಸೆರೆಹಿಡಿಯುತ್ತದೆ.',
    color: '#e53935',
  },
  {
    icon: PartyPopper,
    titleEn: 'Event Management',
    titleKn: 'ಕಾರ್ಯಕ್ರಮ ನಿರ್ವಹಣೆ',
    descEn: 'Complete event planning, stunning decor, and seamless coordination to make your special occasions truly unforgettable.',
    descKn: 'ಸಂಪೂರ್ಣ ಈವೆಂಟ್ ಯೋಜನೆ, ಅದ್ಭುತ ಅಲಂಕಾರ ಮತ್ತು ನಿರಾತಂಕ ಸಮನ್ವಯವು ನಿಮ್ಮ ವಿಶೇಷ ಸಂದರ್ಭಗಳನ್ನು ನಿಜವಾಗಿಯೂ ಮರೆಯಲಾಗದಂತೆ ಮಾಡುತ್ತದೆ.',
    color: '#fdd835',
  },
  {
    icon: Palette,
    titleEn: 'Poster & Graphic Design',
    titleKn: 'ಪೋಸ್ಟರ್ ಮತ್ತು ಗ್ರಾಫಿಕ್ ವಿನ್ಯಾಸ',
    descEn: 'Creative branding, elegant invitations, and eye-catching banners that communicate your message with visual impact.',
    descKn: 'ಸೃಜನಾತ್ಮಕ ಬ್ರ್ಯಾಂಡಿಂಗ್, ಸೊಗಸಾದ ಆಹ್ವಾನ ಪತ್ರಿಕೆಗಳು ಮತ್ತು ಕಣ್ಣು ಸೆಳೆಯುವ ಬ್ಯಾನರ್‌ಗಳು ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ದೃಶ್ಯ ಪ್ರಭಾವದೊಂದಿಗೆ ತಿಳಿಸುತ್ತವೆ.',
    color: '#43a047',
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0f0c09] to-[#1a1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            {t('Our Services', 'ನಮ್ಮ ಸೇವೆಗಳು')}
          </h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl mx-auto">
            {t(
              'Bringing your vision to life with creativity and precision',
              'ಸೃಜನಶೀಲತೆ ಮತ್ತು ನಿಖರತೆಯೊಂದಿಗೆ ನಿಮ್ಮ ದೃಷ್ಟಿಕೋನವನ್ನು ಜೀವಂತಗೊಳಿಸುತ್ತೇವೆ'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.titleEn}
              className="group cream-glow bg-[#1a1410] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#f5f0e8]/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon className="w-8 h-8" style={{ color: service.color }} />
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-[#f5f0e8] mb-3">
                {t(service.titleEn, service.titleKn)}
              </h3>

              {/* Description */}
              <p className="text-[#f5f0e8]/70 mb-6 leading-relaxed">
                {t(service.descEn, service.descKn)}
              </p>

              {/* CTA Button */}
              <Button
                asChild
                variant="outline"
                className="border-[#f5f0e8]/30 text-[#f5f0e8] hover:bg-[#f5f0e8]/10 rounded-full"
              >
                <a href="#contact">{t('Contact Us', 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ')}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
