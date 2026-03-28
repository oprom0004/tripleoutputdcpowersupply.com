import React from 'react';
export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-lab-bg text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 border-b border-lab-border pb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            About Us: <br />
            <span className="text-lab-muted">Triple Output DC Power Supply Experts</span>
          </h1>
          <p className="text-xl text-lab-muted max-w-2xl leading-relaxed">
            We are a team of test and measurement engineers dedicated to helping professionals find the most reliable, low-noise power solutions for their labs.
          </p>
        </div>
        {/* The Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-lab-accent mb-4">01 / Our Mission</h2>
            <h3 className="text-2xl font-bold">Why We Exist</h3>
          </div>
          <div className="md:col-span-8 space-y-6 text-lab-muted leading-relaxed">
            <p>
              Born from a deep understanding of the challenges faced by hardware developers, our platform was founded with a singular focus: to demystify benchtop power supplies and help engineers find equipment they can trust blindly.
            </p>
            <p>
              We noticed a persistent gap in the industry. Traditional Tier-1 brands offer great performance but at prohibitive costs, while budget alternatives sacrifice the critical low-noise performance required for modern mixed-signal, RF, and IoT design. We exist to help you navigate this landscape and find the perfect balance of precision and value.
            </p>
          </div>
        </div>
        {/* Our Focus */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 bg-lab-surface p-8 md:p-12 border border-lab-border rounded-sm">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-lab-accent mb-4">02 / Our Focus</h2>
            <h3 className="text-2xl font-bold text-white">Linear Programmable Power</h3>
          </div>
          <div className="md:col-span-8 space-y-6 text-lab-muted leading-relaxed">
            <p>
              We focus exclusively on <strong>Programmable Triple Output DC Power Supplies</strong>. Why? Because it is the most critical and versatile instrument on any electronics workbench.
            </p>
            <p>
              Instead of relying on noisy switching topologies, we advocate for true linear architectures. We look for heavy-duty transformers, rigorous thermal management, and advanced SCPI automation that deliver lab-grade precision. We review and recommend equipment designed by engineers, for engineers.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-lab-border/50 mt-6">
              <div>
                <div className="text-3xl font-mono text-white mb-1">≤1mVrms</div>
                <div className="text-xs">Ripple & Noise</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-white mb-1">10mV/1mA</div>
                <div className="text-xs">Readback Resolution</div>
              </div>
            </div>
          </div>
        </div>
        {/* Core Values (Typography Driven, No Icons) */}
        <div className="mb-20">
          <h2 className="text-sm font-mono uppercase tracking-widest text-lab-accent mb-12">03 / Core Engineering Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-lab-border pt-6">
              <h4 className="text-lg font-bold text-white mb-3">Uncompromising Precision</h4>
              <p className="text-sm text-lab-muted leading-relaxed">
                We reject shortcuts. Our linear topologies ensure the clean, stable power your sensitive analog and digital circuits demand during critical testing phases.
              </p>
            </div>
            <div className="border-t border-lab-border pt-6">
              <h4 className="text-lg font-bold text-white mb-3">Built for the Long Haul</h4>
              <p className="text-sm text-lab-muted leading-relaxed">
                Premium components, intelligent thermal design, and comprehensive hardware protections (OVP, OCP, OTP) ensure our instruments survive the toughest lab environments.
              </p>
            </div>
            <div className="border-t border-lab-border pt-6">
              <h4 className="text-lg font-bold text-white mb-3">Continuous Innovation</h4>
              <p className="text-sm text-lab-muted leading-relaxed">
                From seamless SCPI automation to intuitive front-panel interfaces, our R&D team constantly evolves our products based on real-world engineering feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
