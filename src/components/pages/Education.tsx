import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
export default function Education() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          APPLICATION NOTE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Triple Output DC Power Supply: The Standard for Educational Labs
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          Why engineering universities worldwide standardize on triple output DC power supplies for their undergraduate teaching laboratories.
        </p>
      </div>
      <div className="max-w-none text-lg">
        <h2 className="text-2xl font-bold mt-12 mb-4">Versatility for the Curriculum</h2>
        <p className="text-lab-muted mb-6">
          University electronics labs must cover a wide range of topics—from basic resistor circuits in Physics 101, to operational amplifiers in Analog Electronics, to microcontrollers in Digital Systems.
        </p>
        <p className="text-lab-muted mb-6">
          A triple output power supply is the only instrument versatile enough to handle the entire curriculum. Students can use a single channel for basic Ohm's law labs, use series tracking for bipolar op-amp labs, and use the 5V channel for Arduino/Raspberry Pi digital projects.
        </p>
        <div className="bg-lab-surface border border-lab-border p-8 rounded-sm my-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-lab-accent" /> Protecting Students and Equipment</h3>
          <p className="text-lab-muted mb-4">Students make mistakes. Short circuits and reversed polarities are daily occurrences in a teaching lab. Premium triple output supplies offer critical protections:</p>
          <ul className="space-y-4 text-lab-muted">
            <li><strong>Hardware OCP (Over-Current Protection):</strong> Instantly cuts power if a student shorts the breadboard, preventing melted wires and blown components.</li>
            <li><strong>OVP (Over-Voltage Protection):</strong> Prevents a student from accidentally applying 30V to a delicate 5V logic IC.</li>
            <li><strong>Galvanic Isolation:</strong> Prevents dangerous ground loops if students incorrectly wire multiple instruments (like oscilloscopes and function generators) together.</li>
          </ul>
        </div>
        <div className="mt-12 p-8 border border-lab-accent/30 bg-lab-accent/5 rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Outfitting Your Teaching Lab?</h3>
          <p className="text-lab-muted mb-8">
            Invest in rugged, versatile, and safe power supplies designed to survive years of student use.
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
