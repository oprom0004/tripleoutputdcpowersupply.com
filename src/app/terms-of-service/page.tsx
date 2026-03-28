import type { Metadata } from 'next';
import { TermsOfService } from '@/components/pages/TermsOfService';
export const metadata: Metadata = {
  title: 'Terms of Service | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <TermsOfService />;
}
