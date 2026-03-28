import type { Metadata } from 'next';
import MixedSignal from '@/components/pages/MixedSignal';
export const metadata: Metadata = {
  title: 'Mixed-Signal PCB Design | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <MixedSignal />;
}
