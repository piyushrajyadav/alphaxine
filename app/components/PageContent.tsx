'use client';

import React from 'react';
import PageHero from '@/app/components/UI/PageHero';
import BackgroundFix from '@/app/components/Layout/BackgroundFix';

interface PageContentProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ title, subtitle = '', children }) => {
  return (
    <BackgroundFix>
      <div className="min-h-screen force-gray-bg">
        <PageHero 
          title={title}
          subtitle={subtitle}
        />
        
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto mb-12">
            {children ? (
              children
            ) : (
              <>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-5/6 mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-2/3 mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-4/5 mb-4"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
              </>
            )}
          </div>
        </section>
      </div>
    </BackgroundFix>
  );
};

export default PageContent; 