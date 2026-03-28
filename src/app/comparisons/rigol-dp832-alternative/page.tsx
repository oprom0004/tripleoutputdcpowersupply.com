import type { Metadata } from 'next';
import RigolDP832Alternative from '@/components/pages/RigolDP832Alternative';
export const metadata: Metadata = {
  title: 'Rigol DP832 Alternative | Triple Output DC Power Supply Comparison',
  // description: 'Individual description here...',
};
export default function Page() {
  return <RigolDP832Alternative />;
}
