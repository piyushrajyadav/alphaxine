'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CompanyProfile = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Company Profile</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn more about Alphaxine's journey, mission, and how we're helping businesses transform through technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/image/alphaxine office.webp"
                alt="Alphaxine Office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-64"
                unoptimized={true}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">About Alphaxine</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Alphaxine has grown into a global digital transformation partner for businesses across industries. Our team of experts combines deep domain knowledge with cutting-edge technology expertise to deliver solutions that drive business growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Digital Transformation</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Data & Analytics</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Enterprise Solutions</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">AI & Automation</span>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <p className="text-gray-700">Projects Delivered</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <p className="text-gray-700">Technology Experts</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
                <p className="text-gray-700">Years of Excellence</p>
              </motion.div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/company/journey"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Learn More About Our Journey
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile; 