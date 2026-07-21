export default function ProductPage({ params }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Product ID: {params.id}</h1>
      <p>This is product detail page</p>
    </div>
  );
}
