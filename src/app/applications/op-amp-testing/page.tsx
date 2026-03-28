import type { Metadata } from 'next';
import OpAmpTesting from '@/components/pages/OpAmpTesting';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/op-amp-testing' },
  openGraph: {
    url: '/applications/op-amp-testing',
  },
  title: 'Triple Output DC Power Supply for Op-Amp & Bipolar Testing',
  // description: 'Individual description here...',
};
export default function Page() {
  return <OpAmpTesting />;
}
