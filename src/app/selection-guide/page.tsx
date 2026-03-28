import type { Metadata } from 'next';
import SelectionGuide from '@/components/pages/SelectionGuide';
export const metadata: Metadata = {
  alternates: { canonical: '/selection-guide' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/selection-guide',
  },
  title: 'Triple Output DC Power Supply Selection | How to Choose',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SelectionGuide />;
}
