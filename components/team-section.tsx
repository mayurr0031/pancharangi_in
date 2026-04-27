"use client"

import { useLanguage } from '@/contexts/language-context'
import { Phone, MessageCircle, Instagram } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    nameEn: 'Raghavendra Kumar',
    nameKn: 'ರಾಘವೇಂದ್ರ ಕುಮಾರ್',
    roleEn: 'Lead Photographer',
    roleKn: 'ಪ್ರಮುಖ ಛಾಯಾಗ್ರಾಹಕ',
    phone: '+919876543210',
    instagram: 'raghav_clicks',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    nameEn: 'Priya Sharma',
    nameKn: 'ಪ್ರಿಯಾ ಶರ್ಮಾ',
    roleEn: 'Event Manager',
    roleKn: 'ಈವೆಂಟ್ ಮ್ಯಾನೇಜರ್',
    phone: '+919876543211',
    instagram: 'priya_events',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    nameEn: 'Suresh Gowda',
    nameKn: 'ಸುರೇಶ್ ಗೌಡ',
    roleEn: 'Graphic Designer',
    roleKn: 'ಗ್ರಾಫಿಕ್ ಡಿಸೈನರ್',
    phone: '+919876543212',
    instagram: 'suresh_designs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
]

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="team" className="py-24 bg-[#0f0c09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            {t('Meet Our Team', 'ನಮ್ಮ ತಂಡ')}
          </h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl mx-auto">
            {t(
              'The creative minds behind your perfect moments',
              'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಕ್ಷಣಗಳ ಹಿಂದಿನ ಸೃಜನಶೀಲ ಮನಸ್ಸುಗಳು'
            )}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.nameEn}
              className="group cream-glow bg-[#1a1410] rounded-2xl p-8 border border-[#f5f0e8]/10 hover:border-[#f5f0e8]/30 transition-all duration-300 text-center"
            >
              {/* Profile Photo */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[#f5f0e8]/20 group-hover:ring-[#f5f0e8]/40 transition-all">
                <Image
                  src={member.image}
                  alt={member.nameEn}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-[#f5f0e8] mb-1">
                {t(member.nameEn, member.nameKn)}
              </h3>

              {/* Role */}
              <p className="text-[#f5f0e8]/70 mb-6">
                {t(member.roleEn, member.roleKn)}
              </p>

              {/* Contact Links */}
              <div className="flex items-center justify-center gap-4">
                {/* Phone */}
                <a
                  href={`tel:${member.phone}`}
                  className="w-10 h-10 rounded-full bg-[#f5f0e8]/10 flex items-center justify-center text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#0f0c09] transition-colors"
                  title={t('Call', 'ಕರೆ ಮಾಡಿ')}
                >
                  <Phone className="w-5 h-5" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${member.phone.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#E4405F]/20 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
