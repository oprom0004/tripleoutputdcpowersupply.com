import type { Metadata } from 'next';
import SelectionGuide from '@/components/pages/SelectionGuide';
export const metadata: Metadata = {
  title: 'Triple Output DC Power Supply Selection | How to Choose',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SelectionGuide />;
}
