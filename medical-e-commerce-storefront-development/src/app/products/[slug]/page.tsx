import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { findProduct, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  const relatedProducts = products.filter((item) => item.id !== product.id && (item.category === product.category || item.rating >= 4.8)).slice(0, 4);
  return <main className="overflow-hidden bg-[#fffdfa] text-[#27362c]"><SiteHeader /><ProductDetail product={product} relatedProducts={relatedProducts} /><SiteFooter /></main>;
}
