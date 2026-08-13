'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  Users, 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  ChevronRight,
  FileText,
  X
} from 'lucide-react';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    base: 'Eket Operational Base',
    experience: '3-5 Years',
    coverNote: ''
  });

  const vacancies = [
    {
      id: 'v1',
      title: 'Senior ASNT Level III NDT Inspector',
      department: 'Asset Integrity & Survey Division',
      location: 'Eket Base / Offshore Rigs',
      type: 'Full-Time Field Position',
      experience: '5+ Years Offshore Experience',
      requirements: [
        'Certified ASNT Level III or Level II in UT, PAUT, TOFD, MT, and PT',
        'Valid BOSIET / HUET offshore safety certification',
        'API 510, 570, or 653 inspector certification preferred',
        'Demonstrated experience in rig survey and offshore structural NDT'
      ]
    },
    {
      id: 'v2',
      title: 'Composite Pipeline Repair Engineer',
      department: 'Pipeline Rehabilitation Division',
      location: 'Port Harcourt Field Base',
      type: 'Full-Time Field Position',
      experience: '3+ Years Field Experience',
      requirements: [
        'ASME PCC-2 Article 4.1 or ISO 24817 composite repair wrap certification',
        'Hands-on experience with carbon fiber and fiberglass wrap application on live lines',
        'Strong knowledge of MAOP pressure calculations and defect assessment',
        'Offshore and onshore pipeline corridor repair experience'
      ]
    },
    {
      id: 'v3',
      title: 'NACE / AMPP Level II Coating Inspector',
      department: 'Thermal Coatings & Blasting Division',
      location: 'Lagos / Eket Operational Base',
      type: 'Full-Time Position',
      experience: '3+ Years Industrial Experience',
      requirements: [
        'Active NACE CIP Level II or AMPP Coating Inspector certification',
        'Experience with Mascoat ceramic thermal insulation spray application',
        'Proficiency in surface prep QA/QC (SSPC-SP10 / UHP hydro-blasting inspection)',
        'Comprehensive knowledge of CUI (Corrosion Under Insulation) mitigation'
      ]
    },
    {
      id: 'v4',
      title: 'GSI Tank Gauging & SCADA Automation Engineer',
      department: 'Telemetry & Automation Division',
      location: 'Port Harcourt Liaison Base',
      type: 'Full-Time Position',
      experience: '4+ Years Terminal Experience',
      requirements: [
        'B.Sc / HND in Electrical, Instrumentation, or Control Engineering',
        'Proven expertise with GSI radar tank level gauges and servo sensors',
        'Experience with Modbus, SCADA telemetry, and custody transfer software',
        'Field experience in oil terminal tank farm commissioning'
      ]
    },
    {
      id: 'v5',
      title: 'Offshore Rigging & Lifting Equipment Supervisor',
      department: 'Technical Operations Division',
      location: 'Eket Field Operations Base',
      type: 'Full-Time Offshore Position',
      experience: '5+ Years Rigging Experience',
      requirements: [
        'LEEA Certified Lifting Equipment Inspector / Rigging Supervisor',
        'Expertise in proof load testing, wire rope inspection, and tubular audits',
        'Valid BOSIET / Offshore medical certification',
        'Proven track record of zero LTI safety leadership'
      ]
    }
  ];

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setFormData({ ...formData, role: roleTitle });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedRole(null);
    }, 3500);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      
      {/* Hero Banner with High-Res Engineering Team Image */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full text-brand-orange text-xs font-extrabold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>CAREERS AT CHIRHEHA 2E LIMITED (C2E)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#064F82] tracking-tight leading-[1.15]">
                Build Your Engineering Career With <span className="text-brand-orange">Energy Leaders</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                Join Nigeria’s premier indigenous technical services firm. We empower world-class NDT inspectors, composite repair specialists, coating engineers, and automation experts through global OEM training and field exposure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2.5">
                  <Award className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-xs font-extrabold text-slate-800">Global OEM Certifications</span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#064F82] shrink-0" />
                  <span className="text-xs font-extrabold text-slate-800">Zero-Harm HSE Culture</span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2.5">
                  <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-extrabold text-slate-800">100% Local Content NOGICD</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white cad-border-box">
                <img 
                  src="/images/careers_team.jpg" 
                  alt="Chirheha 2E Engineering Team" 
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064F82]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full w-max">
                    ENGINEERING & FIELD OPERATIONS
                  </span>
                  <h4 className="font-extrabold text-xl text-white mt-1">Certified Technical Talent</h4>
                  <p className="text-xs text-slate-200">Deployed across Eket, Port Harcourt & Offshore Rigs.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vacancies Matrix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/30 px-3.5 py-1 rounded-full">
              ACTIVE FIELD VACANCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064F82] tracking-tight">
              Explore Current Opportunities
            </h2>
            <p className="text-sm text-slate-700 font-normal">
              Apply directly to open engineering positions across our Eket, Port Harcourt, and Lagos operational bases.
            </p>
          </div>

          <div className="space-y-6">
            {vacancies.map((v) => (
              <div 
                key={v.id}
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 hover:border-brand-orange transition-all duration-300 shadow-md hover:shadow-xl space-y-6 cad-border-box"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-extrabold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded border border-brand-orange/30 uppercase tracking-wider">
                        {v.department}
                      </span>
                      <span className="text-[10px] font-extrabold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {v.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#064F82] tracking-tight mt-1">{v.title}</h3>
                  </div>

                  <button
                    onClick={() => handleApplyClick(v.title)}
                    className="px-6 py-3 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 shrink-0"
                  >
                    <span>APPLY FOR THIS ROLE</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Location: <strong className="text-slate-800">{v.location}</strong></span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Experience: <strong className="text-slate-800">{v.experience}</strong></span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-extrabold text-[#064F82] uppercase tracking-wider">PRIMARY REQUIREMENTS & QUALIFICATIONS:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {v.requirements.map((req, idx) => (
                      <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-800 font-medium">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* General Application & Resume Submission Box */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 lg:p-10 shadow-xl space-y-6 text-center cad-border-box">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-extrabold text-[#064F82] uppercase tracking-widest">SPONTANEOUS APPLICATION</span>
              <h3 className="text-2xl font-extrabold text-[#064F82]">Don’t See Your Specific Role Listed?</h3>
              <p className="text-xs sm:text-sm text-slate-700">
                We are constantly expanding our field inspector and engineering rosters. Submit your resume directly to our recruitment team at <strong className="text-brand-orange">careers@c2elng.com</strong> or fill out the application form.
              </p>

              <div className="pt-3">
                <button
                  onClick={() => handleApplyClick('General Spontaneous Application')}
                  className="px-8 py-3.5 bg-[#064F82] hover:bg-[#04385E] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 mx-auto"
                >
                  <FileText className="w-4 h-4 text-brand-orange" />
                  <span>SUBMIT SPONTANEOUS CV / RESUME</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 font-sans relative">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange">JOB APPLICATION</span>
                <h3 className="text-xl font-extrabold text-[#064F82] mt-0.5">{selectedRole}</h3>
              </div>
              <button
                onClick={() => setSelectedRole(null)}
                className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-extrabold text-xl text-[#064F82] uppercase tracking-wider">APPLICATION RECEIVED</h4>
                <p className="text-xs text-slate-700 font-medium max-w-sm mx-auto">
                  Thank you for applying to Chirheha 2E Limited. Our recruitment team will evaluate your credentials and reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Engr. Jane Doe"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane.doe@example.com"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">PREFERRED BASE *</label>
                    <select
                      value={formData.base}
                      onChange={(e) => setFormData({ ...formData, base: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange font-bold"
                    >
                      <option>Eket Operational Base</option>
                      <option>Port Harcourt Field Base</option>
                      <option>Lagos Corporate Office</option>
                      <option>Offshore Rigs / FPSO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">YEARS EXPERIENCE *</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange font-bold"
                    >
                      <option>1-3 Years</option>
                      <option>3-5 Years</option>
                      <option>5-10 Years</option>
                      <option>10+ Years (Senior Lead)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">QUALIFICATIONS & COVER SUMMARY *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="List your ASNT, NACE, LEEA, BOSIET, or API certifications and key field achievements..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange resize-none font-medium"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center space-x-2 shadow-md"
                  >
                    <span>SUBMIT CV & APPLICATION</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
