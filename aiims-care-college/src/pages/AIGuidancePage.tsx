import React from "react";
import { Sparkles, Brain, Compass, BookOpen, ShieldCheck } from "lucide-react";
import { AIForm } from "../components/AIForm";

export const AIGuidancePage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16 font-sans bg-slate-50/50">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Gemini 3.6 Flash Powered
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            AI Medical Career Guidance
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get personalized career counseling, course recommendations, and NEET cutoff strategy generated in real-time by AI.
          </p>
        </div>
      </section>

      {/* Main AI Guidance Form Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIForm />
      </section>

    </div>
  );
};
