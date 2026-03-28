import type { Metadata } from 'next';
import Glossary from '@/components/pages/Glossary';
export const metadata: Metadata = {
  alternates: { canonical: '/resources/glossary-power-supply-terms' },
  openGraph: {
    title: 'Triple Output DC Power Supply',
    url: '/resources/glossary-power-supply-terms',
  },
  title: 'Glossary of Terms',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Glossary />;
}
