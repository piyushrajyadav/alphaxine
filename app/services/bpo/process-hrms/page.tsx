'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const ProcessHRMSPage = () => {
  const pageData = {
    title: 'HRMS & Payroll Outsourcing',
    subtitle: 'Comprehensive HR & Payroll Management Services',
    description: 'Streamline your HR operations and payroll processing with our comprehensive outsourcing services, designed to enhance efficiency, ensure compliance, and improve employee experience.',
    heroImage: '/images/services/process-hrms-hero.jpg',
    features: [
      {
        title: 'Payroll Processing',
        description: 'End-to-end payroll processing services including calculations, tax withholdings, deductions, and payment disbursements.',
        icon: '/images/icons/payroll.svg'
      },
      {
        title: 'HRMS Implementation & Support',
        description: 'Implementation, configuration, and ongoing support of HR management systems tailored to your organization\'s needs.',
        icon: '/images/icons/hrms.svg'
      },
      {
        title: 'Employee Benefits Administration',
        description: 'Management of employee benefits programs including enrollment, claims processing, and vendor coordination.',
        icon: '/images/icons/benefits.svg'
      },
      {
        title: 'HR Compliance Management',
        description: 'Ensuring compliance with relevant labor laws, regulations, and reporting requirements across multiple jurisdictions.',
        icon: '/images/icons/compliance.svg'
      },
      {
        title: 'Employee Self-Service Solutions',
        description: 'Implementation of self-service portals that empower employees to manage their personal information and HR transactions.',
        icon: '/images/icons/self-service.svg'
      },
      {
        title: 'HR Analytics & Reporting',
        description: 'Advanced analytics and reporting capabilities to provide insights into workforce metrics and trends.',
        icon: '/images/icons/analytics.svg'
      }
    ],
    benefits: [
      {
        title: 'Cost Reduction',
        description: 'Reduce operational costs through efficient processes and economies of scale.'
      },
      {
        title: 'Enhanced Compliance',
        description: 'Ensure adherence to regulatory requirements and reduce compliance-related risks.'
      },
      {
        title: 'Improved Employee Experience',
        description: 'Deliver better HR services to employees through professional management and modern tools.'
      },
      {
        title: 'Focus on Strategic HR',
        description: 'Free up your internal HR team to focus on strategic initiatives rather than administrative tasks.'
      },
      {
        title: 'Access to Expertise',
        description: 'Leverage specialized HR and payroll expertise without maintaining these skills in-house.'
      },
      {
        title: 'Scalability',
        description: 'Easily scale HR and payroll operations as your organization grows or changes.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your HR & Payroll Operations?',
      description: 'Connect with our experts to discuss how we can help you streamline your HR processes and enhance operational efficiency.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default ProcessHRMSPage; 

