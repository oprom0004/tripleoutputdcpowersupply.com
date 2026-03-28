import type { Metadata } from 'next';
import Automotive from '@/components/pages/Automotive';
export const metadata: Metadata = {
  title: 'Automotive Electronics Testing (12V/24V) | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Automotive />;
}
