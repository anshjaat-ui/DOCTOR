'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function ProductCard({ product }) {
  const discount = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0
  const { add } = useCart()
  const { user } = useAuth()
  const [status, setStatus] = useState('idle') // idle | adding | added | error

  async function handleAddToCart() {
    if (!user) {
      window.location.href = '/login'
      return
    }
    setStatus('adding')
    try {
      await add(product._id, 1)
      setStatus('added')
      setTimeout(() => setStatus('idle'), 1500)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="group bg-white border border-line rounded-2xl p-4 flex flex-col shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-200">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-cloud mb-4">
        {discount > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-ink text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}
        <Image
          src={product.images?.[0] || '/images/stone-remover-kit.png'}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-xs font-semibold text-brand uppercase tracking-wide">{product.tagline}</p>
      <p className="font-display font-bold text-base mt-1">{product.name}</p>

      <div className="flex items-center gap-1 mt-1.5">
        <Star size={13} className="fill-amber-400 text-amber-400" />
        <span className="text-xs text-muted">{product.rating}</span>
      </div>

      <div className="flex items-baseline gap-2 mt-2">
        <span className="font-display font-bold text-lg">₹{product.price.toLocaleString('en-IN')}</span>
        {product.mrp > product.price && (
          <span className="text-sm text-muted line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={handleAddToCart}
          disabled={status === 'adding'}
          className="flex-1 btn-outline-brand py-3 rounded-full text-sm font-semibold disabled:opacity-50"
        >
          {status === 'added' ? 'Added ✓' : status === 'adding' ? '...' : 'Add to Cart'}
        </button>
        <Link
          href={`/checkout?product=${product._id}`}
          className="flex-1 btn-brand text-center py-3 rounded-full text-sm font-semibold"
        >
          Buy Now
        </Link>
      </div>
    </div>
  )
}
