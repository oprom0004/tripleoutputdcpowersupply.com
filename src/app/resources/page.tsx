import type { Metadata } from 'next';
import ResourcesHub from '@/components/pages/ResourcesHub';
export const metadata: Metadata = {
  title: 'Triple Output DC Power Supply Resources, Glossary & Downloads',
  // description: 'Individual description here...',
};
export default function Page() {
  return <ResourcesHub />;
}
