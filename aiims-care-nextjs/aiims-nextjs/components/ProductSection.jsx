import { products } from '@/lib/products'
import ProductCard from './ProductCard'

export default function ProductSection() {
  return (
    <section id="products" className="bg-white">
      <div className="container-xl py-20 md:py-28">
        <div className="max-w-lg">
          <span className="text-xs font-semibold tracking-wide uppercase text-brand">Our Kits</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 tracking-tight">
            Six kits. One doctor you trust.
          </h2>
          <p className="text-muted mt-3">
            Every kit is built around a single concern — no filler, no guesswork.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
