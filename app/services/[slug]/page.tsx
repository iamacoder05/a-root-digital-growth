import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Star, Users, Target, Award, TrendingUp, Share2, ImageIcon, Building2, Brain, Sparkles, ShoppingCart, Smartphone, AppWindow, FileText, MapPin, Globe, Calendar, ArrowRight, BarChart, Palette, Rocket, Search, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallbackRequestForm from '@/components/CallbackRequestForm';
import StickyCallbackScript from '@/components/StickyCallbackScript';
import ToolsWeUse from '@/components/ToolsWeUse';
import SectionDivider from '@/components/SectionDivider';
import ServiceFAQ from '@/components/ServiceFAQ';
import ScrollToSectionLink from '@/components/ScrollToSectionLink';
import { Card } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Metadata } from 'next';

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
  // 'martech-data-analytics': 'Analytics',
  'web-design': 'Web Design and Development',
  'social-media-marketing': 'Social Media Marketing',
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
    description: 'A reliable SEO company that helps businesses grow in a way that is quick, easy, and lasts.',
    subtitle: 'Companies can get bigger with SEO services that are easy to use, work well, and are useful. You can count on this SEO company to help brands get more attention, get good traffic, and build a good reputation in search engines over time.',
    longDescription: 'People now need search exposure to find brands online. Aroot Digital\'s SEO services will make sure that people don\'t forget about your site, that it works right, and that it looks like real people. We value clear, simple, and long-lasting value over complicated language or empty claims. Our SEO company is up-to-date. We help you stay up to date, competitive, and easy to find, whether you\'re trying to reach people in your area or all over the world.',
    features: [
      'A full study of keywords',
      'Fast and local SEO, including affordable local SEO services',
      'SEO for both national and international audiences to help people find your site',
      'Better technical SEO',
      'Better content quality and relevance',
      'SEO success tracking dashboards',
      'Analysis of competitors to get a strategic edge',
      'SEO in more than one language (if needed)'
    ],
    benefits: [
      'Better visibility where it counts—show up for the right searches, not just any search',
      'Better quality traffic means more users who are interested in what you have to offer',
      'SEO is meant to help businesses grow steadily and sustainably over time, not just for short bursts',
      'More faith in the brand—getting a good ranking naturally increases trust and power',
      'Marketing that works SEO helps all of your online projects, which lowers the total cost of getting new customers',
      'We use research, technology, and real-world decisions to make SEO that is simple, easy to measure, and based on what your business needs'
    ],
    howItWorks: [
      {
        step: 'Step 1: Do a full search and check-up',
        description: 'Audits help us find out what\'s working, what\'s stopping us from growing, and where the best chances are.'
      },
      {
        step: 'Step 2: Write down your goal and a list of keywords',
        description: 'Our job is to connect your pages to important keywords, locations, and user trips. In this case, you\'ll need to plan for both cheap and wide-ranging local SEO services.'
      },
      {
        step: 'Step 3: Set up the page layouts so that they are easy to read',
        description: 'This includes better content, better site experiences, and clean code.'
      },
      {
        step: 'Step 4: SEO for the technical side',
        description: 'If you take care of your site\'s performance, indexing, security, design, and mistakes, search engines will have no trouble understanding it.'
      },
      {
        step: 'Step 5: Your posts will help you grow',
        description: 'Content that is written with people in mind and is good for SEO is more useful and interesting.'
      },
      {
        step: 'Step 6: Fair Off-Page SEO',
        description: 'Getting mentions, outreach, and reliable sources based on research to build authority. The next step is to watch things and always try to make them better. Our team keeps an eye on progress, adjusts to changes in search engines, and makes sure that your brand stays at the top of the list.'
      }
    ],
    differentiators: [
      'SEO that is easy to understand and follow—no crazy ideas, just simple steps',
      'SEO strategies based on research done in-house',
      'Experience in a wide range of industries and global markets that has been proven',
      'Plans that work for both small businesses and big brands',
      'Only ethical optimization—no cheating or breaking the law',
      'Organized steps and thorough records. Putting clarity first is what makes a lot of businesses think we are one of the best SEO service teams in the area.'
    ],
    useCases: [
      {
        title: 'Shopping online and directly from the store',
        description: 'Make it easier to find things, show more of the category, and help people find your brand.'
      },
      {
        title: 'Businesses that make things and work with other businesses',
        description: 'Use narrow, intent-driven searches to help people who make decisions find your website.'
      },
      {
        title: 'Nearby places of business',
        description: 'Our affordable SEO services can help clinics, coffee shops, and other businesses show up in searches nearby and get people to come in.'
      },
      {
        title: 'Professionals and Service Providers',
        description: 'If you do well on high-intent questions, you can get more questions, trust, and a good reputation.'
      },
      {
        title: 'Aroot Digital can help a lot of different kinds of businesses',
        description: 'From small ones that just need help with basic location-based optimization to big ones that need a lot of help at work. Many brands choose us because: We know a lot about both Indian and foreign markets; Our SEO methods are based on research; Our reports are clear and don\'t hide anything; We work with your marketing and tech teams; We follow Google\'s best practices; We will be your SEO service provider for a long time.'
      }
    ],
    trustElements: [
      'We know a lot about both Indian and foreign markets',
      'Our SEO methods are based on research',
      'Our reports are clear and don\'t hide anything',
      'We work with your marketing and tech teams',
      'We follow Google\'s best practices',
      'We will be your SEO service provider for a long time'
    ],
    softCTA: 'Our staff is here to help you with quick and easy solutions if your business wants clear, organized, and long-term SEO success.'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    icon: 'Share2',
    image: '/assets/SEO.jpg',
    description: 'Digital marketing services that will help your business grow in the right way',
    subtitle: 'Aroot Digital offers smart, data-driven digital marketing solutions that help businesses get more attention, meet customer needs, and grow in a way that doesn\'t hurt the environment.',
    longDescription: 'In today\'s digital world, every business needs to have a strong, consistent, and strategic online presence. Aroot Digital is a full-service digital marketing company that can help your business grow by getting more people to see it and building trust with customers. Our methodical approach makes sure that everything is clear and that you can see your progress, whether you\'re building new digital marketing websites or growing an old brand. We are a trustworthy digital marketing company that helps businesses in India and around the world give their customers digital experiences that are safe, useful, and up to date.',
    features: [
      'Search Engine Optimization (SEO) to make your site easier to find over time',
      'Performance Marketing & Paid Ads to get people to buy your product',
      'Content Marketing & Copywriting to tell your brand\'s story',
      'Social Media Management to get people to interact with your brand',
      'Website Design & Development to make your site run smoothly',
      'Brand Strategy & Creative Communication',
      'Analytics, Dashboards, & Reporting',
      'Reputation Management & Online PR'
    ],
    benefits: [
      'They offer smart audience targeting that makes ads more relevant and cuts down on waste',
      'They make sure that their brand is visible across all search, social, and paid channels',
      'They offer complete digital marketing solutions that fit their stage of growth',
      'Clear reporting, open insights, and responsibility for performance',
      'A team that can help early-stage, growth-stage, and enterprise brands'
    ],
    howItWorks: [
      {
        step: 'Learning and doing research',
        description: 'Know your business, your customers, your competitors, and what you want to accomplish in the long run.'
      },
      {
        step: 'Strategy and plan',
        description: 'Making a plan for a number of channels that includes SEO, content, paid media, design, data, and more.'
      },
      {
        step: 'How to Do It on All Channels',
        description: 'Making sure that all of the campaigns, creative work, communication, and website optimization are done right.'
      },
      {
        step: 'Keeping an eye on and improving performance',
        description: 'You should do regular audits, make changes, and get new ideas to keep your digital performance steady.'
      }
    ],
    differentiators: [
      'We know a lot about both Indian and global markets, and we have experts on staff in creative, technical, performance, and analytics',
      'We have helped over 200 brands grow in more than 25 different fields',
      'We always talk to each other in a clear, honest, and consistent way',
      'We also have special ways to help brands grow at important times in their business',
      'We don\'t just help our clients find the best digital marketing services for their business; we also help them figure out which services will work best for them in the long run'
    ],
    useCases: [
      {
        title: 'Pathways that focus on performance',
        description: 'Can help you sell more in stores and online.'
      },
      {
        title: 'Real estate',
        description: 'Get more qualified site views and questions'
      },
      {
        title: 'Health and wellness',
        description: 'Build trust through content-driven awareness'
      },
      {
        title: 'Manufacturing and industrial brands',
        description: 'Make B2B lead pipelines stronger'
      },
      {
        title: 'Financial and professional services',
        description: 'Build trust and digital power'
      },
      {
        title: 'Food, drink, and hospitality',
        description: 'Get more people to notice and come to your business'
      },
      {
        title: 'We make sure that all of our international clients follow our structured digital marketing business model',
        description: 'So that people all over the world know about their brand'
      }
    ],
    trustElements: [
      'More than ten years of experience in more than one area',
      'Worked in India, the UAE, the UK, and Southeast Asia',
      'Facts are what strategy is based on, and people are what imagination is based on',
      'Startups, small businesses, and big brands trust us',
      'Not leaving anything out when you tell it like it is',
      'Because of this, a lot of people think that Aroot Digital is one of the best digital marketing companies in India for making a brand that lasts'
    ],
    softCTA: 'Our staff is ready to help you with digital marketing services that are organized, well-planned, and work. Let\'s talk about how to safely and steadily grow your brand.'
  },
  'app-marketing': {
    title: 'App Marketing',
    icon: 'AppWindow',
    image: '/assets/SEO.jpg',
    description: 'App Marketing That Accelerates Growth & User Engagement',
    subtitle: 'Smart strategies to scale installs, boost retention & expand your app\'s digital footprint.',
    longDescription: 'In a crowded digital ecosystem where thousands of apps launch every week, getting users to notice your brand requires more than just a great product. You need strategic visibility, consistent engagement, and a channel mix that works every single day. Aroot Digital helps brands achieve this through a structured, insight-led app marketing framework powered by whatsapp message marketing, targeted campaigns, mobile app promotion, and performance-led execution. Your app gets what it needs the most — discoverability, installs, engagement, and long-term retention.',
    features: [
      'App Store Optimization (ASO)',
      'Paid App Install Campaigns (Meta, Google, OEM platforms)',
      'Influencer & Creator-led Launch Campaigns',
      'Conversion-Optimised Landing Pages',
      'Behaviour-Based WhatsApp Automation',
      'Re-engagement & Retargeting Strategies',
      'Analytics Dashboard & Performance Reporting',
      'Compliant communication via the best whatsapp bulk message sender tools'
    ],
    benefits: [
      'Higher Discoverability: Position your app where your users are already spending time.',
      'Faster Install Growth: Use integrated mobile app promotion campaigns to drive high-intent traffic.',
      'Stronger User Engagement: Execute meaningful, behaviour-led whatsapp campaign flows.',
      'Cost-Efficient Scaling: Reduce acquisition cost with intelligent segmentation and social media marketing and advertising.',
      'Better Retention: Build repeat engagement without spamming users.',
      'Complete Funnel Coverage: Awareness → Acquisition → Activation → Retention.'
    ],
    howItWorks: [
      {
        step: 'Step 1: Audit & Strategy Design',
        description: 'We analyse your current app performance, competitor positioning, and audience behaviour to build a customised plan.'
      },
      {
        step: 'Step 2: Multi-Channel Promotion',
        description: 'We run precision-targeted mobile app promotion campaigns using Meta, Google Ads, WhatsApp, influencer tie-ups, and remarketing.'
      },
      {
        step: 'Step 3: WhatsApp Outreach & Engagement',
        description: 'Using compliant workflows, we implement automated sequences, broadcast updates, event-based notifications, and low-cost whatsapp message marketing flows. We use the best whatsapp bulk message sender tools (compliant platforms only) to ensure smooth delivery & measurable results.'
      },
      {
        step: 'Step 4: Creative & Content Execution',
        description: 'High-quality ads, landing pages, and WhatsApp creatives tailored to ensure your messaging resonates.'
      },
      {
        step: 'Step 5: Optimisation & Insights',
        description: 'Real-time data monitoring → performance insights → weekly optimisation → consistent ROI improvement.'
      }
    ],
    differentiators: [
      '10+ years of digital marketing experience across India & global markets',
      'Deep expertise in whatsapp campaign strategy & execution',
      'ROI-first content, creatives & paid media strategies',
      'Fully customised mobile app promotion blueprint for each client',
      'Transparent reporting — no guesswork, only measurable outcomes',
      'Fast communication, structured workflows, and a dedicated specialist team'
    ],
    useCases: [
      {
        title: 'E-commerce App',
        description: 'Re-engagement campaigns via whatsapp message marketing to reduce abandoned carts.'
      },
      {
        title: 'Fintech App',
        description: 'User onboarding flows, document reminders, and instant notification-triggered journeys.'
      },
      {
        title: 'EdTech App',
        description: 'Multi-channel promotions + WhatsApp event updates to boost demo class participation.'
      },
      {
        title: 'Health & Fitness App',
        description: 'Retention-focused messaging, progress reminders, subscription nudges.'
      },
      {
        title: 'Local Businesses',
        description: 'Leverage social media marketing and advertising for targeted installs in specific cities.'
      }
    ],
    trustElements: [
      'Worked with brands across India, Middle East, Europe & Southeast Asia',
      'Strong performance portfolio across 30+ industries',
      'Structured & compliant communication processes',
      'Zero black-hat practices — only clean, measurable, scalable growth',
      'Transparent pricing & performance reporting'
    ],
    softCTA: 'Ready to grow your app the right way? Aroot Digital brings strategy, execution, and long-term thinking under one roof — helping you scale sustainably and confidently.'
  },
  'content-marketing': {
    title: 'Content Marketing',
    icon: 'FileText',
    image: '/assets/SEO.jpg',
    description: 'Businesses that want to stand out with high-quality content can use writing services',
    subtitle: 'The words that people use. Structure that is good for SEO. Telling stories that are good for business.',
    longDescription: 'Content that is good doesn\'t just take up space. It helps people make decisions by earning their trust and showing them how much something is worth. Aroot Digital\'s content writers use a mix of clarity, originality, and strategy to write content that sounds like a person wrote it, reads naturally, and makes your company the clear choice. We write articles, website content, or even full website copy that is easy for your customers to understand and helps you reach your business goals.',
    features: [
      'Writing copy for web pages, such as Home, About, Services, and Landing Pages',
      'Getting help from experienced article writers to write blogs',
      'Updating old articles or articles that aren\'t getting enough traffic',
      'Writing content with the help of AI and a lot of human editing to make sure it\'s correct and sounds good',
      'Writing SEO content that matches what people are looking for and what will help it move up in the rankings',
      'Taglines, value propositions, and tone-of-voice tips for marketing a brand',
      'Long-form essays that show you know a lot about your field'
    ],
    benefits: [
      'Messages that are clear and make your brand sound smart, sure, and trustworthy',
      'A structure that follows SEO rules and was written by professional SEO content writers',
      'Stories that sound real and not robotic',
      'Knowledge of the industry for websites, blogs, product pages, and more',
      'AI helps with productivity, and expert editorial control makes sure that every piece of writing is original and sounds human'
    ],
    howItWorks: [
      {
        step: '1. Knowing the brand well',
        description: 'We learn about your brand\'s voice, its target market, its industry, and its goals for converting customers.'
      },
      {
        step: '2. Drawing a map of topics and words',
        description: 'Putting keywords in a way that makes sense without going overboard, even when writing articles for SEO.'
      },
      {
        step: '3. Professional article writers make drafts',
        description: 'Smart tools can help people write every piece, but they can\'t do it for them.'
      },
      {
        step: '4. Writing and editing articles',
        description: 'We improve things, polish them, and let you speak.'
      },
      {
        step: '5. Getting things done and making them better',
        description: 'You get content that is ready to be published and optimized for search engines, with no mistakes and a clear structure.'
      }
    ],
    differentiators: [
      'We don\'t let AI write text by itself. We write content with AI in a responsible way and have people edit it',
      'We don\'t just think about keywords; we also think about how people feel about brands',
      'We write to meet international standards and still be quick in India',
      'Our editorial team is made up of writers who are good at writing articles and website content and have worked in a lot of different fields',
      'It\'s easy to read and we tell stories and do SEO at the same time'
    ],
    useCases: [
      {
        title: 'A complete rewrite of the website\'s copy',
        description: 'To get more people to buy'
      },
      {
        title: 'New landing pages',
        description: 'For new products or services'
      },
      {
        title: 'Weekly blogs',
        description: 'Written by professional article writers'
      },
      {
        title: 'Writing SEO-friendly content',
        description: 'To make it easier for search engines to find'
      },
      {
        title: 'Rewriting articles',
        description: 'That are old or duplicate'
      },
      {
        title: 'Making content more human',
        description: 'To replace AI-generated drafts'
      },
      {
        title: 'Writing content for international markets',
        description: 'Like the US, UK, UAE, Singapore, and Australia'
      }
    ],
    trustElements: [
      'We have worked with companies in more than 30 different fields, including software, SaaS, finance, food and drink, hotels, and healthcare',
      'Work done in the US, Europe, India, and the Middle East',
      'Messages that are clear, content that is clean and organized, and that follows the rules',
      'Using AI in a moral way—no copying or taking shortcuts',
      'Editors who are dedicated to making sure that everything is correct, clear, and has the same tone'
    ],
    softCTA: 'Aroot Digital can help you if you need content that sounds natural, looks high-end, and works for your business.'
  },
  'ppc-paid-marketing': {
    title: 'Meta and Performance Marketing',
    icon: 'MousePointerClick',
    image: '/assets/SEO.jpg',
    description: 'Meta and performance marketing campaigns that are smart and get you results quickly and with high intent',
    subtitle: 'The goal of the subhead is very clear. Be smarter with your money. Strategic Meta and performance marketing campaigns can help your business grow.',
    longDescription: 'Businesses that work online need more than just traffic; they need traffic that turns into sales. People who are looking for what you offer will see your brand in Meta and performance marketing campaigns. Aroot Digital can help brands in India and around the world run Meta and performance marketing campaigns that work and don\'t cost too much. Our plan makes sure that you get the most out of your money, whether you\'re launching a new product, entering a new market, or improving your current funnels.',
    features: [
      'Search Ads: Show Bing and Google users who are ready to buy your business',
      'Display ads: Use ads that are interesting and catch people\'s attention to get them to notice your business',
      'Send personalized text messages to people who have already bought from you to get them to buy again',
      'Shopping ads are great for online stores because they can reach people who are ready to buy',
      'Plans for Performance Max campaigns: AI can help you do your best in a lot of different ways',
      'More people will buy from you if you make the home page more helpful',
      'Taking care of your plans and budget: Get more done for less money',
      'Writing ads and creative plans: When you write words that make people agree with you, think about what you\'re saying and why it matters'
    ],
    benefits: [
      'It\'s clear right away: Well-planned Meta and performance marketing campaigns can help you reach people who are really interested in what you have to offer',
      'Putting a cap on how much you can spend on ads: Spend money, get better deals, and make sure every click helps your business reach its goal',
      'A real push to sell: Very specific Meta and performance marketing campaigns can get people to go on the trips they need to take',
      'Growth that can be sped up: Current information and market insights can help you change, stop, grow, or make what you\'re doing better',
      'Thoughts that are clear: Reports that give you a lot of information about what\'s going on and what will happen next'
    ],
    howItWorks: [
      {
        step: 'Step 1: Get to know the company and the words that are important',
        description: 'To find the best basis for your Meta and performance marketing campaigns, we look at phrases that show intent, how your audience reacts, what your competitors are doing, and how many people are searching for your product.'
      },
      {
        step: 'Step 2: Plan the campaign',
        description: 'We make sure that every Meta and performance marketing plan has small ad groups, catchy ad copy, and landing pages that are well-optimized.'
      },
      {
        step: 'Step 3: Turn it on and keep an eye on it',
        description: 'You can see how well your work is doing as soon as it goes live and make changes to get more clicks and sales.'
      },
      {
        step: 'Step 4: Always try to make things better',
        description: 'To keep results stable, bids, targeting, creatives, and placements are changed slightly.'
      },
      {
        step: 'Step 5: Writing reports and giving advice',
        description: 'You have a long-term plan for your digital marketing that is based on clear and useful information.'
      }
    ],
    differentiators: [
      'This means that the people who make your Meta and performance marketing plan have worked for a lot of different companies and know a lot about them',
      'Clear and honest execution—no guesswork, no hidden fees, just the facts',
      'Everything, from the searches to the landing pages, is set up to make people want to sell',
      'Pan-Indian and Global Reach: Have worked with a wide range of businesses and people from all over the world',
      'Meta and performance marketing experts who only work on your ads and not on a lot of other ones',
      'The screens are easy to read, and they get new information every week'
    ],
    useCases: [
      {
        title: 'Nearby businesses',
        description: 'For some treatments at a clinic in Pune, Meta and performance marketing campaigns got better, which brought in more leads.'
      },
      {
        title: 'A clothing store',
        description: 'Made more money every month by using Meta and performance marketing campaigns that were tailored to specific items and remarketing funnels.'
      },
      {
        title: 'These businesses sell things to other businesses',
        description: 'When a SaaS company ran Meta and performance marketing campaigns aimed at industry leaders, the cost per lead went down.'
      },
      {
        title: 'Store chains that have more than one location',
        description: 'A group of service providers put up Meta and performance marketing campaigns to find out what people were looking for on each site.'
      }
    ],
    trustElements: [
      'For more than ten years, they have run ads in India, the Middle East, the US, the UK, and APAC',
      'They have worked with well-known companies in shopping, health care, education, real estate, food and drink, and other fields',
      'They can handle monthly budgets of between ₹25,000 and ₹50 lakh'
    ],
    softCTA: 'Do you want to start your own Meta and performance marketing campaign or get the most out of the ones you already have? The staff at Aroot Digital is ready to give you honest advice and a plan you can follow.'
  },
  // 'martech-data-analytics': {
  //   title: 'MarTech / Data Analytics',
  //   icon: 'BarChart',
  //   image: '/assets/SEO.jpg',
  //   description: 'If you want to make decisions based on data, use advanced analytics and insights',
  //   subtitle: 'You can make better, faster, and more sure of your business decisions with Aroot Digital\'s help. They help you make sense of complicated data and find insights and analytics that are useful.',
  //   longDescription: 'In today\'s world, data by itself isn\'t enough. Companies need analytics and insights that take raw data and turn it into clear, confident, and measurable direction. Structured insights and analytics frameworks are what we use at Aroot Digital to help brands make smart decisions, understand complicated facts, and find hidden opportunities. You can use data to improve your marketing, learn more about your customers, or make your business run better. Our team makes sure that you always get insights that matter.',
  //   features: [
  //     'Predictive modeling and trend forecasting',
  //     'Custom dashboards and reporting',
  //     'Cohort, segmentation, and attribution studies',
  //     'KPI monitoring and executive reporting',
  //     'Customer journey mapping',
  //     'Sales funnel and conversion insights'
  //   ],
  //   benefits: [
  //     'Better Decision-Making: Don\'t guess now, use data to make decisions',
  //     'Get to Know Your Customers: Use advanced customer analytics to find patterns, trends, and preferences',
  //     'Figure out what\'s wrong and how you can fix it to improve operational efficiency',
  //     'Marketing Optimization: Learn more about your data to get a better return on investment (ROI) from your campaigns',
  //     'For the future, plan to use data and insights to stay ahead of market changes'
  //   ],
  //   howItWorks: [
  //     {
  //       step: 'Step 1: Gathering and putting together data',
  //       description: 'All of your operational, marketing, sales, and CRM data is put together and put together by us.'
  //     },
  //     {
  //       step: 'Step 2: Study in depth',
  //       description: 'The people who work for us use technological insight frameworks, statistical models, and segmentation techniques to look for patterns that matter.'
  //     },
  //     {
  //       step: 'Step 3: Getting insights',
  //       description: 'We use unstructured data to make easy-to-read dashboards for analytics and insights.'
  //     },
  //     {
  //       step: 'Step 4: Ideas for what you should do',
  //       description: 'Because our team gives you clear plans and ideas, you can use data to get business insights that you can use right away.'
  //     }
  //   ],
  //   differentiators: [
  //     'Not Just Dashboards, But Also Interpretation by People: We don\'t just give you numbers; we break them down, explain them, and help you understand them',
  //     'Key Points Based on Strategy: Our ideas connect the information to the real goals of your business',
  //     'Have fun in India and all over the world: We work with companies of all sizes, from small ones just starting out to big ones',
  //     'Know a lot about the business and have great skills with tech, retail, banking, hotel, and direct-to-consumer brands',
  //     'Being able to work together with your teams without any issues: There are flexible work arrangements with in-house teams, marketing executives, and CXOs'
  //   ],
  //   useCases: [
  //     {
  //       title: 'Business Store and Online Shopping',
  //       description: 'Advanced analytics and insights can help you improve how well your products work, how people buy them, and how often they buy them.'
  //     },
  //     {
  //       title: 'Taking care of money and wealth',
  //       description: 'Deep customer analytics can help you understand the lifecycle of a client, keep them as a client longer, and get better results from the advice you give.'
  //     },
  //     {
  //       title: 'Food and drink, and a warm welcome',
  //       description: 'Data insights that you can use to find peak hours, categories that do well, and things that keep customers coming back.'
  //     },
  //     {
  //       title: 'For real estate',
  //       description: 'Use data and insights to keep track of the leads\' quality, the agents\' work, and the number of projects that turn into sales.'
  //     },
  //     {
  //       title: 'Cloud computing and SaaS',
  //       description: 'Tech-savvy people should keep an eye on how features are being used, how many users are leaving, and how much value customers are getting.'
  //     }
  //   ],
  //   trustElements: [
  //     'Worked for more than 10 years with data-driven and digital strategy',
  //     'A history of success in India, the UAE, the UK, and APAC',
  //     'Clear execution with results that can be seen',
  //     'Using data in a way that is moral, legal, and puts privacy first',
  //     'A group of strategists, analysts, and experts in the field'
  //   ],
  //   softCTA: 'With better data and analytics, our staff is ready to help you make smarter choices.'
  // },
  'web-design': {
    title: 'Web Design and Development',
    icon: 'Palette',
    image: '/assets/SEO.jpg',
    description: 'Web Design That Builds Trust and Helps Your Business Grow',
    subtitle: 'Websites that are up-to-date, quick, and simple to use, with the goal of helping your business and brand grow.',
    longDescription: 'When people first hear about your brand, they often go to your website first. Aroot Digital\'s web design, website design, and website development services make sure that this first impression is not only good, but also easy to remember, easy to use, and focused on getting visitors to buy. We make digital experiences that are quick, safe, easy to use, and look great. Whether you\'re making a new website or updating an old one, our UI/UX design rules can help it stay interesting and grow over time.',
    features: [
      'Clean, modern, and flexible layouts',
      'Design for mobile first',
      'Make sure the brand fits with the visual hierarchy',
      'Platforms made just for you, like WordPress, Webflow, Shopify, and a custom CMS',
      'Architecture that works well with other systems',
      'Planning out the user\'s path',
      'Making wireframes and prototypes',
      'Making an interface that is easy for everyone to use',
      'Making websites for businesses, web pages, landing pages, and pages for goods and services',
      'Redesigns that are all about getting people to buy things and making websites work better',
      'Adding tools and APIs from other companies'
    ],
    benefits: [
      'User-centered: Every website is made to be simple, easy to use, and interesting on an emotional level. This keeps customers on the site longer and helps them buy things faster.',
      'Changeable architecture: We make sure that the platform we build for you can grow with your business, work with other systems, and be ready for the future.',
      'It takes less time to load: Better performance on all devices means higher rankings, more interaction, and a better return on investment.',
      'The brand is in charge of how it looks: We design modern, clean, and on-brand interfaces that really show off what your business is all about.',
      'Structure that is good for SEO: Built with the right schema, architecture, and on-page base so that search engines can find it for a long time.'
    ],
    howItWorks: [
      {
        step: 'Step 1: Learn and find out',
        description: 'We know what you want to do, how your customers act, what\'s going on with your business, and what your brand stands for.'
      },
      {
        step: 'Step 2: Make a plan for the UI/UX',
        description: 'Making plans for the UI, wireframes, and user journeys all help make sure that your platform is easy to use and user-driven.'
      },
      {
        step: 'Step 3: Making the Web Page',
        description: 'There is a modern design system, a responsive view, and a layout that is perfect down to the pixel on every page.'
      },
      {
        step: 'Step 4: Making the Website',
        description: 'Writing clean, scalable, and safe code for both the front end and the back end.'
      },
      {
        step: 'Step 5: Check to see that everything is working properly',
        description: 'Checks for speed, performance, security, and compatibility with different browsers.'
      },
      {
        step: 'Step 6: Get things going and make them better',
        description: 'We go live without any problems and make changes right away based on what users tell us.'
      }
    ],
    differentiators: [
      'All of your digital knowledge in one place: strategy, design, development, branding, and marketing.',
      'A lot of people who make websites have a lot of experience. A team that has been checked out and is coming up with solutions that meet industry standards and can be used anywhere in the world.',
      'Research-Based Approach: We make all of our decisions based on facts, like statistics, heatmaps, and how people behave.',
      'Code that is neat and will work in the future: Fast, safe, secure, and easy to keep up with.',
      'Working together and being honest: You can see that things are getting better with each step. There are no steps that are hard to follow. No long, hard-to-understand explanations.'
    ],
    useCases: [
      {
        title: 'For New Companies',
        description: 'Make a professional platform that makes you look good and gets investors interested.'
      },
      {
        title: 'For small and medium-sized businesses',
        description: 'Make old websites better by improving their branding, user experience, and performance.'
      },
      {
        title: 'For Companies',
        description: 'Make websites that are good enough for businesses that need a lot of security, architecture, and integrations.'
      },
      {
        title: 'For Businesses in the Area',
        description: 'When people type in "website designer near me" or "web page designers near me," make sure your sites are easy for search engines to read and match what they are looking for.'
      },
      {
        title: 'For People and Creators',
        description: 'Websites that look neat and professional for portfolios, personal brands, and landing pages.'
      }
    ],
    trustElements: [
      'More than 10 years of experience in digital and engineering',
      'Delivery to many industries (FMCG, finance, hospitality, tech, consulting, education)',
      'Clients in India and other countries',
      'Clear communication and milestone reporting',
      'Development standards that are ready for compliance',
      'Design that is pixel-perfect with a strong UI UX foundation'
    ],
    softCTA: 'Your website needs more than just a template to work. It needs a plan, some creativity, and smart design. Aroot Digital is here to build it with a plan and care.'
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    icon: 'MessageSquare',
    image: '/assets/SEO.jpg',
    description: 'Planned social media marketing that builds brands and gets real people involved.',
    subtitle: 'Professional, data-driven, and effect-driven social media solutions for businesses of all sizes.',
    longDescription: 'In today\'s digital world, social media marketing is more than just a way to get your name out there. It\'s a direct link between your business and your customers. Companies that have a plan for how to use social media and marketing do better than those that just post things when they think of them or guess what will work. At Aroot Digital, we help brands get more attention online by using structured social media and ads, performance-driven content, and interacting with customers at every stage of the buying process. Our method makes sure that your brand speaks clearly, consistently, and with confidence, no matter if you\'re trying to reach a local market or do business all over the world.',
    features: [
      'Planning content strategically',
      'Designing and editing videos creatively',
      'Making reels and short-form videos',
      'Analyzing trends and making topical content',
      'Managing communities',
      'Running paid ads and performance campaigns',
      'Providing advanced analytics and reporting',
      'Keeping an eye on competitors',
      'Helping with crisis communication',
      'Telling stories about the brand and setting up messaging frameworks',
      'We are also a full-service social media marketing agency that can help with ORM, building a brand\'s name across many channels, and influencer campaigns'
    ],
    benefits: [
      'Consistent Brand Visibility: Make sure your brand is easy to find on all platforms',
      'Get your audience more involved: Talk to them about important things that will help them trust you over time',
      'Strategy that works on certain platforms, like Instagram, LinkedIn, Facebook, YouTube, and others',
      'Better Return on Investment (ROI) for campaigns: you can control Facebook ads exactly to get measurable results',
      'Full Execution: coming up with ideas, making things, sharing them, keeping an eye on them, and reporting on them'
    ],
    howItWorks: [
      {
        step: 'Step 1: Look for the brand and check it out',
        description: 'We check your current presence, your competitors, and the state of the industry to make sure that your content and campaign are on the right track.'
      },
      {
        step: 'Step 2: Making a plan',
        description: 'A custom roadmap makes sure that your business goals match what your audience wants, how the platform works, and the direction you want your art to go in.'
      },
      {
        step: 'Step 3: Plan and make the content',
        description: 'We make high-quality images, reels, ads, copy, and other creative work that is specific to each platform.'
      },
      {
        step: 'Step 4: Get it done and share it',
        description: 'Your content calendar tells you when to post and how to lay it out so that it works on all platforms.'
      },
      {
        step: 'Step 5: Run campaigns and make changes as needed',
        description: 'Data-driven Facebook ad management makes sure that your ads are seen by the right people at the right time.'
      },
      {
        step: 'Step 6: Get Reports and Information',
        description: 'Monthly performance dashboards let you keep track of engagement, audience growth, and marketing results.'
      }
    ],
    differentiators: [
      'Premium Campaign Intelligence: Our team is both creative and good at analyzing data',
      'Knowledge of many fields, from new businesses to famous names all over the world',
      'Structured Ad Management: Good at running Facebook ads that bring in a lot of money',
      'Global-Standard Execution: Methods that work for people from all over the world and in all kinds of markets',
      'Committed Relationship Managers: experts in the field who help you meet new people and make friends',
      'An approach that is honest, open, and goal-oriented'
    ],
    useCases: [
      {
        title: 'Retail and online shopping',
        description: 'Launching new products, running holiday sales, and working with influencers.'
      },
      {
        title: 'Real estate',
        description: 'Ads that get people to sign up for your services and getting involved in the community.'
      },
      {
        title: 'Finance & Advisory',
        description: 'Learning materials that take into account regulatory issues.'
      },
      {
        title: 'Food and drink',
        description: 'Highlights from the menu, stories told through reels, and participation based on where you are.'
      },
      {
        title: 'Professional Services',
        description: 'Content calendars based on your brand\'s authority and thought leadership. Our team can help you stay active and competitive on social media, no matter how new or old your business is.'
      }
    ],
    trustElements: [
      'We have worked together for more than 12 years',
      'A global and pan-Indian client base, strong internal review systems, open reporting, decisions based on data, a committed support team, and a proven track record as a social media digital firm that gets results'
    ],
    softCTA: 'Are you ready to make a social media profile that really shows how strong your brand is? Talk to our team about a personalized, platform-specific plan that will help your business grow in the long term.'
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
      'Meta and performance marketing campaigns for Singapore',
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
      'Meta and performance marketing',
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
      'Meta and performance marketing campaigns',
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
      question: "What types of SEO services does Aroot Digital provide?",
      answer: "We do keyword research, SEO for content, links, and tracking analytics. We also do technical SEO, UX optimization, and link building."
    },
    {
      question: "How long does it take for SEO to start working?",
      answer: "It usually takes 3 to 4 months for stable improvements to happen, depending on the website's competition, content, and strength."
    },
    {
      question: "What kinds of companies do you do SEO work for?",
      answer: "We work in a lot of different areas, such as technology, education, real estate, food and drink, and more. You can use our frameworks in any niche."
    },
    {
      question: "Do you help businesses in Pune with local SEO?",
      answer: "Yes, we work on improving local citations, Google Business Profiles, local keywords, reviews, and ways to move up in map rankings."
    },
    {
      question: "Is SEO better than ads that cost money?",
      answer: "They both do their jobs. Paid ads get you seen right away, but SEO builds up organic traffic over time."
    },
    {
      question: "Will you fix technical SEO issues?",
      answer: "Yes, things like Core Web Vitals, site speed, indexing, schema markup, mobile performance, and URL structure."
    },
    {
      question: "How do you pick keywords?",
      answer: "We look at your business goals, what users want, how many searches there are, how hard it is to rank, and how competitive the market is."
    },
    {
      question: "Do you promise to be the best?",
      answer: "No agency can honestly say they can help you get to the top. We promise to give you structured, best-practice SEO that will help you in ways you can see."
    },
    {
      question: "What does an SEO audit look at?",
      answer: "We check over 100 things, including the site's technical health, keyword gaps, content quality, backlink profile, UX issues, and how strong the competition is."
    },
    {
      question: "Can you help me write content that is good for search engine optimization?",
      answer: "Yes, we write blogs, landing pages, and website copy that are good for SEO and sound like your brand."
    },
    {
      question: "Do you send out SEO reports every month?",
      answer: "Yes, there are reports that show how well things are going, including rankings, traffic, links, and what to do next."
    },
    {
      question: "What tools do you use to make your search engine optimization better?",
      answer: "We use common business tools like Search Console, GA4, SEMrush, Ahrefs, Screaming Frog, and our own analytics platforms."
    }
  ],
  'digital-marketing': [
    {
      question: "What does Aroot Digital do as a digital marketing business?",
      answer: "We use SEO, social media, sponsored ads, content, website optimization, and analytics to help brands grow online by making them more visible, getting more leads, and improving their digital performance over time."
    },
    {
      question: "How do you come up with a digital marketing plan for my business?",
      answer: "To start, we want to know about your business, your target market, your competitors, and your goals. We then make a plan just for you that is based on data and works with your brand's positioning and growth goals."
    },
    {
      question: "How long does it take for digital marketing to start working?",
      answer: "Organic results usually take 60 to 90 days, but funded projects get results faster. We want to grow steadily over time, not just have short bursts of growth."
    },
    {
      question: "Do you work with new businesses, small businesses, and local brands?",
      answer: "Yes, Aroot Digital helps businesses of all sizes, from new businesses to local brands in Pune to national companies, with plans that can grow with them."
    },
    {
      question: "How much money do you need to get started with digital marketing?",
      answer: "It all depends on what you want your business to do. We have different plans, but for basic digital activities, not including ad costs, you should expect to pay between ₹15,000 and ₹40,000+."
    },
    {
      question: "How can you tell if a campaign was successful?",
      answer: "We keep track of KPIs like leads, traffic, engagement, ROAS, CTR, conversions, and content interactions, and we send you reports that are easy to read."
    },
    {
      question: "Can you promise leads or results?",
      answer: "No ethical agency makes promises about results. We promise a solid plan, execution, and optimization that is tailored to you so that performance stays the same."
    },
    {
      question: "Do you take care of everything from beginning to end?",
      answer: "Yes, we do strategy, creative work, ads, content, SEO, analytics, and reporting. You can focus on your business while we take care of the digital side of things."
    },
    {
      question: "Will I have a manager for my account?",
      answer: "Yes, each client has one person they can talk to who makes sure that communication and reporting go well."
    },
    {
      question: "Is digital marketing a good idea for businesses that sell to other businesses?",
      answer: "Yes, for sure. We know how to use LinkedIn, Google Search, content, and targeted performance ads to make B2B funnels."
    },
    {
      question: "How do you handle being open and reporting?",
      answer: "We send out performance reports every week and month that are easy to read and don't use hard to understand language."
    },
    {
      question: "What makes Aroot Digital different from other agencies?",
      answer: "We use a mix of strategy, creativity, and data, along with thinking about the brand first and being completely open no templates, no guessing."
    }
  ],
  'app-marketing': [
    {
      question: "What do you offer in your app promotion service?",
      answer: "Getting new users, keeping them, ASO, getting reviews, running app install campaigns, and using analytics."
    },
    {
      question: "Do you sell apps for both Android and iOS?",
      answer: "Yes, you can advertise and optimize on Google Play and the App Store."
    },
    {
      question: "What does ASO mean, and why is it important?",
      answer: "With software Store Optimization, you don't have to do anything to help your software be found, rank higher, and get more installs."
    },
    {
      question: "How much money do you need to run campaigns to get people to install your app?",
      answer: "Depending on the category and how many other people are competing, budgets can be anywhere from ₹20,000 to ₹1 lakh or more."
    },
    {
      question: "How can you tell if your app promotion is working?",
      answer: "Cost per install (CPI), number of installs, retention rates, in-app engagement, and value of a user over their lifetime."
    },
    {
      question: "How long does it take to make an app bigger?",
      answer: "Most apps get a lot of use within 30 to 60 days if they are set up correctly."
    },
    {
      question: "Do you make movies or other things to help apps get more users?",
      answer: "Yes, screenshots, video ads, highlights of features, and information about the app listing."
    },
    {
      question: "Can you help cut down on the number of people who uninstall?",
      answer: "Yes, we improve onboarding, engagement strategies, push alerts, and targeting audiences."
    },
    {
      question: "Do you handle app ratings and reviews?",
      answer: "We support ways for users to give feedback and ways to review things that are ethical."
    },
    {
      question: "Can you help get the word out about a new app?",
      answer: "Yes, you should run campaigns on social media, with influencers, for SEO, and with ads."
    },
    {
      question: "Do you set up dashboards for analytics?",
      answer: "Yes, you can get Firebase, Apps flyer, Mix panel, and attribution settings whenever you need them."
    },
    {
      question: "What does Aroot Digital do to make sure the installs are good?",
      answer: "Our main goals are to target based on intent, improve creatives, and get rid of low-quality or bot traffic."
    }
  ],
  'content-marketing': [
    {
      question: "What types of content services do you provide?",
      answer: "Good for SEO are blogs, website copy, social media posts, ad copy, emailers, scripts, and articles."
    },
    {
      question: "How do you make sure that the content sounds like our brand?",
      answer: "We create a style guide for your content based on the tone you want: professional, friendly, premium, or conversational."
    },
    {
      question: "How often should a business publish new content?",
      answer: "You should write four to eight blogs a month and post to social media once a week, depending on what you want to achieve."
    },
    {
      question: "Do you write content that is keyword-rich?",
      answer: "Yes, the content is organized, good for SEO, and matches the intent of the ranking."
    },
    {
      question: "Can you write about things that are important to your field, like real estate or finance?",
      answer: "Yes, our writers are very good at writing content that is technical, compliant, and focused on the industry."
    },
    {
      question: "How long should a post on a blog be?",
      answer: "It usually has between 800 and 1,500 words, but that depends on the competition and what people want."
    },
    {
      question: "Do you write scripts for videos or reels?",
      answer: "Yes, short, catchy scripts that make people want to buy things for brand storytelling."
    },
    {
      question: "Can you improve or change things that are already there?",
      answer: "Yes, we fix and update information that is old or not working well."
    },
    {
      question: "How can you tell if your content is good?",
      answer: "Traffic from search engines, engagement, keyword rankings, and leads."
    },
    {
      question: "Do you help people plan their content?",
      answer: "Yes, there are full content funnels, schedules, and strategies for positioning."
    },
    {
      question: "Can you quickly send out content?",
      answer: "Yes, the usual delivery time is 3 to 5 days, but there are faster options."
    },
    {
      question: "Do you really need to market your content?",
      answer: "Yes, content builds trust, helps with SEO, teaches users, and boosts conversions."
    }
  ],
  'ppc-paid-marketing': [
    {
      question: "What kinds of platforms do you use for performance marketing?",
      answer: "There are many kinds of ads, such as Google Ads, Meta Ads, YouTube Ads, LinkedIn Ads, display networks, and retargeting funnels."
    },
    {
      question: "How do you plan campaigns to get the most out of your money?",
      answer: "By strategically targeting, A/B testing, dividing the audience into groups, optimizing the creatives, and keeping an eye on things all the time."
    },
    {
      question: "How much do you want to spend on ads every month?",
      answer: "It depends on the industry, but it's usually between ₹20,000 and ₹1 lakh or more. We help you make budgets that you can stick to."
    },
    {
      question: "Do you get a share of the money spent on ads?",
      answer: "We have different ways to set prices for each case: retainer, hybrid, or performance-based."
    },
    {
      question: "When will I see results?",
      answer: "Paid ads usually start showing you results within 7 to 14 days."
    },
    {
      question: "Can you make each lead cost less for me?",
      answer: "Yes, by improving targeting, landing pages, creatives, and ongoing optimization."
    },
    {
      question: "Do you help set up tracking for conversions?",
      answer: "Yes, we set up UTM tracking, analytics dashboards, pixels, and events."
    },
    {
      question: "Do you offer remarketing as a service?",
      answer: "Yes, we make remarketing funnels for people who leave their carts, come to our website, or are already interested in what we have to offer."
    },
    {
      question: "Can you start campaigns to get leads?",
      answer: "Yes, we create landing pages and lead forms that are optimized for high-intent conversions."
    },
    {
      question: "How easy is it to read your reports?",
      answer: "You get weekly and monthly reports that show your spending, return on investment (ROI), cost per lead (CPL), click-through rate (CTR), and tips on how to make your ads better."
    },
    {
      question: "Do you also create ads?",
      answer: "Yes, there are designs for static, carousel, video, and performance-first."
    },
    {
      question: "Can you help fix campaigns that aren't going well?",
      answer: "Yes, we look at campaigns that aren't working and make changes to them."
    }
  ],
  // 'martech-data-analytics': [
  //   {
  //     question: "What marketing technology tools do you work with?",
  //     answer: "We work with a wide range of MarTech tools including CRM systems (Salesforce, HubSpot), marketing automation platforms, analytics tools (Google Analytics, Adobe Analytics), tag management systems, data platforms, and more. We'll help you build and optimize your marketing technology stack."
  //   },
  //   {
  //     question: "How do you help integrate marketing technology?",
  //     answer: "We assess your current tech stack, identify gaps and opportunities, recommend the right tools, and help implement integrations between platforms. We ensure all your marketing tools work together seamlessly to provide a unified view of your marketing performance."
  //   },
  //   {
  //     question: "Can you help with marketing automation?",
  //     answer: "Absolutely! We set up and optimize marketing automation workflows including email campaigns, lead nurturing sequences, customer journey automation, and triggered campaigns. This helps you scale your marketing efforts while maintaining personalization."
  //   },
  //   {
  //     question: "How do you ensure data accuracy and quality?",
  //     answer: "We implement data governance practices, set up data validation rules, clean and deduplicate data, establish data quality standards, and regularly audit your data to ensure accuracy. We also help integrate data from multiple sources for a complete view."
  //   },
  //   {
  //     question: "What kind of analytics and reporting do you provide?",
  //     answer: "We provide comprehensive analytics including custom dashboards, real-time reporting, attribution modeling, ROI analysis, and predictive analytics. We'll help you understand not just what happened, but why it happened and what to do next."
  //   },
  //   {
  //     question: "How do you help with data-driven decision making?",
  //     answer: "We don't just provide data—we analyze it and provide actionable insights and recommendations. We'll help you identify trends, opportunities, and areas for improvement, then work with you to implement data-driven changes that drive business growth."
  //   }
  // ],
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
  ],
  'web-design': [
    {
      question: "What types of websites does Aroot Digital build?",
      answer: "Websites for businesses, landing pages, eCommerce, portfolios, personal branding, and custom websites for companies."
    },
    {
      question: "What kinds of platforms do you use?",
      answer: "WordPress, Webflow, Shopify, or custom-coded builds, depending on how well they work and how much they need to grow."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A basic site takes 2 to 4 weeks to build, while a more complex site can take 6 to 10 weeks, depending on the features."
    },
    {
      question: "What does a website package include?",
      answer: "Designing the UI/UX, organizing the content, writing the code, testing it, making sure it works on mobile devices, and doing basic on-page SEO."
    },
    {
      question: "Do you write the content for the website?",
      answer: "Yes, we write content that is good for SEO and fits the style of your business."
    },
    {
      question: "Will my website work on phones and tablets?",
      answer: "Yes, all of the sites work well on mobile devices and are ready for mobile-first indexing."
    },
    {
      question: "Do you take care of websites?",
      answer: "Yes, there are plans to make improvements, upgrade security, and do other things every month or every three months."
    },
    {
      question: "Is it possible to make an old website look new?",
      answer: "Yes, we change the UI, speed things up, improve the user experience, the content, and the SEO."
    },
    {
      question: "Do you use lead forms and CRM together?",
      answer: "Yes, we connect automated lead workflows with platforms like HubSpot, Zoho, and Mailchimp."
    },
    {
      question: "Will my site load quickly?",
      answer: "Yes, we speed things up, compress images, use clean code, and follow the rules for Core Web Vitals."
    },
    {
      question: "Do you help with domain names and hosting?",
      answer: "Yes, I can help you choose the best options for safety and performance."
    },
    {
      question: "Can you build websites for online stores?",
      answer: "Shopify, WooCommerce, or both can help you set up your own store with payment gateways, product pages, and analytics."
    }
  ],
  'social-media-marketing': [
    {
      question: "What social media sites do you manage?",
      answer: "Instagram, Facebook, LinkedIn, Twitter/X, YouTube, and other new sites that your audience might be interested in."
    },
    {
      question: "What does your social media service do?",
      answer: "Creative design, captions, reels, scheduling, tracking performance, looking up hashtags, getting people involved, and running the community."
    },
    {
      question: "How many posts do you write every month?",
      answer: "We make sure our services meet the needs of each brand. This usually means 8 to 20 posts, 4 to 12 reels, stories, and activities to get people involved."
    },
    {
      question: "How do you decide on the content strategy?",
      answer: "Based on your marketing goals, the story of your brand, how your audience acts, trends in your field, and a look at your competitors."
    },
    {
      question: "Do you create content or do you need clients to provide it?",
      answer: "We handle everything, including shoots, creative work, captions, editing, and strategy."
    },
    {
      question: "How quickly can we get more people to follow us?",
      answer: "The speed of your growth depends on the quality of your content, your niche, how often you post, and how well your ads do. We care more about real growth than fake numbers."
    },
    {
      question: "Will you reply to comments and direct messages?",
      answer: "We can do community management as an extra service or as part of a package."
    },
    {
      question: "Do you also put ads on social media?",
      answer: "Yes, we use ads on social media to get more leads, reach, and engagement."
    },
    {
      question: "Can you keep the voice of our brand?",
      answer: "Yes, of course! To make sure everything is the same, we set brand tone standards."
    },
    {
      question: "How do you know how well your social media is doing?",
      answer: "Using dashboards to keep track of reach, engagement, follower growth, CTR, and how well your content is doing."
    },
    {
      question: "Can you help with marketing by using influencers?",
      answer: "Yes, you can work with micro, nano, and macro influencers to reach your goals."
    },
    {
      question: "Do you support campaigns for holidays and festivals?",
      answer: "Yes, we make festival creatives, reels, and campaigns that are specific to your industry and have a big effect."
    }
  ]
};

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for services
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  if (params.slug === 'app-marketing') {
    return {
      title: 'App Marketing Services for Faster Growth | Aroot Digital',
      description: 'Boost app installs, engagement & retention with data-led app marketing, WhatsApp message marketing & social media advertising by Aroot Digital.',
    };
  }
  
  if (params.slug === 'web-design') {
    return {
      title: 'Hire professionals to help you design and build websites.',
      description: 'Aroot Digital makes websites and designs user interfaces (UI) and user experiences (UX). Create websites that load quickly, look modern, and are ready to turn visitors into customers.',
    };
  }
  
  if (params.slug === 'search-engine-optimization') {
    return {
      title: 'Aroot Digital is the best SEO company to work with in India.',
      description: 'Aroot Digital offers professional SEO services in India that can help you get more visitors, be seen, and improve your reputation.',
    };
  }
  
  if (params.slug === 'ppc-paid-marketing') {
    return {
      title: 'Professionals run Meta and performance marketing campaigns.',
      description: 'Aroot Digital\'s Meta and performance marketing campaigns will bring in more visitors and customers. Strategic Meta and performance marketing campaigns are meant to help your business grow in a way that people can see.',
    };
  }
  
  if (params.slug === 'digital-marketing') {
    return {
      title: 'Aroot Digital can help your business grow by offering digital marketing services.',
      description: 'Aroot Digital offers great digital marketing services that help businesses grow. They use strategy, creativity, and digital marketing tools that are all about getting results.',
    };
  }
  
  if (params.slug === 'content-marketing') {
    return {
      title: 'Professional Copywriting and Writing Services for Websites and Articles',
      description: 'Hire professional writers to rewrite articles and websites, write SEO content, and use AI to make content. People write high-quality copy for global brands.',
    };
  }
  
  // if (params.slug === 'martech-data-analytics') {
  //   return {
  //     title: 'You can use analytics and insights services to help you run your business better.',
  //     description: 'Get good analytics and insights that will help you understand things better, do better, and grow. You can trust the decisions you make with the help of Aroot Digital.',
  //   };
  // }
  
  if (params.slug === 'social-media-marketing') {
    return {
      title: 'Aroot Digital India offers social media marketing services.',
      description: 'We help brands in India and all over the world with their social media marketing. Strategic management of Facebook ads, campaigns, and content.',
    };
  }
  
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return {
    title: `${service.title} | Aroot Digital`,
    description: service.description,
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
              {params.slug === 'app-marketing' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    App Marketing That Accelerates Growth & User Engagement
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    Smart strategies to scale installs, boost retention & expand your app's digital footprint.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Data-driven & ROI-focused execution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>WhatsApp message marketing + social media advertising</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Tailored app promotion strategies for India & global markets</span>
                    </li>
                  </ul>
                </>
              ) : params.slug === 'web-design' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Web Design That Builds Trust and Helps Your Business Grow
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    Websites that are up-to-date, quick, and simple to use, with the goal of helping your business and brand grow.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>A planned website design that works for your business</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Writing code for websites that works well and is easy to read and understand</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Making the UI and UX of your site more appealing to get more people to visit and buy things</span>
                    </li>
                  </ul>
                </>
              ) : params.slug === 'search-engine-optimization' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    A reliable SEO company that helps businesses grow in a way that is quick, easy, and lasts.
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    Companies can get bigger with SEO services that are easy to use, work well, and are useful. You can count on this SEO company to help brands get more attention, get good traffic, and build a good reputation in search engines over time.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>We create unique SEO plans for your market, goals, and audience, and we also have clear steps that show real, measurable progress.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Brands in India and around the world trust us because our SEO is ethical and good for the environment.</span>
                    </li>
                  </ul>
                </>
              ) : params.slug === 'ppc-paid-marketing' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Meta and performance marketing campaigns that are smart and get you results quickly and with high intent
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    The goal of the subhead is very clear. Be smarter with your money. Strategic Meta and performance marketing campaigns can help your business grow.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Meta and performance marketing campaigns that use data to turn customers who are very interested into buyers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>An action with a clear goal and a clear return on investment (ROI)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Full help from a professional pay-per-click advertising agency</span>
                    </li>
                  </ul>
                </>
              ) : params.slug === 'digital-marketing' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Digital marketing services that will help your business grow in the right way
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    Aroot Digital offers smart, data-driven digital marketing solutions that help businesses get more attention, meet customer needs, and grow in a way that doesn't hurt the environment.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Customized programs for businesses in India and around the world</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Full-stack digital marketing solutions backed by years of experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Clear communication, measurable results, and long-term value</span>
                    </li>
                  </ul>
                </>
              ) : params.slug === 'content-marketing' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Businesses that want to stand out with high-quality content can use writing services
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    The words that people use. Structure that is good for SEO. Telling stories that are good for business.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Get strong, clear content for your website, blogs, and campaigns that will get people to do something</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Hire professional article writers, SEO content writers, and brand storytellers to help you</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Writing that meets international standards and is meant for readers in India and other countries</span>
                    </li>
                  </ul>
                </>
              // ) : params.slug === 'martech-data-analytics' ? (
              //   <>
              //     <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              //       If you want to make decisions based on data, use advanced analytics and insights
              //     </h1>
              //     <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
              //       You can make better, faster, and more sure of your business decisions with Aroot Digital's help. They help you make sense of complicated data and find insights and analytics that are useful.
              //     </p>
              //     <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
              //       <li className="flex items-center gap-2">
              //         <Rocket className="w-5 h-5 text-white flex-shrink-0" />
              //         <span>Make smart decisions by using accurate data insights</span>
              //       </li>
              //       <li className="flex items-center gap-2">
              //         <Rocket className="w-5 h-5 text-white flex-shrink-0" />
              //         <span>Use accurate customer analytics to learn how your customers behave</span>
              //       </li>
              //       <li className="flex items-center gap-2">
              //         <Rocket className="w-5 h-5 text-white flex-shrink-0" />
              //         <span>Look through data to learn business lessons that will help you do better</span>
              //       </li>
              //     </ul>
              //   </>
              ) : params.slug === 'social-media-marketing' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Planned social media marketing that builds brands and gets real people involved.
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    Professional, data-driven, and effect-driven social media solutions for businesses of all sizes.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Smart content, campaigns, and Facebook ad management that are meant to help your business grow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>Social media experts who can help people see your brand</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-white flex-shrink-0" />
                      <span>A planned way to use social media to market your business</span>
                    </li>
                  </ul>
                </>
              ) : (
                <>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                {service.title}
              </h1>
                  {service.description && (
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                      {service.description}
                    </p>
                  )}
                  {'subtitle' in service && service.subtitle && (
                    <p className="mt-4 text-base md:text-lg text-white/80 font-light">
                      {service.subtitle}
                    </p>
                  )}
                </>
              )}
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
                <ScrollToSectionLink href="/" sectionId="services">
                  Services
                </ScrollToSectionLink>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start" id="content-grid">
            {/* Left Side - Service Content */}
            <div className="lg:col-span-3 lg:pr-6 lg:border-r lg:border-border order-1 lg:order-1">
              {params.slug === 'app-marketing' || params.slug === 'web-design' || params.slug === 'search-engine-optimization' || params.slug === 'ppc-paid-marketing' || params.slug === 'digital-marketing' || params.slug === 'content-marketing' || /* params.slug === 'martech-data-analytics' || */ params.slug === 'social-media-marketing' ? (
                <>
                  {/* Service Specific Content */}
                  <div className="space-y-12">
                    {/* Introduction Section */}
                    <section>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {params.slug === 'app-marketing' 
                          ? '1. Introduction — Why App Marketing Matters More Than Ever'
                          : params.slug === 'web-design'
                          ? '1. Begin — What the service is and why it matters'
                          : params.slug === 'search-engine-optimization'
                          ? 'What SEO is and why it still matters'
                          : params.slug === 'ppc-paid-marketing'
                          ? '1. At the beginning, tell people what the service is and why it\'s important'
                          : params.slug === 'digital-marketing'
                          ? '1. The start'
                          : params.slug === 'content-marketing'
                          ? '1. Introduction— Why Writing Content Is Still the Best'
                          : params.slug === 'social-media-marketing'
                          ? '1. The start'
                          : '1. What analytics and insights are and why they\'re important'}
                      </h2>
                      {params.slug === 'app-marketing' ? (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            In a crowded digital ecosystem where thousands of apps launch every week, getting users to notice your brand requires more than just a great product. You need strategic visibility, consistent engagement, and a channel mix that works every single day.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            Aroot Digital helps brands achieve this through a structured, insight-led app marketing framework powered by whatsapp message marketing, targeted campaigns, mobile app promotion, and performance-led execution.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            Your app gets what it needs the most — discoverability, installs, engagement, and long-term retention.
                          </p>
                        </div>
                      ) : params.slug === 'social-media-marketing' ? (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            In today's digital world, social media marketing is more than just a way to get your name out there. It's a direct link between your business and your customers. Companies that have a plan for how to use social media and marketing do better than those that just post things when they think of them or guess what will work.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            At Aroot Digital, we help brands get more attention online by using structured social media and ads, performance-driven content, and interacting with customers at every stage of the buying process. Our method makes sure that your brand speaks clearly, consistently, and with confidence, no matter if you're trying to reach a local market or do business all over the world.
                          </p>
                        </div>
                      ) : params.slug === 'web-design' ? (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            When people first hear about your brand, they often go to your website first. Aroot Digital's web design, website design, and website development services make sure that this first impression is not only good, but also easy to remember, easy to use, and focused on getting visitors to buy.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            We make digital experiences that are quick, safe, easy to use, and look great. Whether you're making a new website or updating an old one, our UI/UX design rules can help it stay interesting and grow over time.
                          </p>
                        </div>
                      ) : params.slug === 'search-engine-optimization' ? (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            People now need search exposure to find brands online. Aroot Digital's SEO services will make sure that people don't forget about your site, that it works right, and that it looks like real people. We value clear, simple, and long-lasting value over complicated language or empty claims. Our SEO company is up-to-date.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            We help you stay up to date, competitive, and easy to find, whether you're trying to reach people in your area or all over the world.
                          </p>
                        </div>
                      ) : params.slug === 'ppc-paid-marketing' ? (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Businesses that work online need more than just traffic; they need traffic that turns into sales. People who are looking for what you offer will see your brand in Meta and performance marketing campaigns.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            Aroot Digital can help brands in India and around the world run Meta and performance marketing campaigns that work and don't cost too much. Our plan makes sure that you get the most out of your money, whether you're launching a new product, entering a new market, or improving your current funnels.
                          </p>
                        </div>
                      ) : params.slug === 'digital-marketing' ? (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            In today's digital world, every business needs to have a strong, consistent, and strategic online presence.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            Aroot Digital is a full-service digital marketing company that can help your business grow by getting more people to see it and building trust with customers.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            Our methodical approach makes sure that everything is clear and that you can see your progress, whether you're building new digital marketing websites or growing an old brand.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
                            We are a trustworthy digital marketing company that helps businesses in India and around the world give their customers digital experiences that are safe, useful, and up to date.
                          </p>
                        </div>
                      ) : params.slug === 'content-marketing' ? (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Content that is good doesn't just take up space. It helps people make decisions by earning their trust and showing them how much something is worth.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            Aroot Digital's content writers use a mix of clarity, originality, and strategy to write content that sounds like a person wrote it, reads naturally, and makes your company the clear choice.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            We write articles, website content, or even full website copy that is easy for your customers to understand and helps you reach your business goals.
                          </p>
                    </div>
                  ) : (
                        <div className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            In today's world, data by itself isn't enough. Companies need analytics and insights that take raw data and turn it into clear, confident, and measurable direction. Structured insights and analytics frameworks are what we use at Aroot Digital to help brands make smart decisions, understand complicated facts, and find hidden opportunities.
                          </p>
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                            You can use data to improve your marketing, learn more about your customers, or make your business run better. Our team makes sure that you always get insights that matter.
                          </p>
                      </div>
                      )}
                    </section>

                    {/* Key Benefits Section */}
                    {'benefits' in service && service.benefits && (
                      <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {params.slug === 'app-marketing' 
                            ? '2. Key Benefits — Outcome-Driven, Not Overstated'
                            : params.slug === 'web-design'
                            ? '2. The best things about them are that they are useful, results-oriented, and real.'
                            : params.slug === 'search-engine-optimization'
                            ? 'Better visibility where it counts—show up for the right searches, not just any search'
                            : params.slug === 'ppc-paid-marketing'
                            ? '2. The main benefits are real, not fake'
                            : params.slug === 'digital-marketing'
                            ? '2. The main advantages'
                            : params.slug === 'content-marketing'
                            ? '2. Main Benefits—What You Get'
                            : params.slug === 'social-media-marketing'
                            ? '2. The main advantages'
                            : '2. Important Pros and Cons — Doable and focused on outcomes'}
                        </h2>
                        {params.slug === 'digital-marketing' && (
                          <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-4">
                            We don't make empty promises when it comes to our internet marketing services in India and other countries. We help businesses get real results.
                          </p>
                        )}
                        {params.slug === 'digital-marketing' && (
                          <p className="text-base md:text-lg font-semibold text-foreground mb-4">
                            Aroot Digital is chosen by clients because:
                          </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.benefits.map((benefit: string, index: number) => (
                            <Card 
                              key={index} 
                              className="group relative p-5 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                  <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                                <span className="text-base text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors duration-300 flex-1">{benefit}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* How It Works Section */}
                    {'howItWorks' in service && service.howItWorks && (
                      <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                          {params.slug === 'app-marketing' 
                            ? '3. How It Works — A Clear, Strategic Workflow'
                            : params.slug === 'web-design'
                            ? '3. How It Works—Our Simple, Tested Method'
                            : params.slug === 'search-engine-optimization'
                            ? 'How It Works: The SEO Process at Aroot Digital'
                            : params.slug === 'ppc-paid-marketing'
                            ? '3. It works by putting users first in a simple way'
                            : params.slug === 'digital-marketing'
                            ? '3. How it works: How We Get Things Done'
                            : params.slug === 'content-marketing'
                            ? '3. How it works: simple, clear, and not hard to understand'
                            : params.slug === 'social-media-marketing'
                            ? '3. How It Works: How We Do It'
                            : '3. How it works: A clear and easy process'}
                        </h2>
                        {(params.slug === 'digital-marketing' || params.slug === 'content-marketing') && (
                          <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
                            {params.slug === 'digital-marketing'
                              ? 'For all of our digital marketing needs, we have a methodical but adaptable way of doing things:'
                              : 'How it works'}
                          </p>
                        )}
                        <div className="relative py-4">
                          {/* Journey Path Line */}
                          <div className="hidden md:block absolute left-[30px] top-0 bottom-0 w-0.5">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 rounded-full"></div>
                            {/* Animated progress line */}
                            <div 
                              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary-light to-primary-accent rounded-full transition-all duration-1000"
                              style={{ height: '100%' }}
                            ></div>
                </div>
                          
                          <div className="space-y-6">
                            {service.howItWorks.map((step: { step: string; description: string }, index: number) => {
                              // Use different icons for different services
                              const getStepIcon = () => {
                                if (params.slug === 'app-marketing') {
                                  const icons = [Rocket, Smartphone, Share2, Palette, BarChart];
                                  return icons[index] || CheckCircle;
                                } else if (params.slug === 'web-design') {
                                  const icons = [Palette, FileText, Building2, ImageIcon, CheckCircle];
                                  return icons[index] || CheckCircle;
                                } else if (params.slug === 'search-engine-optimization') {
                                  const icons = [Search, FileText, Palette, BarChart, FileText, Share2];
                                  return icons[index] || CheckCircle;
                                } else if (params.slug === 'ppc-paid-marketing') {
                                  const icons = [Target, TrendingUp, BarChart, CheckCircle];
                                  return icons[index] || CheckCircle;
                                } else if (params.slug === 'digital-marketing') {
                                  const icons = [Brain, Globe, BarChart, Share2];
                                  return icons[index] || CheckCircle;
                                } else if (params.slug === 'content-marketing') {
                                  const icons = [FileText, Sparkles, CheckCircle];
                                  return icons[index] || CheckCircle;
                                } else if (params.slug === 'social-media-marketing') {
                                  const icons = [Search, FileText, Palette, Calendar, Target, BarChart];
                                  return icons[index] || CheckCircle;
                                } else {
                                  const icons = [BarChart, Brain, Target, CheckCircle];
                                  return icons[index] || CheckCircle;
                                }
                              };
                              const StepIcon = getStepIcon();
                              const isLast = index === service.howItWorks.length - 1;
                              
                              return (
                                <div 
                                  key={index} 
                                  className="group relative flex gap-4 items-start"
                                >
                                  {/* Journey Stop Point */}
                                  <div className="relative z-20 flex-shrink-0">
                                    {/* Connecting Path */}
                                    {!isLast && (
                                      <div className="absolute left-1/2 top-[60px] -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 group-hover:from-primary group-hover:via-primary-light group-hover:to-primary/50 transition-all duration-500 rounded-full"></div>
                                    )}
                                    
                                    {/* Journey Marker */}
                                    <div className="relative">
                                      {/* Outer Pulse Ring */}
                                      <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 animate-pulse scale-125 transition-opacity duration-500"></div>
                                      
                                      {/* Main Journey Circle */}
                                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary via-primary-light to-primary-accent flex items-center justify-center shadow-lg border-2 border-background group-hover:scale-110 group-hover:shadow-primary/60 group-hover:rotate-6 transition-all duration-500">
                                        {/* Inner Glow */}
                                        <div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Icon */}
                                        <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                          <StepIcon className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Journey Content Card */}
                                  <Card className="flex-1 p-4 md:p-5 bg-gradient-to-br from-card via-card/98 to-card/95 backdrop-blur-lg border-2 border-border/70 group-hover:border-primary/80 group-hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-500 group-hover:-translate-y-1 overflow-hidden relative">
                                    {/* Journey Path Indicator */}
                                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-primary/10 group-hover:from-primary group-hover:to-primary/30 transition-all duration-500"></div>
                                    
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2"></div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10 pl-3 md:pl-4">
                                      {/* Step Header */}
                                      <div className="mb-2">
                                        <h3 className="text-sm md:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{step.step}</h3>
                                        <p className="text-xs md:text-sm text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors duration-300">{step.description}</p>
                                      </div>
                                    </div>
                                    
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                                    
                                    {/* Journey Corner Accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                                  </Card>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </section>
                    )}

                    {/* Features Section */}
                    {'features' in service && service.features && (
                      <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {params.slug === 'app-marketing' 
                            ? '4. Features / Service Details — Simple, Clear, Professional'
                            : params.slug === 'web-design'
                            ? '4. Information about the services and features'
                            : params.slug === 'search-engine-optimization'
                            ? 'Information about services and products'
                            : params.slug === 'ppc-paid-marketing'
                            ? '4. Details and information about the services'
                            : params.slug === 'digital-marketing'
                            ? '4. Information about products and services'
                            : params.slug === 'content-marketing'
                            ? '4. Details about the services and features'
                            : '4. Information on the items and services'}
                        </h2>
                        {(params.slug === 'digital-marketing' || params.slug === 'content-marketing') && (
                          <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-4">
                            {params.slug === 'digital-marketing'
                              ? 'There are many digital marketing services available, such as:'
                              : 'When you hire us to write content, we can do a number of things for you:'}
                          </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {service.features.map((feature: string, index: number) => (
                            <Card 
                              key={index} 
                              className="group relative p-4 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                  <CheckCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-base text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors duration-300 flex-1">{feature}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                        {params.slug === 'search-engine-optimization' && (
                          <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mt-4">
                            Aroot Digital is your long-term SEO company. They make sure that your site is always up-to-date and works the way people expect it to.
                          </p>
                        )}
                        {params.slug === 'digital-marketing' && (
                          <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mt-4">
                            Your digital marketing websites will be more than just ads online; each one will be made just for you.
                          </p>
                        )}
                        {params.slug === 'content-marketing' && (
                          <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mt-4">
                            All of the things that need to be done should be neat, professional, and easy to remember.
                          </p>
                        )}
                      </section>
                    )}

                    {/* Differentiators Section */}
                    {'differentiators' in service && service.differentiators && (
                      <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {params.slug === 'app-marketing' 
                            ? '5. Aroot Digital Differentiators — What Makes Us Stand Out'
                            : params.slug === 'web-design'
                            ? '5. What sets Aroot apart'
                            : params.slug === 'search-engine-optimization'
                            ? 'What makes Aroot Digital stand out'
                            : params.slug === 'ppc-paid-marketing'
                            ? '5. What sets Aroot apart from other sites?'
                            : params.slug === 'digital-marketing'
                            ? '5. The Digital Differences of Aroot'
                            : params.slug === 'content-marketing'
                            ? '5. What Sets Aroot Digital Apart'
                            : '5. What Makes Aroot Stand Out'}
                        </h2>
                        {(params.slug === 'web-design' || params.slug === 'search-engine-optimization' || params.slug === 'ppc-paid-marketing' || params.slug === 'digital-marketing') && (
                          <p className="text-lg font-semibold text-foreground mb-4">
                            {params.slug === 'web-design' 
                              ? 'What sets us apart from other businesses that build websites?'
                              : params.slug === 'search-engine-optimization'
                              ? 'Why do businesses choose us as their top SEO company?'
                              : params.slug === 'digital-marketing'
                              ? 'Brands think we\'re one of the best digital marketing companies for planning and doing. Why?'
                              : ''}
                          </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.differentiators.map((item: string, index: number) => (
                            <Card 
                              key={index} 
                              className="group relative p-5 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-700"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                  <Star className="w-5 h-5 text-primary fill-primary/20 group-hover:fill-primary/40 transition-all duration-300" />
                                </div>
                                <span className="text-base text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors duration-300 flex-1">{item}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Use Cases Section */}
                    {'useCases' in service && service.useCases && (
                      <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {params.slug === 'app-marketing' 
                            ? '6. Use Cases / Practical Examples — Real Scenarios'
                            : params.slug === 'web-design'
                            ? '6. Real-life examples of how it could be used'
                            : params.slug === 'search-engine-optimization'
                            ? 'Examples and situations where this is useful'
                            : params.slug === 'ppc-paid-marketing'
                            ? '6. Use real-life stories or examples'
                            : params.slug === 'digital-marketing'
                            ? '6. Examples from real life or use cases'
                            : params.slug === 'content-marketing'
                            ? '6. Real-world examples and use cases'
                            : '6. Business Store and Online Shopping Use Cases and Scenarios'}
                        </h2>
                        {(params.slug === 'digital-marketing' || params.slug === 'content-marketing') && (
                          <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-4">
                            {params.slug === 'digital-marketing'
                              ? 'We help a lot of different businesses, and each one has its own set of issues:'
                              : 'When companies need something, they choose Aroot Digital.'}
                          </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.useCases.map((useCase: { title: string; description: string }, index: number) => {
                            const isLast = index === service.useCases.length - 1;
                            const isOddTotal = service.useCases.length % 2 !== 0;
                            const shouldSpanFull = isLast && isOddTotal;
                            
                            const cardClasses = [
                              'group',
                              'relative',
                              'p-6',
                              'bg-gradient-to-br',
                              'from-card/50',
                              'to-card/30',
                              'backdrop-blur-sm',
                              'border',
                              'border-border/50',
                              'hover:border-primary/50',
                              'hover:shadow-xl',
                              'hover:shadow-primary/10',
                              'transition-all',
                              'duration-500',
                              'hover:-translate-y-2',
                              'overflow-hidden',
                              'animate-in',
                              'fade-in',
                              'slide-in-from-bottom-4',
                              'duration-700'
                            ];
                            
                            if (shouldSpanFull) {
                              cardClasses.push('md:col-span-2');
                            }
                            
                            return (
                              <Card 
                                key={index} 
                                className={cardClasses.join(' ')}
                                style={{ animationDelay: `${index * 100}ms` }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                      <span className="text-lg font-bold text-primary">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{useCase.title}:</h3>
                                  </div>
                                  <p className="text-base text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors duration-300">{useCase.description}</p>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </section>
                    )}

                    {/* Trust Elements Section */}
                    {'trustElements' in service && service.trustElements && (
                      <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {params.slug === 'app-marketing' 
                            ? '7. Trust Elements — Credibility, Experience, Reliability'
                            : params.slug === 'web-design'
                            ? '7. You can trust someone if they are credible, have experience, and follow the rules that apply all over the world.'
                            : params.slug === 'search-engine-optimization'
                            ? 'Many brands choose us because'
                            : params.slug === 'ppc-paid-marketing'
                            ? '7. People trust you based on how much you know, how big you are, and how steady you are'
                            : params.slug === 'digital-marketing'
                            ? '7. What makes Aroot Digital trustworthy?'
                            : params.slug === 'content-marketing'
                            ? '7. Trust Elements: Why Brands Trust Us'
                            : '7. Things that clients trust that make them choose Aroot Digital'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.trustElements.map((item: string, index: number) => (
                            <Card 
                              key={index} 
                              className="group relative p-5 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-in fade-in slide-in-from-left-4 duration-700"
                              style={{ animationDelay: `${index * 80}ms` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                  <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-base text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors duration-300 flex-1">{item}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Soft CTA Section */}
                    {'softCTA' in service && service.softCTA && (
                      <section className="relative p-6 bg-gradient-hero/10 rounded-lg border border-primary/20 group hover:bg-gradient-hero/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none z-0"></div>
                        <div className="relative z-10">
                          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                            {params.slug === 'app-marketing' 
                              ? '8. Soft CTA — Professional, Advisory-Led'
                              : params.slug === 'web-design'
                              ? '8. Soft CTA—Advice-Based'
                              : params.slug === 'search-engine-optimization'
                              ? 'Our staff is here to help you'
                              : params.slug === 'ppc-paid-marketing'
                              ? '8. Soft CTA: Professionally and skillfully led'
                              : params.slug === 'digital-marketing'
                              ? ''
                              : params.slug === 'content-marketing'
                              ? 'A Gentle, Businesslike Call to Action'
                              : '8. Soft CTA: Be professional and don\'t try to sell'}
                          </h2>
                          <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed font-medium mb-6 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                            {service.softCTA}
                          </p>
                          <Link href="#contact" className="inline-block">
                            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                              Contact Us
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </section>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Default Content for Other Services */}
                  <div className="text-center lg:text-left mb-8">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.longDescription}
                    </p>
              </div>

              {/* Stats */}
                  {'stats' in service && service.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
                  )}

                  {/* SEO Services Cards - Only for SEO service */}
                  {params.slug === 'search-engine-optimization' && (
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
                  )}
                </>
              )}
            </div>

            {/* Right Side - Callback Form */}
            <aside className="lg:col-span-1 w-full order-2 lg:order-1" style={{ display: 'block', visibility: 'visible', alignSelf: 'stretch' }}>
              <div className="sticky top-24 space-y-6 z-10" id="callback-form-sticky" style={{ display: 'block', visibility: 'visible', alignSelf: 'flex-start' }}>
                <Card className="p-8 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm w-full" style={{ display: 'block', visibility: 'visible' }}>
                  <CallbackRequestForm serviceName={service?.title || 'Service'} />
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
          <StickyCallbackScript />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Tools We Use Section */}
      <div id="tools-we-use-section">
      <ToolsWeUse />
      </div>

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
            <ScrollToSectionLink
              href="/"
              sectionId="services"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-300 text-sm"
            >
              View All Services
            </ScrollToSectionLink>
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
