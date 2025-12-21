"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Phone, Search, Share2, FileText, MousePointerClick, Palette, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServicesDropdown from "@/components/ServicesDropdown";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [servicesDropdownTimeout, setServicesDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const phoneNumber = "+91 12345 67890";
  const phoneNumberTel = "+911234567890"; // Format for tel: link

  // Determine if we're on homepage based on pathname
  const isHomePage = pathname === '/';
  
  // Check if we're at the top of the page (for homepage transparency effect)
  const shouldShowTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Blog", id: "blog", isRoute: true },
    { label: "Testimonials", id: "testimonials" }
  ];

  return (
    <nav
      aria-label="Main navigation"
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowTransparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-lg shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            aria-label="Go to home"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              {/* Enhanced white background layers for better visibility - only on homepage hero */}
              {shouldShowTransparent && (
                <>
                  <div className="absolute inset-0 transition-all duration-300 bg-white/50 blur-2xl rounded-full scale-125" />
                  <div className="absolute inset-0 transition-all duration-300 bg-white/35 blur-xl rounded-full scale-115" />
                </>
              )}
              <Image
                src="/assets/ar-logo.png"
                alt="A-Root Digital Growth Logo"
                width={96}
                height={96}
                priority
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-all duration-300 ${
                  shouldShowTransparent
                    ? "drop-shadow-[0_0_40px_rgba(255,255,255,1),0_0_80px_rgba(255,255,255,0.8),0_0_120px_rgba(255,255,255,0.6)] filter brightness-125 contrast-125"
                    : "drop-shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.6)] filter brightness-115 contrast-115"
                }`}
              />
            </div>
            <span className={`font-bold text-base sm:text-lg hidden sm:block ${shouldShowTransparent ? "text-white" : "text-foreground"}`}>
              ARoot Digital
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
                      // Add delay before closing
                      const timeout = setTimeout(() => {
                        setIsServicesDropdownOpen(false);
                      }, 300); // 300ms delay
                      setServicesDropdownTimeout(timeout);
                    }}
                  >
                    <button
                      data-services-button
                      onClick={(e) => {
                        e.preventDefault();
                        // Only toggle dropdown, don't navigate
                        setIsServicesDropdownOpen(!isServicesDropdownOpen);
                      }}
                      className={`font-semibold transition-colors hover:text-primary-accent flex items-center gap-1 relative group h-full ${
                        shouldShowTransparent ? "text-white" : "text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                        isServicesDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'
                      } ${
                        shouldShowTransparent ? 'bg-white' : 'bg-primary'
                      }`}></span>
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
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id, link.isRoute)}
                  className={`font-semibold transition-colors hover:text-primary-accent relative group h-full ${
                    shouldShowTransparent ? "text-white" : "text-foreground"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 ${
                    shouldShowTransparent ? 'bg-white' : 'bg-primary'
                  }`}></span>
                </button>
              );
            })}
            {/* Phone Number */}
            <Button
              asChild
              className="bg-gradient-primary text-white hover:opacity-90 font-semibold px-6 flex items-center gap-2"
            >
              <a
                href={`tel:${phoneNumberTel}`}
                aria-label={`Call ${phoneNumber}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{phoneNumber}</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
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
            className={`lg:hidden ${shouldShowTransparent ? "text-white" : "text-foreground"}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden absolute top-20 left-0 right-0 bg-background shadow-2xl border-t-2 border-primary-accent/20 animate-fade-in z-50 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                if (link.id === "services") {
                  return (
                    <div key={link.id} className="space-y-2">
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="block w-full text-left font-semibold text-foreground hover:text-primary-accent hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-3 flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <span className={`transform transition-transform ${isServicesDropdownOpen ? 'rotate-90' : ''}`}>›</span>
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="pl-4 space-y-2 border-l-2 border-primary/20">
                          {[
                            { icon: Search, title: "SEO Optimization", slug: "seo-optimization" },
                            { icon: Share2, title: "Social Media Marketing", slug: "social-media-marketing" },
                            { icon: FileText, title: "Content Marketing", slug: "content-marketing" },
                            { icon: MousePointerClick, title: "PPC Advertising", slug: "ppc-advertising" },
                            { icon: Palette, title: "Web Design", slug: "web-design" },
                            { icon: TrendingUp, title: "Analytics & Insights", slug: "analytics-insights" },
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
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id, link.isRoute)}
                    className="block w-full text-left font-semibold text-foreground hover:text-primary-accent hover:bg-primary-accent/10 transition-all duration-200 rounded-lg px-4 py-3"
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