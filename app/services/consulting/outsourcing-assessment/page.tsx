'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const OutsourcingAssessmentPage = () => {
  const pageData = {
    title: 'Outsourcing & Vendor Assessment',
    subtitle: 'Strategic Vendor Selection and Outsourcing Optimization',
    description: 'Optimize your outsourcing strategies and vendor relationships with our comprehensive assessment services, designed to enhance operational efficiency, reduce costs, and mitigate risks.',
    heroImage: '/images/services/outsourcing-assessment-hero.jpg',
    features: [
      {
        title: 'Outsourcing Strategy Development',
        description: 'Expert guidance on determining which functions to outsource based on strategic goals, core competencies, and market analysis.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Vendor Evaluation Framework',
        description: 'Development of comprehensive vendor assessment frameworks tailored to your specific business requirements and industry standards.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        )
      },
      {
        title: 'RFP Process Management',
        description: 'End-to-end management of the RFP process, from requirements definition to proposal evaluation and vendor selection.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        title: 'Contract Negotiation Support',
        description: 'Expert assistance in negotiating favorable contract terms, SLAs, pricing structures, and governance models.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        )
      },
      {
        title: 'Vendor Relationship Management',
        description: 'Implementation of effective governance frameworks to manage vendor relationships, performance, and continuous improvement.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: 'Outsourcing Risk Assessment',
        description: 'Comprehensive evaluation of operational, financial, security, and compliance risks associated with outsourcing arrangements.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Cost Optimization',
        description: 'Identify opportunities to reduce operational costs while maintaining or improving service quality and business outcomes.'
      },
      {
        title: 'Access to Specialized Expertise',
        description: 'Leverage specialized skills and technologies that would be impractical or costly to develop in-house.'
      },
      {
        title: 'Enhanced Operational Efficiency',
        description: 'Streamline operations by focusing internal resources on core business activities while outsourcing non-core functions.'
      },
      {
        title: 'Risk Mitigation',
        description: 'Identify and address potential risks associated with vendor relationships and outsourcing arrangements.'
      },
      {
        title: 'Scalability and Flexibility',
        description: 'Gain the ability to quickly scale resources up or down based on business demands and market conditions.'
      },
      {
        title: 'Strategic Vendor Alignment',
        description: 'Ensure vendors align with your business objectives and contribute to your long-term strategic success.'
      }
    ],
    cta: {
      title: 'Ready to Optimize Your Outsourcing Strategy?',
      description: 'Connect with our expert consultants to discuss how we can help enhance your vendor relationships and outsourcing outcomes.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default OutsourcingAssessmentPage; 

