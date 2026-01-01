import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CallbackRequestForm from "@/components/CallbackRequestForm";
import RelatedPosts from "@/components/RelatedPosts";
import ShareButtons from "@/components/ShareButtons";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

// All blog posts for related posts
const allBlogPosts = [
  {
    slug: "10-seo-tips-to-boost-your-website-ranking",
    title: "10 SEO Tips to Boost Your Website Ranking in 2025",
    category: "SEO",
    author: "Sarah Johnson",
    image: "/placeholder.svg"
  },
  {
    slug: "advanced-seo-techniques-2025",
    title: "Advanced SEO Techniques for 2025: Beyond the Basics",
    category: "SEO",
    author: "Sarah Johnson",
    image: "/placeholder.svg"
  },
  {
    slug: "local-seo-strategy-guide",
    title: "Local SEO Strategy: Dominate Your Local Market",
    category: "SEO",
    author: "Sarah Johnson",
    image: "/placeholder.svg"
  },
  {
    slug: "social-media-marketing-trends-2025",
    title: "Social Media Marketing Trends to Watch in 2025",
    category: "Social Media",
    author: "Michael Chen",
    image: "/placeholder.svg"
  },
  {
    slug: "instagram-marketing-strategies",
    title: "Instagram Marketing Strategies That Drive Engagement",
    category: "Social Media",
    author: "Michael Chen",
    image: "/placeholder.svg"
  },
  {
    slug: "linkedin-marketing-for-business",
    title: "LinkedIn Marketing for B2B Businesses: Complete Guide",
    category: "Social Media",
    author: "Michael Chen",
    image: "/placeholder.svg"
  },
  {
    slug: "content-marketing-strategy-guide",
    title: "Complete Guide to Content Marketing Strategy",
    category: "Content Marketing",
    author: "Emily Rodriguez",
    image: "/placeholder.svg"
  },
  {
    slug: "blog-content-creation-tips",
    title: "Blog Content Creation: Tips for Engaging Readers",
    category: "Content Marketing",
    author: "Emily Rodriguez",
    image: "/placeholder.svg"
  },
  {
    slug: "video-content-marketing-guide",
    title: "Video Content Marketing: A Comprehensive Guide",
    category: "Content Marketing",
    author: "Emily Rodriguez",
    image: "/placeholder.svg"
  },
  {
    slug: "ppc-advertising-best-practices",
    title: "PPC Advertising Best Practices for Maximum ROI",
    category: "PPC",
    author: "David Thompson",
    image: "/placeholder.svg"
  },
  {
    slug: "google-ads-optimization-tips",
    title: "Google Ads Optimization: 10 Tips for Better Performance",
    category: "PPC",
    author: "David Thompson",
    image: "/placeholder.svg"
  },
  {
    slug: "facebook-ads-strategy-guide",
    title: "Facebook Ads Strategy: Maximize Your Ad Spend",
    category: "PPC",
    author: "David Thompson",
    image: "/placeholder.svg"
  },
  {
    slug: "email-marketing-automation-guide",
    title: "Email Marketing Automation: A Complete Guide",
    category: "Email Marketing",
    author: "Lisa Anderson",
    image: "/placeholder.svg"
  },
  {
    slug: "email-campaign-design-best-practices",
    title: "Email Campaign Design: Best Practices for 2025",
    category: "Email Marketing",
    author: "Lisa Anderson",
    image: "/placeholder.svg"
  },
  {
    slug: "newsletter-marketing-strategies",
    title: "Newsletter Marketing Strategies That Convert",
    category: "Email Marketing",
    author: "Lisa Anderson",
    image: "/placeholder.svg"
  },
  {
    slug: "website-conversion-optimization",
    title: "Website Conversion Optimization: 15 Proven Techniques",
    category: "Conversion",
    author: "James Wilson",
    image: "/placeholder.svg"
  },
  {
    slug: "landing-page-optimization-guide",
    title: "Landing Page Optimization: Turn Visitors into Customers",
    category: "Conversion",
    author: "James Wilson",
    image: "/placeholder.svg"
  },
  {
    slug: "ab-testing-strategies",
    title: "A/B Testing Strategies: Data-Driven Optimization",
    category: "Conversion",
    author: "James Wilson",
    image: "/placeholder.svg"
  },
  {
    slug: "technical-seo-checklist-2025",
    title: "Technical SEO Checklist: Complete Guide for 2025",
    category: "SEO",
    author: "Sarah Johnson",
    image: "/placeholder.svg"
  },
  {
    slug: "keyword-research-mastery",
    title: "Keyword Research Mastery: Find the Right Keywords",
    category: "SEO",
    author: "Sarah Johnson",
    image: "/placeholder.svg"
  },
  {
    slug: "link-building-strategies",
    title: "Link Building Strategies: Build Quality Backlinks",
    category: "SEO",
    author: "Sarah Johnson",
    image: "/placeholder.svg"
  },
  {
    slug: "twitter-marketing-guide",
    title: "Twitter Marketing Guide: Grow Your Following",
    category: "Social Media",
    author: "Michael Chen",
    image: "/placeholder.svg"
  },
  {
    slug: "tiktok-marketing-strategies",
    title: "TikTok Marketing Strategies for Business Growth",
    category: "Social Media",
    author: "Michael Chen",
    image: "/placeholder.svg"
  },
  {
    slug: "youtube-marketing-tips",
    title: "YouTube Marketing Tips: Build Your Channel",
    category: "Social Media",
    author: "Michael Chen",
    image: "/placeholder.svg"
  },
  {
    slug: "content-calendar-planning",
    title: "Content Calendar Planning: Stay Organized",
    category: "Content Marketing",
    author: "Emily Rodriguez",
    image: "/placeholder.svg"
  },
  {
    slug: "infographic-design-guide",
    title: "Infographic Design Guide: Visual Content That Converts",
    category: "Content Marketing",
    author: "Emily Rodriguez",
    image: "/placeholder.svg"
  },
  {
    slug: "podcast-marketing-strategies",
    title: "Podcast Marketing Strategies: Grow Your Audience",
    category: "Content Marketing",
    author: "Emily Rodriguez",
    image: "/placeholder.svg"
  },
  {
    slug: "bing-ads-optimization",
    title: "Bing Ads Optimization: Maximize Your Reach",
    category: "PPC",
    author: "David Thompson",
    image: "/placeholder.svg"
  },
  {
    slug: "retargeting-campaigns-guide",
    title: "Retargeting Campaigns: Re-engage Your Visitors",
    category: "PPC",
    author: "David Thompson",
    image: "/placeholder.svg"
  },
  {
    slug: "shopping-ads-optimization",
    title: "Shopping Ads Optimization: Boost E-commerce Sales",
    category: "PPC",
    author: "David Thompson",
    image: "/placeholder.svg"
  },
  {
    slug: "email-segmentation-strategies",
    title: "Email Segmentation Strategies: Personalize Your Campaigns",
    category: "Email Marketing",
    author: "Lisa Anderson",
    image: "/placeholder.svg"
  },
  {
    slug: "subject-line-optimization",
    title: "Subject Line Optimization: Increase Open Rates",
    category: "Email Marketing",
    author: "Lisa Anderson",
    image: "/placeholder.svg"
  },
  {
    slug: "transactional-email-best-practices",
    title: "Transactional Email Best Practices: Enhance User Experience",
    category: "Email Marketing",
    author: "Lisa Anderson",
    image: "/placeholder.svg"
  },
  {
    slug: "checkout-optimization-guide",
    title: "Checkout Optimization Guide: Reduce Cart Abandonment",
    category: "Conversion",
    author: "James Wilson",
    image: "/placeholder.svg"
  },
  {
    slug: "cta-optimization-tips",
    title: "CTA Optimization Tips: Drive More Clicks",
    category: "Conversion",
    author: "James Wilson",
    image: "/placeholder.svg"
  },
  {
    slug: "mobile-conversion-optimization",
    title: "Mobile Conversion Optimization: Mobile-First Approach",
    category: "Conversion",
    author: "James Wilson",
    image: "/placeholder.svg"
  }
];

// Blog posts data
const blogPosts: { [key: string]: any } = {
  "10-seo-tips-to-boost-your-website-ranking": {
    title: "10 SEO Tips to Boost Your Website Ranking in 2025",
    author: "Sarah Johnson",
    content: `
      <p>Search Engine Optimization (SEO) is crucial for improving your website's visibility and driving organic traffic. Here are 10 proven SEO tips to help boost your website ranking in 2025:</p>
      
      <h2>1. Conduct Comprehensive Keyword Research</h2>
      <p>Start by identifying the keywords your target audience is searching for. Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find relevant keywords with good search volume and low competition.</p>
      
      <h2>2. Optimize Your On-Page Elements</h2>
      <p>Ensure your title tags, meta descriptions, headers (H1, H2, H3), and alt text for images are optimized with your target keywords. Keep titles under 60 characters and meta descriptions under 160 characters.</p>
      
      <h2>3. Improve Page Loading Speed</h2>
      <p>Page speed is a critical ranking factor. Optimize images, minimize CSS and JavaScript, use a content delivery network (CDN), and consider upgrading your hosting plan to improve loading times.</p>
      
      <h2>4. Create High-Quality, Original Content</h2>
      <p>Google prioritizes websites that provide valuable, original content. Focus on creating comprehensive, well-researched articles that answer your audience's questions and provide real value.</p>
      
      <h2>5. Build Quality Backlinks</h2>
      <p>Earn backlinks from reputable, relevant websites. Focus on creating shareable content, guest posting, and building relationships with other industry professionals.</p>
      
      <h2>6. Optimize for Mobile Devices</h2>
      <p>With mobile-first indexing, ensure your website is fully responsive and provides an excellent user experience on mobile devices. Test your site on various devices and screen sizes.</p>
      
      <h2>7. Improve User Experience (UX)</h2>
      <p>Focus on creating an intuitive navigation structure, clear calls-to-action, and easy-to-read content. A positive user experience signals to search engines that your site is valuable.</p>
      
      <h2>8. Use Internal Linking Strategically</h2>
      <p>Create a logical internal linking structure that helps users navigate your site and helps search engines understand your content hierarchy. Link to relevant pages using descriptive anchor text.</p>
      
      <h2>9. Optimize for Local SEO</h2>
      <p>If you have a local business, optimize for local search by creating a Google Business Profile, including location-specific keywords, and getting listed in local directories.</p>
      
      <h2>10. Monitor and Analyze Your Performance</h2>
      <p>Use tools like Google Analytics and Google Search Console to track your SEO performance. Monitor your rankings, traffic, and user behavior to identify areas for improvement.</p>
      
      <p>By implementing these SEO strategies consistently, you can improve your website's search engine rankings and drive more organic traffic to your site.</p>
    `,
    date: "2025-01-15",
    category: "SEO",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  "social-media-marketing-trends-2025": {
    title: "Social Media Marketing Trends to Watch in 2025",
    author: "Michael Chen",
    content: `
      <p>The social media landscape is constantly evolving, and staying ahead of trends is crucial for successful digital marketing. Here are the key social media marketing trends to watch in 2025:</p>
      
      <h2>1. Video Content Dominance</h2>
      <p>Video content continues to dominate social media platforms. Short-form videos on TikTok, Instagram Reels, and YouTube Shorts are particularly effective for engagement. Invest in creating high-quality video content that tells your brand story.</p>
      
      <h2>2. AI-Powered Content Creation</h2>
      <p>Artificial intelligence is revolutionizing content creation. Use AI tools to generate ideas, create captions, and even produce basic video content. However, always maintain a human touch and brand voice.</p>
      
      <h2>3. Authenticity and Transparency</h2>
      <p>Consumers value authenticity more than ever. Share behind-the-scenes content, user-generated content, and real stories from your team and customers. Transparency builds trust and loyalty.</p>
      
      <h2>4. Social Commerce Integration</h2>
      <p>Social commerce is growing rapidly. Platforms like Instagram Shopping and Facebook Shops allow users to purchase directly from social media. Make it easy for customers to buy your products without leaving the platform.</p>
      
      <h2>5. Micro-Influencer Partnerships</h2>
      <p>Micro-influencers with smaller but highly engaged audiences often provide better ROI than mega-influencers. Partner with influencers whose values align with your brand and who have genuine connections with their followers.</p>
      
      <h2>6. Community Building</h2>
      <p>Focus on building communities around your brand rather than just broadcasting messages. Create Facebook Groups, Discord servers, or use platform-specific community features to foster engagement.</p>
      
      <h2>7. Sustainability and Social Responsibility</h2>
      <p>Consumers increasingly support brands that demonstrate social responsibility and environmental consciousness. Share your sustainability efforts and social impact initiatives authentically.</p>
      
      <h2>8. Augmented Reality (AR) Experiences</h2>
      <p>AR filters and experiences are becoming more accessible. Create branded AR filters or experiences that allow users to interact with your products or brand in innovative ways.</p>
      
      <p>By staying ahead of these trends and adapting your social media strategy accordingly, you can maintain a competitive edge and effectively engage with your audience in 2025.</p>
    `,
    date: "2025-01-10",
    category: "Social Media",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  "content-marketing-strategy-guide": {
    title: "Complete Guide to Content Marketing Strategy",
    author: "Emily Rodriguez",
    content: `
      <p>A well-executed content marketing strategy can drive brand awareness, generate leads, and build lasting relationships with your audience. Here's a comprehensive guide to creating an effective content marketing strategy:</p>
      
      <h2>1. Define Your Goals and Objectives</h2>
      <p>Start by clearly defining what you want to achieve with your content marketing. Common goals include increasing brand awareness, generating leads, driving website traffic, or establishing thought leadership.</p>
      
      <h2>2. Understand Your Target Audience</h2>
      <p>Create detailed buyer personas that include demographics, pain points, interests, and content preferences. This will help you create content that resonates with your audience.</p>
      
      <h2>3. Conduct a Content Audit</h2>
      <p>Review your existing content to identify what's working and what's not. Analyze performance metrics, identify content gaps, and determine which topics resonate most with your audience.</p>
      
      <h2>4. Choose Your Content Types</h2>
      <p>Diversify your content mix with blog posts, videos, infographics, podcasts, case studies, whitepapers, and social media content. Different formats appeal to different audience segments.</p>
      
      <h2>5. Create a Content Calendar</h2>
      <p>Plan your content in advance with a detailed editorial calendar. Include publication dates, content topics, assigned writers, and distribution channels. This ensures consistency and helps you stay organized.</p>
      
      <h2>6. Focus on Quality Over Quantity</h2>
      <p>It's better to publish fewer high-quality pieces than many mediocre ones. Invest time in research, writing, editing, and creating visually appealing content that provides real value.</p>
      
      <h2>7. Optimize for SEO</h2>
      <p>Ensure your content is optimized for search engines by using relevant keywords, creating descriptive titles and meta descriptions, and including internal and external links.</p>
      
      <h2>8. Promote Your Content</h2>
      <p>Don't just publish and hope for the best. Actively promote your content through social media, email newsletters, paid advertising, and outreach to influencers or industry publications.</p>
      
      <h2>9. Measure and Analyze Performance</h2>
      <p>Track key metrics like website traffic, engagement rates, lead generation, and conversions. Use analytics tools to understand what's working and adjust your strategy accordingly.</p>
      
      <h2>10. Continuously Improve</h2>
      <p>Content marketing is an ongoing process. Regularly review your strategy, experiment with new formats and topics, and stay updated with industry trends and best practices.</p>
      
      <p>By following this comprehensive guide, you can create a content marketing strategy that drives results and helps you achieve your business objectives.</p>
    `,
    date: "2025-01-05",
    category: "Content Marketing",
    readTime: "10 min read",
    image: "/placeholder.svg"
  },
  "ppc-advertising-best-practices": {
    title: "PPC Advertising Best Practices for Maximum ROI",
    author: "David Thompson",
    content: `<p>Pay-per-click (PPC) advertising can be highly effective when done right. Here are best practices to maximize your ROI.</p>`,
    date: "2024-12-28",
    category: "PPC",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "email-marketing-automation-guide": {
    title: "Email Marketing Automation: A Complete Guide",
    author: "Lisa Anderson",
    content: `<p>Learn how to automate your email marketing campaigns effectively.</p>`,
    date: "2024-12-20",
    category: "Email Marketing",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  "website-conversion-optimization": {
    title: "Website Conversion Optimization: 15 Proven Techniques",
    author: "James Wilson",
    content: `<p>Transform visitors into customers with these conversion optimization techniques.</p>`,
    date: "2024-12-15",
    category: "Conversion",
    readTime: "9 min read",
    image: "/placeholder.svg"
  },
  "advanced-seo-techniques-2025": {
    title: "Advanced SEO Techniques for 2025: Beyond the Basics",
    author: "Sarah Johnson",
    content: `<p>Take your SEO strategy to the next level with these advanced techniques that go beyond basic optimization.</p>`,
    date: "2025-01-12",
    category: "SEO",
    readTime: "12 min read",
    image: "/placeholder.svg"
  },
  "local-seo-strategy-guide": {
    title: "Local SEO Strategy: Dominate Your Local Market",
    author: "Sarah Johnson",
    content: `<p>Learn how to optimize your business for local search and attract customers in your area.</p>`,
    date: "2025-01-08",
    category: "SEO",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "instagram-marketing-strategies": {
    title: "Instagram Marketing Strategies That Drive Engagement",
    author: "Michael Chen",
    content: `<p>Discover proven Instagram marketing strategies to grow your following and increase engagement.</p>`,
    date: "2025-01-07",
    category: "Social Media",
    readTime: "9 min read",
    image: "/placeholder.svg"
  },
  "linkedin-marketing-for-business": {
    title: "LinkedIn Marketing for B2B Businesses: Complete Guide",
    author: "Michael Chen",
    content: `<p>Master LinkedIn marketing to generate leads and build your B2B brand presence.</p>`,
    date: "2025-01-03",
    category: "Social Media",
    readTime: "11 min read",
    image: "/placeholder.svg"
  },
  "blog-content-creation-tips": {
    title: "Blog Content Creation: Tips for Engaging Readers",
    author: "Emily Rodriguez",
    content: `<p>Learn how to create blog content that captivates your audience and keeps them coming back for more.</p>`,
    date: "2024-12-30",
    category: "Content Marketing",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  "video-content-marketing-guide": {
    title: "Video Content Marketing: A Comprehensive Guide",
    author: "Emily Rodriguez",
    content: `<p>Explore the power of video content marketing and how to create videos that convert.</p>`,
    date: "2024-12-25",
    category: "Content Marketing",
    readTime: "10 min read",
    image: "/placeholder.svg"
  },
  "google-ads-optimization-tips": {
    title: "Google Ads Optimization: 10 Tips for Better Performance",
    author: "David Thompson",
    content: `<p>Optimize your Google Ads campaigns with these proven strategies to improve performance and ROI.</p>`,
    date: "2024-12-22",
    category: "PPC",
    readTime: "9 min read",
    image: "/placeholder.svg"
  },
  "facebook-ads-strategy-guide": {
    title: "Facebook Ads Strategy: Maximize Your Ad Spend",
    author: "David Thompson",
    content: `<p>Create effective Facebook ad campaigns that deliver results and maximize your advertising budget.</p>`,
    date: "2024-12-18",
    category: "PPC",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "email-campaign-design-best-practices": {
    title: "Email Campaign Design: Best Practices for 2025",
    author: "Lisa Anderson",
    content: `<p>Design email campaigns that stand out in crowded inboxes and drive action from your subscribers.</p>`,
    date: "2024-12-12",
    category: "Email Marketing",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  "newsletter-marketing-strategies": {
    title: "Newsletter Marketing Strategies That Convert",
    author: "Lisa Anderson",
    content: `<p>Build and grow your newsletter subscriber base with these effective marketing strategies.</p>`,
    date: "2024-12-10",
    category: "Email Marketing",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  "landing-page-optimization-guide": {
    title: "Landing Page Optimization: Turn Visitors into Customers",
    author: "James Wilson",
    content: `<p>Optimize your landing pages to convert more visitors into customers with these proven techniques.</p>`,
    date: "2024-12-08",
    category: "Conversion",
    readTime: "10 min read",
    image: "/placeholder.svg"
  },
  "ab-testing-strategies": {
    title: "A/B Testing Strategies: Data-Driven Optimization",
    author: "James Wilson",
    content: `<p>Learn how to conduct effective A/B tests to optimize your website and improve conversion rates.</p>`,
    date: "2024-12-05",
    category: "Conversion",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "technical-seo-checklist-2025": {
    title: "Technical SEO Checklist: Complete Guide for 2025",
    author: "Sarah Johnson",
    content: `<p>Master technical SEO with this comprehensive checklist covering site speed, mobile optimization, structured data, and more.</p>`,
    date: "2024-12-03",
    category: "SEO",
    readTime: "11 min read",
    image: "/placeholder.svg"
  },
  "keyword-research-mastery": {
    title: "Keyword Research Mastery: Find the Right Keywords",
    author: "Sarah Johnson",
    content: `<p>Discover advanced keyword research techniques to identify high-value keywords that drive traffic and conversions.</p>`,
    date: "2024-11-28",
    category: "SEO",
    readTime: "9 min read",
    image: "/placeholder.svg"
  },
  "link-building-strategies": {
    title: "Link Building Strategies: Build Quality Backlinks",
    author: "Sarah Johnson",
    content: `<p>Learn proven link building strategies to improve your domain authority and search engine rankings.</p>`,
    date: "2024-11-25",
    category: "SEO",
    readTime: "10 min read",
    image: "/placeholder.svg"
  },
  "twitter-marketing-guide": {
    title: "Twitter Marketing Guide: Grow Your Following",
    author: "Michael Chen",
    content: `<p>Master Twitter marketing to build your brand presence and engage with your audience effectively.</p>`,
    date: "2024-11-22",
    category: "Social Media",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "tiktok-marketing-strategies": {
    title: "TikTok Marketing Strategies for Business Growth",
    author: "Michael Chen",
    content: `<p>Leverage TikTok's growing platform to reach younger audiences and drive brand awareness.</p>`,
    date: "2024-11-20",
    category: "Social Media",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  "youtube-marketing-tips": {
    title: "YouTube Marketing Tips: Build Your Channel",
    author: "Michael Chen",
    content: `<p>Grow your YouTube channel with these proven marketing strategies and optimization techniques.</p>`,
    date: "2024-11-18",
    category: "Social Media",
    readTime: "9 min read",
    image: "/placeholder.svg"
  },
  "content-calendar-planning": {
    title: "Content Calendar Planning: Stay Organized",
    author: "Emily Rodriguez",
    content: `<p>Create an effective content calendar that keeps your marketing efforts organized and consistent.</p>`,
    date: "2024-11-15",
    category: "Content Marketing",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  "infographic-design-guide": {
    title: "Infographic Design Guide: Visual Content That Converts",
    author: "Emily Rodriguez",
    content: `<p>Create compelling infographics that communicate your message effectively and drive engagement.</p>`,
    date: "2024-11-12",
    category: "Content Marketing",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "podcast-marketing-strategies": {
    title: "Podcast Marketing Strategies: Grow Your Audience",
    author: "Emily Rodriguez",
    content: `<p>Learn how to market your podcast effectively and build a loyal listener base.</p>`,
    date: "2024-11-10",
    category: "Content Marketing",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  "bing-ads-optimization": {
    title: "Bing Ads Optimization: Maximize Your Reach",
    author: "David Thompson",
    content: `<p>Optimize your Bing Ads campaigns to reach a different audience and improve your ad performance.</p>`,
    date: "2024-11-08",
    category: "PPC",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "retargeting-campaigns-guide": {
    title: "Retargeting Campaigns: Re-engage Your Visitors",
    author: "David Thompson",
    content: `<p>Create effective retargeting campaigns that bring back visitors and convert them into customers.</p>`,
    date: "2024-11-05",
    category: "PPC",
    readTime: "9 min read",
    image: "/placeholder.svg"
  },
  "shopping-ads-optimization": {
    title: "Shopping Ads Optimization: Boost E-commerce Sales",
    author: "David Thompson",
    content: `<p>Optimize your Google Shopping ads to increase visibility and drive more sales for your products.</p>`,
    date: "2024-11-03",
    category: "PPC",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  "email-segmentation-strategies": {
    title: "Email Segmentation Strategies: Personalize Your Campaigns",
    author: "Lisa Anderson",
    content: `<p>Segment your email list effectively to deliver personalized messages that resonate with each audience.</p>`,
    date: "2024-11-01",
    category: "Email Marketing",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  "subject-line-optimization": {
    title: "Subject Line Optimization: Increase Open Rates",
    author: "Lisa Anderson",
    content: `<p>Write compelling email subject lines that grab attention and boost your open rates significantly.</p>`,
    date: "2024-10-28",
    category: "Email Marketing",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  "transactional-email-best-practices": {
    title: "Transactional Email Best Practices: Enhance User Experience",
    author: "Lisa Anderson",
    content: `<p>Design transactional emails that not only inform but also engage and convert your customers.</p>`,
    date: "2024-10-25",
    category: "Email Marketing",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  "checkout-optimization-guide": {
    title: "Checkout Optimization Guide: Reduce Cart Abandonment",
    author: "James Wilson",
    content: `<p>Optimize your checkout process to reduce cart abandonment and increase completed purchases.</p>`,
    date: "2024-10-22",
    category: "Conversion",
    readTime: "9 min read",
    image: "/placeholder.svg"
  },
  "cta-optimization-tips": {
    title: "CTA Optimization Tips: Drive More Clicks",
    author: "James Wilson",
    content: `<p>Create compelling call-to-action buttons that encourage clicks and drive conversions.</p>`,
    date: "2024-10-20",
    category: "Conversion",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  "mobile-conversion-optimization": {
    title: "Mobile Conversion Optimization: Mobile-First Approach",
    author: "James Wilson",
    content: `<p>Optimize your mobile experience to convert more mobile visitors into customers.</p>`,
    date: "2024-10-18",
    category: "Conversion",
    readTime: "8 min read",
    image: "/placeholder.svg"
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: "Blog Post Not Found | ARoot Digital",
    };
  }

  return {
    title: `${post.title} | ARoot Digital Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    alternates: {
      canonical: `https://arootdigital.com/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  // Generate share URL
  const shareUrl = `https://arootdigital.com/blog/${params.slug}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation - At the top */}
      <div className="container mx-auto px-4 py-4 pt-24 md:pt-28 border-b border-border/50 relative z-40 bg-background/95 backdrop-blur-sm">
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
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Post Title and Meta - Below breadcrumb */}
      <div className="container mx-auto px-4 py-8 border-b border-border/50 bg-background">
        <div className="max-w-[1400px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary text-white px-3 py-1 rounded-full font-semibold shadow-sm">{post.category}</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <ShareButtons title={post.title} url={shareUrl} />
          </div>
        </div>
      </div>

      {/* Image, Content and Sidebar Section */}
      <section className="pt-6 pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Blog Post Image and Content - 75% width (3 columns) */}
            <div className="lg:col-span-3 lg:pr-6 lg:border-r lg:border-border">
              {/* Blog Post Image */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
              </div>
              {/* Blog Post Content - Directly below image with no gap */}
              <div 
                className="blog-content max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Callback Sidebar - 25% width (1 column) */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Request Callback Form - Made Bigger */}
                <Card className="p-8 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                  <CallbackRequestForm serviceName={post.category} />
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Related Posts</h2>
          <RelatedPosts
            relatedPosts={allBlogPosts.filter(relatedPost => 
              relatedPost.slug !== params.slug && 
              relatedPost.category === post.category
            )}
          />
        </div>
      </section>
    </div>
  );
}

