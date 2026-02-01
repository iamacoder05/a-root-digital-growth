"use client";

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import CallbackRequestForm from '@/components/CallbackRequestForm';

interface StickyCallbackFormProps {
  serviceName: string;
  children?: React.ReactNode;
}

export default function StickyCallbackForm({ serviceName, children }: StickyCallbackFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldBeSticky, setShouldBeSticky] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanup: (() => void) | null = null;

    // Wait for DOM to be ready
    const setupScrollHandler = () => {
      const toolsSection = document.getElementById('tools-we-use-section');
      if (!toolsSection) {
        // If tools section doesn't exist yet, keep sticky
        setShouldBeSticky(true);
        return;
      }

      const handleScroll = () => {
        const containerRect = container.getBoundingClientRect();
        const toolsRect = toolsSection.getBoundingClientRect();
        const offset = 100; // Offset before ToolsWeUse section

        // Stop being sticky when container would overlap with tools section
        if (containerRect.bottom >= toolsRect.top - offset) {
          setShouldBeSticky(false);
        } else {
          setShouldBeSticky(true);
        }
      };

      // Use requestAnimationFrame for smoother performance
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

      window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
      handleScroll(); // Check initial state

      cleanup = () => {
        window.removeEventListener('scroll', optimizedHandleScroll);
      };
    };

    // Check immediately and after a short delay to ensure DOM is ready
    setupScrollHandler();
    const timeoutId = setTimeout(setupScrollHandler, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`space-y-6 ${shouldBeSticky ? 'sticky top-24' : 'relative'}`}
      style={{ alignSelf: 'flex-start', width: '100%', zIndex: 10 }}
    >
      <Card className="p-8 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm w-full">
        <CallbackRequestForm serviceName={serviceName} />
      </Card>
      {children}
    </div>
  );
}
