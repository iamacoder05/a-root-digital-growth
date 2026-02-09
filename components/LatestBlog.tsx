"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogPosts = [
  {
    id: "1",
    slug: "social-media-marketing-trends-2026",
    title: "Social Media Marketing Trends to Watch in 2026",
    excerpt: "A future-ready guide by Aroot Digital. Even just two years ago, social media looked very different in 2026. With AI-powered feeds, a lot of short-form videos, and highly personalized content ecosystems, brands need to change quickly to stay visible and relevant.",
    image: "/assets/social-media-trends-2026.png",
    date: "2026-01-30",
    category: "Social Media",
    readTime: "12 min read",
    author: "Aroot Digital"
  },
  {
    id: "2",
    slug: "ten-things-to-rank-higher-2026",
    title: "Ten things you can do to make your website rank higher in 2026",
    excerpt: "Aroot Digital has made a useful guide that has a big impact. Search engines are smarter, easier to use, and more focused on how people use them than they have ever been before in 2026. Your SEO plan needs to change as AI-driven ranking systems, brand reputation signals, and dynamic SERP layouts change.",
    image: "/assets/seo-ranking-tips-2026.png",
    date: "2026-01-30",
    category: "SEO",
    readTime: "10 min read",
    author: "Aroot Digital"
  },
  {
    id: "3",
    slug: "linkedin-marketing-for-business",
    title: "LinkedIn Marketing for B2B Businesses: The Complete 2026 Guide",
    excerpt: "LinkedIn is now the best place in the world to market to other businesses. It helps businesses gain credibility, affects people's buying decisions, and brings in high-value leads from decision-makers and executives all over the world.",
    image: "/assets/linkedin-b2b-marketing-2026.png",
    date: "2026-01-30",
    category: "Social Media",
    readTime: "15 min read",
    author: "Aroot Digital"
  }
];

const LatestBlog = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  return (
    <section 
      ref={ref}
      id="blog" 
      aria-labelledby="blog-heading" 
      className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-b from-background via-primary-accent/5 to-background border-b border-border/50"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 md:mb-12">
          <div className={`space-y-3 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}>
            <h2 id="blog-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Latest Blog Posts
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest insights, tips, and trends in digital marketing
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`group hover:shadow-xl transition-all duration-700 border-primary/10 overflow-hidden bg-card/50 backdrop-blur-sm hover:border-primary-accent/30 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                {/* Image Container */}
                <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary-accent/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  {/* Animated Line Below Image */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-accent group-hover:w-full transition-all duration-500 ease-in-out z-10"></div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  {/* Date */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all pt-2">
                    <span className="text-sm md:text-base">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-muted-foreground mb-4">Want to read more?</p>
          <Link href="/blog">
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-semibold px-6 md:px-8 py-6 md:py-7">
              Explore All Blog Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
