export default function Product({ params }) {
  return (
    <div>
      <h2>Product Page</h2>
      <p>ID: {params.id}</p>
    </div>
  );
}
