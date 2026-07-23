'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as api from '@/lib/api'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { CheckCircle2 } from 'lucide-react'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('product')
  const { token, user } = useAuth()
  const { cart, refresh: refreshCart } = useCart()

  const [buyNowProduct, setBuyNowProduct] = useState(null)
  const [loadingProduct, setLoadingProduct] = useState(!!productId)

  useEffect(() => {
    if (productId) {
      api
        .getProductById(productId)
        .then(setBuyNowProduct)
        .finally(() => setLoadingProduct(false))
    }
  }, [productId])

  const items = productId
    ? buyNowProduct
      ? [{ productId: buyNowProduct._id, name: buyNowProduct.name, price: buyNowProduct.price, qty: 1, image: buyNowProduct.images?.[0] }]
      : []
    : cart.map((c) => ({
        productId: c.product._id,
        name: c.product.name,
        price: c.product.price,
        qty: c.qty,
        image: c.product.images?.[0],
      }))

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  const [form, setForm] = useState({ name: user?.name || '', phone: '', address: '' })
  const [errors, setErrors] = useState({})
  const [placed, setPlaced] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit phone number'
    if (!form.address.trim() || form.address.trim().length < 10) e.address = 'Enter a complete address'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    if (items.length === 0) return

    setSubmitting(true)
    setSubmitError('')
    try {
      await api.placeOrder(
        {
          items: items.map(({ productId, qty }) => ({ productId, qty })),
          customer: form,
        },
        token
      )
      setPlaced(true)
      if (!productId) refreshCart()
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (loadingProduct) {
    return <div className="container-xl py-24 text-center text-muted">Loading...</div>
  }

  if (placed) {
    return (
      <div className="container-xl py-24 text-center max-w-md mx-auto">
        <CheckCircle2 className="mx-auto text-brand" size={56} />
        <h1 className="font-display font-bold text-2xl mt-4">Order confirmed!</h1>
        <p className="text-muted mt-2">Your order has been placed. Our team will confirm via call/SMS shortly.</p>
        <Link href="/" className="btn-brand inline-block mt-8 px-7 py-3 rounded-full font-semibold text-sm">
          Back to Home
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container-xl py-24 text-center">
        <p className="text-muted">Nothing to check out yet.</p>
        <Link href="/#products" className="btn-brand inline-block mt-5 px-7 py-3 rounded-full font-semibold text-sm">
          Browse Kits
        </Link>
      </div>
    )
  }

  return (
    <div className="container-xl py-14 md:py-20 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
      <div>
        <h1 className="font-display font-bold text-2xl mb-6">Checkout</h1>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.productId} className="bg-white border border-line rounded-2xl p-5 flex gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-cloud shrink-0">
                <Image src={item.image || '/images/stone-remover-kit.png'} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-display font-semibold">{item.name}</p>
                <p className="text-xs text-muted">Qty: {item.qty}</p>
                <p className="font-display font-bold mt-1">₹{(item.price * item.qty).toLocaleString('en-IN')}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-line rounded-2xl p-5 mt-4 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-muted">Subtotal</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Delivery</span>
            <span className="text-brand font-semibold">Free</span>
          </div>
          <div className="flex justify-between font-bold text-base pt-2 border-t border-line">
            <span>Total</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-line rounded-2xl p-6 space-y-4 h-fit">
        <h2 className="font-display font-semibold text-lg">Delivery Details</h2>
        {submitError && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{submitError}</p>}

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

        <button type="submit" disabled={submitting} className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm disabled:opacity-50">
          {submitting ? 'Placing order...' : `Place Order — ₹${total.toLocaleString('en-IN')}`}
        </button>

        {!user && (
          <p className="text-xs text-muted text-center">
            Ordering as guest. <Link href="/login" className="text-brand underline">Log in</Link> to track your orders.
          </p>
        )}
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
