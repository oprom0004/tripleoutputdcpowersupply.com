"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
const routeNames: Record<string, string> = {
    'top-models': 'Top Models',
    'how-to-choose': "How to Choose",
    'pricing-guide': 'Pricing',
    'applications': 'Applications',
    'op-amp-testing': 'Op-Amp Testing',
    'mixed-signal-pcb-design': 'Mixed-Signal PCB Design',
    'iot-device-power-profiling': 'IoT Device Power Profiling',
    'automotive-electronics': 'Automotive Electronics',
    'educational-university-labs': 'Educational Labs',
    'how-to-use': 'Tutorials',
    'series-tracking-bipolar-supply': 'Series Tracking',
    'parallel-mode-high-current': 'Parallel Mode',
    'scpi-programming-automation': 'SCPI Programming',
    'setting-ovp-ocp-correctly': 'OVP/OCP Settings',
    'minimizing-ground-loops': 'Ground Loops',
    'resources': 'Resources',
    'selection-guide': 'Selection',
    'glossary-power-supply-terms': 'Glossary',
    'download-center': 'Download Center'
};
export const Breadcrumbs = () => {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((x) => x);
    // Do not render breadcrumbs on the home page
    if (pathnames.length === 0) return null;
    return (
        <div className="w-full border-b border-lab-border bg-lab-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex py-3 text-[11px] font-mono text-lab-muted" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center hover:text-white transition-colors">
                                <Home className="w-3 h-3 mr-1.5 mb-0.5" />
                                Home
                            </Link>
                        </li>
                        {pathnames.map((value, index) => {
                            const last = index === pathnames.length - 1;
                            const href = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const name = routeNames[value] || value.replace(/-/g, ' ');
                            return (
                                <li key={href}>
                                    <div className="flex items-center">
                                        <ChevronRight className="w-3 h-3 mx-1 opacity-40" />
                                        {last ? (
                                            <span className="ml-1 text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" aria-current="page">
                                                {name}
                                            </span>
                                        ) : (
                                            <Link href={href} className="ml-1 hover:text-white transition-colors">
                                                {name}
                                            </Link>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </div>
    );
};
