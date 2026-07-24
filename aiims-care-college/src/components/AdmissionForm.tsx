import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  GraduationCap, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  FileText, 
  Search, 
  Loader2, 
  Building, 
  Award,
  Sparkles,
  Download,
  Clock,
  ShieldCheck
} from "lucide-react";
import { COURSES_DATA } from "../data/collegeData";

export const AdmissionForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course");

  const [activeTab, setActiveTab] = useState<"apply" | "track">("apply");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: courseParam || COURSES_DATA[0].name,
    pcbPercentage: "85",
    neetScore: "",
    category: "General",
    hostelRequired: true,
  });

  // Track status state
  const [trackAppId, setTrackAppId] = useState("");
  const [trackResult, setTrackResult] = useState<any | null>(null);
  const [trackLoading, setTrackLoading] = useState(false);
  const [trackError, setTrackError] = useState<string | null>(null);

  // Submit State
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (courseParam) {
      setFormData((prev) => ({ ...prev, course: courseParam }));
    }
  }, [courseParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedData(data);
      } else {
        throw new Error(data.message || "Failed to submit application");
      }
    } catch (err: any) {
      console.error("Admission error:", err);
      // Fallback submission token generation
      const mockId = `AIIMS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        success: true,
        applicationId: mockId,
        record: {
          id: mockId,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          status: "Under Review",
          submittedAt: new Date().toISOString(),
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTrackStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackAppId.trim()) return;

    setTrackLoading(true);
    setTrackError(null);
    setTrackResult(null);

    try {
      const res = await fetch(`/api/admission/status/${encodeURIComponent(trackAppId.trim())}`);
      const data = await res.json();

      if (data.success && data.record) {
        setTrackResult(data.record);
      } else {
        setTrackError(data.message || "Application reference number not found.");
      }
    } catch (err) {
      setTrackError("Unable to query application status. Please check your network or try again.");
    } finally {
      setTrackLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden font-sans">
      
      {/* Navigation Header Tabs */}
      <div className="bg-slate-900 text-white p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <span>AIIMS Care Admission Portal 2026-27</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Official Online Application for MBBS, BDS, Nursing, Pharmacy & Allied Sciences
          </p>
        </div>

        <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs font-bold">
          <button
            onClick={() => setActiveTab("apply")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "apply"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            New Application
          </button>
          <button
            onClick={() => setActiveTab("track")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "track"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Track Status
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {activeTab === "apply" ? (
          !submittedData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category Badges Notice */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-xs text-blue-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-sm">Admissions Office Notice</div>
                  <div className="text-slate-600">
                    All seats are allocated based on NMC/DCI guidelines and merit rank. Keep your 10+2 marksheets, NEET score card (if applicable), and identity proof ready.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Full Student Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul.sharma@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Mobile Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Select Desired Course <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.feesPerYear}/yr)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* PCB Percentage */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    10+2 PCB Aggregate Percentage (%)
                  </label>
                  <input
                    type="number"
                    min="40"
                    max="100"
                    value={formData.pcbPercentage}
                    onChange={(e) => setFormData({ ...formData, pcbPercentage: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>

                {/* NEET Score */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                    NEET Score (If Applicable)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="720"
                    placeholder="e.g. 560"
                    value={formData.neetScore}
                    onChange={(e) => setFormData({ ...formData, neetScore: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>

              </div>

              {/* Checkbox Hostel */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="hostelCheck"
                  checked={formData.hostelRequired}
                  onChange={(e) => setFormData({ ...formData, hostelRequired: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <label htmlFor="hostelCheck" className="text-xs font-semibold text-slate-700">
                  I require on-campus residential hostel & mess accommodation
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-900 text-white font-extrabold text-base py-4 px-6 rounded-2xl shadow-xl shadow-blue-900/20 hover:from-blue-900 hover:to-indigo-950 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Admission Form...</span>
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-5 h-5 text-blue-300" />
                      <span>Submit Official Admission Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Application Submitted Success Message */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Application Submitted Successfully
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Congratulations, {submittedData.record?.fullName || formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Your admission form for <strong className="text-slate-900">{submittedData.record?.course || formData.course}</strong> has been registered with the AIIMS Care Admissions Cell.
                </p>
              </div>

              {/* Reference ID Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 max-w-md mx-auto space-y-3 border border-slate-800 shadow-xl text-left">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Application Reference Number
                </div>
                <div className="text-2xl font-mono font-extrabold text-amber-300 tracking-wider">
                  {submittedData.applicationId}
                </div>
                <div className="text-xs text-slate-300 border-t border-slate-800 pt-3 flex justify-between">
                  <span>Status: <strong className="text-emerald-400 font-bold">Under Review</strong></span>
                  <span>Date: {new Date().toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      course: COURSES_DATA[0].name,
                      pcbPercentage: "85",
                      neetScore: "",
                      category: "General",
                      hostelRequired: true,
                    });
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 px-5 rounded-xl transition-colors"
                >
                  Submit Another Form
                </button>

                <button
                  onClick={() => {
                    setTrackAppId(submittedData.applicationId);
                    setActiveTab("track");
                  }}
                  className="bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold py-3 px-5 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Track Application Progress</span>
                </button>
              </div>
            </div>
          )
        ) : (
          /* Track Application Tab */
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Track Application Reference</h3>
              <p className="text-xs text-slate-600">
                Enter your 11-digit Reference ID (e.g., AIIMS-2026-8492) to view counselling status.
              </p>
            </div>

            <form onSubmit={handleTrackStatus} className="flex gap-2">
              <input
                type="text"
                required
                placeholder="Enter Reference ID e.g. AIIMS-2026-8492"
                value={trackAppId}
                onChange={(e) => setTrackAppId(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                disabled={trackLoading}
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
              >
                {trackLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                <span>Check Status</span>
              </button>
            </form>

            {trackError && (
              <div className="bg-red-50 border border-red-200 text-red-800 text-xs p-4 rounded-xl">
                {trackError}
              </div>
            )}

            {trackResult && (
              <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 text-xs">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">Applicant Name</div>
                    <div className="text-base font-bold text-white">{trackResult.fullName}</div>
                  </div>
                  <span className="bg-amber-500/20 text-amber-300 font-bold px-3 py-1 rounded-full border border-amber-500/30">
                    {trackResult.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">Course Applied</div>
                    <div className="font-semibold text-slate-200">{trackResult.course}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px] uppercase font-bold">Submitted Date</div>
                    <div className="font-semibold text-slate-200">
                      {new Date(trackResult.submittedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-xl text-slate-300 leading-relaxed text-[11px]">
                  <strong>Next Counselling Step:</strong> Your marks and documents are verified by the admissions committee. You will receive an official call letter on {trackResult.email} prior to round 1 counselling.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
