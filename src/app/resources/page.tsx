import type { Metadata } from 'next';
import ResourcesHub from '@/components/pages/ResourcesHub';
export const metadata: Metadata = {
  alternates: { canonical: '/resources' },
  openGraph: {
    url: '/resources',
  },
  title: 'Triple Output DC Power Supply Datasheets & User Manuals',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ResourcesHub />;
}
