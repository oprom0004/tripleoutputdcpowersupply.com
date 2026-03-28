import type { Metadata } from 'next';
import OpAmpTesting from '@/components/pages/OpAmpTesting';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/op-amp-testing' },
  openGraph: {
    url: '/applications/op-amp-testing',
  },
  title: 'Powering Operational Amplifiers',
  // description: 'Individual description here...',
};
export default function Page() {
  return <OpAmpTesting />;
}
