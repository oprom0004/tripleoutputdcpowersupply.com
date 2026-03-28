import type { Metadata } from 'next';
import Downloads from '@/components/pages/Downloads';
export const metadata: Metadata = {
  alternates: { canonical: '/resources/download-center' },
  openGraph: {
    url: '/resources/download-center',
  },
  title: 'Download PC Software for Triple Output DC Power Supplies',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Downloads />;
}
