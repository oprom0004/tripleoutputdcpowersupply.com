import type { Metadata } from 'next';
import ItechAlternative from '@/components/pages/ItechAlternative';
export const metadata: Metadata = {
  alternates: { canonical: '/comparisons/itech-it6300-alternative' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/comparisons/itech-it6300-alternative',
  },
  title: 'ITECH IT6300 Series Alternative | Triple Output DC Power Supply Comparison',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ItechAlternative />;
}
