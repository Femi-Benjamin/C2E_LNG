'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  CheckCircle2, 
  Users
} from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Engr. Chirheha O. B.',
      role: 'Managing Director & CEO',
      bio: 'Over 22 years of senior technical leadership in oil & gas asset management, pipeline engineering, and subsea inspection across West Africa.',
      credentials: 'MNSE, COREN, ASNT Level III'
    },
    {
      name: 'Engr. E. Akpan',
      role: 'General Manager, Field Operations (Eket Base)',
      bio: '18+ years leading field inspection teams, composite pipeline repairs, and plant turnaround operations.',
      credentials: 'API 570, API 510, ASME PCC-2 Specialist'
    },
    {
      name: 'Dr. T. Okon',
      role: 'Head of Quality Assurance & QHSE',
      bio: 'Expert in ISO 9001, ISO 45001, and NUPRC regulatory compliance frameworks with zero-tolerance safety record governance.',
      credentials: 'Ph.D. Industrial Safety, Lead Auditor ISO 45001'
    }
  ];

  const qhsePillars = [
    {
      title: 'Target Zero (Zero LTI)',
      desc: 'Zero Lost-Time Injuries, zero environmental spills, and zero asset damage on all onshore and offshore job sites.'
    },
    {
      title: 'Stop-Work Authority',
      desc: 'Every single employee and subcontractor is empowered with absolute authority to halt operations if safety hazards are detected.'
    },
    {
      title: 'ISO 9001:2015 Quality System',
      desc: 'Rigorous quality management, material traceability, calibrated NDT equipment, and standardized reporting procedures.'
    },
    {
      title: 'Environmental Stewardship',
      desc: 'Eco-safe surface preparation methods, non-toxic Mascoat coatings, and stringent waste management compliant with NOSDRA & NUPRC.'
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider">
            <span>ABOUT CHIRHEHA 2E LIMITED (C2E)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight">
            Providing Engineering & Energy Solutions
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
            Chirheha 2E Limited (C2E) is an indigenous Nigerian technical services firm delivering world-class NDT inspection, composite pipeline repairs, Mascoat thermal insulation, GSI tank gauging, and OEM procurement.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">OUR CORPORATE HERITAGE</span>
                <h2 className="text-3xl font-extrabold text-[#064F82]">Engineering Mastery Built on Precision & Safety</h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                Founded with a vision to deliver uncompromised asset integrity across West Africa's energy sector, Chirheha 2E Limited combines international engineering certifications (API, ASME, ASNT, NACE) with local content empowerment.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3 shadow-sm">
                  <Target className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#064F82]">Our Mission</h4>
                    <p className="text-xs text-slate-700 mt-1">To preserve energy infrastructure longevity through cutting-edge non-destructive inspection, rapid composite repairs, and OEM technology partnerships.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3 shadow-sm">
                  <Award className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#064F82]">Our Vision</h4>
                    <p className="text-xs text-slate-700 mt-1">To be the most trusted indigenous partner for complex offshore, subsea, pipeline, and refinery asset integrity management in Africa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-xl space-y-6 cad-border-box">
                <h3 className="text-xl font-extrabold text-[#064F82] uppercase tracking-wider border-b border-slate-200 pb-4">
                  Regulatory & Quality Compliance
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <div>
                      <span className="font-bold text-sm text-slate-900 block">ISO 9001:2015 Quality Management System</span>
                      <span className="text-xs text-slate-600">Certified operational processes and audited technical workflows.</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <div>
                      <span className="font-bold text-sm text-slate-900 block">NUPRC / DPR Permitted Operator</span>
                      <span className="text-xs text-slate-600">Full statutory permit for specialized inspection and technical maintenance.</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <div>
                      <span className="font-bold text-sm text-slate-900 block">NOGICD 100% Local Content Certification</span>
                      <span className="text-xs text-slate-600">Committed to Nigerian human capital development and local engineering capacity.</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <div>
                      <span className="font-bold text-sm text-slate-900 block">ASME PCC-2 & API 570 Standardized</span>
                      <span className="text-xs text-slate-600">Composite repair and piping inspection compliant with global codes.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">TECHNICAL LEADERSHIP</span>
            <h2 className="text-3xl font-extrabold text-[#064F82]">Executive Management Team</h2>
            <p className="text-sm text-slate-700">Guided by seasoned engineering executives with decades of field and corporate experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-orange transition-all shadow-lg space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#064F82]" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-xs font-bold text-brand-orange mt-0.5">{leader.role}</p>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-sans">{leader.bio}</p>

                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-600">
                  <span className="text-[#064F82] font-bold">CREDENTIALS:</span> {leader.credentials}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* QHSE Pillars Section */}
      <section id="qhse" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">HEALTH, SAFETY & ENVIRONMENT</span>
            <h2 className="text-3xl font-extrabold text-[#064F82]">QHSE Policy & Target Zero</h2>
            <p className="text-sm text-slate-700">Safety is not an option—it is our absolute operational mandate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qhsePillars.map((pillar) => (
              <div key={pillar.title} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#064F82]" />
                <h3 className="font-bold text-sm text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
