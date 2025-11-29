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
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isRocketAnimating, setIsRocketAnimating] = useState(false);

  // Cycle through services with rocket animation
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    const cycleServices = () => {
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
    };

    // Start cycling after initial delay
    const initialDelay = setTimeout(() => {
      intervalId = setInterval(cycleServices, 3000); // Change every 3 seconds
    }, 2000);

    return () => {
      clearTimeout(initialDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 sm:pt-20 md:pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-lighter/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-4xl w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2 sm:px-0">
                Transform Your Digital Presence
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary-accent/90 font-light px-2 sm:px-0">
                Expert digital marketing solutions that drive growth, engagement, and success
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4 w-full sm:w-auto px-2 sm:px-0">
              <Button 
                size="lg" 
                className="bg-primary-accent text-primary hover:bg-primary-accent/90 text-sm sm:text-base md:text-lg font-semibold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full transition-all hover:scale-105 w-full sm:w-auto"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-2 border-primary-accent hover:bg-primary-accent/10 text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-3.5 sm:py-4 md:py-5 lg:py-6 rounded-full transition-all hover:scale-105 relative overflow-hidden w-full sm:w-auto min-w-[180px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] max-w-full sm:max-w-[90vw]"
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
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
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

          {/* Right Column - Image */}
          <div className="flex items-center justify-center animate-fade-in order-first lg:order-last" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80" 
                  alt="Digital Growth Illustration" 
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 to-transparent pointer-events-none"></div>
              </div>
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