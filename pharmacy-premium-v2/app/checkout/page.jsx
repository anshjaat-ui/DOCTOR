export default function Checkout() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input placeholder="Name" required />
        <input placeholder="Address" required />
        <input placeholder="Phone" required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
