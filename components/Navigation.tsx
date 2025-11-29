"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Testimonials", id: "testimonials" }
  ];

  return (
    <nav
      aria-label="Main navigation"
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            aria-label="Go to home section"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              {/* Enhanced white background layers for better visibility */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                !isScrolled 
                  ? "bg-white/50 blur-2xl rounded-full scale-125" 
                  : "bg-white/40 blur-xl rounded-full scale-110"
              }`} />
              <div className={`absolute inset-0 transition-all duration-300 ${
                !isScrolled 
                  ? "bg-white/35 blur-xl rounded-full scale-115" 
                  : "bg-white/25 blur-lg rounded-full scale-105"
              }`} />
              <Image 
                src="/assets/ar-logo.png" 
                alt="A-Root Digital Growth Logo" 
                width={96} 
                height={96} 
                priority
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-all duration-300 ${
                  !isScrolled 
                    ? "drop-shadow-[0_0_40px_rgba(255,255,255,1),0_0_80px_rgba(255,255,255,0.8),0_0_120px_rgba(255,255,255,0.6)] filter brightness-125 contrast-125" 
                    : "drop-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.6)] filter brightness-115 contrast-115"
                }`}
              />
            </div>
            <span className={`font-bold text-base sm:text-lg hidden sm:block ${isScrolled ? "text-foreground" : "text-white"}`}>
              ARoot Digital
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors hover:text-primary-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary text-white hover:opacity-90 font-semibold px-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-2xl border-t-2 border-primary-accent/20 animate-fade-in z-50"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left font-semibold text-foreground hover:text-primary-accent hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-3"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-primary text-white hover:opacity-90 font-semibold py-6 rounded-lg shadow-lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;