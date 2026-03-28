import type { Metadata } from 'next';
import ParallelMode from '@/components/pages/ParallelMode';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/parallel-mode-high-current' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/how-to-use/parallel-mode-high-current',
  },
  title: 'Parallel Tracking Mode | Triple Output DC Power Supply Setup',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ParallelMode />;
}
