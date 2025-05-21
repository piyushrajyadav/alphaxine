'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  href: string;
  icon?: string;
  iconAlt?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  href,
  icon,
  iconAlt = 'Service icon',
  children
}) => {
  return (
    <Link 
      href={href}
      className="block bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-all duration-300 border border-gray-200 hover:shadow-md"
    >
      <div className="flex items-start mb-3">
        {icon && (
          <div className="w-8 h-8 mr-3 flex-shrink-0">
            <Image
              src={icon}
              alt={iconAlt}
              width={32}
              height={32}
            />
          </div>
        )}
        <h4 className="text-lg font-bold text-red-600">{title}</h4>
      </div>
      
      {children || (
        <div className="h-16 bg-gray-200/50 rounded animate-pulse"></div>
      )}
    </Link>
  );
};

export default ServiceCard; 