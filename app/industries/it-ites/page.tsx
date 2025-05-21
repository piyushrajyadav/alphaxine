'use client';

import { FC } from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const ITAndITES: FC = () => {
  const pageData = {
    title: 'IT & ITES',
    subtitle: '',
    description: '',
    heroImage: '/images/industries/it-ites-hero.jpg',
    gradientColors: {
      from: 'purple-600',
      to: 'indigo-500'
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
      '',
      '',
      ''
    ],
    solutions: [
      {
        title: 'Digital Transformation',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
        link: '/industries/it-ites/digital-transformation'
      },
      {
        title: 'Cloud Solutions',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
        link: '/industries/it-ites/cloud-solutions'
      },
      {
        title: 'DevOps Automation',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>',
        link: '/industries/it-ites/devops-automation'
      },
      {
        title: 'Cybersecurity',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
        link: '/industries/it-ites/cybersecurity'
      },
      {
        title: 'AI & Analytics',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
        link: '/industries/it-ites/ai-analytics'
      },
      {
        title: 'Managed Services',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
        link: '/industries/it-ites/managed-services'
      }
    ],
    caseStudies: [
      {
        title: '',
        description: '',
        image: '/images/case-studies/it-1.jpg',
        clientName: '',
        result: '',
        link: '/case-studies/global-tech-cloud'
      },
      {
        title: '',
        description: '',
        image: '/images/case-studies/it-2.jpg',
        clientName: '',
        result: '',
        link: '/case-studies/innovation-devops'
      },
      {
        title: '',
        description: '',
        image: '/images/case-studies/it-3.jpg',
        clientName: '',
        result: '',
        link: '/case-studies/secureit-upgrade'
      }
    ]
  };

  return <IndustryPageTemplate {...pageData} />;
};

export default ITAndITES; 

