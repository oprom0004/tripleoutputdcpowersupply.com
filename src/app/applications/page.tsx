import type { Metadata } from 'next';
import ApplicationsHub from '@/components/pages/ApplicationsHub';
export const metadata: Metadata = {
  alternates: { canonical: '/applications' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/applications',
  },
  title: 'Triple Output DC Power Supply Applications & Use Cases',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ApplicationsHub />;
}
