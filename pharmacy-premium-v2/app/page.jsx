"use client";

import ProductCard from "../components/ProductCard";
import AIForm from "../components/AIForm";

export default function Home() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f8fafc" }}>
      
      {/* 🔥 HERO SECTION */}
      <section style={hero}>
        <div>
          <h1 style={heroTitle}>
            Fix Hair Fall & Boost Confidence 💪
          </h1>
          <p style={heroText}>
            AI-powered diagnosis + Doctor-approved treatments
          </p>
          <button style={cta}>Start Free AI Test</button>
        </div>
        <img
          src="https://via.placeholder.com/400"
          style={{ borderRadius: "15px" }}
        />
      </section>

      {/* ⭐ TRUST BAR */}
      <section style={trust}>
        <p>⭐ 50,000+ Happy Customers</p>
        <p>👨‍⚕️ Certified Doctors</p>
        <p>🚚 Free Delivery</p>
      </section>

      {/* 🛒 PRODUCTS */}
      <section style={section}>
        <h2>🔥 Best Sellers</h2>

        <div style={grid}>
          <ProductCard name="Hair Growth Kit" price="₹999" />
          <ProductCard name="Testosterone Booster" price="₹1499" />
          <ProductCard name="Skin Glow Cream" price="₹799" />
        </div>
      </section>

      {/* 🤖 AI TEST */}
      <section style={section}>
        <h2>🧠 AI Health Test</h2>
        <p>Get personalized treatment in 30 seconds</p>

        <div style={aiBox}>
          <AIForm />
        </div>
      </section>

      {/* 📊 BEFORE AFTER */}
      <section style={section}>
        <h2>📈 Real Results</h2>

        <div style={grid}>
          <img src="https://via.placeholder.com/200" />
          <img src="https://via.placeholder.com/200" />
          <img src="https://via.placeholder.com/200" />
        </div>
      </section>

      {/* ⭐ REVIEWS */}
      <section style={section}>
        <h2>⭐ Reviews</h2>

        <div style={grid}>
          <Review name="Rahul" text="Hair fall reduced in 2 weeks 🔥" />
          <Review name="Aman" text="Energy level increased 💪" />
          <Review name="Priya" text="Skin glowing now 😍" />
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section style={ctaBox}>
        <h2>Start Your Transformation Today</h2>
        <button style={cta}>Take AI Test</button>
      </section>

    </div>
  );
}

/* ⭐ Review Component */
function Review({ name, text }) {
  return (
    <div style={card}>
      <p>"{text}"</p>
      <b>- {name}</b>
    </div>
  );
}

/* 🎨 STYLES */

const hero = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px",
  background: "#0f172a",
  color: "#fff",
  flexWrap: "wrap",
};

const heroTitle = {
  fontSize: "32px",
  fontWeight: "bold",
};

const heroText = {
  margin: "10px 0",
  color: "#cbd5f5",
};

const cta = {
  background: "#22c55e",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
};

const trust = {
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
  background: "#fff",
  borderBottom: "1px solid #eee",
};

const section = {
  padding: "40px 20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const aiBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "400px",
};

const card = {
  padding: "15px",
  border: "1px solid #eee",
  borderRadius: "10px",
  background: "#fff",
};

const ctaBox = {
  textAlign: "center",
  padding: "50px",
  background: "#22c55e",
  color: "#fff",
};
