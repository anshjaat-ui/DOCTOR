import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { isLoggedIn, email, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-line">
      <div className="container-xl flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center text-white font-display font-bold text-sm">A</span>
          <span className="font-display font-bold text-lg">AIIMS Care College</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted">
          <Link to="/courses" className="hover:text-ink">Courses</Link>
          <Link to="/admission" className="hover:text-ink">Apply for Admission</Link>
          <Link to="/counsellor" className="hover:text-ink">AI Counsellor</Link>
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <button onClick={() => { logout(); navigate('/') }} className="hidden sm:block text-sm font-medium text-muted hover:text-ink" title={email}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className="hidden sm:block text-sm font-medium text-muted hover:text-ink">Log In</Link>
          )}
          <Link to="/admission" className="btn-brand text-sm font-semibold px-5 py-2.5 rounded-full">Apply Now</Link>
          <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line px-5 py-4 flex flex-col gap-3 text-sm font-medium">
          <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link to="/admission" onClick={() => setOpen(false)}>Apply for Admission</Link>
          <Link to="/counsellor" onClick={() => setOpen(false)}>AI Counsellor</Link>
          {isLoggedIn ? (
            <button onClick={() => { logout(); setOpen(false); navigate('/') }} className="text-left">Log Out</button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>Log In</Link>
          )}
        </div>
      )}
    </header>
  )
}
