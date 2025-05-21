'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const TechInfrastructurePage = () => {
  const pageData = {
    title: 'Technology Outsourcing - Infrastructure',
    subtitle: 'Enterprise Infrastructure Management Services',
    description: 'Optimize your IT infrastructure with our comprehensive infrastructure outsourcing services, designed to enhance reliability, scalability, and cost-efficiency.',
    heroImage: '/images/services/tech-infrastructure-hero.jpg',
    features: [
      {
        title: 'Cloud Infrastructure Management',
        description: 'Comprehensive management of public, private, and hybrid cloud environments to optimize performance and cost.',
        icon: '/images/icons/cloud.svg'
      },
      {
        title: 'Data Center Operations',
        description: 'End-to-end management of data center operations, including monitoring, maintenance, and optimization.',
        icon: '/images/icons/datacenter.svg'
      },
      {
        title: 'Network Management',
        description: 'Management of network infrastructure to ensure optimal connectivity, security, and performance.',
        icon: '/images/icons/network.svg'
      },
      {
        title: 'Infrastructure Security',
        description: 'Implementation of robust security measures to protect your infrastructure from threats and vulnerabilities.',
        icon: '/images/icons/security.svg'
      },
      {
        title: 'Disaster Recovery & Business Continuity',
        description: 'Design and implementation of disaster recovery solutions to ensure business continuity in case of disruptions.',
        icon: '/images/icons/disaster-recovery.svg'
      },
      {
        title: 'Infrastructure Monitoring & Optimization',
        description: 'Continuous monitoring and optimization of infrastructure to ensure optimal performance and resource utilization.',
        icon: '/images/icons/monitoring.svg'
      }
    ],
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Reduce capital and operational expenditures through optimized infrastructure management.'
      },
      {
        title: 'Enhanced Reliability',
        description: 'Improve infrastructure reliability and uptime through expert management and proactive maintenance.'
      },
      {
        title: 'Scalability',
        description: 'Easily scale infrastructure resources up or down based on your changing business requirements.'
      },
      {
        title: 'Focus on Core Business',
        description: 'Allow your internal teams to focus on strategic initiatives while we handle infrastructure management.'
      },
      {
        title: 'Access to Specialized Expertise',
        description: 'Leverage specialized technical skills that would be impractical or costly to maintain in-house.'
      },
      {
        title: 'Enhanced Security',
        description: 'Improve your security posture with expert implementation of infrastructure security best practices.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Infrastructure Management?',
      description: 'Connect with our experts to discuss how we can help you optimize your IT infrastructure and reduce operational costs.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default TechInfrastructurePage; 

