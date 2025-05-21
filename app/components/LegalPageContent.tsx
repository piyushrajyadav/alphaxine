'use client';

import React from 'react';

interface LegalPageContentProps {
  title: string;
}

const LegalPageContent: React.FC<LegalPageContentProps> = ({ title }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-8">{title}</h1>
        
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-5/6"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-2/3"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-4/5"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 animate-pulse rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageContent; 