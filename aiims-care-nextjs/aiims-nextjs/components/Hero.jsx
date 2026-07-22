import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-cloud">
      <div className="container-xl grid md:grid-cols-2 gap-12 items-center py-16 md:py-28">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-brand bg-brand-soft px-3 py-1.5 rounded-full">
            Doctor-formulated · Real results
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mt-6">
            Your health,
            <br />
            solved with a plan.
          </h1>
          <p className="text-muted text-lg mt-6 max-w-md">
            Take a 60-second AI health check and get a doctor-formulated kit
            matched to exactly what your body needs.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#ai-test"
              className="btn-brand inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm"
            >
              Start AI Test <ArrowRight size={16} />
            </a>
            <a
              href="#products"
              className="btn-outline-brand inline-flex items-center px-7 py-4 rounded-full font-semibold text-sm"
            >
              Browse Kits
            </a>
          </div>
        </div>

        <div className="relative fade-up">
          <div className="absolute -inset-6 bg-brand-soft rounded-[2rem] -z-10" />
          <div className="bg-white rounded-2xl shadow-card p-6">
            <Image
              src="/images/stone-remover-kit.png"
              alt="AIIMS Care wellness kit"
              width={600}
              height={600}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
