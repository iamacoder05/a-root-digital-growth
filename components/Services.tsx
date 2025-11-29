"use client";

import { useRef } from "react";
import {
  Search,
  Share2,
  FileText,
  MousePointerClick,
  Palette,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with data-driven SEO strategies that deliver measurable results.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms with creative campaigns that convert.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Compelling content that tells your story and resonates with your target audience.",
  },
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description: "Maximize ROI with strategic paid advertising campaigns across Google and social platforms.",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, responsive websites that combine aesthetics with functionality.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Data-driven insights that help you make informed decisions and track your growth.",
  },
];

const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    // Adjust scroll amount based on screen size
    const isMobile = window.innerWidth < 768;
    const amount = direction === "left" ? (isMobile ? -150 : -320) : (isMobile ? 150 : 320);
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
       
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground px-4">
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
              <div
              key={index}
                className="group flex flex-col items-center min-w-[120px] md:min-w-[160px] max-w-[140px] md:max-w-[180px] flex-shrink-0 snap-center transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
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
              </div>
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