import React from "react";
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  HeartPulse, 
  Users, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2,
  Stethoscope
} from "lucide-react";
import { COLLEGE_INFO, FACULTY_MEMBERS } from "../data/collegeData";
import { FacultyCard } from "../components/FacultyCard";
import { CampusShowcase } from "../components/CampusShowcase";

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16 font-sans bg-slate-50/50">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="bg-blue-600/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            Institutional Overview & Heritage
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About AIIMS Care College
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {COLLEGE_INFO.accreditation}
          </p>
        </div>
      </section>

      {/* Director's Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={FACULTY_MEMBERS[0].image}
                alt={FACULTY_MEMBERS[0].name}
                className="w-full h-80 object-cover object-center"
              />
              <div className="bg-slate-900 text-white p-4 space-y-0.5">
                <div className="font-bold text-sm text-amber-300">{FACULTY_MEMBERS[0].name}</div>
                <div className="text-xs text-slate-300">{FACULTY_MEMBERS[0].designation}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest">
              Message from the Director
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              "Training Compassionate Doctors with World-Class Surgical Precision"
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At AIIMS Care College, we believe that medical education is not merely about passing examinations; it is a sacred commitment to preserving human life. From early clinical exposure in our 1,200-bed multi-specialty hospital to VR cadaveric dissection, our curriculum prepares young doctors for global healthcare challenges.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our students consistently achieve top ranks in INI-CET, NEET-PG, USMLE, and PLAB. We welcome you to join our vibrant academic community in New Delhi.
            </p>
          </div>

        </div>
      </section>

      {/* Campus & Hospital Showcase */}
      <section id="hospital" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CampusShowcase />
      </section>

      {/* Faculty Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-blue-800 uppercase tracking-widest">
            Expert Faculty
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Heads of Academic & Surgical Departments
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_MEMBERS.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </section>

    </div>
  );
};
