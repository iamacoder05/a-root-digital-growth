import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arootdigital.com';
  const lastMod = new Date('2026-04-20T07:46:51+00:00');
  
  const mainPages = [
    { url: '', priority: 1.0 },
    { url: '/digital-marketing-agency-in-pune-pcmc', priority: 0.8 },
    { url: '/seo-agency-in-pune-pcmc', priority: 0.8 },
    { url: '/social-media-marketing-agency-in-pune-pcmc', priority: 0.8 },
    { url: '/performance-marketing-agency-in-pune-pcmc', priority: 0.8 },
    { url: '/website-development-company-in-pune-pcmc', priority: 0.8 },
    { url: '/content-marketing-agency-in-pune-pcmc', priority: 0.8 },
    { url: '/app-marketing-agency-in-pune-pcmc', priority: 0.8 },
    { url: '/blog/social-media-marketing-trends-2026', priority: 0.8 },
    { url: '/blog/ten-things-to-rank-higher-2026', priority: 0.8 },
    { url: '/blog/linkedin-marketing-for-business', priority: 0.8 },
    { url: '/blog', priority: 0.8 },
    { url: '/faq', priority: 0.8 },
    { url: '/privacy-policy', priority: 0.8 },
    { url: '/terms-conditions', priority: 0.8 },
  ];

  const secondaryPages = [
    { url: '/blog/10-seo-tips-to-boost-your-website-ranking', priority: 0.64 },
    { url: '/blog/advanced-seo-techniques-2025', priority: 0.64 },
    { url: '/blog/local-seo-strategy-guide', priority: 0.64 },
    { url: '/blog?category=SEO', priority: 0.64 },
    { url: '/blog?category=PPC', priority: 0.64 },
    { url: '/blog/content-marketing-strategy-guide', priority: 0.64 },
    { url: '/blog/blog-content-creation-tips', priority: 0.64 },
    { url: '/blog?category=Content%20Marketing', priority: 0.64 },
  ];

  const allPages = [...mainPages, ...secondaryPages];

  return allPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: page.priority,
  }));
}
