'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/app/components/UI/PageHero';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const DataAnalyticsPage = () => {
  const services = [
    {
      title: 'Data Management',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      link: '/services/data-analytics/data-management'
    },
    {
      title: 'Data Governance',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      link: '/services/data-analytics/data-governance'
    },
    {
      title: 'Data Architecture',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: '/services/data-analytics/data-architecture'
    },
    {
      title: 'Data Warehousing/BI',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      link: '/services/data-analytics/data-warehousing'
    },
    {
      title: 'Data Lake',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      link: '/services/data-analytics/data-lake'
    },
  ];

  return (
    <BackgroundFix>
      <div className="min-h-screen force-gray-bg">
        <PageHero 
          title="Data & Analytics"
          subtitle=""
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Our Data & Analytics Services</h2>
            <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link href={service.link} key={index} className="block group">
                <div className="rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1">
                  <div className="p-6">
                    <div className="mb-4 text-red-600 group-hover:text-red-500 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{service.title}</h3>
                    <div className="h-16 bg-gray-200 rounded w-full mb-4"></div>
                    <div className="flex items-center text-red-600 font-medium group-hover:text-red-500 transition-colors">
                      Learn more
                      <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-red-50 rounded-lg p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Ready to Unlock the Value of Your Data?</h3>
            <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Schedule a Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default DataAnalyticsPage; 

