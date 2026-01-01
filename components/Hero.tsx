"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const services = [
    "Our Services",
    "SEO Optimization",
    "Social Media Marketing",
    "Content Marketing",
    "PPC Advertising",
    "Web Design",
    "Analytics & Insights"
  ];

  const serviceImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80", // Our Services - general digital growth
    "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&h=600&fit=crop&q=80", // SEO Optimization - search/analytics
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80", // Social Media Marketing - social media screens
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80", // Content Marketing - content creation
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80", // PPC Advertising - advertising/analytics
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&q=80", // Web Design - web design/development
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"  // Analytics & Insights - analytics dashboard
  ];
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isRocketAnimating, setIsRocketAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle through services with rocket animation
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const cycleServices = () => {
      // Only cycle if not hovered
      if (!isHovered) {
        // Start rocket animation
        setIsRocketAnimating(true);

        // Wait for rocket to go up, then change text
        setTimeout(() => {
          setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        }, 300); // Half of rocket animation

        // Reset rocket animation after text change
        setTimeout(() => {
          setIsRocketAnimating(false);
        }, 800); // After text animation completes
      }
    };

    // Start cycling after initial delay
    const initialDelay = setTimeout(() => {
      intervalId = setInterval(cycleServices, 3000); // Change every 3 seconds
    }, 2000);

    return () => {
      clearTimeout(initialDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={serviceImages[0]}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with subtle purple tint - more opaque to reduce color conflicts */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        <div className="flex items-center justify-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fade-in max-w-4xl">
            <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-4xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2 sm:px-0 relative inline-block">
                <span className="relative inline-block">
                Transform Your Digital Presence
                  {/* Animated gradient underline */}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent animate-shimmer"></span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary-accent/90 font-light px-2 sm:px-0">
                Expert digital marketing solutions that drive growth, engagement, and success
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4 w-full sm:w-auto px-2 sm:px-0">
              <Button 
                size="lg" 
                className="bg-primary-accent text-primary hover:bg-primary-accent/90 text-sm sm:text-base md:text-lg font-semibold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full transition-all hover:scale-105 w-full sm:w-auto"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    const offset = 80;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-primary-accent hover:bg-primary-accent/10 text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-3.5 sm:py-4 md:py-5 lg:py-6 rounded-full transition-all hover:scale-105 relative overflow-hidden w-full sm:w-auto min-w-[180px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] max-w-full sm:max-w-[90vw]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  if (servicesSection) {
                    const offset = 80;
                    const elementPosition = servicesSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                <span className="relative flex items-center justify-center w-full gap-1.5 sm:gap-2">
                  {/* Rocket icon */}
                  <Rocket 
                    className={`h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0 transition-all duration-600 ease-in-out ${
                      isRocketAnimating 
                        ? '-translate-y-8 opacity-0 rotate-45 scale-125' 
                        : 'translate-y-0 opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  
                  {/* Text container with sliding effect */}
                  <span className="relative inline-block overflow-hidden h-5 sm:h-5 md:h-6 flex-1 text-center">
                    <span 
                      key={currentServiceIndex}
                      className={`block transition-all duration-500 ease-in-out whitespace-nowrap text-xs sm:text-sm md:text-base ${
                        isRocketAnimating 
                          ? '-translate-y-full opacity-0' 
                          : 'translate-y-0 opacity-100'
                      }`}
                    >
                      {services[currentServiceIndex]}
                    </span>
                  </span>
                </span>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-3 sm:pt-4 md:pt-6 lg:pt-8 w-full max-w-4xl px-2 sm:px-0">
              {[
                { number: "100+", label: "Projects Completed" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "50+", label: "Team Members" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-accent">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 mt-0.5 sm:mt-1 leading-tight px-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rocket Scroll Indicator */}
      <button
        onClick={() => {
          const servicesSection = document.getElementById("services");
          if (servicesSection) {
            const offset = 80;
            const elementPosition = servicesSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-300 cursor-pointer group"
        aria-label="Scroll to services"
      >
        <div className="flex flex-col items-center animate-bounce">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 border border-primary-accent/30 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
            <Rocket 
              className="h-6 w-6 md:h-7 md:w-7 text-primary-accent transition-transform duration-300 group-hover:rotate-12"
            />
            <div className="absolute inset-0 bg-primary-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;