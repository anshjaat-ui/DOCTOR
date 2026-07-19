"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { CartButton } from "@/components/cart-provider";

const navItems = [
  { label: "Shop all", href: "/#shop" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Personal care", href: "/#personal-care" },
  { label: "First aid", href: "/#first-aid" },
  { label: "Our story", href: "/#our-story" }
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className="bg-[#254c3c] px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[.17em] text-[#f9f6ef] sm:text-[11px]">Complimentary delivery on orders $45+ <span className="mx-2 text-[#a8c6ae]">•</span> Carefully packed, every time</div>
      <header className="sticky top-0 z-40 border-b border-[#e8e3da]/80 bg-[#fffdfa]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="grid h-10 w-10 place-items-center text-[#2a372f] lg:hidden"><Menu size={22} /></button>
          <Link href="/" className="group flex items-center gap-2.5" aria-label="AIIMS Medical home">
            <span className="grid h-9 w-9 place-items-center rounded-[13px] bg-[#2f654e] font-serif text-xl text-white shadow-[0_5px_15px_rgba(38,85,63,.22)] transition group-hover:rotate-6">A</span>
            <span className="leading-none"><span className="block font-serif text-[20px] tracking-[.02em] text-[#23362c]">AIIMS</span><span className="mt-1 block text-[7px] font-bold uppercase tracking-[.31em] text-[#5e7567]">Medical</span></span>
          </Link>
          <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.label} href={item.href} className="text-[11px] font-bold uppercase tracking-[.12em] text-[#49584e] transition hover:text-[#c4563e]">{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/#shop" aria-label="Search shop" className="hidden grid h-11 w-11 place-items-center rounded-full text-[#344338] transition hover:bg-[#f1ede6] sm:grid"><Search size={19} strokeWidth={1.8} /></a>
            <CartButton />
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-[70] lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className={`absolute inset-0 bg-[#18271f]/40 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`} />
        <nav className={`absolute left-0 top-0 h-full w-[82%] max-w-sm bg-[#fffdfa] px-6 py-6 shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`} aria-label="Mobile navigation">
          <div className="flex items-center justify-between border-b border-[#e9e3d9] pb-6"><Link href="/" onClick={() => setMobileOpen(false)} className="font-serif text-2xl text-[#274533]">AIIMS <span className="font-sans text-[9px] font-bold uppercase tracking-[.2em] text-[#55725f]">Medical</span></Link><button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full bg-[#f3eee7]"><X size={19} /></button></div>
          <div className="mt-7 flex flex-col">
            {navItems.map((item) => <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="border-b border-[#eee9e1] py-5 font-serif text-2xl text-[#2c3f32]">{item.label}</Link>)}
          </div>
          <p className="mt-8 text-xs leading-5 text-[#788078]">Thoughtful everyday care, delivered with a little more ease.</p>
        </nav>
      </div>
    </>
  );
}

export function SiteFooter() {
  return <footer className="border-t border-[#dfe5de] bg-[#e9f0e9] px-5 pt-14 text-[#2f4939] sm:px-8 lg:px-10"><div className="mx-auto grid max-w-[1360px] gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]"><div><Link href="/" className="font-serif text-3xl">AIIMS <span className="font-sans text-[10px] font-bold uppercase tracking-[.2em] text-[#55725f]">Medical</span></Link><p className="mt-4 max-w-xs text-sm leading-6 text-[#617064]">Thoughtfully sourced wellness and personal care for the rituals that keep life moving.</p></div><FooterColumn title="Shop" links={["All products", "Wellness", "Personal care", "First aid"]} /><FooterColumn title="Help" links={["Delivery & returns", "Track your order", "Contact care team", "FAQs"]} /><div><p className="text-[10px] font-bold uppercase tracking-[.19em] text-[#597260]">Good things, occasionally</p><p className="mt-4 text-sm leading-6 text-[#617064]">A considered note on fresh finds and feel-good routines.</p><div className="mt-5 flex border-b border-[#8da292]"><input aria-label="Email address" placeholder="Your email address" className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-[#829187]" /><button className="text-[10px] font-bold uppercase tracking-[.14em] text-[#365743]">Join</button></div></div></div><div className="mx-auto flex max-w-[1360px] flex-col gap-3 border-t border-[#d2ded2] py-5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#718175] sm:flex-row sm:items-center sm:justify-between"><p>© 2026 AIIMS Medical. Everyday care, well considered.</p><p>Information provided is not a substitute for medical advice.</p></div></footer>;
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <div><p className="text-[10px] font-bold uppercase tracking-[.19em] text-[#597260]">{title}</p><ul className="mt-4 space-y-3">{links.map((link) => <li key={link}><a href="/#shop" className="text-sm text-[#526459] transition hover:text-[#bd573f]">{link}</a></li>)}</ul></div>;
}
