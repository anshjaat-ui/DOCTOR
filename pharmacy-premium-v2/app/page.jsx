"use client";

import ProductCard from "../components/ProductCard";
import AIForm from "../components/AIForm";

export default function Home() {
  return (
    <div style={container}>
      
      {/* 🔥 HEADER */}
      <h1 style={title}>🔥 Premium Health Store</h1>
      <p style={subtitle}>
        Doctor Recommended Products + AI Health Analysis
      </p>

      {/* 🛒 PRODUCTS */}
      <div style={productRow}>
        <ProductCard name="Hair Growth Kit" price="₹999" />
        <ProductCard name="Testosterone Booster" price="₹1499" />
      </div>

      {/* 🤖 AI TEST */}
      <h2 style={sectionTitle}>🧠 AI Health Test</h2>
      <AIForm />

    </div>
  );
}

/* 🎨 STYLES */

const container = {
  padding: "20px",
  maxWidth: "1000px",
  margin: "auto",
};

const title = {
  fontSize: "28px",
  fontWeight: "bold",
};

const subtitle = {
  color: "gray",
  marginBottom: "20px",
};

const productRow = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const sectionTitle = {
  marginTop: "40px",
};
