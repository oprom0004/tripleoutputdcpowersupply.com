import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
const products = [
  {
    id: 'etm-dm-fkf',
    name: 'eTM-DM-FKF',
    specs: '100V/3A, 160V/5A, 100V/3A',
    originalPrice: 1149,
    currentPrice: 699,
  },
  {
    id: 'etm-dm-kkk',
    name: 'eTM-DM-KKK',
    specs: '0-160V 0-5A',
    originalPrice: 1599,
    currentPrice: 949,
  },
  {
    id: 'etm-dm-jjj',
    name: 'eTM-DM-JJJ',
    specs: '0-80V 0-10A',
    originalPrice: 1599,
    currentPrice: 949,
  },
  {
    id: 'etm-dm-efg',
    name: 'eTM-DM-EFG',
    specs: '60V/5A, 100V/3A, 15V/20A',
    originalPrice: 1299,
    currentPrice: 649,
  },
  {
    id: 'etm-dm-hhh',
    name: 'eTM-DM-HHH',
    specs: '0-150V 0-2A',
    originalPrice: 1149,
    currentPrice: 649,
  },
  {
    id: 'etm-dm-eee',
    name: 'eTM-DM-EEE',
    specs: '0-60V 0-5A',
    originalPrice: 1149,
    currentPrice: 599,
  },
  {
    id: 'etm-dm-ddd',
    name: 'eTM-DM-DDD',
    specs: '0-30V 0-10A',
    originalPrice: 1199,
    currentPrice: 549,
  },
  {
    id: 'etm-dm-abc',
    name: 'eTM-DM-ABC',
    specs: '15V/2A, 15V/5A, 30V/5A',
    originalPrice: 1149,
    currentPrice: 459,
  },
  {
    id: 'etm-dm-abb',
    name: 'eTM-DM-ABB',
    specs: '15V/2A, 15V/5A, 15V/5A',
    originalPrice: 1149,
    currentPrice: 449,
  },
  {
    id: 'etm-dm-xxx',
    name: 'eTM-DM-XXX',
    specs: 'Custom Configuration',
    originalPrice: null,
    currentPrice: null,
  }
];
export default function EtmSeries() {
  return (
    <div className="bg-lab-bg min-h-screen text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Top Picks: <span className="text-lab-accent">Programmable Triple Output DC Power Supplies</span>
          </h1>
          <p className="text-lg text-lab-muted leading-relaxed">
            Our curated selection of the best performing Triple Output Bench DC Power Supplies for 2026. Featuring 4-Digits Display, CV/CC Mode Automatic Conversion, and optional RS232/485/USB ports for automated testing.
          </p>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-lab-surface border border-lab-border rounded-lg overflow-hidden hover:border-lab-accent/50 transition-all duration-300 flex flex-col group">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-wide">{product.name}</h3>
                  <Zap className="w-6 h-6 text-lab-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mb-6">
                  <p className="text-sm text-lab-muted mb-1">Output Specifications:</p>
                  <p className="text-lg font-mono text-white bg-lab-bg p-2 rounded border border-lab-border/50">
                    {product.specs}
                  </p>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-sm text-lab-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>4-Digits High Precision Display</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-lab-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>CV/CC Mode Automatic Conversion</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-lab-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>RS232/485/USB (Optional) Port</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-lab-bg border-t border-lab-border mt-auto">
                <div className="flex items-end gap-3 mb-4">
                  {product.currentPrice ? (
                    <>
                      <span className="text-3xl font-bold text-white">${product.currentPrice}</span>
                      <span className="text-lg text-lab-muted line-through mb-1">${product.originalPrice}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-white">Contact for Price</span>
                  )}
                </div>
                <a
                  href="https://variabledcpowersupply.com/triple-output-bench-power-supplies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-gray-200 text-black py-3 rounded font-bold transition-colors flex items-center justify-center gap-2"
                >
                  View in Store <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
