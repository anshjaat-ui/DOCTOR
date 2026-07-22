'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getRecommendation } from '@/lib/aiLogic'
import { ArrowRight, Sparkles } from 'lucide-react'

const CONCERNS = [
  { id: 'kidney', label: 'Kidney / Urinary' },
  { id: 'skin', label: 'Skin' },
  { id: 'hair', label: 'Hair' },
  { id: 'dental', label: 'Dental' },
  { id: 'joint', label: 'Joint / Pain' },
  { id: 'energy', label: 'Low Energy' },
]

export default function AIForm() {
  const [age, setAge] = useState('')
  const [concern, setConcern] = useState('')
  const [severity, setSeverity] = useState('1')
  const [duration, setDuration] = useState('short')
  const [result, setResult] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!age || !concern) return
    const rec = getRecommendation({ age, concern, severity, duration })
    setResult(rec)
  }

  function reset() {
    setResult(null)
  }

  return (
    <section id="ai-test" className="bg-ink text-white">
      <div className="container-xl py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-brand-light">
            <Sparkles size={14} /> AI Health Check
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 tracking-tight">
            60 seconds to your plan.
          </h2>
          <p className="text-white/60 mt-3">
            Real, rule-based logic — answer honestly for the most useful result.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white text-ink rounded-2xl p-6 md:p-8 shadow-card">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-muted">Your age</label>
                <input
                  required
                  type="number"
                  min="10"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="e.g. 32"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted">Main concern</label>
                <div className="grid grid-cols-2 gap-2 mt-1.5">
                  {CONCERNS.map((c) => (
                    <button
                      type="button"
                      key={c.id}
                      onClick={() => setConcern(c.id)}
                      className={`text-sm px-3 py-2.5 rounded-xl border transition-colors ${
                        concern === c.id
                          ? 'bg-ink text-white border-ink'
                          : 'border-line hover:border-ink'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted">How severe is it?</label>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full mt-2 accent-brand"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted">How long has this been going on?</label>
                <div className="flex gap-2 mt-1.5">
                  {[
                    { id: 'short', label: '< 2 weeks' },
                    { id: 'medium', label: '2–8 weeks' },
                    { id: 'long', label: '2+ months' },
                  ].map((d) => (
                    <button
                      type="button"
                      key={d.id}
                      onClick={() => setDuration(d.id)}
                      className={`flex-1 text-xs px-2 py-2.5 rounded-xl border transition-colors ${
                        duration === d.id
                          ? 'bg-ink text-white border-ink'
                          : 'border-line hover:border-ink'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!age || !concern}
                className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm disabled:opacity-40"
              >
                Get My Recommendation
              </button>
            </form>
          ) : (
            <div className="text-center">
              <span className="text-xs font-semibold tracking-wide uppercase text-brand">
                AI Suggested Kit
              </span>
              <h3 className="font-display font-bold text-2xl mt-2">{result.product.name}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{result.reason}</p>

              {result.doctorRecommended && (
                <p className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-4">
                  Based on your answers, we recommend a quick doctor consult alongside this kit.
                </p>
              )}

              <div className="flex gap-3 justify-center mt-6">
                <Link
                  href={`/checkout?product=${result.product.id}`}
                  className="btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                >
                  View Kit <ArrowRight size={16} />
                </Link>
                <button
                  onClick={reset}
                  className="btn-outline-brand px-6 py-3 rounded-full font-semibold text-sm"
                >
                  Retake Test
                </button>
              </div>
              <p className="text-[11px] text-muted mt-5">
                This is general guidance, not a medical diagnosis. For persistent symptoms, please consult a doctor.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
