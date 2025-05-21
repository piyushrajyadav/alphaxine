'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/app/components/UI/PageHero';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const EnterpriseApplicationsPage = () => {
  const services = [
    {
      title: 'SAP Solutions',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      link: '/services/enterprise-applications/sap'
    },
    {
      title: 'Odoo Implementation',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      link: '/services/enterprise-applications/odoo'
    },
    {
      title: 'Microsoft Solutions',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      link: '/services/enterprise-applications/microsoft'
    }
  ];

  return (
    <BackgroundFix>
      <div className="min-h-screen force-gray-bg">
        <PageHero 
          title="Enterprise Applications"
          subtitle=""
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Our Enterprise Application Services</h2>
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
            <h3 className="text-2xl font-bold text-red-600 mb-4">Need a Customized Enterprise Solution?</h3>
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

export default EnterpriseApplicationsPage; 

