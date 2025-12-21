"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqCategories = [
  "All",
  "Services",
  "Pricing",
  "Process",
  "Results",
];

const faqData: FAQItem[] = [
  {
    id: "1",
    category: "Services",
    question: "What digital marketing services do you offer?",
    answer: "We offer a comprehensive range of digital marketing services including SEO (Search Engine Optimization), social media marketing, content marketing, PPC advertising, email marketing, conversion rate optimization, web design, and analytics. Our team tailors strategies to meet your specific business goals and industry requirements.",
  },
  {
    id: "2",
    category: "Services",
    question: "Do you provide social media management services?",
    answer: "Yes, we offer complete social media management services including content creation, posting schedules, community management, paid social advertising, and performance analytics. We work across all major platforms including Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
  },
  {
    id: "3",
    category: "Services",
    question: "Can you help with both B2B and B2C marketing?",
    answer: "Absolutely! We have experience working with both B2B and B2C businesses across various industries. Our strategies are adapted to your target audience, whether you're selling to businesses or directly to consumers. We understand the unique challenges and opportunities in each market.",
  },
  {
    id: "4",
    category: "Pricing",
    question: "What is your pricing structure?",
    answer: "Our pricing is customized based on your specific needs, goals, and the scope of services required. We offer flexible pricing models including monthly retainers, project-based pricing, and performance-based options. Contact us for a free consultation and personalized quote.",
  },
  {
    id: "5",
    category: "Pricing",
    question: "Do you offer packages for small businesses?",
    answer: "Yes, we offer affordable packages specifically designed for small businesses and startups. These packages include essential digital marketing services at competitive rates, helping small businesses establish and grow their online presence without breaking the budget.",
  },
  {
    id: "6",
    category: "Process",
    question: "What is your typical onboarding process?",
    answer: "Our onboarding process begins with a discovery call to understand your business, goals, and challenges. We then conduct a comprehensive audit of your current digital presence, develop a customized strategy, and present a detailed proposal. Once approved, we set up tracking tools and begin implementation with regular check-ins.",
  },
  {
    id: "7",
    category: "Process",
    question: "How do you communicate progress and updates?",
    answer: "We maintain transparent communication through multiple channels including email, scheduled calls, and a client portal. You'll receive weekly updates, monthly comprehensive reports, and have access to real-time dashboards. We're also available for urgent questions via phone or chat.",
  },
  {
    id: "8",
    category: "Results",
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy, and results typically start appearing within 3-6 months. However, the timeline varies based on factors like your website's current state, competition level, and the keywords you're targeting. We provide monthly progress reports so you can track improvements along the way.",
  },
  {
    id: "9",
    category: "Results",
    question: "How do you measure success and ROI?",
    answer: "We track key performance indicators (KPIs) such as website traffic, search rankings, conversion rates, lead generation, social media engagement, and revenue growth. We provide detailed monthly reports with clear metrics and insights, so you always know how your campaigns are performing.",
  },
  {
    id: "10",
    category: "Results",
    question: "What kind of results can I expect?",
    answer: "Results vary based on your industry, competition, and goals. Typically, our clients see increased website traffic (20-50% within 6 months), improved search rankings, higher conversion rates, more qualified leads, and measurable ROI. We set realistic expectations during our initial consultation and work towards achieving them.",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setOpenFAQ(null); // Close any open FAQ when changing category
  };

  const getFilteredFAQs = (category: string) => {
    if (category === "All") {
      return faqData;
    }
    return faqData.filter((faq) => faq.category === category);
  };

  const filteredFAQs = getFilteredFAQs(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4 pt-24 border-b border-border/50 relative z-40 bg-background/95 backdrop-blur-sm">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>FAQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* FAQ Section */}
      <section id="faq" aria-labelledby="faq-heading" className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-background via-primary-accent/5 to-background">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12 animate-fade-in">
            <h1 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about our digital marketing services.
            </p>
          </div>

          {/* FAQ Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Left Column - Categories Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-background rounded-lg p-4 space-y-2 sticky top-24">
                {faqCategories.map((category) => {
                  const isSelected = selectedCategory === category;
                  const count = category === "All" ? faqData.length : faqData.filter((faq) => faq.category === category).length;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                        isSelected
                          ? "bg-primary-accent text-white shadow-lg"
                          : "bg-muted/50 hover:bg-muted text-foreground"
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {count}
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                            isSelected ? "text-white" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq) => {
                    const isOpen = openFAQ === faq.id;
                    return (
                      <Card
                        key={faq.id}
                        className="border-primary/10 overflow-hidden hover:shadow-xl transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <div className="flex-1 pr-4">
                            <span className="text-xs font-semibold text-primary-accent uppercase tracking-wide mb-2 block">
                              {faq.category}
                            </span>
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                              {faq.question}
                            </h3>
                          </div>
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen
                                ? "bg-primary-accent text-white rotate-180"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-2">
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No FAQs found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

