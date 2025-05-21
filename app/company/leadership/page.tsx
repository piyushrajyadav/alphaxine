'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';
import CorporatePresentation from '@/app/components/leadership/CorporatePresentation';

interface LeaderProfile {
  id: string;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  videoId?: string;
}

const LeadershipTeam = () => {
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const leadershipProfiles: LeaderProfile[] = [
    {
      id: 'tamal-datta',
      name: 'Tamal Datta',
      position: 'Managing Director',
      image: '/image/tamal datta.jpeg',
      linkedin: 'https://linkedin.com/in/tamaldatta',
      email: 'tamaldatta@alphaxine.com',
    },
    {
      id: 'mallika-datta',
      name: 'Mallika Datta',
      position: 'Chief Executive Officer',
      image: '/image/mallika datta.jpeg',
      linkedin: 'https://linkedin.com/in/mallikadatta',
      email: 'mallikadatta@alphaxine.com',
    },
    {
      id: 'abhijit-pal',
      name: 'Abhijit Pal',
      position: 'Chief Technology Officer',
      image: '/image/abhijit pal.jpeg',
      linkedin: 'https://linkedin.com/in/abhijitpal',
      email: 'abhijitpal@alphaxine.com',
    },
    {
      id: 'sourav-mukharjee',
      name: 'Sourav Mukharjee',
      position: 'Chief Operations Officer',
      image: '/image/sorav mukhrjee.jpeg',
      linkedin: 'https://linkedin.com/in/souravmukharjee',
      email: 'souravmukharjee@alphaxine.com',
    },
  ];

  const openVideoModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoId('');
  };

  return (
    <BackgroundFix>
      <div className="force-gray-bg">
        {/* Hero Section */}
        <section className="text-black py-20 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Our Leadership Team</h1>
              <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Executive Leadership</h2>
              <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipProfiles.map((leader) => (
                <div 
                  key={leader.id} 
                  className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64">
                    <Image 
                      src={leader.image} 
                      alt={leader.name} 
                      fill
                      className="object-cover"
                    />
                    {leader.videoId && (
                      <button 
                        onClick={() => openVideoModal(leader.videoId!)}
                        className="absolute bottom-4 right-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors"
                        aria-label={`Watch ${leader.name}'s introduction video`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-red-600 mb-1">{leader.name}</h3>
                    <p className="text-black font-medium mb-4">{leader.position}</p>
                    
                    <div className="flex space-x-3 mb-4">
                      {leader.linkedin && (
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:text-black transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {leader.twitter && (
                        <a href={leader.twitter} target="_blank" rel="noopener noreferrer" className="text-black hover:text-black transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                      )}
                      {leader.email && (
                        <a href={`mailto:${leader.email}`} className="text-black hover:text-black transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    
                    <button
                      onClick={() => setActiveProfile(leader.id === activeProfile ? null : leader.id)}
                      className="text-black font-medium text-sm hover:text-black inline-flex items-center"
                    >
                      {leader.id === activeProfile ? 'View Less' : 'View Full Bio'}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${leader.id === activeProfile ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  {leader.id === activeProfile && (
                    <div className="px-6 pb-6 mt-2">
                      <div className="border-t border-gray-200 pt-4">
                        <div className="space-y-3">
                          <div className="h-5 bg-gray-200 rounded w-full"></div>
                          <div className="h-5 bg-gray-200 rounded w-full"></div>
                          <div className="h-5 bg-gray-200 rounded w-full"></div>
                          <div className="h-5 bg-gray-200 rounded w-full"></div>
                          <div className="h-5 bg-gray-200 rounded w-4/5"></div>
                        </div>
                        {leader.videoId && (
                          <button
                            onClick={() => openVideoModal(leader.videoId!)}
                            className="mt-4 inline-flex items-center text-black font-medium hover:text-black"
                          >
                            Watch Introduction Video
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-red-600">Honorary Advisory Board</h2>
              <div className="h-6 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/image/amalan_chakrabarti.jpg" 
                      alt="Dr. Amalan Chakrabarti" 
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-red-600">Dr. Amalan Chakrabarti</h3>
                    <p className="text-black">Distinguished Professor</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>

              <div className="rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-red-600">Advisor Position</h3>
                    <p className="text-black">To Be Announced</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>

              <div className="rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-red-600">Strategic Consultant</h3>
                    <p className="text-black">To Be Announced</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-black border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Join Our Team</h2>
            <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto mb-8"></div>
            <Link href="/careers" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 inline-flex items-center">
              View Opportunities
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Corporate Presentation */}
        <CorporatePresentation />
      </div>
    </BackgroundFix>
  );
};

export default LeadershipTeam; 











