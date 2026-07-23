'use client'

import { useEffect, useState } from 'react'
import * as api from '@/lib/api'
import ProductCard from './ProductCard'

export default function ProductSection() {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    api
      .getProducts()
      .then((data) => {
        setProducts(data.products || [])
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section id="products" className="bg-white">
      <div className="container-xl py-20 md:py-28">
        <div className="max-w-lg">
          <span className="text-xs font-semibold tracking-wide uppercase text-brand">Our Kits</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 tracking-tight">
            Six kits. One doctor you trust.
          </h2>
          <p className="text-muted mt-3">
            Every kit is built around a single concern — no filler, no guesswork.
          </p>
        </div>

        {status === 'loading' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-cloud animate-pulse" />
            ))}
          </div>
        )}

        {status === 'error' && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mt-8">
            Couldn&apos;t load products. Please check the backend URL is set correctly.
          </p>
        )}

        {status === 'ready' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
