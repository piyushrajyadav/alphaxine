'use client';

import { useEffect, useState } from 'react';
import { initEmailJS } from '@/app/lib/emailjs';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    const initializeEmailJS = async () => {
      try {
        initEmailJS();
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        setInitError(error instanceof Error ? error.message : 'Failed to initialize email service');
      }
    };

    initializeEmailJS();
  }, []);

  if (initError) {
    console.warn('EmailJS initialization error:', initError);
  }

  return <>{children}</>;
} 