'use client';

import React from 'react';
import Link from 'next/link';

const siteLinks = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Industries', url: '/industries' },
      { name: 'Company', url: '/company' },
      { name: 'Contact', url: '/contact' },
      { name: 'Careers', url: '/careers' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Consulting', url: '/services/consulting' },
      { name: 'Enterprise Applications', url: '/services/enterprise-applications' },
      { name: 'Data & Analytics', url: '/services/data-analytics' },
      { name: 'Intelligent Automation & AI', url: '/services/automation-ai' },
      { name: 'Business Process Outsourcing', url: '/services/bpo' },
      { name: 'Intelligent Marketing', url: '/services/marketing' }
    ]
  },
  {
    title: 'Industries',
    links: [
      { name: 'Healthcare & Education', url: '/industries/healthcare-education' },
      { name: 'IT/ITES', url: '/industries/it-ites' },
      { name: 'Manufacturing', url: '/industries/manufacturing' },
      { name: 'Retail & Logistics', url: '/industries/retail-logistics' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', url: '/privacy-policy' },
      { name: 'Terms of Service', url: '/terms-of-service' }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-8">Sitemap</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteLinks.map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-red-600 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <Link 
                        href={link.url}
                        className="text-gray-700 hover:text-red-600 transition-colors flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 