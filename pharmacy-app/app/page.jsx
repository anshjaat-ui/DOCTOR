import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import AIForm from "../components/AIForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefits />
      <div style={{ padding:"40px" }}>
        <h2>🔥 Best Sellers</h2>
        <ProductCard name="Hair Kit" price="₹999" />
      </div>
      <AIForm />
      <Reviews />
      <Footer />
    </div>
  );
}