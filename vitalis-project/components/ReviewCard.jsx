import { Star } from 'lucide-react';

export default function ReviewCard({ name, role, review, rating }) {
  return (
    <div className="bg-white rounded-[24px] border border-stone p-8 shadow-[0_4px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-stone'}`} />
        ))}
      </div>
      <blockquote className="text-[17px] lg:text-[18px] font-medium text-ink/85 leading-[1.65] mb-7 tracking-tight">“{review}”</blockquote>
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-ink font-extrabold text-[14px] shadow-md shadow-emerald-400/20">{name.split(' ').map(n => n[0]).join('')}</div>
        <div>
          <p className="font-extrabold text-ink text-[15px] tracking-tight">{name}</p>
          <p className="text-[13px] text-ink/40 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}
