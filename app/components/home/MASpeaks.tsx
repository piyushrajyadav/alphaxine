'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';

const MASpeaks = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    setIsVideoPlaying(true);
    // Add a small delay to ensure state has updated before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 50);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <div className="h-16 bg-gray-700/50 rounded"></div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <div className="h-16 bg-gray-700/50 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Image
                src="/image/tamal datta.jpeg"
                alt="Tamal Datta - Managing Director"
                width={60}
                height={60}
                className="rounded-full mr-4"
                unoptimized={true}
              />
              <div>
                <h4 className="font-semibold">Tamal Datta</h4>
                <p className="text-sm text-gray-300">Managing Director, alphaxine</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
              {!isVideoPlaying ? (
                <>
                  <Image
                    src="/images/video-thumbnail.jpg"
                    alt="Video Thumbnail"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={playVideo}
                      className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src="/videos/ma-speaks.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="h-6 bg-gray-700/30 rounded w-2/3 mx-auto mb-1"></div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="h-6 bg-gray-700/30 rounded w-2/3 mx-auto mb-1"></div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="h-6 bg-gray-700/30 rounded w-2/3 mx-auto mb-1"></div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MASpeaks; 