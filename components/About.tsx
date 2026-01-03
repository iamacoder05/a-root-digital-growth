"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "Experienced team of digital marketing experts",
  "Proven track record of successful campaigns",
  "Customized strategies for your business goals",
  "Transparent reporting and measurable results",
  "Cutting-edge tools and technologies",
  "Dedicated account management and support"
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      ref={ref}
      id="about" 
      aria-labelledby="about-heading" 
      className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-br from-primary/5 via-primary-accent/5 to-primary/3"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose ARoot Digital?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just another digital marketing agency. We're your growth partners, 
              committed to understanding your business and delivering results that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience and hundreds of successful campaigns, 
              we combine creativity with data-driven strategies to help your business thrive 
              in the digital landscape.
            </p>
          </div>

          <div 
            className={`group/journey relative transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Static Journey Path Line - Base path that appears on hover */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/10 transition-opacity duration-500 group-hover/journey:opacity-100 opacity-30"></div>
            
            {/* Animated Journey Path on Hover - Progresses through items */}
            {hoveredIndex !== null && (
              <>
                <div 
                  className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-primary via-primary-accent to-primary transition-all duration-700 ease-out"
                  style={{
                    height: `${((hoveredIndex + 1) / benefits.length) * 100}%`,
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.3)',
                  }}
                />
                {/* Animated dot traveling along the path */}
                <div 
                  className="absolute left-5 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-700 ease-out"
                  style={{
                    top: `${((hoveredIndex + 1) / benefits.length) * 100}%`,
                    transform: 'translateY(-50%)',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
              </>
            )}

            <div className="space-y-4 relative z-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`group/item relative flex items-start gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  } ${
                    hoveredIndex === index 
                      ? 'bg-gradient-to-r from-primary/10 via-primary/5 to-background/50 shadow-xl shadow-primary/20 scale-[1.02] translate-x-3 border border-primary/30' 
                      : 'hover:bg-background/70'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Journey Dot/Node */}
                  <div className="relative flex-shrink-0">
                    {/* Outer pulsing ring */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      hoveredIndex === index 
                        ? 'bg-primary/40 scale-150 animate-ping' 
                        : 'bg-transparent'
                    }`} style={{ animationDuration: '1.5s' }}></div>
                    
                    {/* Journey node circle */}
                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'bg-gradient-to-br from-primary via-primary-accent to-primary shadow-lg shadow-primary/50 ring-2 ring-primary/50'
                        : 'bg-primary/10 group-hover/item:bg-primary/20'
                    }`}>
                      {/* Check icon with animation */}
                      <CheckCircle2 className={`w-5 h-5 transition-all duration-500 ${
                        hoveredIndex === index
                          ? 'text-white scale-110'
                          : 'text-primary-accent group-hover/item:text-primary scale-100'
                      }`} />
                      
                      {/* Rotating progress ring on active item */}
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/50 animate-spin" style={{ animationDuration: '1.5s' }}></div>
                      )}
                    </div>

                    {/* Connecting line to next item - animates on hover */}
                    {index < benefits.length - 1 && (
                      <div className={`absolute left-1/2 top-full w-0.5 transition-all duration-500 transform -translate-x-1/2 ${
                        hoveredIndex === index
                          ? 'bg-gradient-to-b from-primary via-primary-accent to-primary/50 h-4 opacity-100'
                          : 'bg-primary/20 h-0 opacity-0 group-hover/item:opacity-100 group-hover/item:h-4'
                      }`}></div>
                    )}
                  </div>

                  {/* Benefit Text */}
                  <div className="flex-1 pt-1">
                    <span className={`text-foreground text-lg transition-all duration-500 ${
                      hoveredIndex === index 
                        ? 'text-primary font-semibold' 
                        : 'group-hover/item:text-foreground'
                    }`}>
                      {benefit}
                    </span>
                    
                    {/* Journey progress bar - shows completion percentage */}
                    {hoveredIndex === index && (
                      <div className="mt-3 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary via-primary-accent to-primary rounded-full transition-all duration-800 ease-out"
                          style={{ 
                            width: `${((index + 1) / benefits.length) * 100}%`,
                          }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Shine effect on hover */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-100 pointer-events-none animate-shimmer"></div>
                  )}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;