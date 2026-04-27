"use client"

import { useLanguage } from '@/contexts/language-context'
import { Instagram, Heart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Placeholder gallery items - replace with actual Instagram feed integration
const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop',
    likes: 234,
    alt: 'Wedding photography',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop',
    likes: 189,
    alt: 'Event decoration',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=600&fit=crop',
    likes: 312,
    alt: 'Portrait session',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop',
    likes: 456,
    alt: 'Wedding ceremony',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=600&fit=crop',
    likes: 278,
    alt: 'Event setup',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop',
    likes: 345,
    alt: 'Candid photography',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop',
    likes: 198,
    alt: 'Poster design showcase',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop',
    likes: 267,
    alt: 'Pre-wedding shoot',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=600&fit=crop',
    likes: 423,
    alt: 'Traditional ceremony',
  },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="py-24 bg-[#0f0c09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            {t('Our Work', 'ನಮ್ಮ ಕೆಲಸ')}
          </h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl mx-auto">
            {t(
              'A glimpse into our creative journey',
              'ನಮ್ಮ ಸೃಜನಾತ್ಮಕ ಪ್ರಯಾಣದ ಒಂದು ನೋಟ'
            )}
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid rounded-xl overflow-hidden cream-glow"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0f0c09]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-[#f5f0e8]">
                  <Heart className="w-5 h-5 fill-[#e53935] text-[#e53935]" />
                  <span className="font-medium">{item.likes}</span>
                </div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f0e8] hover:text-[#fdd835] transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-[#e53935] via-[#fdd835] to-[#43a047] text-white hover:opacity-90 px-8 py-6 text-lg rounded-full"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              {t('Follow us on Instagram', 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
