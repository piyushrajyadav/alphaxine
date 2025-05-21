'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const SAPPage = () => {
  const pageData = {
    title: 'SAP Services',
    subtitle: 'Comprehensive SAP Implementation & Support',
    description: 'Maximize the value of your SAP investment with our end-to-end services, from strategic planning and implementation to ongoing support and optimization.',
    heroImage: '/images/services/sap-hero.jpg',
    features: [
      {
        title: 'SAP Implementation',
        description: 'End-to-end implementation services across the SAP portfolio, including S/4HANA, SuccessFactors, Ariba, and more.',
        icon: '/images/icons/implementation.svg'
      },
      {
        title: 'SAP Migration & Upgrades',
        description: 'Seamless migration services from legacy systems to SAP or upgrading existing SAP landscapes to the latest versions.',
        icon: '/images/icons/migration.svg'
      },
      {
        title: 'SAP Integration',
        description: 'Expert integration of SAP solutions with your existing enterprise applications and third-party systems.',
        icon: '/images/icons/integration.svg'
      },
      {
        title: 'SAP Managed Services',
        description: 'Comprehensive support and management services to ensure optimal performance and availability of your SAP systems.',
        icon: '/images/icons/support.svg'
      },
      {
        title: 'SAP Cloud Solutions',
        description: 'Implementation and management of SAP cloud applications and infrastructure, including RISE with SAP.',
        icon: '/images/icons/cloud.svg'
      },
      {
        title: 'SAP Analytics',
        description: 'Design and implementation of SAP analytics solutions to transform your data into actionable business insights.',
        icon: '/images/icons/analytics.svg'
      }
    ],
    benefits: [
      {
        title: 'Business Process Optimization',
        description: 'Leverage SAP best practices to streamline operations, improve efficiency, and enhance business outcomes.'
      },
      {
        title: 'Accelerated Time-to-Value',
        description: 'Achieve faster implementation and ROI through our proven methodologies and accelerators.'
      },
      {
        title: 'Enhanced Data Integration',
        description: 'Eliminate data silos and achieve a unified view of your business operations across the enterprise.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Implement SAP solutions that can grow and evolve with your business needs and market conditions.'
      },
      {
        title: 'Continuous Innovation',
        description: 'Stay at the forefront of technology with regular updates and access to the latest SAP capabilities.'
      },
      {
        title: 'Expert Support',
        description: 'Benefit from our team of certified SAP consultants with deep industry and functional expertise.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Business with SAP?',
      description: 'Connect with our SAP experts to discuss how we can help you leverage SAP solutions to drive business value.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default SAPPage; 

