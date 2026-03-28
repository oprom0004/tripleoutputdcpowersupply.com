import React from 'react';
import { Check, X, AlertTriangle, ArrowRight } from 'lucide-react';
export default function PricingGuide() {
  const faqs = [
    {
      question: "Do you accept Purchase Orders (Net 30 terms)?",
      answer: "Yes. We routinely accept POs with Net 30 terms from accredited universities, government laboratories, and established corporate accounts. Contact our sales team to set up an account."
    },
    {
      question: "Do the power supplies come with calibration certificates?",
      answer: "All eTM-DM series power supplies are strictly factory-calibrated before shipment. If your compliance department requires formal NIST-traceable calibration certificates, they can be provided upon request."
    },
    {
      question: "What is the warranty period?",
      answer: "We stand behind our industrial-grade build quality with a standard 1-year warranty covering parts and labor, backed by lifetime technical support."
    },
    {
      question: "Are there any recurring software fees or license keys?",
      answer: "No. Unlike legacy brands that charge to 'unlock' features, every eTM-DM unit comes with all features (4-digit resolution, LAN/USB/RS232 interfaces, SCPI programming) permanently unlocked out of the box."
    }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <div className="min-h-screen bg-lab-bg pb-24 font-sans">
      {/* Inject JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Editorial Header */}
      <header className="pt-24 pb-16 border-b border-lab-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-mono text-lab-muted uppercase tracking-widest mb-6">
            Procurement Analysis / Q3 2024
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-[1.1]">
            Triple Output DC Power Supply Pricing
          </h1>
          <p className="text-lg text-lab-muted max-w-3xl leading-relaxed">
            A transparent breakdown for engineering and procurement teams. Understand the structural cost differences between entry-level SMPS, industrial-grade linear supplies, and legacy brand premiums.
          </p>
        </div>
      </header>
      {/* Data Grid Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-mono text-lab-muted uppercase tracking-widest mb-8 border-b border-lab-border pb-4">
            Market Tier Analysis
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-lab-border">
                  <th className="py-4 pr-6 font-mono text-[11px] text-lab-muted w-1/4">Category</th>
                  <th className="py-4 px-6 font-mono text-[11px] text-lab-muted w-1/4">Tier 1: Entry Level</th>
                  <th className="py-4 px-6 font-mono text-[11px] text-lab-accent w-1/4 bg-lab-surface/30">Tier 2: Industrial (eTM-DM)</th>
                  <th className="py-4 pl-6 font-mono text-[11px] text-lab-muted w-1/4">Tier 3: Legacy Brands</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Price Row */}
                <tr className="border-b border-lab-border/50 hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 pr-6 font-medium text-white">Typical Price Range</td>
                  <td className="py-4 px-6 font-mono text-lab-muted">&lt; $250</td>
                  <td className="py-4 px-6 font-mono text-white bg-lab-surface/30">$400 - $900</td>
                  <td className="py-4 pl-6 font-mono text-lab-muted">$1,500 - $3,000+</td>
                </tr>
                {/* Topology Row */}
                <tr className="border-b border-lab-border/50 hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 pr-6 font-medium text-white">Topology</td>
                  <td className="py-4 px-6 text-lab-muted">Switching (SMPS)</td>
                  <td className="py-4 px-6 text-white bg-lab-surface/30">Pure Linear</td>
                  <td className="py-4 pl-6 text-lab-muted">Pure Linear</td>
                </tr>
                {/* Noise Row */}
                <tr className="border-b border-lab-border/50 hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 pr-6 font-medium text-white">Ripple & Noise</td>
                  <td className="py-4 px-6 text-lab-muted">&gt; 10 mVrms (High freq noise)</td>
                  <td className="py-4 px-6 text-white bg-lab-surface/30">&lt; 1 mVrms (Ultra-low)</td>
                  <td className="py-4 pl-6 text-lab-muted">&lt; 1 mVrms (Ultra-low)</td>
                </tr>
                {/* Resolution Row */}
                <tr className="border-b border-lab-border/50 hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 pr-6 font-medium text-white">Display Resolution</td>
                  <td className="py-4 px-6 text-lab-muted">10mV / 10mA (3-digit)</td>
                  <td className="py-4 px-6 text-white bg-lab-surface/30">1mV / 1mA (4-digit)</td>
                  <td className="py-4 pl-6 text-lab-muted">1mV / 1mA (Often requires paid unlock)</td>
                </tr>
                {/* Weight Row */}
                <tr className="border-b border-lab-border/50 hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 pr-6 font-medium text-white">Build / Weight</td>
                  <td className="py-4 px-6 text-lab-muted">Lightweight (&lt; 5 lbs)</td>
                  <td className="py-4 px-6 text-white bg-lab-surface/30">Heavy Copper Transformer (~16 lbs)</td>
                  <td className="py-4 pl-6 text-lab-muted">Heavy Copper Transformer (~20 lbs)</td>
                </tr>
                {/* Procurement Assessment Row */}
                <tr>
                  <td className="py-6 pr-6 font-medium text-white align-top">Procurement Assessment</td>
                  <td className="py-6 px-6 align-top">
                    <div className="flex items-start gap-2 text-red-400/80">
                      <X className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">High risk of engineer rejection due to switching noise affecting sensitive tests.</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 align-top bg-lab-surface/30 border-b-2 border-lab-accent">
                    <div className="flex items-start gap-2 text-emerald-400">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">Maximum ROI. Delivers required R&D performance without the brand premium.</span>
                    </div>
                  </td>
                  <td className="py-6 pl-6 align-top">
                    <div className="flex items-start gap-2 text-amber-400/80">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">Budget drain. 40-60% of cost is brand tax. Hard to justify unless mandated by client.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Cost Deconstruction - Technical Style */}
      <section className="py-16 border-t border-lab-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-light text-white mb-4">Deconstructing the BOM</h2>
              <p className="text-sm text-lab-muted leading-relaxed">
                Understanding the Bill of Materials (BOM) reveals exactly what you are paying for in a lab-grade power supply.
              </p>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div className="border-l border-lab-border pl-6">
                <h4 className="text-sm font-mono text-white mb-2 uppercase tracking-wide">01. Heavy Copper Transformers</h4>
                <p className="text-sm text-lab-muted leading-relaxed">
                  A true linear power supply is heavy (often 15-25 lbs). The bulk of the hardware cost goes into massive, pure copper toroidal or EI transformers. This provides the ultra-clean, noise-free power that sensitive analog circuits demand. Cheap supplies use tiny high-frequency transformers (SMPS) to cut costs, sacrificing signal purity.
                </p>
              </div>
              <div className="border-l border-lab-border pl-6">
                <h4 className="text-sm font-mono text-white mb-2 uppercase tracking-wide">02. High-Precision ADC/DACs</h4>
                <p className="text-sm text-lab-muted leading-relaxed">
                  The difference between a 3-digit display (10mV resolution) and a 4-digit display (1mV resolution) requires significantly more expensive Analog-to-Digital and Digital-to-Analog converters. The eTM-DM series uses premium ADCs to guarantee 4-digit precision natively.
                </p>
              </div>
              <div className="border-l border-lab-border pl-6">
                <h4 className="text-sm font-mono text-white mb-2 uppercase tracking-wide">03. Thermal Management</h4>
                <p className="text-sm text-lab-muted leading-relaxed">
                  Linear supplies dissipate excess voltage as heat. To run at full load (e.g., 30V/3A) continuously without thermal shutdown, they require massive extruded aluminum heatsinks and intelligent fan control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Procurement Considerations */}
      <section className="py-16 border-t border-lab-border bg-lab-surface/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-lab-border pb-4">
            <div>
              <h2 className="text-sm font-mono text-lab-muted uppercase tracking-widest mb-2">
                Procurement Considerations
              </h2>
              <p className="text-white text-xl font-light">Beyond the spec sheet.</p>
            </div>
            <a
              href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-white transition-colors group"
            >
              VIEW ETM-DM PRICING <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-base font-medium text-white mb-3">Lead Time & Availability</h4>
              <p className="text-sm text-lab-muted leading-relaxed">
                Legacy brands frequently suffer from 8-12 week lead times due to complex global supply chains. eTM-DM models are stocked locally and typically ship within 24-48 hours, keeping engineering schedules on track.
              </p>
            </div>
            <div>
              <h4 className="text-base font-medium text-white mb-3">No Hidden "Unlock" Fees</h4>
              <p className="text-sm text-lab-muted leading-relaxed">
                Some major brands sell a base model cheaply, but charge $100+ software licenses to "unlock" the 4th digit of resolution or enable the LAN/RS232 ports. eTM-DM features, precision, and interfaces are fully unlocked out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 border-t border-lab-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-mono text-lab-muted uppercase tracking-widest mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-white text-xl font-light">Common procurement inquiries.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-lab-border/50 pt-6">
                <h4 className="text-base font-medium text-white mb-3">{faq.question}</h4>
                <p className="text-sm text-lab-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
