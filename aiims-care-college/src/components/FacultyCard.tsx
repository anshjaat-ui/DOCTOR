import React from "react";
import { Award, BookOpen, Clock, Stethoscope } from "lucide-react";
import { Faculty } from "../types";

interface FacultyCardProps {
  faculty: Faculty;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-sm inline-block mb-1">
            {faculty.department}
          </span>
          <h3 className="text-base font-bold text-white line-clamp-1">
            {faculty.name}
          </h3>
          <p className="text-xs text-slate-300 font-medium">
            {faculty.designation}
          </p>
        </div>
      </div>

      <div className="p-5 space-y-3 text-xs">
        <div className="flex items-start gap-2 text-slate-700">
          <Stethoscope className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <span className="font-semibold text-slate-800">{faculty.qualification}</span>
        </div>

        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1">
          <div className="text-[10px] uppercase font-bold text-slate-400">Clinical Expertise & Specialization</div>
          <div className="font-medium text-slate-800 text-[11px] leading-snug">{faculty.specialty}</div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-slate-600 pt-1 border-t border-slate-100 text-[11px]">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{faculty.experienceYears}+ Yrs Exp</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium justify-end text-blue-800">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>{faculty.researchPapers} Research Papers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
