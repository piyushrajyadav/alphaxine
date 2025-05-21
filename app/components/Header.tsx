'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky-menu' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link href="/">
              <Image 
                src="/images/logo.webp" 
                alt="Alphaxine Logo" 
                width={225} 
                height={60}
                className="transition-all duration-300 hover:opacity-90"
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link href="/" className="text-gray-800 hover:text-red-600 font-medium transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link href="#" className="text-gray-800 hover:text-red-600 font-medium transition-colors duration-300 flex items-center">
                  The Company
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      About Us
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Leadership Team
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Mission & Vision
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="#" className="text-gray-800 hover:text-red-600 font-medium transition-colors duration-300 flex items-center">
                  SAP Center of Excellence
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      SAP Services
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      SAP Specialised Services
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      SAP Staffing Services
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="#" className="text-gray-800 hover:text-red-600 font-medium transition-colors duration-300 flex items-center">
                  IT Services
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Web Development & Design
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Technology Consulting
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="#" className="bg-red-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fadeIn">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-gray-800 hover:text-red-600 font-medium transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="block text-gray-800 font-medium mb-2">The Company</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Leadership Team
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Mission & Vision
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="block text-gray-800 font-medium mb-2">SAP Center of Excellence</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SAP Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SAP Specialised Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SAP Staffing Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="block text-gray-800 font-medium mb-2">IT Services</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Web Development & Design
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Technology Consulting
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="inline-block bg-red-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
