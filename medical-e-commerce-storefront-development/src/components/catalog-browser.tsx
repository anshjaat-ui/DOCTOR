"use client";

import Link from "next/link";
import { ChevronDown, Heart, Search, SlidersHorizontal, Star, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "@/components/cart-provider";
import { categories, formatPrice, type Product } from "@/lib/catalog";

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addItem } = useCart();
  return <article className="group relative">
    <Link href={`/products/${product.slug}`} className={`relative block overflow-hidden rounded-[24px] bg-[#f3efe7] ${compact ? "aspect-[.92]" : "aspect-[.88]"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3.5"><span className="rounded-full bg-[#fffdfa]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.13em] text-[#3e5e4a] shadow-sm backdrop-blur">{product.badge ?? product.category}</span><button onClick={(event) => { event.preventDefault(); }} aria-label={`Save ${product.name}`} className="grid h-9 w-9 place-items-center rounded-full bg-[#fffdfa]/85 text-[#67746a] opacity-0 backdrop-blur transition hover:text-[#c55b46] group-hover:opacity-100"><Heart size={16} /></button></div>
      <button onClick={(event) => { event.preventDefault(); addItem(product); }} className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-[#2e634c] py-3 text-[10px] font-bold uppercase tracking-[.15em] text-white opacity-0 shadow-lg transition duration-300 hover:bg-[#224c3a] group-hover:translate-y-0 group-hover:opacity-100">Quick add</button>
    </Link>
    <div className="px-1 pb-1 pt-4"><div className="flex items-center gap-1 text-[#dc9361]"><Star size={12} fill="currentColor" /><span className="ml-1 text-[11px] font-semibold text-[#6e786f]">{product.rating} <span className="font-normal text-[#9aa098]">({product.reviewCount})</span></span></div><Link href={`/products/${product.slug}`} className="mt-2 block font-serif text-[20px] leading-tight text-[#26382c] transition hover:text-[#b6503d]">{product.name}</Link><p className="mt-1 truncate text-xs text-[#747c74]">{product.shortDescription}</p><div className="mt-3 flex items-center gap-2"><span className="text-sm font-semibold text-[#26382c]">{formatPrice(product.price)}</span>{product.originalPrice && <span className="text-xs text-[#9ca39a] line-through">{formatPrice(product.originalPrice)}</span>}</div></div>
  </article>;
}

export function CatalogBrowser({ products, featuredOnly = false }: { products: Product[]; featuredOnly?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>("All products");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [under25, setUnder25] = useState(false);
  const [search, setSearch] = useState("");
  const categoriesToShow = featuredOnly ? categories.slice(0, 5) : categories;
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = products.filter((product) => (activeCategory === "All products" || product.category === activeCategory) && (!under25 || product.price < 25) && (!query || `${product.name} ${product.category} ${product.shortDescription}`.toLowerCase().includes(query)));
    return [...result].sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : sort === "rating" ? b.rating - a.rating : 0);
  }, [products, activeCategory, sort, under25, search]);

  return <div>
    <div className="flex flex-col gap-4 border-y border-[#e4dfd6] py-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="no-scrollbar -mx-1 flex max-w-full gap-2 overflow-x-auto px-1 pb-1 lg:pb-0">
        {categoriesToShow.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.12em] transition ${activeCategory === category ? "bg-[#2e634c] text-white shadow-[0_5px_12px_rgba(46,99,76,.16)]" : "bg-[#f4f0e9] text-[#667069] hover:bg-[#e9e5dc]"}`}>{category}</button>)}
      </div>
      <div className="flex items-center justify-between gap-3 lg:justify-end"><p className="hidden whitespace-nowrap text-xs text-[#7b837b] sm:block">{filtered.length} considered essentials</p><button onClick={() => setShowFilters(!showFilters)} className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.12em] transition ${showFilters ? "border-[#2e634c] bg-[#edf3ed] text-[#2e634c]" : "border-[#e3ded5] text-[#58645b] hover:bg-[#f5f1e9]"}`}><SlidersHorizontal size={14} /> Filters</button><label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#58645b]">Sort <span className="relative"><select value={sort} onChange={(event) => setSort(event.target.value)} className="appearance-none bg-transparent pr-4 text-[10px] font-bold uppercase tracking-[.1em] outline-none"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low</option><option value="price-high">Price: high</option></select><ChevronDown className="pointer-events-none absolute right-0 top-0.5" size={13} /></span></label></div>
    </div>
    <div className={`grid overflow-hidden transition-all duration-300 ${showFilters ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr] py-0"}`}><div className="min-h-0"><div className="flex flex-col gap-4 rounded-2xl bg-[#f3f5f1] p-4 sm:flex-row sm:items-center sm:justify-between"><label className="flex max-w-md flex-1 items-center gap-2 rounded-xl bg-white px-3.5 py-3 text-[#718075]"><Search size={15} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the collection" className="w-full bg-transparent text-sm outline-none placeholder:text-[#9aa49b]" /></label><div className="flex items-center gap-3"><button onClick={() => setUnder25(!under25)} className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.12em] ${under25 ? "border-[#2e634c] bg-[#2e634c] text-white" : "border-[#d8ded7] bg-white text-[#5d6b60]"}`}>Under $25</button><button onClick={() => { setSearch(""); setUnder25(false); setActiveCategory("All products"); }} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.1em] text-[#747d74] hover:text-[#b6503d]"><X size={13} /> Reset</button></div></div></div></div>
    {filtered.length ? <div className={`grid grid-cols-2 gap-x-4 gap-y-9 pt-8 sm:grid-cols-3 lg:grid-cols-4 ${featuredOnly ? "xl:grid-cols-4" : "xl:grid-cols-4"}`}>{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="py-20 text-center"><p className="font-serif text-2xl text-[#344737]">Nothing found just yet.</p><button onClick={() => { setSearch(""); setUnder25(false); setActiveCategory("All products"); }} className="mt-3 text-sm font-semibold text-[#397056] underline underline-offset-4">Reset filters</button></div>}
  </div>;
}
