import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
export default function RigolDP832Alternative() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
            COMPARISON
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rigol DP832 vs. Modern Triple Output DC Power Supplies
          </h1>
          <p className="text-xl text-lab-muted leading-relaxed">
            The Rigol DP832 is one of the most popular programmable DC power supplies on the market. But is it the best value for your bench? Let's compare it with modern alternatives.
          </p>
        </div>
        <div className="prose prose-invert  max-w-none">
          <p>
            When engineers look for a reliable, programmable triple output DC power supply, the <strong>Rigol DP832</strong> is often the first model that comes to mind. It's a solid machine with a great reputation. However, for many labs, educational institutions, and hobbyists, the eTM-DM series offers a compelling alternative that delivers comparable precision at a more accessible price point.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Head-to-Head Specification Comparison</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse font-mono text-sm">
              <thead>
                <tr className="border-b-2 border-lab-border text-lab-muted">
                  <th className="py-4 px-4 font-medium">Feature</th>
                  <th className="py-4 px-4 font-medium text-white">Rigol DP832</th>
                  <th className="py-4 px-4 font-medium text-lab-accent">eTM-3030DM (Alternative)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lab-border">
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Channels</td>
                  <td className="py-4 px-4 text-lab-muted">3 (Isolated)</td>
                  <td className="py-4 px-4 text-lab-muted">3 (Isolated)</td>
                </tr>
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Output Rating (CH1/CH2)</td>
                  <td className="py-4 px-4 text-lab-muted">30V / 3A</td>
                  <td className="py-4 px-4 text-lab-muted">30V / 3A</td>
                </tr>
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Output Rating (CH3)</td>
                  <td className="py-4 px-4 text-lab-muted">5V / 3A</td>
                  <td className="py-4 px-4 text-lab-muted">5V / 3A</td>
                </tr>
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Ripple & Noise</td>
                  <td className="py-4 px-4 text-lab-muted">&lt; 350 μVrms</td>
                  <td className="py-4 px-4 text-lab-muted">&lt; 1 mVrms</td>
                </tr>
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Programming Resolution</td>
                  <td className="py-4 px-4 text-lab-muted">1mV / 1mA</td>
                  <td className="py-4 px-4 text-lab-muted">1mV / 0.1mA</td>
                </tr>
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Display</td>
                  <td className="py-4 px-4 text-lab-muted">3.5" TFT</td>
                  <td className="py-4 px-4 text-lab-muted">High-Contrast LED/LCD</td>
                </tr>
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Interfaces</td>
                  <td className="py-4 px-4 text-lab-muted">USB, LAN, RS232</td>
                  <td className="py-4 px-4 text-lab-muted">USB, RS232/485</td>
                </tr>
                <tr className="hover:bg-lab-surface/50 transition-colors">
                  <td className="py-4 px-4 text-white">Price Range</td>
                  <td className="py-4 px-4 text-lab-muted">Premium ($450+)</td>
                  <td className="py-4 px-4 text-lab-accent font-bold">Value-Optimized</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Where the Rigol DP832 Excels</h2>
          <ul className="space-y-4 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
              <span><strong>Graphical Interface:</strong> The DP832 features a large TFT screen that can display voltage/current curves over time directly on the unit.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
              <span><strong>Ultra-low Noise:</strong> At &lt; 350 μVrms, it is exceptionally quiet, making it ideal for the most sensitive RF and audio applications.</span>
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Why Choose the eTM-DM Series?</h2>
          <ul className="space-y-4 mb-8 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
              <span><strong>Cost-Effectiveness:</strong> You get the same 30V/3A + 5V/3A triple-output configuration and SCPI programmability at a fraction of the cost. Perfect for outfitting multiple benches in a university lab or production line.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
              <span><strong>Readback Resolution:</strong> The eTM-DM series offers 0.1mA current readback resolution, which is excellent for profiling low-power IoT devices.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
              <span><strong>Robust Simplicity:</strong> Without the complex graphical OS, the eTM series boots instantly and provides immediate, tactile control via dedicated knobs—preferred by many engineers for quick bench work.</span>
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">The Verdict</h2>
          <p>
            If your budget allows and you absolutely need on-device graphical charting or sub-millivolt noise floors, the Rigol DP832 is a fantastic instrument. However, if you need a reliable, programmable, linear triple-output power supply for daily bench testing, IoT development, or educational labs, the <strong>eTM-DM series</strong> provides unmatched value without compromising on core performance.
          </p>
          <div className="mt-12 p-8 bg-lab-surface border border-lab-border rounded-sm text-center">
            <h3 className="text-xl font-bold mb-4">Ready to explore the eTM-DM Series?</h3>
            <a
              href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-sm font-bold transition-colors"
            >
              View Models & Pricing <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
