import type { Metadata } from 'next';
import HowToUseHub from '@/components/pages/HowToUseHub';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/how-to-use',
  },
  title: 'How to Use a Triple Output DC Power Supply | Tutorials & Guides',
  // description: 'Individual description here...',
};
export default function Page() {
  return <HowToUseHub />;
}
