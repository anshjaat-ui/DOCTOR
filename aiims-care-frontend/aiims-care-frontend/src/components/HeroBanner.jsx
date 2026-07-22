import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api/client'

const fallback = {
  heading: 'Doctor-Formulated Care, Delivered to You',
  subheading: 'Stone Remover, Skin, Hair, Dental, Joint & Immunity kits — backed by real doctors.',
  ctaText: 'Shop Wellness Kits',
  bannerImage: '/images/stone-remover-kit.png',
  highlights: ['No Surgery Needed', 'Doctor Backed', 'COD Available'],
}

export default function HeroBanner() {
  const navigate = useNavigate()
  const [hero, setHero] = useState(fallback)

  useEffect(() => {
    api.get('/settings/hero').then(setHero).catch(() => setHero(fallback))
  }, [])

  return (
    <div className="relative overflow-hidden bg-medi-bg">
      <img
        src={hero.bannerImage}
        alt="Store banner"
        loading="lazy"
        className="w-full h-[320px] md:h-[440px] object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-medi-bg via-medi-bg/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-semibold text-white mb-3 drop-shadow-[0_0_20px_rgba(46,158,143,0.35)]">
          {hero.heading}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base mb-4 max-w-md">
          {hero.subheading}
        </p>

        {hero.highlights?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {hero.highlights.map((h, i) => (
              <span key={i} className="text-xs bg-white/10 border border-accent/30 text-accent px-3 py-1 rounded-full">
                {h}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={() => navigate('/')}
          className="bg-urgent-gradient text-white font-semibold px-8 py-3 rounded-full text-sm shadow-accentGlow hover:opacity-90 transition-opacity"
        >
          {hero.ctaText}
        </button>
      </div>
    </div>
  )
}
