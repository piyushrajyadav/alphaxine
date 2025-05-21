import React from 'react';
import PageHero from '@/app/components/UI/PageHero';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const BPOPage = () => {
  const services = [
    {
      title: 'IT Services',
      description: '',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services/bpo/it-services'
    },
    {
      title: 'Back Office Operations',
      description: '',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '/services/bpo/back-office'
    },
    {
      title: 'Customer Support',
      description: '',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      link: '/services/bpo/customer-support'
    },
    {
      title: 'Finance & Accounting',
      description: '',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services/bpo/finance-accounting'
    },
    {
      title: 'Human Resources',
      description: '',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: '/services/bpo/human-resources'
    },
    {
      title: 'Supply Chain Management',
      description: '',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      link: '/services/bpo/supply-chain'
    }
  ];

  return (
    <BackgroundFix>
      <div className="min-h-screen force-gray-bg">
        <PageHero 
          title="Business Process Outsourcing"
          subtitle=""
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Our Business Process Outsourcing Services</h2>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-lg shadow-md overflow-hidden group hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href={service.link}>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{service.title}</h3>
                    <div className="h-16 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-red-50 rounded-lg p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Looking for Customized BPO Solutions?</h3>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-6"></div>
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

export default BPOPage; 

