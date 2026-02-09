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
  // SECTION 1: SERVICES
  {
    id: "1",
    category: "Services",
    question: "What kinds of things does your digital marketing agency do?",
    answer: "Analytics, WhatsApp Automation, GMB Optimization, Branding, Content Marketing, PPC Ads, Performance Marketing, Social Media Marketing, and Website Design.",
  },
  {
    id: "2",
    category: "Services",
    question: "Do you offer SEO services?",
    answer: "Yes, including on-page, off-page, technical SEO, keyword strategy, and local SEO.",
  },
  {
    id: "3",
    category: "Services",
    question: "Do you do social media marketing for Facebook and Instagram?",
    answer: "Yes, that includes making ads, captions, reels, and managing the community.",
  },
  {
    id: "4",
    category: "Services",
    question: "Do you use Google Ads and Meta Ads?",
    answer: "Yes, we handle ad campaigns on Facebook, Instagram, YouTube, Search, and Display.",
  },
  {
    id: "5",
    category: "Services",
    question: "Do you run campaigns to get leads?",
    answer: "Yes, for businesses in real estate, restaurants, retail, coaching, D2C, and services.",
  },
  {
    id: "6",
    category: "Services",
    question: "Do you make websites?",
    answer: "Yes, business websites, landing pages, corporate sites, and online stores.",
  },
  {
    id: "7",
    category: "Services",
    question: "Do you do UI/UX design?",
    answer: "Yes, a modern, responsive UI/UX that is optimized for conversions.",
  },
  {
    id: "8",
    category: "Services",
    question: "Do you write content for other people?",
    answer: "We write SEO blogs, website content, scripts for reels, ads, emails, and brochures.",
  },
  {
    id: "9",
    category: "Services",
    question: "Are you able to handle Google My Business (GMB)?",
    answer: "Yes, posting, optimizing, writing descriptions that are full of keywords, and managing reviews.",
  },
  {
    id: "10",
    category: "Services",
    question: "Do you offer marketing and automation for WhatsApp?",
    answer: "Yes, setting up the WhatsApp API, automation flows, broadcast templates, and retargeting.",
  },
  {
    id: "11",
    category: "Services",
    question: "Do you help with branding?",
    answer: "Yes, we do brand identity design, tone development, brand messaging, and logo design.",
  },
  {
    id: "12",
    category: "Services",
    question: "Do you help new businesses?",
    answer: "Yes, there are quick-launch digital marketing packages that are meant to help businesses grow.",
  },
  {
    id: "13",
    category: "Services",
    question: "Do you run paid ads for clients from other countries?",
    answer: "Yes, the US, UAE, UK, Canada, Singapore, and more.",
  },
  {
    id: "14",
    category: "Services",
    question: "What kinds of businesses do you work with?",
    answer: "Real estate, restaurants, finance, coaching, direct-to-consumer brands, healthcare, and business-to-business.",
  },
  {
    id: "15",
    category: "Services",
    question: "Can you handle all of your digital marketing in one place?",
    answer: "Yes, we offer 360° digital marketing with performance tracking and unified reporting.",
  },
  // SECTION 2: PRICING
  {
    id: "16",
    category: "Pricing",
    question: "How much do services for digital marketing cost?",
    answer: "Depending on the scope of the service, packages start at ₹15,000 per month.",
  },
  {
    id: "17",
    category: "Pricing",
    question: "Do you have packages with prices that can be changed?",
    answer: "Yes, they are customized based on the size, goals, and deadlines of the business.",
  },
  {
    id: "18",
    category: "Pricing",
    question: "How do you bill for paid ads?",
    answer: "We charge a fee for management, and you pay Google/Meta directly for ads.",
  },
  {
    id: "19",
    category: "Pricing",
    question: "Is there a minimum amount of time for the contract?",
    answer: "A three-month engagement is usually best for getting steady results.",
  },
  {
    id: "20",
    category: "Pricing",
    question: "Do you charge extra for creative work?",
    answer: "Yes, premium motion graphics are included in plans; standard creatives are not.",
  },
  {
    id: "21",
    category: "Pricing",
    question: "Do you give prices for one-time projects?",
    answer: "Yes, for building websites, branding, audits, and meetings.",
  },
  {
    id: "22",
    category: "Pricing",
    question: "Is it possible to start with a small plan and then make it bigger?",
    answer: "Yes, you can upgrade whenever you want.",
  },
  {
    id: "23",
    category: "Pricing",
    question: "Do you have to pay to get started?",
    answer: "When you sign up for a full digital marketing retainer, onboarding is usually free.",
  },
  {
    id: "24",
    category: "Pricing",
    question: "Do you charge based on performance?",
    answer: "Yes, but only in certain fields where tracking is accurate.",
  },
  {
    id: "25",
    category: "Pricing",
    question: "Do you give discounts for long-term commitments?",
    answer: "Yes, there are special prices for quarterly and yearly retainers.",
  },
  // SECTION 3: PROCESS
  {
    id: "26",
    category: "Process",
    question: "How do you get new employees started?",
    answer: "Brand discovery, setting up access, auditing competitors, making a strategy map, and making a content calendar.",
  },
  {
    id: "27",
    category: "Process",
    question: "What steps do you take to create a digital marketing plan?",
    answer: "Before we start, we look at our competitors, our audience, our keywords, our platforms, and our KPIs.",
  },
  {
    id: "28",
    category: "Process",
    question: "How often do you send out reports?",
    answer: "Depending on the plan, once a week, every other week, or once a month.",
  },
  {
    id: "29",
    category: "Process",
    question: "Do you make calendars for your content every month?",
    answer: "Yes, well-planned monthly calendars with creative ideas and videos.",
  },
  {
    id: "30",
    category: "Process",
    question: "Do you look into your competitors?",
    answer: "Yes, their ads, SEO, social media, and messages.",
  },
  {
    id: "31",
    category: "Process",
    question: "How do you run ad campaigns?",
    answer: "A/B tests, optimizing every day, managing keywords, and strategies for bidding.",
  },
  {
    id: "32",
    category: "Process",
    question: "Do you give each client a separate account manager?",
    answer: "Yes, for talking, getting approvals, and making plans.",
  },
  {
    id: "33",
    category: "Process",
    question: "How often do you improve your campaigns?",
    answer: "Weekly optimization and daily checking.",
  },
  {
    id: "34",
    category: "Process",
    question: "How do you know if your SEO is working?",
    answer: "Rankings, organic traffic, page health, keyword movement, and improvement over the course of a month.",
  },
  {
    id: "35",
    category: "Process",
    question: "What do you need from the client to get things going?",
    answer: "Brand assets, access to the website, ad accounts, and information about products and services.",
  },
  {
    id: "36",
    category: "Process",
    question: "Do you help people set up Google Analytics and Pixel?",
    answer: "Yes, full setup and integration of tracking.",
  },
  {
    id: "37",
    category: "Process",
    question: "Do you stick to the rules for your brand?",
    answer: "Yes, the fonts, colors, tone, and layouts all stay the same.",
  },
  {
    id: "38",
    category: "Process",
    question: "Can you control the tone of our brand messaging?",
    answer: "Yes, you can be professional, friendly, bold, high-end, corporate, or modern.",
  },
  {
    id: "39",
    category: "Process",
    question: "Do you offer dashboards?",
    answer: "Yes, there are GA4, Looker, and custom performance dashboards.",
  },
  {
    id: "40",
    category: "Process",
    question: "How do you get approvals?",
    answer: "We send each other content every week to get approval before posting.",
  },
  // SECTION 4: RESULTS
  {
    id: "41",
    category: "Results",
    question: "When will I start to see results?",
    answer: "SEO: 2 to 4 months. Ads that cost money: 1–7 days. Social Media: 45 to 60 days. Website: Immediate improvement after launch.",
  },
  {
    id: "42",
    category: "Results",
    question: "Can you promise leads or sales?",
    answer: "No ethical agency can promise results, but we can promise hard work, improvement, and honesty.",
  },
  {
    id: "43",
    category: "Results",
    question: "How do you find out how much money your campaign made?",
    answer: "Using GA4, UTM tracking, attribution models, lead quality scoring, and conversion metrics.",
  },
  {
    id: "44",
    category: "Results",
    question: "What key performance indicators do you keep an eye on?",
    answer: "CTR, CAC, ROAS, impressions, conversions, leads, ranking, and engagement are all important.",
  },
  {
    id: "45",
    category: "Results",
    question: "Will paid ads bring in traffic right away?",
    answer: "Yes, paid ads start getting clicks and impressions within hours.",
  },
  {
    id: "46",
    category: "Results",
    question: "What do you do to make leads better?",
    answer: "Better targeting, better landing pages, better ad messages, and better audience filtering.",
  },
  {
    id: "47",
    category: "Results",
    question: "Do you give suggestions for how to improve performance?",
    answer: "Yes, weekly strategic suggestions.",
  },
  {
    id: "48",
    category: "Results",
    question: "Can digital marketing help people learn more about your brand?",
    answer: "Yes, definitely. Through social media, search engine optimization, ads, content, and GMB.",
  },
  {
    id: "49",
    category: "Results",
    question: "How do you tell how well your content is doing?",
    answer: "Views, reads, time spent on the page, shares, saves, and organic keyword ranking.",
  },
  {
    id: "50",
    category: "Results",
    question: "How do you know if your social media is working?",
    answer: "The number of people who engage with your posts, the number of people who see them, the number of new followers, the number of profile visits, and the number of story interactions.",
  },
  {
    id: "51",
    category: "Results",
    question: "Can digital marketing help my business that isn't online?",
    answer: "Yes, with local SEO, GMB, WhatsApp automation, and ads that target people in your area.",
  },
  {
    id: "52",
    category: "Results",
    question: "Is it guaranteed that there will be ROI every month?",
    answer: "Optimizations make ROI better, but no agency can promise returns.",
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
                          ? "bg-primary text-white shadow-lg"
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
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 block">
                              {faq.category}
                            </span>
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                              {faq.question}
                            </h3>
                          </div>
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen
                                ? "bg-primary text-white rotate-180"
                                : "bg-primary/10 text-primary"
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
                            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
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

