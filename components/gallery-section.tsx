"use client"

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { Instagram, Heart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type IGItem = {
  id: string
  image: string
  caption?: string
  permalink?: string
}

export function GallerySection() {
  const { t } = useLanguage()
  const [items, setItems] = useState<IGItem[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchFeed() {
      try {
        const res = await fetch('/api/instagram')
        const data = await res.json()
        if (res.ok) {
          if (!cancelled) setItems(data.items || [])
        } else {
          if (!cancelled) setError(data.error || 'Failed to load Instagram feed')
        }
      } catch (err: any) {
        if (!cancelled) setError(err.message || String(err))
      }
    }

    fetchFeed()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="gallery" className="py-24 bg-[#0f0c09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            {t('Our Work', 'ನಮ್ಮ ಕೆಲಸ')}
          </h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl mx-auto">
            {t('A glimpse into our creative journey', 'ನಮ್ಮ ಸೃಜನಾತ್ಮಕ ಪ್ರಯಾಣದ ಒಂದು ನೋಟ')}
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {error && (
            <div className="text-[#f5f0e8]/70">{t('Unable to load Instagram feed', 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಫೀಡ್ ಅನ್ನು ಲೋಡ್ ಮಾಡಲು ಆಗುವುದಿಲ್ಲ')}</div>
          )}

          {items === null && (
            // Loading placeholders
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group relative break-inside-avoid rounded-xl overflow-hidden cream-glow bg-[#111] h-64" />
            ))
          )}

          {items?.map((item) => (
            <div key={item.id} className="group relative break-inside-avoid rounded-xl overflow-hidden cream-glow">
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.caption || 'Instagram image'} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0f0c09]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-[#f5f0e8]">
                  <Heart className="w-5 h-5 fill-[#e53935] text-[#e53935]" />
                </div>
                <a href={item.permalink || 'https://instagram.com'} target="_blank" rel="noopener noreferrer" className="text-[#f5f0e8] hover:text-[#fdd835] transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-to-r from-[#e53935] via-[#fdd835] to-[#43a047] text-white hover:opacity-90 px-8 py-6 text-lg rounded-full">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <Instagram className="w-5 h-5" />
              {t('Follow us on Instagram', 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
