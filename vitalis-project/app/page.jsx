"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldPlus, CheckCircle2, Truck, Stethoscope, Users, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import AIForm from '../components/AIForm';
import ReviewCard from '../components/ReviewCard';

export default function HomePage() {
  const [aiResult, setAiResult] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-300 selection:text-ink">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink min-h-[92vh] flex items-center">
        {/* Background shapes */}
        <div className="absolute top-[-10%] right-[-15%] w-[70vw] h-[70vw] rounded-full bg-emerald-400/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-300/8 blur-[120px] pointer-events-none" />
        <div className="absolute top-[8%] left-[5%] w-3 h-3 rounded-full bg-emerald-300/60" />
        <div className="absolute bottom-[25%] right-[15%] w-2 h-2 rounded-full bg-emerald-200/40" />
        <div className="absolute top-[35%] right-[8%] w-4 h-4 rounded-full bg-emerald-100/20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-full px-4 py-1.5 text-[13px] font-extrabold text-emerald-200 mb-8 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Backed Men's Health Protocols
              </div>
              <h1 className="text-[48px] sm:text-[56px] lg:text-[68px] font-black tracking-tighter leading-[0.92] text-white mb-7">
                Your body.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-white">Optimized.</span>
              </h1>
              <p className="text-[18px] lg:text-[21px] text-white/45 font-light leading-relaxed mb-10 max-w-md tracking-tight">
                Clinically-formulated supplements, AI-guided health plans, and expert-backed care — designed specifically for modern men.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="#ai-test" className="inline-flex items-center gap-2.5 bg-emerald-300 text-ink font-extrabold text-[16px] px-8 py-[16px] rounded-[14px] hover:bg-emerald-200 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(45,208,163,0.6)] hover:shadow-[0_20px_50px_-15px_rgba(45,208,163,0.7)]">
                  Start AI Test <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#products" className="inline-flex items-center gap-2.5 text-white font-bold text-[16px] px-6 py-[16px] rounded-[14px] hover:bg-white/5 transition-all border border-white/15">
                  Explore Products
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-12 text-[14px] font-medium text-white/30">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Doctor-Backed</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> 30-Day Guarantee</span>
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Man exercising" className="w-full aspect-[4/5] object-cover scale-105 hover:scale-100 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white/50 mb-1">Energy Level</p>
                    <p className="text-[22px] font-black text-white">+42%</p>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white/50 mb-1">Focus Score</p>
                    <p className="text-[22px] font-black text-white">+38%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="relative -mt-6 z-10 mx-auto max-w-5xl px-6 lg:px-10">
        <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] border border-stone/60 p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="text-center">
            <div className="w-11 h-11 rounded-2xl bg-ink text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-ink/10">
              <Stethoscope className="w-5 h-5" />
            </div>
            <p className="text-[28px] font-black text-ink tracking-tighter leading-none mb-1">250+</p>
            <p className="text-[14px] text-ink/40 font-semibold">Verified Doctors</p>
          </div>
          <div className="text-center">
            <div className="w-11 h-11 rounded-2xl bg-ink text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-ink/10">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-[28px] font-black text-ink tracking-tighter leading-none mb-1">2.4M</p>
            <p className="text-[14px] text-ink/40 font-semibold">Active Users</p>
          </div>
          <div className="text-center">
            <div className="w-11 h-11 rounded-2xl bg-ink text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-ink/10">
              <Truck className="w-5 h-5" />
            </div>
            <p className="text-[28px] font-black text-ink tracking-tighter leading-none mb-1">48h</p>
            <p className="text-[14px] text-ink/40 font-semibold">Express Delivery</p>
          </div>
          <div className="text-center">
            <div className="w-11 h-11 rounded-2xl bg-ink text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-ink/10">
              <ShieldPlus className="w-5 h-5" />
            </div>
            <p className="text-[28px] font-black text-ink tracking-tighter leading-none mb-1">99.8%</p>
            <p className="text-[14px] text-ink/40 font-semibold">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 lg:pt-36">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-emerald-600 text-[11px] font-extrabold uppercase tracking-[0.15em] mb-5">Clinically Formulated</span>
          <h2 className="text-[36px] lg:text-[48px] font-black tracking-tighter leading-[1.05] text-ink mb-5">Products that work like medicine.</h2>
          <p className="text-[17px] text-ink/45 font-light leading-relaxed">Every formulation is backed by clinical studies and real-world data from thousands of users.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          <ProductCard
            title="Hair Regrowth Kit"
            subtitle="DHT blocker + minoxidil + biotin complex. 3-month supply."
            price="₹2,499"
            originalPrice="₹3,499"
            tag="Best Seller"
            image="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&q=80"
            features={['DHT Blocker Blend', 'Topical Minoxidil 5%', 'Clinically Tested']}
            href="#checkout"
          />
          <ProductCard
            title="Testosterone Booster"
            subtitle="Ashwagandha + zinc + fenugreek. Energy, drive, and strength."
            price="₹1,899"
            originalPrice="₹2,599"
            tag="Clinically Backed"
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
            features={['KSM-66 Ashwagandha', 'Zinc + Fenugreek', 'Third-Party Tested']}
            href="#checkout"
          />
          <ProductCard
            title="Sleep & Recovery"
            subtitle="Magnesium glycinate + L-theanine + melatonin for deep rest."
            price="₹1,499"
            originalPrice="₹2,199"
            tag="New"
            image="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&q=80"
            features={['Magnesium Glycinate', 'L-Theanine Blend', 'Non-Habit Forming']}
            href="#checkout"
          />
        </div>
      </section>

      {/* ===== AI HEALTH TEST ===== */}
      <AIForm onResult={(res) => setAiResult(res)} />

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 lg:pt-36 pb-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-emerald-600 text-[11px] font-extrabold uppercase tracking-[0.15em] mb-5">Social Proof</span>
          <h2 className="text-[36px] lg:text-[48px] font-black tracking-tighter leading-[1.05] text-ink mb-5">Backed by real results.</h2>
          <p className="text-[17px] text-ink/45 font-light leading-relaxed">Thousands of men have transformed their health with Vitalis. Here are a few stories.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <ReviewCard
            name="Arjun Mehta"
            role="Entrepreneur, 34"
            review="After 90 days on the Hair Regrowth Kit, my hairline visibly filled in. The AI test actually matched me with the right product — it was not random marketing."
            rating={5}
          />
          <ReviewCard
            name="Rahul Nair"
            role="Engineer, 28"
            review="The Testosterone Booster changed my mornings. I go from feeling drained to focused within two weeks. Real science, not hype."
            rating={5}
          />
          <ReviewCard
            name="Vikram Joshi"
            role="Consultant, 41"
            review="Sleep & Recovery is the one I did not know I needed. Deep, restorative sleep without grogginess. Worth every rupee."
            rating={5}
          />
        </div>
      </section>

      {/* ===== FEATURES / WHY US ===== */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28 lg:pb-36">
        <div className="rounded-[32px] bg-gradient-to-br from-stone to-white border border-stone/60 p-12 lg:p-16 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h3 className="text-[32px] lg:text-[42px] font-black tracking-tighter leading-[1.08] text-ink mb-6">Why thousands choose Vitalis.</h3>
              <p className="text-[17px] text-ink/50 font-light leading-relaxed mb-8">We combine AI diagnostics, clinical-grade formulations, and transparent sourcing. No fillers. No gimmicks. Just results.</p>
              <ul className="space-y-4">
                {[
                  'Clinically-backed ingredients at effective doses',
                  'AI health matching based on real clinical logic',
                  'Transparent sourcing and third-party lab testing',
                  '30-day satisfaction guarantee — no risk',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-[16px] font-medium text-ink/80 leading-snug">
                    <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518314389-20f8d02cf1cf?w=800&q=80"
                alt="Man healthy lifestyle"
                className="w-full rounded-[28px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-ink text-white rounded-[20px] p-6 shadow-2xl shadow-ink/30 max-w-xs">
                <p className="text-[13px] font-bold text-white/40 uppercase tracking-[0.1em] mb-1">Results</p>
                <p className="text-[28px] font-black tracking-tighter leading-none mb-2">86%</p>
                <p className="text-[14px] text-white/70 font-medium leading-snug">of users report visible improvements within the first 30 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="checkout" className="relative overflow-hidden bg-ink text-white">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-400/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-300/6 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center py-28 lg:py-36">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black tracking-tighter leading-[1.05] mb-7">
            Ready to optimize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-white">health?</span>
          </h2>
          <p className="text-[18px] lg:text-[22px] text-white/40 font-light leading-relaxed mb-10 max-w-xl mx-auto tracking-tight">
            Take the AI health test, get a personalized protocol, and start your first month with a full satisfaction guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#ai-test" className="inline-flex items-center gap-2.5 bg-emerald-300 text-ink font-extrabold text-[17px] px-10 py-[16px] rounded-[16px] hover:bg-emerald-200 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_12px_40px_-10px_rgba(45,208,163,0.5)] hover:shadow-[0_25px_60px_-15px_rgba(45,208,163,0.6)]">
              Start AI Test <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#products" className="inline-flex items-center gap-2.5 text-white font-bold text-[17px] px-10 py-[16px] rounded-[16px] hover:bg-white/8 transition-all border border-white/15">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-stone border-t border-stone/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid md:grid-cols-4 gap-10 lg:gap-16 mb-14">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-ink text-white flex items-center justify-center shadow-md shadow-ink/10">
                  <ShieldPlus className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="text-[21px] font-extrabold tracking-tighter text-ink">Vitalis</span>
              </Link>
              <p className="text-[15px] text-ink/40 font-medium leading-relaxed max-w-md">Clinically-formulated men's health, powered by AI diagnostics and real scientific research.</p>
            </div>
            <div>
              <h4 className="font-extrabold text-[14px] text-ink tracking-tight mb-4 uppercase">Products</h4>
              <ul className="space-y-2.5 text-[15px] text-ink/40 font-medium">
                <li><Link href="#products" className="hover:text-ink transition-colors">Hair Kit</Link></li>
                <li><Link href="#products" className="hover:text-ink transition-colors">Testosterone Booster</Link></li>
                <li><Link href="#products" className="hover:text-ink transition-colors">Sleep & Recovery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-[14px] text-ink tracking-tight mb-4 uppercase">Company</h4>
              <ul className="space-y-2.5 text-[15px] text-ink/40 font-medium">
                <li><Link href="#" className="hover:text-ink transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-ink transition-colors">Doctors Network</Link></li>
                <li><Link href="#" className="hover:text-ink transition-colors">Clinical Studies</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-stone/50 text-[13px] text-ink/30 font-medium">
            <p>© 2026 Vitalis Health. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-ink/60 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-ink/60 transition-colors">Terms</Link>
              <Link href="#" className="hover:text-ink/60 transition-colors">Shipping</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
