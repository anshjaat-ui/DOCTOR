import React, { useState } from "react";
import { Building2, Stethoscope, BookOpen, Home, ShieldCheck, ExternalLink, Activity } from "lucide-react";
import { CAMPUS_FACILITIES } from "../data/collegeData";

export const CampusShowcase: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState(CAMPUS_FACILITIES[0]);

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>World-Class Medical Infrastructure</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            1,200-Bed Super-Specialty Hospital & Campus
          </h2>
        </div>
        <div className="text-xs text-slate-400 max-w-xs leading-relaxed">
          Hands-on clinical exposure from Day 1 at AIIMS Care Teaching Hospital with 16 operation theatres, ICU units & VR simulation suite.
        </div>
      </div>

      {/* Main Grid Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Active Facility Display */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 border border-slate-700/80 shadow-2xl group">
            <img
              src={selectedFacility.image}
              alt={selectedFacility.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            <div className="absolute top-4 left-4 bg-blue-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
              {selectedFacility.category}
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="bg-emerald-500/90 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded uppercase tracking-wider inline-block">
                {selectedFacility.stats}
              </span>
              <h3 className="text-2xl font-black text-white">
                {selectedFacility.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                {selectedFacility.description}
              </p>
            </div>
          </div>
        </div>

        {/* Facility Selector Tabs */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Explore Key Infrastructure Highlights
          </div>

          {CAMPUS_FACILITIES.map((facility) => {
            const isSelected = selectedFacility.id === facility.id;
            return (
              <button
                key={facility.id}
                onClick={() => setSelectedFacility(facility)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? "bg-blue-900/60 border-blue-500 text-white shadow-lg ring-1 ring-blue-500/50"
                    : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div>
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    {facility.category}
                  </div>
                  <div className="font-bold text-sm text-white line-clamp-1">
                    {facility.title}
                  </div>
                </div>

                <span className="text-[11px] bg-slate-900 px-2.5 py-1 rounded-lg font-mono text-slate-300 shrink-0 border border-slate-700">
                  {facility.stats.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
