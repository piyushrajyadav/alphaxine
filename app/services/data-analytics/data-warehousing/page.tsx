'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const DataWarehousingPage = () => {
  const pageData = {
    title: 'Data Warehousing & Business Intelligence',
    subtitle: 'Enterprise Analytics & Reporting Solutions',
    description: 'Design and implement modern data warehousing and business intelligence solutions that transform your data into actionable insights and drive informed decision-making.',
    heroImage: '/images/services/data-warehousing-hero.jpg',
    features: [
      {
        title: 'Modern Data Warehouse Implementation',
        description: 'Design and deployment of cloud-native, scalable data warehousing solutions optimized for performance and flexibility.',
        icon: '/images/icons/warehouse.svg'
      },
      {
        title: 'ETL/ELT Pipeline Development',
        description: 'Creation of robust data integration pipelines to extract, transform, and load data from diverse sources into your warehouse.',
        icon: '/images/icons/pipeline.svg'
      },
      {
        title: 'Data Mart Design',
        description: 'Implementation of subject-specific data marts to serve departmental analytical needs and improve query performance.',
        icon: '/images/icons/datamart.svg'
      },
      {
        title: 'Business Intelligence Implementation',
        description: 'Deployment of intuitive BI tools and dashboards to enable self-service analytics and data visualization.',
        icon: '/images/icons/dashboard.svg'
      },
      {
        title: 'Advanced Analytics Integration',
        description: 'Integration of predictive analytics, machine learning, and AI capabilities with your data warehouse and BI environment.',
        icon: '/images/icons/analytics.svg'
      },
      {
        title: 'Data Warehouse Modernization',
        description: 'Migration and modernization of legacy data warehouses to cloud-based, scalable architectures.',
        icon: '/images/icons/modernization.svg'
      }
    ],
    benefits: [
      {
        title: 'Informed Decision Making',
        description: 'Empower decision-makers with timely, accurate insights derived from comprehensive data analysis.'
      },
      {
        title: 'Single Source of Truth',
        description: 'Consolidate disparate data sources into a unified data warehouse to ensure consistency and reliability.'
      },
      {
        title: 'Self-Service Analytics',
        description: 'Enable business users to explore data and create their own reports without IT intervention.'
      },
      {
        title: 'Scalability & Performance',
        description: 'Build solutions that scale with your data volume growth while maintaining query performance.'
      },
      {
        title: 'Cost Optimization',
        description: 'Leverage modern architectures to optimize storage and compute costs while enhancing capabilities.'
      },
      {
        title: 'Future-Ready Analytics',
        description: 'Create a foundation for advanced analytics initiatives including machine learning and AI.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Data Warehousing & BI?',
      description: 'Connect with our data experts to discuss how we can help you implement modern data warehousing and business intelligence solutions.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default DataWarehousingPage; 

