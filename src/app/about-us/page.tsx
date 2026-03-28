import type { Metadata } from 'next';
import { AboutUs } from '@/components/pages/AboutUs';
export const metadata: Metadata = {
  title: 'About Us | Triple Output DC Power Supply Experts',
  // description: 'Individual description here...',
};
export default function Page() {
  return <AboutUs />;
}
