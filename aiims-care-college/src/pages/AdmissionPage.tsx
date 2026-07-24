import React from "react";
import { 
  GraduationCap, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Award,
  HelpCircle
} from "lucide-react";
import { AdmissionForm } from "../components/AdmissionForm";

export const AdmissionPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16 font-sans bg-slate-50/50">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-400" />
            Admissions Session 2026-27 Active
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Online Admission Portal
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Apply online for MBBS, BDS, Nursing, Pharmacy, and Allied Health Sciences. Secure your seat via NEET UG score or Institutional Merit.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Admission Form Component */}
          <div className="lg:col-span-8">
            <AdmissionForm />
          </div>

          {/* Right Sidebar: Key Info & Documents */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Key Dates Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2 text-blue-900 border-b border-slate-100 pb-3">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Important Admission Timeline</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start justify-between pb-2 border-b border-slate-100">
                  <div>
                    <div className="font-bold text-slate-800">Online Application Starts</div>
                    <div className="text-slate-500 text-[11px]">Early Merit Phase</div>
                  </div>
                  <span className="bg-blue-50 text-blue-800 font-mono font-bold px-2 py-0.5 rounded">Active</span>
                </div>

                <div className="flex items-start justify-between pb-2 border-b border-slate-100">
                  <div>
                    <div className="font-bold text-slate-800">NEET Counselling Round 1</div>
                    <div className="text-slate-500 text-[11px]">MCC & State Quota</div>
                  </div>
                  <span className="text-slate-600 font-mono font-semibold">Aug 2026</span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-slate-800">Academic Session Begins</div>
                    <div className="text-slate-500 text-[11px]">Orientation & Hospital Rotations</div>
                  </div>
                  <span className="text-slate-600 font-mono font-semibold">Sep 2026</span>
                </div>
              </div>
            </div>

            {/* Document Checklist */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2 text-emerald-900 border-b border-slate-100 pb-3">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Mandatory Documents Required</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>10th & 12th Class Marksheet & Passing Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>NEET-UG Admit Card & Score Card (For MBBS / BDS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Aadhaar Card / Passport Identity Proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Category Certificate (SC/ST/OBC/EWS if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>8 Passport Size Photos & Migration Certificate</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
