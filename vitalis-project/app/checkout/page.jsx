"use client";

import Link from 'next/link';
import { ArrowLeft, ShieldPlus, CheckCircle2, Truck, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone font-sans selection:bg-emerald-300 selection:text-ink">
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-stone/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-ink text-white flex items-center justify-center shadow-md shadow-ink/10">
              <ShieldPlus className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <span className="text-[21px] font-extrabold tracking-tighter leading-none text-ink">Vitalis</span>
          </Link>
          <Link href="/" className="text-[14px] font-semibold text-ink/50 hover:text-ink transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT: Order Summary */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white rounded-[28px] border border-stone shadow-[0_4px_40px_-12px_rgba(0,0,0,0.06)] p-8 lg:p-10 sticky top-24">
              <h3 className="text-[22px] font-black tracking-tight text-ink mb-8">Order Summary</h3>

              <div className="flex items-start gap-5 mb-7 pb-7 border-b border-stone/40">
                <div className="w-20 h-20 rounded-[14px] overflow-hidden shrink-0 shadow-md shadow-ink/5 ring-1 ring-black/5">
                  <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=300&q=80" alt="Hair Kit" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-[17px] text-ink tracking-tight mb-0.5">Hair Regrowth Kit</p>
                  <p className="text-[13px] text-ink/40 font-medium mb-1">3-Month Supply</p>
                  <p className="text-[15px] font-extrabold text-ink">₹2,499</p>
                </div>
              </div>

              <div className="space-y-3 mb-7 pb-7 border-b border-stone/40">
                <div className="flex justify-between text-[15px] text-ink/50 font-medium">
                  <span>Subtotal</span>
                  <span>₹2,499</span>
                </div>
                <div className="flex justify-between text-[15px] text-ink/50 font-medium">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-bold">Free</span>
                </div>
                <div className="flex justify-between text-[16px] font-extrabold text-ink pt-2">
                  <span>Total</span>
                  <span>₹2,499</span>
                </div>
              </div>

              <div className="rounded-[20px] bg-stone/50 border border-stone/40 p-5 space-y-3">
                <div className="flex items-center gap-3 text-[14px] font-semibold text-ink/70">
                  <Truck className="w-4 h-4 text-emerald-500" /> Free Express Delivery
                </div>
                <div className="flex items-center gap-3 text-[14px] font-semibold text-ink/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> 30-Day Satisfaction Guarantee
                </div>
                <div className="flex items-center gap-3 text-[14px] font-semibold text-ink/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Doctor-Backed Formulation
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <h1 className="text-[32px] lg:text-[44px] font-black tracking-tighter leading-[1.05] text-ink mb-3">Checkout</h1>
            <p className="text-[17px] text-ink/40 font-light mb-9">Complete your details to place the order securely.</p>

            {submitted ? (
              <div className="bg-white rounded-[28px] border border-stone shadow-[0_4px_40px_-12px_rgba(0,0,0,0.06)] p-10 lg:p-14 text-center animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-[28px] font-black tracking-tight text-ink mb-3">Order Confirmed</h2>
                <p className="text-[16px] text-ink/50 font-medium mb-8 max-w-md mx-auto leading-relaxed">Your Hair Regrowth Kit is being processed. You will receive tracking details within minutes.</p>
                <Link href="/" className="inline-flex items-center gap-2 bg-ink text-white font-extrabold text-[15px] px-8 py-3.5 rounded-[14px] hover:bg-ink/85 transition-all hover:-translate-y-0.5 shadow-xl shadow-ink/10">
                  Back to Home <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-[28px] border border-stone shadow-[0_4px_40px_-12px_rgba(0,0,0,0.06)] p-8 lg:p-10 space-y-7">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-extrabold uppercase tracking-[0.08em] text-ink/40 mb-2">Full Name</label>
                    <input id="name" type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full h-13 rounded-[14px] bg-stone/40 border border-stone px-5 text-[16px] font-medium text-ink focus:outline-none focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-extrabold uppercase tracking-[0.08em] text-ink/40 mb-2">Email</label>
                    <input id="email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full h-13 rounded-[14px] bg-stone/40 border border-stone px-5 text-[16px] font-medium text-ink focus:outline-none focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10 transition-all" placeholder="john@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-extrabold uppercase tracking-[0.08em] text-ink/40 mb-2">Phone</label>
                    <input id="phone" type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full h-13 rounded-[14px] bg-stone/40 border border-stone px-5 text-[16px] font-medium text-ink focus:outline-none focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10 transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-[13px] font-extrabold uppercase tracking-[0.08em] text-ink/40 mb-2">Shipping Address</label>
                    <input id="address" type="text" required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="w-full h-13 rounded-[14px] bg-stone/40 border border-stone px-5 text-[16px] font-medium text-ink focus:outline-none focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/10 transition-all" placeholder="123 Main Street, City" />
                  </div>
                </div>

                <div className="pt-3">
                  <button type="submit" className="w-full h-[58px] rounded-[16px] bg-ink text-white text-[18px] font-extrabold hover:bg-ink/85 transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-ink/15 hover:shadow-2xl hover:shadow-ink/20">
                    Place Order — ₹2,499
                  </button>
                </div>
                <p className="text-[13px] text-ink/30 text-center font-medium">Mock checkout. No real payment is processed.</p>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
