'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const OurJourney = () => {
  const timelineEvents = [
    {
      year: '2010',
      title: 'Foundation',
      description: '',
      image: '/image/foundation.jpg',
      achievements: [
        '',
        '',
        ''
      ]
    },
    {
      year: '2012',
      title: 'Early Growth',
      description: '',
      image: '/image/earlty growth.jpg',
      achievements: [
        '',
        '',
        ''
      ]
    },
    {
      year: '2020',
      title: 'Digital Acceleration',
      description: '',
      image: '/image/Digital Acceleration.jpg',
      achievements: [
        '',
        '',
        ''
      ]
    },
    {
      year: '2023',
      title: 'Present Day',
      description: '',
      image: '/image/Present Day.jpg',
      achievements: [
        '',
        '',
        ''
      ]
    },
  ];

  return (
      <BackgroundFix>
      <div className="bg-gray-50 bg-gray-100 bg-gray-100 force-gray-bg">
      {/* Hero Section */}
      <section className="text-black py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Our Journey So Far</h1>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Our Growth Timeline</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>

          <div className="relative">
            {/* Vertical Line - Only visible on medium and up screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-red-600"></div>

            {timelineEvents.map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin:"-100px" }}
                className="relative mb-16 md:mb-24"
              >
                {/* For mobile, display all elements in a standard vertical layout */}
                <div className="md:hidden">
                  {/* Year marker */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-2 h-16 bg-red-600 mb-2"></div>
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-red-600 flex items-center justify-center shadow-lg">
                      <span className="text-red-600 font-bold text-xl">{event.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mb-6">
                    <div className="p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-red-600 mb-2">{event.title}</h3>
                      <div className="h-5 bg-gray-200 rounded w-full mb-4"></div>
                      <div className="grid grid-cols-1 gap-2">
                        {event.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="h-5 bg-gray-200 rounded w-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-full">
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* For desktop, create true zigzag layout with alternating content/image positions */}
                <div className="hidden md:flex items-center">
                  {/* Timeline Year Marker - Always in center */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-red-600">
                      <span className="text-red-600 font-bold text-xl">{event.year}</span>
                    </div>
                  </div>
                  
                  {/* For even index items (0, 2, 4...) - Content on LEFT, Image on RIGHT */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-16 text-right">
                        <div className="p-6 rounded-lg shadow-lg">
                          <h3 className="text-2xl font-bold text-red-600 mb-2">{event.title}</h3>
                          <div className="h-5 bg-gray-200 rounded w-full mb-4"></div>
                          <div className="grid grid-cols-1 gap-2 justify-items-end">
                            {event.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start flex-row-reverse">
                                <svg className="w-5 h-5 text-red-600 mt-1 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div className="h-5 bg-gray-200 rounded w-full"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 pl-16">
                        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                          <Image 
                            src={event.image} 
                            alt={event.title} 
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    /* For odd index items (1, 3, 5...) - Image on LEFT, Content on RIGHT */
                    <>
                      <div className="w-1/2 pr-16">
                        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                          <Image 
                            src={event.image} 
                            alt={event.title} 
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 pl-16">
                        <div className="p-6 rounded-lg shadow-lg">
                          <h3 className="text-2xl font-bold text-red-600 mb-2">{event.title}</h3>
                          <div className="h-5 bg-gray-200 rounded w-full mb-4"></div>
                          <div className="grid grid-cols-1 gap-2">
                            {event.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start">
                                <svg className="w-5 h-5 text-red-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <div className="h-5 bg-gray-200 rounded w-full"></div>
                            </div>
                          ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Our Global Presence</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>

          <div className="relative h-96 md:h-[32rem] mb-12">
            <Image 
              src="/image/global-presence-map.png" 
              alt="Alphaxine Global Presence" 
              fill
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black text-red-600">Our Offices</h3>
              
            </div>
            
            {/* Additional Global Presence Content */}
            <div className="p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black text-red-600">Global Workforce</h3>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black text-red-600">Delivery Capabilities</h3>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-full"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Our Vision for the Future</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-full"></div>
                <div className="h-6 bg-gray-200 rounded w-full"></div>
                <div className="h-6 bg-gray-200 rounded w-full"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="h-5 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="h-5 bg-gray-200 rounded w-full"></div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="h-5 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
            
            <div className="relative h-80 md:h-96">
              <Image 
                src="/image/future-vision.jpg" 
                alt="Alphaxine Future Vision" 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-black border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-600">Join Us on Our Journey</h2>
          <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto mb-8"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center justify-center">
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/careers" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 inline-flex items-center justify-center">
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
      </div>
    </BackgroundFix>
  );
};

export default OurJourney; 










