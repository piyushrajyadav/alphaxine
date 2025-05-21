'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const DigitalMarketingPage = () => {
  const pageData = {
    title: 'Digital Marketing Services',
    subtitle: 'Data-Driven Marketing Solutions',
    description: 'Drive business growth with our comprehensive digital marketing services, leveraging advanced analytics, AI, and industry expertise to deliver measurable results.',
    heroImage: '/images/services/digital-marketing-hero.jpg',
    features: [
      {
        title: 'Search Engine Optimization',
        description: 'Strategic optimization of your website to improve visibility in search engine results and drive organic traffic.',
        icon: '/images/icons/seo.svg'
      },
      {
        title: 'Paid Media Management',
        description: 'Expert management of PPC advertising campaigns across search, social, and display networks to maximize ROI.',
        icon: '/images/icons/paid-media.svg'
      },
      {
        title: 'Social Media Marketing',
        description: 'Strategic social media presence management to build brand awareness, engagement, and community.',
        icon: '/images/icons/social-media.svg'
      },
      {
        title: 'Content Marketing',
        description: 'Creation and distribution of valuable, relevant content to attract and retain your target audience.',
        icon: '/images/icons/content.svg'
      },
      {
        title: 'Email Marketing',
        description: 'Development and execution of targeted email campaigns to nurture leads and drive conversions.',
        icon: '/images/icons/email.svg'
      },
      {
        title: 'Marketing Automation',
        description: 'Implementation of automation platforms to streamline marketing processes and deliver personalized experiences.',
        icon: '/images/icons/automation.svg'
      }
    ],
    benefits: [
      {
        title: 'Increased Brand Visibility',
        description: 'Enhance your online presence and reach a wider audience through strategic digital marketing efforts.'
      },
      {
        title: 'Higher Quality Leads',
        description: 'Generate more qualified leads through targeted campaigns and effective audience segmentation.'
      },
      {
        title: 'Measurable ROI',
        description: 'Track and measure marketing performance with precise metrics and data-driven insights.'
      },
      {
        title: 'Enhanced Customer Engagement',
        description: 'Build stronger relationships with your audience through personalized, relevant marketing interactions.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Stay ahead of competitors with innovative digital marketing strategies and technologies.'
      },
      {
        title: 'Scalable Growth',
        description: 'Implement marketing campaigns that can scale with your business growth and evolving objectives.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Digital Marketing?',
      description: 'Connect with our marketing experts to discuss how we can help you achieve your business growth objectives through digital marketing.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DigitalMarketingPage; 

