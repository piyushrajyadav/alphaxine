'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const DataStrategyPage = () => {
  const pageData = {
    title: 'Data Strategy Consulting',
    subtitle: 'Strategic Data Planning and Management',
    description: 'Leverage your organization\'s data as a strategic asset through our comprehensive data strategy consulting services, designed to transform raw data into actionable insights that drive business value.',
    heroImage: '/images/services/data-strategy-hero.jpg',
    features: [
      {
        title: 'Data Assessment & Maturity Analysis',
        description: 'Comprehensive evaluation of your current data landscape, governance practices, and analytics capabilities to identify strengths, gaps, and improvement opportunities.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        title: 'Data Strategy Roadmap',
        description: 'Development of detailed data strategy roadmaps that align with business objectives and outline initiatives for data collection, storage, access, and analysis.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Data Governance Framework',
        description: 'Establishment of robust data governance structures to ensure data quality, security, compliance, and accessibility across the organization.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      },
      {
        title: 'Analytics & Insights Planning',
        description: 'Strategic guidance on implementing advanced analytics capabilities to extract meaningful insights from your data assets.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Data Architecture Design',
        description: 'Expert design of scalable data architectures that support current needs and accommodate future growth and technology evolution.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      },
      {
        title: 'Data Culture Development',
        description: 'Fostering a data-driven organizational culture with emphasis on data literacy, collaborative decision-making, and continuous improvement.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Strategic Value Creation',
        description: 'Transform your data into a strategic asset that drives business growth, operational efficiency, and competitive advantage.'
      },
      {
        title: 'Enhanced Decision Making',
        description: 'Empower leaders with accurate, timely data insights to make informed decisions with confidence and precision.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Implement robust data governance practices that ensure compliance with evolving data privacy and protection regulations.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamline data processes and eliminate silos to reduce redundancies and improve overall operational efficiency.'
      },
      {
        title: 'Innovation Acceleration',
        description: 'Leverage data-driven insights to identify new business opportunities, product innovations, and service enhancements.'
      },
      {
        title: 'Risk Mitigation',
        description: 'Proactively address data quality, security, and governance risks through strategic planning and management.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Data Strategy?',
      description: 'Connect with our expert consultants to discuss how we can help transform your data into a strategic business asset.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DataStrategyPage; 

