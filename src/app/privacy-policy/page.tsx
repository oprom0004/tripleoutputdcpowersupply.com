import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/pages/PrivacyPolicy';
export const metadata: Metadata = {
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    url: '/privacy-policy',
  },
  title: 'Privacy Policy',
  // description: 'Individual description here...',
};
export default function Page() {
  return <PrivacyPolicy />;
}
