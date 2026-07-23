import ReviewCard from './ReviewCard'

const reviews = [
  { name: 'R. Kumar', location: 'Kanpur, UP', initials: 'RK', rating: 5, text: 'The Stone Remover Kit worked well over 4 weeks. Follow-up scan showed real improvement.' },
  { name: 'A. Mehta', location: 'Pune, MH', initials: 'AM', rating: 5, text: 'Skin Radiance Kit cleared my breakouts in about 3 weeks. Simple routine, easy to follow.' },
  { name: 'S. Verma', location: 'Lucknow, UP', initials: 'SV', rating: 4, text: 'Hair fall has visibly reduced. The AI test recommended exactly the right kit for me.' },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-cloud">
      <div className="container-xl py-20 md:py-28">
        <div className="max-w-lg">
          <span className="text-xs font-semibold tracking-wide uppercase text-brand">Reviews</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 tracking-tight">
            Real patients, real results.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
