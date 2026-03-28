import type { Metadata } from 'next';
import WhereToBuy from '@/components/pages/WhereToBuy';
export const metadata: Metadata = {
  title: 'Where to Buy | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <WhereToBuy />;
}
