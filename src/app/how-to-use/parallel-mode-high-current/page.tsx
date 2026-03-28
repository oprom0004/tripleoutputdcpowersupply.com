import type { Metadata } from 'next';
import ParallelMode from '@/components/pages/ParallelMode';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/parallel-mode-high-current' },
  openGraph: {
    url: '/how-to-use/parallel-mode-high-current',
  },
  title: 'Parallel Tracking Mode',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ParallelMode />;
}
