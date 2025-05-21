'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const MicrosoftPage = () => {
  const pageData = {
    title: 'Microsoft Services',
    subtitle: 'Comprehensive Microsoft Solutions & Support',
    description: 'Maximize the value of your Microsoft investment with our end-to-end services covering Dynamics 365, Power Platform, Azure, and the entire Microsoft ecosystem.',
    heroImage: '/images/services/microsoft-hero.jpg',
    features: [
      {
        title: 'Dynamics 365 Implementation',
        description: 'End-to-end implementation services for Dynamics 365 applications, including Sales, Customer Service, Finance, Supply Chain, and more.',
        icon: '/images/icons/dynamics.svg'
      },
      {
        title: 'Power Platform Solutions',
        description: 'Custom solutions leveraging Power Apps, Power Automate, Power BI, and Power Virtual Agents to automate processes and enhance productivity.',
        icon: '/images/icons/powerplatform.svg'
      },
      {
        title: 'Azure Cloud Services',
        description: 'Comprehensive Azure cloud services including migration, infrastructure management, DevOps, and application modernization.',
        icon: '/images/icons/azure.svg'
      },
      {
        title: 'Microsoft 365 & Teams',
        description: 'Implementation and optimization of Microsoft 365 and Teams to enhance collaboration, communication, and productivity.',
        icon: '/images/icons/microsoft365.svg'
      },
      {
        title: 'Microsoft Integration',
        description: 'Seamless integration of Microsoft solutions with your existing systems and third-party applications.',
        icon: '/images/icons/integration.svg'
      },
      {
        title: 'Microsoft Managed Services',
        description: 'Ongoing support and management services to ensure optimal performance of your Microsoft environment.',
        icon: '/images/icons/support.svg'
      }
    ],
    benefits: [
      {
        title: 'Unified Business Platform',
        description: 'Connect and streamline your operations with Microsoft\'s integrated business applications and cloud services.'
      },
      {
        title: 'Enhanced Productivity',
        description: 'Empower employees with intuitive tools designed to boost collaboration, efficiency, and innovation.'
      },
      {
        title: 'Data-Driven Insights',
        description: 'Transform your data into actionable insights with Microsoft\'s advanced analytics and reporting capabilities.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Implement Microsoft solutions that can grow and evolve with your business needs and market demands.'
      },
      {
        title: 'Enhanced Security',
        description: 'Leverage Microsoft\'s enterprise-grade security features to protect your data and systems.'
      },
      {
        title: 'Future-Ready Technology',
        description: 'Stay at the forefront of technology with Microsoft\'s continuous innovation and regular updates.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Business with Microsoft?',
      description: 'Connect with our Microsoft experts to discuss how we can help you leverage Microsoft solutions to drive business value.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default MicrosoftPage; 

