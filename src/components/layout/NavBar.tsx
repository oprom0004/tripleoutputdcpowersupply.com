"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, ArrowRight, ChevronDown } from 'lucide-react';
export const NavBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };
  const getLinkClass = (path: string) => {
    return isActive(path)
      ? "hover:text-white transition-colors font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      : "hover:text-white transition-colors text-lab-muted";
  };
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-lab-border bg-lab-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-white uppercase group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">TRIPLE</span>
                <span className="font-light text-xl tracking-widest text-gray-400 uppercase group-hover:text-gray-200 transition-colors">OUTPUT</span>
                <span className="bg-amber-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-1 shadow-[0_0_10px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.6)] transition-shadow">DC</span>
              </div>
              <span className="text-[9px] text-lab-muted font-mono tracking-[0.3em] uppercase mt-1 group-hover:text-gray-400 transition-colors">Precision Power Supply</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <Link href="/" className={getLinkClass('/')}>Home</Link>
            <Link href="/etm-series" className={getLinkClass('/etm-series')}>Top Picks</Link>
            <Link href="/pricing-guide" className={getLinkClass('/pricing-guide')}>Pricing</Link>
            <Link href="/where-to-buy" className={getLinkClass('/where-to-buy')}>Where to Buy</Link>
            {/* Guides Dropdown */}
            <div className="relative group py-6">
              <span className={`flex items-center gap-1 cursor-pointer transition-colors ${isActive('/how-to-choose') || isActive('/comparisons') || isActive('/selection-guide') ? 'font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-lab-muted hover:text-white'}`}>
                Tutorials <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
              </span>
              <div className="absolute top-full left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="bg-lab-surface border border-lab-border rounded-sm shadow-xl py-2 flex flex-col">
                  <Link href="/how-to-choose" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">How to Choose</Link>
                  <Link href="/comparisons" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">Comparisons</Link>
                  <Link href="/selection-guide" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">Selection</Link>
                </div>
              </div>
            </div>
            {/* Applications Dropdown */}
            <div className="relative group py-6">
              <Link href="/applications" className={`flex items-center gap-1 transition-colors ${isActive('/applications') ? 'font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-lab-muted hover:text-white'}`}>
                Applications <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="bg-lab-surface border border-lab-border rounded-sm shadow-xl py-2 flex flex-col">
                  <Link href="/applications" className="px-4 py-2 font-bold text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:bg-lab-border/50 transition-all border-b border-lab-border/50 mb-1">View All Applications</Link>
                  <Link href="/applications/op-amp-testing" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">Op-Amp & Bipolar Testing</Link>
                  <Link href="/applications/mixed-signal-pcb-design" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">Mixed-Signal PCB Design</Link>
                  <Link href="/applications/iot-device-power-profiling" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">IoT Device Power Profiling</Link>
                  <Link href="/applications/automotive-electronics" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">Automotive Electronics (12V/24V)</Link>
                  <Link href="/applications/educational-university-labs" className="px-4 py-2 hover:bg-lab-border/50 hover:text-white transition-colors text-lab-muted">Educational & University Labs</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/#buy-now"
              className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-sm text-sm font-bold tracking-wide transition-colors flex items-center gap-2 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              CHECK PRICING <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
