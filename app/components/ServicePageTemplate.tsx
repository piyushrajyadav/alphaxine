'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
  svg?: React.ReactNode;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features?: ServiceFeature[];
  benefits?: ServiceBenefit[];
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  features = [],
  benefits = [],
  cta
}) => {
  return (
    <BackgroundFix>
      <div className="bg-gray-50 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-red-400">{title}</h1>
              <div className="h-6 bg-gray-600/30 rounded mb-4 mx-auto w-3/4"></div>
              <div className="h-24 bg-gray-600/30 rounded mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {features.length > 0 && (
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-red-600">Our Services</h2>
                  <div className="h-6 bg-gray-200 rounded mx-auto w-2/3"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      {feature.svg ? (
                        <div className="mb-4 text-red-600">
                          {feature.svg}
                        </div>
                      ) : feature.icon ? (
                        <div className="w-12 h-12 text-red-600 mb-4">
                          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </div>
                      ) : null}
                      <h3 className="text-xl font-semibold mb-3 text-red-600">{feature.title}</h3>
                      <div className="h-16 bg-gray-100 rounded"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {benefits.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-red-600">Key Benefits</h2>
                  <div className="h-6 bg-gray-200 rounded mx-auto w-2/3"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-red-600">{benefit.title}</h3>
                      <div className="h-16 bg-gray-100 rounded"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {cta && (
          <section className="py-16 bg-gradient-to-r from-red-600 to-red-500 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
              <div className="h-16 bg-white/20 rounded mb-8 max-w-3xl mx-auto"></div>
              <Link 
                href={cta.buttonLink}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 inline-flex items-center justify-center transition-colors"
              >
                {cta.buttonText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </section>
        )}
      </div>
    </BackgroundFix>
  );
};

export default ServicePageTemplate; 