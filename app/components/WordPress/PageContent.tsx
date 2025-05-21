'use client';

import React from 'react';

interface PageContentProps {
  title?: string;
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ title, children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
      {children || (
        <div className="space-y-6">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-24 bg-gray-100 rounded"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-16 bg-gray-100 rounded"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
          <div className="h-24 bg-gray-100 rounded"></div>
        </div>
      )}
    </div>
  );
};

export default PageContent; 