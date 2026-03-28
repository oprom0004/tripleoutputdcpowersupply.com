import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Layers } from 'lucide-react';
export default function SelectionGuide() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          SELECTION
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Triple Output DC Power Supply Selection
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          Don't let a cheap power supply ruin your expensive Device Under Test (DUT). Whether you are looking for a basic <strong>3 output dc power supply</strong> or an advanced <strong>multiple output dc power supply</strong>, learn the 4 critical specifications engineers must evaluate before purchasing a lab bench power supply.
        </p>
      </div>
      <div className="max-w-none text-lg">
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="border border-lab-border bg-lab-surface p-6 rounded-sm">
            <Activity className="w-8 h-8 text-lab-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">1. Ripple & Noise (Linear vs. Switching)</h3>
            <p className="text-sm text-lab-muted">
              For R&D labs, a <strong>Linear</strong> power supply is almost always required. Switching supplies introduce high-frequency noise that can corrupt RF, audio, and sensor measurements. Look for Ripple & Noise specs of <strong>&lt; 1mVrms / 3mVp-p</strong>.
            </p>
          </div>
          <div className="border border-lab-border bg-lab-surface p-6 rounded-sm">
            <Layers className="w-8 h-8 text-lab-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">2. Galvanic Isolation</h3>
            <p className="text-sm text-lab-muted">
              Ensure all three channels are <strong>fully galvanically isolated</strong>. Cheap supplies often share a common ground internally, which causes ground loops and prevents you from wiring channels in series or parallel.
            </p>
          </div>
          <div className="border border-lab-border bg-lab-surface p-6 rounded-sm">
            <ShieldCheck className="w-8 h-8 text-lab-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">3. Hardware OVP & OCP</h3>
            <p className="text-sm text-lab-muted">
              Software protection is too slow. You need <strong>hardware-level Over-Voltage Protection (OVP)</strong> and Over-Current Protection (OCP) that reacts in microseconds to cut power before your prototype board is fried.
            </p>
          </div>
          <div className="border border-lab-border bg-lab-surface p-6 rounded-sm">
            <ArrowRight className="w-8 h-8 text-lab-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">4. SCPI Programmability</h3>
            <p className="text-sm text-lab-muted">
              If you plan to build an Automated Test Equipment (ATE) rack, ensure the supply supports standard <strong>SCPI commands</strong> via USB, LAN (LXI), or GPIB for easy integration with Python or LabVIEW.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-12 mb-4">The "Sweet Spot" Specification</h2>
        <p className="text-lab-muted mb-6">
          For 90% of mixed-signal design and general electronics labs, the industry-standard "sweet spot" configuration is:
        </p>
        <ul className="list-disc pl-6 text-lab-muted mb-8 space-y-2">
          <li><strong>CH1:</strong> 0-30V / 0-3A (Analog / High Power)</li>
          <li><strong>CH2:</strong> 0-30V / 0-3A (Analog / High Power)</li>
          <li><strong>CH3:</strong> 0-5V / 0-3A (Dedicated Digital Logic)</li>
        </ul>
        <p className="text-lab-muted mb-8">
          This configuration allows you to generate up to 60V (in series), 6A (in parallel), or a perfect +/- 15V bipolar supply with a 3.3V/5V logic rail simultaneously.
        </p>
        <div className="mt-12 p-8 border border-lab-accent/30 bg-lab-accent/5 rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Find the Perfect Power Supply for Your Lab</h3>
          <p className="text-lab-muted mb-8">
            Browse our selection of premium, linear-grade programmable triple output DC power supplies.
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
