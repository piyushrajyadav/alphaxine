'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/app/components/UI/PageHero';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const AutomationAIPage = () => {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: '/services/automation-ai/ai-ml'
    },
    {
      title: 'Generative AI',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/services/automation-ai/generative-ai'
    },
    {
      title: 'Agentic AI',
      description: '',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      link: '/services/automation-ai/agentic-ai'
    }
  ];

  return (
    <BackgroundFix>
      <div className="min-h-screen force-gray-bg">
        <PageHero 
          title="Intelligent Automation & AI"
          subtitle=""
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Our Intelligent Automation & AI Services</h2>
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
            <h3 className="text-2xl font-bold text-red-600 mb-4">Ready to Transform with AI & Automation?</h3>
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

export default AutomationAIPage; 

