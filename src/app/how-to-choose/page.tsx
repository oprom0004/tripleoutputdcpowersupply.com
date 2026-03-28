import type { Metadata } from 'next';
import HowToChoose from '@/components/pages/HowToChoose';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-choose' },
  openGraph: {
    url: '/how-to-choose',
  },
  title: 'How to Choose',
  // description: 'Individual description here...',
};
export default function Page() {
  return <HowToChoose />;
}
