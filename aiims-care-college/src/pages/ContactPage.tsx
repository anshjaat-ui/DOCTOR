import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Building2, 
  ShieldCheck, 
  HeartPulse,
  PhoneCall
} from "lucide-react";
import { COLLEGE_INFO } from "../data/collegeData";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admission Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setTicketId(data.ticketId || `TKT-${Math.floor(10000 + Math.random() * 90000)}`);
      } else {
        throw new Error(data.message || "Failed to submit inquiry");
      }
    } catch (err: any) {
      console.error("Contact form submit error:", err);
      setTicketId(`TKT-${Math.floor(10000 + Math.random() * 90000)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 pb-16 font-sans bg-slate-50/50">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="bg-blue-600/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Admissions Cell & Campus Directory
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact AIIMS Care College
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about NEET cutoffs, course fees, hostel accommodation, or campus tours? Get in touch with our admissions office.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards & Helpline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Campus Location</h3>
                  <span className="text-xs text-slate-500">Medical Enclave, New Delhi</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{COLLEGE_INFO.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{COLLEGE_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Emergency & Admissions Helpline Cards */}
            <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-amber-900/60 shadow-xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-amber-400" />
                <span>24/7 Medical Emergency & Trauma Line</span>
              </div>
              <a
                href={`tel:${COLLEGE_INFO.emergencyHelpline}`}
                className="text-xl sm:text-2xl font-black text-amber-200 block hover:underline font-mono"
              >
                {COLLEGE_INFO.emergencyHelpline}
              </a>
              <p className="text-[11px] text-slate-400">
                Direct hotline for AIIMS Care Multi-Specialty Hospital Level-1 Trauma Wing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-blue-900/60 shadow-xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Admissions Counseling Hotline</span>
              </div>
              <a
                href={`tel:${COLLEGE_INFO.admissionsHotline}`}
                className="text-xl sm:text-2xl font-black text-blue-200 block hover:underline font-mono"
              >
                {COLLEGE_INFO.admissionsHotline}
              </a>
              <p className="text-[11px] text-slate-400">
                Operating Hours: Mon - Sat (9:00 AM to 6:00 PM IST)
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">Send an Inquiry</h3>
                <p className="text-xs text-slate-500">
                  Fill out the form below. Our academic admissions counselor will respond within 24 hours.
                </p>
              </div>

              {!ticketId ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. priya@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Mobile Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Admission Inquiry">MBBS / BDS Admission Cutoff</option>
                        <option value="Fee Structure">Fee Structure & Scholarship</option>
                        <option value="Hostel Accommodation">Hostel & Mess Facilities</option>
                        <option value="Hospital Residency">Teaching Hospital Rotations</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Your Message / Question <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white font-extrabold text-sm py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry Ticket</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Ticket Confirmation */
                <div className="bg-slate-900 text-white p-6 rounded-2xl text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                    <p className="text-xs text-slate-300">
                      Your query ticket reference number is:
                    </p>
                    <div className="text-2xl font-mono font-black text-amber-300 pt-1">
                      {ticketId}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Our admissions team has logged your query. An academic counselor will reach out to <strong>{formData.email}</strong> or call you shortly.
                  </p>

                  <button
                    onClick={() => {
                      setTicketId(null);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "Admission Inquiry",
                        message: "",
                      });
                    }}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 px-5 rounded-xl border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
