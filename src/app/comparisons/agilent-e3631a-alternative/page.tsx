import type { Metadata } from 'next';
import PageComponent from '@/components/pages/AgilentE3631AAlternative';

export const metadata: Metadata = {
  title: 'Agilent / Keysight E3631A Alternative: Triple Output DC Supplies',
  alternates: { canonical: '/comparisons/agilent-e3631a-alternative' },
  openGraph: { title: 'Agilent / Keysight E3631A Alternative: Triple Output DC Supplies', url: '/comparisons/agilent-e3631a-alternative' }
};

export default function Page() { return <PageComponent />; }
