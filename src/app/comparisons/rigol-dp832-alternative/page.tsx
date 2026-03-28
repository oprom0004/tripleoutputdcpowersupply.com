import type { Metadata } from 'next';
import RigolDP832Alternative from '@/components/pages/RigolDP832Alternative';
export const metadata: Metadata = {
  alternates: { canonical: '/comparisons/rigol-dp832-alternative' },
  openGraph: {
    url: '/comparisons/rigol-dp832-alternative',
  },
  title: 'Rigol DP832 Alternative',
  // description: 'Individual description here...',
};
export default function Page() {
  return <RigolDP832Alternative />;
}
