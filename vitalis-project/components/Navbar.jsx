"use client";

import Link from 'next/link';
import { Menu, X, ShieldPlus } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-stone/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-ink text-white flex items-center justify-center shadow-md shadow-ink/10 group-hover:shadow-lg transition-shadow">
            <ShieldPlus className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <span className="text-[21px] font-extrabold tracking-tighter leading-none text-ink">Vitalis</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-ink/70">
          <Link href="#products" className="hover:text-ink transition-colors">Products</Link>
          <Link href="#ai-test" className="hover:text-ink transition-colors">AI Health Test</Link>
          <Link href="#reviews" className="hover:text-ink transition-colors">Reviews</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="#ai-test" className="text-[15px] font-semibold text-ink px-5 py-2.5 rounded-full hover:bg-stone transition-colors">
            Take Test
          </Link>
          <Link href="#checkout" className="text-[15px] font-bold bg-ink text-white px-5 py-2.5 rounded-full hover:bg-ink/85 transition-all shadow-xl shadow-ink/15 hover:shadow-2xl hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-ink" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone bg-white/95 backdrop-blur-xl px-6 pb-8 pt-6 flex flex-col gap-5 text-[17px] font-medium text-ink/80 animate-fade-up">
          <Link href="#products" onClick={() => setOpen(false)} className="hover:text-ink">Products</Link>
          <Link href="#ai-test" onClick={() => setOpen(false)} className="hover:text-ink">AI Health Test</Link>
          <Link href="#reviews" onClick={() => setOpen(false)} className="hover:text-ink">Reviews</Link>
          <Link href="#checkout" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-[15px] font-bold bg-ink text-white px-5 py-3 rounded-full mt-2 shadow-xl shadow-ink/10">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
