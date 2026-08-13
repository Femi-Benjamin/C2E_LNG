'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Flame, 
  Layers, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import RfpModal from '@/components/RfpModal';
import MarqueeLogos from '@/components/MarqueeLogos';

export default function PartnersPage() {
  const [isRfpOpen, setIsRfpOpen] = useState(false);

  const partners = [
    {
      name: 'Gauging System International (GSI)',
      country: 'USA / Global',
      role: 'Advanced Tank Gauging & Automation Systems',
      icon: BarChart3,
      overview: 'Gauging System International (GSI) is a global leader in high-precision tank gauging, inventory management, and SCADA automation for oil terminals, chemical storage, and refineries.',
      jointScope: [
        'Furnishing & installation of GSI radar and servo tank level gauges',
        'Multi-point temperature and tank bottom water interface measurement',
        'Automated custody transfer tank inventory software integration',
        'Onsite calibration, technical support, and OEM spare replacement'
      ]
    },
    {
      name: 'Mascoat Thermal Coatings',
      country: 'USA / International',
      role: 'Composite Thermal Barrier & CUI Insulation Coatings',
      icon: Flame,
      overview: 'Mascoat develops engineered ceramic thermal insulation coatings that eliminate Corrosion Under Insulation (CUI), reduce energy loss, and protect personnel from high-temperature surfaces.',
      jointScope: [
        'Direct application of Mascoat Industrial thermal barrier coatings',
        'CUI remediation and legacy rockwool insulation replacement',
        'High-temperature tank, steam line, and offshore vessel insulation',
        'Thermal audits and energy saving calculation reports'
      ]
    },
    {
      name: 'ClockSpring / Armor Plate Repair Systems',
      country: 'USA / Global',
      role: 'ASME PCC-2 Composite Pipeline Repairs',
      icon: Layers,
      overview: 'Engineered structural carbon fiber and glass wrap systems designed to repair corroded or leaking pipelines live under operating pressure without hot work or shutdown.',
      jointScope: [
        'ASME PCC-2 and ISO 24817 certified composite repair wrap design',
        'Live pipeline defect rehabilitation and MAOP restoration',
        'Offshore splash zone and subsea riser structural reinforcement',
        'Certified technician deployment across Nigerian oil fields'
      ]
    },
    {
      name: 'SharpWatch Security Technologies',
      country: 'Europe / International',
      role: 'Industrial Perimeter & Safety Monitoring',
      icon: Cpu,
      overview: 'SharpWatch specializes in autonomous security monitoring, thermal camera networks, and long-range perimeter tracking designed for high-risk oilfield and pipeline corridors.',
      jointScope: [
        'Deployment of ATEX explosion-proof thermal vision camera systems',
        'Automated hydrocarbon leak detection and perimeter alert logic',
        'Off-grid solar powered telemetry for remote pipeline valve stations',
        '24/7 security monitoring integration with client control rooms'
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* Banner */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider">
            <span>CHIRHEHA 2E LIMITED • OEM TECHNOLOGY ALLIANCES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight">
            Global Technical OEM & Industry Partners
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
            Chirheha 2E Limited partners with global OEM leaders to bring world-class tank gauging, thermal insulation, composite repair, and security technology to West Africa.
          </p>
        </div>
      </section>

      {/* INFINITE SLIDING MARQUEE LOGOS SECTION */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarqueeLogos />
        </div>
      </section>

      {/* Partners List Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest">TECHNICAL ALLIANCE BREAKDOWN</span>
            <h2 className="text-3xl font-extrabold text-[#064F82]">Key Technology Providers</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((p) => {
              const IconComp = p.icon;
              return (
                <div 
                  key={p.name}
                  className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:border-brand-orange transition-all space-y-6 flex flex-col justify-between cad-border-box"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-[#064F82]" />
                      </div>
                      <span className="text-xs font-extrabold text-slate-600 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                        {p.country}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-[#064F82] tracking-tight">{p.name}</h3>
                      <p className="text-xs font-bold text-brand-orange mt-0.5">{p.role}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                      {p.overview}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <h4 className="text-xs font-extrabold text-[#064F82] uppercase tracking-wider">JOINT EXECUTION SCOPE IN NIGERIA:</h4>
                      {p.jointScope.map((s, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-800 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => setIsRfpOpen(true)}
                      className="w-full py-3 bg-slate-100 hover:bg-brand-orange text-[#064F82] hover:text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all border border-slate-300 hover:border-brand-orange flex items-center justify-center space-x-2"
                    >
                      <span>INQUIRE ABOUT {p.name.split(' ')[0]} SOLUTIONS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <RfpModal isOpen={isRfpOpen} onClose={() => setIsRfpOpen(false)} />
    </div>
  );
}
