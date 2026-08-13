'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone,
  Send, 
  CheckCircle2,
  Clock,
  Navigation,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeMapTab, setActiveMapTab] = useState<'eket' | 'ph' | 'lagos'>('eket');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    office: 'Operational Head Office (Eket)',
    division: '01. Asset Integrity & NDT Inspection Survey',
    message: ''
  });

  const offices = [
    {
      id: 'eket',
      name: 'OPERATIONAL HEAD OFFICE',
      city: 'EKET, AKWA IBOM STATE',
      badge: 'MAIN FIELD OPERATIONS BASE',
      role: 'Rapid Mobilization, Field Equipment Workshop & Rig Operations Base',
      address: '1 Dan Abia Crescent, Off Ikot Udoma Road, Eket, Akwa Ibom State, Nigeria.',
      phone: '+234 803 516 5167',
      email: 'enquiry@c2elng.com',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Ikot+Udoma+Road,+Eket,+Akwa+Ibom+State,+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'ph',
      name: 'LIAISON OFFICE',
      city: 'PORT HARCOURT, RIVERS STATE',
      badge: 'REGIONAL TECHNICAL BASE',
      role: 'Regional Engineering Support & Offshore Logistics Hub',
      address: '20, King Perekule Rd, G.R.A. Phase II, Port Harcourt, Rivers State, Nigeria.',
      phone: '+234 803 516 5167',
      email: 'ph@c2elng.com',
      mapEmbedUrl: 'https://maps.google.com/maps?q=King+Perekule+Rd,+GRA+Phase+2,+Port+Harcourt,+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'lagos',
      name: 'CORPORATE OFFICE',
      city: 'OGUDU GRA, LAGOS STATE',
      badge: 'COMMERCIAL HEAD OFFICE',
      role: 'Corporate Strategy, OEM Sourcing & International Commercial Base',
      address: '3B, Close B, Hillview Zone, Ogudu GRA (Pako Gate), Lagos State, Nigeria.',
      phone: '+234 803 516 5167',
      email: 'info@c2elng.com',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Ogudu+GRA,+Lagos,+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed'
    }
  ];

  const activeOffice = offices.find((o) => o.id === activeMapTab) || offices[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        office: 'Operational Head Office (Eket)',
        division: '01. Asset Integrity & NDT Inspection Survey',
        message: ''
      });
    }, 3500);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* Banner */}
      <section className="relative py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider mx-auto">
            <span>CONTACT CHIRHEHA 2E LIMITED</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight">
            Contact Us
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Reach out to our operational head office in Eket, liaison base in Port Harcourt, or corporate office in Lagos for immediate engineering inquiries.
          </p>

          {/* Quick Contact Direct Hotline Cards Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 max-w-5xl mx-auto">
            
            <a 
              href="tel:+2348035165167"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-orange shadow-sm flex items-center justify-center space-x-3 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">DIRECT HOTLINE</span>
                <span className="text-sm font-extrabold text-[#064F82] group-hover:text-brand-orange transition-colors">+234 803 516 5167</span>
              </div>
            </a>

            <a 
              href="mailto:enquiry@c2elng.com"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-orange shadow-sm flex items-center justify-center space-x-3 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#064F82]/10 border border-[#064F82]/30 flex items-center justify-center text-[#064F82] group-hover:bg-[#064F82] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">GENERAL INQUIRIES</span>
                <span className="text-sm font-extrabold text-[#064F82] group-hover:text-brand-orange transition-colors">enquiry@c2elng.com</span>
              </div>
            </a>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block">FIELD RESPONSE</span>
                <span className="text-xs font-bold text-emerald-700">24/7 Emergency Mobilization</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content: Centered Interactive Map & Office Directory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Centered Map Explorer Section */}
          <div className="space-y-8">
            
            {/* Centered Heading & Map Location Selector Tabs */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full">
                INTERACTIVE LOCATION MAP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064F82] tracking-tight">
                Our Operational Facilities
              </h2>
              <p className="text-sm text-slate-700">
                Select an operational base below to center and view its interactive location map and field details.
              </p>

              {/* Centered Tab Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {offices.map((off) => {
                  const isSelected = activeMapTab === off.id;
                  return (
                    <button
                      key={off.id}
                      onClick={() => setActiveMapTab(off.id as 'eket' | 'ph' | 'lagos')}
                      className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                        isSelected
                          ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-105'
                          : 'bg-slate-100 text-slate-700 hover:bg-[#064F82] hover:text-white border border-slate-200'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{off.name} ({off.city.split(',')[0]})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PERFECTLY CENTERED LIVE GOOGLE MAP CARD */}
            <div className="max-w-4xl mx-auto bg-slate-50 border-2 border-slate-200 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6 sm:p-8 cad-border-box">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded border border-brand-orange/30">
                      {activeOffice.badge}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      CENTERED MAP VIEW
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#064F82] mt-1">
                    {activeOffice.name} <span className="text-brand-orange">({activeOffice.city})</span>
                  </h3>
                </div>

                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeOffice.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#064F82] hover:bg-[#04385E] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 shadow-md transition-colors shrink-0"
                >
                  <span>GET DIRECTIONS</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Centered Responsive Google Maps Iframe Embed */}
              <div className="relative w-full h-[420px] rounded-xl overflow-hidden border border-slate-300 shadow-inner">
                <iframe
                  title={`Google Map - ${activeOffice.name}`}
                  src={activeOffice.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-medium gap-2">
                <div className="flex items-center space-x-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Address: <strong className="text-[#064F82]">{activeOffice.address}</strong></span>
                </div>
                <div className="flex items-center space-x-2 text-brand-orange font-bold">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call: {activeOffice.phone}</span>
                </div>
              </div>
            </div>

            {/* 3 Office Base Cards Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
              {offices.map((off) => {
                const isSelected = activeMapTab === off.id;
                return (
                  <div 
                    key={off.id}
                    onClick={() => setActiveMapTab(off.id as 'eket' | 'ph' | 'lagos')}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer space-y-4 cad-border-box flex flex-col justify-between ${
                      isSelected 
                        ? 'bg-slate-50 border-brand-orange shadow-lg' 
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded border border-brand-orange/30">
                        {off.badge}
                      </span>

                      <div>
                        <h4 className="text-base font-bold text-[#064F82]">{off.name}</h4>
                        <p className="text-xs font-extrabold text-brand-orange">{off.city}</p>
                      </div>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {off.role}
                      </p>

                      <div className="space-y-2 text-xs text-slate-700 font-medium pt-2 border-t border-slate-200">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className="text-slate-800 font-semibold">{off.address}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                          <a href={`tel:${off.phone}`} className="text-[#064F82] font-bold hover:underline">{off.phone}</a>
                        </div>
                      </div>
                    </div>

                    <button 
                      className={`w-full py-2 text-center text-xs font-extrabold uppercase tracking-wider rounded-lg transition-colors border ${
                        isSelected 
                          ? 'bg-brand-orange text-white border-brand-orange' 
                          : 'bg-slate-100 text-[#064F82] border-slate-300 hover:bg-[#064F82] hover:text-white'
                      }`}
                    >
                      {isSelected ? 'MAP CENTERED' : 'CENTER THIS MAP'}
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 lg:p-10 shadow-xl space-y-6 cad-border-box max-w-5xl mx-auto">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-[#064F82] tracking-tight">Direct Technical Inquiry Form</h3>
                <p className="text-xs text-slate-600 font-medium mt-1">Submit your project details or service inquiry directly to Chirheha 2E Limited.</p>
              </div>

              <div className="hidden sm:flex items-center space-x-1.5 text-xs text-slate-600 font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#064F82]" />
                <span>ISO 9001 Confidential</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-extrabold text-xl text-[#064F82] uppercase tracking-wider">INQUIRY TRANSMITTED</h4>
                <p className="text-sm text-slate-700 max-w-md mx-auto font-medium">
                  Thank you for contacting Chirheha 2E Limited. Our technical engineering lead will review your message and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Engr. John Doe"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">COMPANY / ORGANISATION *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Energy Logistics Ltd"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john.doe@company.com"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">PHONE NUMBER</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 803 516 5167"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">TARGET OPERATIONAL BASE *</label>
                    <select
                      value={formData.office}
                      onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange font-bold"
                    >
                      <option>Operational Head Office (Eket, Akwa Ibom)</option>
                      <option>Liaison Office (GRA Phase II, Port Harcourt)</option>
                      <option>Corporate Office (Ogudu GRA, Lagos)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">PRIMARY SERVICE DIVISION *</label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange font-bold"
                    >
                      <option>01. Asset Integrity & NDT Inspection Survey</option>
                      <option>02. Composite Pipeline Repair Wrap</option>
                      <option>03. Mascoat Industrial Thermal Insulation Coatings</option>
                      <option>04. GSI High-Precision Tank Gauging & Automation</option>
                      <option>05. OEM Procurement & Logistics Sourcing</option>
                      <option>06. Technical Field Manpower Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">TECHNICAL INQUIRY DETAILS *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirements, technical specifications, or timeline..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange resize-none font-medium"
                  />
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center space-x-2 shadow-md"
                  >
                    <span>TRANSMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
