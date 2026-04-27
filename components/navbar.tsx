"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', en: 'Home', kn: 'ಮುಖಪುಟ' },
    { href: '#services', en: 'Services', kn: 'ಸೇವೆಗಳು' },
    { href: '#gallery', en: 'Gallery', kn: 'ಗ್ಯಾಲರಿ' },
    { href: '#pricing', en: 'Pricing', kn: 'ಬೆಲೆ' },
    { href: '#team', en: 'Team', kn: 'ತಂಡ' },
    { href: '#contact', en: 'Contact', kn: 'ಸಂಪರ್ಕ' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f0c09]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#f5f0e8]">
              <Image
                src="/logo.jpeg"
                alt="ಚಿತ್ರೂಣ.in Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-[var(--font-noto-serif-kannada)] text-xl font-semibold text-[#f5f0e8] hidden sm:block">
              ಚಿತ್ರೂಣ.in
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#f5f0e8]/80 hover:text-[#f5f0e8] transition-colors text-sm font-medium"
              >
                {t(link.en, link.kn)}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm font-medium hover:bg-[#f5f0e8]/10 transition-colors"
            >
              {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
            </button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#f5f0e8]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1410] rounded-lg mb-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[#f5f0e8]/80 hover:text-[#f5f0e8] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.en, link.kn)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
