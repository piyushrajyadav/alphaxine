'use client';

import { FC } from 'react';
import IndustryPageTemplate from '@/app/components/IndustryPageTemplate';

const RetailLogisticsPage: FC = () => {
  return (
    <IndustryPageTemplate
      title="Retail & Logistics"
      subtitle="End-to-End Digital Solutions for Retail and Logistics Companies"
      description="Comprehensive digital transformation solutions designed to streamline operations, enhance customer experience, and optimize supply chain management for retail and logistics enterprises."
      heroImage="/images/industries/retail-logistics.jpg"
      gradientColors={{
        from: 'red-600',
        to: 'red-700',
      }}
      keyStats={[
        {
          value: '45%',
          label: 'Improved Customer Engagement',
        },
        {
          value: '38%',
          label: 'Increase in Operational Efficiency',
        },
        {
          value: '32%',
          label: 'Reduction in Logistics Costs',
        },
        {
          value: '28%',
          label: 'Enhanced Inventory Accuracy',
        },
      ]}
      solutions={[
        {
          title: 'Omnichannel Retail Platforms',
          description: 'Integrated omnichannel solutions that provide seamless customer experiences across physical stores, e-commerce, and mobile applications.',
          icon: '/images/icons/omnichannel.svg',
          link: '/services/retail-logistics/omnichannel',
        },
        {
          title: 'Intelligent Supply Chain',
          description: 'AI-powered supply chain solutions that optimize inventory management, enhance forecasting accuracy, and streamline logistics operations.',
          icon: '/images/icons/supply-chain.svg',
          link: '/services/retail-logistics/supply-chain',
        },
        {
          title: 'Customer Analytics & Personalization',
          description: 'Advanced analytics platforms that transform customer data into actionable insights for personalized marketing and enhanced customer experiences.',
          icon: '/images/icons/analytics.svg',
          link: '/services/retail-logistics/customer-analytics',
        },
        {
          title: 'Last-Mile Delivery Optimization',
          description: 'Innovative last-mile delivery solutions that optimize routes, reduce costs, and enhance customer satisfaction with real-time tracking.',
          icon: '/images/icons/delivery.svg',
          link: '/services/retail-logistics/last-mile',
        },
        {
          title: 'Smart Retail Store Solutions',
          description: 'Cutting-edge technologies for physical stores, including IoT devices, digital signage, and automated checkout systems to enhance in-store experiences.',
          icon: '/images/icons/smart-store.svg',
          link: '/services/retail-logistics/smart-store',
        },
        {
          title: 'Warehouse Management Systems',
          description: 'Comprehensive WMS solutions that optimize warehouse operations, improve inventory accuracy, and enhance order fulfillment efficiency.',
          icon: '/images/icons/warehouse.svg',
          link: '/services/retail-logistics/warehouse-management',
        },
      ]}
      caseStudies={[
        {
          title: 'Global Retailer Digital Transformation',
          description: 'Implementation of an integrated omnichannel platform for a global retailer, resulting in significant improvements in customer engagement and operational efficiency.',
          image: '/images/case-studies/retail.jpg',
          clientName: 'Global Retail Chain',
          result: '45% increase in online sales, 38% improvement in customer retention',
          link: '/case-studies/global-retailer',
        },
        {
          title: 'Logistics Company Supply Chain Optimization',
          description: 'Development of an AI-powered supply chain and last-mile delivery optimization solution for a major logistics provider, enhancing operational efficiency and customer satisfaction.',
          image: '/images/case-studies/logistics.jpg',
          clientName: 'Major Logistics Provider',
          result: '32% reduction in delivery costs, 28% improvement in on-time delivery',
          link: '/case-studies/logistics-optimization',
        },
      ]}
      challenges={[
        'Assess current retail and logistics operations to identify digital transformation opportunities.',
        'Develop tailored solutions that address specific business challenges and customer expectations.',
        'Implement phased approach to digital transformation with minimal disruption to ongoing operations.',
        'Provide comprehensive training to ensure adoption of new digital systems across the organization.',
        'Monitor key performance indicators and continuously optimize retail and logistics processes.',
        'Ensure seamless integration with existing systems and third-party applications.',
      ]}
    />
  );
};

export default RetailLogisticsPage; 