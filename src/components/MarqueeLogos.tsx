'use client';

import React from 'react';

export default function MarqueeLogos() {
  const clients = [
    {
      name: 'ExxonMobil',
      logo: (
        <div className="flex items-center space-x-1 font-black text-2xl tracking-tighter text-[#EE1C25]">
          <span>ExxonMobil</span>
        </div>
      )
    },
    {
      name: 'DGS Integrated Projects Limited',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-4 border-[#0091DA] flex items-center justify-center font-black text-[#0091DA] text-sm">
            DGS
          </div>
          <div className="text-left font-black text-xs text-[#0091DA] leading-tight">
            <span>DGS</span>
            <span className="block text-[8px] text-slate-600 tracking-wider">INTEGRATED PROJECTS</span>
          </div>
        </div>
      )
    },
    {
      name: 'Profogas Nigeria Limited',
      logo: (
        <div className="flex items-center space-x-1.5 font-bold text-lg text-[#0066B2]">
          <span className="text-2xl font-black italic">P</span>
          <span className="text-sm font-extrabold tracking-tight text-[#0066B2]">Profogas <span className="text-xs text-slate-500 font-semibold">Nigeria</span></span>
        </div>
      )
    },
    {
      name: 'Montego',
      logo: (
        <div className="flex items-center space-x-1 text-[#D97706] font-bold text-lg">
          <span className="text-2xl font-black">m</span>
          <span className="font-extrabold tracking-tight text-slate-800 text-base">montego</span>
        </div>
      )
    },
    {
      name: 'Absolute Project Global Energy Limited',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-purple-800 flex items-center justify-center"></div>
          <div className="text-left text-[9px] font-black text-purple-900 leading-tight uppercase">
            <span>ABSOLUTE PROJECT</span>
            <span className="block text-[7px] text-slate-500">GLOBAL ENERGY LTD</span>
          </div>
        </div>
      )
    },
    {
      name: 'Amni International Petroleum',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full border-2 border-amber-600 bg-amber-100 flex items-center justify-center font-bold text-[9px] text-amber-800">
            AMNI
          </div>
          <div className="text-left text-[9px] font-extrabold text-slate-800 uppercase leading-none">
            <span>AMNI PETROLEUM</span>
            <span className="block text-[7px] text-slate-500">DEVELOPMENT CO</span>
          </div>
        </div>
      )
    },
    {
      name: 'CandidOil',
      logo: (
        <div className="flex items-center space-x-1.5 text-emerald-600 font-extrabold text-base">
          <div className="w-6 h-6 rounded-full border-2 border-emerald-600 flex items-center justify-center font-black text-xs">
            C
          </div>
          <span className="tracking-tight text-emerald-700 font-black">CandidOil</span>
        </div>
      )
    },
    {
      name: 'Minim & Tonye',
      logo: (
        <div className="flex items-center space-x-1.5 text-emerald-700">
          <div className="font-black text-sm">M&T</div>
          <div className="text-left text-[8px] font-black uppercase text-emerald-800 leading-none">
            <span>MINIM & TONYE</span>
            <span className="block text-[6px] text-slate-500">INFRASTRUCTURAL SPECIALIST</span>
          </div>
        </div>
      )
    },
    {
      name: 'Savannah Energy',
      logo: (
        <div className="flex items-center space-x-1 text-slate-800">
          <span className="text-amber-600 text-lg">☀</span>
          <span className="font-black text-sm tracking-wider uppercase">SAVANNAH ENERGY</span>
        </div>
      )
    }
  ];

  const partners = [
    {
      name: 'Mascoat',
      tagline: 'Innovating Thermal & Sound Protection',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-[#00529B] text-white flex items-center justify-center font-black text-xs rounded">
            M
          </div>
          <div className="text-left">
            <span className="font-black text-base text-[#00529B] block leading-none">Mascoat</span>
            <span className="text-[7px] text-slate-500 font-bold block">Thermal & Sound Protection</span>
          </div>
        </div>
      )
    },
    {
      name: 'Gauging Systems Inc (GSI)',
      tagline: 'Radar Tank Gauging',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="font-black text-xl text-[#064F82] tracking-tighter italic">GSI</div>
          <div className="text-left text-[8px] font-bold text-slate-600 leading-none">
            <span>Gauging Systems Inc.</span>
          </div>
        </div>
      )
    },
    {
      name: 'Tesla Engineering',
      tagline: 'Surveillance & Engineering',
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-red-700 text-white flex items-center justify-center font-black text-xs rounded">
            T
          </div>
          <span className="font-black text-base text-red-700 tracking-wider">TESLA</span>
        </div>
      )
    },
    {
      name: 'FIXID',
      tagline: 'Surveillance Solutions',
      logo: (
        <div className="flex items-center space-x-1 text-[#E06D53]">
          <span className="font-black text-xl tracking-widest border-b-2 border-[#E06D53]">FIXID</span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-12">
      
      {/* 1. OUR CLIENTS MARQUEE */}
      <div className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full">
            OUR ESTEEMED CLIENTS
          </span>
        </div>

        <div className="relative overflow-hidden py-4 bg-slate-50 border-y border-slate-200 shadow-inner">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center">
            {clients.concat(clients).map((item, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-orange transition-all min-w-[180px]"
              >
                {item.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. OUR OEM PARTNERS MARQUEE */}
      <div className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#064F82] bg-[#064F82]/10 border border-[#064F82]/30 px-3.5 py-1 rounded-full">
            GLOBAL OEM & TECHNICAL PARTNERS
          </span>
        </div>

        <div className="relative overflow-hidden py-4 bg-slate-50 border-y border-slate-200 shadow-inner">
          <div className="flex space-x-12 animate-marquee-reverse whitespace-nowrap items-center">
            {partners.concat(partners).concat(partners).map((item, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-orange transition-all min-w-[200px]"
              >
                {item.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
