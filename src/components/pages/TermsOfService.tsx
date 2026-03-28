import React from 'react';
export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-lab-bg text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Triple Output DC Power Supply Terms of Service</h1>
        <p className="text-sm font-mono text-lab-muted mb-12 pb-6 border-b border-lab-border">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
        <div className="prose prose-invert max-w-none text-lab-muted">
          <p className="mb-6">
            Welcome to TripleOutputDC. By accessing this website, we assume you accept these terms and conditions. Do not continue to use TripleOutputDC if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-xl font-bold text-white mt-10 mb-4">1. Educational and Informational Purpose</h2>
          <p className="mb-6">
            The content provided on TripleOutputDC, including specifications, comparisons, and application guides, is for informational and educational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <h2 className="text-xl font-bold text-white mt-10 mb-4">2. Product Specifications</h2>
          <p className="mb-6">
            Technical specifications for our products are subject to change without notice as we continuously improve our engineering designs. Always refer to the official datasheet provided with your purchased equipment for the most accurate specifications.
          </p>
          <h2 className="text-xl font-bold text-white mt-10 mb-4">3. Intellectual Property Rights</h2>
          <p className="mb-6">
            Unless otherwise stated, TripleOutputDC and/or its licensors own the intellectual property rights for all material on TripleOutputDC. All intellectual property rights are reserved. You may access this from TripleOutputDC for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <div className="mt-16 p-6 bg-lab-surface border border-lab-border rounded-sm">
            <p className="text-sm">
              <strong>Note:</strong> This is a placeholder Terms of Service document. A comprehensive legal agreement will be updated shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
