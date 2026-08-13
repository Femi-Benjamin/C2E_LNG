'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "We are happy to have a reliable and trusted partner in charge of maintenance of our assets. We are more focused on our key areas more than ever. Thanks to c2E limited.",
      author: "Chuks. E",
      company: "Neuell Nigeria International Company",
      role: "Asset Integrity Manager"
    },
    {
      id: 2,
      quote: "C2E services is very efficient and cost friendly helping us to achieve our objectives in the best possible way.",
      author: "Umoh Effiom",
      company: "Profogas Nigeria Limited",
      role: "Operations Lead"
    },
    {
      id: 3,
      quote: "Chirheha 2E Limited delivered composite pipeline rehabilitation on our high-pressure spool with zero operating shutdown. Their ASNT certified technicians operate with world-class precision.",
      author: "Engr. T. Oladipo",
      company: "Major Niger Delta Pipeline Operator",
      role: "Lead Pipeline Engineer"
    },
    {
      id: 4,
      quote: "The GSI radar tank gauging system installed by C2E transformed our terminal custody transfer accuracy to ±0.5mm precision. Outstanding engineering expertise and response time.",
      author: "M. Abubakar",
      company: "Crude Export Terminal Operations",
      role: "Terminal Operations Supervisor"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIdx];

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-16 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        <div className="space-y-2">
          <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full">
            CLIENT SATISFACTION & REPUTATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064F82] tracking-tight">
            What Clients Say
          </h2>
        </div>

        {/* Auto-Rotating Carousel Slider Card */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xl cad-border-box max-w-4xl mx-auto flex items-center justify-between transition-all"
        >
          
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="p-3 text-[#064F82] hover:text-brand-orange hover:bg-slate-100 rounded-full transition-all border border-slate-200 shrink-0"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Quote Content */}
          <div className="px-6 sm:px-10 space-y-6 flex-1 text-center animate-fade-in" key={current.id}>
            <div className="flex justify-center text-brand-orange">
              <Quote className="w-12 h-12 text-brand-orange/80" />
            </div>

            <p className="text-base sm:text-xl text-slate-800 font-serif italic leading-relaxed font-normal">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="pt-4 border-t border-slate-200 space-y-1">
              <h4 className="font-extrabold text-base text-[#064F82]">{current.author}</h4>
              <p className="text-xs font-bold text-slate-600">{current.company}</p>
              <span className="text-[10px] font-semibold text-brand-orange uppercase tracking-wider">{current.role}</span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-3 text-[#064F82] hover:text-brand-orange hover:bg-slate-100 rounded-full transition-all border border-slate-200 shrink-0"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center space-x-2 pt-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIdx === idx ? 'w-8 bg-brand-orange' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
