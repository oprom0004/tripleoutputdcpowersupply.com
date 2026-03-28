import type { Metadata } from 'next';
import Education from '@/components/pages/Education';
export const metadata: Metadata = {
  alternates: { canonical: '/applications/educational-university-labs' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/applications/educational-university-labs',
  },
  title: 'Educational Labs',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Education />;
}
