'use client'

import { useState } from 'react'
import Link from 'next/link'
import * as api from '@/lib/api'
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
  const [concern, setConcern] = useState('')
  const [questions, setQuestions] = useState([])
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [status, setStatus] = useState('picking') // picking | loadingQuestions | asking | analyzing | result | error
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  async function pickConcern(id) {
    setConcern(id)
    setStatus('loadingQuestions')
    setError('')
    try {
      const qs = await api.getAIQuestions(id)
      if (qs.length === 0) {
        setError('No questions configured for this concern yet — please try another, or add questions from the admin panel.')
        setStatus('picking')
        return
      }
      setQuestions(qs)
      setAnswers([])
      setStep(0)
      setStatus('asking')
    } catch (err) {
      setError(err.message)
      setStatus('picking')
    }
  }

  async function answer(optionIndex) {
    const q = questions[step]
    const nextAnswers = [...answers, { questionId: q._id, optionIndex }]
    setAnswers(nextAnswers)

    if (step + 1 < questions.length) {
      setStep(step + 1)
      return
    }

    setStatus('analyzing')
    try {
      const data = await api.analyzeAI({ category: concern, answers: nextAnswers })
      setResult(data)
      setStatus('result')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  function reset() {
    setConcern('')
    setQuestions([])
    setAnswers([])
    setStep(0)
    setResult(null)
    setError('')
    setStatus('picking')
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
            Backed by real, database-driven scoring logic.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white text-ink rounded-2xl p-6 md:p-8 shadow-card">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4">{error}</p>
          )}

          {status === 'picking' && (
            <div>
              <label className="text-xs font-semibold text-muted">Main concern</label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {CONCERNS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => pickConcern(c.id)}
                    className="text-sm px-3 py-2.5 rounded-xl border border-line hover:border-ink transition-colors"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {status === 'loadingQuestions' && (
            <p className="text-sm text-muted text-center py-6">Loading questions...</p>
          )}

          {status === 'asking' && questions[step] && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-muted uppercase">{concern}</span>
                <span className="text-xs text-muted">{step + 1}/{questions.length}</span>
              </div>
              <p className="font-display font-semibold text-lg mb-4">{questions[step].question}</p>
              <div className="space-y-2">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => answer(i)}
                    className="w-full text-left text-sm px-4 py-3 rounded-xl border border-line hover:border-brand hover:bg-brand-soft transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button onClick={reset} className="text-xs text-muted underline mt-4">Start over</button>
            </div>
          )}

          {status === 'analyzing' && (
            <p className="text-sm text-muted text-center py-6">Analyzing your answers...</p>
          )}

          {status === 'result' && result?.product && (
            <div className="text-center">
              <span className="text-xs font-semibold tracking-wide uppercase text-brand">AI Suggested Kit</span>
              <h3 className="font-display font-bold text-2xl mt-2">{result.product.name}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{result.product.tagline}</p>

              {result.doctorRecommended && (
                <p className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-4">
                  Based on your answers, we recommend a quick doctor consult alongside this kit.
                </p>
              )}

              <div className="flex gap-3 justify-center mt-6">
                <Link
                  href={`/checkout?product=${result.product._id}`}
                  className="btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                >
                  View Kit <ArrowRight size={16} />
                </Link>
                <button onClick={reset} className="btn-outline-brand px-6 py-3 rounded-full font-semibold text-sm">
                  Retake Test
                </button>
              </div>
              <p className="text-[11px] text-muted mt-5">
                This is general guidance, not a medical diagnosis. For persistent symptoms, please consult a doctor.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center">
              <button onClick={reset} className="btn-brand px-6 py-3 rounded-full font-semibold text-sm">
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
