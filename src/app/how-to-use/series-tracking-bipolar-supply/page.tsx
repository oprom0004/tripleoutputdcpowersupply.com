import type { Metadata } from 'next';
import SeriesTracking from '@/components/pages/SeriesTracking';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/series-tracking-bipolar-supply' },
  openGraph: {
    url: '/how-to-use/series-tracking-bipolar-supply',
  },
  title: 'Series Tracking: Dual ±V Rails on Triple Output Supplies',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SeriesTracking />;
}
