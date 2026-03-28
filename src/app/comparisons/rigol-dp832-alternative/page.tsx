import type { Metadata } from 'next';
import RigolDP832Alternative from '@/components/pages/RigolDP832Alternative';
export const metadata: Metadata = {
  alternates: { canonical: '/comparisons/rigol-dp832-alternative' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/comparisons/rigol-dp832-alternative',
  },
  title: 'Rigol DP832 Alternative | Triple Output DC Power Supply Comparison',
  // description: 'Individual description here...',
};
export default function Page() {
  return <RigolDP832Alternative />;
}
