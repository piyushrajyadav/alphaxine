'use client';

import { FC } from 'react';
import IndustryPageTemplate from '@/app/components/IndustryPageTemplate';

const ManufacturingPage: FC = () => {
  return (
    <IndustryPageTemplate
      title="Manufacturing"
      subtitle="Smart Manufacturing Solutions for the Digital Era"
      description="Innovative digital solutions that integrate advanced technologies to optimize production processes, enhance quality control, and streamline supply chain management for manufacturing enterprises."
      heroImage="/images/industries/manufacturing.jpg"
      gradientColors={{
        from: 'red-600',
        to: 'red-700',
      }}
      keyStats={[
        {
          value: '38%',
          label: 'Increased Operational Efficiency',
        },
        {
          value: '42%',
          label: 'Reduction in Production Defects',
        },
        {
          value: '25%',
          label: 'Lower Maintenance Costs',
        },
        {
          value: '30%',
          label: 'Faster Time-to-Market',
        },
      ]}
      solutions={[
        {
          title: 'Industrial IoT Solutions',
          description: 'Comprehensive IIoT platforms that connect factory equipment, gather real-time data, and enable predictive maintenance to minimize downtime.',
          icon: '/images/icons/iiot.svg',
          link: '/services/manufacturing/industrial-iot',
        },
        {
          title: 'Smart Factory Automation',
          description: 'End-to-end factory automation solutions that optimize production processes, reduce human error, and enhance overall manufacturing efficiency.',
          icon: '/images/icons/automation.svg',
          link: '/services/manufacturing/smart-factory',
        },
        {
          title: 'Supply Chain Optimization',
          description: 'Intelligent supply chain solutions that provide end-to-end visibility, optimize inventory levels, and enhance collaboration with suppliers and distributors.',
          icon: '/images/icons/supply-chain.svg',
          link: '/services/manufacturing/supply-chain',
        },
        {
          title: 'Quality Management Systems',
          description: 'Digital quality management solutions that ensure compliance with industry standards, reduce defects, and enhance product reliability.',
          icon: '/images/icons/quality.svg',
          link: '/services/manufacturing/quality-management',
        },
        {
          title: 'Predictive Maintenance',
          description: 'AI-powered predictive maintenance solutions that analyze equipment data to forecast failures before they occur, minimizing costly downtime.',
          icon: '/images/icons/predictive.svg',
          link: '/services/manufacturing/predictive-maintenance',
        },
        {
          title: 'Digital Twin Technology',
          description: 'Advanced digital twin solutions that create virtual replicas of physical assets to simulate performance, optimize processes, and accelerate innovation.',
          icon: '/images/icons/digital-twin.svg',
          link: '/services/manufacturing/digital-twin',
        },
      ]}
      caseStudies={[
        {
          title: 'Automotive Manufacturing Transformation',
          description: 'Implementation of a comprehensive IIoT and predictive maintenance platform for a major automotive manufacturer, resulting in significant reduction in unplanned downtime and improved quality.',
          image: '/images/case-studies/automotive.jpg',
          clientName: 'Leading Automotive Manufacturer',
          result: '42% reduction in unplanned downtime, 38% improvement in quality metrics',
          link: '/case-studies/automotive-manufacturing',
        },
        {
          title: 'Electronics Supply Chain Optimization',
          description: 'Development of an integrated supply chain optimization solution for an electronics manufacturer, enhancing inventory management and supplier collaboration.',
          image: '/images/case-studies/electronics.jpg',
          clientName: 'Global Electronics Manufacturer',
          result: '30% reduction in inventory costs, 25% improvement in on-time delivery',
          link: '/case-studies/electronics-supply-chain',
        },
      ]}
      challenges={[
        'Conduct thorough assessment of manufacturing processes and identify digital transformation opportunities.',
        'Develop tailored solutions that integrate with existing production systems and machinery.',
        'Implement phased deployment approach to minimize disruption to ongoing operations.',
        'Train manufacturing teams on new digital systems and best practices for maximum adoption.',
        'Monitor key performance indicators and continuously optimize manufacturing processes.',
        'Ensure robust cybersecurity measures to protect connected manufacturing systems.',
      ]}
    />
  );
};

export default ManufacturingPage; 