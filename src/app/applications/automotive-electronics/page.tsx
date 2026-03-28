import type { Metadata } from 'next';
import Automotive from '@/components/pages/Automotive';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/automotive-electronics' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/applications/automotive-electronics',
  },
  title: 'Automotive Electronics Testing (12V/24V)',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Automotive />;
}
