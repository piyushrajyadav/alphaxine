'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/slider01.webp',
      heading: 'Heading01',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/images/slider01.webp', // You can replace with another slider image
      heading: 'Heading02',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="relative w-full h-full">
            <Image 
              src={slide.image}
              alt={slide.heading}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              className="brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center z-20">
              <div className="container mx-auto px-4">
                <div className={`max-w-3xl mx-auto ${index === currentSlide ? 'animate-fadeIn' : ''}`}>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    {slide.heading}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                    {slide.text}
                  </p>
                  <button className="bg-red-600 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-10' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
