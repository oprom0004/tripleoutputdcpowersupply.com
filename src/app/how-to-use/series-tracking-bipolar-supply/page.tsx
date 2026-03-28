import type { Metadata } from 'next';
import SeriesTracking from '@/components/pages/SeriesTracking';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/series-tracking-bipolar-supply' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/how-to-use/series-tracking-bipolar-supply',
  },
  title: 'Series Tracking Mode | Triple Output DC Power Supply Setup',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SeriesTracking />;
}
