"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone, Search, Share2, FileText, MousePointerClick, AppWindow, BarChart, ChevronDown, Briefcase, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServicesDropdown from "@/components/ServicesDropdown";
import PortfolioDropdown from "@/components/PortfolioDropdown";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [servicesDropdownTimeout, setServicesDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [portfolioDropdownTimeout, setPortfolioDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const phoneNumber = "+91 9561964239 ";
  const phoneNumberTel = "+919561964239"; // Format for tel: link

  // Determine if we're on homepage based on pathname
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Handle hash navigation when landing on homepage with hash
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [isHomePage]);

  const handleLogoClick = () => {
    // Always refresh the page when clicking the logo
    window.location.href = '/';
  };

  const scrollToSection = (sectionId: string, isRoute?: boolean) => {
    // Handle route navigation (like Blog)
    if (isRoute) {
      router.push(`/${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    // If not on homepage, navigate to homepage first, then scroll
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

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
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Our Work", id: "portfolio" },
    { label: "Industry", id: "industry" },
    { label: "Blog", id: "blog", isRoute: true }
  ];

  return (
    <nav
      aria-label="Main navigation"
      role="navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            aria-label="Go to home"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Image
                src="/assets/ar-logo.png"
                alt="A-Root Digital Growth Logo"
                width={120}
                height={120}
                priority
                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain transition-all duration-300"
              />
            </div>
            <span className="font-bold text-base sm:text-lg hidden sm:block text-foreground">
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 relative h-full">
            {navLinks.map((link) => {
              if (link.id === "services") {
                return (
                  <div
                    key={link.id}
                    className="relative h-full"
                    onMouseEnter={() => {
                      // Clear any pending timeout
                      if (servicesDropdownTimeout) {
                        clearTimeout(servicesDropdownTimeout);
                        setServicesDropdownTimeout(null);
                      }
                      setIsServicesDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      setIsServicesDropdownOpen(false);
                    }}
                  >
                    <button
                      data-services-button
                      className="font-semibold text-base md:text-lg transition-colors hover:text-primary-accent flex items-center gap-1 relative group h-full text-foreground"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 md:w-5 md:h-5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                        isServicesDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'
                      } bg-primary`}></span>
                    </button>
                    <ServicesDropdown
                      isOpen={isServicesDropdownOpen}
                      onClose={() => {
                        if (servicesDropdownTimeout) {
                          clearTimeout(servicesDropdownTimeout);
                          setServicesDropdownTimeout(null);
                        }
                        setIsServicesDropdownOpen(false);
                      }}
                    />
                  </div>
                );
              }
              if (link.id === "portfolio") {
                return (
                  <div
                    key={link.id}
                    className="relative h-full"
                    onMouseEnter={() => {
                      // Clear any pending timeout
                      if (portfolioDropdownTimeout) {
                        clearTimeout(portfolioDropdownTimeout);
                        setPortfolioDropdownTimeout(null);
                      }
                      setIsPortfolioDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      setIsPortfolioDropdownOpen(false);
                    }}
                  >
                    <button
                      data-portfolio-button
                      className="font-semibold text-base md:text-lg transition-colors hover:text-primary-accent flex items-center gap-1 relative group h-full text-foreground"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 md:w-5 md:h-5 transition-transform duration-200 ${isPortfolioDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                        isPortfolioDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'
                      } bg-primary`}></span>
                    </button>
                    <PortfolioDropdown
                      isOpen={isPortfolioDropdownOpen}
                      onClose={() => {
                        if (portfolioDropdownTimeout) {
                          clearTimeout(portfolioDropdownTimeout);
                          setPortfolioDropdownTimeout(null);
                        }
                        setIsPortfolioDropdownOpen(false);
                      }}
                    />
                  </div>
                );
              }
              return (
              <button
                key={link.id}
                  onClick={() => scrollToSection(link.id, link.isRoute)}
                  className="font-semibold text-base md:text-lg transition-colors hover:text-primary-accent relative group h-full text-foreground"
              >
                {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 bg-primary"></span>
              </button>
              );
            })}
            {/* Phone Number */}
            <Button
              asChild
              className="bg-gradient-primary text-white hover:opacity-90 font-semibold text-base md:text-lg px-6 py-2.5 md:py-3 flex items-center gap-2"
            >
              <a
                href={`tel:${phoneNumberTel}`}
                aria-label={`Call ${phoneNumber}`}
              >
                <Phone className="w-5 h-5 md:w-5 md:h-5" />
                <span className="hidden xl:inline">{phoneNumber}</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary text-white hover:opacity-90 font-semibold text-base md:text-lg px-6 py-2.5 md:py-3"
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
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden absolute top-24 md:top-28 left-0 right-0 bg-background shadow-2xl border-t-2 border-primary-accent/20 animate-fade-in z-50 max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-7rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                if (link.id === "services") {
                  return (
                    <div key={link.id} className="space-y-2">
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="block w-full text-left font-semibold text-lg text-foreground hover:text-primary-accent hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-3 flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <span className={`text-xl transform transition-transform ${isServicesDropdownOpen ? 'rotate-90' : ''}`}>›</span>
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                          {[
                            { icon: Search, title: "Search Engine Optimization", slug: "search-engine-optimization" },
                            { icon: Share2, title: "Digital Marketing", slug: "digital-marketing" },
                            { icon: AppWindow, title: "App Marketing", slug: "app-marketing" },
                            { icon: FileText, title: "Content Marketing", slug: "content-marketing" },
                            { icon: MousePointerClick, title: "PPC/Paid Marketing", slug: "ppc-paid-marketing" },
                            { icon: BarChart, title: "MarTech / Data Analytics", slug: "martech-data-analytics" },
                          ].map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsServicesDropdownOpen(false);
                                }}
                                className="block w-full text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-2 flex items-center gap-2"
                              >
                                <IconComponent className="w-4 h-4" />
                                <span>{service.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                if (link.id === "portfolio") {
                  return (
                    <div key={link.id} className="space-y-2">
                      <button
                        onClick={() => setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen)}
                        className="block w-full text-left font-semibold text-lg text-foreground hover:text-primary-accent hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-3 flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <span className={`text-xl transform transition-transform ${isPortfolioDropdownOpen ? 'rotate-90' : ''}`}>›</span>
                      </button>
                      {isPortfolioDropdownOpen && (
                        <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                          {[
                            { icon: Briefcase, title: "Portfolio", id: "portfolio" },
                            { icon: MessageSquare, title: "Testimonials", id: "testimonials" },
                          ].map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <button
                                key={item.id}
                                onClick={() => {
                                  scrollToSection(item.id);
                                  setIsMobileMenuOpen(false);
                                  setIsPortfolioDropdownOpen(false);
                                }}
                                className="block w-full text-left text-sm text-muted-foreground hover:text-primary hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-2 flex items-center gap-2"
                              >
                                <IconComponent className="w-4 h-4" />
                                <span>{item.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                <button
                  key={link.id}
                    onClick={() => scrollToSection(link.id, link.isRoute)}
                  className="block w-full text-left font-semibold text-lg text-foreground hover:text-primary-accent hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-3"
                >
                  {link.label}
                </button>
                );
              })}
              {/* Phone Number */}
              <Button
                asChild
                className="w-full bg-gradient-primary text-white hover:opacity-90 font-semibold py-6 rounded-lg shadow-lg flex items-center gap-3 justify-center"
              >
                <a
                  href={`tel:${phoneNumberTel}`}
                  aria-label={`Call ${phoneNumber}`}
                >
                  <Phone className="w-5 h-5" />
                  <span>{phoneNumber}</span>
                </a>
              </Button>
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