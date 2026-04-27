"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: '#home', en: 'Home', kn: 'ಮುಖಪುಟ' },
    { href: '#services', en: 'Services', kn: 'ಸೇವೆಗಳು' },
    { href: '#gallery', en: 'Gallery', kn: 'ಗ್ಯಾಲರಿ' },
    { href: '#pricing', en: 'Pricing', kn: 'ಬೆಲೆ' },
    { href: '#team', en: 'Team', kn: 'ತಂಡ' },
    { href: '#contact', en: 'Contact', kn: 'ಸಂಪರ್ಕ' },
  ]

  const socialLinks = [
    { href: 'https://instagram.com/chitroona.in', icon: Instagram, label: 'Instagram', color: '#E4405F' },
    { href: 'https://facebook.com/chitroona.in', icon: Facebook, label: 'Facebook', color: '#1877F2' },
    { href: 'https://youtube.com/@chitroona', icon: Youtube, label: 'YouTube', color: '#FF0000' },
    { href: 'https://wa.me/919876543210', icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
  ]

  return (
    <footer className="bg-[#0f0c09] border-t border-[#f5f0e8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#f5f0e8]">
                <Image
                  src="/logo.jpeg"
                  alt="ಚಿತ್ರೂಣ.in Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-[var(--font-noto-serif-kannada)] text-xl font-semibold text-[#f5f0e8]">
                ಚಿತ್ರೂಣ.in
              </span>
            </Link>
            <p className="text-[#f5f0e8]/70 leading-relaxed">
              {t(
                'Capturing your precious moments with artistic excellence. Your trusted partner for photography, events, and design in Karnataka.',
                'ಕಲಾತ್ಮಕ ಉತ್ಕೃಷ್ಟತೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಅಮೂಲ್ಯ ಕ್ಷಣಗಳನ್ನು ಸೆರೆಹಿಡಿಯುತ್ತೇವೆ. ಕರ್ನಾಟಕದಲ್ಲಿ ಛಾಯಾಗ್ರಹಣ, ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ವಿನ್ಯಾಸಕ್ಕಾಗಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-[#f5f0e8] mb-6">
              {t('Quick Links', 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#f5f0e8]/70 hover:text-[#f5f0e8] transition-colors"
                  >
                    {t(link.en, link.kn)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-[#f5f0e8] mb-6">
              {t('Follow Us', 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ')}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1a1410] flex items-center justify-center text-[#f5f0e8]/70 hover:text-white transition-all hover:scale-110"
                  style={{ '--hover-color': social.color } as React.CSSProperties}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Shutter accent */}
            <div className="mt-8 flex gap-2">
              <div className="w-8 h-1 rounded-full bg-[#e53935]" />
              <div className="w-8 h-1 rounded-full bg-[#fdd835]" />
              <div className="w-8 h-1 rounded-full bg-[#43a047]" />
              <div className="w-8 h-1 rounded-full bg-[#1e88e5]" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#f5f0e8]/10 mt-12 pt-8 text-center">
          <p className="text-[#f5f0e8]/50 text-sm">
            {t(
              '© 2025 ಚಿತ್ರೂಣ.in — All Rights Reserved',
              '© 2025 ಚಿತ್ರೂಣ.in — ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ'
            )}
          </p>
        </div>
      </div>
    </footer>
  )
}
