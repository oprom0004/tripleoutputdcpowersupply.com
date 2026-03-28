import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/pages/PrivacyPolicy';
export const metadata: Metadata = {
  title: 'Privacy Policy | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <PrivacyPolicy />;
}
