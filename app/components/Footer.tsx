'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your API
      console.log('Subscribing email:', email);
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(null), 3000);
    } else {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(null), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-600"></div>
        <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-red-600"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 transform transition-transform hover:scale-105">
              <Image 
                src="/images/logo-white.svg" 
                alt="alphaxine Logo" 
                width={120} 
                height={30}
                className="h-8 w-auto"
              />
            </Link>
           
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
              </h3>
              <p className="text-gray-400 mb-2">23b imagine tech park, Salt lake sector 5, Kolkata, West Bengal</p>
              <p className="text-gray-400 mb-2">📞 +91 80 1234 5678</p>
              <p className="text-gray-400">✉️ contact@alphaxine.com</p>
            </div>

            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/alphaxine" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>

              <Link href="https://x.com/Alphaxine1" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </Link>

              <Link href="https://www.instagram.com/alphaxine" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>

              <a 
                href="https://www.linkedin.com/company/alphaxine/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path 
                    fillRule="evenodd" 
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about-us" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/leadership" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/company/mission-vision" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/company/journey" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Our Journey
                </Link>
              </li>
              <li>
                <Link href="/company/certifications" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/company/partners" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/consulting" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-applications" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Enterprise Applications
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Data & Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/automation-ai" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Intelligent Automation & AI
                </Link>
              </li>
              <li>
                <Link href="/services/business-process-outsourcing" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Business Process Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/services/intelligent-marketing" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Intelligent Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Solutions & Approach */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              Industries & Approach
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/industries/healthcare-education" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Healthcare & Education
                </Link>
              </li>
              <li>
                <Link href="/industries/it-ites" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  IT/ITES
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/approach/digital-transformation" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/approach/strategy-methodology" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-red-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  Strategy Methodology
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600"></span>
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter to receive updates on our latest services, offers, and industry insights.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button
                type="submit"
                className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
              {subscribeStatus === 'success' && (
                <div className="mt-3 text-green-400 text-sm">
                  Thank you for subscribing!
                </div>
              )}
              {subscribeStatus === 'error' && (
                <div className="mt-3 text-red-400 text-sm">
                  Please enter a valid email address.
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} alphaxine. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
