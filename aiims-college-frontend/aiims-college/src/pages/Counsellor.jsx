import { useState } from 'react'
import * as api from '../api/client'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Counsellor() {
  const [marks, setMarks] = useState('')
  const [result, setResult] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await api.askAI({ marks: Number(marks) })
      setResult(res)
      setStatus('done')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  function reset() {
    setMarks('')
    setResult(null)
    setStatus('idle')
  }

  return (
    <section className="bg-ink text-white">
      <div className="container-xl py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-light">
            <Sparkles size={14} /> AI Course Counsellor
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            Find your best-fit course.
          </h1>
          <p className="text-white/60 mt-3">Enter your marks (%) and get an instant course recommendation.</p>
        </div>

        <div className="max-w-md mx-auto bg-white text-ink rounded-2xl p-6 md:p-8 shadow-card">
          {status !== 'done' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
              <div>
                <label className="text-xs font-semibold text-muted">Your marks (%)</label>
                <input
                  required
                  type="number"
                  min="0"
                  max="100"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="e.g. 78"
                />
              </div>
              <button type="submit" disabled={status === 'loading'} className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm disabled:opacity-50">
                {status === 'loading' ? 'Analyzing...' : 'Get Recommendation'}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand">Recommended</span>
              <h2 className="font-display font-bold text-2xl mt-2">{result}</h2>
              <div className="flex gap-3 justify-center mt-6">
                <Link to={`/admission?course=${encodeURIComponent(result)}`} className="btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm">
                  Apply Now <ArrowRight size={16} />
                </Link>
                <button onClick={reset} className="btn-outline px-6 py-3 rounded-full font-semibold text-sm">Try Again</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
