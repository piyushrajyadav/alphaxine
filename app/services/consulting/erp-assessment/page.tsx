'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const ERPAssessmentPage = () => {
  const pageData = {
    title: 'ERP Assessment & Selection',
    subtitle: 'Strategic Enterprise Resource Planning Evaluation',
    description: 'Make informed ERP decisions with our comprehensive assessment and selection services, designed to identify the optimal solution for your business needs and ensure successful implementation.',
    heroImage: '/images/services/erp-assessment-hero.jpg',
    features: [
      {
        title: 'Current State Analysis',
        description: 'Thorough assessment of your existing systems, business processes, and organizational requirements to establish a clear baseline.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h1m-1 4h1m-1 4h1m-5-8h1m-1 4h1m-1 4h1" />
          </svg>
        )
      },
      {
        title: 'Requirements Definition',
        description: 'Collaborative development of detailed functional and technical requirements tailored to your specific business needs and industry standards.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Vendor & Solution Evaluation',
        description: 'Comprehensive evaluation of ERP vendors and solutions against your requirements, including functionality, technology stack, cost, and support.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        )
      },
      {
        title: 'Implementation Planning',
        description: 'Development of detailed implementation roadmaps, including resource allocation, timeline estimation, and risk mitigation strategies.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'TCO & ROI Analysis',
        description: 'Detailed analysis of total cost of ownership and potential return on investment for proposed ERP solutions.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        title: 'Change Management Strategy',
        description: 'Development of change management approaches to ensure smooth transition and user adoption of the selected ERP system.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Objective Selection Process',
        description: 'Benefit from an unbiased, thorough evaluation process that ensures selection of the most suitable ERP solution for your needs.'
      },
      {
        title: 'Risk Reduction',
        description: 'Minimize implementation risks through thorough assessment, planning, and preparation before committing to a solution.'
      },
      {
        title: 'Cost Optimization',
        description: 'Avoid unnecessary expenditures by selecting a right-sized solution that meets your requirements without excess functionality.'
      },
      {
        title: 'Accelerated Implementation',
        description: 'Streamline the implementation process through detailed preparation, clear requirements, and strategic planning.'
      },
      {
        title: 'Business Process Improvement',
        description: 'Identify opportunities to enhance business processes as part of the ERP selection and implementation journey.'
      },
      {
        title: 'Enhanced User Adoption',
        description: 'Improve user acceptance and adoption through stakeholder engagement throughout the selection and implementation process.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your ERP Systems?',
      description: 'Connect with our expert consultants to discuss how we can help optimize your ERP selection and implementation journey.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ERPAssessmentPage; 

