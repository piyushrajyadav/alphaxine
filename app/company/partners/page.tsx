'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  partnershipType: 'technology' | 'strategic' | 'implementation';
  website: string;
}

const Partners = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'technology' | 'strategic' | 'implementation'>('all');

  const partners: Partner[] = [
    {
      id: 'sap',
      name: 'SAP',
      logo: '/image/sap.png',
      description: '',
      partnershipType: 'technology',
      website: 'https://www.sap.com'
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: '/image/microsoft.avif',
      description: '',
      partnershipType: 'technology',
      website: 'https://www.microsoft.com'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services',
      logo: '/image/aws.png',
      description: '',
      partnershipType: 'technology',
      website: 'https://aws.amazon.com'
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      logo: '/image/salesforce.jpg',
      description: '',
      partnershipType: 'technology',
      website: 'https://www.salesforce.com'
    },
    {
      id: 'odoo',
      name: 'Odoo',
      logo: '/image/odoo.webp',
      description: '',
      partnershipType: 'implementation',
      website: 'https://www.odoo.com'
    },
    {
      id: 'oracle',
      name: 'Oracle',
      logo: '/image/oracle.png',
      description: '',
      partnershipType: 'technology',
      website: 'https://www.oracle.com'
    },
    {
      id: 'ibm',
      name: 'IBM',
      logo: '/image/ibm.png',
      description: '',
      partnershipType: 'strategic',
      website: 'https://www.ibm.com'
    },
    {
      id: 'google-cloud',
      name: 'Google Cloud',
      logo: '/image/google cloud.png',
      description: '',
      partnershipType: 'technology',
      website: 'https://cloud.google.com'
    },
    {
      id: 'uipath',
      name: 'UiPath',
      logo: '/image/ui path.png',
      description: '',
      partnershipType: 'implementation',
      website: 'https://www.uipath.com'
    },
    {
      id: 'snowflake',
      name: 'Snowflake',
      logo: '/image/snowflake.png',
      description: '',
      partnershipType: 'technology',
      website: 'https://www.snowflake.com'
    }
  ];

  const filteredPartners = activeFilter === 'all' 
    ? partners 
    : partners.filter(partner => partner.partnershipType === activeFilter);

  return (
      <BackgroundFix>
      <div className="bg-gray-50 bg-gray-100 bg-gray-100 force-gray-bg">
      {/* Hero Section */}
      <section className="text-black py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Our Partners</h1>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Partners Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Technology Ecosystem Partners</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === 'all' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                All Partners
              </button>
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === 'technology' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('technology')}
              >
                Technology
              </button>
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === 'strategic' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('strategic')}
              >
                Strategic
              </button>
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === 'implementation' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter('implementation')}
              >
                Implementation
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-40 flex items-center justify-center p-6">
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-red-600">{partner.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      partner.partnershipType === 'technology' ? 'bg-blue-100 text-black' :
                      partner.partnershipType === 'strategic' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {partner.partnershipType.charAt(0).toUpperCase() + partner.partnershipType.slice(1)} Partner
                    </span>
                  </div>
                  <div className="h-16 bg-gray-200 rounded w-full mb-6"></div>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-black hover:text-black"
                  >
                    Visit Partner Website
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Benefits of Our Partnerships</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Leading Technology Access</h3>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Expert Collaboration</h3>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Enhanced Client Outcomes</h3>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Our Partnership Process</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-0 flex-1 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-600">Initial Engagement</h3>
              <div className="h-16 bg-gray-200 rounded w-full max-w-xs mx-auto"></div>
            </motion.div>

            <div className="hidden md:block w-12">
              <div className="w-full h-1 bg-red-200 relative top-10">
                <div className="w-3 h-3 bg-red-600 rounded-full absolute -right-1 -top-1"></div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-0 flex-1 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-600">Collaborative Planning</h3>
              <div className="h-16 bg-gray-200 rounded w-full max-w-xs mx-auto"></div>
            </motion.div>

            <div className="hidden md:block w-12">
              <div className="w-full h-1 bg-red-200 relative top-10">
                <div className="w-3 h-3 bg-red-600 rounded-full absolute -right-1 -top-1"></div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center flex-1 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-600">Joint Solutions Delivery</h3>
              <div className="h-16 bg-gray-200 rounded w-full max-w-xs mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-black border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-600">Become Our Partner</h2>
          <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto mb-8"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center justify-center">
              Contact Our Partnership Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      </div>
      </BackgroundFix>
  );
};

export default Partners; 










