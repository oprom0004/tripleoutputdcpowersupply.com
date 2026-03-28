import React from 'react';
export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-lab-bg text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Triple Output DC Power Supply Privacy Policy</h1>
        <p className="text-sm font-mono text-lab-muted mb-12 pb-6 border-b border-lab-border">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
        <div className="prose prose-invert max-w-none text-lab-muted">
          <p className="mb-6">
            At TripleOutputDC, we take your privacy seriously. This Privacy Policy document contains types of information that is collected and recorded by our website and how we use it.
          </p>
          <h2 className="text-xl font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. This may include basic analytics data to understand how engineers interact with our technical content and datasheets.
          </p>
          <h2 className="text-xl font-bold text-white mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website content</li>
            <li>Understand and analyze how you use our technical resources</li>
            <li>Develop new products, services, features, and functionality</li>
          </ul>
          <h2 className="text-xl font-bold text-white mt-10 mb-4">3. Log Files</h2>
          <p className="mb-6">
            TripleOutputDC follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
          <div className="mt-16 p-6 bg-lab-surface border border-lab-border rounded-sm">
            <p className="text-sm">
              <strong>Note:</strong> This is a placeholder Privacy Policy. A full, legally binding privacy policy will be updated shortly to reflect our complete data handling and compliance standards (including GDPR and CCPA requirements).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
