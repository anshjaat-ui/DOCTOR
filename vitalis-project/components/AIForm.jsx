"use client";

import { useState } from 'react';
import { ArrowRight, Zap, ShieldCheck, Activity, Sparkles } from 'lucide-react';

export default function AIForm({ onResult }) {
  const [age, setAge] = useState('');
  const [issue, setIssue] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      let resultData = {
        title: 'General Wellness Plan',
        description: 'Based on your profile, we recommend a balanced daily multi-vitamin and regular exercise for sustained energy and focus.',
        product: 'Vital Core — Multi Supplement',
        link: '/#checkout',
        icon: Sparkles,
      };

      if (issue.toLowerCase().includes('hair')) {
        resultData = {
          title: 'Hair Regrowth Protocol',
          description: 'Your profile suggests androgenic hair thinning. Our DHT-blocking hair kit combines biotin, saw palmetto, and topical minoxidil for visible results in 90 days.',
          product: 'Hair Kit — 3 Month Supply',
          link: '/#checkout',
          icon: ShieldCheck,
        };
      } else if (issue.toLowerCase().includes('energy') || issue.toLowerCase().includes('tired') || issue.toLowerCase().includes('low')) {
        resultData = {
          title: 'Testosterone Booster Plan',
          description: 'Low energy correlates with sub-optimal testosterone. Our clinically-backed booster uses ashwagandha, zinc, and fenugreek to restore drive and recovery.',
          product: 'Testosterone Booster — 60 Capsules',
          link: '/#checkout',
          icon: Zap,
        };
      } else if (issue.toLowerCase().includes('performance') || issue.toLowerCase().includes('libido')) {
        resultData = {
          title: 'Performance & Vitality Plan',
          description: 'Targeted support for endurance, libido, and mental sharpness with L-citrulline, maca root, and vitamin D3.',
          product: 'Performance Stack — Daily',
          link: '/#checkout',
          icon: Activity,
        };
      }

      setResult(resultData);
      if (onResult) onResult(resultData);
    }, 1500);
  };

  return (
    <section id="ai-test" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-emerald-400/8 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-emerald-300 text-[11px] font-extrabold uppercase tracking-[0.15em] mb-5">AI Health Diagnosis</span>
          <h2 className="text-[40px] lg:text-[56px] font-black tracking-tighter leading-[1.05] mb-6">Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">optimal protocol</span> in 60 seconds.</h2>
          <p className="text-[18px] lg:text-[20px] text-white/50 font-light leading-relaxed max-w-xl mx-auto">No guesswork. Real clinical logic backed by doctors, matched to your body and goals.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] p-8 lg:p-10 shadow-2xl shadow-black/30">
          <div className="space-y-5">
            <div>
              <label htmlFor="age" className="block text-[13px] font-bold uppercase tracking-[0.08em] text-white/60 mb-2.5">Age</label>
              <select
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full h-14 rounded-[14px] bg-white/8 border border-white/10 px-5 text-[17px] font-medium text-white focus:outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-500/15 transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Select your age</option>
                <option value="18-24">18 — 24</option>
                <option value="25-34">25 — 34</option>
                <option value="35-44">35 — 44</option>
                <option value="45+">45+</option>
              </select>
            </div>

            <div>
              <label htmlFor="issue" className="block text-[13px] font-bold uppercase tracking-[0.08em] text-white/60 mb-2.5">Primary Concern</label>
              <select
                id="issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full h-14 rounded-[14px] bg-white/8 border border-white/10 px-5 text-[17px] font-medium text-white focus:outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-500/15 transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Select a concern</option>
                <option value="Hair">Hair Thinning / Loss</option>
                <option value="Energy">Low Energy / Fatigue</option>
                <option value="Performance">Performance / Libido</option>
                <option value="Sleep">Sleep / Recovery</option>
                <option value="General">General Wellness</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-8 w-full h-[58px] rounded-[16px] text-[17px] font-extrabold text-ink flex items-center justify-center gap-2.5 transition-all duration-300 ${
              loading ? 'bg-emerald-200 cursor-wait' : 'bg-emerald-300 hover:bg-emerald-200 hover:-translate-y-0.5 shadow-[0_8px_30px_-6px_rgba(45,208,163,0.45)] hover:shadow-[0_20px_50px_-12px_rgba(45,208,163,0.5)]'
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <span className="w-5 h-5 border-2 border-ink/20 border-t-ink rounded-full animate-spin" />
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center gap-3">Start AI Diagnosis <ArrowRight className="w-5 h-5" /></span>
            )}
          </button>
        </form>

        {submitted && (
          <div className="max-w-xl mx-auto mt-8 animate-fade-up">
            <div className="bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 border border-emerald-400/20 rounded-[24px] p-8 lg:p-10 shadow-xl shadow-emerald-900/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-400 text-ink flex items-center justify-center shadow-lg shadow-emerald-400/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-[24px] font-black tracking-tight">Your Protocol</h3>
              </div>
              <h4 className="text-[18px] font-extrabold text-emerald-300 mb-3 tracking-tight">{result?.title || 'Personalized Plan'}</h4>
              <p className="text-[15px] text-white/70 leading-relaxed mb-7">{result?.description || 'Tailored recommendations based on your profile.'}</p>
              <a href="#checkout" className="inline-flex items-center gap-2 text-[15px] font-extrabold bg-emerald-400 text-ink px-7 py-3.5 rounded-[14px] hover:bg-emerald-200 transition-all hover:shadow-lg hover:-translate-y-0.5">
                View Recommended Product <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
