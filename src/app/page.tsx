import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/',
  },
  title: 'Programmable Triple Output DC Bench Power Supply'
};
import {
  Activity,
  Zap,
  ShieldCheck,
  Cpu,
  Settings2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Terminal,
  Layers,
  CheckCircle2
} from 'lucide-react';
const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden border-b border-lab-border">
      {/* Subtle grid background for technical feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
              <span className="w-2 h-2 rounded-full bg-lab-accent animate-pulse"></span>
              LINEAR PROGRAMMABLE BENCH POWER
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Programmable Triple Output DC Bench Power Supply
            </h1>
            {/* Hard Specs Up Front - Inspired by Reference */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 mb-10 font-mono text-sm border-y border-lab-border py-6">
              <div className="flex flex-col">
                <span className="text-lab-muted text-[10px] tracking-widest uppercase mb-1">Max Ripple & Noise</span>
                <span className="text-amber-500 font-bold text-base">&lt; 1 mVrms</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lab-muted text-[10px] tracking-widest uppercase mb-1">Readback Resolution</span>
                <span className="text-white font-bold text-base">1 mV / 1 mA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lab-muted text-[10px] tracking-widest uppercase mb-1">Remote Interface</span>
                <span className="text-white font-bold text-base">RS232 / 485 / USB</span>
              </div>
            </div>
            <p className="text-lg text-lab-muted mb-8 leading-relaxed">
              Engineered for advanced R&D bench testing. Whether you need a <strong className="text-white font-medium">3 output dc power supply</strong> or a versatile <strong className="text-white font-medium">multiple output dc power supply</strong>, our models feature galvanically isolated channels, intelligent series/parallel tracking, and a dedicated logic channel. The ultimate <strong className="text-white font-medium">linear programmable DC power supply</strong> for mixed-signal design and op-amp circuit testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                Check Online Stock & Pricing <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/etm-series"
                className="bg-lab-surface border border-lab-border hover:border-lab-muted text-white px-6 py-3 rounded-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                View Top Picks
              </a>
            </div>
          </div>
          {/* Real Product Image */}
          <div className="relative mx-auto w-full max-w-lg flex items-center justify-center">
            <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full"></div>
            <Image
              src="https://variabledcpowersupply.com/wp-content/uploads/2023/11/Triple-circuit-DC-Power-Supply-with-Encoder-Knob-e1713773031445.jpg"
              alt="Programmable Triple Output DC Bench Power Supply"
              width={640}
              height={480}
              className="relative z-10 w-full h-auto rounded-md shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-lab-border"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const Features = () => {
  const features = [
    {
      icon: <Layers className="w-6 h-6 text-lab-accent" />,
      title: "Galvanically Isolated Channels",
      description: "All three outputs are fully galvanically isolated. Connect them to different parts of your circuit without worrying about common ground loops or interference."
    },
    {
      icon: <Settings2 className="w-6 h-6 text-lab-accent" />,
      title: "Internal Series & Parallel Tracking",
      description: "Internally connect CH1 and CH2 in series to double voltage (up to 60V) or easily create a symmetric bipolar power supply (+/- Voltage). Parallel mode doubles current for heavy loads."
    },
    {
      icon: <Cpu className="w-6 h-6 text-lab-accent" />,
      title: "Dedicated Digital Logic Channel (CH3)",
      description: "While CH1 and CH2 handle heavy analog loads, CH3 is optimized for digital logic. It provides a highly stable, low-noise output perfect for 3.3V or 5V DSPs and microcontrollers."
    },
    {
      icon: <Terminal className="w-6 h-6 text-lab-accent" />,
      title: "SCPI Programmable & Automation",
      description: "Standard USB/LAN/GPIB interfaces with full SCPI command support. Easily integrate into Automated Test Equipment (ATE) systems or control via Python/LabVIEW."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-lab-accent" />,
      title: "Advanced OVP/OCP Protection",
      description: "Hardware-level Over-Voltage and Over-Current protection reacts in microseconds to protect your valuable Device Under Test (DUT) from accidental damage."
    },
    {
      icon: <Activity className="w-6 h-6 text-lab-accent" />,
      title: "Ultra-Low Ripple & Noise (Linear)",
      description: "True linear-grade performance with ripple and noise < 1mVrms / 3mVp-p. Ensures clean power delivery for RF, audio, and high-precision sensor testing compared to switching supplies."
    }
  ];
  return (
    <section id="features" className="py-24 border-b border-lab-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Premium Triple Output?</h2>
          <p className="text-lab-muted max-w-2xl">
            Not all bench power supplies are created equal. Our programmable models are designed for the rigorous demands of modern electronics R&D.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="relative p-8 border border-lab-border bg-lab-surface rounded-sm hover:border-lab-muted transition-colors overflow-hidden group">
              {/* Watermark Number */}
              <div className="absolute -top-6 -right-2 text-[120px] font-black text-lab-border/30 group-hover:text-lab-border/50 transition-colors select-none pointer-events-none leading-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-sm bg-lab-bg border border-lab-border text-[10px] font-mono text-lab-muted mb-6">
                  Feature_{String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-lab-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const TrackingModeHighlight = () => (
  <section className="py-24 border-b border-lab-border bg-lab-surface/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">The Power of Auto-Tracking Mode</h2>
          <p className="text-lab-muted mb-6 leading-relaxed">
            The defining feature of a true triple output DC power supply is the ability to easily configure the two main channels. Instead of manually wiring outputs and adjusting two separate knobs, our tracking mode handles it internally.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Independent Mode</strong>
                <span className="text-sm text-lab-muted">Three separate outputs (e.g., 30V/3A, 30V/3A, 5V/3A) for general bench use.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Series Tracking Mode (Bipolar Supply)</strong>
                <span className="text-sm text-lab-muted">Internally connects CH1 & CH2 in series. Double the voltage (up to 60V) or easily create a perfect symmetric bipolar power supply (+Vcc and -Vee) for testing operational amplifiers (op-amps) using a single master dial.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Parallel Tracking Mode</strong>
                <span className="text-sm text-lab-muted">Internally connects CH1 & CH2 in parallel. Double the current (up to 6A) for high-power loads.</span>
              </div>
            </li>
          </ul>
        </div>
        {/* Technical Diagram Mockup */}
        <div className="bg-lab-bg border border-lab-border p-8 rounded-sm font-mono text-sm">
          <div className="text-lab-muted mb-4 border-b border-lab-border pb-2">CONNECTION TOPOLOGY: SERIES TRACKING</div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="w-24 text-center p-2 border border-lab-border bg-lab-surface">CH1 (Master)</div>
              <div className="flex-1 h-px bg-lab-accent relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-lab-accent rotate-45"></div>
              </div>
              <div className="w-24 text-center p-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">+V out</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-px h-12 bg-lab-border border-l border-dashed border-lab-muted"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-24 text-center p-2 border border-lab-border bg-lab-surface">CH2 (Slave)</div>
              <div className="flex-1 h-px bg-lab-accent relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-lab-accent rotate-45"></div>
              </div>
              <div className="w-24 text-center p-2 border border-amber-500/30 bg-amber-500/10 text-amber-400">-V out</div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-lab-surface border border-lab-border text-xs text-lab-muted">
            <span className="text-lab-accent">NOTE:</span> In series tracking, CH2 voltage automatically mirrors CH1. The COM terminal acts as the center tap for bipolar (+/-) power requirements.
          </div>
        </div>
      </div>
    </div>
  </section>
);
const FlagshipSpotlight = () => (
  <section id="buy-now" className="py-24 border-b border-lab-border bg-lab-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Real Product Image */}
        <div className="relative w-full flex items-center justify-center">
          <Image
            src="https://variabledcpowersupply.com/wp-content/uploads/2023/11/Triple-circuit-DC-Power-Supply-with-Encoder-Knob-4.jpg"
            alt="eTM-DM Series Triple Output Power Supply"
            width={640}
            height={480}
            className="w-full h-auto rounded-md shadow-2xl border border-lab-border"
            unoptimized
          />
        </div>
        {/* Right: Content & 2x2 Grid */}
        <div>
          <div className="flex gap-2 mb-6">
            <span className="px-2 py-1 bg-lab-surface border border-lab-border text-[10px] font-bold tracking-wider text-white rounded-sm uppercase">eTM-DM Series</span>
            <span className="px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold tracking-wider text-amber-500 rounded-sm uppercase">Official Store</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            The Definitive Standard for <br />
            <span className="text-lab-muted font-normal">Daily Bench Testing.</span>
          </h2>
          <p className="text-lab-muted mb-12 leading-relaxed">
            Not every project requires micro-volt precision, but every bench needs unwavering reliability. The eTM-DM series delivers robust, continuous high-voltage power with an intuitive 4-digit display interface, making it the most cost-effective workhorse for production lines, testing centers, and automotive applications.
          </p>
          {/* 2x2 Spec Grid */}
          <div className="grid grid-cols-2 gap-px bg-lab-border border border-lab-border rounded-sm overflow-hidden">
            <div className="bg-lab-bg p-6">
              <div className="text-[10px] text-lab-muted font-mono mb-2">Display</div>
              <div className="font-bold text-white text-lg mb-1">4-Digits LED</div>
              <div className="text-xs text-lab-muted">High Precision Readout</div>
            </div>
            <div className="bg-lab-bg p-6">
              <div className="text-[10px] text-lab-muted font-mono mb-2">Controls</div>
              <div className="font-bold text-white text-lg mb-1">Coarse & Fine</div>
              <div className="text-xs text-lab-muted">Independent adjustment knobs</div>
            </div>
            <div className="bg-lab-bg p-6">
              <div className="text-[10px] text-lab-muted font-mono mb-2">Protection</div>
              <div className="font-bold text-white text-lg mb-1">OVP / OCP</div>
              <div className="text-xs text-lab-muted">Over-voltage & Over-current</div>
            </div>
            <div className="bg-lab-bg p-6">
              <div className="text-[10px] text-lab-muted font-mono mb-2">Durability</div>
              <div className="font-bold text-white text-lg mb-1">24/7 Rated</div>
              <div className="text-xs text-lab-muted">Intelligent cooling fan</div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              View All Models & Online Pricing <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const Specs = () => (
  <section id="specs" className="py-24 border-b border-lab-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold mb-2">Technical Specifications</h2>
          <p className="text-lab-muted">Typical performance characteristics for our premium series.</p>
        </div>
        <a
          href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
        >
          Check Online Stock & Pricing <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse font-mono text-sm">
          <thead>
            <tr className="border-b-2 border-lab-border text-lab-muted">
              <th className="py-4 px-4 font-medium">Parameter</th>
              <th className="py-4 px-4 font-medium">CH1 / CH2</th>
              <th className="py-4 px-4 font-medium">CH3</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-lab-border">
            <tr className="hover:bg-lab-surface/50 transition-colors">
              <td className="py-4 px-4 text-white">DC Output Rating</td>
              <td className="py-4 px-4 text-lab-muted">0 to 30V / 0 to 3A</td>
              <td className="py-4 px-4 text-lab-muted">0 to 5V / 0 to 3A</td>
            </tr>
            <tr className="hover:bg-lab-surface/50 transition-colors">
              <td className="py-4 px-4 text-white">Load Regulation</td>
              <td className="py-4 px-4 text-lab-muted">&lt; 0.01% + 2mV</td>
              <td className="py-4 px-4 text-lab-muted">&lt; 0.01% + 2mV</td>
            </tr>
            <tr className="hover:bg-lab-surface/50 transition-colors">
              <td className="py-4 px-4 text-white">Ripple & Noise (20Hz-20MHz)</td>
              <td className="py-4 px-4 text-lab-muted">&lt; 1mVrms / 3mVp-p</td>
              <td className="py-4 px-4 text-lab-muted">&lt; 1mVrms / 3mVp-p</td>
            </tr>
            <tr className="hover:bg-lab-surface/50 transition-colors">
              <td className="py-4 px-4 text-white">Programming Resolution</td>
              <td className="py-4 px-4 text-lab-muted">1mV / 0.1mA</td>
              <td className="py-4 px-4 text-lab-muted">1mV / 0.1mA</td>
            </tr>
            <tr className="hover:bg-lab-surface/50 transition-colors">
              <td className="py-4 px-4 text-white">Transient Response Time</td>
              <td className="py-4 px-4 text-lab-muted">&lt; 50μs</td>
              <td className="py-4 px-4 text-lab-muted">&lt; 50μs</td>
            </tr>
            <tr className="hover:bg-lab-surface/50 transition-colors">
              <td className="py-4 px-4 text-white">Interfaces</td>
              <td className="py-4 px-4 text-lab-muted" colSpan={2}>USB, LAN (LXI), GPIB (Optional), RS232</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
import { FAQ } from "@/components/pages/FAQ";
export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <TrackingModeHighlight />
      <Specs />
      <FAQ />
      <FlagshipSpotlight />
    </>
  );
}
