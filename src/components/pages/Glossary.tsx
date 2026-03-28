import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
export default function Glossary() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          RESOURCES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Triple Output DC Power Supply Glossary of Terms
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          A quick reference guide to the technical specifications and terminology used in the DC power supply industry.
        </p>
      </div>
      <div className="max-w-none text-lg">
        <div className="space-y-8">
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Programmable DC Power Supply</h3>
            <p className="text-sm text-lab-muted">
              A power supply that can be controlled remotely via digital interfaces (like USB, RS232, or LAN) using commands (such as SCPI). This allows for automated testing, voltage stepping, and data logging without manual knob adjustments.
            </p>
          </div>
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Multiple Output DC Power Supply</h3>
            <p className="text-sm text-lab-muted">
              A power supply unit that provides two or more independent DC outputs. A <strong>3 output dc power supply</strong> (triple output) is the most common configuration for bench work, typically offering two variable channels and one fixed/logic channel.
            </p>
          </div>
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Ripple and Noise (PARD)</h3>
            <p className="text-sm text-lab-muted">
              Periodic and Random Deviation (PARD). The residual AC voltage superimposed on the DC output. Measured in mVrms (root mean square) or mVp-p (peak-to-peak). Lower is better, especially for analog and RF circuits. Linear supplies typically offer &lt; 1mVrms.
            </p>
          </div>
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Load Regulation</h3>
            <p className="text-sm text-lab-muted">
              The ability of the power supply to maintain a constant output voltage (or current) despite changes in the load resistance. Expressed as a percentage (e.g., &lt; 0.01% + 2mV). A lower percentage indicates a more stable supply.
            </p>
          </div>
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Line Regulation</h3>
            <p className="text-sm text-lab-muted">
              The ability of the power supply to maintain a constant output voltage despite fluctuations in the input AC line voltage (e.g., from the wall outlet).
            </p>
          </div>
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Transient Response Time</h3>
            <p className="text-sm text-lab-muted">
              The time it takes for the output voltage to recover and settle within a specified tolerance band (e.g., 15mV) following a sudden, large change in load current (e.g., a 50% to 100% load step). Critical for testing digital circuits and IoT devices that wake up from sleep modes.
            </p>
          </div>
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">Galvanic Isolation</h3>
            <p className="text-sm text-lab-muted">
              The principle of isolating functional sections of electrical systems to prevent current flow; no direct conduction path is permitted. In power supplies, this means the output channels are floating and not tied to Earth Ground, preventing ground loops.
            </p>
          </div>
          <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-2 text-white">SCPI (Standard Commands for Programmable Instruments)</h3>
            <p className="text-sm text-lab-muted">
              An ASCII-based standard for syntax and commands to control programmable test and measurement devices. Used over interfaces like USB, LAN (LXI), and GPIB.
            </p>
          </div>
        </div>
        <div className="mt-12 p-8 border border-lab-accent/30 bg-lab-accent/5 rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply This Knowledge?</h3>
          <p className="text-lab-muted mb-8">
            Review the specifications of our premium linear power supplies and see the difference.
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
