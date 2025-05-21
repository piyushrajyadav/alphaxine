'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const AIStrategyPage = () => {
  const pageData = {
    title: 'AI Strategy Consulting',
    subtitle: 'Strategic Planning for Artificial Intelligence Implementation',
    description: 'Develop a comprehensive artificial intelligence strategy that aligns with your business goals and maximizes the potential of AI technologies in your organization.',
    heroImage: '/images/services/ai-strategy-hero.jpg',
    features: [
      {
        title: 'AI Readiness Assessment',
        description: 'Comprehensive evaluation of your organization\'s current capabilities, data infrastructure, and processes to determine AI readiness and implementation priorities.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        )
      },
      {
        title: 'AI Strategy Development',
        description: 'Creation of a comprehensive AI strategy that aligns with your business objectives, including use cases, implementation roadmap, and resource planning.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        )
      },
      {
        title: 'Use Case Identification',
        description: 'Identification and prioritization of high-value AI use cases specific to your industry and business needs, with clear ROI expectations.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2.002 2.002 0 012-2h2a2.002 2.002 0 012 2m-6 9l2 2 4-4" />
          </svg>
        )
      },
      {
        title: 'Data Strategy for AI',
        description: 'Development of a data strategy that ensures you have the right data in the right format to power your AI initiatives and drive accurate insights.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )
      },
      {
        title: 'Ethical AI Framework',
        description: 'Creation of governance frameworks to ensure your AI implementation is ethical, transparent, and compliant with regulations.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: 'AI Implementation Roadmap',
        description: 'Step-by-step implementation plan that outlines the path to successful AI adoption, including technology selection, talent acquisition, and change management.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Strategic Advantage',
        description: 'Gain competitive advantage by strategically applying AI to enhance decision-making, customer experiences, and operational efficiency.'
      },
      {
        title: 'Risk Mitigation',
        description: 'Minimize risks associated with AI implementation through proper planning, governance, and ethical considerations.'
      },
      {
        title: 'Resource Optimization',
        description: 'Optimize resource allocation by focusing on high-value AI initiatives with clear ROI and business impact.'
      },
      {
        title: 'Accelerated Implementation',
        description: 'Fast-track your AI adoption with a clear roadmap and implementation strategy tailored to your organization\'s needs.'
      },
      {
        title: 'Scalable AI Solutions',
        description: 'Develop a foundation for building scalable AI capabilities that can grow and evolve with your business.'
      },
      {
        title: 'Enhanced Innovation',
        description: 'Foster a culture of innovation by strategically integrating AI into your business processes and decision-making.'
      }
    ],
    cta: {
      title: 'Ready to Develop Your AI Strategy?',
      description: 'Connect with our AI strategy consultants to discuss how we can help you harness the power of artificial intelligence for your business.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default AIStrategyPage; 

