import type { Metadata } from 'next';
import WhereToBuy from '@/components/pages/WhereToBuy';
export const metadata: Metadata = {
  alternates: { canonical: '/where-to-buy' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/where-to-buy',
  },
  title: 'Where to Buy',
  // description: 'Individual description here...',
};
export default function Page() {
  return <WhereToBuy />;
}
