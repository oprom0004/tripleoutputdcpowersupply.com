import type { Metadata } from 'next';
import Downloads from '@/components/pages/Downloads';
export const metadata: Metadata = {
  alternates: { canonical: '/resources/download-center' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/resources/download-center',
  },
  title: 'Download Center',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Downloads />;
}
