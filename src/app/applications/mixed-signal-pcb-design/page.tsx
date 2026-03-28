import type { Metadata } from 'next';
import MixedSignal from '@/components/pages/MixedSignal';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/mixed-signal-pcb-design' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/applications/mixed-signal-pcb-design',
  },
  title: 'Mixed-Signal PCB Design',
  // description: 'Individual description here...',
};
export default function Page() {
  return <MixedSignal />;
}
