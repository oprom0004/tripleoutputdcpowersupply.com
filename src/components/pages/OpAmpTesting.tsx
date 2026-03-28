import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
export default function OpAmpTesting() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          APPLICATION NOTE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Powering Operational Amplifiers with a Triple Output DC Power Supply
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          Testing high-precision op-amps requires a clean, symmetric bipolar power supply (+Vcc and -Vee). Learn how a galvanically isolated triple output DC power supply simplifies mixed-signal design.
        </p>
      </div>
      <div className="max-w-none text-lg">
        <h2 className="text-2xl font-bold mt-12 mb-4">The Challenge of Op-Amp Power Supply Design</h2>
        <p className="text-lab-muted mb-6">
          Operational amplifiers (op-amps) are the backbone of analog signal processing. To achieve maximum dynamic range and avoid clipping, most professional-grade op-amps require a <strong>symmetric bipolar power supply</strong> (e.g., +15V and -15V).
        </p>
        <p className="text-lab-muted mb-6">
          Using two separate single-channel power supplies is risky. If you adjust the positive rail but forget to adjust the negative rail identically, you introduce an offset voltage that can damage sensitive components or skew your sensor readings.
        </p>
        <div className="bg-lab-surface border border-lab-border p-8 rounded-sm my-8">
          <h3 className="text-xl font-bold mb-4">The Solution: Internal Series Tracking</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="text-lab-muted"><strong>Single-Dial Control:</strong> In series tracking mode, CH1 becomes the master. Adjusting CH1 automatically adjusts CH2 to the exact same voltage, ensuring perfect symmetry.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="text-lab-muted"><strong>True Ground Reference:</strong> By connecting the positive terminal of CH2 to the negative terminal of CH1 (internally or externally), you create a true 0V common ground (COM) tap.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="text-lab-muted"><strong>Ultra-Low Ripple:</strong> Linear triple output supplies provide &lt; 1mVrms ripple, essential for high-gain op-amp circuits where power supply noise is amplified.</span>
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold mt-12 mb-4">Mixed-Signal Design: The Role of CH3</h2>
        <p className="text-lab-muted mb-6">
          Modern PCBs rarely contain only analog components. An op-amp circuit is often paired with an ADC (Analog-to-Digital Converter) and a Microcontroller (MCU) or DSP.
        </p>
        <p className="text-lab-muted mb-8">
          This is where the <strong>Dedicated Digital Logic Channel (CH3)</strong> shines. While CH1 and CH2 provide the +/- 15V for the analog front-end, CH3 provides a rock-solid, isolated 3.3V or 5.0V for the digital logic. Because the channels are <strong>galvanically isolated</strong>, digital switching noise from the MCU will not couple into your sensitive analog ground plane.
        </p>
        <div className="mt-12 p-8 border border-lab-accent/30 bg-lab-accent/5 rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Equip Your Lab for Mixed-Signal Testing</h3>
          <p className="text-lab-muted mb-8">
            Stop fighting ground loops and mismatched voltage rails. Upgrade to a professional programmable triple output DC power supply.
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
