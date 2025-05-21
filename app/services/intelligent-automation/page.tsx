'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

const IntelligentAutomation = () => {
  const aiServices = [
    {
      title: 'AI/ML Solutions',
      description: 'Custom artificial intelligence and machine learning solutions to optimize operations, enhance decision-making, and drive business value.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: '/services/intelligent-automation/ai-ml'
    },
    {
      title: 'Generative AI',
      description: 'Advanced generative AI solutions that create new content, designs, and insights to drive innovation and creativity in your business.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      link: '/services/intelligent-automation/generative-ai'
    },
    {
      title: 'Agentic AI',
      description: 'Cutting-edge agentic AI solutions that can autonomously perform tasks, make decisions, and adapt to new situations for your business.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/services/intelligent-automation/agentic-ai'
    }
  ];

  return (
      <BackgroundFix>
        <div >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent Automation & AI</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your operations with intelligent automation and artificial intelligence solutions that drive efficiency and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-600">Accelerate with Intelligent Technologies</h2>
              <p className="text-lg text-gray-600 mb-6">
                At AlphaXine, we leverage advanced automation and artificial intelligence to help businesses streamline processes, reduce costs, and unlock new possibilities. Our solutions combine human expertise with cutting-edge technology to deliver transformative results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">End-to-end automation solutions</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">AI-powered decision making</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Human-centric technology approach</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/intelligent-automation.jpg" 
                alt="Intelligent Automation & AI" 
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI/ML Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-red-600">AI & Machine Learning Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI and ML solutions that transform data into actionable insights and intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={service.link}>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-red-600">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Our Intelligent Automation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Robotic Process Automation (RPA)',
                description: 'Automate repetitive tasks and processes to increase efficiency and reduce errors.',
                icon: 'rpa',
                link: '/services/intelligent-automation/rpa'
              },
              {
                title: 'Cognitive Automation',
                description: 'Leverage AI and machine learning to automate complex tasks requiring judgment and decision-making.',
                icon: 'cognitive',
                link: '/services/intelligent-automation/cognitive-automation'
              },
              {
                title: 'Conversational AI',
                description: 'Implement intelligent chatbots and virtual assistants to enhance customer and employee experiences.',
                icon: 'chatbot',
                link: '/services/intelligent-automation/conversational-ai'
              },
              {
                title: 'Machine Learning Solutions',
                description: 'Develop custom ML models that learn from your data to drive insights and predictions.',
                icon: 'machine-learning',
                link: '/services/intelligent-automation/machine-learning'
              },
              {
                title: 'Intelligent Document Processing',
                description: 'Extract and process information from documents using AI-powered OCR and natural language processing.',
                icon: 'document',
                link: '/services/intelligent-automation/document-processing'
              },
              {
                title: 'Process Mining & Optimization',
                description: 'Analyze existing processes to identify automation opportunities and optimize workflows.',
                icon: 'process-mining',
                link: '/services/intelligent-automation/process-mining'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={service.link}>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <Image 
                        src={`/images/icons/${service.icon}.svg`}
                        alt={service.title}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-red-600">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Why Choose AlphaXine for Intelligent Automation & AI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with us for automation and AI solutions that deliver measurable business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Technical Excellence',
                description: 'Specialized team of AI engineers, data scientists, and automation experts',
                stat: '60+',
                statLabel: 'AI & Automation Experts'
              },
              {
                title: 'Proven Methodology',
                description: 'Structured approach to identifying, prioritizing, and implementing automation',
                stat: '4-Step',
                statLabel: 'Implementation Method'
              },
              {
                title: 'Business Impact',
                description: 'Track record of delivering significant ROI through intelligent automation',
                stat: '40%+',
                statLabel: 'Avg. Cost Reduction'
              },
              {
                title: 'Technology Partnerships',
                description: 'Strategic alliances with leading automation and AI platform providers',
                stat: '10+',
                statLabel: 'Technology Partners'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">{item.stat}</div>
                <div className="text-sm text-gray-500 mb-4">{item.statLabel}</div>
                <h3 className="text-xl font-bold mb-2 text-red-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with Intelligent Automation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect with our automation experts to discuss how we can help you streamline operations and drive innovation with AI and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 inline-flex items-center justify-center">
              Schedule a Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/insights/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 inline-flex items-center justify-center">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
      </BackgroundFix>
    );
};

export default IntelligentAutomation; 


