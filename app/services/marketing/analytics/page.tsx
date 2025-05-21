'use client';

import React from 'react';
import ServicePageTemplate from '@/app/components/ServicePageTemplate';

const MarketingAnalyticsPage = () => {
  const pageData = {
    title: 'Marketing Analytics & Insights',
    subtitle: 'Data-Driven Marketing Intelligence',
    description: 'Transform your marketing data into actionable insights with our comprehensive analytics services, designed to optimize performance, enhance ROI, and drive strategic decision-making.',
    heroImage: '/images/services/marketing-analytics-hero.svg',
    features: [
      {
        title: 'Marketing Analytics Implementation',
        description: 'Setup and configuration of robust analytics platforms to track, measure, and analyze marketing performance across channels.',
        icon: '/images/icons/implementation.svg'
      },
      {
        title: 'Performance Measurement Framework',
        description: 'Development of comprehensive measurement frameworks aligned with your business objectives and KPIs.',
        icon: '/images/icons/measurement.svg'
      },
      {
        title: 'Multi-channel Attribution Modeling',
        description: 'Implementation of advanced attribution models to understand the impact of each marketing touchpoint on conversions.',
        icon: '/images/icons/attribution.svg'
      },
      {
        title: 'Customer Journey Analytics',
        description: 'Analysis of customer interactions across touchpoints to optimize the path to conversion and enhance user experience.',
        icon: '/images/icons/journey.svg'
      },
      {
        title: 'Predictive Marketing Analytics',
        description: 'Application of predictive modeling techniques to forecast trends, identify opportunities, and optimize marketing strategies.',
        icon: '/images/icons/predictive.svg'
      },
      {
        title: 'Custom Dashboards & Reporting',
        description: 'Creation of tailored dashboards and reports to visualize key metrics and communicate insights to stakeholders.',
        icon: '/images/icons/dashboard.svg'
      }
    ],
    benefits: [
      {
        title: 'Data-Driven Decision Making',
        description: 'Make informed marketing decisions based on accurate data and insights rather than assumptions.'
      },
      {
        title: 'Optimized Marketing ROI',
        description: 'Identify high-performing channels and campaigns to optimize budget allocation and maximize returns.'
      },
      {
        title: 'Enhanced Customer Understanding',
        description: 'Gain deeper insights into customer behavior, preferences, and journey to improve targeting and messaging.'
      },
      {
        title: 'Improved Campaign Performance',
        description: 'Continuously improve marketing campaigns through data-driven optimization and testing.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Stay ahead of competitors with advanced analytics capabilities that inform strategic decision-making.'
      },
      {
        title: 'Holistic Marketing View',
        description: 'Obtain a comprehensive view of marketing performance across all channels and touchpoints.'
      }
    ],
    cta: {
      title: 'Ready to Transform Your Marketing Analytics?',
      description: 'Connect with our analytics experts to discuss how we can help you leverage data to drive marketing success.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  };

  return <ServicePageTemplate {...pageData} />;
};

export default MarketingAnalyticsPage; 

