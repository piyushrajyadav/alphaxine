'use client';

import { FC } from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const Manufacturing: FC = () => {
  const pageData = {
    title: 'Manufacturing',
    subtitle: '',
    description: '',
    heroImage: '/images/industries/manufacturing-hero.jpg',
    gradientColors: {
      from: 'blue-600',
      to: 'purple-600'
    },
    keyStats: [
      {
        value: '',
        label: ''
      },
      {
        value: '',
        label: ''
      },
      {
        value: '',
        label: ''
      },
      {
        value: '',
        label: ''
      }
    ],
    challenges: [
      '',
      '',
      '',
      ''
    ],
    solutions: [
      {
        title: 'Smart Manufacturing',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
        link: '/solutions/manufacturing/smart-manufacturing'
      },
      {
        title: 'Predictive Maintenance',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
        link: '/solutions/manufacturing/predictive-maintenance'
      },
      {
        title: 'Supply Chain',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>',
        link: '/solutions/manufacturing/supply-chain'
      },
      {
        title: 'Quality Management',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        link: '/solutions/manufacturing/quality-management'
      }
    ],
    caseStudies: [
      {
        title: '',
        description: '',
        image: '/images/case-studies/automotive.jpg',
        clientName: '',
        result: '',
        link: '/case-studies/automotive-manufacturer'
      },
      {
        title: '',
        description: '',
        image: '/images/case-studies/electronics.jpg',
        clientName: '',
        result: '',
        link: '/case-studies/electronics-manufacturer'
      }
    ]
  };

  return <IndustryPageTemplate {...pageData} />;
};

export default Manufacturing; 

