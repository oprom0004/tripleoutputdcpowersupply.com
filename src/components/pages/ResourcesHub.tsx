import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, Book, Download, HelpCircle } from 'lucide-react';
export default function ResourcesHub() {
  const resources = [
    {
      title: "Selection",
      path: "/selection-guide",
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
      description: "Not sure which model fits your lab? Read our comprehensive overview to comparing linear vs. switching, channel counts, and programming interfaces."
    },
    {
      title: "Glossary of Terms",
      path: "/resources/glossary-power-supply-terms",
      icon: <Book className="w-6 h-6 text-gray-300" />,
      description: "Confused by terms like 'Load Regulation', 'Ripple and Noise', or 'Galvanic Isolation'? Check our exhaustive A-Z glossary of power supply terminology."
    },
    {
      title: "Download Center",
      path: "/resources/download-center",
      icon: <Download className="w-6 h-6 text-amber-400" />,
      description: "Access PDF datasheets, user manuals, SCPI programming references, and Python code examples for our triple output DC power supplies."
    }
  ];
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-lab-surface border border-lab-border text-xs font-mono text-lab-accent mb-6">
          <FileText className="w-4 h-4" /> RESOURCES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
          Triple Output DC Power Supply Resources
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-lab-muted">
          <p>
            Whether you are outfitting a new university lab, writing automated test scripts in Python, or trying to decipher the specifications on a datasheet, we have the resources you need.
          </p>
          <p>
            Browse our collection of technical documents, glossaries, and tutorials designed to help you make informed decisions and get the most out of your test equipment.
          </p>
        </div>
      </div>
      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Link
            key={index}
            href={resource.path}
            className="group flex flex-col bg-lab-surface border border-lab-border p-6 rounded-sm hover:border-lab-accent transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-sm bg-lab-bg border border-lab-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {resource.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-300 mb-3 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors">
              {resource.title}
            </h2>
            <p className="text-lab-muted text-sm leading-relaxed flex-grow mb-6">
              {resource.description}
            </p>
            <div className="flex items-center gap-2 text-sm font-mono text-lab-accent mt-auto">
              ACCESS RESOURCE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
