'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Zap, 
  Wrench,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import RfpModal from '@/components/RfpModal';
import Testimonials from '@/components/Testimonials';

export default function AboutPage() {
  const [isRfpOpen, setIsRfpOpen] = useState(false);

  const coreValues = [
    { letter: 'C', title: "Customer's Satisfaction", desc: 'Exceeding client expectations with dedicated engineering solutions.' },
    { letter: 'I', title: 'Integrity', desc: 'Unwavering ethics, transparency, and code compliance in all operations.' },
    { letter: 'T', title: 'Technical Excellence', desc: 'Deploying certified Level III personnel and OEM-grade technology.' },
    { letter: 'A', title: 'Accountability', desc: 'Ownership of project outcomes, timelines, and statutory standards.' },
    { letter: 'L', title: 'Leadership', desc: 'Setting benchmarks in indigenous engineering across West Africa.' },
    { letter: 'S', title: 'Safety', desc: 'Target Zero LTI commitment protecting personnel and asset environments.' }
  ];

  const technicalPartnerships = [
    {
      code: 'A',
      name: 'Gauging System International (GSI)',
      description: 'GSI Provides tank gauging and loss control system for liquid bulk storage tanks.'
    },
    {
      code: 'B',
      name: 'Mascoat',
      description: 'Innovation thermal & sound protection; Provides thermal coating system for high temperature systems.'
    },
    {
      code: 'C',
      name: 'SharpWatch',
      description: 'The SharpWatch Real-Time Condition monitoring platforms solve the following problems: Subsea Leak Detection, Sensor deviation and drift detection, Process value excursion detection, SCM Communication failure, etc.'
    },
    {
      code: 'D',
      name: 'FIXID FZCO',
      description: 'Provides innovative solutions for pipeline integrity and maintenance in the oil and gas industry.'
    }
  ];

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

      {/* 1. CORPORATE OVERVIEW */}
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

      {/* 2. VISION, MISSION & CORE VALUES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* VISION */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg space-y-4 cad-border-box">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold uppercase tracking-wider text-[#064F82]">VISION</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                To be a world-class engineering service provider in the industry and a reliable partner to our customers respectively.
              </p>
            </div>

            {/* MISSION */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg space-y-4 cad-border-box">
              <div className="w-12 h-12 rounded-xl bg-[#064F82]/10 border border-[#064F82]/30 flex items-center justify-center text-[#064F82]">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold uppercase tracking-wider text-[#064F82]">MISSION</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                To constantly provide a leading-edge engineering solution to improving asset integrity.
              </p>
            </div>

            {/* CORE VALUES (CITALS) */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg space-y-4 cad-border-box">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                <Award className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-extrabold uppercase tracking-wider text-[#064F82]">CORE VALUES</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm font-extrabold text-slate-800">
                <li className="flex items-center space-x-2">
                  <span className="text-brand-orange font-black text-base">C</span>
                  <span>– Customer’s Satisfaction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#064F82] font-black text-base">I</span>
                  <span>– Integrity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-orange font-black text-base">T</span>
                  <span>– Technical Excellence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#064F82] font-black text-base">A</span>
                  <span>– Accountability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-orange font-black text-base">L</span>
                  <span>– Leadership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#064F82] font-black text-base">S</span>
                  <span>– Safety</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TECHNICAL PARTNERSHIP SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Handshake Graphic Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Decorative Offset Background Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-brand-orange rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#064F82] rounded-2xl -z-10" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/images/partnership_handshake.jpg" 
                    alt="C2E Technical Partnership" 
                    className="w-full h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064F82]/80 via-transparent to-transparent flex items-end p-6 text-white">
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        GLOBAL ALLIANCE
                      </span>
                      <h4 className="font-extrabold text-lg text-white">Certified OEM Technical Synergy</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Partnership Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full">
                  OEM STRATEGIC ALLIANCES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-orange tracking-tight">
                  Technical Partnership
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                In C2E Limited, we have strategic alliance with some technical partner (OEM) that allow us to provide quality technical service and solution to our customer. Below are some our key technical partnership:
              </p>

              <div className="space-y-4 pt-2">
                {technicalPartnerships.map((partner) => (
                  <div key={partner.code} className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm space-y-1 hover:border-brand-orange transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="font-black text-brand-orange text-base">{partner.code}.</span>
                      <h4 className="font-extrabold text-base text-[#064F82]">{partner.name}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium pl-6 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. WHAT CLIENTS SAY TESTIMONIALS SLIDER */}
      <Testimonials />

      {/* 5. CALL TO ACTION */}
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
