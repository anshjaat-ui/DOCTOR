import { Mail } from 'lucide-react'

export default function Affiliate() {
  return (
    <main className="bg-medi-bg min-h-[70vh] font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10 bg-medi-panel border border-accent/20 my-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">Become an Affiliate</h1>
        <div className="space-y-4 text-sm text-gray-300">
          <p>
            Earn commission by promoting AIIMS Care products on your blog, YouTube channel,
            or social media. Share your unique link, and earn a percentage on every sale you refer.
          </p>

          <p>Interested in joining our affiliate program? Reach out to us:</p>

          {/* ✅ FIX START */}
          <a
            href="mailto:affiliates@aiimscare.com"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <Mail size={16} />
            affiliates@aiimscare.com
          </a>
          {/* ✅ FIX END */}

        </div>
      </div>
    </main>
  )
}
