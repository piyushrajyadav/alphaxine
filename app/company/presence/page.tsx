'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    x: number;
    y: number;
  };
}

interface Region {
  id: string;
  name: string;
  description: string;
  offices: Office[];
}

const GlobalPresence = () => {
  const [activeRegion, setActiveRegion] = useState<string>('all');
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);

  const regions: Region[] = [
    {
      id: 'north-america',
      name: 'North America',
      description: 'Our North American operations serve major markets across the United States and Canada, with specialized teams focusing on healthcare, finance, and technology sectors.',
      offices: [
        {
          id: 'nyc',
          city: 'New York',
          country: 'USA',
          address: '555 Madison Avenue, 5th Floor, New York, NY 10022',
          phone: '+1 (212) 555-7890',
          email: 'nyc@alphaxine.com',
          coordinates: { x: 29, y: 35 }
        },
        {
          id: 'sf',
          city: 'San Francisco',
          country: 'USA',
          address: '101 California Street, Suite 2500, San Francisco, CA 94111',
          phone: '+1 (415) 555-6543',
          email: 'sf@alphaxine.com',
          coordinates: { x: 18, y: 36 }
        },
        {
          id: 'toronto',
          city: 'Toronto',
          country: 'Canada',
          address: '200 Bay Street, Suite 3400, Toronto, ON M5J 2J2',
          phone: '+1 (416) 555-8732',
          email: 'toronto@alphaxine.com',
          coordinates: { x: 30, y: 32 }
        }
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      description: 'Our European presence spans major business hubs, offering digital transformation services tailored to the unique regulatory and market environments of the region.',
      offices: [
        {
          id: 'london',
          city: 'London',
          country: 'United Kingdom',
          address: '110 Bishopsgate, London EC2N 4AY',
          phone: '+44 20 7946 0321',
          email: 'london@alphaxine.com',
          coordinates: { x: 47, y: 30 }
        },
        {
          id: 'frankfurt',
          city: 'Frankfurt',
          country: 'Germany',
          address: 'Taunusanlage 8, 60329 Frankfurt am Main',
          phone: '+49 69 1234 5678',
          email: 'frankfurt@alphaxine.com',
          coordinates: { x: 50, y: 31 }
        },
        {
          id: 'paris',
          city: 'Paris',
          country: 'France',
          address: '21 Rue de Berri, 75008 Paris',
          phone: '+33 1 40 73 30 00',
          email: 'paris@alphaxine.com',
          coordinates: { x: 48, y: 32 }
        }
      ]
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific',
      description: 'Our APAC operations are centered in key technology and financial hubs, delivering innovative solutions for the fastest-growing markets in the world.',
      offices: [
        {
          id: 'singapore',
          city: 'Singapore',
          country: 'Singapore',
          address: 'One Raffles Quay, North Tower #18-01, Singapore 048583',
          phone: '+65 6123 4567',
          email: 'singapore@alphaxine.com',
          coordinates: { x: 76, y: 52 }
        },
        {
          id: 'sydney',
          city: 'Sydney',
          country: 'Australia',
          address: '1 O\'Connell Street, Sydney NSW 2000',
          phone: '+61 2 8123 4567',
          email: 'sydney@alphaxine.com',
          coordinates: { x: 88, y: 66 }
        },
        {
          id: 'bangalore',
          city: 'Bangalore',
          country: 'India',
          address: 'Prestige Trade Tower, Palace Road, Bangalore 560001',
          phone: '+91 80 1234 5678',
          email: 'bangalore@alphaxine.com',
          coordinates: { x: 68, y: 45 }
        },
        {
          id: 'tokyo',
          city: 'Tokyo',
          country: 'Japan',
          address: 'Marunouchi Building, 2-4-1 Marunouchi, Chiyoda-ku, Tokyo 100-6308',
          phone: '+81 3 1234 5678',
          email: 'tokyo@alphaxine.com',
          coordinates: { x: 85, y: 36 }
        }
      ]
    }
  ];

  const getAllOffices = (): Office[] => {
    return regions.flatMap(region => region.offices);
  };

  const displayedOffices = activeRegion === 'all' 
    ? getAllOffices() 
    : regions.find(r => r.id === activeRegion)?.offices || [];
  
  const handleOfficeClick = (office: Office) => {
    setSelectedOffice(office);
  };

  const handleOfficePin = (e: React.MouseEvent, office: Office) => {
    e.stopPropagation();
    setSelectedOffice(office);
  };

  const handleCloseOfficeDetails = () => {
    setSelectedOffice(null);
  };

  return (
      <BackgroundFix>
        <div className="bg-gray-50 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Global Presence</h1>
            <p className="text-xl text-black mb-8">
              With offices spanning key global markets, we deliver digital transformation solutions worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Where We Operate</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our strategic locations allow us to serve clients across different time zones while maintaining consistent quality and service excellence.
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeRegion === 'all' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveRegion('all')}
              >
                All Regions
              </button>
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeRegion === region.id ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveRegion(region.id)}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>

          {/* World Map with Office Markers */}
          <div className="relative mb-12">
            <div className="aspect-[1.77/1] relative bg-blue-50 rounded-xl overflow-hidden border border-gray-200">
              <Image
                src="/images/world-map.jpg"
                alt="World Map"
                fill
                className="object-cover"
              />
              
              {displayedOffices.map((office) => (
                <button
                  key={office.id}
                  className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ 
                    left: `${office.coordinates.x}%`, 
                    top: `${office.coordinates.y}%` 
                  }}
                  onClick={(e) => handleOfficePin(e, office)}
                >
                  <span className="flex h-6 w-6">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative rounded-full h-6 w-6 bg-red-600 flex items-center justify-center text-white">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-50 rounded-md shadow-lg p-2 text-sm text-left opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <div className="font-bold">{office.city}, {office.country}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Office Details Modal */}
          {selectedOffice && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseOfficeDetails}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-lg shadow-xl max-w-md w-full m-4" 
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-40 bg-gray-900 rounded-t-lg overflow-hidden">
                  <Image
                    src={`/images/offices/${selectedOffice.id}.jpg`}
                    alt={`${selectedOffice.city} Office`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                  <button 
                    className="absolute top-2 right-2 w-8 h-8 bg-gray-50/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-50/40 transition-colors"
                    onClick={handleCloseOfficeDetails}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{selectedOffice.city}</h3>
                    <p>{selectedOffice.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-black mb-1">Address:</div>
                    <p className="text-black">{selectedOffice.address}</p>
                  </div>
                  <div className="mb-4">
                    <div className="font-semibold text-black mb-1">Contact:</div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-black">{selectedOffice.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-black">{selectedOffice.email}</span>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <Link href="/contact" className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Contact This Office
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedOffices.map((office) => (
              <motion.div 
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleOfficeClick(office)}
              >
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src={`/images/offices/${office.id}.jpg`}
                    alt={`${office.city} Office`}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-black mb-1">{office.city}</h3>
                  <p className="text-black mb-4">{office.country}</p>
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-black text-sm">{office.address}</p>
                  </div>
                  <button
                    className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    <span>View Details</span>
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Global Client Base</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              We proudly serve clients in over 30 countries across 6 continents, delivering tailored digital transformation solutions for diverse industries and markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/client-map.jpg"
                  alt="Client Distribution Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-50">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-black">Client Distribution</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-black font-medium">North America</span>
                      <span className="text-black font-bold">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-black font-medium">Europe</span>
                      <span className="text-black font-bold">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-black font-medium">Asia Pacific</span>
                      <span className="text-black font-bold">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-black font-medium">Middle East & Africa</span>
                      <span className="text-black font-bold">7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '7%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-black font-medium">Latin America</span>
                      <span className="text-black font-bold">3%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '3%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
                  <div className="text-black text-2xl font-bold">150+</div>
                  <div className="text-black text-sm">Global Clients</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
                  <div className="text-black text-2xl font-bold">30+</div>
                  <div className="text-black text-sm">Countries</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
                  <div className="text-black text-2xl font-bold">12+</div>
                  <div className="text-black text-sm">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Industries We Serve Globally</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our global expertise spans across multiple industries, delivering specialized digital transformation solutions tailored to each sector's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Healthcare & Life Sciences', icon: 'medical-services' },
              { name: 'Banking & Financial Services', icon: 'account-balance' },
              { name: 'Manufacturing', icon: 'precision-manufacturing' },
              { name: 'Retail & Consumer Goods', icon: 'shopping-cart' },
              { name: 'Technology & Telecom', icon: 'devices' },
              { name: 'Education', icon: 'school' },
              { name: 'Energy & Utilities', icon: 'flash-on' },
              { name: 'Logistics & Transportation', icon: 'local-shipping' }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src={`/images/icons/${industry.icon}.svg`}
                    alt={industry.name}
                    width={30}
                    height={30}
                    className="text-black"
                  />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner Globally?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect with our global team to discuss how we can help your organization achieve digital transformation success, no matter where you are located.
          </p>
          <Link href="/contact" className="bg-gray-50 text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 inline-flex items-center">
            Contact Us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
};

export default GlobalPresence; 










