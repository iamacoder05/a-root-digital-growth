/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' for Vercel deployment with API routes
  // output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false, // Disable ETags to prevent caching issues
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Reduce JavaScript bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Add headers to prevent aggressive caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'development'
              ? 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
              : 'public, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // SEO Rewrites and Redirects
  async rewrites() {
    return [
      {
        source: '/digital-marketing-agency-in-pune-pcmc',
        destination: '/services/digital-marketing',
      },
      {
        source: '/seo-agency-in-pune-pcmc',
        destination: '/services/search-engine-optimization',
      },
      {
        source: '/social-media-marketing-agency-in-pune-pcmc',
        destination: '/services/social-media-marketing',
      },
      {
        source: '/performance-marketing-agency-in-pune-pcmc',
        destination: '/services/ppc-paid-marketing',
      },
      {
        source: '/website-development-company-in-pune-pcmc',
        destination: '/services/web-design',
      },
      {
        source: '/content-marketing-agency-in-pune-pcmc',
        destination: '/services/content-marketing',
      },
      {
        source: '/app-marketing-agency-in-pune-pcmc',
        destination: '/services/app-marketing',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/services/digital-marketing',
        destination: '/digital-marketing-agency-in-pune-pcmc',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization',
        destination: '/seo-agency-in-pune-pcmc',
        permanent: true,
      },
      {
        source: '/services/social-media-marketing',
        destination: '/social-media-marketing-agency-in-pune-pcmc',
        permanent: true,
      },
      {
        source: '/services/ppc-paid-marketing',
        destination: '/performance-marketing-agency-in-pune-pcmc',
        permanent: true,
      },
      {
        source: '/services/web-design',
        destination: '/website-development-company-in-pune-pcmc',
        permanent: true,
      },
      {
        source: '/services/content-marketing',
        destination: '/content-marketing-agency-in-pune-pcmc',
        permanent: true,
      },
      {
        source: '/services/app-marketing',
        destination: '/app-marketing-agency-in-pune-pcmc',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

