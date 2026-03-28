import type { Metadata } from 'next';
import CategoryPage from '@/components/sections/CategoryPage';

export const metadata: Metadata = {
  title: 'Top Picks: High-Performance Triple Output DC Power Supplies',
  alternates: { canonical: '/etm-series' },
  openGraph: {
    title: 'Top Picks: High-Performance Triple Output DC Power Supplies',
    url: '/etm-series',
  },
};

export default function Page() {
  return <CategoryPage />;
}
