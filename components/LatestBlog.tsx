"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "1",
    slug: "10-seo-tips-to-boost-your-website-ranking",
    title: "10 SEO Tips to Boost Your Website Ranking in 2025",
    excerpt: "Discover proven SEO strategies that can help improve your website's search engine rankings and drive more organic traffic.",
    image: "/placeholder.svg",
    date: "2025-01-15",
    category: "SEO",
    readTime: "5 min read",
    author: "Sarah Johnson"
  },
  {
    id: "2",
    slug: "social-media-marketing-trends-2025",
    title: "Social Media Marketing Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging social media marketing trends that will shape digital marketing this year.",
    image: "/placeholder.svg",
    date: "2025-01-10",
    category: "Social Media",
    readTime: "7 min read",
    author: "Michael Chen"
  },
  {
    id: "3",
    slug: "content-marketing-strategy-guide",
    title: "Complete Guide to Content Marketing Strategy",
    excerpt: "Learn how to create a comprehensive content marketing strategy that engages your audience and drives conversions.",
    image: "/placeholder.svg",
    date: "2025-01-05",
    category: "Content Marketing",
    readTime: "10 min read",
    author: "Emily Rodriguez"
  }
];

const LatestBlog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  return (
    <section id="blog" aria-labelledby="blog-heading" className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-background via-primary-accent/5 to-background border-b border-border/50">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 md:mb-12">
          <div className="space-y-3 animate-fade-in">
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
              className="group hover:shadow-xl transition-all duration-300 border-primary/10 overflow-hidden animate-fade-in bg-card/50 backdrop-blur-sm hover:border-primary-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  {/* Date and Author */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40"></span>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span className="font-medium">{post.author}</span>
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
