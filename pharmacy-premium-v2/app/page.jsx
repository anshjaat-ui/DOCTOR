import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-700">
        Complete Wellness Solution
      </h1>
      <p className="text-gray-600 mt-2">
        Doctor Guided | Natural Support
      </p>

      <Link href="/ai-test">
        <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg">
          Take AI Test
        </button>
      </Link>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg text-center">Kidney</div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">Hair</div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">Skin</div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Featured Product</h2>
        <Link href="/product/1">
          <div className="border p-4 mt-3 rounded-xl shadow">
            Stone Remover Kit - ₹499
          </div>
        </Link>
      </div>
    </div>
  );
}