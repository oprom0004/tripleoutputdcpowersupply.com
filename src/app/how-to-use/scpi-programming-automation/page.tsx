import type { Metadata } from 'next';
import SCPIProgramming from '@/components/pages/SCPIProgramming';
export const metadata: Metadata = {
  alternates: { canonical: '/how-to-use/scpi-programming-automation' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/how-to-use/scpi-programming-automation',
  },
  title: 'SCPI Programming & Automation',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SCPIProgramming />;
}
