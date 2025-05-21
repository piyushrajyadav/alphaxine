'use client';

import Image from 'next/image';
import Link from 'next/link';

const ChallengesMission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Your Challenges = Our Mission</h2>
            <p className="text-black mb-6">
              At Alphaxine, we understand the complex challenges businesses face in today's rapidly evolving digital landscape. Your unique challenges become our mission, driving us to create tailored solutions that deliver tangible results and sustainable growth.
            </p>
            <p className="text-black mb-8">
              Our approach combines deep industry expertise, cutting-edge technology, and a passion for excellence to transform your challenges into opportunities for innovation and competitive advantage.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-600">
                <Image 
                  src="/image/tamal datta.jpeg" 
                  alt="Tamal Datta" 
                  width={64} 
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold text-red-600">Tamal Datta</p>
                <p className="text-sm text-gray-600">Managing Director, Alphaxine</p>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Discuss Your Challenges
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="order-1 md:order-2 relative aspect-square md:h-96">
            <Image 
              src="/image/tamal datta.jpeg" 
              alt="Tamal Datta" 
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesMission; 