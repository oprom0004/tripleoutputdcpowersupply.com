import type { Metadata } from 'next';
import OpAmpTesting from '@/components/pages/OpAmpTesting';
export const metadata: Metadata = {
  title: 'Powering Operational Amplifiers | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <OpAmpTesting />;
}
