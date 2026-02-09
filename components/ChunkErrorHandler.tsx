'use client';

import { useEffect } from 'react';

/**
 * Handles chunk load errors that occur when users keep tabs open during deployments.
 * This is a Vercel-recommended fix for Next.js chunk loading issues.
 * 
 * When a new deployment happens while a user has a tab open:
 * - HTML references new chunks
 * - Browser tries to load old cached chunks
 * - ChunkLoadError occurs
 * 
 * This component automatically reloads the page when such errors occur.
 * 
 * Industry standard workaround used by Next.js core team and large SaaS apps.
 */
export default function ChunkErrorHandler() {
  useEffect(() => {
    const handler = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('ChunkLoadError')) {
        window.location.reload();
      }
    };

    window.addEventListener('unhandledrejection', handler);
    return () => window.removeEventListener('unhandledrejection', handler);
  }, []);

  return null;
}
