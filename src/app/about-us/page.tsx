import type { Metadata } from 'next';
import { AboutUs } from '@/components/pages/AboutUs';
export const metadata: Metadata = {
  alternates: { canonical: '/about-us' },
  openGraph: {
    url: '/about-us',
  },
  title: 'About Us | Triple Output DC Power Supply Experts',
  // description: 'Individual description here...',
};
export default function Page() {
  return <AboutUs />;
}
