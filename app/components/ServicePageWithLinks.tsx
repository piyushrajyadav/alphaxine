'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface ServiceLink {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

interface ServicePageWithLinksProps {
  title: string;
  description: string;
  services: ServiceLink[];
}

const ServicePageWithLinks: React.FC<ServicePageWithLinksProps> = ({
  title,
  description,
  services
}) => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-red-400">{title}</h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">{description}</p>
            </div>
          </div>
        </section>

        {/* Services with Links Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Our Services</h2>
                <p className="text-xl text-gray-600">Explore our comprehensive solutions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-red-600">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      href={service.url} 
                      className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                    >
                      Learn more
                      <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to learn more about how our services can help your business thrive.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 inline-flex items-center justify-center transition-colors"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default ServicePageWithLinks; 