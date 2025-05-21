'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'AWS', icon: '/image/aws.png' },
  { name: 'Microsoft', icon: '/image/microsoft.avif' },
  { name: 'Google Cloud', icon: '/image/google cloud.png' },
  { name: 'IBM', icon: '/image/ibm.png' },
  { name: 'Oracle', icon: '/image/oracle.png' },
  { name: 'SAP', icon: '/image/sap.png' },
  { name: 'Salesforce', icon: '/image/salesforce.jpg' },
  { name: 'Snowflake', icon: '/image/snowflake.png' },
  { name: 'UiPath', icon: '/image/ui path.png' },
  { name: 'Odoo', icon: '/image/odoo.webp' },
];

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Technology Partners</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading technology providers to deliver cutting-edge solutions for our clients
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-32 h-20 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.icon}
                alt={`${partner.name} logo`}
                width={100}
                height={50}
                style={{ objectFit: 'contain' }}
                unoptimized={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 