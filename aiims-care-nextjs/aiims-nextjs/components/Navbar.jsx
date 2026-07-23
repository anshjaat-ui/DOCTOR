'use client'

import Link from 'next/link'
import { Menu, X, ShoppingBag, User, LogOut } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout, loading } = useAuth()
  const { count } = useCart()

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
            href="/cart"
            className="relative hidden sm:flex items-center gap-2 text-sm font-semibold btn-outline-brand px-4 py-2 rounded-full"
          >
            <ShoppingBag size={16} />
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          {!loading && user ? (
            <button
              onClick={logout}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
              title={user.email}
            >
              <LogOut size={16} />
              {user.name?.split(' ')[0]}
            </button>
          ) : (
            !loading && (
              <Link
                href="/login"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
              >
                <User size={16} />
                Log In
              </Link>
            )
          )}

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
          <Link href="/cart" onClick={() => setOpen(false)}>Cart ({count})</Link>
          {user ? (
            <button onClick={() => { logout(); setOpen(false) }} className="text-left">Log Out ({user.name})</button>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}>Log In</Link>
          )}
        </div>
      )}
    </header>
  )
}
