import type { Metadata } from 'next';
import EtmSeries from '@/components/pages/EtmSeries';
export const metadata: Metadata = {
  title: 'Top Picks | Programmable Triple Output DC Power Supplies',
  // description: 'Individual description here...',
};
export default function Page() {
  return <EtmSeries />;
}
