import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Building2,
  FileText
} from "lucide-react";
import { Course } from "../types";

interface CourseCardProps {
  course: Course;
  onSelectForApply?: (courseName: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelectForApply }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      id={course.id}
      className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
    >
      {/* Top Header Banner */}
      <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white relative">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="bg-blue-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
            {course.category}
          </span>

          {course.badge && (
            <span className="bg-emerald-500/90 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3" />
              {course.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
          {course.name}
        </h3>

        <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed font-normal">
          {course.description}
        </p>
      </div>

      {/* Key Stats Bar */}
      <div className="grid grid-cols-2 divide-x divide-slate-100 bg-slate-50 border-y border-slate-100 text-xs py-3 px-4">
        <div className="flex items-center gap-2 pr-2">
          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
            <div className="font-bold text-slate-800">{course.duration.split("(")[0]}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 pl-4">
          <span className="text-sm font-extrabold text-emerald-600">₹</span>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Annual Tuition Fee</div>
            <div className="font-extrabold text-slate-900">{course.feesPerYear} <span className="text-[10px] font-normal text-slate-500">/ yr</span></div>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="p-6 space-y-4 flex-1">
        
        {/* Eligibility Pill */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3 text-xs space-y-1">
          <div className="font-bold text-blue-900 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Eligibility & Entrance:</span>
          </div>
          <div className="text-slate-700 leading-snug">
            {course.eligibility}
          </div>
          {course.neetRequired && (
            <div className="text-[11px] font-semibold text-indigo-700 pt-1">
              • Expected Cutoff: <span className="font-bold">{course.minNeetScore}</span>
            </div>
          )}
        </div>

        {/* Seats & Rotation */}
        <div className="flex items-center justify-between text-xs text-slate-600 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-1.5 font-medium">
            <Users className="w-4 h-4 text-slate-400" />
            <span>Intake Capacity: <strong className="text-slate-900">{course.seats} Seats</strong></span>
          </div>

          <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {course.seatsAvailable} Seats Open
          </div>
        </div>

        {/* Expandable Extra Details */}
        {isExpanded && (
          <div className="space-y-3 text-xs pt-1 animate-in fade-in duration-200">
            <div>
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Hospital Clinical Rotations:</span>
              </div>
              <p className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                {course.hospitalRotations}
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-1">Key Curriculum Highlights:</div>
              <ul className="space-y-1 text-slate-600 pl-1">
                {course.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 focus:outline-none"
        >
          <span>{isExpanded ? "Show Less" : "View Curriculum & Clinical Rotations"}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

      </div>

      {/* Card Action Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-3">
        <Link
          to={`/admission?course=${encodeURIComponent(course.name)}`}
          onClick={() => onSelectForApply && onSelectForApply(course.name)}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-800 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md hover:bg-blue-900 transition-colors"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Apply for {course.shortCode}</span>
        </Link>

        <Link
          to={`/ai-guidance?targetCourse=${encodeURIComponent(course.shortCode)}`}
          className="p-3 bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 rounded-xl transition-colors text-xs font-bold flex items-center justify-center"
          title="Evaluate Eligibility with AI"
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
        </Link>
      </div>
    </div>
  );
};
