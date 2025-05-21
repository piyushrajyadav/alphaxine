'use client';

import { FC } from 'react';
import IndustryPageTemplate from '@/app/components/IndustryPageTemplate';

const ITITESPage: FC = () => {
  return (
    <IndustryPageTemplate
      title="IT & ITES"
      subtitle="Digital Transformation Solutions for IT and IT-Enabled Service Providers"
      description="Specialized solutions to enhance service delivery, optimize operations, and drive innovation for IT and IT-enabled service providers in an increasingly competitive landscape."
      heroImage="/images/industries/it-ites.jpg"
      gradientColors={{
        from: 'red-600',
        to: 'red-700',
      }}
      keyStats={[
        {
          value: '40%',
          label: 'Improved Operational Efficiency',
        },
        {
          value: '32%',
          label: 'Reduction in Service Delivery Costs',
        },
        {
          value: '55%',
          label: 'Faster Time-to-Market',
        },
        {
          value: '78%',
          label: 'Enhanced Client Satisfaction',
        },
      ]}
      solutions={[
        {
          title: 'DevOps Automation',
          description: 'End-to-end DevOps automation solutions that streamline software development lifecycles, improve collaboration, and accelerate delivery.',
          icon: '/images/icons/devops.svg',
          link: '/services/it-ites/devops-automation',
        },
        {
          title: 'IT Service Management',
          description: 'Comprehensive ITSM solutions that optimize service delivery, enhance user experience, and align IT operations with business objectives.',
          icon: '/images/icons/itsm.svg',
          link: '/services/it-ites/itsm',
        },
        {
          title: 'Cloud Migration & Optimization',
          description: 'Strategic cloud migration and optimization services that enhance scalability, reduce costs, and improve performance.',
          icon: '/images/icons/cloud.svg',
          link: '/services/it-ites/cloud-migration',
        },
        {
          title: 'Cybersecurity Solutions',
          description: 'Advanced cybersecurity solutions that protect critical assets, ensure compliance, and build customer trust in an increasingly digital world.',
          icon: '/images/icons/cybersecurity.svg',
          link: '/services/it-ites/cybersecurity',
        },
        {
          title: 'Digital Workforce Platforms',
          description: 'AI-powered workforce management solutions that optimize resource allocation, enhance productivity, and improve employee experience.',
          icon: '/images/icons/workforce.svg',
          link: '/services/it-ites/digital-workforce',
        },
        {
          title: 'Customer Experience Platforms',
          description: 'Omnichannel customer experience platforms that deliver personalized, seamless interactions across digital and physical touchpoints.',
          icon: '/images/icons/cx.svg',
          link: '/services/it-ites/customer-experience',
        },
      ]}
      caseStudies={[
        {
          title: 'Global IT Service Provider Transformation',
          description: 'Implementation of a comprehensive DevOps automation platform for a global IT service provider, resulting in accelerated delivery cycles and improved service quality.',
          image: '/images/case-studies/it-service-provider.jpg',
          clientName: 'Global IT Service Provider',
          result: '55% reduction in deployment time, 40% improvement in code quality',
          link: '/case-studies/global-it-service-provider',
        },
        {
          title: 'BPO Digital Transformation',
          description: 'Development of an AI-powered workforce management and customer experience platform for a major BPO, enhancing operational efficiency and client satisfaction.',
          image: '/images/case-studies/bpo.jpg',
          clientName: 'Major BPO Company',
          result: '32% reduction in operating costs, 78% improvement in customer satisfaction',
          link: '/case-studies/bpo-digital-transformation',
        },
      ]}
      challenges={[
        'Conduct comprehensive assessment of current IT infrastructure and service delivery processes.',
        'Develop custom digital solutions aligned with specific business objectives and service offerings.',
        'Implement agile methodologies to ensure rapid deployment and continuous improvement.',
        'Provide specialized training to upskill teams on new technologies and methodologies.',
        'Monitor performance metrics and refine solutions to maximize operational efficiency.',
        'Ensure seamless integration with existing systems and third-party applications.',
      ]}
    />
  );
};

export default ITITESPage; 