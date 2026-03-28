import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
export default function OvpOcp() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          TUTORIAL
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Setting OVP and OCP on a Triple Output DC Power Supply
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          Your Device Under Test (DUT) is expensive. Learn the difference between current limiting (CC mode) and hardware Over-Voltage/Over-Current Protection (OVP/OCP).
        </p>
      </div>
      <div className="max-w-none text-lg">
        <h2 className="text-2xl font-bold mt-12 mb-4">Constant Current (CC) vs. OCP</h2>
        <p className="text-lab-muted mb-6">
          Many engineers confuse setting the standard Current Limit with OCP.
        </p>
        <ul className="space-y-4 text-lab-muted mb-8">
          <li><strong>Current Limit (CC Mode):</strong> If your circuit draws more current than the limit you set, the power supply drops the voltage to maintain that exact current. The power stays ON. This is useful for charging batteries or driving LEDs.</li>
          <li><strong>Over-Current Protection (OCP):</strong> If OCP is triggered, the power supply <strong>completely shuts off the output</strong> and sounds an alarm. This is a hard fault protection mechanism designed to prevent fires or catastrophic board failure.</li>
        </ul>
        <div className="bg-lab-surface border border-lab-border p-8 rounded-sm my-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-lab-accent" /> Best Practices for Setting Protection</h3>
          <ol className="list-decimal pl-6 space-y-4 text-lab-muted">
            <li>
              <strong className="text-white">Determine Normal Operating Limits:</strong> Let's say your prototype board normally runs at 5.0V and draws a maximum of 1.2A during heavy processing.
            </li>
            <li>
              <strong className="text-white">Set the OVP (Over-Voltage Protection):</strong> Set OVP about 10-15% above your operating voltage. For a 5.0V circuit, set OVP to <strong>5.5V</strong>. If someone accidentally bumps the voltage knob, the supply will shut off before frying your 5V logic chips.
            </li>
            <li>
              <strong className="text-white">Set the OCP (Over-Current Protection):</strong> Set OCP about 20% above your maximum expected current. For a 1.2A max draw, set OCP to <strong>1.5A</strong>. If a short circuit occurs, the supply shuts down instantly.
            </li>
          </ol>
        </div>
        <h2 className="text-2xl font-bold mt-12 mb-4">Hardware vs. Software Protection</h2>
        <p className="text-lab-muted mb-6">
          Cheap power supplies rely on the main microprocessor to poll the voltage/current and trigger protection in software. This can take tens of milliseconds—plenty of time to destroy a sensitive IC. Premium lab supplies use dedicated analog hardware comparators for OVP/OCP, reacting in microseconds.
        </p>
        <div className="mt-12 p-8 border border-lab-border bg-lab-surface rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4">Protect Your Engineering Investment</h3>
          <p className="text-lab-muted mb-8">
            Don't risk a $5,000 prototype board on a cheap power supply. Our models feature microsecond hardware OVP/OCP.
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
