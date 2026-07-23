import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { api } from '../api/client'

export default function Checkout() {
  const { cart, subtotal, refreshCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: user?.name || '',
    phone: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    pincode: '',
  })
  const [errors, setErrors] = useState({})
  const [placing, setPlacing] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const shippingPrice = subtotal > 499 ? 0 : 49
  const total = subtotal + shippingPrice

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit phone number'
    if (!form.line1.trim()) e.line1 = 'Address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.pincode.trim()) e.pincode = 'Pincode is required'
    return e
  }

  async function handlePlaceOrder(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitError('')
    setPlacing(true)
    try {
      const items = cart.items.map((i) => ({ productId: i.product._id, qty: i.qty }))
      const address = [form.line1, form.line2, form.city, form.state, form.pincode]
        .filter(Boolean)
        .join(', ')

      // Matches the backend's real order contract: POST /orders
      // { items: [{ productId, qty }], customer: { name, phone, address } }
      await api.post('/orders', { items, customer: { name: form.name, phone: form.phone, address } }, true)

      await refreshCart()
      navigate('/orders')
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setPlacing(false)
    }
  }

  if (!cart.items || cart.items.length === 0) {
    return <main className="bg-medi-bg min-h-[60vh] flex items-center justify-center text-gray-500">Cart is empty</main>
  }

  return (
    <main className="bg-medi-bg min-h-[70vh] font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 py-6">
        <form onSubmit={handlePlaceOrder} className="lg:col-span-2 bg-medi-panel border border-accent/20 p-5 rounded-lg space-y-3">
          <h1 className="text-xl font-medium mb-2 text-white">Delivery Address</h1>

          {submitError && (
            <div className="bg-urgent-from/10 border border-urgent-from/30 text-urgent-from text-sm px-3 py-2 rounded">
              {submitError}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <input name="name" required placeholder="Full name" value={form.name} onChange={handleChange} className="w-full bg-black/40 border border-accent/30 text-white rounded-sm px-2 py-1.5" />
              {errors.name && <p className="text-xs text-urgent-from mt-1">{errors.name}</p>}
            </div>
            <div className="col-span-2">
              <input name="phone" required placeholder="Phone number" value={form.phone} onChange={handleChange} className="w-full bg-black/40 border border-accent/30 text-white rounded-sm px-2 py-1.5" />
              {errors.phone && <p className="text-xs text-urgent-from mt-1">{errors.phone}</p>}
            </div>
            <div className="col-span-2">
              <input name="line1" required placeholder="Address line 1" value={form.line1} onChange={handleChange} className="w-full bg-black/40 border border-accent/30 text-white rounded-sm px-2 py-1.5" />
              {errors.line1 && <p className="text-xs text-urgent-from mt-1">{errors.line1}</p>}
            </div>
            <input name="line2" placeholder="Address line 2 (optional)" value={form.line2} onChange={handleChange} className="bg-black/40 border border-accent/30 text-white rounded-sm px-2 py-1.5 col-span-2" />
            <div>
              <input name="city" required placeholder="City" value={form.city} onChange={handleChange} className="w-full bg-black/40 border border-accent/30 text-white rounded-sm px-2 py-1.5" />
              {errors.city && <p className="text-xs text-urgent-from mt-1">{errors.city}</p>}
            </div>
            <input name="state" placeholder="State" value={form.state} onChange={handleChange} className="bg-black/40 border border-accent/30 text-white rounded-sm px-2 py-1.5" />
            <div className="col-span-2">
              <input name="pincode" required placeholder="Pincode" value={form.pincode} onChange={handleChange} className="w-full bg-black/40 border border-accent/30 text-white rounded-sm px-2 py-1.5" />
              {errors.pincode && <p className="text-xs text-urgent-from mt-1">{errors.pincode}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between bg-black/30 rounded-md px-3 py-2 text-sm text-gray-300">
            <span>Payment method</span>
            <span className="font-semibold text-white">Cash on Delivery</span>
          </div>

          <button
            type="submit"
            disabled={placing}
            className="w-full bg-accent hover:bg-accent-light rounded-full py-2 text-sm font-medium border border-accent/40 disabled:opacity-60"
          >
            {placing ? 'Placing order...' : `Place Order — ₹${total.toLocaleString('en-IN')}`}
          </button>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-accent/10">
            <div className="flex flex-col items-center gap-1 text-gray-400">
              <ShieldCheck size={18} className="text-accent" />
              <span className="text-[10px] text-center">Doctor Verified</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400">
              <Truck size={18} className="text-accent" />
              <span className="text-[10px] text-center">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400">
              <RotateCcw size={18} className="text-accent" />
              <span className="text-[10px] text-center">Easy Returns</span>
            </div>
          </div>
        </form>

        <div className="bg-medi-panel border border-accent/20 p-5 rounded-lg h-fit space-y-2 text-sm">
          <h2 className="font-medium text-base mb-2 text-white">Order Summary</h2>
          <div className="flex justify-between text-gray-300"><span>Items:</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
          <div className="flex justify-between text-gray-300"><span>Shipping:</span><span>{shippingPrice === 0 ? 'FREE' : `₹${shippingPrice}`}</span></div>
          <div className="flex justify-between font-bold text-urgent-from border-t border-accent/10 pt-2">
            <span>Order Total:</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </main>
  )
}
