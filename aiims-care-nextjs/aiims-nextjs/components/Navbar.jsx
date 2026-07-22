'use client'

import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-line">
      <div className="container-xl flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center text-white font-display font-bold text-sm">
            A
          </span>
          <span className="font-display font-bold text-lg tracking-tight">AIIMS Care</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#products" className="hover:text-ink transition-colors">Products</a>
          <a href="#ai-test" className="hover:text-ink transition-colors">AI Health Test</a>
          <a href="#reviews" className="hover:text-ink transition-colors">Reviews</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/checkout"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold btn-outline-brand px-4 py-2 rounded-full"
          >
            <ShoppingBag size={16} />
            Cart
          </Link>
          <a
            href="#ai-test"
            className="btn-brand text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Start AI Test
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-5 py-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#ai-test" onClick={() => setOpen(false)}>AI Health Test</a>
          <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
          <Link href="/checkout" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      )}
    </header>
  )
}
