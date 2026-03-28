import type { Metadata } from 'next';
import AgilentE3631AAlternative from '@/components/pages/AgilentE3631AAlternative';
export const metadata: Metadata = {
  alternates: { canonical: '/comparisons/agilent-e3631a-alternative' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/comparisons/agilent-e3631a-alternative',
  },
  title: 'Agilent / Keysight E3631A Alternative | Triple Output DC Power Supply Comparison',
  // description: 'Individual description here...',
};
export default function Page() {
  return <AgilentE3631AAlternative />;
}
