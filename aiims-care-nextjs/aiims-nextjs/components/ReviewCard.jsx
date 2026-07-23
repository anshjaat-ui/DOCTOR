import { Star } from 'lucide-react'

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-line rounded-2xl p-6 shadow-card">
      <div className="flex text-amber-400 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
        ))}
      </div>
      <p className="text-sm text-ink leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-5">
        <div className="w-10 h-10 rounded-full bg-brand-soft text-brand font-display font-bold flex items-center justify-center text-sm">
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <p className="text-xs text-muted">{review.location}</p>
        </div>
      </div>
    </div>
  )
}
