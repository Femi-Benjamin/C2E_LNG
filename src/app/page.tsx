'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Search, 
  Truck, 
  Users, 
  Flame, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight,
  Cpu,
  Calculator,
  ArrowRight
} from 'lucide-react';
import RfpModal from '@/components/RfpModal';
import MarqueeLogos from '@/components/MarqueeLogos';
import ServicesAccordion from '@/components/ServicesAccordion';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  const [isRfpOpen, setIsRfpOpen] = useState(false);
  const [activeDomain, setActiveDomain] = useState(0);

  const [estimatorState, setEstimatorState] = useState({
    service: 'composite',
    location: 'onshore',
    scale: 'medium',
  });

  const domains = [
    {
      title: 'NDT & Asset Integrity',
      tag: 'NON-DESTRUCTIVE TESTING',
      headline: 'Advanced Structural Health Monitoring & Rig Survey',
      description: 'Deploying Phased Array (PAUT), Time of Flight Diffraction (TOFD), Magnetic Particle, and Lifting Equipment Inspection across offshore platforms, refineries, and pressure vessels.',
      metrics: ['100% Non-Invasive Diagnostics', 'API 510 / 570 / 653 Certified Inspectors', 'Zero Operating Downtime'],
      badgeColor: 'text-[#064F82] bg-[#064F82]/10 border-[#064F82]/30',
      image: '/images/ndt_inspection.jpg'
    },
    {
      title: 'Composite Pipeline Repair',
      tag: 'ASME PCC-2 STANDARDS',
      headline: 'High-Pressure Pipeline Rehabilitation Without Shutdown',
      description: 'Structural carbon fiber and glass wrap systems (Armor Plate / ClockSpring) engineered to repair wall loss, corrosion, and mechanical damage on live hydrocarbon pipelines.',
      metrics: ['Up to 150 Bar Pressure Retention', 'No Hot Work / Zero Ignition Risk', '20+ Year Design Life'],
      badgeColor: 'text-amber-600 bg-amber-500/10 border-amber-500/30',
      image: '/images/composite_repair.jpg'
    },
    {
      title: 'Mascoat Thermal Coatings',
      tag: 'THERMAL & CORROSION PROTECTION',
      headline: 'Industrial Thermal Insulation & CUI Mitigation',
      description: 'Spray-applied ceramic thermal insulation coatings replacing legacy mineral wool. Eliminates Corrosion Under Insulation (CUI) while reducing surface heat up to 150°C.',
      metrics: ['Eliminates CUI Risk completely', 'Lightweight Spray Application', 'Personnel Burn Protection'],
      badgeColor: 'text-emerald-700 bg-emerald-500/10 border-emerald-500/30',
      image: '/images/ndt_inspection.jpg'
    },
    {
      title: 'GSI Automated Tank Gauging',
      tag: 'HIGH-PRECISION TELEMETRY',
      headline: 'Custody Transfer Radar & Tank Inventory Automation',
      description: 'Partnership with Gauging System Inc. (GSI) delivering sub-millimeter tank level sensors, inventory management software, and overfill prevention systems for tank farms.',
      metrics: ['±0.5mm Accuracy Level Radar', 'Custody Transfer Standardized', 'Real-time Telemetry Dashboard'],
      badgeColor: 'text-blue-700 bg-blue-500/10 border-blue-500/30',
      image: '/images/composite_repair.jpg'
    },
  ];

  const services = [
    {
      id: '01',
      title: 'Asset Integrity & NDT Inspection',
      subtitle: 'Ultrasonic, PAUT, TOFD & Statutory Survey',
      icon: Search,
      description: 'Advanced Non-Destructive Testing (NDT), lifting equipment inspection, Positive Material Identification (PMI), QA/QC audits, and statutory rig compliance.',
      features: [
        'Advanced NDT (UT, MT, PT, RT, PAUT, TOFD)',
        'Lifting Equipment & Tubular Inspection',
        'Positive Material Identification (PMI)',
        'Statutory Rig & Pressure Vessel Survey'
      ]
    },
    {
      id: '02',
      title: 'Composite Pipeline Rehabilitation',
      subtitle: 'ASME PCC-2 Engineered Structural Repairs',
      icon: Wrench,
      description: 'High-strength carbon fiber composite repair wraps restoring structural integrity to corroded or leaking onshore and subsea pipelines.',
      features: [
        'ASME PCC-2 & ISO 24817 Composite Repairs',
        'Live Pipeline Defect Wrap System',
        'Anti-Corrosion & Splash Zone Protection',
        'No Hot Work or Shutdown Required'
      ]
    },
    {
      id: '03',
      title: 'Mascoat Industrial Thermal Coatings',
      subtitle: 'Insulation & Corrosion Under Insulation Shield',
      icon: Flame,
      description: 'Revolutionary ceramic thermal insulation spray for pipes, tanks, and offshore topsides. Prevents CUI and reduces energy loss.',
      features: [
        'CUI (Corrosion Under Insulation) Prevention',
        'Personnel Burn Protection Coating',
        'Thermal Efficiency Energy Retention',
        'Substrate Preservation & Fast Curing'
      ]
    },
    {
      id: '04',
      title: 'GSI Tank Gauging & Automation',
      subtitle: 'Custody Transfer Level Radar & Overfill Systems',
      icon: Cpu,
      description: 'Deploying Gauging System Inc. (GSI) precision radar tank gauges, servo gauges, and tank farm automation software.',
      features: [
        'API Chapter 3 Custody Transfer Precision',
        'Overfill Prevention & Alarm Logic',
        'Multi-Tank Telemetry Software Hub',
        'Hazardous Zone Explosion-Proof Enclosures'
      ]
    },
    {
      id: '05',
      title: 'OEM Procurement & Logistics Sourcing',
      subtitle: 'Heavy Equipment, Valves & Tubular Sourcing',
      icon: Truck,
      description: 'Direct OEM partnership procurement for specialized valves, high-pressure piping, pumps, and field logistics across West Africa.',
      features: [
        'Certified OEM Valve & Instrument Sourcing',
        'API 5L Line Pipe & OCTG Tubular Sourcing',
        'Customs Logistics & Warehousing',
        'Full Material Test Report (MTR) Verification'
      ]
    },
    {
      id: '06',
      title: 'Technical Field Manpower Supply',
      subtitle: 'Certified Engineers & Field Technicians',
      icon: Users,
      description: 'Provision of ASNT Level II/III inspectors, NACE/AMPP certified coating specialists, and skilled mechanical engineers for field campaigns.',
      features: [
        'ASNT Level II & III NDT Inspectors',
        'NACE / AMPP Coating Inspectors',
        'Offshore Certified Field Technicians',
        'HSE Officers & Rigging Supervisors'
      ]
    },
  ];

  const calculateEstimate = () => {
    let cost = '$15,000 - $45,000';
    let duration = '3 - 7 Days';
    let team = '4 Engineers';

    if (estimatorState.service === 'composite') {
      cost = estimatorState.scale === 'large' ? '$65,000 - $140,000' : '$25,000 - $50,000';
      duration = estimatorState.location === 'offshore' ? '5 - 10 Days' : '3 - 5 Days';
      team = '6 Certified Composite Technicians';
    } else if (estimatorState.service === 'gauging') {
      cost = estimatorState.scale === 'large' ? '$90,000 - $220,000' : '$30,000 - $75,000';
      duration = '7 - 14 Days';
      team = '4 Automation Specialists';
    } else if (estimatorState.service === 'mascoat') {
      cost = estimatorState.scale === 'large' ? '$45,000 - $110,000' : '$18,000 - $35,000';
      duration = '4 - 8 Days';
      team = '5 Coating Specialists';
    } else {
      cost = estimatorState.scale === 'large' ? '$35,000 - $85,000' : '$12,000 - $28,000';
      duration = '2 - 5 Days';
      team = '3 ASNT Level III Inspectors';
    }

    return { cost, duration, team };
  };

  const estimateResults = calculateEstimate();

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* 1. HERO SECTION WITH INDUSTRIAL IMAGERY */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#064F82] tracking-tight leading-[1.12]"
              >
                Engineered Excellence for <br className="hidden sm:inline" />
                <span className="text-brand-orange">
                  Energy & Industrial Infrastructure
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed"
              >
                Nigeria’s premier indigenous technical services firm providing advanced NDT inspection, composite pipeline rehabilitation, Mascoat thermal insulation, GSI automated tank gauging, and OEM procurement.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-2 flex flex-wrap gap-4 items-center"
              >
                <button
                  onClick={() => setIsRfpOpen(true)}
                  className="px-8 py-4 bg-brand-orange text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:bg-amber-600 hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
                >
                  <Wrench className="w-5 h-5 group-hover:rotate-45 transition-transform text-white" />
                  <span>REQUEST PROPOSAL (RFP)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/services"
                  className="px-7 py-4 bg-white hover:bg-slate-100 text-[#064F82] font-extrabold text-sm uppercase tracking-wider rounded-xl border-2 border-[#064F82] transition-all duration-300 flex items-center space-x-2 shadow-sm"
                >
                  <span>EXPLORE DIVISIONS</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange" />
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Image Card Showcase */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white cad-border-box"
              >
                <img 
                  src="/images/ndt_inspection.jpg" 
                  alt="Offshore NDT Inspection" 
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064F82]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-max">
                    OFFSHORE FIELD OPERATIONS
                  </span>
                  <h4 className="font-extrabold text-xl text-white">ASNT Certified NDT & Rig Inspection</h4>
                  <p className="text-xs text-slate-200">Deployed across Niger Delta & West Africa Deepwater Rigs.</p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* DYNAMIC DOMAIN TABS SHOWCASE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 bg-white border-2 border-slate-200 rounded-2xl p-6 lg:p-8 shadow-xl"
          >
            <div className="flex flex-wrap gap-3 pb-6 border-b border-slate-200">
              {domains.map((dom, idx) => (
                <button
                  key={dom.title}
                  onClick={() => setActiveDomain(idx)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${
                    activeDomain === idx
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-[#064F82] hover:text-white border border-slate-200'
                  }`}
                >
                  {dom.title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block">
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-md border ${domains[activeDomain].badgeColor}`}>
                    {domains[activeDomain].tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#064F82] tracking-tight">
                  {domains[activeDomain].headline}
                </h3>
                
                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  {domains[activeDomain].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  {domains[activeDomain].metrics.map((metric) => (
                    <div key={metric} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-xl overflow-hidden border-2 border-slate-200 shadow-md">
                  <img 
                    src={domains[activeDomain].image} 
                    alt={domains[activeDomain].title} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Standard Compliance:</span>
                      <span className="font-bold text-[#064F82]">ASME PCC-2 / API 570</span>
                    </div>
                    <button
                      onClick={() => setIsRfpOpen(true)}
                      className="w-full py-2.5 bg-[#064F82] hover:bg-[#04385E] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm flex items-center justify-center space-x-2 mt-2"
                    >
                      <span>REQUEST DIVISION SCOPE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. SERVICES EXPLORER & MARQUEE CLIENTS / PARTNERS (ENLARGED) */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            
            {/* Left: Services Explorer Accordion */}
            <div className="lg:col-span-6">
              <ServicesAccordion />
            </div>

            {/* Right: Real Client & OEM Partner Marquee Showcase */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-extrabold text-brand-orange uppercase tracking-widest bg-brand-orange/10 border border-brand-orange/30 px-4 py-1.5 rounded-full">
                  PROVEN INDUSTRY TRUST
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#064F82] tracking-tight leading-tight">
                  Our Esteemed Clients & Global Partners
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                  Chirheha 2E Limited is the authorized indigenous partner for world-class OEMs and top energy operators across Nigeria.
                </p>
              </div>

              <MarqueeLogos />
            </div>

          </div>

        </div>
      </section>

      {/* 3. KEY METRICS COUNTER BAR */}
      <section className="bg-[#064F82] text-white py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            
            <div className="p-4 bg-[#04385E] rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-orange">15+</div>
              <div className="text-xs font-extrabold uppercase tracking-wider mt-1 text-slate-100">Years Industry Leadership</div>
            </div>

            <div className="p-4 bg-[#04385E] rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-extrabold text-white">250+</div>
              <div className="text-xs font-extrabold uppercase tracking-wider mt-1 text-slate-100">Completed Engineering Projects</div>
            </div>

            <div className="p-4 bg-[#04385E] rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400">0 LTI</div>
              <div className="text-xs font-extrabold uppercase tracking-wider mt-1 text-slate-100">HSE Safety Target Zero</div>
            </div>

            <div className="p-4 bg-[#04385E] rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-orange">100%</div>
              <div className="text-xs font-extrabold uppercase tracking-wider mt-1 text-slate-100">NOGICD Local Content Compliant</div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. CORE SERVICES MATRIX */}
      <section className="py-20 lg:py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full">
              OUR ENGINEERING DIVISIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064F82] tracking-tight">
              Comprehensive Technical Solutions for Energy Assets
            </h2>
            <p className="text-base text-slate-700 font-normal">
              Chirheha 2E Limited operates specialized engineering teams delivering international standards across all project phases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <motion.div 
                  key={srv.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-7 hover:border-brand-orange transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl flex flex-col justify-between group cad-border-box"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                        <IconComp className="w-6 h-6 text-[#064F82] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500">DIV {srv.id}</span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#064F82] tracking-tight group-hover:text-brand-orange transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-bold text-brand-orange mt-0.5">
                        {srv.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {srv.description}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-200">
                      {srv.features.map((feat) => (
                        <li key={feat} className="text-xs text-slate-800 font-semibold flex items-center space-x-2">
                          <ChevronRight className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button
                      onClick={() => setIsRfpOpen(true)}
                      className="w-full py-2.5 bg-slate-100 hover:bg-brand-orange text-[#064F82] hover:text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all border border-slate-300 hover:border-brand-orange flex items-center justify-center space-x-2"
                    >
                      <span>ENQUIRE FOR THIS DIVISION</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE PROJECT ESTIMATOR & RFP CALCULATOR WIDGET */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-slate-200 rounded-2xl p-8 lg:p-10 shadow-xl cad-border-box"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider">
                  <Calculator className="w-4 h-4" />
                  <span>INTERACTIVE PROJECT SCOPE ESTIMATOR</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#064F82] tracking-tight">
                  Instant Technical & Budgetary Estimate
                </h3>
                
                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  Select your required engineering service, deployment location, and asset scale to generate an instant technical team configuration and estimate range.
                </p>

                <div className="pt-2">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Estimated Budget Range:</span>
                      <span className="font-extrabold text-lg text-brand-orange">{estimateResults.cost}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Mobilization Timeframe:</span>
                      <span className="font-bold text-[#064F82]">{estimateResults.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Crew Configuration:</span>
                      <span className="font-bold text-emerald-700">{estimateResults.team}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 lg:p-8 rounded-xl border border-slate-200 space-y-5 shadow-sm">
                
                <div>
                  <label className="block text-xs font-extrabold text-[#064F82] uppercase tracking-wider mb-2">
                    1. Select Service Type
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'composite', label: 'Composite Pipeline Repair' },
                      { id: 'gauging', label: 'GSI Tank Gauging' },
                      { id: 'mascoat', label: 'Mascoat Thermal Coating' },
                      { id: 'ndt', label: 'NDT Inspection Survey' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setEstimatorState({ ...estimatorState, service: item.id })}
                        className={`p-3 rounded-lg text-xs font-extrabold text-left transition-all ${
                          estimatorState.service === item.id
                            ? 'bg-brand-orange text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#064F82] uppercase tracking-wider mb-2">
                    2. Facility Environment
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'onshore', label: 'Onshore Facility / Terminal' },
                      { id: 'offshore', label: 'Offshore Rig / Platform' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setEstimatorState({ ...estimatorState, location: item.id })}
                        className={`p-3 rounded-lg text-xs font-extrabold text-left transition-all ${
                          estimatorState.location === item.id
                            ? 'bg-[#064F82] text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#064F82] uppercase tracking-wider mb-2">
                    3. Asset Scope & Scale
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'medium', label: 'Standard Scope (Single Unit / Spool)' },
                      { id: 'large', label: 'Turnkey Scope (Multi-Asset Campaign)' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setEstimatorState({ ...estimatorState, scale: item.id })}
                        className={`p-3 rounded-lg text-xs font-extrabold text-left transition-all ${
                          estimatorState.scale === item.id
                            ? 'bg-[#064F82] text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsRfpOpen(true)}
                  className="w-full py-4 bg-brand-orange text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-amber-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>SUBMIT THIS ESTIMATE SCOPE VIA RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. WHAT CLIENTS SAY TESTIMONIALS */}
      <Testimonials />

      {/* 7. CALL TO ACTION BANNER */}
      <section className="py-20 bg-[#064F82] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Ready to Elevate Your Energy Asset Integrity?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-slate-100 max-w-2xl mx-auto"
          >
            Contact Chirheha 2E Limited today for turnkey NDT inspection, composite repairs, or tank gauging solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2 flex justify-center space-x-4"
          >
            <button
              onClick={() => setIsRfpOpen(true)}
              className="px-8 py-4 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>REQUEST TECHNICAL PROPOSAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <RfpModal isOpen={isRfpOpen} onClose={() => setIsRfpOpen(false)} />

    </div>
  );
}
