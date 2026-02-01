"use client";

import { useEffect } from 'react';

export default function StickyCallbackScript() {
  useEffect(() => {
    const callbackContainer = document.getElementById('callback-form-sticky');
    const toolsSection = document.getElementById('tools-we-use-section');
    const asideElement = callbackContainer?.closest('aside');
    const contentGrid = document.getElementById('content-grid');
    const contentArea = document.querySelector('[class*="lg:col-span-3"]');
    
    if (!callbackContainer || !asideElement) return;

    // Make aside match the height of content area so sticky can work properly
    const updateAsideHeight = () => {
      if (contentArea && asideElement) {
        const contentHeight = (contentArea as HTMLElement).offsetHeight;
        const toolsTop = toolsSection ? toolsSection.getBoundingClientRect().top + window.scrollY : Infinity;
        const sectionTop = asideElement.closest('section')?.getBoundingClientRect().top || 0;
        const sectionTopScroll = sectionTop + window.scrollY;
        
        // Set aside height to match content, but stop before tools section
        if (toolsSection && sectionTopScroll + contentHeight > toolsTop) {
          asideElement.style.minHeight = `${toolsTop - sectionTopScroll - 200}px`;
        } else {
          asideElement.style.minHeight = `${contentHeight}px`;
        }
      }
    };

    const handleScroll = () => {
      updateAsideHeight();
      
      if (!toolsSection) return;

      const asideRect = asideElement.getBoundingClientRect();
      const toolsRect = toolsSection.getBoundingClientRect();
      const callbackRect = callbackContainer.getBoundingClientRect();
      const offset = 200;

      // Stop sticky when approaching tools section
      if (asideRect.bottom - callbackRect.height >= toolsRect.top - offset) {
        callbackContainer.style.position = 'relative';
        callbackContainer.style.top = 'auto';
      } else {
        // Let CSS sticky work
        callbackContainer.style.position = '';
        callbackContainer.style.top = '';
      }
    };

    // Throttle scroll events
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Wait for DOM and images to load
    const timeoutId = setTimeout(() => {
      updateAsideHeight();
      window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
      window.addEventListener('resize', optimizedHandleScroll, { passive: true });
      handleScroll();
    }, 500);

    // Also update on load
    window.addEventListener('load', updateAsideHeight);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', optimizedHandleScroll);
      window.removeEventListener('resize', optimizedHandleScroll);
      window.removeEventListener('load', updateAsideHeight);
    };
  }, []);

  return null;
}
