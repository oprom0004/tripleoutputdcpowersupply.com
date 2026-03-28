import type { Metadata } from 'next';
import Glossary from '@/components/pages/Glossary';
export const metadata: Metadata = {
  alternates: { canonical: '/resources/glossary-power-supply-terms' },
  openGraph: {
    url: '/resources/glossary-power-supply-terms',
  },
  title: 'Glossary of Triple Output DC Power Supply Technical Terms',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Glossary />;
}
