'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Target, 
  Zap, 
  Users, 
  Building2, 
  ArrowRight,
  Wrench
} from 'lucide-react';
import RfpModal from '@/components/RfpModal';
import Testimonials from '@/components/Testimonials';

export default function AboutPage() {
  const [isRfpOpen, setIsRfpOpen] = useState(false);

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* Banner */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider mx-auto">
            <span>ABOUT CHIRHEHA 2E LIMITED (C2E LIMITED)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight">
            About Us
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Delivering world-class engineering competence, advanced asset integrity solutions, and zero-harm safety standards across West Africa.
          </p>
        </div>
      </section>

      {/* EXACT CORPORATE OVERVIEW TEXT FROM C2ELNG.COM */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xl cad-border-box space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest">COMPANY PROFILE</span>
              <h2 className="text-3xl font-extrabold text-[#064F82] mt-1">Chirheha 2E Limited (C2E Limited)</h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-slate-800 leading-relaxed font-sans">
              <p className="font-medium text-slate-900 border-l-4 border-brand-orange pl-4">
                Chirheha 2E Limited (C2E Limited) is an indigenous company incorporated in Nigeria to provide leading edge engineering & technical solution to improve the operability of our esteemed customer’s asset and optimize their equipment performance.
              </p>

              <p className="text-slate-700">
                C2E Limited provides world-class solution taking advantage of her strong technical competence, top-notch equipment as well as best practice procedure complying to all regulatory requirement. We are also strengthened by some necessary relationship to help us provide our unique services while we are committed to excellent customer experience in the provision of all our services. We perform all our service safely in line with all required local and international code or standard in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-3">
                <ShieldCheck className="w-6 h-6 text-brand-orange shrink-0" />
                <div>
                  <span className="text-xs font-extrabold text-[#064F82] block">ISO 9001:2015</span>
                  <span className="text-[10px] text-slate-500 font-semibold">Quality Management Standard</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-3">
                <Award className="w-6 h-6 text-[#064F82] shrink-0" />
                <div>
                  <span className="text-xs font-extrabold text-[#064F82] block">NUPRC & NOGICD</span>
                  <span className="text-[10px] text-slate-500 font-semibold">100% Local Content Compliant</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-3">
                <Zap className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-xs font-extrabold text-emerald-700 block">0 LTI SAFETY</span>
                  <span className="text-[10px] text-slate-500 font-semibold">Target Zero Harm HSE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* VISION & MISSION PILLARS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg space-y-4 cad-border-box">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#064F82]">Our Corporate Vision</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                To be West Africa’s most trusted indigenous technical partner, setting international standards in asset integrity, non-destructive testing, pipeline rehabilitation, and industrial thermal automation.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg space-y-4 cad-border-box">
              <div className="w-12 h-12 rounded-xl bg-[#064F82]/10 border border-[#064F82]/30 flex items-center justify-center text-[#064F82]">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#064F82]">Our Mission Statement</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                To deliver reliable engineering solutions through technical excellence, certified OEM partnerships, state-of-the-art equipment, and an uncompromised commitment to personnel safety and regulatory compliance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT CLIENTS SAY TESTIMONIALS SLIDER */}
      <Testimonials />

      {/* CALL TO ACTION */}
      <section className="py-16 bg-[#064F82] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Partner With Chirheha 2E Limited Today</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto">
            Contact our engineering team to discuss your NDT inspection, composite repair wrap, or tank gauging requirements.
          </p>
          <button
            onClick={() => setIsRfpOpen(true)}
            className="px-8 py-4 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center space-x-2 mx-auto"
          >
            <Wrench className="w-4 h-4" />
            <span>REQUEST TECHNICAL PROPOSAL (RFP)</span>
          </button>
        </div>
      </section>

      <RfpModal isOpen={isRfpOpen} onClose={() => setIsRfpOpen(false)} />
    </div>
  );
}
