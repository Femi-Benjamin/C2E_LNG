'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  FileText,
  Wrench
} from 'lucide-react';
import RfpModal from './RfpModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRfpModalOpen, setIsRfpModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Our Products', path: '/capabilities' },
    { name: 'C2E Careers', path: '/careers' },
    { name: 'Gallery', path: '/projects' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Corporate Contact & Status Bar */}
      <div className="bg-[#064F82] text-white text-xs py-2.5 px-4 font-sans hidden md:block border-b border-[#04385E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2 bg-[#04385E] px-3 py-0.5 rounded-full border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="font-extrabold tracking-wide uppercase text-[10px]">CHIRHEHA 2E</span>
              <span className="text-brand-orange font-extrabold uppercase text-[10px]">ENGINEERING & LNG</span>
            </div>

            <div className="h-3.5 w-px bg-white/30" />

            <div className="flex items-center space-x-1.5 text-slate-100 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              <span>ISO 9001:2015 • NUPRC • NOGICD CERTIFIED</span>
            </div>

            <div className="h-3.5 w-px bg-white/30" />

            <div className="flex items-center space-x-1.5 text-slate-100 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>EKET BASE • PORT HARCOURT • LAGOS HQ</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <a href="mailto:info@c2elng.com" className="hover:text-brand-orange transition-colors flex items-center space-x-1.5 text-slate-100 font-medium">
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>info@c2elng.com</span>
            </a>

            <div className="h-3.5 w-px bg-white/30" />

            <button 
              onClick={() => setIsRfpModalOpen(true)}
              className="bg-brand-orange/20 hover:bg-brand-orange text-brand-orange hover:text-white px-3 py-0.5 rounded-full border border-brand-orange/40 transition-all font-extrabold tracking-wider text-[10px] uppercase flex items-center space-x-1.5 shadow-sm"
            >
              <FileText className="w-3 h-3" />
              <span>REQUEST RFP</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Header (ALWAYS FIXED/STICKY AT THE TOP ON SCROLL) */}
      <header 
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xl py-3 animate-fade-in-down' 
            : 'sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-4'
        }`}
        style={{ position: isScrolled ? 'fixed' : 'sticky', top: 0, zIndex: 50 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Name Text */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div>
              <div className="font-extrabold text-xl sm:text-2xl tracking-tight leading-none">
                <span className="text-[#064F82]">Chirheha </span>
                <span className="text-brand-orange">2E Limited</span>
              </div>
              <p className="text-[11px] font-semibold tracking-wide text-slate-500 mt-0.5">
                providing engineering solutions
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items in a floating pill container */}
          <nav className="hidden lg:flex items-center bg-slate-50/90 border border-slate-200/90 p-1.5 rounded-full shadow-inner space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all duration-200 flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-white text-brand-orange shadow-sm border border-brand-orange/40'
                      : 'text-slate-700 hover:text-brand-orange hover:bg-white/80'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsRfpModalOpen(true)}
              className="px-6 py-2.5 text-xs font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange rounded-full shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 hover:scale-[1.03] transition-all duration-300 border border-amber-300/30 flex items-center space-x-2 group"
            >
              <Wrench className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
              <span>Talk to an Engineer</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsRfpModalOpen(true)}
              className="px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white bg-brand-orange rounded-full shadow-md"
            >
              RFP
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#064F82] hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-fade-in-down">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider ${
                    pathname === item.path
                      ? 'bg-slate-100 text-brand-orange border-l-4 border-brand-orange'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-brand-orange'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsRfpModalOpen(true);
                }}
                className="w-full py-3 text-center text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-amber-600 rounded-full flex items-center justify-center space-x-2 shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Request for Proposal (RFP)</span>
              </button>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-sans space-y-1 text-slate-700">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-[#064F82] font-bold">EKET BASE:</span>
                  <span>eket@c2elng.com</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-[#064F82] font-bold">PORT HARCOURT:</span>
                  <span>ph@c2elng.com</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-[#064F82] font-bold">LAGOS HQ:</span>
                  <span>info@c2elng.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* RFP Modal Component */}
      <RfpModal isOpen={isRfpModalOpen} onClose={() => setIsRfpModalOpen(false)} />
    </>
  );
}
