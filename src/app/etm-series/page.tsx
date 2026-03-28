import type { Metadata } from 'next';
import EtmSeries from '@/components/pages/EtmSeries';
export const metadata: Metadata = {
  alternates: { canonical: '/etm-series' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/etm-series',
  },
  title: 'Top Picks | Programmable Triple Output DC Power Supplies',
  // description: 'Individual description here...',
};
export default function Page() {
  return <EtmSeries />;
}
