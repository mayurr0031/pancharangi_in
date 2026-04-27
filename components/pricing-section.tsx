"use client"

import { useLanguage } from '@/contexts/language-context'
import { Check, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const packages = [
  {
    nameEn: 'Basic',
    nameKn: 'ಬೇಸಿಕ್',
    price: '15,000',
    popular: false,
    featuresEn: [
      '4 Hours Coverage',
      '100 Edited Photos',
      'Digital Delivery',
      'Basic Retouching',
      '1 Photographer',
    ],
    featuresKn: [
      '4 ಗಂಟೆಗಳ ಕವರೇಜ್',
      '100 ಸಂಪಾದಿತ ಫೋಟೋಗಳು',
      'ಡಿಜಿಟಲ್ ವಿತರಣೆ',
      'ಮೂಲ ರಿಟಚಿಂಗ್',
      '1 ಛಾಯಾಗ್ರಾಹಕ',
    ],
  },
  {
    nameEn: 'Standard',
    nameKn: 'ಸ್ಟ್ಯಾಂಡರ್ಡ್',
    price: '35,000',
    popular: true,
    featuresEn: [
      '8 Hours Coverage',
      '300 Edited Photos',
      'Digital + Album Delivery',
      'Advanced Retouching',
      '2 Photographers',
      'Drone Coverage',
      'Pre-wedding Shoot',
    ],
    featuresKn: [
      '8 ಗಂಟೆಗಳ ಕವರೇಜ್',
      '300 ಸಂಪಾದಿತ ಫೋಟೋಗಳು',
      'ಡಿಜಿಟಲ್ + ಆಲ್ಬಮ್ ವಿತರಣೆ',
      'ಸುಧಾರಿತ ರಿಟಚಿಂಗ್',
      '2 ಛಾಯಾಗ್ರಾಹಕರು',
      'ಡ್ರೋನ್ ಕವರೇಜ್',
      'ಮದುವೆಗೆ ಮುಂಚಿನ ಶೂಟ್',
    ],
  },
  {
    nameEn: 'Premium',
    nameKn: 'ಪ್ರೀಮಿಯಂ',
    price: '75,000',
    popular: false,
    featuresEn: [
      'Full Day Coverage',
      'Unlimited Photos',
      'Premium Album + Frames',
      'Cinematic Video',
      '3 Photographers',
      'Drone + Gimbal',
      'Pre-wedding + Post-wedding',
      'Same Day Edit Teaser',
    ],
    featuresKn: [
      'ಪೂರ್ಣ ದಿನದ ಕವರೇಜ್',
      'ಅನಿಯಮಿತ ಫೋಟೋಗಳು',
      'ಪ್ರೀಮಿಯಂ ಆಲ್ಬಮ್ + ಫ್ರೇಮ್‌ಗಳು',
      'ಸಿನಿಮಾಟಿಕ್ ವೀಡಿಯೊ',
      '3 ಛಾಯಾಗ್ರಾಹಕರು',
      'ಡ್ರೋನ್ + ಗಿಂಬಲ್',
      'ಮದುವೆಗೆ ಮುಂಚಿನ + ನಂತರದ',
      'ಅದೇ ದಿನದ ಎಡಿಟ್ ಟೀಸರ್',
    ],
  },
]

export function PricingSection() {
  const { t, language } = useLanguage()

  const whatsappMessage = encodeURIComponent(
    language === 'en'
      ? 'Hi! I am interested in your photography services. Please share more details.'
      : 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಛಾಯಾಗ್ರಹಣ ಸೇವೆಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.'
  )

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#1a1410] to-[#0f0c09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            {t('Our Packages', 'ನಮ್ಮ ಪ್ಯಾಕೇಜ್‌ಗಳು')}
          </h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl mx-auto">
            {t(
              'Choose the perfect package for your special moments',
              'ನಿಮ್ಮ ವಿಶೇಷ ಕ್ಷಣಗಳಿಗೆ ಪರಿಪೂರ್ಣ ಪ್ಯಾಕೇಜ್ ಆಯ್ಕೆಮಾಡಿ'
            )}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.nameEn}
              className={`relative cream-glow bg-[#1a1410] rounded-2xl p-8 border transition-all duration-300 ${
                pkg.popular
                  ? 'border-[#f5f0e8]/50 scale-105 md:scale-110'
                  : 'border-[#f5f0e8]/10 hover:border-[#f5f0e8]/30'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#f5f0e8] text-[#0f0c09] px-4 py-1 rounded-full text-sm font-medium">
                    {t('Most Popular', 'ಅತ್ಯಂತ ಜನಪ್ರಿಯ')}
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-[#f5f0e8] mb-2 text-center">
                {t(pkg.nameEn, pkg.nameKn)}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-[#f5f0e8]">₹{pkg.price}</span>
                <span className="text-[#f5f0e8]/70 text-sm block mt-1">
                  {t('Starting from', 'ಆರಂಭಿಕ ಬೆಲೆ')}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {(language === 'en' ? pkg.featuresEn : pkg.featuresKn).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#43a047] shrink-0 mt-0.5" />
                    <span className="text-[#f5f0e8]/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <Button
                asChild
                className={`w-full rounded-full py-6 ${
                  pkg.popular
                    ? 'bg-[#f5f0e8] text-[#0f0c09] hover:bg-[#f5f0e8]/90'
                    : 'bg-transparent border border-[#f5f0e8]/30 text-[#f5f0e8] hover:bg-[#f5f0e8]/10'
                }`}
              >
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('WhatsApp Us', 'ವಾಟ್ಸಾಪ್ ಮಾಡಿ')}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[#f5f0e8]/50 text-sm mt-12">
          {t(
            '* Prices may vary based on location and specific requirements',
            '* ಸ್ಥಳ ಮತ್ತು ನಿರ್ದಿಷ್ಟ ಅವಶ್ಯಕತೆಗಳ ಆಧಾರದ ಮೇಲೆ ಬೆಲೆಗಳು ಬದಲಾಗಬಹುದು'
          )}
        </p>
      </div>
    </section>
  )
}
