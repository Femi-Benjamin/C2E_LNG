'use client';

import React, { useState } from 'react';
import { 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Wrench,
  BarChart3
} from 'lucide-react';
import RfpModal from '@/components/RfpModal';

export default function CapabilitiesPage() {
  const [isRfpOpen, setIsRfpOpen] = useState(false);

  const capabilities = [
    {
      id: 'composite-repair',
      title: 'Asset Integrity & Pipeline Composite Repair',
      subtitle: 'ASME PCC-2 / ISO 24817 Certified Wrap Solutions',
      icon: Wrench,
      tag: 'PIPELINE REPAIR',
      description: 'Chirheha 2E Limited specializes in live-line composite repair systems for damaged, corroded, or leaking pipelines. Engineered in compliance with ASME PCC-2 and ISO 24817, our carbon-fiber and glass-fiber composite wraps eliminate the need for hot work or expensive facility shutdowns.',
      benefits: [
        'Restores original MAOP (Maximum Allowable Operating Pressure)',
        'Applied live under active flow—zero production deferment',
        'Eliminates hot work, cutting, or welding risks in hazardous zones',
        '20+ Year engineered design life with complete chemical resistance'
      ]
    },
    {
      id: 'mascoat-insulation',
      title: 'Mascoat Industrial Thermal Insulation',
      subtitle: 'Preventing Corrosion Under Insulation (CUI)',
      icon: Flame,
      tag: 'MASCOAT TECH',
      description: 'As authorized technical partners for Mascoat, C2E applies spray-applied ceramic thermal barrier coatings to high-temperature process piping, vessels, and storage tanks. Mascoat completely replaces legacy rockwool and cladding, permanently solving Corrosion Under Insulation (CUI).',
      benefits: [
        'Eliminates CUI risk by bonding directly to substrate',
        'Dramatically reduces radiant heat loss and energy cost',
        'Protects personnel with touch-safe surface temperatures (<60°C)',
        'Rapid spray application with zero downtime required'
      ]
    },
    {
      id: 'gsi-tank-gauging',
      title: 'Advanced Tank Gauging & Automation (GSI)',
      subtitle: 'Precision Radar & Custody Transfer Measurement',
      icon: BarChart3,
      tag: 'GSI AUTOMATION',
      description: 'In partnership with Gauging System Inc. (GSI), C2E installs sub-millimeter level radar gauges, servo gauges, and inventory automation software. We deliver certified custody transfer precision for oil terminals and refineries.',
      benefits: [
        'Sub-millimeter radar accuracy for fiscal custody transfer',
        'Independent overfill protection and automated high-level alarms',
        'Centralized inventory management software with remote telemetry',
        'ATEX & IECEx explosion-proof certified for Zone 0/1 environments'
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
            <span>CHIRHEHA 2E LIMITED • TECHNICAL CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight">
            Advanced Engineering Capabilities
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
            Specialized engineering systems engineered to protect critical infrastructure, prevent Corrosion Under Insulation (CUI), and automate tank farm telemetry.
          </p>
        </div>
      </section>

      {/* Capabilities Detail Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div 
                key={cap.id}
                id={cap.id}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-brand-orange transition-all space-y-6 cad-border-box"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <IconComp className="w-7 h-7 text-[#064F82]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-[#064F82] tracking-tight">{cap.title}</h2>
                      <p className="text-xs font-bold text-brand-orange mt-0.5">{cap.subtitle}</p>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold px-3 py-1.5 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-brand-orange uppercase">
                    {cap.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-sans max-w-4xl">
                  {cap.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#064F82]">KEY PERFORMANCE ADVANTAGES:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cap.benefits.map((b, idx) => (
                      <div key={idx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-center space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                        <span className="text-xs text-slate-800 font-semibold">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setIsRfpOpen(true)}
                    className="px-6 py-2.5 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center space-x-2 shadow-md"
                  >
                    <span>REQUEST CAPABILITY PROPOSAL</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      <RfpModal isOpen={isRfpOpen} onClose={() => setIsRfpOpen(false)} />
    </div>
  );
}
