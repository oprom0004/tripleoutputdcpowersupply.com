import type { Metadata } from 'next';
import OvpOcp from '@/components/pages/OvpOcp';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/setting-ovp-ocp-correctly' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/how-to-use/setting-ovp-ocp-correctly',
  },
  title: 'Setting OVP and OCP',
  // description: 'Individual description here...',
};
export default function Page() {
  return <OvpOcp />;
}
