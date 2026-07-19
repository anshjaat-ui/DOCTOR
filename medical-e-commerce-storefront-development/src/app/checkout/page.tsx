import { CheckoutForm } from "@/components/checkout-form";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function CheckoutPage() {
  return <main className="min-h-screen bg-[#fffdfa] text-[#27362c]"><SiteHeader /><CheckoutForm /><SiteFooter /></main>;
}
