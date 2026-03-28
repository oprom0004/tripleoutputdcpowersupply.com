import type { Metadata } from 'next';
import OvpOcp from '@/components/pages/OvpOcp';
export const metadata: Metadata = {
  title: 'Setting OVP and OCP | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <OvpOcp />;
}
