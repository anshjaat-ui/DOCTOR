const tiles = [
  { title: 'Kidney Care', img: '/images/stone-remover-kit.png' },
  { title: 'Skin Care', img: '/images/skin-radiance-kit.png' },
  { title: 'Hair Care', img: '/images/hair-regrowth-kit.png' },
  { title: 'Dental Care', img: '/images/dental-care-kit.png' },
  { title: 'Joint & Pain Relief', img: '/images/joint-pain-relief-kit.png' },
  { title: 'Immunity', img: '/images/immunity-booster-kit.png' },
]

export default function CategoryGrid() {
  return (
    <div className="bg-medi-bg px-4 py-8">
      <h2 className="text-white text-lg font-semibold mb-4 max-w-7xl mx-auto">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {tiles.map(t => (
          <div
            key={t.title}
            className="relative rounded-lg overflow-hidden border border-accent/20 group cursor-pointer transition-all hover:border-accent/60 hover:shadow-accentGlow"
          >
            <img src={t.img} alt={t.title} loading="lazy" className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
              <span className="text-white text-sm font-medium">{t.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
