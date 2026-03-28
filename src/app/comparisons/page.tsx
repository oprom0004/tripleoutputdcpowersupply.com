import type { Metadata } from 'next';
import ComparisonsHub from '@/components/pages/ComparisonsHub';
export const metadata: Metadata = {
  alternates: { canonical: '/comparisons' },
  openGraph: {
    url: '/comparisons',
  },
  title: 'Compare Leading Triple Output DC Power Supply Top Picks',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ComparisonsHub />;
}
