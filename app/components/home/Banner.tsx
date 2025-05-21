'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/image/banner1.webp',
      title: '',
      subtitle: '',
      description: '',
      ctaText: 'Connect with us',
      ctaLink: '/contact',
    },
    {
      image: '/image/banner2.webp',
      title: '',
      subtitle: '',
      description: '',
      ctaText: 'Explore our services',
      ctaLink: '/services',
    },
    {
      image: '/image/banner3.webp',
      title: '',
      subtitle: '',
      description: '',
      ctaText: 'Discover our solutions',
      ctaLink: '/solutions',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10 pointer-events-none" />
          <Image
            src={slide.image}
            alt="Banner image"
            fill
            className="object-cover z-0"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-start">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl text-white">
                <h2 className="text-5xl font-bold mb-2 slide-in-left text-red-600 h-12">
                  {slide.title || <span className="bg-gray-200/20 animate-pulse rounded h-full block w-3/4"></span>}
                </h2>
                <h3 className="text-2xl font-normal mb-6 slide-in-left text-red-600 h-8" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle || <span className="bg-gray-200/20 animate-pulse rounded h-full block w-2/3"></span>}
                </h3>
                <p className="text-xl mb-8 slide-in-left h-16" style={{ animationDelay: '0.4s' }}>
                  {slide.description || <span className="bg-gray-200/20 animate-pulse rounded h-full block w-full"></span>}
                </p>
                <div className="slide-in-left relative z-50" style={{ animationDelay: '0.6s' }}>
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
                  >
                    {slide.ctaText}
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-600 w-8' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner; 