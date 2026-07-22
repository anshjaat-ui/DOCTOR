export default function PressReleases() {
  return (
    <main className="bg-medi-bg min-h-[70vh] font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10 bg-medi-panel border border-accent/20 my-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">Press Releases</h1>
        <div className="text-sm text-gray-400">
          <p>No press releases published yet. Check back soon for company news and updates.</p>
          <p className="mt-4">
            For media inquiries, please reach out via our
            <a href="/contact" className="text-accent hover:underline"> Contact Us</a> page.
          </p>
        </div>
      </div>
    </main>
  )
}
