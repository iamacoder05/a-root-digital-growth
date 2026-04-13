import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arootdigital.com';
  
  const services = [
    '/digital-marketing-agency-in-pune-pcmc',
    '/seo-agency-in-pune-pcmc',
    '/social-media-marketing-agency-in-pune-pcmc',
    '/performance-marketing-agency-in-pune-pcmc',
    '/website-development-company-in-pune-pcmc',
    '/content-marketing-agency-in-pune-pcmc',
    '/app-marketing-agency-in-pune-pcmc'
  ];

  const serviceUrls = services.map(service => ({
    url: `${baseUrl}${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...serviceUrls,
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}



