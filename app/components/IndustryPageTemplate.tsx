'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Solution {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  clientName: string;
  result: string;
  link: string;
}

interface IndustryPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  gradientColors: {
    from: string;
    to: string;
  };
  keyStats: {
    value: string;
    label: string;
  }[];
  solutions: Solution[];
  caseStudies: CaseStudy[];
  challenges: string[];
}

const IndustryPageTemplate: FC<IndustryPageProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  gradientColors,
  keyStats,
  solutions,
  caseStudies,
  challenges
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 text-black py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-red-600">{title}</h1>
            <p className="text-xl font-medium mb-4">{subtitle}</p>
            <p className="text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
                <div className={`text-4xl font-bold mb-2 text-${gradientColors.from}`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Implementation Methodology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Link href={solution.link}>
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                      <span dangerouslySetInnerHTML={{ __html: solution.icon }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-red-600">{solution.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-black border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-600">Ready to Transform Your {title} Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect with our industry experts to discuss how we can help you overcome challenges and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center justify-center">
              Schedule a Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPageTemplate; 