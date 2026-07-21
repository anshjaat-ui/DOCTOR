export default function Product() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold">Stone Remover Kit</h1>

      <div className="mt-4 space-y-2">
        <p>✔ Supports Kidney Health</p>
        <p>✔ Helps reduce discomfort</p>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold">Why choose this?</h3>
        <p className="text-gray-600">
          Designed for daily wellness support with herbal ingredients.
        </p>
      </div>

      <button className="fixed bottom-0 left-0 w-full bg-green-700 text-white py-4">
        Buy Now
      </button>
    </div>
  );
}