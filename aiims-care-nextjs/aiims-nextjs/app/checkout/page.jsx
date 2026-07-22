'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getProductById, products } from '@/lib/products'
import { CheckCircle2 } from 'lucide-react'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('product')
  const product = getProductById(productId) || products[0]

  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [errors, setErrors] = useState({})
  const [placed, setPlaced] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit phone number'
    if (!form.address.trim() || form.address.trim().length < 10) e.address = 'Enter a complete address'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // In production: POST { product, form } to your order API route here.
    console.log('Order placed:', { product: product.id, ...form })
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="container-xl py-24 text-center max-w-md mx-auto">
        <CheckCircle2 className="mx-auto text-brand" size={56} />
        <h1 className="font-display font-bold text-2xl mt-4">Order confirmed!</h1>
        <p className="text-muted mt-2">
          Your {product.name} will be delivered soon. Our team will confirm via call/SMS shortly.
        </p>
        <Link href="/" className="btn-brand inline-block mt-8 px-7 py-3 rounded-full font-semibold text-sm">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container-xl py-14 md:py-20 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
      <div>
        <h1 className="font-display font-bold text-2xl mb-6">Checkout</h1>
        <div className="bg-white border border-line rounded-2xl p-5 flex gap-4">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-cloud shrink-0">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-display font-semibold">{product.name}</p>
            <p className="text-xs text-muted">{product.tagline}</p>
            <p className="font-display font-bold mt-1">₹{product.price.toLocaleString('en-IN')}</p>
          </div>
        </div>

        <div className="border border-line rounded-2xl p-5 mt-4 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-muted">Subtotal</span>
            <span>₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Delivery</span>
            <span className="text-brand font-semibold">Free</span>
          </div>
          <div className="flex justify-between font-bold text-base pt-2 border-t border-line">
            <span>Total</span>
            <span>₹{product.price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-line rounded-2xl p-6 space-y-4 h-fit">
        <h2 className="font-display font-semibold text-lg">Delivery Details</h2>

        <div>
          <label className="text-xs font-semibold text-muted">Full Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-muted">Phone Number</label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="10-digit mobile number"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-muted">Delivery Address</label>
          <textarea
            rows={3}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="House no, street, city, pincode"
          />
          {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
        </div>

        <div className="flex items-center justify-between bg-cloud rounded-xl px-4 py-3 text-sm">
          <span>Payment</span>
          <span className="font-semibold">Cash on Delivery</span>
        </div>

        <button type="submit" className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm">
          Place Order — ₹{product.price.toLocaleString('en-IN')}
        </button>
      </form>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="container-xl py-24 text-center text-muted">Loading checkout...</div>}>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </>
  )
}
