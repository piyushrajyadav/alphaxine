'use client';

import React from 'react';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const ITStrategyPage = () => {
  const pageData = {
    title: 'IT Strategy Consulting',
    subtitle: 'Strategic IT Planning and Roadmap Development',
    description: 'Align your technology initiatives with business goals through our comprehensive IT strategy consulting services, designed to optimize your IT investments and drive digital transformation.',
    heroImage: '/images/services/it-strategy-hero.jpg',
    features: [
      {
        title: 'IT Assessment & Analysis',
        description: 'Comprehensive evaluation of your current IT infrastructure, applications, and capabilities to identify strengths, weaknesses, and improvement opportunities.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Technology Roadmap Development',
        description: 'Creation of detailed IT roadmaps that outline strategic technology initiatives aligned with your business objectives and market trends.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        )
      },
      {
        title: 'IT Governance Framework',
        description: 'Establishment of robust governance structures to ensure IT investments deliver expected value and comply with regulatory requirements.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        )
      },
      {
        title: 'Digital Transformation Planning',
        description: 'Strategic guidance on leveraging emerging technologies to transform business models and enhance competitive advantage.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: 'IT Investment Optimization',
        description: 'Evaluation and prioritization of IT investments to maximize ROI and business impact while optimizing total cost of ownership.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: 'Change Management',
        description: 'Structured approach to transitioning organizations from current state to desired future state with minimal disruption.',
        svg: (
          <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      }
    ],
    benefits: [
      {
        title: 'Strategic Alignment',
        description: 'Ensure your IT initiatives directly support your business goals and objectives, maximizing the impact of your technology investments.'
      },
      {
        title: 'Cost Optimization',
        description: 'Identify opportunities to reduce IT costs while improving service delivery and organizational capabilities.'
      },
      {
        title: 'Enhanced Agility',
        description: 'Develop flexible IT strategies that allow your organization to quickly adapt to changing market conditions and business requirements.'
      },
      {
        title: 'Risk Mitigation',
        description: 'Proactively address technological, operational, and security risks through strategic planning and governance frameworks.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Leverage emerging technologies to differentiate your business and create sustainable competitive advantages in your market.'
      },
      {
        title: 'Innovation Enablement',
        description: 'Create an IT foundation that supports and accelerates business innovation and growth initiatives.'
      }
    ],
    cta: {
      title: 'Ready to Develop Your IT Strategy?',
      description: 'Connect with our expert consultants to discuss how we can help align your technology initiatives with your business objectives.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ITStrategyPage; 

