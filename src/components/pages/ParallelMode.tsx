import React from 'react';
import { ArrowRight, Settings2, Zap, AlertTriangle, HelpCircle } from 'lucide-react';
export default function ParallelMode() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          TUTORIAL
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Configuring Parallel Tracking Mode on a Triple Output DC Power Supply
        </h1>
        <p className="text-xl text-lab-muted leading-relaxed">
          Need more than 3 Amps for a high-power load? Learn how to safely configure your programmable triple output DC power supply in Parallel Tracking Mode to double your current capacity.
        </p>
      </div>
      <div className="max-w-none text-lg space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Why Use Parallel Tracking Mode?</h2>
          <p className="text-lab-muted mb-4">
            Standard bench power supplies typically max out at 3A per channel. This is perfectly adequate for most logic boards, microcontrollers, and sensor testing. But what happens when you need to test a high-power DC motor, a thermoelectric cooler (Peltier device), a high-brightness LED array, or an automotive actuator that draws 5A or 6A?
          </p>
          <p className="text-lab-muted">
            Instead of purchasing a massive, expensive, single-channel high-current power supply that takes up half your bench, you can utilize the built-in <strong>Parallel Tracking Mode</strong> of a triple output DC power supply. This mode allows you to combine the current capabilities of Channel 1 and Channel 2, effectively turning a 30V/3A supply into a 30V/6A powerhouse.
          </p>
        </section>
        <section className="bg-lab-surface border border-lab-border p-8 rounded-sm">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <Settings2 className="w-6 h-6 text-lab-accent" />
            Step 1: Enable Parallel Tracking via the Front Panel
          </h2>
          <p className="text-lab-muted mb-4">
            Before connecting any wires to your Device Under Test (DUT), you must configure the power supply internally. Locate the tracking control buttons on your front panel (often labeled INDEP, SER, PAR) and press the <strong>PARALLEL</strong> button.
          </p>
          <div className="p-4 bg-lab-bg border border-lab-border rounded-sm mb-4">
            <strong className="text-white block mb-2">What happens internally?</strong>
            <p className="text-sm text-lab-muted">
              When Parallel mode is engaged, the power supply designates CH1 as the "Master" and CH2 as the "Slave." The internal circuitry locks the voltage of CH2 to exactly match the voltage of CH1. This precision matching is critical; if you manually wired two independent power supplies in parallel without exact voltage matching, the supply with the slightly higher voltage would attempt to back-feed current into the lower voltage supply, potentially causing damage.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Step 2: Wire the Output Terminals</h2>
          <p className="text-lab-muted mb-6">
            While the power supply handles the voltage matching internally, you must still physically wire the channels together externally to combine the current paths.
          </p>
          <div className="bg-[#0a0c10] border border-lab-border p-6 rounded-sm font-mono text-sm mb-6 shadow-lg">
            <div className="text-lab-accent mb-4 border-b border-lab-border/50 pb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> WIRING DIAGRAM (PARALLEL SETUP)
            </div>
            <ul className="space-y-6 text-lab-muted font-sans text-base">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 mt-1.5 rounded-full bg-red-500 shrink-0" />
                <div>
                  <strong className="text-white">The Positive Rail (+):</strong>
                  <br/>Use a thick gauge wire (e.g., 14 AWG or thicker, depending on current) to connect the CH1 (+) red terminal to the CH2 (+) red terminal. Connect your load's positive lead to this junction.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 mt-1.5 rounded-full bg-black border border-gray-600 shrink-0" />
                <div>
                  <strong className="text-white">The Negative Rail (-):</strong>
                  <br/>Use a thick gauge wire to connect the CH1 (-) black terminal to the CH2 (-) black terminal. Connect your load's negative lead to this junction.
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-sm">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
            <p className="text-sm text-amber-200/80">
              <strong>Wire Gauge Matters:</strong> When drawing 6 Amps, thin test leads will experience significant voltage drop and may overheat. Always use appropriately rated, thick gauge cables for high-current parallel setups.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Step 3: Adjust and Monitor</h2>
          <p className="text-lab-muted mb-4">
            Once wired, turn the voltage dial for CH1 (the Master). You will notice that the voltage display for CH2 automatically follows CH1 perfectly.
          </p>
          <p className="text-lab-muted">
            When you turn the output ON, the total current delivered to your load will be the <strong>sum</strong> of the current displayed on CH1 and CH2. For example, if your load requires 5.0A, you will typically see CH1 displaying ~2.5A and CH2 displaying ~2.5A, as they share the load equally.
          </p>
        </section>
        <section className="border-t border-lab-border pt-8 mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <HelpCircle className="w-6 h-6 text-lab-accent" />
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Can I parallel CH3 with CH1 and CH2?</h3>
              <p className="text-lab-muted">No. On almost all triple output DC power supplies, the parallel tracking feature is exclusively designed for CH1 and CH2. CH3 is a dedicated, isolated channel (usually 5V/3A) and cannot be internally synced or safely paralleled with the main channels.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">How do I set the current limit in Parallel Mode?</h3>
              <p className="text-lab-muted">You set the current limit using the Master channel (CH1). If you want a total system current limit of 4A, you typically set the CH1 current limit to 2A (since the load is shared equally). Always consult your specific instrument's manual, as UI implementations can vary slightly.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Is it safe to leave the external parallel wires connected when switching back to Independent mode?</h3>
              <p className="text-lab-muted"><strong>Absolutely not.</strong> You must remove the external bridging wires before switching the power supply back to Independent (INDEP) mode. If you leave them connected and set CH1 to 12V and CH2 to 5V, CH1 will aggressively back-feed into CH2, potentially destroying the power supply's internal circuitry.</p>
            </div>
          </div>
        </section>
        <div className="mt-12 p-8 border border-lab-accent/30 bg-lab-accent/5 rounded-sm text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Need a High-Power Bench Supply?</h3>
          <p className="text-lab-muted mb-8">
            Our triple output supplies offer seamless parallel tracking, giving you up to 6A of ultra-clean linear power when you need it, without sacrificing bench space.
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
