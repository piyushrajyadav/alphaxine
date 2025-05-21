'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const IndustriesPage: FC = () => {
  const industries = [
    {
      title: 'Healthcare & Education',
      image: '/images/industries/healthcare-education.jpg',
      link: '/industries/healthcare-education',
      color: 'from-blue-600 to-cyan-500',
      icon: '/images/icons/healthcare.svg'
    },
    {
      title: 'IT/ITES',
      image: '/images/industries/it-ites.jpg',
      link: '/industries/it-ites',
      color: 'from-purple-600 to-indigo-700',
      icon: '/images/icons/it-services.svg'
    },
    {
      title: 'Manufacturing',
      image: '/images/industries/manufacturing.jpg',
      link: '/industries/manufacturing',
      color: 'from-orange-500 to-red-600',
      icon: '/images/icons/manufacturing.svg'
    },
    {
      title: 'Retail & Logistics',
      image: '/images/industries/retail-logistics.jpg',
      link: '/industries/retail-logistics',
      color: 'from-green-600 to-teal-500',
      icon: '/images/icons/retail.svg'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Industry Solutions</h1>
            <div className="h-6 bg-gray-600 rounded max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-60">
                  <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-90`}></div>
                  <div className="relative z-10 h-full flex items-center justify-center p-6">
                    <h3 className="text-3xl font-bold text-white text-center">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-24 bg-gray-200 rounded mb-6"></div>
                  <Link 
                    href={industry.link} 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Why Choose Our Industry Solutions</h2>
            <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-4/5 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Industry Knowledge</h3>
              <div className="h-20 bg-gray-200 rounded"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
              <div className="h-20 bg-gray-200 rounded"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <div className="h-20 bg-gray-200 rounded"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage; 

