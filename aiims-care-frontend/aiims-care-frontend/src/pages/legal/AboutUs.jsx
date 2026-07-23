export default function AboutUs() {
  return (
    <main className="bg-medi-bg min-h-[70vh] font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10 bg-medi-panel border border-accent/20 my-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">
          About AIIMS Care
        </h1>

        <div className="space-y-4 text-sm text-gray-300">
          <p>
            AIIMS Care is an online shopping destination bringing together electronics,
            fashion, home & kitchen essentials, and more — all under one roof, with a focus on
            quality, fast delivery, and a smooth shopping experience.
          </p>

          <p>
            We started with a simple idea: shopping online should feel premium, trustworthy, and
            effortless. From browsing to checkout to delivery, every step is designed with our
            customers in mind.
          </p>

          <p>
            Have questions or feedback? We'd love to hear from you — visit our{" "}
            <a
              href="mailto:contact@aiimscare.com"
              className="text-accent hover:underline"
            >
              Contact Us
            </a>{" "}
            page.
          </p>
        </div> {/* ✅ YE MISSING THA */}

      </div>
    </main>
  )
}
