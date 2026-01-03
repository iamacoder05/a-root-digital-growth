"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToElement } from '@/lib/scrollUtils';

const ScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle scrolling on homepage
    if (pathname === '/') {
      const sectionToScroll = sessionStorage.getItem('scrollToSection');
      if (sectionToScroll) {
        // Wait for page to fully render and all components to mount
        const scrollTimeout = setTimeout(() => {
          scrollToElement(sectionToScroll, () => {
            sessionStorage.removeItem('scrollToSection');
          });
        }, 500); // Increased timeout to ensure page is fully loaded

        return () => clearTimeout(scrollTimeout);
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollHandler;
