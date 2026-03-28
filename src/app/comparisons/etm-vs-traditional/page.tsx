import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle, Zap, Shield, Cpu } from 'lucide-react';
export const metadata: Metadata = {
    title: 'Modern vs Traditional Triple Output Power Supply Brands | eTM vs Legacy',
    description: 'Compare modern programmable triple output DC power supplies against traditional legacy brands. See why engineers are switching from old-school analog-only units to modern, SCPI-ready eTM series supplies.',
};
export default function EtmVsTraditional() {
    return (
        <div className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
                        COMPARISON
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Modern vs Traditional Brands: Which Triple Output DC Power Supply is Right for Your Lab?
                    </h1>
                    <p className="text-xl text-lab-muted leading-relaxed">
                        The power supply market is divided between legacy analog-era brands and a new class of modern, programmable, SCPI-ready instruments. Understanding the difference is critical for any R&amp;D lab, university, or production floor making a purchasing decision today.
                    </p>
                </div>
                <div className="prose prose-invert max-w-none">
                    <p>
                        For decades, the triple output DC bench power supply market was dominated by a handful of established Western brands — Agilent (now Keysight), Sorensen, and Kepco. These were premium instruments built for the defense and aerospace industries, with price tags to match. Meanwhile, the broader engineering market was left choosing between expensive legacy options or low-quality imports with no programmability.
                    </p>
                    <p>
                        That era is over. A new generation of precision linear power supplies — exemplified by the <strong>eTM series</strong> — has closed the performance gap while dramatically reducing cost. The question is no longer <em>"can we afford a good triple output supply?"</em> but <em>"which modern platform best fits our workflow?"</em>
                    </p>
                    {/* Spec Comparison Table */}
                    <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Head-to-Head: Modern vs Legacy Architecture</h2>
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left border-collapse font-mono text-sm">
                            <thead>
                                <tr className="border-b-2 border-lab-border text-lab-muted">
                                    <th className="py-4 px-4 font-medium">Feature</th>
                                    <th className="py-4 px-4 font-medium text-lab-muted">Traditional Legacy Brands</th>
                                    <th className="py-4 px-4 font-medium text-lab-accent">Modern eTM Series</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-lab-border">
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">Topology</td>
                                    <td className="py-4 px-4 text-lab-muted">Linear</td>
                                    <td className="py-4 px-4 text-lab-muted">Linear</td>
                                </tr>
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">Remote Programming</td>
                                    <td className="py-4 px-4 text-lab-muted">GPIB (Legacy IEEE-488)</td>
                                    <td className="py-4 px-4 text-lab-muted">USB, RS-232/485, LAN (LXI)</td>
                                </tr>
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">SCPI Compliance</td>
                                    <td className="py-4 px-4 text-lab-muted">Partial / proprietary variants</td>
                                    <td className="py-4 px-4 text-lab-muted">Full standard SCPI</td>
                                </tr>
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">Current Readback Resolution</td>
                                    <td className="py-4 px-4 text-lab-muted">1 mA</td>
                                    <td className="py-4 px-4 text-lab-muted">0.1 mA</td>
                                </tr>
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">OVP / OCP Protection</td>
                                    <td className="py-4 px-4 text-lab-muted">Analog circuit-level only</td>
                                    <td className="py-4 px-4 text-lab-muted">Programmable hardware OVP/OCP</td>
                                </tr>
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">Tracking Modes</td>
                                    <td className="py-4 px-4 text-lab-muted">Manual external wiring</td>
                                    <td className="py-4 px-4 text-lab-muted">Internal auto series/parallel</td>
                                </tr>
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">Python / LabVIEW Ready</td>
                                    <td className="py-4 px-4 text-lab-muted">Requires GPIB adapter (~$200+)</td>
                                    <td className="py-4 px-4 text-lab-muted">Native USB, plug-and-play</td>
                                </tr>
                                <tr className="hover:bg-lab-surface/50 transition-colors">
                                    <td className="py-4 px-4 text-white">Typical Price (new)</td>
                                    <td className="py-4 px-4 text-lab-muted">$1,500 – $4,000+</td>
                                    <td className="py-4 px-4 text-lab-muted text-emerald-400">$350 – $700</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Traditional strengths */}
                    <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Where Traditional Brands Still Excel</h2>
                    <ul className="space-y-4 mb-8 list-none pl-0">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                            <span><strong>Ultra-premium noise performance:</strong> Legacy linear supplies from Keysight and Sorensen can achieve ripple &amp; noise below 0.1 mVrms — surpassing the typical &lt;1 mVrms of modern alternatives. This matters in high-frequency RF circuitry or quantum research.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                            <span><strong>GPIB ecosystem:</strong> Existing automated test equipment (ATE) racks built around GPIB still work flawlessly with legacy units. No adapter, no configuration — just plug in and run the existing test scripts.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                            <span><strong>Certified metrology-grade instruments:</strong> Some legacy supplies carry NIST-traceable calibration certificates, which may be required for military or medical device testing workflows.</span>
                        </li>
                    </ul>
                    {/* Modern brand advantages */}
                    <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Where the eTM Modern Series Wins</h2>
                    <ul className="space-y-4 mb-8 list-none pl-0">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
                            <span><strong>Modern connectivity without adapters:</strong> USB is standard on every PC and workstation today. The eTM series connects directly via USB and is recognized as a standard instrument — no GPIB-to-USB converter needed, saving hundreds of dollars and eliminating a compatibility layer.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
                            <span><strong>Internal auto-tracking:</strong> Traditional brands require you to manually jumper external binding posts to create series or parallel configurations. The eTM series handles this internally via a front-panel mode switch, drastically reducing wiring errors and setup time.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
                            <span><strong>Programmable OVP/OCP per channel:</strong> Each channel's over-voltage and over-current limit can be set precisely via SCPI command. This is critical for protecting sensitive DUTs during automated testing — a feature rarely available on older analog-only instruments.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
                            <span><strong>0.1 mA current resolution:</strong> With modern IoT devices consuming microamps to milliamps, the 0.1 mA readback resolution of the eTM series is genuinely useful for power profiling — compared to 1 mA on most legacy instruments.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-lab-accent shrink-0 mt-1" />
                            <span><strong>Price:</strong> For most R&amp;D labs, universities, and production lines, the eTM series delivers 95% of the functionality of a legacy instrument at 20–30% of the price. The budget difference can fund another instrument entirely.</span>
                        </li>
                    </ul>
                    {/* Who should choose what */}
                    <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">Which Should You Choose?</h2>
                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="p-6 border border-lab-border bg-lab-surface rounded-sm">
                            <h3 className="font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-4 h-4 text-lab-muted" /> Choose a Legacy Brand if…</h3>
                            <ul className="space-y-2 text-sm text-lab-muted list-disc list-inside">
                                <li>You need sub-0.1 mVrms noise for RF or quantum work</li>
                                <li>Your ATE rack is built around GPIB and cannot be changed</li>
                                <li>You require NIST-traceable calibration documentation</li>
                                <li>Budget is not a primary constraint</li>
                            </ul>
                        </div>
                        <div className="p-6 border border-lab-accent/30 bg-lab-accent/5 rounded-sm">
                            <h3 className="font-bold text-white mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-lab-accent" /> Choose eTM Modern Series if…</h3>
                            <ul className="space-y-2 text-sm text-lab-muted list-disc list-inside">
                                <li>You want USB/Python/LabVIEW control without adapters</li>
                                <li>You need internal auto-tracking for bipolar supplies</li>
                                <li>You're profiling IoT or low-power device consumption</li>
                                <li>You need 3A or more per channel, not just 1A</li>
                                <li>Budget matters — and it always does</li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-lab-border pb-2">The Verdict</h2>
                    <p>
                        For the vast majority of electronics R&amp;D labs, university bench setups, mixed-signal engineers, and production test floors, the <strong>eTM series offers superior value</strong>. It closes the functionality gap with legacy instruments in every area that matters for modern design work — programmability, precision, protection, and connectivity — while costing a fraction of the price.
                    </p>
                    <p>
                        Traditional brands remain the choice for ultra-high-precision scientific or aerospace applications. But for everyone else, the modern programmable triple output supply has arrived.
                    </p>
                    {/* CTA */}
                    <div className="mt-12 p-8 bg-lab-surface border border-lab-border rounded-sm text-center">
                        <h3 className="text-xl font-bold mb-2">Ready to make the switch?</h3>
                        <p className="text-lab-muted text-sm mb-6">See the full eTM series lineup with current stock and real pricing.</p>
                        <a
                            href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-sm font-bold transition-colors"
                        >
                            View eTM Series Specifications <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
