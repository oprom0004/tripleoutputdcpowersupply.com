import type { Metadata } from 'next';
import ParallelMode from '@/components/pages/ParallelMode';
export const metadata: Metadata = {
  title: 'Parallel Tracking Mode | Triple Output DC Power Supply Setup',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ParallelMode />;
}
