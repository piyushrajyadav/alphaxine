'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const ContentStrategyPage = () => {
  const pageData = {
    title: 'Content Strategy Services',
    subtitle: 'Strategic Content Planning & Creation',
    description: 'Develop and implement effective content strategies that engage your target audience, build brand authority, and drive conversions across all digital channels.',
    heroImage: '/images/services/content-strategy-hero.svg',
    features: [
      {
        title: 'Content Audit & Analysis',
        description: 'Comprehensive evaluation of your existing content to identify strengths, gaps, and opportunities for improvement.',
        icon: '/images/icons/audit.svg'
      },
      {
        title: 'Content Strategy Development',
        description: 'Creation of detailed content strategies aligned with your business goals, audience needs, and market trends.',
        icon: '/images/icons/strategy.svg'
      },
      {
        title: 'Brand Messaging Framework',
        description: 'Development of consistent brand messaging frameworks that communicate your value proposition effectively.',
        icon: '/images/icons/messaging.svg'
      },
      {
        title: 'Content Production & Management',
        description: 'End-to-end content creation and management services including writing, editing, design, and distribution.',
        icon: '/images/icons/production.svg'
      },
      {
        title: 'Content Performance Analysis',
        description: 'Ongoing analysis of content performance to optimize strategy and improve results over time.',
        icon: '/images/icons/analytics.svg'
      },
      {
        title: 'Multi-channel Content Distribution',
        description: 'Strategic distribution of content across appropriate channels to maximize reach and engagement.',
        icon: '/images/icons/distribution.svg'
      }
    ],
    benefits: [
      {
        title: 'Enhanced Brand Authority',
        description: 'Establish your brand as a thought leader in your industry through valuable, relevant content.'
      },
      {
        title: 'Improved Audience Engagement',
        description: 'Connect with your target audience through content that addresses their needs, interests, and pain points.'
      },
      {
        title: 'Increased Organic Traffic',
        description: 'Attract more qualified visitors to your website through strategic content optimization.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Convert more visitors into leads and customers with strategic content that guides them through the buyer journey.'
      },
      {
        title: 'Consistent Brand Voice',
        description: 'Maintain a consistent brand identity and messaging across all content channels and touchpoints.'
      },
      {
        title: 'Data-Driven Content Decisions',
        description: 'Make informed content decisions based on performance data and audience insights.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Content Strategy?',
      description: 'Connect with our content experts to discuss how we can help you develop and implement an effective content strategy for your business.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ContentStrategyPage; 

