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

// All blog posts for related posts - Only showing 3 blogs for now
const allBlogPosts = [
  {
    slug: "social-media-marketing-trends-2026",
    title: "Social Media Marketing Trends to Watch in 2026",
    category: "Social Media",
    author: "Aroot Digital",
    image: "/assets/social-media-trends-2026.png"
  },
  {
    slug: "ten-things-to-rank-higher-2026",
    title: "Ten things you can do to make your website rank higher in 2026",
    category: "SEO",
    author: "Aroot Digital",
    image: "/assets/seo-ranking-tips-2026.png"
  },
  {
    slug: "linkedin-marketing-for-business",
    title: "LinkedIn Marketing for B2B Businesses: The Complete 2026 Guide",
    category: "Social Media",
    author: "Aroot Digital",
    image: "/assets/linkedin-b2b-marketing-2026.png"
  }
  /* Commented out other blog posts for now
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
    slug: "instagram-marketing-strategies",
    title: "Instagram Marketing Strategies That Drive Engagement",
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
  */
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
  "social-media-marketing-trends-2026": {
    title: "Social Media Marketing Trends to Watch in 2026",
    author: "Aroot Digital",
    content: `
      <p><strong>Social Media Marketing Trends to Watch in 2026</strong></p>
      <p><em>A future-ready guide by Aroot Digital</em></p>
      
      <p>Even just two years ago, social media looked very different in 2026. With AI-powered feeds, a lot of short-form videos, and highly personalized content ecosystems, brands need to change quickly to stay visible and relevant.</p>
      
      <p>Here are the most important social media marketing trends for 2026, based on platform changes, consumer behavior, and global marketing insights. This will help businesses stay ahead of the curve.</p>
      
      <h2>1. Personalization based on AI becomes the norm</h2>
      <p>Every big platform in 2026—Instagram, YouTube, Meta, and LinkedIn—uses AI to make content feeds more relevant to each user.</p>
      
      <p><strong>Things brands need to do:</strong></p>
      <ul>
        <li>Write content for small groups of people, not for large groups of people.</li>
        <li>Make personalized offers based on data insights</li>
        <li>Set AI tools to handle replies, direct messages, and work flow automatically.</li>
      </ul>
      
      <h2>2. Short-Form Video Stays on Top</h2>
      <p>Reels, shorts, and TikTok-style videos are still the best. But in 2026, retention is more important than looks alone.</p>
      
      <p><strong>Action plan:</strong></p>
      <ul>
        <li>When you first start, use tight hooks.</li>
        <li>Put in narration, transitions, and subtitles.</li>
        <li>Make content based on series (episodic Reels)</li>
      </ul>
      
      <h2>3. Google has been replaced by social search</h2>
      <p>People, especially Gen Z and young professionals, search on Instagram, TikTok, and YouTube before they use Google.</p>
      
      <p><strong>To get the best:</strong></p>
      <ul>
        <li>Put keywords in the captions</li>
        <li>Use hashtags that people can search for</li>
        <li>Use "query-friendly" words like "how to," "where to," "best," etc. in your content.</li>
      </ul>
      
      <h2>4. Influencer marketing → Working with creators</h2>
      <p>Brands don't go after influencers anymore; instead, they work with real creators to build long-term relationships.</p>
      
      <p><strong>Approach that works:</strong></p>
      <ul>
        <li>Look for creators that people trust.</li>
        <li>Work together to make products and campaigns together</li>
        <li>Use user-generated content (UGC) as ads</li>
      </ul>
      
      <h2>5. There are no more problems with social commerce</h2>
      <p>It's now easy to buy things on Instagram, Facebook, and YouTube.</p>
      
      <p><strong>Brands need to:</strong></p>
      <ul>
        <li>Allow shops inside apps</li>
        <li>Put tags on your items</li>
        <li>Make short video ads that get people to buy right away.</li>
      </ul>
      
      <h2>6. Data from a first party becomes a superpower</h2>
      <p>Platforms put first-party engagement first because privacy is changing.</p>
      
      <p><strong>Companies need to:</strong></p>
      <ul>
        <li>Get leads in a moral way through direct messages, forms, and contests.</li>
        <li>Set up loops for remarketing</li>
        <li>Use email, WhatsApp, and loyalty lists to build your own audiences.</li>
      </ul>
      
      <h2>7. Authenticity of the brand is better than over-polished content</h2>
      <p>2026: People want real, not perfect. The brands that get the most attention are posting:</p>
      <ul>
        <li>Clips from behind the scenes</li>
        <li>Videos of teams</li>
        <li>Stories from real clients</li>
        <li>Day-in-the-life content</li>
      </ul>
      
      <h2>8. Popularity of AI avatars and virtual influencers grows</h2>
      <p>Brands are using personas made by AI to keep content consistent and scale it up. These characters show up in:</p>
      <ul>
        <li>News releases</li>
        <li>Stories from campaigns</li>
      </ul>
      <p>They cut costs and make things faster.</p>
      
      <h2>9. Building community > Number of followers</h2>
      <p>In 2026, platforms will reward pages that start conversations instead of pages with lots of fake followers.</p>
      
      <p><strong>Areas of focus:</strong></p>
      <ul>
        <li>Polls of the people</li>
        <li>Q&A threads for specific topics</li>
        <li>Content that only members can see</li>
        <li>Brand WhatsApp Channels</li>
      </ul>
      
      <h2>10. SEO and social media together are the new power couple</h2>
      <p>Posts are getting indexed faster than ever. When you use SEO techniques in your social media posts, they show up higher in search engines and on social networks.</p>
      
      <p><strong>Important moves:</strong></p>
      <ul>
        <li>Captions based on keywords</li>
        <li>Made alt-text better</li>
        <li>Geotagging to find things in your area</li>
        <li>Storytelling on a carousel with metadata</li>
      </ul>
      
      <h2>Last Thoughts</h2>
      <p>2026 is the year of social media that is smart, human, and powered by AI. Brands that value personalization, being real, putting the community first, and being creative with data will be ahead of the game.</p>
      
      <p>Our job at Aroot Digital is to help companies create a social media ecosystem that will work in the future and give them real engagement, brand presence, and growth.</p>
    `,
    date: "2026-01-30",
    category: "Social Media",
    readTime: "12 min read",
    image: "/assets/social-media-trends-2026.png"
  },
  "ten-things-to-rank-higher-2026": {
    title: "Ten things you can do to make your website rank higher in 2026",
    author: "Aroot Digital",
    content: `
      <p><strong>Ten things you can do to make your website rank higher in 2026</strong></p>
      <p><em>Aroot Digital has made a useful guide that has a big impact.</em></p>
      
      <p>Search engines are smarter, easier to use, and more focused on how people use them than they have ever been before in 2026. Your SEO plan needs to change as AI-driven ranking systems, brand reputation signals, and dynamic SERP layouts change.</p>
      
      <p>We at Aroot Digital focus on SEO that is smart, clean, long-lasting, and meant to help your business grow. These are the top ten SEO tips you should follow to stay ahead in 2026.</p>
      
      <h2>1. Make EEAT (Experience, Expertise, Authority, and Trust) your top priority</h2>
      <p>Google's algorithms now give a lot of points to websites that show they know a lot about the real world, especially in YMYL areas.</p>
      
      <p><strong>How to do it:</strong></p>
      <ul>
        <li>Add bios of the writers</li>
        <li>Show off awards, credentials, and logos from clients</li>
        <li>Publish information that is accurate and backed by facts</li>
      </ul>
      
      <h2>2. Improve the performance of AI Overviews and SGE</h2>
      <p>AI overview blocks are very important for SERPs in 2026.</p>
      
      <p><strong>What to do:</strong></p>
      <ul>
        <li>Answer questions quickly</li>
        <li>Use subheadings that are clear and easy to read</li>
        <li>Include FAQs with clear, correct answers</li>
      </ul>
      
      <h2>3. Don't just list keywords; make groups of related topics</h2>
      <p>Search engines now care more about depth than breadth.</p>
      
      <p>To show that you know what you're talking about, make topic clusters that link blogs, pillar pages, and service pages.</p>
      
      <h2>4. Make sure your pages load in less than 1.5 Seconds</h2>
      <p>In 2026, speed will directly affect rankings.</p>
      
      <p>Change to newer formats like WebP, use lazy loading, and compress images. Search engines don't like mobile pages that take a long time to load.</p>
      
      <h2>5. Make your site work best for searches that use voice or conversation</h2>
      <p>Voice search queries went up a lot because of smart assistants.</p>
      
      <p><strong>Use:</strong></p>
      <ul>
        <li>Keywords in everyday language</li>
        <li>A lot of FAQs in the content</li>
        <li>Long-tail phrases for talking</li>
      </ul>
      
      <h2>6. Make your plan for linking to other pages on your site better</h2>
      <p>Now, internal links mean more.</p>
      
      <p>Link your content together like a network: blogs → services → case studies → contact page.</p>
      
      <h2>7. Write content that keeps people interested (signals of user engagement)</h2>
      <p>Scroll depth, dwell time, and bounce rate are all important engagement metrics that affect rankings.</p>
      
      <ul>
        <li>Short paragraphs</li>
        <li>Photos</li>
        <li>Examples</li>
        <li>Stories that explain things</li>
      </ul>
      
      <h2>8. Keep an eye on zero-click search improvements</h2>
      <p>In 2026, more than 70% of searches will not require a click.</p>
      
      <p><strong>Take full advantage of:</strong></p>
      <ul>
        <li>Snippets that are easy to see</li>
        <li>Other things people want to know</li>
        <li>Cards with a lot of cash</li>
        <li>Answers that are short and easy for Google to find</li>
      </ul>
      
      <h2>9. Use Schema Markup Everywhere</h2>
      <p>Structured data gives you more trust and visibility.</p>
      
      <p><strong>Add a schema for:</strong></p>
      <ul>
        <li>Questions and Answers</li>
        <li>How to</li>
        <li>Help</li>
        <li>Business in the Area</li>
      </ul>
      
      <h2>10. Post content often to build trust in your brand</h2>
      <p>SEO that puts brands first is here.</p>
      
      <p><strong>Put out content on a regular basis:</strong></p>
      <ul>
        <li>Blogs</li>
        <li>Media for social reasons</li>
        <li>PR</li>
        <li>YouTube</li>
        <li>Podcasts</li>
      </ul>
      
      <p>This makes more people look for your brand, which is one of the best ways to get a high ranking these days.</p>
      
      <h2>Conclusion</h2>
      <p>In 2026, SEO will reward brands that are clear, trustworthy, and offer value.</p>
      
      <p>If you have the right mix of in-depth content, technical know-how, and brand-building, your website can beat the competition and be ready for the future.</p>
      
      <p>If you want Aroot Digital to make an SEO strategy that focuses on performance, I can also make a landing page.</p>
    `,
    date: "2026-01-30",
    category: "SEO",
    readTime: "10 min read",
    image: "/assets/seo-ranking-tips-2026.png"
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
    title: "LinkedIn Marketing for B2B Businesses: The Complete 2026 Guide",
    author: "Aroot Digital",
    content: `
      <p><strong>LinkedIn Marketing for B2B Businesses: The Complete 2026 Guide</strong></p>
      <p><em>By Aroot Digital</em></p>
      
      <p>LinkedIn is now the best place in the world to market to other businesses. It helps businesses gain credibility, affects people's buying decisions, and brings in high-value leads from decision-makers and executives all over the world.</p>
      
      <p>In 2026, LinkedIn is more than just a networking site; it's a full-funnel growth engine for B2B businesses. If you want to get leads, build your brand, hire people, or make partnerships, the right way to use LinkedIn could change your business.</p>
      
      <p>You can win on LinkedIn in 2026 if you read this article.</p>
      
      <h2>1. Why LinkedIn will be important for business-to-business (B2B) in 2026</h2>
      <ul>
        <li>80% of B2B leads come from LinkedIn</li>
        <li>Four out of five members are people who make decisions or have an effect on them.</li>
        <li>People who use LinkedIn trust brand content three times more than people who use other sites.</li>
        <li>Organic reach is better than Facebook and Instagram for professional content.</li>
      </ul>
      
      <p>LinkedIn is a platform with a lot of purpose, a good audience, and not much noise.</p>
      
      <h2>2. Build a strong foundation for your business page</h2>
      <p>Before you run ads or post content, your business page needs to look professional and be set up for search engines.</p>
      
      <p><strong>Things That Need to Get Better</strong></p>
      <ul>
        <li>A brand banner that clearly shows what the brand is worth</li>
        <li>An "About" section full of keywords</li>
        <li>You can add services to LinkedIn's service pages.</li>
        <li>Pages that show off different types of products or verticals</li>
        <li>A regular blogging schedule (three to four times a week)</li>
        <li>Team engagement: when employees like and share, the reach goes up by 30–50%</li>
      </ul>
      
      <h2>3. Write content that people can trust and that has a lot of authority</h2>
      <p>Posts that are helpful are better for LinkedIn than ones that are just for advertising.</p>
      
      <p><strong>The best kinds of content in 2026</strong></p>
      <ul>
        <li>New ideas and trends in the field</li>
        <li>Posts that show you're a thought leader</li>
        <li>LinkedIn carousels</li>
        <li>Opinions based on facts</li>
        <li>Posts from the founder's point of view</li>
        <li>Examples of clients</li>
        <li>Employee highlights</li>
        <li>"A day in the life" or "behind the scenes"</li>
      </ul>
      
      <p><strong>The Golden Rule</strong> says that 70% of what you do should be valuable, 20% should be telling a story, and 10% should be promoting.</p>
      
      <h2>4. Take advantage of LinkedIn Carousels and Document Posts</h2>
      <p>Carousels get the most people to interact with them on LinkedIn.</p>
      
      <p><strong>Why they work:</strong></p>
      <ul>
        <li>Easy to keep</li>
        <li>High retention</li>
        <li>Telling stories like a pro</li>
        <li>Good for making things that are hard to understand clear</li>
      </ul>
      
      <p><strong>Use them to make things easier:</strong></p>
      <ul>
        <li>Frameworks</li>
        <li>Steps</li>
        <li>Facts about the business</li>
        <li>Lists</li>
        <li>Examples of cases</li>
      </ul>
      
      <h2>5. LinkedIn SEO: Make it easier for people to look for you and find you</h2>
      <p>Like Google, LinkedIn has its own search system that uses algorithms.</p>
      
      <p><strong>Use the best:</strong></p>
      <ul>
        <li>Titles</li>
        <li>Part about</li>
        <li>Tags</li>
        <li>Words that go with pictures</li>
        <li>Keywords for the creator mode</li>
        <li>Tags for the business</li>
      </ul>
      
      <p>Add niche-specific keywords like "B2B SaaS marketing," "financial advisory marketing," "Pune digital marketing," and so on.</p>
      
      <h2>6. Use the strength of your own brand</h2>
      <p>People trust other people, not brands, when they do business with each other (B2B).</p>
      
      <p>You should include your founders, salespeople, and experts in the field.</p>
      
      <p><strong>Content ideas for your personal brand:</strong></p>
      <ul>
        <li>What I learned</li>
        <li>Comments from the field</li>
        <li>Short stories in posts</li>
        <li>What goes on behind the scenes of the business</li>
        <li>The client's path</li>
        <li>Mistakes and things learned</li>
        <li>A point of view on market trends</li>
      </ul>
      
      <p>Brand pages may get ten times less attention than employees with great profiles.</p>
      
      <h2>7. Build a machine that brings in B2B leads</h2>
      <p>There are many ways LinkedIn can help you find qualified leads:</p>
      
      <p><strong>Getting leads naturally</strong></p>
      <ul>
        <li>Add CTAs to your posts</li>
        <li>Use lead magnets like guides and PDFs</li>
        <li>Host live events on LinkedIn</li>
        <li>Join niche groups</li>
        <li>Value-first talks for getting in touch with DM</li>
      </ul>
      
      <p><strong>Paid Lead Generation</strong></p>
      <ul>
        <li>Content that costs money</li>
        <li>Forms for Getting Leads</li>
        <li>Ads for Talking</li>
        <li>Getting people who have already been to your website to come back</li>
        <li>Aiming at people who have seen a video</li>
      </ul>
      
      <p>LinkedIn Lead Gen Forms have a conversion rate that is two to three times higher because they automatically fill in user information.</p>
      
      <h2>8. Run ads on LinkedIn that are very personal</h2>
      <p>In 2026, LinkedIn ads let you target people with laser-like precision:</p>
      <ul>
        <li>Name of the job</li>
        <li>Field</li>
        <li>The size of the business</li>
        <li>Age</li>
        <li>Skills</li>
        <li>People who attend events</li>
        <li>People who look at the site</li>
        <li>Lookalikes based on customer relationship management</li>
      </ul>
      
      <p><strong>Types of ads that work well:</strong></p>
      <ul>
        <li>Ads that are videos (≤15 seconds)</li>
        <li>Ads that only have one picture</li>
        <li>Ads that have carousels</li>
        <li>Ads for Lead Generation</li>
        <li>Ads for papers</li>
      </ul>
      
      <p>Instead of focusing on heavy design, focus on value, clarity, and relevance.</p>
      
      <h2>9. Use social proof to gain people's trust</h2>
      <p>You need to be able to trust B2B buyers.</p>
      
      <p><strong>Showcase:</strong></p>
      <ul>
        <li>Examples of cases</li>
        <li>Client reviews</li>
        <li>Credentials</li>
        <li>Events that are important</li>
        <li>Things that make the media unique</li>
        <li>Awards</li>
      </ul>
      
      <p>Social proof makes it easier to make decisions faster.</p>
      
      <h2>10. Watch the right LinkedIn KPIs</h2>
      <p>To make your B2B LinkedIn marketing plan better, keep an eye on:</p>
      
      <p><strong>Important metrics for engagement</strong></p>
      <ul>
        <li>Impressions</li>
        <li>Rate of clicks (CTR)</li>
        <li>Keeps and shares</li>
        <li>Time spent</li>
      </ul>
      
      <p><strong>Key Performance Indicators for Leads</strong></p>
      <ul>
        <li>The cost per lead (CPL)</li>
        <li>Quality of the lead score</li>
        <li>The rate of conversion</li>
      </ul>
      
      <p><strong>Important Performance Indicators for Brands</strong></p>
      <ul>
        <li>More followers</li>
        <li>Reach in the business</li>
        <li>Getting workers to take part</li>
        <li>Visits to profiles</li>
      </ul>
      
      <h2>Last Thoughts</h2>
      <p>LinkedIn will still be the best place for B2B businesses in 2026, but only for brands that know how to combine value, reliability, and trust.</p>
      
      <p>If you build strong personal brands, share useful information, run smart ads, and keep track of what works, LinkedIn might be the best digital platform for you.</p>
      
      <p>Aroot Digital can help you make a LinkedIn plan that works:</p>
      <ul>
        <li>More power for your brand</li>
        <li>More participation</li>
        <li>Good leads for B2B</li>
        <li>Sales cycles that go by faster</li>
      </ul>
    `,
    date: "2026-01-30",
    category: "Social Media",
    readTime: "15 min read",
    image: "/assets/linkedin-b2b-marketing-2026.png"
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
      <div className="container mx-auto px-4 py-8 md:py-10 mt-6 md:mt-8 border-b border-border/50 bg-background">
        <div className="max-w-[1400px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground">
            <span className="bg-primary text-white px-4 py-1.5 rounded-full font-semibold shadow-sm text-sm md:text-base">{post.category}</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span>{post.readTime}</span>
            </div>
            <ShareButtons title={post.title} url={shareUrl} />
          </div>
        </div>
      </div>

      {/* Image, Content and Sidebar Section */}
      <section className="pt-8 pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Post Image and Content - 75% width (3 columns) */}
            <div className="lg:col-span-3 lg:pr-8 lg:border-r lg:border-border/50">
              {/* Blog Post Image */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
              </div>
              {/* Blog Post Content - Enhanced spacing and readability */}
              <article 
                className="blog-content max-w-none px-4 md:px-6 lg:px-8 py-8 md:py-10 bg-card/40 rounded-xl border border-border/50 shadow-sm"
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

      {/* Related Posts Section - Commented out for now */}
      {/* <section className="py-12 md:py-16 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Related Posts</h2>
          <RelatedPosts
            relatedPosts={allBlogPosts.filter(relatedPost => 
              relatedPost.slug !== params.slug && 
              relatedPost.category === post.category
            )}
          />
        </div>
      </section> */}
    </div>
  );
}

