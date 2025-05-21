'use client';

import React from 'react';

interface ServiceSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  children
}) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        {title}
      </h3>
      
      {description ? (
        <p className="mb-6 text-gray-700">{description}</p>
      ) : (
        <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
};

export default ServiceSection; 