import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Star, Users, Target, Award, TrendingUp, Share2, ImageIcon, Building2, Brain, Sparkles, ShoppingCart, Smartphone, AppWindow, FileText, MapPin, Globe, Calendar, ArrowRight, BarChart } from 'lucide-react';
import CallbackRequestForm from '@/components/CallbackRequestForm';
import ToolsWeUse from '@/components/ToolsWeUse';
import SectionDivider from '@/components/SectionDivider';
import ServiceFAQ from '@/components/ServiceFAQ';
import { Card } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Blog posts data for related posts section
const allBlogPosts = [
  {
    id: "1",
    slug: "10-seo-tips-to-boost-your-website-ranking",
    title: "10 SEO Tips to Boost Your Website Ranking in 2025",
    excerpt: "Discover proven SEO strategies that can help improve your website's search engine rankings and drive more organic traffic.",
    image: "/placeholder.svg",
    date: "2025-01-15",
    category: "SEO",
    readTime: "5 min read"
  },
  {
    id: "2",
    slug: "advanced-seo-techniques-2025",
    title: "Advanced SEO Techniques for 2025: Beyond the Basics",
    excerpt: "Take your SEO strategy to the next level with these advanced techniques that go beyond basic optimization.",
    image: "/placeholder.svg",
    date: "2025-01-12",
    category: "SEO",
    readTime: "12 min read"
  },
  {
    id: "3",
    slug: "local-seo-strategy-guide",
    title: "Local SEO Strategy: Dominate Your Local Market",
    excerpt: "Learn how to optimize your business for local search and attract customers in your area.",
    image: "/placeholder.svg",
    date: "2025-01-08",
    category: "SEO",
    readTime: "8 min read"
  },
  {
    id: "4",
    slug: "social-media-marketing-trends-2025",
    title: "Social Media Marketing Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging social media marketing trends that will shape digital marketing this year.",
    image: "/placeholder.svg",
    date: "2025-01-10",
    category: "Social Media",
    readTime: "7 min read"
  },
  {
    id: "5",
    slug: "instagram-marketing-strategies",
    title: "Instagram Marketing Strategies That Drive Engagement",
    excerpt: "Discover proven Instagram marketing strategies to grow your following and increase engagement.",
    image: "/placeholder.svg",
    date: "2025-01-07",
    category: "Social Media",
    readTime: "9 min read"
  },
  {
    id: "6",
    slug: "linkedin-marketing-for-business",
    title: "LinkedIn Marketing for B2B Businesses: Complete Guide",
    excerpt: "Master LinkedIn marketing to generate leads and build your B2B brand presence.",
    image: "/placeholder.svg",
    date: "2025-01-03",
    category: "Social Media",
    readTime: "11 min read"
  },
  {
    id: "7",
    slug: "content-marketing-strategy-guide",
    title: "Complete Guide to Content Marketing Strategy",
    excerpt: "Learn how to create a comprehensive content marketing strategy that engages your audience and drives conversions.",
    image: "/placeholder.svg",
    date: "2025-01-05",
    category: "Content Marketing",
    readTime: "10 min read"
  },
  {
    id: "8",
    slug: "blog-content-creation-tips",
    title: "Blog Content Creation: Tips for Engaging Readers",
    excerpt: "Learn how to create blog content that captivates your audience and keeps them coming back for more.",
    image: "/placeholder.svg",
    date: "2024-12-30",
    category: "Content Marketing",
    readTime: "7 min read"
  },
  {
    id: "9",
    slug: "ppc-advertising-guide",
    title: "PPC Advertising: A Complete Guide to Paid Search",
    excerpt: "Master pay-per-click advertising to drive targeted traffic and maximize your ROI.",
    image: "/placeholder.svg",
    date: "2024-12-28",
    category: "PPC",
    readTime: "9 min read"
  },
  {
    id: "10",
    slug: "web-design-best-practices",
    title: "Web Design Best Practices for 2025",
    excerpt: "Discover the latest web design trends and best practices to create stunning, user-friendly websites.",
    image: "/placeholder.svg",
    date: "2024-12-25",
    category: "Web Design",
    readTime: "8 min read"
  },
  {
    id: "11",
    slug: "analytics-insights-guide",
    title: "Analytics & Insights: Making Data-Driven Decisions",
    excerpt: "Learn how to use analytics to gain insights and make informed decisions for your business.",
    image: "/placeholder.svg",
    date: "2024-12-22",
    category: "Analytics",
    readTime: "6 min read"
  }
];

// Map service slugs to blog categories
const serviceToBlogCategory: Record<string, string> = {
  'search-engine-optimization': 'SEO',
  'digital-marketing': 'Digital Marketing',
  'app-marketing': 'App Marketing',
  'content-marketing': 'Content Marketing',
  'ppc-paid-marketing': 'PPC',
  'martech-data-analytics': 'Analytics',
  'seo-services-dubai': 'SEO',
  'seo-services-malaysia': 'SEO',
  'digital-services-singapore': 'Digital Marketing',
  'digital-services-new-york-city': 'Digital Marketing',
  'digital-services-pune': 'Digital Marketing',
  'seo-services-pune': 'SEO'
};

// Service data with detailed information
const serviceDetails = {
  'search-engine-optimization': {
    title: 'Search Engine Optimization',
    icon: 'Search',
    image: '/assets/SEO.jpg',
    description: 'Boost your search rankings with data-driven SEO strategies that deliver measurable results.',
    longDescription: 'Our comprehensive SEO optimization service combines technical expertise, content strategy, and data-driven insights to improve your search engine rankings and drive organic traffic to your website. We use the latest SEO techniques and tools to ensure your business appears at the top of search results.',
    features: [
      'Keyword research and analysis',
      'On-page optimization',
      'Technical SEO audit and fixes',
      'Content optimization and strategy',
      'Link building and outreach',
      'Local SEO optimization',
      'Monthly reporting and analytics'
    ],
    benefits: [
      'Increased organic traffic',
      'Higher search engine rankings',
      'Better user experience',
      'Long-term sustainable growth',
      'Competitive advantage'
    ],
    stats: [
      { label: 'Average Ranking Improvement', value: '85%', icon: TrendingUp },
      { label: 'Organic Traffic Growth', value: '150%', icon: Users },
      { label: 'Client Satisfaction', value: '98%', icon: Star }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    icon: 'Share2',
    image: '/assets/SEO.jpg',
    description: 'Comprehensive digital marketing solutions that drive growth across all online channels.',
    longDescription: 'Our digital marketing service provides end-to-end solutions to help your business thrive online. We combine SEO, social media, content marketing, email marketing, and more to create integrated campaigns that maximize your online presence and drive measurable results.',
    features: [
      'Multi-channel strategy development',
      'Social media management',
      'Email marketing campaigns',
      'Content creation and distribution',
      'Brand awareness campaigns',
      'Lead generation and nurturing',
      'Performance analytics and optimization'
    ],
    benefits: [
      'Increased brand visibility',
      'Higher engagement rates',
      'More qualified leads',
      'Better customer relationships',
      'Improved ROI across channels'
    ],
    stats: [
      { label: 'Brand Awareness', value: '320%', icon: Target },
      { label: 'Lead Generation', value: '200%', icon: Users },
      { label: 'ROI Improvement', value: '400%', icon: Award }
    ]
  },
  'app-marketing': {
    title: 'App Marketing',
    icon: 'AppWindow',
    image: '/assets/SEO.jpg',
    description: 'Get your app discovered, downloaded, and used by the right audience.',
    longDescription: 'Our app marketing service helps you maximize app visibility, drive downloads, and increase user engagement. We specialize in App Store Optimization (ASO), paid app advertising, user acquisition campaigns, and retention strategies to help your app succeed in competitive markets.',
    features: [
      'App Store Optimization (ASO)',
      'Keyword research and optimization',
      'App store listing optimization',
      'Paid app advertising campaigns',
      'User acquisition strategies',
      'Retention and engagement campaigns',
      'Performance tracking and analytics'
    ],
    benefits: [
      'Higher app store rankings',
      'Increased downloads',
      'Better user retention',
      'Improved app visibility',
      'Higher conversion rates'
    ],
    stats: [
      { label: 'Download Growth', value: '250%', icon: TrendingUp },
      { label: 'App Store Ranking', value: 'Top 10', icon: Award },
      { label: 'User Retention', value: '180%', icon: Users }
    ]
  },
  'content-marketing': {
    title: 'Content Marketing',
    icon: 'FileText',
    image: '/assets/SEO.jpg',
    description: 'Compelling content that tells your story and resonates with your target audience.',
    longDescription: 'Our content marketing service focuses on creating valuable, relevant content that attracts and retains your target audience. From blog posts to videos, we help you establish thought leadership and build lasting relationships with your customers.',
    features: [
      'Content strategy and planning',
      'Blog post creation',
      'Video content production',
      'Infographic design',
      'Email newsletter campaigns',
      'Content distribution',
      'Performance tracking'
    ],
    benefits: [
      'Established thought leadership',
      'Increased brand credibility',
      'Better customer engagement',
      'Higher conversion rates',
      'SEO benefits from content'
    ],
    stats: [
      { label: 'Content Engagement', value: '280%', icon: Target },
      { label: 'Lead Generation', value: '175%', icon: Users },
      { label: 'Content Shares', value: '350%', icon: Share2 }
    ]
  },
  'ppc-paid-marketing': {
    title: 'PPC/Paid Marketing',
    icon: 'MousePointerClick',
    image: '/assets/SEO.jpg',
    description: 'Maximize ROI with strategic paid advertising campaigns across Google and social platforms.',
    longDescription: 'Our PPC/Paid Marketing service maximizes your return on investment through expertly crafted paid campaigns. We manage your Google Ads, Facebook Ads, LinkedIn Ads, and other paid platforms to drive targeted traffic and increase conversions.',
    features: [
      'Google Ads management',
      'Facebook & Instagram Ads',
      'LinkedIn Advertising',
      'Campaign strategy and setup',
      'Keyword research and bidding',
      'Ad creative optimization',
      'A/B testing and conversion tracking',
      'Monthly optimization and reporting'
    ],
    benefits: [
      'Immediate traffic generation',
      'Targeted audience reach',
      'Measurable ROI',
      'Quick results and scalability',
      'Competitive bidding advantage'
    ],
    stats: [
      { label: 'Average ROI', value: '300%', icon: TrendingUp },
      { label: 'Conversion Rate', value: '4.2%', icon: Target },
      { label: 'Cost Per Acquisition', value: '65% Lower', icon: Award }
    ]
  },
  'martech-data-analytics': {
    title: 'MarTech / Data Analytics',
    icon: 'BarChart',
    image: '/assets/SEO.jpg',
    description: 'Data-driven insights and marketing technology solutions that power your growth.',
    longDescription: 'Our MarTech/Data Analytics service provides comprehensive data analysis, marketing technology implementation, and actionable insights to help you understand your audience, track performance, and make data-driven decisions that drive business growth.',
    features: [
      'Marketing technology stack setup',
      'Google Analytics & Tag Manager',
      'Custom dashboard creation',
      'Data integration and automation',
      'Performance reporting and analysis',
      'Conversion tracking and attribution',
      'ROI measurement and optimization'
    ],
    benefits: [
      'Data-driven decision making',
      'Marketing automation',
      'Better resource allocation',
      'Improved campaign performance',
      'Measurable business impact'
    ],
    stats: [
      { label: 'Data Accuracy', value: '99.5%', icon: Award },
      { label: 'Insight Implementation', value: '95%', icon: CheckCircle },
      { label: 'Revenue Growth', value: '180%', icon: TrendingUp }
    ]
  },
  'seo-services-dubai': {
    title: 'SEO Services in Dubai',
    icon: 'Search',
    image: '/assets/SEO.jpg',
    description: 'Boost your search rankings in Dubai with localized SEO strategies tailored for the UAE market.',
    longDescription: 'Our SEO services in Dubai are specifically designed for the UAE market, helping businesses improve their local and international search visibility. We understand the unique digital landscape of Dubai and create strategies that resonate with local audiences while targeting global markets.',
    features: [
      'Dubai-specific keyword research',
      'Local SEO optimization for UAE',
      'Arabic and English content optimization',
      'Google Business Profile optimization',
      'Local citation building',
      'Dubai market competitor analysis',
      'Monthly performance reporting'
    ],
    benefits: [
      'Increased visibility in Dubai market',
      'Higher local search rankings',
      'Better engagement with UAE audience',
      'Improved international reach',
      'Competitive advantage in Dubai'
    ],
    stats: [
      { label: 'Local Ranking Improvement', value: '90%', icon: TrendingUp },
      { label: 'Dubai Traffic Growth', value: '180%', icon: Users },
      { label: 'Client Satisfaction', value: '98%', icon: Star }
    ]
  },
  'seo-services-malaysia': {
    title: 'SEO Services in Malaysia',
    icon: 'Search',
    image: '/assets/SEO.jpg',
    description: 'Dominate search results in Malaysia with SEO strategies optimized for the Malaysian market.',
    longDescription: 'Our SEO services in Malaysia are tailored to help businesses succeed in the Malaysian digital landscape. We optimize for both Malay and English searches, understand local search behavior, and create strategies that drive results for Malaysian businesses.',
    features: [
      'Malaysia-specific keyword research',
      'Local SEO for Malaysian market',
      'Malay and English content optimization',
      'Google My Business optimization',
      'Local directory submissions',
      'Malaysian market analysis',
      'Regular performance tracking'
    ],
    benefits: [
      'Strong presence in Malaysia',
      'Higher search rankings locally',
      'Better engagement with Malaysian audience',
      'Increased organic traffic',
      'Market leadership in Malaysia'
    ],
    stats: [
      { label: 'Search Ranking Growth', value: '85%', icon: TrendingUp },
      { label: 'Malaysia Traffic', value: '200%', icon: Users },
      { label: 'Client Success Rate', value: '97%', icon: Star }
    ]
  },
  'digital-services-singapore': {
    title: 'Digital Services in Singapore',
    icon: 'Share2',
    image: '/assets/SEO.jpg',
    description: 'Comprehensive digital marketing solutions tailored for the competitive Singapore market.',
    longDescription: 'Our digital services in Singapore help businesses thrive in one of Asia\'s most competitive digital markets. We combine SEO, social media, content marketing, and paid advertising to create integrated campaigns that drive results for Singaporean businesses.',
    features: [
      'Singapore market strategy',
      'Multi-channel digital campaigns',
      'Local and international SEO',
      'Social media management',
      'Content marketing in Singapore',
      'PPC campaigns for Singapore',
      'Performance analytics and reporting'
    ],
    benefits: [
      'Strong digital presence in Singapore',
      'Increased brand visibility',
      'Higher engagement rates',
      'More qualified leads',
      'Competitive advantage in Singapore'
    ],
    stats: [
      { label: 'Brand Visibility', value: '350%', icon: Target },
      { label: 'Lead Generation', value: '220%', icon: Users },
      { label: 'ROI Improvement', value: '420%', icon: Award }
    ]
  },
  'digital-services-new-york-city': {
    title: 'Digital Services in New York City',
    icon: 'Share2',
    image: '/assets/SEO.jpg',
    description: 'Powerful digital marketing solutions for businesses competing in the New York City market.',
    longDescription: 'Our digital services in New York City are designed for businesses operating in one of the world\'s most competitive markets. We help NYC businesses stand out with strategic digital marketing that drives growth, engagement, and conversions in the Big Apple.',
    features: [
      'NYC market-specific strategies',
      'Local SEO for New York',
      'Social media campaigns',
      'Content marketing',
      'PPC advertising',
      'NYC competitor analysis',
      'Comprehensive reporting'
    ],
    benefits: [
      'Increased NYC market share',
      'Higher local visibility',
      'Better customer engagement',
      'More qualified leads',
      'Strong competitive position'
    ],
    stats: [
      { label: 'Market Visibility', value: '380%', icon: Target },
      { label: 'Lead Generation', value: '250%', icon: Users },
      { label: 'ROI Growth', value: '450%', icon: Award }
    ]
  },
  'digital-services-pune': {
    title: 'Digital Services in Pune',
    icon: 'Share2',
    image: '/assets/SEO.jpg',
    description: 'Complete digital marketing solutions for businesses in Pune\'s growing market.',
    longDescription: 'Our digital services in Pune help businesses capitalize on the city\'s growing digital economy. We provide comprehensive digital marketing solutions including SEO, social media, content marketing, and paid advertising tailored for Pune\'s unique market dynamics.',
    features: [
      'Pune market analysis',
      'Local SEO optimization',
      'Social media management',
      'Content creation',
      'PPC campaigns',
      'Local business optimization',
      'Performance tracking'
    ],
    benefits: [
      'Strong Pune market presence',
      'Increased local visibility',
      'Higher engagement',
      'More qualified leads',
      'Business growth in Pune'
    ],
    stats: [
      { label: 'Local Visibility', value: '320%', icon: Target },
      { label: 'Lead Generation', value: '190%', icon: Users },
      { label: 'ROI Improvement', value: '380%', icon: Award }
    ]
  },
  'seo-services-pune': {
    title: 'SEO Services in Pune',
    icon: 'Search',
    image: '/assets/SEO.jpg',
    description: 'Expert SEO services to help Pune businesses rank higher and attract more customers.',
    longDescription: 'Our SEO services in Pune are specifically designed to help local businesses improve their search engine rankings and attract more customers. We understand Pune\'s market dynamics and create SEO strategies that drive organic traffic and conversions.',
    features: [
      'Pune-specific keyword research',
      'Local SEO for Pune',
      'Google Business Profile optimization',
      'Local citation building',
      'Content optimization',
      'Pune competitor analysis',
      'Monthly SEO reporting'
    ],
    benefits: [
      'Higher rankings in Pune',
      'Increased local traffic',
      'Better customer visibility',
      'More qualified leads',
      'Competitive advantage'
    ],
    stats: [
      { label: 'Ranking Improvement', value: '88%', icon: TrendingUp },
      { label: 'Pune Traffic Growth', value: '170%', icon: Users },
      { label: 'Client Satisfaction', value: '96%', icon: Star }
    ]
  }
};

// Service-specific FAQ data
const serviceFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  'search-engine-optimization': [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy, and results typically start appearing within 3-6 months. However, the timeline varies based on factors like your website's current state, competition level, and the keywords you're targeting. We provide monthly progress reports so you can track improvements along the way."
    },
    {
      question: "What is included in your SEO optimization service?",
      answer: "Our comprehensive SEO service includes keyword research and analysis, on-page optimization, technical SEO audit and fixes, content optimization and strategy, link building and outreach, local SEO optimization, and monthly reporting and analytics. We tailor our approach to your specific business needs and goals."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. Our SEO strategies are scalable and customized to meet your specific needs, budget, and goals. Whether you're a local business or a multinational corporation, we can help improve your search engine visibility."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track key performance indicators including organic traffic growth, keyword rankings, click-through rates, conversion rates, backlink quality and quantity, and overall search visibility. You'll receive detailed monthly reports with clear metrics and insights showing your progress."
    },
    {
      question: "Will you need access to my website?",
      answer: "Yes, we'll need access to your website's backend (CMS) and analytics tools to implement optimizations effectively. We use secure, read-only access where possible and follow strict security protocols. All access is temporary and can be revoked at any time."
    },
    {
      question: "Can you help with local SEO?",
      answer: "Absolutely! Local SEO is a core part of our service. We optimize your Google Business Profile, improve local citations, create location-specific content, and implement schema markup to help you rank higher in local search results and Google Maps."
    }
  ],
  'digital-marketing': [
    {
      question: "What digital marketing channels do you manage?",
      answer: "We manage all major digital marketing channels including SEO, social media, email marketing, content marketing, paid advertising, and more. We'll help you identify which channels are most relevant for your business and create integrated strategies to maximize your online presence and ROI."
    },
    {
      question: "How do you create a comprehensive digital marketing strategy?",
      answer: "We start with a thorough analysis of your business, target audience, competitors, and goals. Then we develop a multi-channel strategy that integrates SEO, social media, content, email, and paid advertising to create a cohesive approach that drives results across all touchpoints."
    },
    {
      question: "Do you handle all aspects of digital marketing?",
      answer: "Yes! We provide end-to-end digital marketing services including strategy development, content creation, campaign management, performance tracking, and optimization. We can handle everything from a single channel to a complete digital marketing ecosystem."
    },
    {
      question: "How do you measure digital marketing success?",
      answer: "We track comprehensive metrics including website traffic, lead generation, conversion rates, brand awareness, engagement rates, and ROI across all channels. You'll receive integrated reports showing how all your digital marketing efforts work together to drive business growth."
    },
    {
      question: "Can you help with both B2B and B2C digital marketing?",
      answer: "Absolutely! We have experience working with both B2B and B2C businesses across various industries. Our strategies are adapted to your target audience, whether you're selling to businesses or directly to consumers, ensuring the right message reaches the right people."
    },
    {
      question: "How do you ensure consistency across all digital channels?",
      answer: "We develop a unified brand voice and messaging strategy that's consistent across all channels while being optimized for each platform's unique characteristics. This ensures your brand presents a cohesive experience whether customers find you through search, social media, email, or paid ads."
    }
  ],
  'app-marketing': [
    {
      question: "What is App Store Optimization (ASO)?",
      answer: "ASO is the process of optimizing your mobile app's listing in app stores to improve visibility and increase downloads. We optimize your app title, description, keywords, screenshots, and other elements to help your app rank higher in search results and get discovered by more users."
    },
    {
      question: "Which app stores do you optimize for?",
      answer: "We optimize for both Apple App Store (iOS) and Google Play Store (Android). Each platform has different requirements and algorithms, so we create platform-specific optimization strategies to maximize your app's visibility and downloads on both stores."
    },
    {
      question: "How do you help with app user acquisition?",
      answer: "We use a combination of ASO, paid app advertising (Apple Search Ads, Google Ads), influencer partnerships, content marketing, and PR to drive app downloads. We'll develop a comprehensive user acquisition strategy tailored to your app's target audience and budget."
    },
    {
      question: "Can you help improve app retention and engagement?",
      answer: "Yes! Beyond acquisition, we help improve user retention through push notification campaigns, in-app messaging strategies, email marketing, and engagement campaigns. We analyze user behavior to identify opportunities to increase retention and lifetime value."
    },
    {
      question: "How do you measure app marketing success?",
      answer: "We track key metrics including downloads, app store rankings, keyword rankings, conversion rates, user acquisition cost, retention rates, and lifetime value. You'll receive detailed reports showing how your app marketing efforts are driving growth."
    },
    {
      question: "How long does it take to see results from app marketing?",
      answer: "ASO improvements can start showing results within 2-4 weeks, while paid app advertising can generate immediate downloads. However, building sustainable app growth typically takes 2-3 months as we optimize campaigns and improve your app store presence."
    }
  ],
  'content-marketing': [
    {
      question: "What types of content do you create?",
      answer: "We create a wide variety of content including blog posts, articles, whitepapers, case studies, infographics, videos, social media content, email newsletters, press releases, and web copy. We'll develop a content mix that best serves your audience and business goals."
    },
    {
      question: "How often will you publish new content?",
      answer: "Content publishing frequency depends on your goals and resources. We typically recommend 2-4 blog posts per month for most businesses, but we can adjust based on your needs. We'll create a content calendar that ensures consistent, high-quality content publication."
    },
    {
      question: "Do you write content for our industry?",
      answer: "Yes! Our team includes writers with expertise across various industries. We conduct thorough research and work closely with you to ensure all content is accurate, relevant, and aligned with your industry standards and best practices."
    },
    {
      question: "How do you ensure content quality?",
      answer: "Every piece of content goes through our quality assurance process including research, writing, editing, proofreading, SEO optimization, and client review. We maintain high standards for grammar, accuracy, readability, and engagement."
    },
    {
      question: "Can you help with content distribution?",
      answer: "Absolutely! Beyond content creation, we help distribute your content through social media, email marketing, content syndication, and outreach to industry publications. We'll ensure your content reaches the right audience at the right time."
    },
    {
      question: "How do you measure content marketing ROI?",
      answer: "We track metrics including website traffic, time on page, bounce rate, social shares, lead generation, conversion rates, and revenue attribution. We'll show you how your content is performing and contributing to your business goals."
    }
  ],
  'ppc-paid-marketing': [
    {
      question: "Which PPC platforms do you manage?",
      answer: "We manage Google Ads (Search, Display, Shopping, YouTube), Microsoft Advertising, Facebook Ads, Instagram Ads, LinkedIn Ads, and other platform-specific advertising solutions. We'll help you identify which platforms offer the best ROI for your business."
    },
    {
      question: "What is your minimum budget requirement?",
      answer: "We work with businesses of all budget sizes. While there's no strict minimum, we typically recommend starting with at least $500-1000 per month for effective campaigns. We'll work with your budget to maximize results and ROI."
    },
    {
      question: "How quickly will I see results from PPC?",
      answer: "PPC campaigns can start generating results immediately, often within 24-48 hours of launch. However, it typically takes 2-4 weeks to optimize campaigns and see consistent performance. We continuously monitor and optimize to improve results over time."
    },
    {
      question: "Do you create the ad copy and creative?",
      answer: "Yes! Our team creates all ad copy, graphics, and video content. We'll develop multiple ad variations to test what resonates best with your audience and continuously refine based on performance data."
    },
    {
      question: "How do you optimize PPC campaigns?",
      answer: "We optimize campaigns through keyword research and refinement, bid management, ad copy testing, landing page optimization, audience targeting adjustments, and performance analysis. We make data-driven decisions to improve your ROI continuously."
    },
    {
      question: "What reporting do you provide?",
      answer: "You'll receive weekly performance summaries and comprehensive monthly reports showing impressions, clicks, conversions, cost per click, cost per acquisition, ROI, and other key metrics. We'll also provide insights and recommendations for improvement."
    }
  ],
  'martech-data-analytics': [
    {
      question: "What marketing technology tools do you work with?",
      answer: "We work with a wide range of MarTech tools including CRM systems (Salesforce, HubSpot), marketing automation platforms, analytics tools (Google Analytics, Adobe Analytics), tag management systems, data platforms, and more. We'll help you build and optimize your marketing technology stack."
    },
    {
      question: "How do you help integrate marketing technology?",
      answer: "We assess your current tech stack, identify gaps and opportunities, recommend the right tools, and help implement integrations between platforms. We ensure all your marketing tools work together seamlessly to provide a unified view of your marketing performance."
    },
    {
      question: "Can you help with marketing automation?",
      answer: "Absolutely! We set up and optimize marketing automation workflows including email campaigns, lead nurturing sequences, customer journey automation, and triggered campaigns. This helps you scale your marketing efforts while maintaining personalization."
    },
    {
      question: "How do you ensure data accuracy and quality?",
      answer: "We implement data governance practices, set up data validation rules, clean and deduplicate data, establish data quality standards, and regularly audit your data to ensure accuracy. We also help integrate data from multiple sources for a complete view."
    },
    {
      question: "What kind of analytics and reporting do you provide?",
      answer: "We provide comprehensive analytics including custom dashboards, real-time reporting, attribution modeling, ROI analysis, and predictive analytics. We'll help you understand not just what happened, but why it happened and what to do next."
    },
    {
      question: "How do you help with data-driven decision making?",
      answer: "We don't just provide data—we analyze it and provide actionable insights and recommendations. We'll help you identify trends, opportunities, and areas for improvement, then work with you to implement data-driven changes that drive business growth."
    }
  ],
  'seo-services-dubai': [
    {
      question: "Why do I need SEO services specifically for Dubai?",
      answer: "Dubai has unique market characteristics including bilingual audiences (Arabic and English), specific local search behaviors, and competitive business landscape. Our Dubai-specific SEO services are tailored to these factors, ensuring your business ranks well for both local Dubai searches and international queries targeting the UAE market."
    },
    {
      question: "Do you optimize for Arabic keywords?",
      answer: "Yes! We optimize for both Arabic and English keywords, as Dubai's market is bilingual. We conduct keyword research in both languages and create content strategies that resonate with Arabic-speaking and English-speaking audiences in Dubai and the wider UAE."
    },
    {
      question: "How do you handle Google Business Profile for Dubai businesses?",
      answer: "We optimize your Google Business Profile with Dubai-specific information, including accurate location data, local keywords, Arabic and English descriptions, Dubai-area photos, and regular updates. We also help you get reviews from Dubai customers and respond to them appropriately."
    },
    {
      question: "What makes your Dubai SEO different from general SEO?",
      answer: "Our Dubai SEO services include local market research, understanding of Dubai's business culture, optimization for UAE-specific search engines and directories, knowledge of local competitors, and strategies that account for Dubai's unique digital landscape and consumer behavior."
    },
    {
      question: "How long before I see results in Dubai search results?",
      answer: "Initial improvements can be seen within 2-3 months, with significant results typically appearing within 4-6 months. The timeline depends on your current website state, competition level in Dubai, and the keywords you're targeting. We provide monthly reports tracking your progress."
    },
    {
      question: "Do you work with businesses outside Dubai targeting Dubai market?",
      answer: "Absolutely! We help businesses worldwide that want to target the Dubai market. We can optimize your website for Dubai-specific searches, create location-specific content, and implement geo-targeting strategies to attract Dubai customers."
    }
  ],
  'seo-services-malaysia': [
    {
      question: "What makes SEO in Malaysia different?",
      answer: "Malaysia has a unique digital landscape with bilingual searches (Malay and English), specific local search engines, cultural nuances, and regional competition. Our Malaysia SEO services are tailored to these factors, ensuring your business ranks well for Malaysian searches."
    },
    {
      question: "Do you optimize for Malay language keywords?",
      answer: "Yes! We conduct keyword research in both Malay and English, as Malaysian users search in both languages. We create content strategies that work for both language groups and optimize your website to rank for relevant keywords in both languages."
    },
    {
      question: "How do you handle local SEO for Malaysian businesses?",
      answer: "We optimize your Google My Business profile, build local citations on Malaysian directories, create location-specific content, optimize for Malaysian cities and regions, and implement local schema markup. We also help you get reviews from Malaysian customers."
    },
    {
      question: "What Malaysian directories do you use?",
      answer: "We submit your business to relevant Malaysian directories including local business listings, industry-specific directories, and regional platforms. We ensure consistent NAP (Name, Address, Phone) information across all platforms to improve local search visibility."
    },
    {
      question: "How quickly will I see results in Malaysia?",
      answer: "You can expect to see initial improvements within 2-4 months, with significant results typically appearing within 4-6 months. The timeline varies based on your current website state, competition level in Malaysia, and target keywords. We provide monthly progress reports."
    },
    {
      question: "Can you help with e-commerce SEO in Malaysia?",
      answer: "Absolutely! We specialize in e-commerce SEO for Malaysian markets, including product page optimization, category optimization, local product listings, Malaysian payment gateway integration considerations, and strategies to rank for product-related searches in Malaysia."
    }
  ],
  'digital-services-singapore': [
    {
      question: "Why choose digital services specifically for Singapore?",
      answer: "Singapore has one of Asia's most competitive and sophisticated digital markets. Our Singapore-specific digital services understand local consumer behavior, market dynamics, competition levels, and cultural nuances to create strategies that work effectively in Singapore's unique digital landscape."
    },
    {
      question: "What digital channels work best in Singapore?",
      answer: "Singapore has high adoption rates across all digital channels. We typically focus on Google SEO, Facebook, Instagram, LinkedIn, WhatsApp Business, and local platforms. We analyze your target audience to determine which channels will be most effective for your business."
    },
    {
      question: "Do you understand Singapore's business culture?",
      answer: "Yes! We have deep understanding of Singapore's business culture, consumer preferences, local holidays and events, multilingual market (English, Mandarin, Malay, Tamil), and business practices. This knowledge informs all our digital strategies for Singapore businesses."
    },
    {
      question: "How do you handle multi-language content for Singapore?",
      answer: "Singapore is multilingual, and we create content strategies that work across languages. We can create content in English, Mandarin, Malay, or Tamil based on your target audience. We also optimize for multilingual SEO and create culturally appropriate content for each language group."
    },
    {
      question: "What makes your Singapore digital services competitive?",
      answer: "Our Singapore services combine local market knowledge, understanding of Singapore's competitive landscape, data-driven strategies, and proven tactics that work in Singapore's sophisticated digital market. We stay updated with Singapore-specific trends and platform changes."
    },
    {
      question: "How do you measure success for Singapore campaigns?",
      answer: "We track Singapore-specific metrics including local search rankings, Singapore traffic, engagement rates on Singapore-focused content, lead generation from Singapore, conversion rates, and ROI. We provide detailed reports showing how your campaigns perform in the Singapore market."
    }
  ],
  'digital-services-new-york-city': [
    {
      question: "Why do I need NYC-specific digital services?",
      answer: "New York City is one of the world's most competitive markets with unique local dynamics, high competition, diverse audiences, and specific local search behaviors. Our NYC-specific digital services are tailored to help businesses stand out and succeed in this challenging market."
    },
    {
      question: "How do you handle local SEO for NYC businesses?",
      answer: "We optimize for NYC-specific searches, create location-based content for NYC neighborhoods, optimize Google Business Profile for NYC, build local citations, target NYC-specific keywords, and implement local schema markup. We also help with NYC-specific directories and listings."
    },
    {
      question: "What makes NYC digital marketing different?",
      answer: "NYC has extremely high competition, diverse demographics, fast-paced consumer behavior, and specific local trends. Our NYC strategies account for these factors, use hyperlocal targeting, understand NYC neighborhoods, and create campaigns that resonate with NYC audiences."
    },
    {
      question: "Do you work with businesses targeting specific NYC neighborhoods?",
      answer: "Yes! We can create hyperlocal strategies for specific NYC neighborhoods like Manhattan, Brooklyn, Queens, Bronx, or even specific areas within these boroughs. We optimize for neighborhood-specific searches and create location-targeted campaigns."
    },
    {
      question: "How competitive is the NYC market?",
      answer: "NYC is extremely competitive, which is why specialized NYC digital services are essential. We use advanced strategies, competitive analysis, and data-driven approaches to help your business compete effectively. We understand NYC's competitive landscape and create strategies to stand out."
    },
    {
      question: "What results can I expect in NYC?",
      answer: "Results vary based on your industry and competition level, but our NYC clients typically see improved local visibility, increased NYC traffic, better engagement rates, and more qualified leads. We set realistic expectations during our initial consultation and work towards achieving them."
    }
  ],
  'digital-services-pune': [
    {
      question: "Why choose digital services for Pune specifically?",
      answer: "Pune has a unique market with growing digital adoption, specific local business dynamics, and a tech-savvy audience. Our Pune-specific digital services understand local market trends, consumer behavior, and competition to create strategies that work effectively for Pune businesses."
    },
    {
      question: "What digital channels are popular in Pune?",
      answer: "Pune businesses benefit from a mix of channels including Google SEO, Facebook, Instagram, LinkedIn, WhatsApp Business, and local platforms. We analyze your target audience to determine which channels will be most effective for reaching Pune customers."
    },
    {
      question: "How do you handle local SEO for Pune businesses?",
      answer: "We optimize for Pune-specific searches, create location-based content, optimize Google Business Profile for Pune, build local citations on Pune directories, target Pune-area keywords, and implement local schema markup. We also help with Pune-specific business listings."
    },
    {
      question: "Do you understand Pune's business culture?",
      answer: "Yes! We understand Pune's business culture, which includes a mix of traditional businesses and tech companies, specific consumer preferences, local events and festivals, and regional business practices. This knowledge informs all our digital strategies."
    },
    {
      question: "Can you help with multilingual content for Pune?",
      answer: "Pune has a multilingual audience (Marathi, Hindi, English). We can create content strategies that work across languages, optimize for multilingual SEO, and create culturally appropriate content. We determine the best language mix based on your target audience."
    },
    {
      question: "What results can Pune businesses expect?",
      answer: "Our Pune clients typically see improved local visibility, increased Pune traffic, better engagement rates, more qualified leads, and business growth. Results vary based on industry and competition, but we set realistic expectations and work towards achieving measurable goals."
    }
  ],
  'seo-services-pune': [
    {
      question: "Why do I need Pune-specific SEO services?",
      answer: "Pune has unique local search dynamics, specific competition levels, and local consumer behavior. Our Pune-specific SEO services are tailored to these factors, ensuring your business ranks well for Pune searches and attracts local customers effectively."
    },
    {
      question: "How do you optimize for Pune local searches?",
      answer: "We optimize for Pune-specific keywords, create location-based content, optimize your Google Business Profile for Pune, build citations on Pune directories, target Pune-area searches, and implement local schema markup. We also help you get reviews from Pune customers."
    },
    {
      question: "What Pune directories do you use?",
      answer: "We submit your business to relevant Pune directories including local business listings, Pune-specific directories, industry platforms, and regional listings. We ensure consistent business information across all platforms to improve your local search visibility in Pune."
    },
    {
      question: "Do you handle multilingual SEO for Pune?",
      answer: "Yes! Pune has a multilingual audience (Marathi, Hindi, English). We can optimize for keywords in multiple languages, create multilingual content, and ensure your website ranks well for searches in Marathi, Hindi, and English related to Pune."
    },
    {
      question: "How quickly will I see results in Pune search results?",
      answer: "Initial improvements can be seen within 2-3 months, with significant results typically appearing within 4-6 months. The timeline depends on your current website state, competition level in Pune, and target keywords. We provide monthly reports tracking your progress."
    },
    {
      question: "Can you help businesses outside Pune targeting Pune market?",
      answer: "Absolutely! We help businesses nationwide that want to target the Pune market. We can optimize your website for Pune-specific searches, create location-specific content, implement geo-targeting, and create strategies to attract Pune customers."
    }
  ]
};

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Service Name Banner Header */}
      <section className="bg-gradient-hero text-white py-8 md:py-12 pt-32 md:pt-36">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8">
            {/* Title on Left */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                {service.title}
              </h1>
            </div>
            {/* Circular Image on Right */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/assets/SEO.jpg"
                  alt={service.title}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 border-b border-border/50 relative z-40 bg-background/95 backdrop-blur-sm">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/#services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section with Callback Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Left Side - Service Content */}
            <div className="lg:col-span-3 lg:pr-6 lg:border-r lg:border-border">
              <div className="text-center lg:text-left mb-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {service.longDescription}
                </p>

                {/* Service Image */}
                <div className="mt-6">
                  {service.image ? (
                    <div className="relative w-full max-w-lg mx-auto aspect-video rounded-lg overflow-hidden shadow-md border border-border/50">
                      <Image
                        src={service.image}
                        alt={`${service.title} service illustration`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-lg mx-auto aspect-video rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <ImageIcon className="w-16 h-16 mx-auto mb-1 opacity-50" />
                        <p className="text-sm">Service Image</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* SEO Services Cards */}
              <div className="mt-12">
                <div className="mb-10 md:mb-12 text-center max-w-4xl mx-auto">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    SEO Services in India That Drive Real Business Growth
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    At Techmagnate, we offer a full suite of SEO services in India designed to boost visibility, leads, and revenue. Whether you're an enterprise brand, an eCommerce business, or a startup, our award-winning SEO company delivers scalable, AI-driven strategies to help you dominate search results.
                  </p>
                </div>

                {/* 9 Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                  {/* Connecting Lines - Visual Flow */}
                  <div className="hidden lg:block absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-20">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(285 95% 20%)" stopOpacity="0" />
                          <stop offset="50%" stopColor="hsl(285 86% 80%)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="hsl(285 95% 20%)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="16.66%" y1="33.33%" x2="16.66%" y2="66.66%" stroke="url(#connectionGradient)" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <line x1="50%" y1="33.33%" x2="50%" y2="66.66%" stroke="url(#connectionGradient)" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <line x1="83.33%" y1="33.33%" x2="83.33%" y2="66.66%" stroke="url(#connectionGradient)" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <line x1="16.66%" y1="66.66%" x2="16.66%" y2="100%" stroke="url(#connectionGradient)" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <line x1="50%" y1="66.66%" x2="50%" y2="100%" stroke="url(#connectionGradient)" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <line x1="83.33%" y1="66.66%" x2="83.33%" y2="100%" stroke="url(#connectionGradient)" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </svg>
                  </div>

                  {/* Enterprise SEO Services */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <Building2 className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">Enterprise SEO Services</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Get higher search rankings and attract more leads with enterprise SEO services in India, designed for large organizations managing multiple locations, products, and services.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* LLM Optimization */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <Brain className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">LLM Optimization</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Our AI SEO experts ensure your content is easily discoverable, understandable, and cited by AI models like ChatGPT and Gemini through authoritative, well-structured content optimized for AI search.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* AI SEO */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <Sparkles className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">AI SEO</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Stay ahead of search trends with AI-driven SEO services that use data insights and automation to improve content relevance, streamline optimizations, and drive better engagement and visibility.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* ECommerce SEO */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <ShoppingCart className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">ECommerce SEO</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Increase online sales and visibility for your products with our eCommerce SEO services in India. We make product pages more search-friendly, optimize metadata, and improve the overall user experience for higher conversions.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* Mobile SEO */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <Smartphone className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">Mobile SEO</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Ensure a seamless experience for mobile users with mobile SEO optimization services. We create fast, responsive, and easy-to-navigate websites optimized for on-the-go mobile searches to boost your mobile rankings.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* App Store Marketing & Optimization */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <AppWindow className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">App Store Marketing & Optimization</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Get more people to discover, download, and use your app through App Store Optimization (ASO) and app marketing services that include keyword optimization, paid ads, and user engagement strategies.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* Content Marketing Services */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <FileText className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">Content Marketing Services</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Engage and educate your audience with SEO-driven content marketing services that build trust, drive inquiries, and improve your online visibility through blogs, press releases, and web content.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* Local and Hyperlocal SEO */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <MapPin className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">Local and Hyperlocal SEO</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Reach more nearby customers and increase foot traffic with local SEO and hyperlocal marketing services. Improve your visibility in Google Maps and location-based search results to attract high-intent customers.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>

                  {/* Vernacular SEO */}
                  <Card className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-gradient-hero hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent group-hover:!bg-white group-hover:[background-image:none] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                          <Globe className="w-6 h-6 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">Vernacular SEO</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        Connect with a wider audience through vernacular SEO in India by optimizing content in regional Indian languages — making your brand accessible and relevant to diverse audiences nationwide.
                      </p>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right Side - Callback Form */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-8 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
              <CallbackRequestForm serviceName={service.title} />
                </Card>

                {/* Related Blog Posts Section */}
                {(() => {
                  const blogCategory = serviceToBlogCategory[params.slug];
                  const relatedBlogs = blogCategory 
                    ? allBlogPosts.filter(post => post.category === blogCategory).slice(0, 3)
                    : [];
                  
                  if (relatedBlogs.length === 0) return null;

                  const formatDate = (dateString: string) => {
                    const date = new Date(dateString);
                    return date.toLocaleDateString("en-US", { 
                      year: "numeric", 
                      month: "short", 
                      day: "numeric" 
                    });
                  };

                  return (
                    <Card className="p-6 border-primary/10 shadow-lg bg-card/50 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-foreground mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((blog) => (
                          <Link 
                            key={blog.id} 
                            href={`/blog/${blog.slug}`}
                            className="block group"
                          >
                            <div className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-1">
                                  {blog.title}
                                </h4>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  <span>{formatDate(blog.date)}</span>
            </div>
          </div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
        </div>
                          </Link>
                ))}
              </div>
                      <Link
                        href={`/blog?category=${encodeURIComponent(blogCategory)}`}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-accent transition-colors duration-300"
                      >
                        View All {blogCategory} Articles
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Card>
                  );
                })()}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Tools We Use Section */}
      <ToolsWeUse />

      {/* Section Divider */}
      <SectionDivider />

      {/* Service-Specific FAQ Section */}
      <ServiceFAQ faqs={serviceFAQs[params.slug] || []} />

      {/* Section Divider */}
      <SectionDivider />

      {/* Additional Resources Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold text-foreground mb-4">Need More Information?</h2>
          <p className="text-base text-muted-foreground mb-6">
            While you wait for our callback, explore how our other digital marketing services can complement your {service.title.toLowerCase()} strategy.
          </p>
          <div className="flex justify-center">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-300 text-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}
