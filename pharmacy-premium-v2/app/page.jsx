"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      
      {/* 🔥 HERO SECTION */}
      <section style={{
        background: "#0f172a",
        color: "#fff",
        padding: "40px",
        borderRadius: "10px"
      }}>
        <h1>💊 AIIMS Pharmacy</h1>
        <p>AI Based Skin & Hair Test + Doctor Consultation</p>
        <button style={btn}>Start AI Test</button>
      </section>

      {/* ⚡ FLASH SALE */}
      <section style={{ marginTop: "30px" }}>
        <h2>🔥 Flash Sale</h2>
        <p>Ends in: {formatTime()}</p>
      </section>

      {/* 🛒 PRODUCTS */}
      <section style={{ marginTop: "30px" }}>
        <h2>Popular Products</h2>

        <div style={grid}>
          {products.map((p) => (
            <div key={p.id} style={card}>
              <img src={p.image} style={img} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button style={btn}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* 🤖 AI TEST */}
      <section style={{ marginTop: "40px" }}>
        <h2>🧠 AI Test Analysis</h2>
        <div style={grid}>
          <div style={card}>
            <h3>Skin Test</h3>
            <p>Acne, Glow, Dark Spots</p>
            <button style={btn}>Start</button>
          </div>
          <div style={card}>
            <h3>Hair Test</h3>
            <p>Hair Fall, Dandruff</p>
            <button style={btn}>Start</button>
          </div>
        </div>
      </section>

      {/* 📲 DOCTOR CONSULT */}
      <section style={{
        marginTop: "40px",
        padding: "20px",
        background: "#ecfeff",
        borderRadius: "10px"
      }}>
        <h2>👨‍⚕️ Doctor Consultation</h2>
        <p>Chat with doctor on WhatsApp</p>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
        >
          <button style={btn}>Chat Now</button>
        </a>
      </section>

      {/* ⭐ REVIEWS */}
      <section style={{ marginTop: "40px" }}>
        <h2>⭐ Patient Reviews</h2>

        <div style={grid}>
          {reviews.map((r, i) => (
            <div key={i} style={card}>
              <p>"{r.text}"</p>
              <b>- {r.name}</b>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

/* 🎨 STYLES */

const btn = {
  padding: "10px 15px",
  background: "#22c55e",
  border: "none",
  color: "#fff",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px"
};

const card = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "center"
};

const img = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px"
};

/* 📦 DATA */

const products = [
  {
    id: 1,
    name: "Hair Growth Serum",
    price: 499,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Skin Glow Cream",
    price: 399,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Anti Hair Fall Kit",
    price: 899,
    image: "https://via.placeholder.com/200"
  }
];

const reviews = [
  { name: "Rahul", text: "Product is amazing 🔥" },
  { name: "Aman", text: "Hair fall reduced 👍" },
  { name: "Priya", text: "Skin improved in 2 weeks 💯" }
];
