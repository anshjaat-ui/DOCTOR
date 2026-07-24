import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Stethoscope, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="bg-cloud">
        <div className="container-xl grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-brand bg-brand-soft px-3 py-1.5 rounded-full">
              Admissions Open
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 leading-tight">
              Find the right course.<br />Start your future here.
            </h1>
            <p className="text-muted text-lg mt-5 max-w-md">
              Explore our courses, get instant AI-powered counselling based on your marks, and apply
              for admission in minutes.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/counsellor" className="btn-brand inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm">
                Get Course Advice <ArrowRight size={16} />
              </Link>
              <Link to="/courses" className="btn-outline px-7 py-3.5 rounded-full font-semibold text-sm">
                Browse Courses
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <GraduationCap className="text-brand" size={28} />
              <p className="font-display font-bold mt-3">Multiple Courses</p>
              <p className="text-sm text-muted mt-1">MBBS, BDS, Nursing, Pharmacy & more</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card mt-8">
              <Stethoscope className="text-brand" size={28} />
              <p className="font-display font-bold mt-3">AI Counsellor</p>
              <p className="text-sm text-muted mt-1">Get matched by your marks instantly</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card col-span-2">
              <Users className="text-brand" size={28} />
              <p className="font-display font-bold mt-3">Simple Application</p>
              <p className="text-sm text-muted mt-1">Apply online in under 2 minutes, no paperwork upfront</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
