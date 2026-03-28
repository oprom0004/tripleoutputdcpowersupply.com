import type { Metadata } from 'next';
import EtmSeries from '@/components/pages/EtmSeries';
export const metadata: Metadata = {
  alternates: { canonical: '/etm-series' },
  openGraph: {
    url: '/etm-series',
  },
  title: 'Top Picks',
  // description: 'Individual description here...',
};
export default function Page() {
  return <EtmSeries />;
}
