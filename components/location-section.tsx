"use client"

import { useLanguage } from '@/contexts/language-context'
import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LocationSection() {
  const { t } = useLanguage()

  const addressEn = `Chitroona Creative Studio
123, MG Road, Near City Center
Bengaluru, Karnataka 560001
India`

  const addressKn = `ಚಿತ್ರೂಣ ಕ್ರಿಯೇಟಿವ್ ಸ್ಟುಡಿಯೋ
123, ಎಂಜಿ ರಸ್ತೆ, ಸಿಟಿ ಸೆಂಟರ್ ಬಳಿ
ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560001
ಭಾರತ`

  const googleMapsLink = 'https://www.google.com/maps/search/?api=1&query=Bengaluru+MG+Road'

  return (
    <section id="location" className="py-24 bg-[#1a1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            {t('Find Us', 'ನಮ್ಮನ್ನು ಹುಡುಕಿ')}
          </h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl mx-auto">
            {t(
              'Visit our studio for a personal consultation',
              'ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಗಾಗಿ ನಮ್ಮ ಸ್ಟುಡಿಯೋಗೆ ಭೇಟಿ ನೀಡಿ'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="cream-glow rounded-2xl overflow-hidden border border-[#f5f0e8]/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0544553158584!2d77.60650631482135!3d12.970458190854955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x7f52d2c3e4b4c1!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>

          {/* Address Card */}
          <div className="cream-glow bg-[#0f0c09] rounded-2xl p-8 border border-[#f5f0e8]/10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#e53935]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#e53935]" />
              </div>
              <div>
                <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-[#f5f0e8] mb-4">
                  {t('Our Office', 'ನಮ್ಮ ಕಚೇರಿ')}
                </h3>
                <address className="text-[#f5f0e8]/80 not-italic whitespace-pre-line leading-relaxed">
                  {t(addressEn, addressKn)}
                </address>
              </div>
            </div>

            {/* Working Hours */}
            <div className="border-t border-[#f5f0e8]/10 pt-8 mb-8">
              <h4 className="text-[#f5f0e8] font-medium mb-4">
                {t('Working Hours', 'ಕೆಲಸದ ಸಮಯ')}
              </h4>
              <div className="space-y-2 text-[#f5f0e8]/70">
                <p className="flex justify-between">
                  <span>{t('Monday - Saturday', 'ಸೋಮವಾರ - ಶನಿವಾರ')}</span>
                  <span>10:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>{t('Sunday', 'ಭಾನುವಾರ')}</span>
                  <span>{t('By Appointment', 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮೂಲಕ')}</span>
                </p>
              </div>
            </div>

            {/* Get Directions Button */}
            <Button
              asChild
              className="w-full bg-[#f5f0e8] text-[#0f0c09] hover:bg-[#f5f0e8]/90 py-6 rounded-full text-lg font-medium"
            >
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                {t('Get Directions', 'ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಿರಿ')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
