import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-brand">
      <div className="container-xl py-16 md:py-20 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Ready to feel better?
        </h2>
        <p className="text-white/85 mt-3 max-w-md mx-auto">
          Take the AI health check and get your personalized kit in under a minute.
        </p>
        <a
          href="#ai-test"
          className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-7 py-3.5 rounded-full mt-7 hover:-translate-y-0.5 hover:shadow-lg transition-all text-sm"
        >
          Start AI Test <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
