import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import * as api from '../api/client'
import { CheckCircle2 } from 'lucide-react'

export default function Admission() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: params.get('course') || '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [done, setDone] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number'
    if (!form.course.trim()) e.course = 'Course is required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    setSubmitError('')
    try {
      await api.applyAdmission(form)
      setDone(true)
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="container-xl py-24 text-center max-w-md mx-auto">
        <CheckCircle2 className="mx-auto text-brand" size={56} />
        <h1 className="font-display font-bold text-2xl mt-4">Application submitted!</h1>
        <p className="text-muted mt-2">Our admissions team will reach out to you shortly.</p>
      </div>
    )
  }

  return (
    <div className="container-xl py-14 md:py-20 max-w-md mx-auto">
      <h1 className="font-display font-bold text-2xl text-center">Apply for Admission</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-line rounded-2xl p-6 mt-8 space-y-4 shadow-card">
        {submitError && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{submitError}</p>}

        <div>
          <label className="text-xs font-semibold text-muted">Full Name</label>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Your name" />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-muted">Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-muted">Phone Number</label>
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="10-digit mobile number" />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-muted">Course</label>
          <input value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="e.g. MBBS, BDS, Nursing" />
          {errors.course && <p className="text-xs text-red-600 mt-1">{errors.course}</p>}
        </div>

        <button type="submit" disabled={submitting} className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm disabled:opacity-50">
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}
