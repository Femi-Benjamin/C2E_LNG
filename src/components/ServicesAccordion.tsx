'use client';

import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ServicesAccordion() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const servicesData = [
    {
      title: 'GENERAL INSPECTION AND SURVEY',
      overview: 'We at C2E Limited understand the importance of asset performance and operation optimization, so we provide cutting-edge inspection and survey services that will provide dependable and adequate data to enable our esteemed customer to make industry-based technical decisions to ensure their asset is in operation and readily available.',
      items: [
        'Non-Destructive Examination / Test (NDT - UT, PAUT, TOFD, MT, PT, RT)',
        'Lifting Inspection & Proof Load Certification (LEEA Compliant)',
        'QA/QC Inspection & Vendor Auditing',
        'PMI & Material Inspection (XRF / OES)',
        'Statutory Inspection & Rig Compliance',
        'Rig Survey & Offshore Platform Fitness-for-Service',
        'Vessel & Storage Tank Inspection (API 653)',
        'Composite Repair Inspection (Post Repair Inspection – PRI)',
        'Tubular & Drill Stem Inspection (DS-1 / NS-2)',
        'Offshore Marine Crane Load & Wire Rope Inspection'
      ]
    },
    {
      title: 'MAINTENANCE SERVICES',
      overview: 'Delivering live asset maintenance, structural pipeline rehabilitation, and emergency leak repairs without operational shutdown.',
      items: [
        'ASME PCC-2 & ISO 24817 Composite Wrap Pipeline Repairs',
        'Live Pipeline Defect Rehabilitation Under Active Flow',
        'Cathodic Protection System Design, Installation & Monitoring',
        'Structural Steel & Tank Bottom Rehabilitation',
        'Splash Zone Protection & Anti-Corrosion Wrap Application',
        'Flange Management, Torque & Tensioning Services',
        'Hot Tapping & Line Stopping Emergency Interventions'
      ]
    },
    {
      title: 'GENERAL SUPPLY AND PROCUREMENT',
      overview: 'Turnkey global OEM sourcing and logistics for heavy energy equipment, line pipes, valves, and precision instrumentation.',
      items: [
        'Certified OEM Valve Sourcing (Gate, Ball, Check, Control)',
        'API 5L Line Pipe & OCTG Steel Tubular Procurement',
        'High-Pressure Industrial Pumps & Turbine Components',
        'Customs Logistics, Freight Forwarding & Warehousing',
        'Material Test Report (MTR) & Traceability Audits',
        'Explosion-Proof Hazardous Area Electrical Fittings'
      ]
    },
    {
      title: 'TECHNICAL CONSULTANCY AND PROJECT MANAGEMENT',
      overview: 'End-to-end engineering consultancy, asset integrity risk management, and regulatory NUPRC compliance advisory.',
      items: [
        'Asset Integrity Management Systems (AIMS)',
        'Fitness-for-Service (FFS) & Risk-Based Inspection (RBI)',
        'Turnkey Project Execution & Field Supervision',
        'NUPRC / DPR Statutory Permit Advisory',
        'HAZOP & Process Safety Risk Assessments'
      ]
    },
    {
      title: 'MANPOWER SUPPLY',
      overview: 'Deploying qualified NDT inspectors, NACE/AMPP coating specialists, mechanical engineers, and safety personnel across West Africa.',
      items: [
        'ASNT Level II & Level III NDT Inspectors',
        'NACE / AMPP Certified Coating & Corrosion Inspectors',
        'API 510, 570 & 653 Pressure Vessel Inspectors',
        'Offshore Certified Rigging Supervisors & HSE Officers',
        'Welding Inspectors (CSWIP / AWS Certified)'
      ]
    },
    {
      title: 'BLASTING AND COATING / PAINTING SERVICES',
      overview: 'Specialized surface preparation, Mascoat thermal insulation spray, and protective industrial coating for harsh marine environments.',
      items: [
        'Mascoat Industrial Thermal Insulation Spray Coating',
        'CUI (Corrosion Under Insulation) Remediation & Shielding',
        'Abrasive Sand Blasting & Ultra-High-Pressure Hydro-blasting',
        'High-Temperature Tank & Process Line Coating Systems',
        'Offshore Topside & Riser Marine Habitats Coating'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-2xl overflow-hidden cad-border-box font-sans">
      
      {/* Header (Clean, without in-scroll badge) */}
      <div className="bg-[#064F82] text-white p-7 sm:p-8 border-b border-slate-200">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Our Services Explorer</h3>
        <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">Click any division to explore technical scope details & capabilities.</p>
      </div>

      <div className="divide-y divide-slate-200">
        {servicesData.map((srv, idx) => {
          const isOpen = activeIdx === idx;
          return (
            <div key={srv.title} className="transition-colors">
              <button
                onClick={() => setActiveIdx(isOpen ? null : idx)}
                className={`w-full text-left p-6 sm:p-7 font-black text-sm sm:text-base tracking-wide uppercase transition-all flex items-center justify-between ${
                  isOpen
                    ? 'bg-slate-100 text-brand-orange border-l-4 border-brand-orange shadow-inner'
                    : 'text-[#064F82] hover:bg-slate-50 hover:text-brand-orange'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <ChevronRight className={`w-5 h-5 text-brand-orange transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                  <span>{srv.title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="bg-slate-50 border-t border-slate-200 animate-fade-in relative">
                  
                  {/* Internal Scroll Viewport Container */}
                  <div className="max-h-80 sm:max-h-96 overflow-y-auto p-6 sm:p-8 space-y-5 pr-4 custom-accordion-scroll">
                    
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      {srv.overview}
                    </p>

                    <div className="space-y-3 pt-1">
                      <h5 className="text-xs sm:text-sm font-extrabold text-[#064F82] uppercase tracking-wider">
                        DIVISION INCLUSIONS & TECHNICAL SCOPE ({srv.items.length} SPECIFICATIONS):
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {srv.items.map((item, i) => (
                          <div key={i} className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 flex items-start space-x-3 shadow-sm hover:border-brand-orange transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
