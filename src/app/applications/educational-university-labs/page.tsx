import type { Metadata } from 'next';
import Education from '@/components/pages/Education';
export const metadata: Metadata = {
  title: 'Educational Labs | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Education />;
}
