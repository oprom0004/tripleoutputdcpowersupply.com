import React from 'react';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
export default function HowToChoose() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 border-b border-lab-border bg-lab-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
            <FileText className="w-4 h-4" /> HOW TO CHOOSE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            How to Choose a Triple Output DC Power Supply
          </h1>
          <p className="text-lg text-lab-muted leading-relaxed">
            A definitive overview to selecting the right programmable bench power supply for your R&D lab, avoiding common pitfalls, and getting the best value for your budget.
          </p>
        </div>
      </section>
      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-lab-muted">
            <p>
              Whether you are testing a complex mixed-signal PCB, characterizing an operational amplifier, or building an Automated Test Equipment (ATE) rack, a triple output DC power supply is the beating heart of your bench. But with prices ranging from $200 to over $3,000, how do you know what you actually need?
            </p>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Linear vs. Switching: The Noise Factor</h2>
            <p>
              The first decision is the underlying topology. <strong>Switching power supplies (SMPS)</strong> are lightweight, highly efficient, and can deliver massive current. However, they inherently generate high-frequency switching noise.
            </p>
            <p>
              <strong>Linear power supplies</strong>, on the other hand, use heavy transformers and linear regulators. They are less efficient and heavier, but they provide <em>ultra-clean</em> power with extremely low ripple and noise (often &lt; 1mVrms).
            </p>
            <div className="bg-lab-surface border-l-4 border-lab-accent p-6 my-8 rounded-r-md">
              <h4 className="text-white font-bold mt-0 mb-2">The Verdict:</h4>
              <p className="mb-0 text-sm">
                If you are doing RF design, audio engineering, or precision analog sensor testing, you <strong>must</strong> use a linear supply. If you are just powering motors, LEDs, or digital logic, a high-quality switching supply is perfectly fine.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Resolution and Display Precision</h2>
            <p>
              A common mistake is buying a power supply with a 3-digit display (e.g., 5.00V / 1.20A). In modern electronics, especially IoT devices with deep sleep modes, you often need to measure quiescent currents in the milliamp or microamp range.
            </p>
            <ul className="space-y-4 my-8">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">3-Digit Displays:</strong>
                  <span className="text-sm">Resolution is typically 10mV / 10mA. Not precise enough for modern low-power electronics.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">4-Digit Displays:</strong>
                  <span className="text-sm">Resolution drops to 1mV / 1mA (or better). This is the standard you should aim for. The <strong>eTM-DM series</strong> features 4-digit precision across all models.</span>
                </div>
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Galvanic Isolation & Tracking Modes</h2>
            <p>
              A "true" triple output supply isn't just three independent power supplies stuffed into one box. The channels must be <strong>galvanically isolated</strong> (floating), meaning they don't share a common ground internally unless you explicitly wire them that way.
            </p>
            <p>
              Furthermore, look for <strong>Internal Tracking Modes</strong>. This allows you to internally connect CH1 and CH2 in series (to double the voltage or create a bipolar +/- supply) or in parallel (to double the current) without messy external jumper wires.
            </p>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. PC Connectivity (SCPI / Automation)</h2>
            <p>
              If you ever plan to automate your testing using Python, LabVIEW, or MATLAB, you need a programmable supply. Look for standard interfaces:
            </p>
            <ul>
              <li><strong>USB:</strong> Standard for single-bench setups.</li>
              <li><strong>RS232/RS485:</strong> Excellent for industrial environments and long cable runs.</li>
              <li><strong>LAN (LXI):</strong> Best for distributed ATE racks.</li>
            </ul>
            <hr className="border-lab-border my-12" />
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The Smart Choice: eTM-DM Series</h2>
            <p className="text-center mb-8">
              Historically, getting a 4-digit, programmable, triple output supply meant spending over $1,500 on legacy brands like Keysight or Rigol. The <strong>eTM-DM Series</strong> disrupts this by offering lab-grade precision starting at just $449.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#0a0c10] border border-lab-border p-6 rounded-sm">
                <h4 className="text-white font-bold mb-4 border-b border-lab-border pb-2">Legacy Brands (e.g., Rigol DP832)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-red-400">✗ High MSRP ($500 - $1000+)</li>
                  <li className="text-red-400">✗ Often charge extra to "unlock" high resolution</li>
                  <li className="text-red-400">✗ Bulky, outdated interfaces</li>
                  <li className="text-emerald-500">✓ Good brand recognition</li>
                </ul>
              </div>
              <div className="bg-lab-surface border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)] p-6 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded-bl-sm">BEST VALUE</div>
                <h4 className="text-white font-bold mb-4 border-b border-lab-border pb-2">eTM-DM Series</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-emerald-500">✓ Unbeatable Price (Starting at $449)</li>
                  <li className="text-emerald-500">✓ 4-Digit Precision included standard</li>
                  <li className="text-emerald-500">✓ CV/CC Auto Conversion</li>
                  <li className="text-emerald-500">✓ RS232/485/USB Ready</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] no-underline"
              >
                Shop eTM-DM Series Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/top-models"
                className="bg-lab-surface border border-lab-border hover:border-lab-muted text-white px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 no-underline"
              >
                View Top Models
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 border-t border-lab-border bg-lab-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-lab-accent" />
            <h2 className="text-3xl font-bold text-white">How to Choose FAQ</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
              <h3 className="text-lg font-bold text-white mb-2">What is the difference between a linear and switching power supply?</h3>
              <p className="text-lab-muted text-sm leading-relaxed">
                Linear power supplies provide ultra-clean power with very low noise, ideal for sensitive analog circuits. Switching power supplies are more efficient, lighter, and can deliver higher current, but generate more high-frequency noise.
              </p>
            </div>
            <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
              <h3 className="text-lg font-bold text-white mb-2">Why do I need a 4-digit display on my power supply?</h3>
              <p className="text-lab-muted text-sm leading-relaxed">
                A 4-digit display provides 1mV/1mA resolution, which is essential for accurately measuring the low quiescent currents of modern electronics, such as IoT devices in deep sleep modes.
              </p>
            </div>
            <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
              <h3 className="text-lg font-bold text-white mb-2">What does galvanic isolation mean in a power supply?</h3>
              <p className="text-lab-muted text-sm leading-relaxed">
                Galvanic isolation means the output channels are electrically separated from each other and from earth ground. This allows you to connect channels in series or parallel without creating short circuits.
              </p>
            </div>
            <div className="bg-lab-surface border border-lab-border p-6 rounded-sm">
              <h3 className="text-lg font-bold text-white mb-2">Are programmable power supplies worth the extra cost?</h3>
              <p className="text-lab-muted text-sm leading-relaxed">
                If you plan to automate testing, log data, or integrate the supply into an ATE rack, a programmable supply with USB, RS232, or LAN interfaces is absolutely essential and worth the investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the difference between a linear and switching power supply?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Linear power supplies provide ultra-clean power with very low noise, ideal for sensitive analog circuits. Switching power supplies are more efficient, lighter, and can deliver higher current, but generate more high-frequency noise."
              }
            },
            {
              "@type": "Question",
              "name": "Why do I need a 4-digit display on my power supply?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A 4-digit display provides 1mV/1mA resolution, which is essential for accurately measuring the low quiescent currents of modern electronics, such as IoT devices in deep sleep modes."
              }
            },
            {
              "@type": "Question",
              "name": "What does galvanic isolation mean in a power supply?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Galvanic isolation means the output channels are electrically separated from each other and from earth ground. This allows you to connect channels in series or parallel without creating short circuits."
              }
            },
            {
              "@type": "Question",
              "name": "Are programmable power supplies worth the extra cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you plan to automate testing, log data, or integrate the supply into an ATE rack, a programmable supply with USB, RS232, or LAN interfaces is absolutely essential and worth the investment."
              }
            }
          ]
        })}
      </script>
    </div>
  );
}
