'use client';

import React, { useEffect } from 'react';

/**
 * BackgroundFix component ensures all pages have the correct gray background.
 * Place this component at the root of any page that's not properly displaying the gray background.
 */
const BackgroundFix: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Force body background
    document.body.classList.add('bg-gray-50');
    
    // Find white background sections that should be gray
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      // Remove any explicit white background
      if (section.classList.contains('bg-white')) {
        section.classList.remove('bg-white');
        section.classList.add(index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100');
      }
      
      // Ensure sections have at least one gray background class
      if (!section.classList.contains('bg-gray-50') && !section.classList.contains('bg-gray-100')) {
        section.classList.add(index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100');
      }
    });

    return () => {
      document.body.classList.remove('bg-gray-50');
    };
  }, []);

  return (
    <div className="bg-gray-50">
      {children}
    </div>
  );
};

export default BackgroundFix; 