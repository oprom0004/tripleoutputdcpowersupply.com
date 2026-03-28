import type { Metadata } from 'next';
import SCPIProgramming from '@/components/pages/SCPIProgramming';
export const metadata: Metadata = {
  title: 'SCPI Programming & Automation | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <SCPIProgramming />;
}
