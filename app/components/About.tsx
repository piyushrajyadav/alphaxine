'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 opacity-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about1.webp"
                  alt="About alphaxine"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-8 w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-center text-sm z-10">

                <span>10+ Years Experience</span>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-600 rounded-full z-0"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h6 className="text-red-600 font-bold text-lg mb-2">About Our Company</h6>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">We Provide Innovative <span className="text-red-600">Business Solutions</span> for Your Success</h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                alphaxine is a leading provider of innovative business solutions and IT services. With over 10 years of experience, we have helped numerous organizations transform and grow in the digital era. Our team of experts is dedicated to delivering high-quality solutions that meet your specific business needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We specialize in SAP implementation, web development, and technology consulting, providing end-to-end services to help businesses streamline their operations, enhance customer experiences, and achieve their goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-md text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Certified Experts</h4>
                  <p className="text-gray-600">Our team consists of certified professionals with extensive industry experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-md text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Fast Delivery</h4>
                  <p className="text-gray-600">We deliver projects on time without compromising on quality.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
