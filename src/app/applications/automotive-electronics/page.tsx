import type { Metadata } from 'next';
import Automotive from '@/components/pages/Automotive';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/automotive-electronics' },
  openGraph: {
    url: '/applications/automotive-electronics',
  },
  title: 'Automotive ECU Testing with Triple Output DC Bench Power',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Automotive />;
}
