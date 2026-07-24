import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown, 
  Award, 
  HeartPulse, 
  Clock,
  ShieldCheck,
  FileText
} from "lucide-react";
import { COLLEGE_INFO, COURSES_DATA } from "../data/collegeData";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* Top Announcement & Emergency Bar */}
      <div className="bg-slate-900 text-slate-100 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              {COLLEGE_INFO.accreditation.split("|")[0]}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Admissions 2026-27 Open (NEET & Direct Merit Quota)
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a 
              href={`tel:${COLLEGE_INFO.admissionsHotline}`}
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              Toll-Free: {COLLEGE_INFO.admissionsHotline}
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href={`mailto:${COLLEGE_INFO.email}`}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {COLLEGE_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-900 via-blue-700 to-teal-600 p-0.5 shadow-md group-hover:shadow-blue-500/20 transition-all">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-blue-900 font-extrabold text-xl">
                  <HeartPulse className="w-7 h-7 text-blue-800 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-800 transition-colors">
                    AIIMS CARE
                  </span>
                  <span className="bg-blue-100 text-blue-900 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                    COLLEGE
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                  Institute of Medical Sciences & Hospital
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive("/")
                    ? "bg-blue-50 text-blue-800 font-bold"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                <Link
                  to="/courses"
                  className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all ${
                    isActive("/courses")
                      ? "bg-blue-50 text-blue-800 font-bold"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-700" />
                </Link>

                {isCoursesDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-72 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                      <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Offered Degrees & Diplomas
                      </div>
                      {COURSES_DATA.map((course) => (
                        <Link
                          key={course.id}
                          to={`/courses#${course.id}`}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          <div>
                            <div className="font-bold">{course.shortCode}</div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">{course.name}</div>
                          </div>
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                            {course.duration.split(" ")[0]} {course.duration.split(" ")[1]}
                          </span>
                        </Link>
                      ))}
                      <div className="border-t border-slate-100 pt-2 mt-1">
                        <Link
                          to="/courses"
                          className="block text-center text-xs font-bold text-blue-700 hover:text-blue-900 py-1"
                        >
                          View All Courses & Fee Matrix →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/admission"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive("/admission")
                    ? "bg-blue-50 text-blue-800 font-bold"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                Admission
              </Link>

              <Link
                to="/ai-guidance"
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-all ${
                  isActive("/ai-guidance")
                    ? "bg-emerald-50 text-emerald-800 font-bold border border-emerald-200"
                    : "text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span>AI Career Guide</span>
                <span className="bg-emerald-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">
                  NEW
                </span>
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive("/about")
                    ? "bg-blue-50 text-blue-800 font-bold"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive("/contact")
                    ? "bg-blue-50 text-blue-800 font-bold"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Header Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-900/20 hover:from-blue-900 hover:to-indigo-950 hover:shadow-blue-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply Now</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-900" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                isActive("/") ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              to="/courses"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                isActive("/courses") ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Courses & Fees
            </Link>

            <Link
              to="/admission"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                isActive("/admission") ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Admission Form 2026
            </Link>

            <Link
              to="/ai-guidance"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>AI Career Guidance</span>
              </div>
              <span className="text-xs bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">
                AI Powered
              </span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                isActive("/about") ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              About AIIMS Care
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                isActive("/contact") ? "bg-blue-50 text-blue-800" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-2">
              <Link
                to="/admission"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white text-base font-bold py-3.5 rounded-xl shadow-lg shadow-blue-900/20"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Apply for Admission Now</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
