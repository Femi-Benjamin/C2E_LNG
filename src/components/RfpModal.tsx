'use client';

import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Wrench, 
  FileText,
  Clock
} from 'lucide-react';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RfpModal({ isOpen, onClose }: RfpModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    division: '01. Asset Integrity & NDT Inspection',
    targetBase: 'Eket Operational Base',
    timeline: 'Immediate Mobilization (< 7 Days)',
    projectScope: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden font-sans relative flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#064F82] text-white p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Wrench className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-orange">TECHNICAL INTAKE</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">Request Technical Proposal (RFP)</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-2xl font-extrabold text-[#064F82] uppercase tracking-wider">RFP TRANSMITTED</h3>
              <p className="text-sm text-slate-700 max-w-md mx-auto font-medium">
                Thank you for submitting your project specifications to Chirheha 2E Limited. An engineering lead from your designated operational base will review the scope and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WORK EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="john.doe@company.com"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+234 800 000 0000"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">PRIMARY SERVICE DIVISION *</label>
                  <select
                    value={formData.division}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange font-bold"
                  >
                    <option>01. Asset Integrity & NDT Inspection</option>
                    <option>02. Composite Pipeline Repair Wrap</option>
                    <option>03. Mascoat Thermal Insulation Coating</option>
                    <option>04. GSI Tank Gauging & Automation</option>
                    <option>05. OEM Procurement & Logistics</option>
                    <option>06. Technical Field Manpower Supply</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">TARGET OPERATIONAL BASE *</label>
                  <select
                    value={formData.targetBase}
                    onChange={(e) => setFormData({ ...formData, targetBase: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange font-bold"
                  >
                    <option>Eket Operational Base</option>
                    <option>Port Harcourt Field Base</option>
                    <option>Lagos Corporate HQ</option>
                    <option>Offshore Rigs / Platforms</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">PROJECT SCOPE & SPECIFICATIONS *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="Outline asset location, operating pressure, temperature, pipe diameter, or statutory survey deadline..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-brand-orange resize-none font-medium"
                />
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-200">
                <div className="flex items-center space-x-1.5 text-xs text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#064F82]" />
                  <span>ISO 9001 Confidentiality Guaranteed</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-brand-orange hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg flex items-center space-x-2 shadow-md"
                >
                  <span>TRANSMIT PROPOSAL</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
