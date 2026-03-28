import React from 'react';
import { ShoppingCart, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
export default function WhereToBuy() {
  return (
    <div className="min-h-screen bg-lab-bg text-gray-300">
      {/* Hero Section */}
      <section className="py-20 bg-lab-surface border-b border-lab-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold tracking-wider text-amber-500 mb-6 uppercase">
            Procurement Options
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Where to Buy
          </h1>
          <p className="text-xl text-lab-muted max-w-3xl mx-auto leading-relaxed">
            Equip your bench with industry-leading precision. Choose factory-direct purchasing for transparent pricing and immediate delivery, or request a custom quote for enterprise and educational labs.
          </p>
        </div>
      </section>
      {/* Buying Options */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Official Store */}
            <div className="bg-lab-surface border border-amber-500/30 rounded-lg p-8 relative overflow-hidden group hover:border-amber-500 transition-colors flex flex-col">
              <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <ShoppingCart className="w-12 h-12 text-amber-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Factory-Direct Online Store</h2>
              <p className="text-lab-muted mb-6 flex-1">
                Access transparent online pricing, full manufacturer warranty, and direct engineering support by purchasing straight from the source.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /><span>Transparent online pricing & availability</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /><span>Direct manufacturer warranty & support</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /><span>Fast global shipping from our warehouse</span></li>
              </ul>
              <a
                href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded transition-colors"
              >
                Shop Online & View Pricing <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            {/* B2B / Education */}
            <div className="bg-lab-surface border border-lab-border rounded-lg p-8 hover:border-lab-accent transition-colors flex flex-col">
              <Building2 className="w-12 h-12 text-lab-accent mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Enterprise & Education</h2>
              <p className="text-lab-muted mb-6 flex-1">
                Equipping a new university lab, manufacturing floor, or R&D center? We offer dedicated support and flexible terms for B2B procurement.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0" /><span>Volume discounts for lab outfitting</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0" /><span>Formal quotes and proforma invoices</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0" /><span>Purchase Orders (PO) accepted</span></li>
              </ul>
              <a
                href="https://variabledcpowersupply.com/contact-us/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-lab-bg hover:bg-lab-border border border-lab-border text-white font-medium py-3 px-4 rounded transition-colors"
              >
                Request a Custom Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
