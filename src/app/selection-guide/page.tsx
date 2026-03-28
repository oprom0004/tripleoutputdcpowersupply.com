import type { Metadata } from 'next';
import SelectionGuide from '@/components/pages/SelectionGuide';
export const metadata: Metadata = {
  alternates: { canonical: '/selection-guide' },
  openGraph: {
    url: '/selection-guide',
  },
  title: 'Selection Guide',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SelectionGuide />;
}
