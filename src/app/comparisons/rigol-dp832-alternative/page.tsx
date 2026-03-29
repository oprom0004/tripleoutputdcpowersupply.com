import type { Metadata } from 'next';
import PageComponent from '@/components/pages/RigolDP832Alternative';

export const metadata: Metadata = {
  title: 'Rigol DP832 vs Modern Triple Output DC Bench Power Supplies',
  alternates: { canonical: '/comparisons/rigol-dp832-alternative' },
  openGraph: { title: 'Rigol DP832 vs Modern Triple Output DC Bench Power Supplies', url: '/comparisons/rigol-dp832-alternative' }
};

export default function Page() { return <PageComponent />; }
