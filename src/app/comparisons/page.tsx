import type { Metadata } from 'next';
import ComparisonsHub from '@/components/pages/ComparisonsHub';
export const metadata: Metadata = {
  alternates: { canonical: '/comparisons' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/comparisons',
  },
  title: 'Compare Triple Output DC Power Supplies',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ComparisonsHub />;
}
