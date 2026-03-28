import type { Metadata } from 'next';
import GroundLoops from '@/components/pages/GroundLoops';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/minimizing-ground-loops' },
  openGraph: {
    url: '/how-to-use/minimizing-ground-loops',
  },
  title: 'Minimizing Ground Loops',
  // description: 'Individual description here...',
};
export default function Page() {
  return <GroundLoops />;
}
