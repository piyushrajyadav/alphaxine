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
    <header className={`w-full py-4 ${isSticky ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-50 animate-slideInDown' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo relative h-16 w-48">
            <Link href="/">
              <Image 
                src="/images/logo.svg" 
                alt="Alphaxine Logo" 
                fill
                style={{ objectFit: 'contain' }}
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
                    <Link href="/company/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      About Us
                    </Link>
                    <Link href="/company/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Leadership Team
                    </Link>
                    <Link href="/company/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Mission & Vision
                    </Link>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="/services" className="text-gray-800 hover:text-red-600 font-medium transition-colors duration-300 flex items-center">
                  Our Services
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="/services/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Consulting
                    </Link>
                    <Link href="/services/enterprise-applications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Enterprise Applications
                    </Link>
                    <Link href="/services/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Data & Analytics
                    </Link>
                    <Link href="/services/intelligent-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Intelligent Automation & AI
                    </Link>
                    <Link href="/services/business-process-outsourcing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Business Process Outsourcing
                    </Link>
                    <Link href="/services/intelligent-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Intelligent Marketing
                    </Link>
                    <Link href="/services/sap-center-of-excellence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      SAP Center of Excellence
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/careers" className="text-gray-800 hover:text-red-600 font-medium transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="bg-red-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
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
                      href="/company/about" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/company/leadership" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Leadership Team
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/company/mission" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Mission & Vision
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="block text-gray-800 font-medium mb-2">Our Services</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link 
                      href="/services/consulting" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/enterprise-applications" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Enterprise Applications
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/data-analytics" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Data & Analytics
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/intelligent-automation" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Intelligent Automation & AI
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/business-process-outsourcing" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Business Process Outsourcing
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/intelligent-marketing" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Intelligent Marketing
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/sap-center-of-excellence" 
                      className="block text-gray-700 hover:text-red-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SAP Center of Excellence
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="block text-gray-800 hover:text-red-600 font-medium transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="inline-block bg-red-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
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
