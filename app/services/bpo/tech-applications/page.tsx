'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const TechApplicationsPage = () => {
  const pageData = {
    title: 'Technology Outsourcing - Applications',
    subtitle: 'Enterprise Application Management Services',
    description: 'Optimize your application portfolio with our comprehensive application outsourcing services, designed to enhance performance, reduce costs, and accelerate innovation.',
    heroImage: '/images/services/tech-applications-hero.jpg',
    features: [
      {
        title: 'Application Development',
        description: 'Custom software development services using modern technologies and methodologies to meet your specific business requirements.',
        icon: '/images/icons/development.svg'
      },
      {
        title: 'Application Maintenance & Support',
        description: 'Comprehensive maintenance and support services to ensure optimal performance and availability of your business applications.',
        icon: '/images/icons/support.svg'
      },
      {
        title: 'Legacy Application Modernization',
        description: 'Transformation of legacy applications into modern, cloud-native solutions with enhanced functionality and reduced technical debt.',
        icon: '/images/icons/modernization.svg'
      },
      {
        title: 'Application Testing & QA',
        description: 'Rigorous testing services to ensure application quality, performance, security, and user experience.',
        icon: '/images/icons/testing.svg'
      },
      {
        title: 'DevOps Implementation',
        description: 'Establishment of DevOps practices and toolchains to accelerate application delivery and improve quality.',
        icon: '/images/icons/devops.svg'
      },
      {
        title: 'Application Portfolio Management',
        description: 'Strategic management of your application portfolio to optimize costs, reduce redundancies, and align with business priorities.',
        icon: '/images/icons/portfolio.svg'
      }
    ],
    benefits: [
      {
        title: 'Cost Optimization',
        description: 'Reduce operational costs through efficient resource allocation and economies of scale.'
      },
      {
        title: 'Enhanced Application Performance',
        description: 'Improve application performance, reliability, and user experience through expert management.'
      },
      {
        title: 'Focus on Core Business',
        description: 'Allow your internal teams to focus on strategic initiatives while we handle application management.'
      },
      {
        title: 'Access to Specialized Skills',
        description: 'Leverage specialized technical skills and expertise that would be difficult to maintain in-house.'
      },
      {
        title: 'Accelerated Innovation',
        description: 'Implement new technologies and approaches faster with our experienced development teams.'
      },
      {
        title: 'Scalable Resources',
        description: 'Easily scale resources up or down based on your changing business requirements.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Application Management?',
      description: 'Connect with our experts to discuss how we can help you optimize your application portfolio and reduce operational costs.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default TechApplicationsPage; 

