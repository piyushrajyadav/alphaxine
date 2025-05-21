'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  industry: string;
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  link: string;
}

const Credentials = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'healthcare' | 'tech' | 'manufacturing' | 'financial'>('all');

  const testimonials: Testimonial[] = [
    {
      id: 'testimonial1',
      client: 'Dr. Sarah Mitchell',
      role: 'CIO',
      company: 'MedLife Healthcare',
      quote: 'Alphaxine transformed our digital patient experience by implementing a comprehensive solution that improved access to care and enhanced patient satisfaction. Their healthcare expertise and technical capabilities made them the perfect partner for our digital transformation journey.',
      image: '/images/testimonials/healthcare-cio.jpg',
      industry: 'healthcare'
    },
    {
      id: 'testimonial2',
      client: 'Mark Thompson',
      role: 'CEO',
      company: 'TechNova Solutions',
      quote: 'As a technology company, we have high standards for our IT partners. Alphaxine exceeded our expectations with their innovative approach to our enterprise architecture modernization. Their team's technical depth and commitment to our success was evident throughout the project.',
      image: '/images/testimonials/tech-ceo.jpg',
      industry: 'tech'
    },
    {
      id: 'testimonial3',
      client: 'Jennifer Lee',
      role: 'VP of Operations',
      company: 'GlobalManufacturing Inc.',
      quote: 'Alphaxine helped us implement a smart warehouse management solution that resulted in 35% improvement in operational efficiency. Their understanding of our industry-specific challenges and ability to deliver tailored solutions made all the difference.',
      image: '/images/testimonials/manufacturing-vp.jpg',
      industry: 'manufacturing'
    },
    {
      id: 'testimonial4',
      client: 'Robert Chen',
      role: 'CTO',
      company: 'InnovateTech',
      quote: 'The data analytics platform Alphaxine built for us transformed how we make business decisions. We now have real-time insights into our operations that were previously impossible to obtain. Their expertise in AI and data science is truly impressive.',
      image: '/images/testimonials/tech-cto.jpg',
      industry: 'tech'
    },
    {
      id: 'testimonial5',
      client: 'Michael Rodriguez',
      role: 'Head of Digital Transformation',
      company: 'Pacific Financial Group',
      quote: 'Our partnership with Alphaxine has been instrumental in our digital banking initiatives. They delivered a secure, scalable platform that has significantly enhanced our customer experience while meeting strict compliance requirements.',
      image: '/images/testimonials/financial-head.jpg',
      industry: 'financial'
    },
    {
      id: 'testimonial6',
      client: 'Dr. Emily Wong',
      role: 'Dean',
      company: 'Global University',
      quote: 'Alphaxine's digital platform for our university has revolutionized how we engage with students and manage academic processes. Their education domain expertise combined with technical excellence resulted in a solution that truly meets our needs.',
      image: '/images/testimonials/education-dean.jpg',
      industry: 'healthcare'
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 'case1',
      title: 'Digital Patient Experience Transformation',
      client: 'Leading Hospital Network',
      industry: 'Healthcare',
      challenge: 'Fragmented patient experience across digital channels and physical locations, resulting in patient frustration and operational inefficiencies.',
      solution: 'Implemented an integrated digital patient platform with appointment scheduling, telemedicine, patient portal, and personalized care planning capabilities.',
      results: [
        '35% increase in patient satisfaction scores',
        '28% reduction in appointment no-shows',
        '40% increase in digital engagement',
        'Seamless integration with EMR systems'
      ],
      image: '/images/case-studies/healthcare.jpg',
      link: '/insights/case-studies/digital-patient-experience'
    },
    {
      id: 'case2',
      title: 'Enterprise Data Analytics Platform',
      client: 'Global Technology Firm',
      industry: 'Technology',
      challenge: 'Siloed data across multiple systems preventing comprehensive business insights and hindering decision-making.',
      solution: 'Designed and implemented a cloud-based data lake and analytics platform with real-time dashboards and predictive analytics capabilities.',
      results: [
        '60% faster time to insights',
        '$3.2M annual cost savings from data-driven optimizations',
        '99.9% platform uptime',
        'Self-service analytics adoption by 80% of business users'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      link: '/insights/case-studies/enterprise-data-platform'
    },
    {
      id: 'case3',
      title: 'Smart Warehouse Management System',
      client: 'Leading Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Inefficient inventory management and warehouse operations leading to delays, errors, and increased operational costs.',
      solution: 'Implemented IoT-enabled warehouse management system with real-time tracking, predictive inventory management, and automated workflows.',
      results: [
        '35% improvement in operational efficiency',
        '45% reduction in inventory discrepancies',
        '50% decrease in order fulfillment time',
        '20% reduction in warehouse operating costs'
      ],
      image: '/images/case-studies/warehouse.jpg',
      link: '/insights/case-studies/smart-warehouse'
    },
    {
      id: 'case4',
      title: 'Digital Banking Transformation',
      client: 'Regional Financial Institution',
      industry: 'Financial Services',
      challenge: 'Legacy systems and processes limiting the bank's ability to offer competitive digital services and meet evolving customer expectations.',
      solution: 'End-to-end digital transformation including core banking modernization, digital banking platform implementation, and process automation.',
      results: [
        '42% increase in digital transaction volume',
        '68% improvement in customer onboarding time',
        '30% reduction in operational costs',
        'Enhanced security and compliance posture'
      ],
      image: '/images/case-studies/banking.jpg',
      link: '/insights/case-studies/digital-banking'
    },
  ];

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.industry === activeTab);

  const filteredCaseStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.industry.toLowerCase().includes(activeTab));

  return (
      <BackgroundFix>
        <div className="bg-gray-50 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Credentials</h1>
            <p className="text-xl text-black mb-8">
              Demonstrating our expertise and success through client testimonials and impactful project outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg">Projects Delivered</div>
            </div>
            <div className="bg-gray-50">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg">Satisfied Clients</div>
            </div>
            <div className="bg-gray-50">
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <div className="text-lg">Industries Served</div>
            </div>
            <div className="bg-gray-50">
              <div className="text-4xl md:text-5xl font-bold mb-2">94%</div>
              <div className="text-lg">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Client Testimonials</h2> 
              Hear what our clients have to say about their experience working with Alphaxine.
            </p>
          </div>

          {/* Industry Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center bg-gray-100 rounded-lg p-1">
              <button
                className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'all' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('all')}
              >
                All Industries
              </button>
              <button
                className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'healthcare' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('healthcare')}
              >
                Healthcare & Education
              </button>
              <button
                className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'tech' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('tech')}
              >
                Technology
              </button>
              <button
                className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'manufacturing' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('manufacturing')}
              >
                Manufacturing
              </button>
              <button
                className={`px-4 py-2 m-1 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'financial' ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('financial')}
              >
                Financial Services
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.client} 
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="bg-gray-50">
                      <h3 className="text-xl font-bold text-black">{testimonial.client}</h3>
                      <p className="text-black">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-black mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-black italic mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Success Stories</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Explore how we've helped organizations overcome challenges and achieve their business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div 
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="relative h-64">
                  <Image 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="text-sm font-medium px-3 py-1 bg-red-600 text-white rounded-full inline-block mb-3">
                        {caseStudy.industry}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{caseStudy.title}</h3>
                      <p className="text-white/80">{caseStudy.client}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-black mb-2">Challenge</h4>
                    <p className="text-black">{caseStudy.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-black mb-2">Solution</h4>
                    <p className="text-black">{caseStudy.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-black mb-2">Results</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-black mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-black">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={caseStudy.link} className="inline-flex items-center text-black font-medium hover:text-black">
                    Read Full Case Study
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/insights/case-studies" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              View All Case Studies
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Trusted by Industry Leaders</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              We're proud to work with leading organizations across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div key={num} className="flex justify-center">
                <div className="relative h-16 w-32">
                  <Image 
                    src={`/images/clients/client${num}.jpg`} 
                    alt={`Client ${num}`} 
                    fill
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our growing list of successful clients. Let's discuss how we can help you achieve your business objectives.
          </p>
          <Link href="/contact" className="bg-gray-50 text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 inline-flex items-center">
            Contact Us Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
};

export default Credentials; 










