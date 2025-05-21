'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchBar from '../UI/SearchBar';

interface SubmenuItem {
  name: string;
  href: string;
}

interface SubcategoryItem {
  name: string;
  items: SubmenuItem[];
}

interface MenuItem {
  name: string;
  href: string;
  dropdown?: (SubmenuItem | SubcategoryItem)[];
  hasSubcategories?: boolean;
}

interface SearchResult {
  title: string;
  path: string;
  type: string;
  description: string;
  date?: string;
  featuredImage?: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    } else {
      setActiveDropdown(name);
      setActiveSubmenu(null);
    }
  };

  const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
  };

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setHoverDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoverDropdown(null);
    }, 100);
  };

  const handleSubmenuEnter = (name: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setActiveSubmenu(name);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 100);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Show quick local suggestions immediately for UI responsiveness
    if (query.length >= 1) {
      // Provide quick local suggestions for immediate feedback
      const quickSuggestions = getQuickSuggestions(query);
      setSearchResults(quickSuggestions);
    } else {
      setSearchResults([]);
    }
    
    // Then fetch API results if query is substantial
    if (query.length > 1) {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Search failed');
        
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error searching:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Provides instant local search suggestions while API call is processing
  const getQuickSuggestions = (query: string): SearchResult[] => {
    if (!query) return [];
    
    const lowercaseQuery = query.toLowerCase();
    
    const commonPages = [
      // Main pages
      {
        title: 'Home',
        path: '/',
        type: 'page',
        description: ''
      },
      {
        title: 'About Us',
        path: '/company/about-us',
        type: 'page',
        description: ''
      },
      {
        title: 'Our Services',
        path: '/services',
        type: 'page', 
        description: ''
      },
      {
        title: 'Our Journey',
        path: '/company/journey',
        type: 'page',
        description: ''
      },
      {
        title: 'Contact Us',
        path: '/contact',
        type: 'page',
        description: ''
      },
      {
        title: 'Careers',
        path: '/careers',
        type: 'page',
        description: ''
      },
      
      // Company pages
      {
        title: 'Leadership Team',
        path: '/company/leadership',
        type: 'page',
        description: ''
      },
      {
        title: 'Mission & Vision',
        path: '/company/mission-vision',
        type: 'page',
        description: ''
      },
      
      // Industry pages
      {
        title: 'Healthcare & Education',
        path: '/industries/healthcare-education',
        type: 'page',
        description: ''
      },
      {
        title: 'IT & ITES Solutions',
        path: '/industries/it-ites',
        type: 'page',
        description: ''
      },
      {
        title: 'Manufacturing Solutions',
        path: '/industries/manufacturing',
        type: 'page',
        description: ''
      },
      {
        title: 'Retail & Logistics',
        path: '/industries/retail-logistics',
        type: 'page',
        description: ''
      },
      
      // Service pages
      {
        title: 'Data & Analytics',
        path: '/services/data-analytics',
        type: 'service',
        description: ''
      },
      {
        title: 'Consulting',
        path: '/services/consulting',
        type: 'service',
        description: ''
      },
      {
        title: 'Enterprise Applications',
        path: '/services/enterprise-applications',
        type: 'service',
        description: ''
      },
      {
        title: 'AI Solutions',
        path: '/services/automation-ai',
        type: 'service',
        description: ''
      },
      
      // Sub-pages
      {
        title: 'IT Strategy',
        path: '/services/consulting/it-strategy',
        type: 'service',
        description: ''
      },
      {
        title: 'AI Strategy',
        path: '/services/consulting/ai-strategy',
        type: 'service',
        description: ''
      },
      {
        title: 'SAP Solutions',
        path: '/services/enterprise-applications/sap',
        type: 'service',
        description: ''
      },
      {
        title: 'Generative AI',
        path: '/services/automation-ai/generative-ai',
        type: 'service',
        description: ''
      },
      
      // Approach pages
      {
        title: 'Digital Transformation',
        path: '/approach/digital-transformation',
        type: 'page',
        description: ''
      },
      {
        title: 'Implementation Methodology',
        path: '/approach/implementation-methodology',
        type: 'page',
        description: ''
      },
      
      // Insights pages
      {
        title: 'Blog',
        path: '/insights/blog',
        type: 'blog',
        description: ''
      },
      {
        title: 'Case Studies',
        path: '/insights/case-studies',
        type: 'page',
        description: ''
      }
    ];
    
    // Filter pages by query
    return commonPages.filter(page => 
      page.title.toLowerCase().includes(lowercaseQuery) || 
      page.path.toLowerCase().includes(lowercaseQuery)
    );
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchResults([]);
      setShowSearch(false);
    }
  };

  const selectSearchResult = (path: string) => {
    router.push(path);
    setSearchQuery('');
    setSearchResults([]);
    setShowSearch(false);
  };

  const closeSearchOnOutsideClick = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', closeDropdown);
    document.addEventListener('mousedown', closeSearchOnOutsideClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', closeDropdown);
      document.removeEventListener('mousedown', closeSearchOnOutsideClick);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { 
      name: 'Our Company', 
      href: '/company',
      dropdown: [
        { name: 'About Us', href: '/company/about-us' },
        { name: 'Leadership Team', href: '/company/leadership' },
        { name: 'Mission & Vision', href: '/company/mission-vision' },
        { name: 'Our Journey', href: '/company/journey' },
        { name: 'Certifications', href: '/company/certifications' },
        { name: 'Our Partners', href: '/company/partners' },
      ] 
    },
    { 
      name: 'Our Services', 
      href: '/services',
      hasSubcategories: true,
      dropdown: [
        {
          name: 'Consulting',
          items: [
            { name: 'IT Strategy', href: '/services/consulting/it-strategy' },
            { name: 'AI Strategy', href: '/services/consulting/ai-strategy' },
            { name: 'Data Strategy', href: '/services/consulting/data-strategy' },
            { name: 'Outsourcing & Vendor Assessment', href: '/services/consulting/outsourcing-assessment' },
            { name: 'ERP Assessment', href: '/services/consulting/erp-assessment' },
          ]
        },
        {
          name: 'Enterprise Applications',
          items: [
            { name: 'SAP', href: '/services/enterprise-applications/sap' },
            { name: 'Odoo', href: '/services/enterprise-applications/odoo' },
            { name: 'Microsoft', href: '/services/enterprise-applications/microsoft' },
          ]
        },
        {
          name: 'Data & Analytics',
          items: [
            { name: 'Data Management', href: '/services/data-analytics/data-management' },
            { name: 'Data Governance', href: '/services/data-analytics/data-governance' },
            { name: 'Data Architecture', href: '/services/data-analytics/data-architecture' },
            { name: 'Data Warehousing/BI', href: '/services/data-analytics/data-warehousing' },
            { name: 'Data Lake', href: '/services/data-analytics/data-lake' },
          ]
        },
        {
          name: 'Intelligent Automation & AI',
          items: [
            { name: 'AI/ML', href: '/services/automation-ai/ai-ml' },
            { name: 'Generative AI', href: '/services/automation-ai/generative-ai' },
            { name: 'Agentic AI', href: '/services/automation-ai/agentic-ai' },
          ]
        },
        {
          name: 'Business Process Outsourcing',
          items: [
            { name: 'Technology Outsourcing - Applications', href: '/services/bpo/tech-applications' },
            { name: 'Technology Outsourcing - Infrastructure', href: '/services/bpo/tech-infrastructure' },
            { name: 'Process Outsourcing - HRMS & Payroll', href: '/services/bpo/process-hrms' },
          ]
        },
        {
          name: 'Intelligent Marketing',
          items: [
            { name: 'Digital Marketing', href: '/services/marketing/digital-marketing' },
            { name: 'Content Strategy', href: '/services/marketing/content-strategy' },
            { name: 'Analytics & Insights', href: '/services/marketing/analytics' },
          ]
        },
      ] 
    },
    { 
      name: 'Products & Solutions', 
      href: '/industries',
      dropdown: [
        { name: 'Healthcare & Education', href: '/industries/healthcare-education' },
        { name: 'IT/ITES', href: '/industries/it-ites' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Retail & Logistics', href: '/industries/retail-logistics' },
      ] 
    },
    { 
      name: 'Our Approach', 
      href: '/approach',
      dropdown: [
        { name: 'Digital Transformation', href: '/approach/digital-transformation' },
        { name: 'Strategy Methodology', href: '/approach/strategy-methodology' },
        { name: 'Implementation Methodology', href: '/approach/implementation-methodology' },
      ] 
    },
    { 
      name: 'Insights', 
      href: '/insights',
      dropdown: [
        { name: 'Blog', href: '/insights/blog' },
        { name: 'Case Studies', href: '/insights/case-studies' },
        { name: 'Whitepapers', href: '/insights/whitepapers' },
      ] 
    },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isSubmenuItem = (item: any): item is SubmenuItem => {
    return 'href' in item;
  };

  return (
    <header className={`w-full py-4 bg-white ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md z-[100] animate-slideInDown' : 'relative z-[100]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="relative h-12 w-36 sm:w-48 block">
              <Image 
                src="/image/logo.webp" 
                alt="Alphaxine Logo" 
                fill
                style={{ objectFit: 'contain' }}
                className="transition-all duration-300 hover:opacity-90"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    hoverDropdown === item.name || activeDropdown === item.name
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  onClick={() => !item.dropdown && setActiveDropdown(null)}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg 
                      className={`inline-block ml-1 h-4 w-4 transition-transform ${
                        (hoverDropdown === item.name || activeDropdown === item.name) ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Display dropdown menu if this item has one and is active */}
                {item.dropdown && (hoverDropdown === item.name || activeDropdown === item.name) && (
                  <div className={`absolute left-0 mt-0 ${item.hasSubcategories ? 'w-64' : 'w-60'} bg-white shadow-xl rounded-b-lg z-20 py-2`}>
                    {item.dropdown.map((dropdownItem, idx) => {
                      if (isSubmenuItem(dropdownItem)) {
                        // Regular dropdown items (no submenu)
                        return (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoverDropdown(null);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        );
                      } else {
                        // Subcategory with submenu
                        return (
                          <div 
                            key={dropdownItem.name}
                            className="relative"
                            onMouseEnter={() => handleSubmenuEnter(dropdownItem.name)}
                            onMouseLeave={handleSubmenuLeave}
                          >
                            <button
                              className={`flex items-center justify-between w-full px-4 py-2 text-sm ${
                                activeSubmenu === dropdownItem.name ? 'bg-gray-100 text-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                              }`}
                            >
                              {dropdownItem.name}
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            
                            {/* Submenu */}
                            {activeSubmenu === dropdownItem.name && (
                              <div className="absolute left-full top-0 w-72 bg-white shadow-xl rounded-lg z-30 py-2">
                                {dropdownItem.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setHoverDropdown(null);
                                      setActiveSubmenu(null);
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            ))}
            
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="ml-2 p-2 text-gray-700 hover:text-red-600 transition-colors duration-300 focus:outline-none"
              aria-label="Search"
            >
              <svg 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-700 hover:text-red-600 transition-colors duration-300 focus:outline-none"
              aria-label="Search"
            >
              <svg 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-red-600 transition-colors duration-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Search Bar Overlay */}
        {showSearch && (
          <div 
            className="fixed inset-0 z-50"
            onClick={() => setShowSearch(false)}
          >
            <div 
              className="absolute right-0 top-20 bg-white shadow-md z-50 border border-gray-200 rounded-lg mr-4 w-96"
              onClick={(e) => e.stopPropagation()}
              ref={searchRef}
            >
              <form onSubmit={handleSearchSubmit} className="p-3">
                <div className="relative">
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    placeholder="Search all pages..."
                    className="w-full py-2 pl-8 pr-8 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 text-sm"
                    onChange={handleSearch}
                    autoFocus
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <svg 
                      className="w-4 h-4 text-gray-400" 
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
                  
                  {/* Loading indicator */}
                  {isLoading ? (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <svg className="animate-spin h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setSearchResults([]);
                        setShowSearch(false);
                      }}
                      className="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <svg 
                        className="w-4 h-4 text-gray-400 hover:text-gray-600" 
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
                
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="mt-2 max-h-[60vh] overflow-y-auto">
                    <div className="text-xs text-gray-500 px-3 py-1 border-b border-gray-100">
                      {searchResults.length} results found
                    </div>
                    <ul className="divide-y divide-gray-100">
                      {searchResults.map((result, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            className="w-full text-left py-2 px-2 hover:bg-gray-50 flex flex-col"
                            onClick={() => selectSearchResult(result.path)}
                          >
                            <div className="flex items-center">
                              <span className="font-medium text-gray-800 text-sm">{result.title}</span>
                              <span className="ml-2 px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">{result.type}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">{result.description}</p>
                            <span className="text-xs text-gray-400 mt-0.5">{result.path}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    
                    {/* See all results link */}
                    {searchResults.length > 5 && (
                      <div className="text-center py-2 border-t border-gray-100">
                        <Link 
                          href={`/search?q=${encodeURIComponent(searchQuery)}`}
                          className="text-xs text-red-600 hover:text-red-700 font-medium"
                          onClick={() => setShowSearch(false)}
                        >
                          See all results ({searchResults.length})
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                
                {/* No results */}
                {searchQuery.length > 1 && searchResults.length === 0 && !isLoading && (
                  <div className="mt-2 p-2 text-center text-sm text-gray-500">
                    No results found
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 rounded-md"
                      aria-expanded={activeDropdown === item.name}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200 ml-4">
                        {item.dropdown.map((dropdownItem, idx) => {
                          if (isSubmenuItem(dropdownItem)) {
                            // Regular dropdown item
                            return (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 active:bg-gray-100 rounded-md"
                                onClick={() => {
                                  // Close menu immediately after click
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                  setActiveSubmenu(null);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            );
                          } else {
                            // Category with submenu
                            return (
                              <div key={dropdownItem.name} className="py-1">
                                <button
                                  onClick={() => {
                                    if (activeSubmenu === dropdownItem.name) {
                                      setActiveSubmenu(null);
                                    } else {
                                      setActiveSubmenu(dropdownItem.name);
                                    }
                                  }}
                                  className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 active:bg-gray-100 rounded-md"
                                  aria-expanded={activeSubmenu === dropdownItem.name}
                                >
                                  <span>{dropdownItem.name}</span>
                                  <svg
                                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                                      activeSubmenu === dropdownItem.name ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                                {activeSubmenu === dropdownItem.name && (
                                  <div className="pl-4 mt-1 space-y-1 border-l border-gray-200 ml-4">
                                    {dropdownItem.items.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block px-4 py-2 text-xs text-gray-600 hover:text-red-600 hover:bg-gray-50 active:bg-gray-100 rounded-md"
                                        onClick={() => {
                                          // Close menu immediately after click
                                          setIsOpen(false);
                                          setActiveDropdown(null);
                                          setActiveSubmenu(null);
                                        }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50 active:bg-gray-100 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 