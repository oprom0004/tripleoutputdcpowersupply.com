import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';
export default function ComparisonsHub() {
  const comparisons = [
    {
      title: "Rigol DP832 vs. eTM-DM Series",
      description: "A head-to-head comparison of two popular programmable triple-output power supplies. See which offers the best value for your bench.",
      link: "/comparisons/rigol-dp832-alternative",
      tags: ["Programmable", "Value", "Bench Testing"]
    },
    {
      title: "Agilent / Keysight E3631A Alternative",
      description: "Looking to replace the legendary E3631A? Discover how the eTM-DM series provides modern linear performance and higher current capacity.",
      link: "/comparisons/agilent-e3631a-alternative",
      tags: ["Linear", "Legacy Upgrade", "SCPI"]
    },
    {
      title: "ITECH IT6300 Series Alternative",
      description: "Compare the ITECH IT6322 with the eTM-DM series to find the best value programmable triple output DC power supply for your lab.",
      link: "/comparisons/itech-it6300-alternative",
      tags: ["Programmable", "Value", "SCPI"]
    }
  ];
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
            <Scale className="w-4 h-4" />
            EQUIPMENT COMPARISONS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compare Triple Output DC Power Supplies
          </h1>
          <p className="text-xl text-lab-muted max-w-3xl leading-relaxed">
            Choosing the right bench power supply is critical for your lab's productivity and budget. We've put together detailed comparisons against industry standards to help you make an informed decision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {comparisons.map((comp, idx) => (
            <Link
              key={idx}
              href={comp.link}
              className="block p-8 bg-lab-surface border border-lab-border rounded-sm hover:border-lab-accent transition-colors group"
            >
              <h2 className="text-2xl font-bold text-gray-300 mb-4 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors">{comp.title}</h2>
              <p className="text-lab-muted mb-6 leading-relaxed">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {comp.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-lab-bg border border-lab-border text-xs font-mono text-lab-muted rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold tracking-wide text-gray-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors uppercase">
                Read Comparison <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
