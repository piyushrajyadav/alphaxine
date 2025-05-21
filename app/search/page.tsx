'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../components/UI/SearchBar';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface SearchResult {
  title: string;
  path: string;
  type: string;
  description: string;
  date?: string;
  featuredImage?: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) return;
    const fetchResults = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Search request failed');
        const data = await response.json();
        setResults(data.results);
      } catch (err) {
        console.error('Search error:', err);
        setError('Failed to load search results. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  // Group results by type
  const groupedResults = results.reduce((acc, result) => {
    const type = result.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <BackgroundFix>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-red-600">Search Results</h1>
          <div className="mb-8">
            <SearchBar />
          </div>
          {query ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">
                {results.length > 0
                  ? `Found ${results.length} results for "${query}"`
                  : `No results found for "${query}"`}
              </h2>
              {loading ? (
                <div className="flex justify-center py-12">
                  <svg className="animate-spin h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : error ? (
                <div className="text-red-600 py-6 text-center">{error}</div>
              ) : (
                <div className="space-y-8">
                  {Object.entries(groupedResults).map(([type, typeResults]) => (
                    <div key={type}>
                      <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-100 capitalize">
                        {type} ({typeResults.length})
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {typeResults.map((result, index) => (
                          <Link
                            key={index}
                            href={result.path}
                            className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                          >
                            {result.featuredImage && (
                              <div className="relative h-40 w-full">
                                <Image
                                  src={result.featuredImage}
                                  alt={result.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-medium text-lg text-red-600 line-clamp-1">{result.title}</h4>
                                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full flex-shrink-0 ${
                                  result.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                                  result.type === 'service' ? 'bg-green-100 text-green-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {result.type}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm line-clamp-3">{result.description}</p>
                              {result.date && (
                                <p className="text-xs text-gray-400 mt-2">
                                  {new Date(result.date).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-xl font-semibold mb-4">Enter a search term to get started</h2>
              <p className="text-gray-600">
                Search for pages, blogs, articles, and more across our website.
              </p>
            </div>
          )}
        </div>
      </div>
    </BackgroundFix>
  );
} 