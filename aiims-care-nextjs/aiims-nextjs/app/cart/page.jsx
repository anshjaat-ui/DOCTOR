'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { Trash2 } from 'lucide-react'

export default function CartPage() {
  const { user, loading: authLoading } = useAuth()
  const { cart, loading, updateQty, remove } = useCart()

  const total = cart.reduce((sum, item) => sum + (item.product?.price || 0) * item.qty, 0)

  if (!authLoading && !user) {
    return (
      <>
        <Navbar />
        <div className="container-xl py-24 text-center">
          <p className="text-muted">Please log in to view your cart.</p>
          <Link href="/login" className="btn-brand inline-block mt-5 px-7 py-3 rounded-full font-semibold text-sm">
            Log In
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container-xl py-14 max-w-2xl mx-auto">
        <h1 className="font-display font-bold text-2xl mb-6">Your Cart</h1>

        {loading && <p className="text-muted text-sm">Loading cart...</p>}

        {!loading && cart.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">Your cart is empty.</p>
            <Link href="/#products" className="btn-brand inline-block mt-5 px-7 py-3 rounded-full font-semibold text-sm">
              Browse Kits
            </Link>
          </div>
        )}

        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.product._id} className="flex gap-4 bg-white border border-line rounded-2xl p-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-cloud shrink-0">
                <Image src={item.product.images?.[0] || '/images/stone-remover-kit.png'} alt={item.product.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold">{item.product.name}</p>
                <p className="text-sm text-muted">₹{item.product.price.toLocaleString('en-IN')}</p>
                <div className="flex items-center gap-3 mt-2">
                  <select
                    value={item.qty}
                    onChange={(e) => updateQty(item.product._id, Number(e.target.value))}
                    className="border border-line rounded-lg px-2 py-1 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <button onClick={() => remove(item.product._id)} className="text-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-8 bg-white border border-line rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">Total</p>
              <p className="font-display font-bold text-xl">₹{total.toLocaleString('en-IN')}</p>
            </div>
            <Link href="/checkout" className="btn-brand px-7 py-3 rounded-full font-semibold text-sm">
              Checkout
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
