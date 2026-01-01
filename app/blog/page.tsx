"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


// All blog posts data
const allBlogPosts = [
  {
    id: "1",
    slug: "10-seo-tips-to-boost-your-website-ranking",
    title: "10 SEO Tips to Boost Your Website Ranking in 2025",
    excerpt: "Discover proven SEO strategies that can help improve your website's search engine rankings and drive more organic traffic. Learn about keyword research, on-page optimization, and technical SEO.",
    image: "/placeholder.svg",
    date: "2025-01-15",
    category: "SEO",
    readTime: "5 min read",
    author: "Sarah Johnson"
  },
  {
    id: "2",
    slug: "advanced-seo-techniques-2025",
    title: "Advanced SEO Techniques for 2025: Beyond the Basics",
    excerpt: "Take your SEO strategy to the next level with these advanced techniques that go beyond basic optimization. Learn about technical SEO, schema markup, and advanced link building strategies.",
    image: "/placeholder.svg",
    date: "2025-01-12",
    category: "SEO",
    readTime: "12 min read",
    author: "Sarah Johnson"
  },
  {
    id: "3",
    slug: "local-seo-strategy-guide",
    title: "Local SEO Strategy: Dominate Your Local Market",
    excerpt: "Learn how to optimize your business for local search and attract customers in your area. Master Google Business Profile optimization and local citation strategies.",
    image: "/placeholder.svg",
    date: "2025-01-08",
    category: "SEO",
    readTime: "8 min read",
    author: "Sarah Johnson"
  },
  {
    id: "4",
    slug: "social-media-marketing-trends-2025",
    title: "Social Media Marketing Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging social media marketing trends that will shape digital marketing this year. From video content to AI-powered tools.",
    image: "/placeholder.svg",
    date: "2025-01-10",
    category: "Social Media",
    readTime: "7 min read",
    author: "Michael Chen"
  },
  {
    id: "5",
    slug: "instagram-marketing-strategies",
    title: "Instagram Marketing Strategies That Drive Engagement",
    excerpt: "Discover proven Instagram marketing strategies to grow your following and increase engagement. Learn about Stories, Reels, and IGTV optimization.",
    image: "/placeholder.svg",
    date: "2025-01-07",
    category: "Social Media",
    readTime: "9 min read",
    author: "Michael Chen"
  },
  {
    id: "6",
    slug: "linkedin-marketing-for-business",
    title: "LinkedIn Marketing for B2B Businesses: Complete Guide",
    excerpt: "Master LinkedIn marketing to generate leads and build your B2B brand presence. Learn about LinkedIn Ads, content strategy, and networking techniques.",
    image: "/placeholder.svg",
    date: "2025-01-03",
    category: "Social Media",
    readTime: "11 min read",
    author: "Michael Chen"
  },
  {
    id: "7",
    slug: "content-marketing-strategy-guide",
    title: "Complete Guide to Content Marketing Strategy",
    excerpt: "Learn how to create a comprehensive content marketing strategy that engages your audience and drives conversions. Includes templates and best practices.",
    image: "/placeholder.svg",
    date: "2025-01-05",
    category: "Content Marketing",
    readTime: "10 min read",
    author: "Emily Rodriguez"
  },
  {
    id: "8",
    slug: "blog-content-creation-tips",
    title: "Blog Content Creation: Tips for Engaging Readers",
    excerpt: "Learn how to create blog content that captivates your audience and keeps them coming back for more. Discover writing techniques and content formats that work.",
    image: "/placeholder.svg",
    date: "2024-12-30",
    category: "Content Marketing",
    readTime: "7 min read",
    author: "Emily Rodriguez"
  },
  {
    id: "9",
    slug: "video-content-marketing-guide",
    title: "Video Content Marketing: A Comprehensive Guide",
    excerpt: "Explore the power of video content marketing and how to create videos that convert. Learn about YouTube optimization, video SEO, and engagement strategies.",
    image: "/placeholder.svg",
    date: "2024-12-25",
    category: "Content Marketing",
    readTime: "10 min read",
    author: "Emily Rodriguez"
  },
  {
    id: "10",
    slug: "ppc-advertising-best-practices",
    title: "PPC Advertising Best Practices for Maximum ROI",
    excerpt: "Maximize your return on investment with these proven PPC advertising strategies. Learn about keyword selection, ad copywriting, and bid management.",
    image: "/placeholder.svg",
    date: "2024-12-28",
    category: "PPC",
    readTime: "8 min read",
    author: "David Thompson"
  },
  {
    id: "11",
    slug: "google-ads-optimization-tips",
    title: "Google Ads Optimization: 10 Tips for Better Performance",
    excerpt: "Optimize your Google Ads campaigns with these proven strategies to improve performance and ROI. Learn about keyword match types, ad extensions, and quality scores.",
    image: "/placeholder.svg",
    date: "2024-12-22",
    category: "PPC",
    readTime: "9 min read",
    author: "David Thompson"
  },
  {
    id: "12",
    slug: "facebook-ads-strategy-guide",
    title: "Facebook Ads Strategy: Maximize Your Ad Spend",
    excerpt: "Create effective Facebook ad campaigns that deliver results and maximize your advertising budget. Learn about audience targeting, ad formats, and optimization techniques.",
    image: "/placeholder.svg",
    date: "2024-12-18",
    category: "PPC",
    readTime: "8 min read",
    author: "David Thompson"
  },
  {
    id: "13",
    slug: "email-marketing-automation-guide",
    title: "Email Marketing Automation: A Complete Guide",
    excerpt: "Discover how to automate your email marketing campaigns to save time and increase engagement. Learn about workflows, segmentation, and personalization.",
    image: "/placeholder.svg",
    date: "2024-12-20",
    category: "Email Marketing",
    readTime: "6 min read",
    author: "Lisa Anderson"
  },
  {
    id: "14",
    slug: "email-campaign-design-best-practices",
    title: "Email Campaign Design: Best Practices for 2025",
    excerpt: "Design email campaigns that stand out in crowded inboxes and drive action from your subscribers. Learn about responsive design, CTAs, and visual hierarchy.",
    image: "/placeholder.svg",
    date: "2024-12-12",
    category: "Email Marketing",
    readTime: "7 min read",
    author: "Lisa Anderson"
  },
  {
    id: "15",
    slug: "newsletter-marketing-strategies",
    title: "Newsletter Marketing Strategies That Convert",
    excerpt: "Build and grow your newsletter subscriber base with these effective marketing strategies. Learn about lead magnets, segmentation, and content planning.",
    image: "/placeholder.svg",
    date: "2024-12-10",
    category: "Email Marketing",
    readTime: "6 min read",
    author: "Lisa Anderson"
  },
  {
    id: "16",
    slug: "website-conversion-optimization",
    title: "Website Conversion Optimization: 15 Proven Techniques",
    excerpt: "Transform your website visitors into customers with these conversion optimization techniques. From A/B testing to landing page design.",
    image: "/placeholder.svg",
    date: "2024-12-15",
    category: "Conversion",
    readTime: "9 min read",
    author: "James Wilson"
  },
  {
    id: "17",
    slug: "landing-page-optimization-guide",
    title: "Landing Page Optimization: Turn Visitors into Customers",
    excerpt: "Optimize your landing pages to convert more visitors into customers with these proven techniques. Learn about headline optimization, form design, and trust signals.",
    image: "/placeholder.svg",
    date: "2024-12-08",
    category: "Conversion",
    readTime: "10 min read",
    author: "James Wilson"
  },
  {
    id: "18",
    slug: "ab-testing-strategies",
    title: "A/B Testing Strategies: Data-Driven Optimization",
    excerpt: "Learn how to conduct effective A/B tests to optimize your website and improve conversion rates. Discover testing frameworks and statistical significance.",
    image: "/placeholder.svg",
    date: "2024-12-05",
    category: "Conversion",
    readTime: "8 min read",
    author: "James Wilson"
  },
  {
    id: "19",
    slug: "technical-seo-checklist-2025",
    title: "Technical SEO Checklist: Complete Guide for 2025",
    excerpt: "Master technical SEO with this comprehensive checklist covering site speed, mobile optimization, structured data, and more.",
    image: "/placeholder.svg",
    date: "2024-12-03",
    category: "SEO",
    readTime: "11 min read",
    author: "Sarah Johnson"
  },
  {
    id: "20",
    slug: "keyword-research-mastery",
    title: "Keyword Research Mastery: Find the Right Keywords",
    excerpt: "Discover advanced keyword research techniques to identify high-value keywords that drive traffic and conversions.",
    image: "/placeholder.svg",
    date: "2024-11-28",
    category: "SEO",
    readTime: "9 min read",
    author: "Sarah Johnson"
  },
  {
    id: "21",
    slug: "link-building-strategies",
    title: "Link Building Strategies: Build Quality Backlinks",
    excerpt: "Learn proven link building strategies to improve your domain authority and search engine rankings.",
    image: "/placeholder.svg",
    date: "2024-11-25",
    category: "SEO",
    readTime: "10 min read",
    author: "Sarah Johnson"
  },
  {
    id: "22",
    slug: "twitter-marketing-guide",
    title: "Twitter Marketing Guide: Grow Your Following",
    excerpt: "Master Twitter marketing to build your brand presence and engage with your audience effectively.",
    image: "/placeholder.svg",
    date: "2024-11-22",
    category: "Social Media",
    readTime: "8 min read",
    author: "Michael Chen"
  },
  {
    id: "23",
    slug: "tiktok-marketing-strategies",
    title: "TikTok Marketing Strategies for Business Growth",
    excerpt: "Leverage TikTok's growing platform to reach younger audiences and drive brand awareness.",
    image: "/placeholder.svg",
    date: "2024-11-20",
    category: "Social Media",
    readTime: "7 min read",
    author: "Michael Chen"
  },
  {
    id: "24",
    slug: "youtube-marketing-tips",
    title: "YouTube Marketing Tips: Build Your Channel",
    excerpt: "Grow your YouTube channel with these proven marketing strategies and optimization techniques.",
    image: "/placeholder.svg",
    date: "2024-11-18",
    category: "Social Media",
    readTime: "9 min read",
    author: "Michael Chen"
  },
  {
    id: "25",
    slug: "content-calendar-planning",
    title: "Content Calendar Planning: Stay Organized",
    excerpt: "Create an effective content calendar that keeps your marketing efforts organized and consistent.",
    image: "/placeholder.svg",
    date: "2024-11-15",
    category: "Content Marketing",
    readTime: "6 min read",
    author: "Emily Rodriguez"
  },
  {
    id: "26",
    slug: "infographic-design-guide",
    title: "Infographic Design Guide: Visual Content That Converts",
    excerpt: "Create compelling infographics that communicate your message effectively and drive engagement.",
    image: "/placeholder.svg",
    date: "2024-11-12",
    category: "Content Marketing",
    readTime: "8 min read",
    author: "Emily Rodriguez"
  },
  {
    id: "27",
    slug: "podcast-marketing-strategies",
    title: "Podcast Marketing Strategies: Grow Your Audience",
    excerpt: "Learn how to market your podcast effectively and build a loyal listener base.",
    image: "/placeholder.svg",
    date: "2024-11-10",
    category: "Content Marketing",
    readTime: "7 min read",
    author: "Emily Rodriguez"
  },
  {
    id: "28",
    slug: "bing-ads-optimization",
    title: "Bing Ads Optimization: Maximize Your Reach",
    excerpt: "Optimize your Bing Ads campaigns to reach a different audience and improve your ad performance.",
    image: "/placeholder.svg",
    date: "2024-11-08",
    category: "PPC",
    readTime: "8 min read",
    author: "David Thompson"
  },
  {
    id: "29",
    slug: "retargeting-campaigns-guide",
    title: "Retargeting Campaigns: Re-engage Your Visitors",
    excerpt: "Create effective retargeting campaigns that bring back visitors and convert them into customers.",
    image: "/placeholder.svg",
    date: "2024-11-05",
    category: "PPC",
    readTime: "9 min read",
    author: "David Thompson"
  },
  {
    id: "30",
    slug: "shopping-ads-optimization",
    title: "Shopping Ads Optimization: Boost E-commerce Sales",
    excerpt: "Optimize your Google Shopping ads to increase visibility and drive more sales for your products.",
    image: "/placeholder.svg",
    date: "2024-11-03",
    category: "PPC",
    readTime: "7 min read",
    author: "David Thompson"
  },
  {
    id: "31",
    slug: "email-segmentation-strategies",
    title: "Email Segmentation Strategies: Personalize Your Campaigns",
    excerpt: "Segment your email list effectively to deliver personalized messages that resonate with each audience.",
    image: "/placeholder.svg",
    date: "2024-11-01",
    category: "Email Marketing",
    readTime: "8 min read",
    author: "Lisa Anderson"
  },
  {
    id: "32",
    slug: "subject-line-optimization",
    title: "Subject Line Optimization: Increase Open Rates",
    excerpt: "Write compelling email subject lines that grab attention and boost your open rates significantly.",
    image: "/placeholder.svg",
    date: "2024-10-28",
    category: "Email Marketing",
    readTime: "6 min read",
    author: "Lisa Anderson"
  },
  {
    id: "33",
    slug: "transactional-email-best-practices",
    title: "Transactional Email Best Practices: Enhance User Experience",
    excerpt: "Design transactional emails that not only inform but also engage and convert your customers.",
    image: "/placeholder.svg",
    date: "2024-10-25",
    category: "Email Marketing",
    readTime: "7 min read",
    author: "Lisa Anderson"
  },
  {
    id: "34",
    slug: "checkout-optimization-guide",
    title: "Checkout Optimization Guide: Reduce Cart Abandonment",
    excerpt: "Optimize your checkout process to reduce cart abandonment and increase completed purchases.",
    image: "/placeholder.svg",
    date: "2024-10-22",
    category: "Conversion",
    readTime: "9 min read",
    author: "James Wilson"
  },
  {
    id: "35",
    slug: "cta-optimization-tips",
    title: "CTA Optimization Tips: Drive More Clicks",
    excerpt: "Create compelling call-to-action buttons that encourage clicks and drive conversions.",
    image: "/placeholder.svg",
    date: "2024-10-20",
    category: "Conversion",
    readTime: "6 min read",
    author: "James Wilson"
  },
  {
    id: "36",
    slug: "mobile-conversion-optimization",
    title: "Mobile Conversion Optimization: Mobile-First Approach",
    excerpt: "Optimize your mobile experience to convert more mobile visitors into customers.",
    image: "/placeholder.svg",
    date: "2024-10-18",
    category: "Conversion",
    readTime: "8 min read",
    author: "James Wilson"
  }
];

function BlogPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
  }, [searchParams]);
  
  // Filter blog posts based on selected category
  const filteredPosts = selectedCategory
    ? allBlogPosts.filter(post => post.category === selectedCategory)
    : allBlogPosts;

  const handleCategoryClick = (category: string | null) => {
    if (category) {
      router.push(`/blog?category=${encodeURIComponent(category)}`);
    } else {
      router.push('/blog');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  // Get all unique categories
  const categories = Array.from(new Set(allBlogPosts.map(post => post.category))).sort();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - At the top */}
      <section className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-primary-accent/90 max-w-2xl mx-auto">
            Insights, tips, and strategies to help your business grow
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation - Below the heading */}
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
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-6">
            {/* Blog Posts - Takes 3 columns on large screens */}
            <div className="lg:col-span-3">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No posts found in this category.</p>
                  <button 
                    onClick={() => handleCategoryClick(null)}
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    View all posts
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                  {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 border-primary/10 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative w-full h-44 md:h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Sidebar - Takes 1 column on large screens */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {/* All Categories Option */}
                    <button
                      onClick={() => handleCategoryClick(null)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                        !selectedCategory
                          ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {!selectedCategory && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                        <span className={`${
                          !selectedCategory
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        } transition-colors font-medium`}>
                          All
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        !selectedCategory
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground bg-muted"
                      }`}>
                        {allBlogPosts.length}
                      </span>
                    </button>

                    {/* Category Options */}
                    {categories.map((category) => {
                      const count = allBlogPosts.filter(post => post.category === category).length;
                      const isSelected = selectedCategory === category;
                      return (
                        <button
                          key={category}
                          onClick={() => handleCategoryClick(category)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                            isSelected
                              ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isSelected && (
                              <Check className="w-4 h-4 text-primary" />
                            )}
                            <span className={`${
                              isSelected
                                ? "text-primary"
                                : "text-muted-foreground group-hover:text-foreground"
                            } transition-colors font-medium`}>
                              {category}
                            </span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isSelected
                              ? "bg-primary/20 text-primary"
                              : "text-muted-foreground bg-muted"
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <section className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 bg-gradient-hero text-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-primary-accent/90 max-w-2xl mx-auto">
              Insights, tips, and strategies to help your business grow
            </p>
          </div>
        </section>
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
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-[1400px]">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        </section>
      </div>
    }>
      <BlogPageContent />
    </Suspense>
  );
}

