import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Settings2, Zap, Terminal, ShieldAlert, Layers } from 'lucide-react';
export default function HowToUseHub() {
  const tutorials = [
    {
      title: "Configuring Series Tracking for Bipolar Supplies",
      path: "/how-to-use/series-tracking-bipolar-supply",
      icon: <Settings2 className="w-6 h-6 text-emerald-400" />,
      description: "Learn how to internally link Channel 1 and Channel 2 to create a clean ±15V or ±12V bipolar power supply for testing operational amplifiers and analog front-ends."
    },
    {
      title: "Parallel Mode for High Current Applications",
      path: "/how-to-use/parallel-mode-high-current",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      description: "Need more than 3 Amps? Discover how to safely configure Parallel Tracking Mode to double your current capacity for high-power DC motors and automotive loads."
    },
    {
      title: "SCPI Programming and Automation",
      path: "/how-to-use/scpi-programming-automation",
      icon: <Terminal className="w-6 h-6 text-gray-300" />,
      description: "Unlock the full potential of your programmable triple output DC power supply using Python, SCPI commands, and PyVISA for Automated Test Equipment (ATE) integration."
    },
    {
      title: "Setting OVP and OCP Correctly",
      path: "/how-to-use/setting-ovp-ocp-correctly",
      icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
      description: "Protect your expensive prototypes. A deep dive into configuring Over-Voltage Protection (OVP) and Over-Current Protection (OCP) to prevent catastrophic circuit failures."
    },
    {
      title: "Minimizing Ground Loops with Isolation",
      path: "/how-to-use/minimizing-ground-loops",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      description: "Understand what causes 60Hz mains hum in your measurements and how the galvanically isolated channels of a premium bench power supply eliminate ground loops."
    }
  ];
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          <BookOpen className="w-4 h-4" /> KNOWLEDGE BASE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
          How to Use a Triple Output DC Power Supply
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-lab-muted">
          <p>
            A triple output DC power supply is more than just a simple voltage source; it is the cornerstone of any professional electronics workbench. While basic single-channel power supplies are straightforward to operate, mastering a programmable 3-channel instrument unlocks advanced testing capabilities that are critical for modern hardware development.
          </p>
          <p>
            Whether you are an embedded systems engineer needing to isolate noisy digital logic from sensitive analog sensors, or an automated test engineer writing Python scripts to simulate battery depletion, understanding the advanced features of your bench power supply is essential.
          </p>
          <p>
            In this comprehensive hub, we have compiled detailed, step-by-step tutorials on how to leverage the full power of your equipment. From configuring internal tracking relays (Series and Parallel modes) to utilizing galvanic isolation to break ground loops, these tutorials will help you test faster, safer, and with greater precision.
          </p>
        </div>
      </div>
      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <Link
            key={index}
            href={tutorial.path}
            className="group flex flex-col bg-lab-surface border border-lab-border p-6 rounded-sm hover:border-lab-accent transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-sm bg-lab-bg border border-lab-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {tutorial.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-300 mb-3 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors">
              {tutorial.title}
            </h2>
            <p className="text-lab-muted text-sm leading-relaxed flex-grow mb-6">
              {tutorial.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-mono text-lab-accent mt-auto">
              READ TUTORIAL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
      {/* SEO Bottom Content */}
      <div className="mt-20 pt-12 border-t border-lab-border max-w-4xl">
        <h2 className="text-2xl font-bold text-white mb-4">Why Read Our Bench Power Supply Tutorials?</h2>
        <p className="text-lab-muted mb-4">
          Operating a multiple output DC power supply incorrectly can lead to damaged Devices Under Test (DUT) or inaccurate measurements. For example, failing to remove external bridging wires after using Parallel Tracking Mode can destroy the power supply's internal circuitry if switched back to independent mode.
        </p>
        <p className="text-lab-muted">
          Our tutorials are written by test and measurement experts to ensure you not only know <em>which</em> buttons to press, but <em>why</em> you are pressing them. Bookmark this page as your ultimate reference for programmable triple output power supply operations.
        </p>
      </div>
    </div>
  );
}
