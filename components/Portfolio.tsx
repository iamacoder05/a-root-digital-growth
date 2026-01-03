"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollToSectionLink from "@/components/ScrollToSectionLink";

const projects = [
  {
    title: "E-Commerce Growth Campaign",
    client: "Fashion Boutique",
    description: "Comprehensive digital marketing strategy resulting in 450% increase in online sales",
    metrics: [
      { label: "Sales Growth", value: "450%" },
      { label: "ROI", value: "320%" },
      { label: "Traffic", value: "+280%" }
    ],
    tags: ["SEO", "PPC", "Social Media"]
  },
  {
    title: "Brand Awareness Campaign",
    client: "Tech Startup",
    description: "Multi-channel campaign that established market presence and generated quality leads",
    metrics: [
      { label: "Brand Reach", value: "2.5M" },
      { label: "Lead Generation", value: "+500%" },
      { label: "Engagement", value: "+380%" }
    ],
    tags: ["Content Marketing", "Social Media", "Influencer"]
  },
  {
    title: "Local SEO Domination",
    client: "Restaurant Chain",
    description: "Local SEO strategy that boosted visibility and foot traffic across 15 locations",
    metrics: [
      { label: "Local Rankings", value: "#1" },
      { label: "Foot Traffic", value: "+65%" },
      { label: "Online Orders", value: "+290%" }
    ],
    tags: ["Local SEO", "GMB", "Reviews"]
  },
  {
    title: "Social Media Transformation",
    client: "Beauty Brand",
    description: "Instagram and TikTok strategy that built a loyal community and drove conversions",
    metrics: [
      { label: "Followers", value: "150K+" },
      { label: "Engagement", value: "12.5%" },
      { label: "Sales", value: "+340%" }
    ],
    tags: ["Instagram", "TikTok", "Influencer"]
  },
  {
    title: "Content Marketing Success",
    client: "B2B SaaS Company",
    description: "Thought leadership content strategy that positioned client as industry authority",
    metrics: [
      { label: "Organic Traffic", value: "+520%" },
      { label: "Lead Quality", value: "+85%" },
      { label: "Conversion Rate", value: "8.2%" }
    ],
    tags: ["Content", "SEO", "Email"]
  },
  {
    title: "PPC Performance Boost",
    client: "Home Services",
    description: "Optimized Google Ads campaigns with improved targeting and bidding strategies",
    metrics: [
      { label: "CPA Reduction", value: "-60%" },
      { label: "Conversions", value: "+410%" },
      { label: "ROAS", value: "580%" }
    ],
    tags: ["Google Ads", "PPC", "Analytics"]
  }
];

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="portfolio" 
      aria-labelledby="portfolio-heading" 
      className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-b from-background via-primary/2 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <h2 id="portfolio-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped our clients achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-700 hover:-translate-y-2 border-primary/10 hover:border-primary-accent/50 overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Gradient Header */}
                <div className="bg-gradient-primary p-6 text-white">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-primary-accent/90 text-sm font-semibold">
                        {project.client}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <TrendingUp className="w-3 h-3 text-primary-accent" />
                          <div className="text-lg md:text-xl font-bold text-primary">
                            {metric.value}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[43px] font-bold text-primary mb-6">
            Ready to become our next success story?
          </p>
          <ScrollToSectionLink
            href="/"
            sectionId="contact"
            className="inline-block bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
          >
            Start Your Project
          </ScrollToSectionLink>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;