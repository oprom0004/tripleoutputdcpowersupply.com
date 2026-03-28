"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export const FAQ = () => {
    const faqs = [
        {
            q: "Why do engineers prefer a true triple output supply over three single units?",
            a: "It comes down to internal routing and synchronization. A true triple output supply offers internal series/parallel tracking and a dedicated logic channel (CH3). It's the standard for Mixed-Signal Design, allowing you to power DSPs/Microcontrollers alongside analog sensors simultaneously without ground loops."
        },
        {
            q: "What is a triple output DC power supply used for?",
            a: "It is primarily used in electronics R&D, education, and manufacturing. The three galvanically isolated channels allow engineers to power complex circuits that require multiple voltage levels simultaneously, such as mixed-signal boards needing +15V/-15V for analog op-amps and +3.3V/+5V for digital logic."
        },
        {
            q: "Linear vs. Switching: Which is better for a lab bench?",
            a: "For high-precision bench testing, Linear power supplies are generally preferred due to their ultra-low ripple and noise, and fast transient response. Switching supplies are lighter and more efficient, but can introduce high-frequency switching noise that interferes with sensitive analog or RF circuits."
        },
        {
            q: "Can I connect the outputs in series or parallel?",
            a: "Yes. Premium triple output power supplies feature internal 'Auto-Tracking' modes. You can configure CH1 and CH2 in series to double the maximum voltage, or in parallel to double the maximum current, without needing external jumper wires."
        },
        {
            q: "Are the channels fully isolated?",
            a: "Yes, in our professional-grade models, all three channels are galvanically isolated from each other and from the earth ground. This prevents ground loops and allows you to connect outputs in various configurations safely."
        }
    ];
    const [openIdx, setOpenIdx] = useState<number | null>(0);
    return (
        <section id="faq" className="py-24 border-b border-lab-border bg-lab-surface/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-lab-border bg-lab-surface rounded-sm overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-lab-border/30 transition-colors"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            >
                                <span className="font-medium">{faq.q}</span>
                                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-lab-muted" /> : <ChevronDown className="w-5 h-5 text-lab-muted" />}
                            </button>
                            {openIdx === idx && (
                                <div className="px-6 pb-4 text-lab-muted text-sm leading-relaxed border-t border-lab-border/50 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
