import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
export default function ItechAlternative() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
            COMPARISON
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ITECH IT6300 Series Alternative: Triple Output DC Power Supply Comparison
          </h1>
          <p className="text-xl text-lab-muted leading-relaxed">
            The ITECH IT6300 series (like the IT6322) is well-known for its high-performance programmable triple output DC power supplies. However, for labs looking to maximize their budget without sacrificing 4-digit precision or SCPI automation, the eTM-DM series offers a highly competitive alternative.
          </p>
        </div>
        <div className="prose prose-invert max-w-none text-lg text-lab-muted">
          <p className="mb-8">
            When outfitting an electronics lab, the <strong>ITECH triple output dc power supply</strong> is often considered a premium choice. Models like the IT6322 offer excellent specifications, but they come with a premium price tag. Let's compare the core specifications of the ITECH IT6322 against the eTM-3030DM to see if the premium is justified for your specific application.
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-lab-border">
                  <th className="py-4 px-4 font-bold text-white w-1/3">Feature</th>
                  <th className="py-4 px-4 font-medium text-gray-400">ITECH IT6322 (Typical)</th>
                  <th className="py-4 px-4 font-medium text-lab-accent">eTM-3030DM (Alternative)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lab-border/50 text-sm">
                <tr className="hover:bg-lab-surface/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">CH1 & CH2 Output</td>
                  <td className="py-4 px-4">0-30V / 0-3A</td>
                  <td className="py-4 px-4 text-white font-bold">0-30V / 0-3A</td>
                </tr>
                <tr className="hover:bg-lab-surface/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">CH3 Output</td>
                  <td className="py-4 px-4">0-5V / 0-3A</td>
                  <td className="py-4 px-4 text-white font-bold">0-5V / 0-3A</td>
                </tr>
                <tr className="hover:bg-lab-surface/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">Display Resolution</td>
                  <td className="py-4 px-4">1mV / 1mA</td>
                  <td className="py-4 px-4 text-white font-bold">1mV / 1mA (4-Digit)</td>
                </tr>
                <tr className="hover:bg-lab-surface/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">Ripple & Noise</td>
                  <td className="py-4 px-4">&lt; 1mVrms</td>
                  <td className="py-4 px-4 text-white font-bold">&lt; 1mVrms</td>
                </tr>
                <tr className="hover:bg-lab-surface/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">Interfaces</td>
                  <td className="py-4 px-4">USB / RS232 / GPIB (Optional)</td>
                  <td className="py-4 px-4 text-white font-bold">USB / RS232 / RS485</td>
                </tr>
                <tr className="hover:bg-lab-surface/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">SCPI Support</td>
                  <td className="py-4 px-4"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></td>
                  <td className="py-4 px-4"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-lab-surface/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">Estimated Price</td>
                  <td className="py-4 px-4 text-red-400">~$1,200+</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">~$449</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Why Choose the eTM-DM Series?</h2>
          <ul className="space-y-4 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
              <span><strong>Identical Core Specs:</strong> For 95% of bench testing, the 30V/3A and 5V/3A channel configuration with 1mV/1mA resolution is exactly what engineers need. The eTM-DM matches this core requirement perfectly.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
              <span><strong>Cost-Effective Automation:</strong> Both units support SCPI commands via USB/RS232. If your goal is to build an automated test rack, the eTM-DM allows you to buy two or three units for the price of one ITECH, massively increasing your test throughput.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
              <span><strong>No Hidden Fees:</strong> Some premium brands charge extra for communication interfaces or higher resolution unlocks. The eTM-DM series comes fully unlocked out of the box.</span>
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">The Verdict</h2>
          <p>
            If your application requires highly specialized features, ultra-fast transient recovery times, or native GPIB integration, the ITECH IT6300 series is a phenomenal instrument. However, if you need a reliable, high-precision, programmable triple output DC power supply for standard R&D, education, or production testing, the <strong>eTM-DM series</strong> offers unbeatable value.
          </p>
          <div className="mt-12 p-8 bg-lab-surface border border-lab-border rounded-sm text-center">
            <h3 className="text-xl font-bold mb-4">Ready to explore the eTM-DM Series?</h3>
            <a
              href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-sm font-bold transition-colors"
            >
              View eTM-DM Series Specifications <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
