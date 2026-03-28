import type { Metadata } from 'next';
import { TermsOfService } from '@/components/pages/TermsOfService';
export const metadata: Metadata = {
  alternates: { canonical: '/terms-of-service' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/terms-of-service',
  },
  title: 'Terms of Service',
  // description: 'Individual description here...',
};
export default function Page() {
  return <TermsOfService />;
}
