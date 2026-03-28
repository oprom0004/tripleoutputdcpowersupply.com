import type { Metadata } from 'next';
import Downloads from '@/components/pages/Downloads';
export const metadata: Metadata = {
  title: 'Download Center | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Downloads />;
}
