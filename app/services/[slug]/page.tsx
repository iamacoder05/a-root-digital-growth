import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Star, Users, Target, Award, TrendingUp, Share2, ImageIcon, Building2, Brain, Sparkles, ShoppingCart, Smartphone, AppWindow, FileText, MapPin, Globe, Calendar, ArrowRight, BarChart, Palette } from 'lucide-react';
import CallbackRequestForm from '@/components/CallbackRequestForm';
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
  'martech-data-analytics': 'Analytics',
  'web-design': 'Web Design and Development',
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
    title: 'PPC/Paid Marketing',
    icon: 'MousePointerClick',
    image: '/assets/SEO.jpg',
    description: 'Pay-per-click (PPC) ads that are smart and get you results quickly and with high intent',
    subtitle: 'The goal of the subhead is very clear. Be smarter with your money. If you know how to use them, pay-per-click ads can help your business grow.',
    longDescription: 'Businesses that work online need more than just traffic; they need traffic that turns into sales. People who are looking for what you offer will see your brand in pay-per-click (PPC) ads. Aroot Digital can help brands in India and around the world run pay-per-click ads that work and don\'t cost too much. Our plan makes sure that you get the most out of your money, whether you\'re launching a new product, entering a new market, or improving your current funnels.',
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
      'It\'s clear right away: Well-planned pay-per-click (PPC) ads can help you reach people who are really interested in what you have to offer',
      'Putting a cap on how much you can spend on ads: Spend money, get better deals, and make sure every click helps your business reach its goal',
      'A real push to sell: Very specific pay-per-click ads can get people to go on the trips they need to take',
      'Growth that can be sped up: Current information and market insights can help you change, stop, grow, or make what you\'re doing better',
      'Thoughts that are clear: Reports that give you a lot of information about what\'s going on and what will happen next'
    ],
    howItWorks: [
      {
        step: 'Step 1: Get to know the company and the words that are important',
        description: 'To find the best basis for your pay-per-click digital marketing campaigns, we look at phrases that show intent, how your audience reacts, what your competitors are doing, and how many people are searching for your product.'
      },
      {
        step: 'Step 2: Plan the campaign',
        description: 'We make sure that every pay-per-click plan has small ad groups, catchy ad copy, and landing pages that are well-optimized.'
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
      'This means that the people who make your PPC plan have worked for a lot of different companies and know a lot about them',
      'Clear and honest execution—no guesswork, no hidden fees, just the facts',
      'Everything, from the searches to the landing pages, is set up to make people want to sell',
      'Pan-Indian and Global Reach: Have worked with a wide range of businesses and people from all over the world',
      'PPC experts who only work on your ads and not on a lot of other ones',
      'The screens are easy to read, and they get new information every week'
    ],
    useCases: [
      {
        title: 'Nearby businesses',
        description: 'For some treatments at a clinic in Pune, PPC ads got better, which brought in more leads.'
      },
      {
        title: 'A clothing store',
        description: 'Made more money every month by using pay-per-click ads that were tailored to specific items and remarketing funnels.'
      },
      {
        title: 'These businesses sell things to other businesses',
        description: 'When a SaaS company ran pay-per-click digital marketing ads aimed at industry leaders, the cost per lead went down.'
      },
      {
        title: 'Store chains that have more than one location',
        description: 'A group of service providers put up pay-per-click ads to find out what people were looking for on each site.'
      }
    ],
    trustElements: [
      'For more than ten years, they have run ads in India, the Middle East, the US, the UK, and APAC',
      'They have worked with well-known companies in shopping, health care, education, real estate, food and drink, and other fields',
      'They can handle monthly budgets of between ₹25,000 and ₹50 lakh'
    ],
    softCTA: 'Do you want to start your own pay-per-click (PPC) ad or get the most out of the ones you already have? The staff at Aroot Digital is ready to give you honest advice and a plan you can follow.'
  },
  'martech-data-analytics': {
    title: 'MarTech / Data Analytics',
    icon: 'BarChart',
    image: '/assets/SEO.jpg',
    description: 'If you want to make decisions based on data, use advanced analytics and insights',
    subtitle: 'You can make better, faster, and more sure of your business decisions with Aroot Digital\'s help. They help you make sense of complicated data and find insights and analytics that are useful.',
    longDescription: 'In today\'s world, data by itself isn\'t enough. Companies need analytics and insights that take raw data and turn it into clear, confident, and measurable direction. Structured insights and analytics frameworks are what we use at Aroot Digital to help brands make smart decisions, understand complicated facts, and find hidden opportunities. You can use data to improve your marketing, learn more about your customers, or make your business run better. Our team makes sure that you always get insights that matter.',
    features: [
      'Predictive modeling and trend forecasting',
      'Custom dashboards and reporting',
      'Cohort, segmentation, and attribution studies',
      'KPI monitoring and executive reporting',
      'Customer journey mapping',
      'Sales funnel and conversion insights'
    ],
    benefits: [
      'Better Decision-Making: Don\'t guess now, use data to make decisions',
      'Get to Know Your Customers: Use advanced customer analytics to find patterns, trends, and preferences',
      'Figure out what\'s wrong and how you can fix it to improve operational efficiency',
      'Marketing Optimization: Learn more about your data to get a better return on investment (ROI) from your campaigns',
      'For the future, plan to use data and insights to stay ahead of market changes'
    ],
    howItWorks: [
      {
        step: 'Step 1: Gathering and putting together data',
        description: 'All of your operational, marketing, sales, and CRM data is put together and put together by us.'
      },
      {
        step: 'Step 2: Study in depth',
        description: 'The people who work for us use technological insight frameworks, statistical models, and segmentation techniques to look for patterns that matter.'
      },
      {
        step: 'Step 3: Getting insights',
        description: 'We use unstructured data to make easy-to-read dashboards for analytics and insights.'
      },
      {
        step: 'Step 4: Ideas for what you should do',
        description: 'Because our team gives you clear plans and ideas, you can use data to get business insights that you can use right away.'
      }
    ],
    differentiators: [
      'Not Just Dashboards, But Also Interpretation by People: We don\'t just give you numbers; we break them down, explain them, and help you understand them',
      'Key Points Based on Strategy: Our ideas connect the information to the real goals of your business',
      'Have fun in India and all over the world: We work with companies of all sizes, from small ones just starting out to big ones',
      'Know a lot about the business and have great skills with tech, retail, banking, hotel, and direct-to-consumer brands',
      'Being able to work together with your teams without any issues: There are flexible work arrangements with in-house teams, marketing executives, and CXOs'
    ],
    useCases: [
      {
        title: 'Business Store and Online Shopping',
        description: 'Advanced analytics and insights can help you improve how well your products work, how people buy them, and how often they buy them.'
      },
      {
        title: 'Taking care of money and wealth',
        description: 'Deep customer analytics can help you understand the lifecycle of a client, keep them as a client longer, and get better results from the advice you give.'
      },
      {
        title: 'Food and drink, and a warm welcome',
        description: 'Data insights that you can use to find peak hours, categories that do well, and things that keep customers coming back.'
      },
      {
        title: 'For real estate',
        description: 'Use data and insights to keep track of the leads\' quality, the agents\' work, and the number of projects that turn into sales.'
      },
      {
        title: 'Cloud computing and SaaS',
        description: 'Tech-savvy people should keep an eye on how features are being used, how many users are leaving, and how much value customers are getting.'
      }
    ],
    trustElements: [
      'Worked for more than 10 years with data-driven and digital strategy',
      'A history of success in India, the UAE, the UK, and APAC',
      'Clear execution with results that can be seen',
      'Using data in a way that is moral, legal, and puts privacy first',
      'A group of strategists, analysts, and experts in the field'
    ],
    softCTA: 'With better data and analytics, our staff is ready to help you make smarter choices.'
  },
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
  ],
  'web-design': [
    {
      question: "What is included in your web design service?",
      answer: "Our comprehensive web design service includes responsive web design, user experience (UX) optimization, user interface (UI) design, mobile-first approach, conversion rate optimization, website redesign and updates, and performance optimization. We create websites that are both visually appealing and highly functional."
    },
    {
      question: "Do you design websites for all industries?",
      answer: "Yes! We design websites for businesses across all industries including e-commerce, healthcare, finance, technology, real estate, education, and more. Our team adapts design styles and functionality to match your industry requirements and target audience preferences."
    },
    {
      question: "How long does it take to design a website?",
      answer: "The timeline depends on the scope and complexity of your project. A simple website typically takes 2-4 weeks, while more complex sites with custom features can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
    },
    {
      question: "Will my website be mobile-responsive?",
      answer: "Absolutely! All our websites are designed with a mobile-first approach, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops. Mobile responsiveness is a core requirement for all our web design projects."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes! We offer website redesign services to modernize your existing site, improve user experience, enhance functionality, and boost conversions. We'll analyze your current site and create a redesign plan that addresses your specific goals and challenges."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer ongoing website maintenance services including content updates, security patches, performance monitoring, and technical support. We can create a maintenance plan tailored to your needs to keep your website running smoothly and securely."
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
      title: 'Professionals run pay-per-click (PPC) ads and campaigns.',
      description: 'Aroot Digital\'s pay-per-click ads will bring in more visitors and customers. Pay-per-click (PPC) ads are meant to help your business grow in a way that people can see.',
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
  
  if (params.slug === 'martech-data-analytics') {
    return {
      title: 'You can use analytics and insights services to help you run your business better.',
      description: 'Get good analytics and insights that will help you understand things better, do better, and grow. You can trust the decisions you make with the help of Aroot Digital.',
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
                      <span className="text-primary">•</span>
                      <span>Data-driven & ROI-focused execution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>WhatsApp message marketing + social media advertising</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
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
                      <span className="text-primary">•</span>
                      <span>A planned website design that works for your business</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Writing code for websites that works well and is easy to read and understand</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
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
                      <span className="text-primary">•</span>
                      <span>We create unique SEO plans for your market, goals, and audience, and we also have clear steps that show real, measurable progress.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Brands in India and around the world trust us because our SEO is ethical and good for the environment.</span>
                    </li>
                  </ul>
                </>
              ) : params.slug === 'ppc-paid-marketing' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Pay-per-click (PPC) ads that are smart and get you results quickly and with high intent
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    The goal of the subhead is very clear. Be smarter with your money. If you know how to use them, pay-per-click ads can help your business grow.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Pay-per-click (PPC) ads that use data to turn customers who are very interested into buyers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>An action with a clear goal and a clear return on investment (ROI)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
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
                      <span className="text-primary">•</span>
                      <span>Customized programs for businesses in India and around the world</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Full-stack digital marketing solutions backed by years of experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
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
                      <span className="text-primary">•</span>
                      <span>Get strong, clear content for your website, blogs, and campaigns that will get people to do something</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Hire professional article writers, SEO content writers, and brand storytellers to help you</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Writing that meets international standards and is meant for readers in India and other countries</span>
                    </li>
                  </ul>
                </>
              ) : params.slug === 'martech-data-analytics' ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    If you want to make decisions based on data, use advanced analytics and insights
                  </h1>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                    You can make better, faster, and more sure of your business decisions with Aroot Digital's help. They help you make sense of complicated data and find insights and analytics that are useful.
                  </p>
                  <ul className="mt-4 space-y-2 text-base md:text-lg text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Make smart decisions by using accurate data insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Use accurate customer analytics to learn how your customers behave</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Look through data to learn business lessons that will help you do better</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Left Side - Service Content */}
            <div className="lg:col-span-3 lg:pr-6 lg:border-r lg:border-border">
              {params.slug === 'app-marketing' || params.slug === 'web-design' || params.slug === 'search-engine-optimization' || params.slug === 'ppc-paid-marketing' || params.slug === 'digital-marketing' || params.slug === 'content-marketing' || params.slug === 'martech-data-analytics' ? (
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
                          : '1. What analytics and insights are and why they\'re important'}
                      </h2>
                      {params.slug === 'app-marketing' ? (
                        <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            In a crowded digital ecosystem where thousands of apps launch every week, getting users to notice your brand requires more than just a great product. You need strategic visibility, consistent engagement, and a channel mix that works every single day.
                          </p>
                          <p>
                            Aroot Digital helps brands achieve this through a structured, insight-led app marketing framework powered by whatsapp message marketing, targeted campaigns, mobile app promotion, and performance-led execution.
                          </p>
                          <p>
                            Your app gets what it needs the most — discoverability, installs, engagement, and long-term retention.
                          </p>
                        </div>
                      ) : params.slug === 'web-design' ? (
                        <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            When people first hear about your brand, they often go to your website first. Aroot Digital's web design, website design, and website development services make sure that this first impression is not only good, but also easy to remember, easy to use, and focused on getting visitors to buy.
                          </p>
                          <p>
                            We make digital experiences that are quick, safe, easy to use, and look great. Whether you're making a new website or updating an old one, our UI/UX design rules can help it stay interesting and grow over time.
                          </p>
                        </div>
                      ) : params.slug === 'search-engine-optimization' ? (
                        <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            People now need search exposure to find brands online. Aroot Digital's SEO services will make sure that people don't forget about your site, that it works right, and that it looks like real people. We value clear, simple, and long-lasting value over complicated language or empty claims. Our SEO company is up-to-date.
                          </p>
                          <p>
                            We help you stay up to date, competitive, and easy to find, whether you're trying to reach people in your area or all over the world.
                          </p>
                        </div>
                      ) : params.slug === 'ppc-paid-marketing' ? (
                        <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            Businesses that work online need more than just traffic; they need traffic that turns into sales. People who are looking for what you offer will see your brand in pay-per-click (PPC) ads.
                          </p>
                          <p>
                            Aroot Digital can help brands in India and around the world run pay-per-click ads that work and don't cost too much. Our plan makes sure that you get the most out of your money, whether you're launching a new product, entering a new market, or improving your current funnels.
                          </p>
                        </div>
                      ) : params.slug === 'digital-marketing' ? (
                        <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            In today's digital world, every business needs to have a strong, consistent, and strategic online presence.
                          </p>
                          <p>
                            Aroot Digital is a full-service digital marketing company that can help your business grow by getting more people to see it and building trust with customers.
                          </p>
                          <p>
                            Our methodical approach makes sure that everything is clear and that you can see your progress, whether you're building new digital marketing websites or growing an old brand.
                          </p>
                          <p>
                            We are a trustworthy digital marketing company that helps businesses in India and around the world give their customers digital experiences that are safe, useful, and up to date.
                          </p>
                        </div>
                      ) : params.slug === 'content-marketing' ? (
                        <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            Content that is good doesn't just take up space. It helps people make decisions by earning their trust and showing them how much something is worth.
                          </p>
                          <p>
                            Aroot Digital's content writers use a mix of clarity, originality, and strategy to write content that sounds like a person wrote it, reads naturally, and makes your company the clear choice.
                          </p>
                          <p>
                            We write articles, website content, or even full website copy that is easy for your customers to understand and helps you reach your business goals.
                          </p>
                        </div>
                      ) : (
                        <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                          <p>
                            In today's world, data by itself isn't enough. Companies need analytics and insights that take raw data and turn it into clear, confident, and measurable direction. Structured insights and analytics frameworks are what we use at Aroot Digital to help brands make smart decisions, understand complicated facts, and find hidden opportunities.
                          </p>
                          <p>
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
                            : '2. Important Pros and Cons — Doable and focused on outcomes'}
                        </h2>
                        {params.slug === 'digital-marketing' && (
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                            We don't make empty promises when it comes to our internet marketing services in India and other countries. We help businesses get real results.
                          </p>
                        )}
                        {params.slug === 'digital-marketing' && (
                          <p className="text-base md:text-lg font-semibold text-foreground mb-4">
                            Aroot Digital is chosen by clients because:
                          </p>
                        )}
                        <ul className="space-y-3">
                          {service.benefits.map((benefit: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-base text-muted-foreground leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
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
                            : '3. How it works: A clear and easy process'}
                        </h2>
                        {(params.slug === 'digital-marketing' || params.slug === 'content-marketing') && (
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                            {params.slug === 'digital-marketing'
                              ? 'For all of our digital marketing needs, we have a methodical but adaptable way of doing things:'
                              : 'How it works'}
                          </p>
                        )}
                        <div className="space-y-6">
                          {service.howItWorks.map((step: { step: string; description: string }, index: number) => (
                            <div key={index} className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                              <h3 className="text-lg font-semibold text-foreground mb-2">{step.step}</h3>
                              <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                          ))}
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
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                            {params.slug === 'digital-marketing'
                              ? 'There are many digital marketing services available, such as:'
                              : 'When you hire us to write content, we can do a number of things for you:'}
                          </p>
                        )}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                          {service.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {params.slug === 'search-engine-optimization' && (
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                            Aroot Digital is your long-term SEO company. They make sure that your site is always up-to-date and works the way people expect it to.
                          </p>
                        )}
                        {params.slug === 'digital-marketing' && (
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                            Your digital marketing websites will be more than just ads online; each one will be made just for you.
                          </p>
                        )}
                        {params.slug === 'content-marketing' && (
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
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
                        <ul className="space-y-3">
                          {service.differentiators.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
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
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                            {params.slug === 'digital-marketing'
                              ? 'We help a lot of different businesses, and each one has its own set of issues:'
                              : 'When companies need something, they choose Aroot Digital.'}
                          </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.useCases.map((useCase: { title: string; description: string }, index: number) => (
                            <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                              <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}:</h3>
                              <p className="text-base text-muted-foreground leading-relaxed">{useCase.description}</p>
                            </Card>
                          ))}
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
                        <ul className="space-y-3">
                          {service.trustElements.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Soft CTA Section */}
                    {'softCTA' in service && service.softCTA && (
                      <section className="p-6 bg-gradient-hero/10 rounded-lg border border-primary/20">
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
                        <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                          {service.softCTA}
                        </p>
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
