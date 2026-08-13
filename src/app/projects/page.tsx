'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Building2, 
  Maximize2,
  X,
  Camera
} from 'lucide-react';
import RfpModal from '@/components/RfpModal';

export default function ProjectsPage() {
  const [isRfpOpen, setIsRfpOpen] = useState(false);
  const [filter, setFilter] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const galleryItems = [
    {
      id: 'g1',
      category: 'NDT & INSPECTION',
      title: 'Offshore Flare Line & Rig Structure NDT Inspection',
      client: 'Major Offshore Platform Operator',
      location: 'Offshore Niger Delta Basin',
      image: '/images/ndt_inspection.jpg',
      standards: 'ASNT Level III / API 510 / 570',
      description: 'Ultrasonic testing (UT), Phased Array (PAUT), and statutory lifting equipment verification under active offshore platform conditions.',
      results: ['100% Non-invasive flaw detection', '0 LTI Safety Target Zero', 'Full NUPRC Statutory Certification']
    },
    {
      id: 'g2',
      category: 'COMPOSITE REPAIRS',
      title: 'Live High-Pressure Pipeline Composite Wrap Rehabilitation',
      client: 'Hydrocarbon Transport Pipeline Operator',
      location: 'Port Harcourt Pipeline Corridor',
      image: '/images/composite_repair.jpg',
      standards: 'ASME PCC-2 Article 4.1 / ISO 24817',
      description: 'Structural carbon fiber and glass wrap repair applied live on a 16" line spool with 75% wall loss without shutdown.',
      results: ['MAOP restored to 120 Bar', 'Zero production deferment', '20+ Year design life retention']
    },
    {
      id: 'g3',
      category: 'MASCOAT COATINGS',
      title: 'Mascoat Industrial Thermal Insulation Spray on Storage Tanks',
      client: 'Refinery & Tank Farm Operator',
      location: 'Eket Operations Hub',
      image: '/images/mascoat_gallery.jpg',
      standards: 'NACE / AMPP Level 3 Thermal Standard',
      description: 'Application of 100 mils Mascoat ceramic insulation coating to steam crude tanks, replacing legacy rockwool and eliminating CUI.',
      results: ['CUI risk completely eliminated', 'Surface temperature reduced to touch-safe 52°C', '22% Annual fuel energy savings']
    },
    {
      id: 'g4',
      category: 'GSI GAUGING',
      title: 'GSI Sub-Millimeter Radar Tank Gauging SCADA Installation',
      client: 'Crude Oil Export Terminal Operator',
      location: 'Escravos Crude Export Terminal',
      image: '/images/gsi_gallery.jpg',
      standards: 'API MPMS Chapter 3 Custody Transfer',
      description: 'Furnishing, installation, and calibration of GSI precision level radar gauges and automated overfill prevention systems.',
      results: ['±0.5mm Fiscal custody transfer precision', 'Automated SCADA inventory dashboard', 'Zero overfill incidents with SIL-2 alarms']
    }
  ];

  const filteredItems = filter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* Banner */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>FIELD GALLERY & FEATURED PROJECTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight">
            Field Execution & Project Gallery
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed font-normal">
            Visual field gallery of Chirheha 2E Limited engineering campaigns across offshore rigs, pipeline corridors, and oil terminal facilities in Nigeria.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'ALL', label: 'ALL FIELD PHOTOS' },
              { id: 'NDT & INSPECTION', label: 'NDT & INSPECTION' },
              { id: 'COMPOSITE REPAIRS', label: 'COMPOSITE REPAIRS' },
              { id: 'MASCOAT COATINGS', label: 'MASCOAT COATINGS' },
              { id: 'GSI GAUGING', label: 'GSI TANK GAUGING' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all ${
                  filter === tab.id
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-[#064F82] hover:text-white border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-brand-orange transition-all duration-300 flex flex-col justify-between group cad-border-box"
              >
                {/* Photo Thumbnail Container */}
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064F82]/90 via-[#064F82]/20 to-transparent flex items-end justify-between p-5 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    
                    <button
                      onClick={() => setSelectedImage({ src: item.image, title: item.title, desc: item.description })}
                      className="p-2 bg-white/20 hover:bg-brand-orange backdrop-blur-md rounded-lg transition-colors text-white"
                      title="Expand Photo"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#064F82] tracking-tight group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                      <div className="flex items-center space-x-1.5">
                        <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{item.client}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-[11px] font-extrabold text-[#064F82] uppercase tracking-wider">VERIFIED FIELD RESULTS:</h4>
                      <div className="space-y-1.5">
                        {item.results.map((r, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-slate-800 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500 font-bold">CODE: {item.standards}</span>
                    <button
                      onClick={() => setIsRfpOpen(true)}
                      className="px-4 py-2 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center space-x-1.5 shadow-md"
                    >
                      <span>INQUIRE SCOPE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Image Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6 border-2 border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold text-[#064F82]">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="w-full max-h-[60vh] object-cover rounded-xl border border-slate-200"
            />

            <p className="text-xs text-slate-700 leading-relaxed font-medium">{selectedImage.desc}</p>
          </div>
        </div>
      )}

      <RfpModal isOpen={isRfpOpen} onClose={() => setIsRfpOpen(false)} />
    </div>
  );
}
