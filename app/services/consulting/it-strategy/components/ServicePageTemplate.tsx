'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
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
    <div className="bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gray-50 text-black py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-red-600">{title}</h1>
            <p className="text-xl font-medium mb-4">{subtitle}</p>
            <p className="text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {feature.icon && (
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        unoptimized
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3 text-red-600">{feature.title}</h3>
                  <p className="mb-4 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    {benefit.icon ? (
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={24}
                          height={24}
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-red-600">{benefit.title}</h3>
                      <p className="leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {cta && (
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {cta.description}
            </p>
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
  );
};

export default ServicePageTemplate; 