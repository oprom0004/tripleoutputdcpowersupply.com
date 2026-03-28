import React from 'react';
import { ArrowRight, Settings2, Zap } from 'lucide-react';
export default function SeriesTracking() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          TUTORIAL
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          How to Use Series Tracking on a Triple Output DC Power Supply
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          A step-by-step tutorial on configuring your triple output DC power supply for symmetric dual-rail (+Vcc / -Vee) operation using internal series tracking.
        </p>
      </div>
      <div className="max-w-none text-lg">
        <p className="text-lab-muted mb-8">
          When testing operational amplifiers, audio amplifiers, or data acquisition systems, you frequently need a bipolar power supply (e.g., +12V, Ground, -12V). While you could wire two independent power supplies together, a <strong>Triple Output DC Power Supply</strong> with an internal tracking feature makes this safer, faster, and more precise.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
          <Settings2 className="w-6 h-6 text-lab-accent" />
          Step 1: Enable Series Tracking Mode
        </h2>
        <p className="text-lab-muted mb-6">
          Locate the tracking control buttons on your front panel (often labeled <code>INDEP</code>, <code>SERIES</code>, <code>PARALLEL</code>). Press the <strong>SERIES</strong> button.
        </p>
        <p className="text-lab-muted mb-6">
          <em>What happens internally:</em> The power supply internally connects the positive terminal of CH2 to the negative terminal of CH1. CH1 is now designated as the <strong>Master</strong>, and CH2 is the <strong>Slave</strong>.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
          <Zap className="w-6 h-6 text-lab-accent" />
          Step 2: Wire the Output Terminals
        </h2>
        <div className="bg-lab-surface border border-lab-border p-6 rounded-sm font-mono text-sm mb-6">
          <div className="text-lab-accent mb-4">WIRING DIAGRAM (BIPOLAR SETUP)</div>
          <ul className="space-y-4 text-lab-muted">
            <li><strong className="text-emerald-400">CH1 (+) Terminal:</strong> Connect to your circuit's +Vcc (e.g., +15V)</li>
            <li><strong className="text-white">CH1 (-) or CH2 (+) Terminal:</strong> Connect to your circuit's Ground (0V / COM). <em>Note: In series mode, these two terminals are internally shorted.</em></li>
            <li><strong className="text-amber-400">CH2 (-) Terminal:</strong> Connect to your circuit's -Vee (e.g., -15V)</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold mt-12 mb-6">Step 3: Adjust the Master Voltage</h2>
        <p className="text-lab-muted mb-6">
          Now, simply turn the voltage dial for CH1 (the Master). You will see the voltage on CH2 automatically mirror CH1. If you set CH1 to 15.00V, CH2 will output exactly 15.00V relative to the center tap, giving you a perfect +15V / -15V split rail supply.
        </p>
        <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-sm my-8">
          <h3 className="text-lg font-bold text-amber-500 mb-2">Warning: Current Limits</h3>
          <p className="text-lab-muted text-sm">
            In series tracking mode, the maximum current is limited to the rating of a single channel (e.g., 3A). The voltage is doubled across the outer terminals (up to 60V), but the current capacity remains 3A. Always set your Over-Current Protection (OCP) appropriately on the Master channel.
          </p>
        </div>
        <div className="mt-12 p-8 border border-lab-border bg-lab-surface rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Reliable Tracking Power Supply?</h3>
          <p className="text-lab-muted mb-8">
            Our programmable triple output models feature microsecond-level tracking synchronization and ultra-low noise linear regulation.
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
