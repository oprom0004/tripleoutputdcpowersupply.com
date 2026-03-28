import type { Metadata } from 'next';
import Glossary from '@/components/pages/Glossary';
export const metadata: Metadata = {
  title: 'Glossary of Terms | Triple Output DC Power Supply',
  // description: 'Individual description here...',
};
export default function Page() {
  return <Glossary />;
}
