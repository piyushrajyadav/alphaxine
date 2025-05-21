'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const DataManagementPage = () => {
  const pageData = {
    title: 'Data Management Services',
    subtitle: 'Comprehensive Enterprise Data Management',
    description: 'Transform your data into a strategic asset with our comprehensive data management services, designed to ensure data quality, accessibility, and security across your organization.',
    heroImage: '/images/services/data-management-hero.jpg',
    features: [
      {
        title: 'Data Quality Management',
        description: 'Implementation of robust processes and tools to ensure data accuracy, completeness, consistency, and reliability.',
        icon: '/images/icons/quality.svg'
      },
      {
        title: 'Master Data Management',
        description: 'Establishment of a single source of truth for critical business data like customers, products, suppliers, and locations.',
        icon: '/images/icons/master-data.svg'
      },
      {
        title: 'Data Integration',
        description: 'Seamless integration of data from multiple sources to create unified, consistent views of enterprise information.',
        icon: '/images/icons/integration.svg'
      },
      {
        title: 'Metadata Management',
        description: 'Implementation of frameworks to document and manage metadata, enhancing data discoverability and understanding.',
        icon: '/images/icons/metadata.svg'
      },
      {
        title: 'Data Security & Privacy',
        description: 'Development of comprehensive controls to protect sensitive data and ensure compliance with privacy regulations.',
        icon: '/images/icons/security.svg'
      },
      {
        title: 'Data Lifecycle Management',
        description: 'End-to-end management of data from creation to archival or deletion, optimizing storage and ensuring compliance.',
        icon: '/images/icons/lifecycle.svg'
      }
    ],
    benefits: [
      {
        title: 'Enhanced Decision Making',
        description: 'Enable confident, data-driven decisions based on high-quality, reliable information.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Eliminate redundancies and streamline processes through proper data management.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Meet data protection and privacy requirements through structured data management practices.'
      },
      {
        title: 'Improved Customer Experience',
        description: 'Deliver personalized customer experiences through access to comprehensive, accurate customer data.'
      },
      {
        title: 'Cost Reduction',
        description: 'Optimize storage costs and reduce operational inefficiencies through effective data lifecycle management.'
      },
      {
        title: 'Innovation Enablement',
        description: 'Create a foundation for advanced analytics and AI initiatives through quality-controlled data.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Data Management?',
      description: 'Connect with our data experts to discuss how we can help you implement effective data management practices.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DataManagementPage; 

