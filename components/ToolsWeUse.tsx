"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ToolsWeUse = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Logo order based on the provided image (9 logos total, 5 per row)
  const tools = [
    {
      name: "SEMRUSH",
      image: "/assets/semrush.png",
      alt: "SEMRUSH Logo"
    },
    {
      name: "Google Keyword Planner",
      image: "/assets/google-keyword-planner.png",
      alt: "Google Keyword Planner Logo"
    },
    {
      name: "Ubersuggest",
      image: "/assets/ubersuggest.png",
      alt: "Ubersuggest Logo"
    },
    {
      name: "Google Analytics",
      image: "/assets/Google-Analytics-Logo.png",
      alt: "Google Analytics Logo"
    },
    {
      name: "Google Search Console",
      image: "/assets/search console.png",
      alt: "Google Search Console Logo"
    },
    {
      name: "Google Tag Manager",
      image: "/assets/tag manager.png",
      alt: "Google Tag Manager Logo"
    },
    {
      name: "Screaming Frog",
      image: "/assets/scremingfrong.png",
      alt: "Screaming Frog Logo"
    },
    {
      name: "MOZ",
      image: "/assets/moz.png",
      alt: "MOZ Logo"
    },
    {
      name: "ahrefs",
      image: "/assets/ahrefs-logo.png",
      alt: "ahrefs Logo"
    }
  ];

  return (
    <section 
      ref={ref}
      id="tools" 
      aria-labelledby="tools-heading" 
      className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-b from-background via-primary/2 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <h2 id="tools-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tools We Use
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage industry-leading tools to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Logos Grid - 5 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full aspect-square flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-xl border border-border/30 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:-translate-y-1">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <Image
                      src={tool.image}
                      alt={tool.alt}
                      width={120}
                      height={60}
                      className="w-auto h-auto max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: 'transparent',
                        imageRendering: 'auto',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden'
                      }}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsWeUse;

