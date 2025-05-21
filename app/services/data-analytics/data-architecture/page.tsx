'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const DataArchitecturePage = () => {
  const pageData = {
    title: 'Data Architecture Services',
    subtitle: 'Enterprise Data Architecture Design & Implementation',
    description: 'Design and implement scalable, resilient data architectures that align with your business objectives and provide a solid foundation for analytics and AI initiatives.',
    heroImage: '/images/services/data-architecture-hero.jpg',
    features: [
      {
        title: 'Data Architecture Assessment',
        description: 'Comprehensive evaluation of your current data architecture to identify strengths, gaps, and opportunities for improvement.',
        icon: '/images/icons/assessment.svg'
      },
      {
        title: 'Architecture Design & Planning',
        description: 'Development of future-state data architecture blueprints aligned with business goals and technology trends.',
        icon: '/images/icons/design.svg'
      },
      {
        title: 'Data Integration Framework',
        description: 'Design of robust data integration patterns and frameworks to connect disparate data sources effectively.',
        icon: '/images/icons/integration.svg'
      },
      {
        title: 'Data Modeling',
        description: 'Creation of logical and physical data models to support business processes and analytical requirements.',
        icon: '/images/icons/modeling.svg'
      },
      {
        title: 'Modern Data Platform Implementation',
        description: 'Implementation of cloud-native, scalable data platforms leveraging the latest technologies and best practices.',
        icon: '/images/icons/platform.svg'
      },
      {
        title: 'Data Architecture Governance',
        description: 'Establishment of standards, guidelines, and review processes to ensure architectural integrity and compliance.',
        icon: '/images/icons/governance.svg'
      }
    ],
    benefits: [
      {
        title: 'Scalability & Performance',
        description: 'Build data architectures that can grow with your business and maintain performance as data volumes increase.'
      },
      {
        title: 'Agility & Flexibility',
        description: 'Create adaptable architectures that can evolve with changing business requirements and technology landscapes.'
      },
      {
        title: 'Cost Optimization',
        description: 'Design efficient architectures that optimize infrastructure costs while meeting performance requirements.'
      },
      {
        title: 'Enhanced Data Access',
        description: 'Provide appropriate data access to business users while maintaining security and governance.'
      },
      {
        title: 'Analytics Enablement',
        description: 'Create architectures specifically designed to support advanced analytics, machine learning, and AI initiatives.'
      },
      {
        title: 'Technical Debt Reduction',
        description: 'Address architectural inefficiencies and legacy issues to reduce long-term technical debt.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Data Architecture?',
      description: 'Connect with our data architecture experts to discuss how we can help you design and implement efficient, scalable data infrastructures.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DataArchitecturePage; 

