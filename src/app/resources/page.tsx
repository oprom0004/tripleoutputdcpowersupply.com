import type { Metadata } from 'next';
import ResourcesHub from '@/components/pages/ResourcesHub';
export const metadata: Metadata = {
  alternates: { canonical: '/resources' },
  openGraph: {
    url: '/resources',
  },
  title: 'Resources & Downloads',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ResourcesHub />;
}
