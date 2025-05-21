'use client';

import { FC } from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const RetailLogistics: FC = () => {
  const pageData = {
    title: 'Retail & Logistics',
    subtitle: '',
    description: '',
    heroImage: '/images/industries/retail-logistics-hero.jpg',
    gradientColors: {
      from: 'green-600',
      to: 'green-800'
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
        title: 'Omnichannel',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
        link: '/solutions/retail-logistics/omnichannel'
      },
      {
        title: 'Inventory',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>',
        link: '/solutions/retail-logistics/inventory'
      },
      {
        title: 'Supply Chain',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>',
        link: '/solutions/retail-logistics/supply-chain'
      },
      {
        title: 'Route Optimization',
        description: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>',
        link: '/solutions/retail-logistics/route-optimization'
      }
    ],
    caseStudies: [
      {
        title: '',
        description: '',
        image: '/images/case-studies/retail-chain.jpg',
        clientName: '',
        result: '',
        link: '/case-studies/retail-chain'
      },
      {
        title: '',
        description: '',
        image: '/images/case-studies/logistics.jpg',
        clientName: '',
        result: '',
        link: '/case-studies/logistics-provider'
      }
    ]
  };

  return <IndustryPageTemplate {...pageData} />;
};

export default RetailLogistics; 

