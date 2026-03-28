import React from 'react';
import Link from 'next/link';
import { Briefcase, ArrowRight, Cpu, Activity, Zap, Car, BookOpen } from 'lucide-react';
export default function ApplicationsHub() {
  const applications = [
    {
      title: "Op-Amp & Bipolar Testing",
      path: "/applications/op-amp-testing",
      icon: <Activity className="w-6 h-6 text-emerald-400" />,
      description: "Discover how to use a triple output DC power supply to generate clean ±15V rails for testing operational amplifiers and analog circuits."
    },
    {
      title: "Mixed-Signal PCB Design",
      path: "/applications/mixed-signal-pcb-design",
      icon: <Cpu className="w-6 h-6 text-gray-300" />,
      description: "Learn how to power sensitive analog front-ends and noisy digital logic simultaneously without compromising signal integrity."
    },
    {
      title: "IoT Device Power Profiling",
      path: "/applications/iot-device-power-profiling",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      description: "Test battery-powered IoT devices handling extreme dynamic current ranges, from microamp sleep states to multi-amp RF transmission spikes."
    },
    {
      title: "Automotive Electronics (12V/24V)",
      path: "/applications/automotive-electronics",
      icon: <Car className="w-6 h-6 text-red-400" />,
      description: "Simulate harsh automotive electrical environments, including crank profiles and 24V commercial vehicle systems."
    },
    {
      title: "Educational & University Labs",
      path: "/applications/educational-university-labs",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      description: "Why the triple output DC power supply is the standard instrument for teaching electronics, offering versatility and robust protection."
    }
  ];
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          <Briefcase className="w-4 h-4" /> INDUSTRY APPLICATIONS
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
          What is a Triple Output DC Power Supply Used For?
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-lab-muted">
          <p>
            A <strong>DC power supply</strong> is an essential piece of test equipment used to provide a reliable, stable, and adjustable source of direct current (DC) voltage and current to power electronic circuits, components, and devices under test (DUT).
          </p>
          <p>
            But <em>what is a DC power supply used for</em> in practice? Engineers and technicians use them daily for:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Prototyping & Design:</strong> Powering new circuit board designs before they have their own dedicated power regulation circuitry.</li>
            <li><strong>Component Testing:</strong> Applying specific voltages to components (like LEDs, motors, or sensors) to verify their operating characteristics.</li>
            <li><strong>Troubleshooting & Repair:</strong> Injecting safe, current-limited power into a faulty device to find short circuits without causing further damage.</li>
            <li><strong>Battery Simulation:</strong> Mimicking the discharge curve of a battery to see how a portable device behaves as power drops.</li>
          </ul>
          <p>
            A <strong>programmable triple output DC power supply</strong> takes this versatility further. Unlike single-channel supplies, its ability to provide multiple isolated, low-noise voltage rails simultaneously makes it indispensable across a wide range of advanced industries. Explore our detailed use cases below.
          </p>
        </div>
      </div>
      {/* Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, index) => (
          <Link
            key={index}
            href={app.path}
            className="group flex flex-col bg-lab-surface border border-lab-border p-6 rounded-sm hover:border-lab-accent transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-sm bg-lab-bg border border-lab-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {app.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-300 mb-3 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors">
              {app.title}
            </h2>
            <p className="text-lab-muted text-sm leading-relaxed flex-grow mb-6">
              {app.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-mono text-lab-accent mt-auto">
              READ MORE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
