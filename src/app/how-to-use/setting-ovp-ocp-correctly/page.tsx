import type { Metadata } from 'next';
import OvpOcp from '@/components/pages/OvpOcp';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/setting-ovp-ocp-correctly' },
  openGraph: {
    url: '/how-to-use/setting-ovp-ocp-correctly',
  },
  title: 'Safe Operation: OVP & OCP on Triple Output DC Bench Power',
  // description: 'Individual description here...',
};
export default function Page() {
  return <OvpOcp />;
}
