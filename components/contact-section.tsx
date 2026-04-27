"use client"

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert(t('Thank you for your message! We will get back to you soon.', 'ನಿಮ್ಮ ಸಂದೇಶಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.'))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const services = [
    { value: 'photography', en: 'Photography', kn: 'ಛಾಯಾಗ್ರಹಣ' },
    { value: 'event', en: 'Event Management', kn: 'ಕಾರ್ಯಕ್ರಮ ನಿರ್ವಹಣೆ' },
    { value: 'design', en: 'Poster & Graphic Design', kn: 'ಪೋಸ್ಟರ್ ಮತ್ತು ಗ್ರಾಫಿಕ್ ವಿನ್ಯಾಸ' },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0f0c09] to-[#1a1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            {t('Get in Touch', 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ')}
          </h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl mx-auto">
            {t(
              'Let us help bring your vision to life',
              'ನಿಮ್ಮ ದೃಷ್ಟಿಕೋನವನ್ನು ಜೀವಂತಗೊಳಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಲಿ'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cream-glow bg-[#1a1410] rounded-2xl p-8 border border-[#f5f0e8]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[#f5f0e8]/80 text-sm mb-2">
                  {t('Your Name', 'ನಿಮ್ಮ ಹೆಸರು')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0f0c09] border border-[#f5f0e8]/20 rounded-lg text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:outline-none focus:border-[#f5f0e8]/50 transition-colors"
                  placeholder={t('Enter your name', 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[#f5f0e8]/80 text-sm mb-2">
                  {t('Email Address', 'ಇಮೇಲ್ ವಿಳಾಸ')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0f0c09] border border-[#f5f0e8]/20 rounded-lg text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:outline-none focus:border-[#f5f0e8]/50 transition-colors"
                  placeholder={t('Enter your email', 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ')}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-[#f5f0e8]/80 text-sm mb-2">
                  {t('Phone Number', 'ಫೋನ್ ಸಂಖ್ಯೆ')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0f0c09] border border-[#f5f0e8]/20 rounded-lg text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:outline-none focus:border-[#f5f0e8]/50 transition-colors"
                  placeholder={t('+91 98765 43210', '+91 98765 43210')}
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-[#f5f0e8]/80 text-sm mb-2">
                  {t('Service Required', 'ಅಗತ್ಯವಿರುವ ಸೇವೆ')} *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0f0c09] border border-[#f5f0e8]/20 rounded-lg text-[#f5f0e8] focus:outline-none focus:border-[#f5f0e8]/50 transition-colors"
                >
                  <option value="">{t('Select a service', 'ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ')}</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {t(service.en, service.kn)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#f5f0e8]/80 text-sm mb-2">
                  {t('Your Message', 'ನಿಮ್ಮ ಸಂದೇಶ')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0f0c09] border border-[#f5f0e8]/20 rounded-lg text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:outline-none focus:border-[#f5f0e8]/50 transition-colors resize-none"
                  placeholder={t('Tell us about your requirements...', 'ನಿಮ್ಮ ಅವಶ್ಯಕತೆಗಳ ಬಗ್ಗೆ ನಮಗೆ ತಿಳಿಸಿ...')}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#f5f0e8] text-[#0f0c09] hover:bg-[#f5f0e8]/90 py-6 rounded-full text-lg font-medium"
              >
                <Send className="w-5 h-5 mr-2" />
                {t('Send Message', 'ಸಂದೇಶ ಕಳುಹಿಸಿ')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="cream-glow flex items-center gap-4 bg-[#1a1410] rounded-xl p-6 border border-[#f5f0e8]/10 hover:border-[#f5f0e8]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#e53935]/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#e53935]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8]/70 text-sm">{t('Call Us', 'ನಮಗೆ ಕರೆ ಮಾಡಿ')}</p>
                  <p className="text-[#f5f0e8] font-medium">+91 98765 43210</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@chitroona.in"
                className="cream-glow flex items-center gap-4 bg-[#1a1410] rounded-xl p-6 border border-[#f5f0e8]/10 hover:border-[#f5f0e8]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdd835]/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#fdd835]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8]/70 text-sm">{t('Email Us', 'ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ')}</p>
                  <p className="text-[#f5f0e8] font-medium">hello@chitroona.in</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/chitroona.in"
                target="_blank"
                rel="noopener noreferrer"
                className="cream-glow flex items-center gap-4 bg-[#1a1410] rounded-xl p-6 border border-[#f5f0e8]/10 hover:border-[#f5f0e8]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#E4405F]/20 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-[#E4405F]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8]/70 text-sm">{t('Follow Us', 'ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ')}</p>
                  <p className="text-[#f5f0e8] font-medium">@chitroona.in</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  language === 'en'
                    ? 'Hi! I am interested in your services.'
                    : 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಸೇವೆಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cream-glow flex items-center gap-4 bg-[#25D366]/10 rounded-xl p-6 border border-[#25D366]/30 hover:border-[#25D366]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8]/70 text-sm">{t('Chat on WhatsApp', 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ')}</p>
                  <p className="text-[#25D366] font-medium">{t('Quick Response', 'ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ')}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
