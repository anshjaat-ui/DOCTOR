import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Brain, 
  Target, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  RefreshCw, 
  Loader2, 
  Stethoscope,
  GraduationCap,
  BookOpen,
  ChevronRight,
  Zap
} from "lucide-react";
import { AIGuidanceInput, AIGuidanceResult } from "../types";

interface AIFormProps {
  initialCourse?: string;
}

export const AIForm: React.FC<AIFormProps> = ({ initialCourse }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<AIGuidanceInput>({
    neetScore: "",
    pcbPercentage: "82",
    interests: "Surgical & Clinical Practice",
    preferredStyle: "Direct Patient Care & Bedside Rotations",
    careerGoal: "Become a Top Specialist Doctor or Clinical Researcher",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIGuidanceResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/ai-guidance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success && data.guidance) {
        setResult(data.guidance);
      } else {
        throw new Error(data.message || "Failed to generate guidance");
      }
    } catch (err: any) {
      console.error("AI Guidance request error:", err);
      // Local fallback calculation matching user requirements if backend fails
      const score = Number(formData.neetScore) || 0;
      const pcb = Number(formData.pcbPercentage) || 0;

      let course = "B.Pharm (Bachelor of Pharmacy)";
      let conf = 84;
      let reason = "Your profile shows strong interest in pharmaceuticals, drug safety, and medical technology.";

      if (score >= 550 || pcb >= 85) {
        course = "MBBS (Bachelor of Medicine & Bachelor of Surgery)";
        conf = 96;
        reason = "Your high marks/NEET score align with top-tier eligibility for MBBS at AIIMS Care College.";
      } else if (score >= 400 || pcb >= 70) {
        course = "BDS (Bachelor of Dental Surgery) / B.Sc Nursing";
        conf = 88;
        reason = "Your solid academic foundation qualifies you for clinical programs like BDS or Nursing with extensive hospital rotations.";
      }

      setResult({
        recommendedCourse: course,
        matchConfidence: conf,
        reasoning: reason,
        alternativeCourses: [
          { course: "B.Sc Medical Radiology", reason: "Focus on modern diagnostics and imaging technology." },
          { course: "Pharm.D (Doctor of Pharmacy)", reason: "Clinical doctorate with hospital ward rounds." },
        ],
        careerOutlook: "Excellent opportunities across AIIMS Care Network Hospitals, clinical research labs, and higher post-graduate specializations.",
        neetCutoffAdvice: "Focus on high-yield Biology and Chemistry revision for counselling rounds.",
        recommendedNextSteps: [
          "Connect with AIIMS Care Admissions Counselor.",
          "Check eligibility matrix on our Courses page.",
          "Submit pre-admission application online.",
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden font-sans">
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
          <span>Gemini AI Medical Advisor Engine</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          AI Career Guidance & Specialization Evaluator
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
          Input your academic scores and healthcare interests. Our AI evaluates your profile against NMC cutoffs, clinical aptitude, and career prospects to recommend the ideal course at AIIMS Care College.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8">
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Field 1: NEET Score */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  NEET UG Score (Out of 720) <span className="text-slate-400 font-normal">(Optional if not appeared)</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="720"
                    placeholder="e.g. 580 (Leave blank for Direct Merit)"
                    value={formData.neetScore}
                    onChange={(e) => setFormData({ ...formData, neetScore: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                  <div className="absolute right-3 top-3 text-xs text-slate-400 font-bold">
                    / 720
                  </div>
                </div>
              </div>

              {/* Field 2: 10+2 PCB Percentage */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  10+2 PCB Aggregate Marks (%) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="40"
                    max="100"
                    required
                    placeholder="e.g. 85"
                    value={formData.pcbPercentage}
                    onChange={(e) => setFormData({ ...formData, pcbPercentage: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                  <div className="absolute right-3 top-3 text-xs text-slate-400 font-bold">
                    %
                  </div>
                </div>
              </div>

              {/* Field 3: Core Interests */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Core Clinical & Medical Interest <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                >
                  <option value="Surgical & Clinical Practice">Surgical & Clinical Practice (MBBS / Surgery)</option>
                  <option value="Oral Healthcare & Dental Surgery">Oral Healthcare & Dental Surgery (BDS)</option>
                  <option value="Critical Patient Care & Nursing">Critical Patient Care & ICU Nursing (B.Sc Nursing)</option>
                  <option value="Pharmaceutical R&D & Drug Formulation">Pharmaceutical R&D & Drug Formulation (B.Pharm / Pharm.D)</option>
                  <option value="Diagnostic Imaging & Medical Technology">Diagnostic Imaging & Radiology (B.Sc Radiology)</option>
                </select>
              </div>

              {/* Field 4: Preferred Clinical Style */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Preferred Work & Internship Style
                </label>
                <select
                  value={formData.preferredStyle}
                  onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                >
                  <option value="Direct Patient Care & Bedside Rotations">Direct Patient Care & Bedside Hospital Rotations</option>
                  <option value="Laboratory Science & High-Tech Diagnostics">Laboratory Science & High-Tech Diagnostics</option>
                  <option value="Pharmaceutical Industry & Clinical Research">Pharmaceutical Industry & Clinical Research</option>
                  <option value="Dental Clinic Setup & Oral Surgery">Dental Clinic Setup & Oral Surgery Practice</option>
                </select>
              </div>

            </div>

            {/* Field 5: Ultimate Goal */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Ultimate Career Goal
              </label>
              <input
                type="text"
                placeholder="e.g. Become a Neurosurgeon, Open a Cosmetic Dental Clinic, or Work in UK NHS"
                value={formData.careerGoal}
                onChange={(e) => setFormData({ ...formData, careerGoal: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-700 to-blue-800 text-white font-extrabold text-base py-4 px-6 rounded-2xl shadow-xl shadow-emerald-700/20 hover:from-emerald-700 hover:to-blue-900 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Analyzing Scores & AI Cutoffs...</span>
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5 text-emerald-300" />
                    <span>Generate AI Career Recommendation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* AI Guidance Result Output Card */
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Primary Recommendation Header */}
            <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white p-6 rounded-2xl border border-blue-800 shadow-lg space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Primary AI Recommendation
                </span>

                <div className="bg-slate-800/80 px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-slate-700">
                  Profile Match: {result.matchConfidence}%
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {result.recommendedCourse}
              </h3>

              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {result.reasoning}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to={`/admission?course=${encodeURIComponent(result.recommendedCourse)}`}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm px-5 py-2.5 rounded-xl shadow-md transition-colors"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply For {result.recommendedCourse.split("(")[0]}</span>
                </Link>

                <button
                  onClick={() => setResult(null)}
                  className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Re-evaluate Profile</span>
                </button>
              </div>
            </div>

            {/* Alternative Pathways */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.alternativeCourses.map((alt, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-blue-600" />
                    <span>Alternative Path #{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{alt.course}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{alt.reason}</p>
                </div>
              ))}
            </div>

            {/* Career Outlook & NEET Cutoff Advice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 space-y-2">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span>Career Outlook & Salary Scope</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {result.careerOutlook}
                </p>
              </div>

              <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>NEET & Merit Entry Strategy</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {result.neetCutoffAdvice}
                </p>
              </div>
            </div>

            {/* Recommended Next Steps */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>Recommended Action Steps at AIIMS Care College</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {result.recommendedNextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
