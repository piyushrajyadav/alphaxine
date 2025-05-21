'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const DataGovernancePage = () => {
  const pageData = {
    title: 'Data Governance Services',
    subtitle: 'Enterprise Data Governance & Compliance',
    description: 'Establish effective data governance frameworks to ensure data quality, compliance, and security while maximizing the value of your data assets.',
    heroImage: '/images/services/data-governance-hero.jpg',
    features: [
      {
        title: 'Governance Framework Development',
        description: 'Design and implementation of comprehensive data governance frameworks tailored to your organizational structure and goals.',
        icon: '/images/icons/governance.svg'
      },
      {
        title: 'Data Stewardship Program',
        description: 'Establishment of data stewardship roles, responsibilities, and processes to enforce data governance policies.',
        icon: '/images/icons/stewardship.svg'
      },
      {
        title: 'Data Policy Management',
        description: 'Development and implementation of data policies covering access, quality, retention, privacy, and security.',
        icon: '/images/icons/policy.svg'
      },
      {
        title: 'Compliance Management',
        description: 'Implementation of controls and processes to ensure compliance with regulatory requirements like GDPR, CCPA, HIPAA, and more.',
        icon: '/images/icons/compliance.svg'
      },
      {
        title: 'Data Quality Management',
        description: 'Establishment of data quality metrics, monitoring, and improvement processes to ensure data accuracy and reliability.',
        icon: '/images/icons/quality.svg'
      },
      {
        title: 'Data Governance Technology',
        description: 'Selection and implementation of tools to support data governance processes, including data catalogs and lineage tracking.',
        icon: '/images/icons/technology.svg'
      }
    ],
    benefits: [
      {
        title: 'Regulatory Compliance',
        description: 'Ensure adherence to data protection regulations and industry standards through structured governance.'
      },
      {
        title: 'Improved Decision Making',
        description: 'Enable better business decisions through access to high-quality, well-governed data.'
      },
      {
        title: 'Risk Reduction',
        description: 'Mitigate data-related risks including security breaches, compliance violations, and quality issues.'
      },
      {
        title: 'Enhanced Data Value',
        description: 'Maximize the value derived from data assets through proper management and utilization.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamline data-related processes and reduce redundancies through standardized governance practices.'
      },
      {
        title: 'Cultural Transformation',
        description: 'Foster a data-driven culture where data is treated as a valuable enterprise asset.'
      }
    ],
    cta: {
      title: 'Ready to Enhance Your Data Governance?',
      description: 'Connect with our data governance experts to discuss how we can help you establish effective governance practices.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DataGovernancePage; 

