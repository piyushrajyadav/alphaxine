import dynamic from 'next/dynamic';

const SearchResultsPageDynamic = dynamic(() => import('./SearchResultsPageClient'), { ssr: false });

export const dynamicParam = "force-dynamic";

export default function SearchPage() {
  return <SearchResultsPageDynamic />;
} 