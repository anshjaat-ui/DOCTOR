import React from "react";
import { Star, Quote, Award, Building } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
      <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-100 transition-colors">
        <Quote className="w-10 h-10" />
      </div>

      <div className="space-y-4 relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Achievement Badge */}
        {testimonial.achievement && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-2.5 text-xs text-blue-900 font-semibold flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="line-clamp-1">{testimonial.achievement}</span>
          </div>
        )}
      </div>

      {/* Author Details */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600/30 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-slate-900 text-sm truncate">
            {testimonial.name}
          </h4>
          <p className="text-xs font-medium text-blue-800 truncate">
            {testimonial.role}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5 truncate">
            <Building className="w-3 h-3 text-slate-400" />
            <span>{testimonial.hospital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
