"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Search,
  Share2,
  FileText,
  MousePointerClick,
  AppWindow,
  BarChart,
  ChevronLeft,
  ChevronRight,
  Palette,
  MessageSquare,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Share2,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing solutions that drive growth across all online channels.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    description: "Boost your search rankings with data-driven SEO strategies that deliver measurable results.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Strategic social media marketing that builds brands and drives real engagement.",
  },
  {
    icon: MousePointerClick,
    title: "Meta and Performance Marketing",
    slug: "ppc-paid-marketing",
    description: "Maximize ROI with strategic paid advertising campaigns across Google and social platforms.",
  },
  {
    icon: Palette,
    title: "Web Design and Development",
    slug: "web-design",
    description: "Stunning, user-friendly websites that convert visitors into customers.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Compelling content that tells your story and resonates with your target audience.",
  },
  {
    icon: AppWindow,
    title: "App Marketing",
    slug: "app-marketing",
    description: "Get your app discovered, downloaded, and used by the right audience.",
  },
  // {
  //   icon: BarChart,
  //   title: "MarTech / Data Analytics",
  //   slug: "martech-data-analytics",
  //   description: "Data-driven insights and marketing technology solutions that power your growth.",
  // },
];

const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    // Adjust scroll amount based on screen size
    const isMobile = window.innerWidth < 768;
    const amount = direction === "left" ? (isMobile ? -150 : -320) : (isMobile ? 150 : 320);
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section 
      ref={ref}
      id="services" 
      aria-labelledby="services-heading" 
      className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-b from-background via-primary/3 to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-accent/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground px-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive digital marketing solutions tailored to your unique business needs
          </p>
        </div>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          <button
            type="button"
            aria-label="Scroll services left"
            onClick={() => handleScroll("left")}
            className="group flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/90 to-primary-light/90 backdrop-blur-sm border-2 border-white/20 shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 z-10 flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-12 overflow-x-auto scroll-smooth py-8 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide mx-2 md:mx-6 flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {services.map((service, index) => (
              <Link
              key={index}
              href={`/services/${service.slug}`}
                className={`group flex flex-col items-center min-w-[120px] md:min-w-[160px] max-w-[140px] md:max-w-[180px] flex-shrink-0 snap-center transition-all duration-700 hover:-translate-y-3 cursor-pointer ${
                  service.title === 'Digital Marketing' ? '-ml-2 md:-ml-3' : ''
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-accent rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Icon container */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary via-primary-light to-primary-accent rounded-3xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <service.icon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <h3 className="text-sm md:text-base font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300 leading-tight px-1">
                  {service.title}
                </h3>

                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-primary-accent rounded-full group-hover:w-12 transition-all duration-500 mt-2"></div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll services right"
            onClick={() => handleScroll("right")}
            className="group flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/90 to-primary-light/90 backdrop-blur-sm border-2 border-white/20 shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 z-10 flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;