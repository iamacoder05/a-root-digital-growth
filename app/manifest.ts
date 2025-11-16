import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'A-Root Digital Growth',
    short_name: 'A-Root Digital',
    description: 'Transform your digital presence with expert digital marketing services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#5a0d73',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/ar-logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/assets/ar-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    categories: ['business', 'marketing', 'productivity'],
    orientation: 'portrait-primary',
    lang: 'en-US',
  };
}

