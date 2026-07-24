import React from "react";
import { Link } from "react-router-dom";
import { 
  HeartPulse, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  GraduationCap, 
  ExternalLink,
  Clock,
  ChevronRight
} from "lucide-react";
import { COLLEGE_INFO } from "../data/collegeData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: College Intro */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 p-0.5 flex items-center justify-center text-white">
                <HeartPulse className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  AIIMS CARE
                </span>
                <span className="ml-1.5 bg-blue-900 text-blue-200 text-xs font-bold px-2 py-0.5 rounded uppercase">
                  COLLEGE
                </span>
                <p className="text-xs text-slate-400 font-medium">
                  Institute of Medical Sciences & Hospital
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              AIIMS Care College is a premier medical education & research institute affiliated with NMC and DCI. Equipped with a 1,200+ bed multi-specialty teaching hospital, VR cadaveric dissection labs, and AI-assisted clinical career planning.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-white">NAAC Grade A++</div>
                  <div className="text-[10px] text-slate-400">Highest Institutional Rating</div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-white">NMC & DCI Approved</div>
                  <div className="text-[10px] text-slate-400">Govt of India Recognized</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-blue-500 pl-2.5">
              Academics
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>MBBS Degree Program</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>BDS Dental Surgery</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>B.Sc Nursing (Honours)</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>B.Pharm & Pharm.D</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>B.Sc Medical Radiology</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Fees & Scholarship Matrix</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & AI Guidance */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2.5">
              Student Portals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/admission" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 font-medium text-white">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  <span>Online Admission Form 2026</span>
                </Link>
              </li>
              <li>
                <Link to="/ai-guidance" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AI Career Guidance Advisor</span>
                </Link>
              </li>
              <li>
                <Link to="/admission#status" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Check Application Status</span>
                </Link>
              </li>
              <li>
                <Link to="/about#hospital" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Teaching Hospital & OPD</span>
                </Link>
              </li>
              <li>
                <Link to="/about#campus" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Hostels & Campus Facilities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Emergency */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-amber-500 pl-2.5">
              Campus & Emergency
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{COLLEGE_INFO.address}</span>
              </div>

              <div className="bg-amber-950/60 border border-amber-800/60 rounded-xl p-3 space-y-1">
                <div className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                  24/7 Trauma & Emergency
                </div>
                <a 
                  href={`tel:${COLLEGE_INFO.emergencyHelpline}`}
                  className="text-sm font-extrabold text-amber-200 block hover:underline"
                >
                  {COLLEGE_INFO.emergencyHelpline}
                </a>
              </div>

              <div className="bg-blue-950/60 border border-blue-800/60 rounded-xl p-3 space-y-1">
                <div className="text-[10px] uppercase tracking-wider text-blue-300 font-bold">
                  Admissions Inquiry Desk
                </div>
                <a 
                  href={`tel:${COLLEGE_INFO.admissionsHotline}`}
                  className="text-sm font-extrabold text-blue-200 block hover:underline"
                >
                  {COLLEGE_INFO.admissionsHotline}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COLLEGE_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Admission</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Anti-Ragging Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">NMC Mandate Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
