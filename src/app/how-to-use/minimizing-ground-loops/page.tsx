import type { Metadata } from 'next';
import GroundLoops from '@/components/pages/GroundLoops';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/minimizing-ground-loops' },
  openGraph: {
    url: '/how-to-use/minimizing-ground-loops',
  },
  title: 'Eliminate Ground Loops in 3-Channel Power Testing',
  // description: 'Individual description here...',
};
export default function Page() {
  return <GroundLoops />;
}
