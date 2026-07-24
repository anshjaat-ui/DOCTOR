import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  GraduationCap, 
  Sparkles, 
  Search, 
  Award, 
  ShieldCheck, 
  HeartPulse, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  FileText, 
  PhoneCall,
  Stethoscope,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { COLLEGE_INFO, COURSES_DATA, TESTIMONIALS, FACULTY_MEMBERS, FAQS } from "../data/collegeData";
import { CourseCard } from "../components/CourseCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { FacultyCard } from "../components/FacultyCard";
import { CampusShowcase } from "../components/CampusShowcase";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredCourses = COURSES_DATA.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-16 font-sans bg-slate-50/50">
      
      {/* 1. HERO SECTION (Modern Vidhya.com style Search & Hero Banner) */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          
          {/* Top Accredited Badge Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="bg-blue-600/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {COLLEGE_INFO.accreditation.split("|")[0]}
            </span>
            <span className="bg-slate-800/80 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-700 backdrop-blur-md flex items-center gap-1">
              <Award className="w-4 h-4 text-amber-400" />
              NIRF Top 10 Medical Institute
            </span>
          </div>

          {/* Hero Headlines */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Shape Your Future in <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Medicine & Healthcare</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              {COLLEGE_INFO.tagline}. Train in our 1,200-bed multi-specialty teaching hospital with VR cadaver dissection and AI career roadmap.
            </p>
          </div>

          {/* Interactive Course & Career Search Bar (Vidhya.com style) */}
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-2xl border border-white/20 text-slate-900 flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2 flex-1 px-3 w-full">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search medical courses (MBBS, BDS, Nursing, Pharmacy, Radiology...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
              />
            </div>

            <button
              onClick={() => navigate(`/courses?search=${encodeURIComponent(searchQuery)}`)}
              className="w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white font-extrabold text-sm px-7 py-3 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
            >
              <span>Find Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Apply for Admission 2026-27</span>
            </Link>

            <Link
              to="/ai-guidance"
              className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-white font-bold text-sm px-7 py-4 rounded-2xl border border-slate-700 backdrop-blur-md transition-all hover:border-emerald-500/50"
            >
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Try AI Career Guidance</span>
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8 border-t border-slate-800/80">
            {COLLEGE_INFO.stats.map((st, i) => (
              <div key={i} className="text-center p-3 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono">{st.value}</div>
                <div className="text-xs font-bold text-slate-200">{st.label}</div>
                <div className="text-[10px] text-slate-400 truncate">{st.subtext}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. ABOUT COLLEGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-blue-600" />
              About AIIMS Care College
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A Legacy of Academic Rigor & Patient Care Excellence
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Founded in 2008 in New Delhi's Medical Enclave, AIIMS Care College stands as one of India's premier medical institutions. Approved by the National Medical Commission (NMC) and Dental Council of India (DCI), the college integrates cutting-edge medical simulation with extensive bedside hospital training.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <HeartPulse className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-bold block text-sm">1,200 Bed Hospital Wing</strong>
                  <span className="text-slate-600">Daily OPD patient turnout exceeding 3,500+ across 24 specialties.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <Stethoscope className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-bold block text-sm">98.6% PG & Residency Placement</strong>
                  <span className="text-slate-600">Alumni serving in AIIMS, Apollo, NHS UK, and top US hospitals.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold text-sm text-blue-800 hover:text-blue-950 transition-colors"
              >
                <span>Read Full Director's Message & Institutional Heritage</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="AIIMS Care Teaching Hospital"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Main Academic & Hospital Block
                </div>
                <div className="text-lg font-bold">AIIMS Care Campus, Sector 18</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COURSES PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Academic Programs 2026-27
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Featured Medical & Healthcare Degrees
            </h2>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-bold px-5 py-3 rounded-xl transition-colors shrink-0"
          >
            <span>Explore All {COURSES_DATA.length} Courses & Fee Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 4. AI CAREER GUIDANCE TEASER WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-blue-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/30">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>AI-Powered Medical Career Advisor</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Not sure whether to choose MBBS, BDS, Nursing, or Pharmacy?
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Our Gemini AI engine evaluates your 10+2 PCB marks, NEET score, and clinical interests to recommend the highest matching course and career scope.
              </p>

              <div className="pt-2">
                <Link
                  to="/ai-guidance"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Launch AI Career Evaluator Now</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3 backdrop-blur-md">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                How AI Logic Evaluates You:
              </div>

              <ul className="space-y-2 text-xs text-slate-200 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High NEET Score (550+) → MBBS Surgery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Medium Score (400-550) → BDS / Nursing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Merit / 10+2 → B.Pharm & Radiology</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest">
            The AIIMS Care Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose AIIMS Care College?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1,200 Bed Multi-Specialty Hospital</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gain compulsory bedside clinical rotation experience across Trauma, Cardiac Surgery, ICU, Dialysis, and Pediatric wards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">VR Cadaveric & Robotic Simulation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              State-of-the-art anatomy dissection tables, virtual laparoscopic rigs, and high-fidelity patient mannequins for risk-free practice.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">USMLE & INI-CET PG Mentoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Integrated PG entrance coaching modules built into the academic schedule with top ranker alumni guidance.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CAMPUS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CampusShowcase />
      </section>

      {/* 7. DISTINGUISHED FACULTY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest">
            World-Class Mentors
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Learn from Eminent Professors & Surgeons
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_MEMBERS.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest">
            Alumni Success Stories
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hear from Our Resident Doctors & Surgeons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Admissions Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180 text-blue-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Begin Your Medical Career Today
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Admissions for 2026-27 session are currently active. Submit your pre-admission form online or connect with our toll-free counselor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-base px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Apply Online Now</span>
            </Link>

            <a
              href={`tel:${COLLEGE_INFO.admissionsHotline}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-7 py-4 rounded-2xl border border-slate-700 transition-all"
            >
              <PhoneCall className="w-5 h-5 text-amber-400" />
              <span>Call Counselor: {COLLEGE_INFO.admissionsHotline}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
