import type { Metadata } from 'next';
import HowToUseHub from '@/components/pages/HowToUseHub';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use' },
  openGraph: {
    url: '/how-to-use',
  },
  title: 'Tutorials & Guides',
  // description: 'Individual description here...',
};
export default function Page() {
  return <HowToUseHub />;
}
