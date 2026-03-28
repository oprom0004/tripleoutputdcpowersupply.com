import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
export default function Downloads() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          RESOURCES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Triple Output DC Power Supply Download Center
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          Access datasheets, user manuals, and SCPI programming guides for our triple output DC power supplies.
        </p>
      </div>
      <div className="max-w-none text-lg">
        <div className="grid gap-6">
          <a
            href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-lab-surface border border-lab-border rounded-sm hover:border-lab-accent transition-colors group"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-300 mb-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors">Product Datasheet & Specifications</h3>
              <p className="text-sm text-lab-muted">Detailed technical specifications, dimensional drawings, and performance graphs.</p>
            </div>
            <Download className="w-6 h-6 text-lab-muted group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors" />
          </a>
          <a
            href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-lab-surface border border-lab-border rounded-sm hover:border-lab-accent transition-colors group"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">User Manual</h3>
              <p className="text-sm text-lab-muted">Comprehensive guide on front-panel operation, tracking modes, and safety precautions.</p>
            </div>
            <Download className="w-6 h-6 text-lab-muted group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" />
          </a>
          <a
            href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-lab-surface border border-lab-border rounded-sm hover:border-lab-accent transition-colors group"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">SCPI Programming Reference</h3>
              <p className="text-sm text-lab-muted">Full list of supported SCPI commands for USB, LAN, and GPIB automation.</p>
            </div>
            <Download className="w-6 h-6 text-lab-muted group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" />
          </a>
        </div>
        <div className="mt-12 p-8 border border-lab-accent/30 bg-lab-accent/5 rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Purchase?</h3>
          <p className="text-lab-muted mb-8">
            Visit our main store to view current inventory and pricing.
          </p>
          <a
            href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-sm font-medium transition-colors inline-flex items-center gap-2"
          >
            Check Online Stock & Pricing <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
