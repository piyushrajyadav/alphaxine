'use client';

import { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 95, title: 'Customer Retaintions', icon: '👥' },
    { id: 2, value: 0, target: 92, title: 'Ontime Delivery', icon: '⏱️' },
    { id: 3, value: 0, target: 98, title: 'Quality', icon: '💎' },
    { id: 4, value: 0, target: 97, title: 'Customer Satisfaction', icon: '😊' },
  ]);

  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
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
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const updatedCounters = counters.map((counter) => ({
        ...counter,
        value: Math.floor(counter.target * (progress > 1 ? 1 : progress)),
      }));

      setCounters(updatedCounters);

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute top-40 right-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-1/3 w-32 h-32 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Achievements</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            We take pride in our accomplishments and the trust our clients place in us. Here's a snapshot of our journey so far.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter) => (
            <div 
              key={counter.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="text-4xl mb-4">{counter.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{counter.value}+</h3>
              <p className="text-xl text-white/80">{counter.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
