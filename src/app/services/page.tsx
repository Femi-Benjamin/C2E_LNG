'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Wrench, 
  Truck, 
  Users, 
  Flame, 
  CheckCircle2, 
  ArrowRight,
  Cpu
} from 'lucide-react';
import RfpModal from '@/components/RfpModal';

export default function ServicesPage() {
  const [isRfpOpen, setIsRfpOpen] = useState(false);

  const divisions = [
    {
      id: 'inspection',
      number: '01',
      title: 'Asset Integrity & NDT Inspection',
      subtitle: 'Ultrasonic, PAUT, TOFD, QA/QC & Statutory Survey',
      icon: Search,
      badge: 'ASNT / API / ASME CERTIFIED',
      description: 'Chirheha 2E Limited delivers comprehensive Non-Destructive Testing (NDT), lifting equipment verification, statutory rig surveys, and Positive Material Identification (PMI) across onshore and offshore facilities.',
      scope: [
        'Advanced Non-Destructive Testing (UT, PAUT, TOFD, MT, PT, RT, Eddy Current)',
        'Lifting Equipment Inspection & Proof Load Testing (LEEA Compliant)',
        'Tubular & Drill Stem Inspection (DS-1 / API RP 7G)',
        'Positive Material Identification (XRF / OES PMI)',
        'Statutory Pressure Vessel & Rig Fitness-for-Service Surveys',
        'Vendor QA/QC Audits & Third-Party Inspection (TPI)'
      ],
      standards: 'ASNT SNT-TC-1A, API 510/570/653, LEEA, ISO 9001:2015'
    },
    {
      id: 'composite',
      number: '02',
      title: 'Composite Pipeline Rehabilitation',
      subtitle: 'ASME PCC-2 Engineered Structural Wraps',
      icon: Wrench,
      badge: 'ASME PCC-2 COMPLIANT',
      description: 'Extending the operational lifespan of critical pipelines, pressure vessels, and headers through engineered carbon fiber and glass wrap systems (Armor Plate / ClockSpring) without operational shutdown.',
      scope: [
        'ASME PCC-2 Carbon Fiber & Fiberglass Composite Pipeline Repairs',
        'On-stream & Under-Pressure Emergency Leak Sealing',
        'Cathodic Protection System Design, Installation & Monitoring',
        'Structural Steel & Pressure Vessel Overhauls',
        'Splash Zone Protection & Anti-Corrosion Wrap',
        'Zero Hot Work / Live Hydrocarbon Line Rehabilitation'
      ],
      standards: 'ASME PCC-2, ISO 24817, NACE SP0169'
    },
    {
      id: 'mascoat',
      number: '03',
      title: 'Mascoat Industrial Thermal Coatings',
      subtitle: 'Thermal Insulation & CUI Mitigation Shield',
      icon: Flame,
      badge: 'THERMAL & CORROSION SHIELD',
      description: 'Spray-applied liquid ceramic thermal insulation coating engineered for high-temperature pipes, tanks, and offshore topsides. Completely eliminates Corrosion Under Insulation (CUI).',
      scope: [
        'Mascoat Industrial Thermal Insulation Spray Coating',
        'CUI (Corrosion Under Insulation) Mitigation & Elimination',
        'Personnel Burn Protection & Heat Energy Conservation',
        'Offshore Topsides & Marine Habitat Thermal Shield',
        'Surface Prep, Grit Blasting & Hydro-blasting Standards'
      ],
      standards: 'NACE / AMPP Level 3, ASTM C1055'
    },
    {
      id: 'gauging',
      number: '04',
      title: 'GSI Tank Gauging & Automation Systems',
      subtitle: 'Custody Transfer Radar & Inventory Telemetry',
      icon: Cpu,
      badge: 'PRECISION TELEMETRY',
      description: 'In partnership with Gauging System Inc. (GSI), C2E designs, installs, and calibrates sub-millimeter level radar gauges, servo gauges, and automated tank farm inventory software.',
      scope: [
        'GSI Precision Radar Tank Gauging Installation & Calibration',
        'Custody Transfer Level Sensor Accuracy (±0.5mm)',
        'Automated Overfill Prevention & Independent High-Level Alarm Logic',
        'Multi-Tank Farm Telemetry & Inventory Management Software Hub',
        'Hazardous Zone Explosion-Proof System Integration'
      ],
      standards: 'API Manual of Petroleum Measurement Standards (MPMS)'
    },
    {
      id: 'procurement',
      number: '05',
      title: 'OEM Procurement & Logistics Sourcing',
      subtitle: 'Global Sourcing for Heavy Machinery & Valves',
      icon: Truck,
      badge: 'GLOBAL OEM NETWORK',
      description: 'End-to-end global OEM procurement of heavy industrial machinery, specialized control valves, line pipe, OCTG tubulars, and custom spare parts for oil and gas operators.',
      scope: [
        'OEM Sourcing of High-Pressure Ball, Gate & Control Valves',
        'API 5L Line Pipe & OCTG Steel Tubular Products',
        'Heavy Machinery Spare Parts & Turbine Components',
        'Warehousing, Freight Forwarding & Field Logistics Support',
        'Full Material Test Report (MTR) Traceability & Inspection'
      ],
      standards: 'API Spec 6D / 5L, ISO 10423'
    },
    {
      id: 'manpower',
      number: '06',
      title: 'Technical Field Manpower Supply',
      subtitle: 'Certified Engineers, Technicians & Site Crew',
      icon: Users,
      badge: 'NOGICD 100% LOCAL CONTENT',
      description: 'Deploying qualified NDT inspectors, NACE/AMPP coating specialists, mechanical engineers, and safety personnel for short-term campaigns and multi-year maintenance contracts.',
      scope: [
        'ASNT Level II & Level III NDT Inspectors',
        'NACE / AMPP Certified Coating & Corrosion Inspectors',
        'API 510, 570 & 653 Pressure Vessel Inspectors',
        'Offshore Certified Rigging Technicians & HSE Officers',
        'Turnkey Technical Staffing & Crew Logistics Management'
      ],
      standards: 'NOGICD Act, Offshore BOSIET / HUET Certified'
    }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider">
            <span>CHIRHEHA 2E LIMITED • TECHNICAL DIVISIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight">
            Engineering Services & Division Portfolio
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
            Delivering international-grade NDT inspection, composite repairs, Mascoat thermal insulation, GSI tank gauging, and OEM procurement for oil, gas, and energy infrastructure.
          </p>
        </div>
      </section>

      {/* Division List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {divisions.map((div) => {
            const IconComp = div.icon;
            return (
              <div 
                key={div.id}
                id={div.id}
                className="bg-white rounded-2xl border-2 border-slate-200 p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-brand-orange transition-all space-y-6 cad-border-box"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <IconComp className="w-7 h-7 text-[#064F82]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500">DIVISION {div.number}</span>
                      <h2 className="text-2xl font-extrabold text-[#064F82] tracking-tight">{div.title}</h2>
                      <p className="text-xs font-bold text-brand-orange mt-0.5">{div.subtitle}</p>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold px-3 py-1.5 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-brand-orange uppercase">
                    {div.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-sans max-w-4xl">
                  {div.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#064F82]">CORE TECHNICAL SCOPE:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {div.scope.map((item, idx) => (
                      <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                        <span className="text-xs text-slate-800 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-slate-600">
                    <span className="text-[#064F82] font-bold">GOVERNING CODES:</span> {div.standards}
                  </div>

                  <button
                    onClick={() => setIsRfpOpen(true)}
                    className="px-6 py-2.5 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center space-x-2 shadow-md"
                  >
                    <span>REQUEST RFP FOR THIS DIVISION</span>
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
