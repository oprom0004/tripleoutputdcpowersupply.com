import type { Metadata } from 'next';
import SeriesTracking from '@/components/pages/SeriesTracking';
export const metadata: Metadata = {
  title: 'Series Tracking Mode | Triple Output DC Power Supply Setup',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SeriesTracking />;
}
