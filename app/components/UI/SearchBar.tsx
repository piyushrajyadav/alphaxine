import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type ContentType = 'page' | 'post' | 'service' | 'article' | 'blog';

interface SearchResult {
  title: string;
  path: string;
  type: ContentType;
  description: string;
  date?: string;
  featuredImage?: string;
}

interface SearchBarProps {
  isCompact?: boolean;
  onClose?: () => void;
}

const SearchBar = ({ isCompact = false, onClose }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Add event listener for clicks outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        if (onClose) onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  // Debounce search function
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length >= 2) {
        fetchSearchResults(searchQuery);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300); // 300ms debounce
    
    return () => clearTimeout(timer);
  }, [searchQuery]);
  
  const fetchSearchResults = async (query: string) => {
    if (!query || query.length < 2) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Search failed');
      
      const data = await response.json();
      setSearchResults(data.results);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchResults([]);
      setShowResults(false);
      if (onClose) onClose();
    }
  };
  
  const handleResultClick = (path: string) => {
    router.push(path);
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
    if (onClose) onClose();
  };
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg ${isCompact ? 'w-full' : 'w-full max-w-2xl mx-auto'}`}
      ref={searchRef}
    >
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for pages, blogs, articles..."
            className="w-full py-3 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg 
              className="w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSearchResults([]);
                setShowResults(false);
              }}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg 
                className="w-5 h-5 text-gray-400 hover:text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          )}
        </div>
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
            <svg className="animate-spin h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
        
        {/* Search Results */}
        {showResults && searchResults.length > 0 && (
          <div className="absolute left-0 right-0 bg-white mt-2 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            <div className="p-2">
              <div className="text-sm font-medium text-gray-500 px-3 py-2 border-b border-gray-100">
                {searchResults.length} results found
              </div>
              <ul className="divide-y divide-gray-100">
                {searchResults.map((result, index) => (
                  <li key={index} className="hover:bg-gray-50">
                    <button
                      type="button"
                      onClick={() => handleResultClick(result.path)}
                      className="w-full text-left p-3 flex items-start"
                    >
                      {result.featuredImage && (
                        <div className="flex-shrink-0 h-12 w-12 mr-3 relative rounded overflow-hidden">
                          <Image
                            src={result.featuredImage}
                            alt={result.title}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900 truncate">{result.title}</p>
                          <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                            result.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                            result.type === 'service' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {result.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-1">{result.description}</p>
                        {result.date && (
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(result.date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-100 px-3 py-2">
                <Link 
                  href={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center justify-center w-full py-1"
                  onClick={() => {
                    if (onClose) onClose();
                  }}
                >
                  See all results
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* No results */}
        {showResults && searchQuery.length >= 2 && searchResults.length === 0 && !isLoading && (
          <div className="absolute left-0 right-0 bg-white mt-2 rounded-lg shadow-lg z-50">
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchQuery}"
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar; 