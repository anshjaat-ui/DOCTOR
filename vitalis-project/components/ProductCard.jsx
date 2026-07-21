import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductCard({ title, subtitle, price, originalPrice, tag, features, image, href }) {
  return (
    <div className="group relative bg-white rounded-[28px] border border-stone p-7 lg:p-9 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {tag && (
        <span className="inline-flex items-center gap-1.5 bg-ink text-white text-[11px] font-extrabold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-6 shadow-sm">
          {tag}
        </span>
      )}

      <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-7 bg-gradient-to-br from-stone to-stone shadow-inner ring-1 ring-black/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <h3 className="text-[22px] lg:text-[25px] font-extrabold tracking-tight text-ink leading-tight mb-1.5">{title}</h3>
      <p className="text-[15px] text-ink/50 font-medium mb-6 leading-relaxed">{subtitle}</p>

      <ul className="space-y-2.5 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-[14px] text-ink/80 font-medium leading-snug">
            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-end gap-3 mb-7">
        <span className="text-3xl font-black tracking-tighter text-ink">{price}</span>
        <span className="text-base font-medium text-ink/30 line-through mb-1">{originalPrice}</span>
      </div>

      <Link
        href={href}
        className="flex items-center justify-center gap-2.5 w-full bg-ink text-white font-extrabold text-[16px] px-6 py-[14px] rounded-[16px] hover:bg-ink/80 transition-all duration-300 hover:shadow-xl hover:shadow-ink/15 hover:-translate-y-0.5 group/btn"
      >
        Buy Now
        <ArrowRight className="w-4.5 h-4.5 group-hover/btn:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
