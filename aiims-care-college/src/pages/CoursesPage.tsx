import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  GraduationCap,
  ShieldCheck
} from "lucide-react";
import { COURSES_DATA } from "../data/collegeData";
import { CourseCard } from "../components/CourseCard";

export const CoursesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchArg = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchArg);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [neetOnly, setNeetOnly] = useState<boolean>(false);

  useEffect(() => {
    if (searchArg) {
      setSearchTerm(searchArg);
    }
  }, [searchArg]);

  const categories = ["All", "Undergraduate", "Diploma & Allied"];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    const matchesNeet = !neetOnly || course.neetRequired;

    return matchesSearch && matchesCategory && matchesNeet;
  });

  return (
    <div className="space-y-12 pb-16 font-sans bg-slate-50/50">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="bg-blue-600/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            NMC & DCI Approved Academic Catalog 2026-27
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Medical & Healthcare Courses
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore world-class clinical degree programs with hands-on hospital rotations, VR cadaveric labs, and global residency mentoring.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-md space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by course name e.g. MBBS, BDS, Nursing, Pharmacy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-blue-800 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Secondary Filter: NEET Toggle */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="neetOnlyToggle"
                checked={neetOnly}
                onChange={(e) => setNeetOnly(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <label htmlFor="neetOnlyToggle" className="font-semibold text-slate-800 cursor-pointer">
                Show NEET-UG Mandatory Courses Only (MBBS / BDS)
              </label>
            </div>

            <div className="font-medium text-slate-500">
              Showing <strong>{filteredCourses.length}</strong> of {COURSES_DATA.length} Programs
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No courses match your filter criteria</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try searching with another keyword or reset the category filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setNeetOnly(false);
              }}
              className="bg-blue-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

    </div>
  );
};
