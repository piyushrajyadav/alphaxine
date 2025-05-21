'use client';

import Image from 'next/image';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import CorporateBrochure from '@/app/components/about/CorporateBrochure';
import PageContent from '@/app/components/UI/PageContent';

const AboutUs = () => {
  return (
    <BackgroundFix>
      <div className="force-gray-bg">
        {/* Hero Section */}
        <section className="text-black py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">About Alphaxine</h1>
                <div className="h-16 bg-gray-200 rounded mb-8"></div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center justify-center">
                    Connect With Us
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link href="/company/leadership" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 inline-flex items-center justify-center">
                    Our Leadership
                  </Link>
                </div>
              </div>
              <div className="relative h-80 md:h-96">
                <Image 
                  src="/image/alphaxine team.jpeg" 
                  alt="Alphaxine Team" 
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6 text-red-600">Who We Are</h2>
                <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">15+</div>
                    <div className="text-black">Years of Excellence</div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">500+</div>
                    <div className="text-black">Projects Delivered</div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">100+</div>
                    <div className="text-black">Expert Consultants</div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div className="text-black font-bold text-3xl mb-2">98%</div>
                    <div className="text-black">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-96">
                <Image 
                  src="/image/alphaxine office.webp" 
                  alt="Alphaxine Office" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Our Core Values</h2>
              <div className="h-6 bg-gray-200 rounded max-w-3xl mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Innovation</h3>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
              
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9zm8 0h-6v6h6V9z" clipRule="evenodd" />
                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Integrity</h3>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
              
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Collaboration</h3>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
              
              <div className="p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-red-600">Excellence</h3>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image 
                  src="/image/IT_services.webp" 
                  alt="Our Approach" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="">
                <h2 className="text-3xl font-bold mb-6 text-red-600">Our Approach</h2>
                <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">1</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Understand</h3>
                      <div className="h-6 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">2</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Innovate</h3>
                      <div className="h-6 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">3</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Implement</h3>
                      <div className="h-6 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <span className="text-black font-bold">4</span>
                    </div>
                    <div className="">
                      <h3 className="text-xl font-bold mb-2 text-red-600">Optimize</h3>
                      <div className="h-6 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-black border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Ready to Transform Your Business?</h2>
            <div className="h-6 bg-gray-200 rounded max-w-3xl mx-auto mb-8"></div>
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center">
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Corporate Brochure */}
        <CorporateBrochure />

      </div>
    </BackgroundFix>
  );
};

export default AboutUs; 











