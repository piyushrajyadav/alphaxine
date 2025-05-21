'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Benefit {
  id: string;
  title: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    id: 'product-approach',
    title: 'Transition to a product-based approach',
    icon: '/images/icons/product.svg',
  },
  {
    id: 'cloud-migration',
    title: 'Achieve seamless cloud migration',
    icon: '/images/icons/cloud.svg',
  },
  {
    id: 'data-ai',
    title: 'Unlock potential with data & AI',
    icon: '/images/icons/ai.svg',
  },
  {
    id: 'infrastructure',
    title: 'Improve infrastructure management',
    icon: '/images/icons/infrastructure.svg',
  },
  {
    id: 'process-optimization',
    title: 'Optimize business processes',
    icon: '/images/icons/process.svg',
  },
];

const Benefits = () => {
  const [activeBenefit, setActiveBenefit] = useState<string>(benefits[0].id);
  const [expandedMobileBenefit, setExpandedMobileBenefit] = useState<string | null>(null);

  const toggleMobileBenefit = (benefitId: string) => {
    if (expandedMobileBenefit === benefitId) {
      setExpandedMobileBenefit(null);
    } else {
      setExpandedMobileBenefit(benefitId);
      setActiveBenefit(benefitId);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Customized For You and Your Digital Journey
          </h2>
          <div className="h-6 bg-gray-200 rounded max-w-3xl mx-auto mb-2"></div>
          <div className="h-6 bg-gray-200 rounded max-w-2xl mx-auto"></div>
        </div>

        {/* Mobile View Benefits List with Accordion Style */}
        <div className="lg:hidden space-y-4 mb-8">
          {/* Mobile navigation tabs */}
          <div className="flex overflow-x-auto pb-2 mb-2 space-x-2 no-scrollbar">
            {benefits.map((benefit) => (
              <button
                key={benefit.id}
                onClick={() => {
                  setExpandedMobileBenefit(benefit.id);
                  setActiveBenefit(benefit.id);
                }}
                className={`flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  expandedMobileBenefit === benefit.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 text-current">
                    {benefit.id === 'product-approach' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    )}
                    {benefit.id === 'cloud-migration' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                      </svg>
                    )}
                    {benefit.id === 'data-ai' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                      </svg>
                    )}
                    {benefit.id === 'infrastructure' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    )}
                    {benefit.id === 'process-optimization' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
                        <polyline points="15 3 18 6 21 3"></polyline>
                        <line x1="10" y1="12" x2="14" y2="12"></line>
                      </svg>
                    )}
                  </div>
                  <span>{benefit.title.split(' ')[0]}</span>
                </div>
              </button>
            ))}
          </div>
          
          {benefits.map((benefit) => (
            <div key={benefit.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileBenefit(benefit.id)}
                className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center justify-between ${
                  expandedMobileBenefit === benefit.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex-shrink-0 text-current">
                    {benefit.id === 'product-approach' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    )}
                    {benefit.id === 'cloud-migration' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                      </svg>
                    )}
                    {benefit.id === 'data-ai' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                      </svg>
                    )}
                    {benefit.id === 'infrastructure' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    )}
                    {benefit.id === 'process-optimization' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
                        <polyline points="15 3 18 6 21 3"></polyline>
                        <line x1="10" y1="12" x2="14" y2="12"></line>
                      </svg>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{benefit.title}</h3>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedMobileBenefit === benefit.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Expanded Benefit Content for Mobile */}
              {expandedMobileBenefit === benefit.id && (
                <div className="bg-white p-5 border-t border-gray-200">
                  <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="mb-4">
                    <h4 className="text-base font-semibold mb-3 text-gray-800">Key Benefits:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="h-5 bg-gray-200 rounded w-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="text-center bg-gray-50 px-6 py-3 rounded-lg">
                      <div className="h-6 bg-gray-200 rounded w-12 mx-auto mb-1"></div>
                      <div className="text-xs text-gray-600">
                        {benefit.id === 'product-approach' ? 'Increased ROI' :
                         benefit.id === 'cloud-migration' ? 'Cost Reduction' :
                         benefit.id === 'data-ai' ? 'Efficiency Gain' :
                         benefit.id === 'infrastructure' ? 'System Uptime' :
                         'Process Optimization'}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    {/* Previous and Next navigation */}
                    <button 
                      onClick={() => {
                        const currentIndex = benefits.findIndex(b => b.id === benefit.id);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : benefits.length - 1;
                        setExpandedMobileBenefit(benefits[prevIndex].id);
                        setActiveBenefit(benefits[prevIndex].id);
                      }}
                      className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 inline-flex items-center text-sm"
                    >
                      <svg className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      Previous
                    </button>
                    <button 
                      onClick={() => {
                        const currentIndex = benefits.findIndex(b => b.id === benefit.id);
                        const nextIndex = currentIndex < benefits.length - 1 ? currentIndex + 1 : 0;
                        setExpandedMobileBenefit(benefits[nextIndex].id);
                        setActiveBenefit(benefits[nextIndex].id);
                      }}
                      className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 inline-flex items-center text-sm"
                    >
                      Next
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 14.707a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L12.586 9H5a1 1 0 100 2h7.586l-2.293 2.293a1 1 0 000 1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop View with Side Navigation */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Benefits Navigation */}
          <div className="lg:col-span-1 order-1 lg:order-none">
            <div className="space-y-3 sticky top-20">
              {benefits.map((benefit) => (
                <motion.button
                  key={benefit.id}
                  onClick={() => setActiveBenefit(benefit.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center p-3 md:p-4 rounded-lg transition-all duration-200 ${
                    activeBenefit === benefit.id
                      ? 'bg-white shadow-lg border-l-4 border-red-600'
                      : 'bg-white/50 hover:bg-white hover:shadow'
                  }`}
                >
                  <div className="flex-shrink-0 mr-3 md:mr-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                      activeBenefit === benefit.id ? 'bg-red-100' : 'bg-gray-100'
                    }`}>
                      <div className="w-8 h-8 md:w-10 md:h-10 text-red-600">
                        {benefit.id === 'product-approach' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="9" y1="21" x2="9" y2="9"></line>
                          </svg>
                        )}
                        {benefit.id === 'cloud-migration' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                          </svg>
                        )}
                        {benefit.id === 'data-ai' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                            <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                            <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                            <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                            <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                            <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                          </svg>
                        )}
                        {benefit.id === 'infrastructure' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                          </svg>
                        )}
                        {benefit.id === 'process-optimization' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
                            <polyline points="15 3 18 6 21 3"></polyline>
                            <line x1="10" y1="12" x2="14" y2="12"></line>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className={`font-medium text-sm md:text-base ${
                      activeBenefit === benefit.id ? 'text-red-600' : 'text-gray-800'
                    }`}>
                      {benefit.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Benefit Content */}
          <div className="lg:col-span-2 order-2 lg:order-none min-h-[500px] relative">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                initial={false}
                animate={{
                  opacity: activeBenefit === benefit.id ? 1 : 0,
                  scale: activeBenefit === benefit.id ? 1 : 0.95,
                  display: activeBenefit === benefit.id ? 'block' : 'none',
                }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-100 flex items-center justify-center mr-4 md:mr-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 text-red-600">
                      {benefit.id === 'product-approach' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="3" y1="9" x2="21" y2="9"></line>
                          <line x1="9" y1="21" x2="9" y2="9"></line>
                        </svg>
                      )}
                      {benefit.id === 'cloud-migration' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                        </svg>
                      )}
                      {benefit.id === 'data-ai' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                        </svg>
                      )}
                      {benefit.id === 'infrastructure' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                          <line x1="6" y1="6" x2="6.01" y2="6"></line>
                          <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                      )}
                      {benefit.id === 'process-optimization' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
                          <polyline points="15 3 18 6 21 3"></polyline>
                          <line x1="10" y1="12" x2="14" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">{benefit.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Key Benefits</h4>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((_, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-red-600 mt-1 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="h-5 bg-gray-200 rounded w-full"></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-8 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
                      <div className="text-xs md:text-sm text-gray-600">
                        {benefit.id === 'product-approach' ? 'Increased ROI' :
                         benefit.id === 'cloud-migration' ? 'Cost Reduction' :
                         benefit.id === 'data-ai' ? 'Efficiency Gain' :
                         benefit.id === 'infrastructure' ? 'System Uptime' :
                         'Process Optimization'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Replace these functions with placeholder implementations
function getBenefitPoints(benefitId: string): string[] {
  return ['', '', ''];
}

function getStatistic(benefitId: string): { value: string; label: string } {
  return { 
    value: benefitId === 'product-approach' ? '40%' :
           benefitId === 'cloud-migration' ? '60%' :
           benefitId === 'data-ai' ? '75%' :
           benefitId === 'infrastructure' ? '50%' :
           '65%',
    label: benefitId === 'product-approach' ? 'Increased ROI' :
           benefitId === 'cloud-migration' ? 'Cost Reduction' :
           benefitId === 'data-ai' ? 'Efficiency Gain' :
           benefitId === 'infrastructure' ? 'System Uptime' :
           'Process Optimization'
  };
}

export default Benefits; 