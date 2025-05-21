import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import dynamic from 'next/dynamic';

const SearchResults = dynamic(() => import('@/app/components/Search/SearchResults'), {
  ssr: false,
});

export default function SearchPage() {
  return (
    <BackgroundFix>
      <SearchResults />
    </BackgroundFix>
  );
} 