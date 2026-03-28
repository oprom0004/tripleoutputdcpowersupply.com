import type { Metadata } from 'next';
import GroundLoops from '@/components/pages/GroundLoops';
export const metadata: Metadata = {
  title: 'Minimizing Ground Loops | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <GroundLoops />;
}
