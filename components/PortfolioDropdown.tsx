"use client";

import { useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Briefcase, MessageSquare, ChevronRight } from "lucide-react";
import { scrollToElement, scrollToElementAfterDelay } from "@/lib/scrollUtils";

interface PortfolioDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const portfolioItems = [
  // {
  //   icon: Briefcase,
  //   title: "Portfolio",
  //   id: "portfolio",
  // },
  {
    icon: MessageSquare,
    title: "Testimonials",
    id: "testimonials",
  },
];

const PortfolioDropdown = ({ isOpen, onClose }: PortfolioDropdownProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        const portfolioButton = document.querySelector('[data-portfolio-button]');
        if (portfolioButton && !portfolioButton.contains(event.target as Node)) {
          onClose();
        }
      }
    };

    if (isOpen) {
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  const handleItemClick = (id: string) => {
    if (pathname !== '/') {
      router.push('/');
      scrollToElementAfterDelay(id, 100);
    } else {
      scrollToElement(id);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-2xl z-50 overflow-hidden"
      style={{
        boxShadow: '0 20px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(90, 13, 115, 0.1)',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <div className="p-2 bg-gradient-to-b from-background to-muted/20">
        <div className="space-y-1">
          {portfolioItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="group w-full p-4 rounded-lg border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card/80 to-card/50 hover:from-card hover:to-card/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden flex items-center gap-3 text-left"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3 w-full">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-primary-light to-primary-accent flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30 flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Title */}
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                    {item.title}
                  </span>
                  
                  {/* Arrow */}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDropdown;

