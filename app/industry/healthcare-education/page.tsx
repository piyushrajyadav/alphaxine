'use client';

import { FC } from 'react';
import IndustryPageTemplate from '@/app/components/IndustryPageTemplate';

const HealthcareEducationPage: FC = () => {
  return (
    <IndustryPageTemplate
      title="Healthcare & Education"
      subtitle="Digital Solutions for Healthcare Providers and Educational Institutions"
      description="Transformative digital solutions that improve efficiency, enhance patient/student outcomes, and deliver exceptional experiences in healthcare and educational environments."
      heroImage="/images/industries/healthcare-education.jpg"
      gradientColors={{
        from: 'red-600',
        to: 'red-700',
      }}
      keyStats={[
        {
          value: '35%',
          label: 'Reduction in Administrative Costs',
        },
        {
          value: '45%',
          label: 'Improved Patient Engagement',
        },
        {
          value: '60%',
          label: 'Enhanced Learning Outcomes',
        },
        {
          value: '28%',
          label: 'Faster Data Processing',
        },
      ]}
      solutions={[
        {
          title: 'Telehealth Solutions',
          description: 'Secure, reliable telehealth platforms that connect patients with healthcare providers remotely, improving access to care and patient outcomes.',
          icon: '/images/icons/telehealth.svg',
          link: '/services/healthcare/telehealth',
        },
        {
          title: 'Healthcare Data Analytics',
          description: 'Advanced analytics solutions that transform healthcare data into actionable insights for improved clinical decision-making and operational efficiency.',
          icon: '/images/icons/data-analytics.svg',
          link: '/services/healthcare/data-analytics',
        },
        {
          title: 'Learning Management Systems',
          description: 'Customized LMS platforms that enhance the learning experience, improve student engagement, and streamline administrative processes.',
          icon: '/images/icons/lms.svg',
          link: '/services/education/lms',
        },
        {
          title: 'Electronic Health Records',
          description: 'Comprehensive EHR solutions that streamline clinical workflows, improve data accuracy, and enhance patient care coordination.',
          icon: '/images/icons/ehr.svg',
          link: '/services/healthcare/ehr',
        },
        {
          title: 'Student Information Systems',
          description: 'Integrated SIS solutions that centralize student data, automate administrative tasks, and provide valuable insights for educational institutions.',
          icon: '/images/icons/sis.svg',
          link: '/services/education/sis',
        },
        {
          title: 'Remote Learning Platforms',
          description: 'Engaging remote learning solutions that provide interactive educational experiences and ensure continuity of education in any environment.',
          icon: '/images/icons/remote-learning.svg',
          link: '/services/education/remote-learning',
        },
      ]}
      caseStudies={[
        {
          title: 'Regional Healthcare Network Transformation',
          description: 'Implementation of integrated telehealth and EHR systems across a multi-facility healthcare network, resulting in improved patient care coordination and reduced operational costs.',
          image: '/images/case-studies/healthcare-network.jpg',
          clientName: 'Regional Healthcare Network',
          result: '32% reduction in administrative costs, 45% improvement in patient satisfaction',
          link: '/case-studies/regional-healthcare-network',
        },
        {
          title: 'University Digital Learning Transformation',
          description: 'Development of a comprehensive digital learning ecosystem, including LMS integration, virtual classrooms, and analytics dashboards for a major university.',
          image: '/images/case-studies/university.jpg',
          clientName: 'Major University',
          result: '60% increase in student engagement, 25% improvement in course completion rates',
          link: '/case-studies/university-digital-transformation',
        },
      ]}
      challenges={[
        'Assess current systems and identify integration opportunities for seamless data flow.',
        'Develop customized digital solutions tailored to specific healthcare/education requirements.',
        'Implement secure data management practices that comply with regulatory standards.',
        'Provide comprehensive training to ensure adoption and maximize benefit realization.',
        'Measure outcomes and continuously optimize solutions based on real-world performance.',
        'Scale solutions across the organization while maintaining performance and security.',
      ]}
    />
  );
};

export default HealthcareEducationPage; 