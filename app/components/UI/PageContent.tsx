import React from 'react';

interface PageContentProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  showPlaceholder?: boolean;
  placeholderLines?: number;
  placeholderHeight?: string;
}

const PageContent: React.FC<PageContentProps> = ({
  children,
  title,
  subtitle,
  className = '',
  showPlaceholder = true,
  placeholderLines = 3,
  placeholderHeight = 'h-6'
}) => {
  return (
    <div className={`content-wrapper ${className}`}>
      {title && <h2 className="text-3xl font-bold text-red-600 mb-4">{title}</h2>}
      {subtitle && <h3 className="text-xl font-semibold text-gray-800 mb-4">{subtitle}</h3>}
      
      {children ? (
        children
      ) : (
        showPlaceholder && (
          <div className="placeholder-content space-y-4">
            {[...Array(placeholderLines)].map((_, index) => (
              <div 
                key={index} 
                className={`bg-gray-200 rounded w-full ${placeholderHeight}`}
              ></div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default PageContent; 