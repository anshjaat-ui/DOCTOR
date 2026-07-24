import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api/client'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    api
      .getCourses()
      .then((data) => {
        setCourses(data || [])
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="container-xl py-14 md:py-20">
      <h1 className="font-display font-extrabold text-3xl md:text-4xl">Our Courses</h1>
      <p className="text-muted mt-2">Browse available courses and apply directly.</p>

      {status === 'loading' && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-cloud animate-pulse" />
          ))}
        </div>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mt-8">
          Couldn&apos;t load courses. Check that VITE_API_URL points to the live backend.
        </p>
      )}

      {status === 'ready' && courses.length === 0 && (
        <p className="text-muted mt-8 text-sm">No courses added yet — add some from the admin/API.</p>
      )}

      {status === 'ready' && courses.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {courses.map((c) => (
            <div key={c._id} className="bg-white border border-line rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-[4/3] bg-cloud">
                {c.image && <img src={c.image} alt={c.name} className="w-full h-full object-cover" />}
              </div>
              <div className="p-4">
                <p className="font-display font-bold">{c.name}</p>
                <p className="text-sm text-muted mt-1 line-clamp-2">{c.description}</p>
                <p className="font-display font-bold text-lg mt-2">₹{Number(c.price).toLocaleString('en-IN')}</p>
                <Link
                  to={`/admission?course=${encodeURIComponent(c.name)}`}
                  className="btn-brand block text-center mt-3 py-2.5 rounded-full text-sm font-semibold"
                >
                  Apply for this course
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
