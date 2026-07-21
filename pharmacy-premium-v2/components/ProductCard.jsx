"use client";
import { useRouter } from "next/navigation";

export default function ProductCard({ name, price }) {
  const router = useRouter();

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{name}</h3>
      <p>{price}</p>

      <button onClick={() => router.push("/checkout")}>
        Buy Now
      </button>
    </div>
  );
}
