'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  ChevronRight, 
  Award,
  ExternalLink,
  Cpu,
  Layers
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#064F82] text-white pt-16 pb-12 font-sans relative overflow-hidden">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid: Corporate Positioning & Main Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/20">
          
          {/* Col 1 & 2: Corporate Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center space-x-3.5 group">
              <div>
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white block">
                  Chirheha <span className="text-brand-orange">2E Limited</span>
                </span>
                <p className="text-xs font-semibold tracking-wide text-brand-orange mt-0.5">
                  providing engineering solutions
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal pr-4">
              Chirheha 2E Limited (C2E) delivers world-class engineering, asset integrity management, NDT inspection, composite pipeline repairs, Mascoat thermal insulation, GSI tank gauging, and turnkey procurement for LNG, oil & gas, and heavy industry.
            </p>

            <div className="pt-1 flex flex-wrap gap-2.5">
              <div className="bg-[#04385E] border border-white/20 hover:border-brand-orange px-3 py-1.5 rounded-lg text-white flex items-center space-x-2 text-xs font-bold shadow-sm transition-colors">
                <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                <span>NUPRC / DPR PERMITTED</span>
              </div>
              <div className="bg-[#04385E] border border-white/20 hover:border-brand-orange px-3 py-1.5 rounded-lg text-white flex items-center space-x-2 text-xs font-bold shadow-sm transition-colors">
                <Award className="w-4 h-4 text-brand-orange shrink-0" />
                <span>ISO 9001:2015 CERTIFIED</span>
              </div>
              <div className="bg-[#04385E] border border-white/20 hover:border-brand-orange px-3 py-1.5 rounded-lg text-white flex items-center space-x-2 text-xs font-bold shadow-sm transition-colors">
                <Layers className="w-4 h-4 text-brand-orange shrink-0" />
                <span>ASME / API COMPLIANT</span>
              </div>
            </div>
          </div>

          {/* Col 3: Engineering Divisions */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs text-white uppercase tracking-wider border-l-2 border-brand-orange pl-3">
              ENGINEERING DIVISIONS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <Link href="/services#inspection" className="text-slate-100 hover:text-brand-orange transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>NDT & Asset Integrity</span>
                </Link>
              </li>
              <li>
                <Link href="/services#composite" className="text-slate-100 hover:text-brand-orange transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Composite Pipeline Repair</span>
                </Link>
              </li>
              <li>
                <Link href="/services#mascoat" className="text-slate-100 hover:text-brand-orange transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Mascoat Thermal Coating</span>
                </Link>
              </li>
              <li>
                <Link href="/services#gauging" className="text-slate-100 hover:text-brand-orange transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>GSI Automated Tank Gauging</span>
                </Link>
              </li>
              <li>
                <Link href="/services#procurement" className="text-slate-100 hover:text-brand-orange transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>OEM Procurement & Logistics</span>
                </Link>
              </li>
              <li>
                <Link href="/services#manpower" className="text-slate-100 hover:text-brand-orange transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Technical Field Manpower</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: OEM Technology Partners */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs text-white uppercase tracking-wider border-l-2 border-brand-orange pl-3">
              GLOBAL TECH PARTNERS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li className="flex items-center space-x-2 text-slate-100">
                <Cpu className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Gauging System Intl (GSI)</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-100">
                <Cpu className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Mascoat Thermal Coatings</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-100">
                <Cpu className="w-4 h-4 text-brand-orange shrink-0" />
                <span>ClockSpring / Armor Plate</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-100">
                <Cpu className="w-4 h-4 text-brand-orange shrink-0" />
                <span>SharpWatch Tech Systems</span>
              </li>
              <li className="pt-2">
                <Link href="/partners" className="text-brand-orange hover:underline text-xs font-bold flex items-center space-x-1">
                  <span>View All OEM Partners</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Corporate Quick Links */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-xs text-white uppercase tracking-wider border-l-2 border-brand-orange pl-3">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li><Link href="/about" className="text-slate-100 hover:text-brand-orange transition-colors">Who We Are</Link></li>
              <li><Link href="/about#qhse" className="text-slate-100 hover:text-brand-orange transition-colors">HSE & Safety Commitment</Link></li>
              <li><Link href="/projects" className="text-slate-100 hover:text-brand-orange transition-colors">Featured Projects</Link></li>
              <li><Link href="/capabilities" className="text-slate-100 hover:text-brand-orange transition-colors">Technical Capabilities</Link></li>
              <li><Link href="/careers" className="text-slate-100 hover:text-brand-orange transition-colors">Career Opportunities</Link></li>
              <li><Link href="/contact" className="text-slate-100 hover:text-brand-orange transition-colors">Contact Directory</Link></li>
            </ul>
          </div>

        </div>

        {/* Middle Grid: Office Base Cards */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-xs text-white uppercase tracking-wider border-l-2 border-brand-orange pl-3">
            REGIONAL OPERATIONAL BASES & DIRECTORY
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Eket Base */}
            <div className="bg-[#04385E] border border-white/20 hover:border-brand-orange rounded-xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-extrabold text-sm tracking-tight">EKET OPERATIONS BASE</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange bg-brand-orange/20 border border-brand-orange/40 px-2.5 py-0.5 rounded-full">
                    FIELD BASE
                  </span>
                </div>
                <p className="text-slate-100 text-xs leading-relaxed font-medium">
                  Operational & Engineering Base, Eket, Akwa Ibom State, Nigeria
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-white pt-3 border-t border-white/20 font-semibold">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:eket@c2elng.com" className="hover:text-brand-orange hover:underline">eket@c2elng.com</a>
              </div>
            </div>

            {/* Port Harcourt Base */}
            <div className="bg-[#04385E] border border-white/20 hover:border-brand-orange rounded-xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-extrabold text-sm tracking-tight">PORT HARCOURT BASE</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange bg-brand-orange/20 border border-brand-orange/40 px-2.5 py-0.5 rounded-full">
                    REGIONAL
                  </span>
                </div>
                <p className="text-slate-100 text-xs leading-relaxed font-medium">
                  Technical Operations & Logistics Base, Port Harcourt, Rivers State, Nigeria
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-white pt-3 border-t border-white/20 font-semibold">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:ph@c2elng.com" className="hover:text-brand-orange hover:underline">ph@c2elng.com</a>
              </div>
            </div>

            {/* Lagos HQ Base */}
            <div className="bg-[#04385E] border border-white/20 hover:border-brand-orange rounded-xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-extrabold text-sm tracking-tight">LAGOS CORPORATE HQ</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange bg-brand-orange/20 border border-brand-orange/40 px-2.5 py-0.5 rounded-full">
                    HEAD OFFICE
                  </span>
                </div>
                <p className="text-slate-100 text-xs leading-relaxed font-medium">
                  Corporate Strategy & Commercial Office, Lagos State, Nigeria
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-white pt-3 border-t border-white/20 font-semibold">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:info@c2elng.com" className="hover:text-brand-orange hover:underline">info@c2elng.com</a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright & Compliance Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-xs text-slate-100 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-bold">Chirheha 2E Limited (C2E)</strong>. All Engineering Rights Reserved.
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium">
            <span>ASME / API / NUPRC Standardized</span>
            <span>•</span>
            <Link href="/about#qhse" className="hover:text-brand-orange transition-colors">ISO Quality Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-brand-orange transition-colors">Safety Zero LTI Target</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
