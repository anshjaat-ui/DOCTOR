import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(form.email, form.password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container-xl py-20 max-w-sm mx-auto">
      <h1 className="font-display font-bold text-2xl text-center">Welcome back</h1>
      <form onSubmit={handleSubmit} className="bg-white border border-line rounded-2xl p-6 mt-8 space-y-4 shadow-card">
        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
        <div>
          <label className="text-xs font-semibold text-muted">Email</label>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted">Password</label>
          <input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full mt-1.5 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="••••••••" />
        </div>
        <button type="submit" disabled={submitting} className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm disabled:opacity-50">
          {submitting ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      <p className="text-center text-sm text-muted mt-5">
        New here? <Link to="/signup" className="text-brand font-semibold underline">Create an account</Link>
      </p>
    </div>
  )
}
