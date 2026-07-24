import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    setSubmitting(true)
    try {
      await register(form.name, form.email, form.password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container-xl py-20 max-w-sm mx-auto">
      <h1 className="font-display font-bold text-2xl text-center">Create your account</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-line rounded-2xl p-6 mt-8 space-y-4 shadow-card">
        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
        <div>
          <label className="text-xs font-semibold text-muted">Full Name</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Your name" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted">Email</label>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted">Password</label>
          <input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="At least 6 characters" />
        </div>
        <button type="submit" disabled={submitting} className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm disabled:opacity-50">
          {submitting ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
      <p className="text-center text-sm text-muted mt-5">
        Already have an account? <Link to="/login" className="text-brand font-semibold underline">Log in</Link>
      </p>
    </div>
  )
}
