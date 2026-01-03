"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Share2,
  FileText,
  MousePointerClick,
  AppWindow,
  BarChart,
  ChevronRight,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    description: "Boost your search rankings with data-driven SEO strategies.",
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing solutions across all channels.",
  },
  {
    icon: AppWindow,
    title: "App Marketing",
    slug: "app-marketing",
    description: "Get your app discovered, downloaded, and used.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Compelling content that tells your story and resonates.",
  },
  {
    icon: MousePointerClick,
    title: "PPC/Paid Marketing",
    slug: "ppc-paid-marketing",
    description: "Maximize ROI with strategic paid advertising campaigns.",
  },
  {
    icon: BarChart,
    title: "MarTech / Data Analytics",
    slug: "martech-data-analytics",
    description: "Data-driven insights and marketing technology solutions.",
  },
  {
    icon: Palette,
    title: "Web Design and Development",
    slug: "web-design",
    description: "Stunning, user-friendly websites that convert visitors.",
  },
];

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesDropdown = ({ isOpen, onClose }: ServicesDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Check if click is not on the Services button or its parent
        const servicesButton = document.querySelector('[data-services-button]');
        if (servicesButton && !servicesButton.contains(event.target as Node)) {
          onClose();
        }
      }
    };

    if (isOpen) {
      // Add slight delay before adding click listener to prevent immediate close
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-7xl bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
      style={{
        boxShadow: '0 20px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(90, 13, 115, 0.1)',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      {/* Services Grid with enhanced design */}
      <div className="p-3 md:p-4 lg:p-5 bg-gradient-to-b from-background to-muted/20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-7 gap-2 md:gap-3 lg:gap-3 xl:gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={onClose}
                className="group relative p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card/80 to-card/50 hover:from-card hover:to-card/90 transition-all duration-300 hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with enhanced design */}
                  <div className="relative mb-2 md:mb-3 lg:mb-3">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary via-primary-light to-primary-accent flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1.5 md:mb-2 text-sm md:text-base leading-tight">
                    {service.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-2 md:mb-2.5 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs md:text-sm font-semibold">Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;

