import type { Metadata } from 'next';
import PricingGuide from '@/components/pages/PricingGuide';
export const metadata: Metadata = {
  title: 'Triple Output DC Power Supply Pricing',
  // description: 'Individual description here...',
};
export default function Page() {
  return <PricingGuide />;
}
