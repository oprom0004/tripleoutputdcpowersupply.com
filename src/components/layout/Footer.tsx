import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export const Footer = () => (
    <footer className="pt-16 pb-8 bg-lab-bg border-t border-lab-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="flex flex-col">
                    <Link href="/" className="flex items-center gap-3 mb-6 group">
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-wide text-gray-300 leading-none group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-colors uppercase">Triple Output DC</span>
                            <span className="text-[10px] text-lab-muted font-mono tracking-widest uppercase mt-1">Power Supply</span>
                        </div>
                    </Link>
                    <p className="text-lab-muted text-sm mb-6 leading-relaxed">
                        Precision power solutions and expert insights for modern electronics labs, R&D professionals, and automated testing environments.
                    </p>
                    <a
                        href="/#buy-now"
                        className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-sm font-medium transition-colors inline-flex items-center gap-2 w-fit text-sm"
                    >
                        Check Pricing <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
                {/* Products & Tutorials */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold mb-6 text-sm">Products & Tutorials</h3>
                    <div className="flex flex-col gap-3 text-sm text-lab-muted">
                        <Link href="/etm-series" className="hover:text-white transition-colors">Top Picks (2026)</Link>
                        <Link href="/pricing-guide" className="hover:text-white transition-colors">Pricing</Link>
                        <Link href="/how-to-choose" className="hover:text-white transition-colors">How to Choose</Link>
                        <Link href="/comparisons" className="hover:text-white transition-colors">All Comparisons</Link>
                        <Link href="/comparisons/etm-vs-traditional" className="hover:text-white transition-colors">Modern vs Traditional Brands</Link>
                        <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
                    </div>
                </div>
                {/* Applications */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold mb-6 text-sm">Applications</h3>
                    <div className="flex flex-col gap-3 text-sm text-lab-muted">
                        <Link href="/applications" className="hover:text-white transition-colors">All Applications</Link>
                        <Link href="/applications/op-amp-testing" className="hover:text-white transition-colors">Op-Amp & Bipolar Testing</Link>
                        <Link href="/applications/mixed-signal-pcb-design" className="hover:text-white transition-colors">Mixed-Signal PCB Design</Link>
                        <Link href="/applications/iot-device-power-profiling" className="hover:text-white transition-colors">IoT Device Power Profiling</Link>
                        <Link href="/applications/automotive-electronics" className="hover:text-white transition-colors">Automotive Electronics</Link>
                        <Link href="/applications/educational-university-labs" className="hover:text-white transition-colors">Educational Labs</Link>
                    </div>
                </div>
                {/* Resources */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold mb-6 text-sm">Resources & Support</h3>
                    <div className="flex flex-col gap-3 text-sm text-lab-muted">
                        <Link href="/resources" className="hover:text-white transition-colors">Resource Hub</Link>
                        <Link href="/how-to-use" className="hover:text-white transition-colors">Tutorials</Link>
                        <a href="/#specs" className="hover:text-white transition-colors">Specifications (Datasheet)</a>
                        <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
                        <Link href="/resources/glossary-power-supply-terms" className="hover:text-white transition-colors">Glossary of Terms</Link>
                        <Link href="/resources/download-center" className="hover:text-white transition-colors">Download Center</Link>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-lab-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-lab-muted font-mono">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <p>© {new Date().getFullYear()} TripleOutputDC. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
                        <span className="text-lab-border">|</span>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-lab-border">|</span>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
