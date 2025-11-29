"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, ChevronDown, Rocket } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const Contact = () => {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setSearchQuery(""); // Reset search when closing
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus search input when dropdown opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  // Function to get ISO country code from phone code
  const getCountryCode = (phoneCode: string) => {
    const codeMap: { [key: string]: string } = {
      "+1": "US",
      "+44": "GB", 
      "+91": "IN",
      "+61": "AU",
      "+49": "DE",
      "+33": "FR",
      "+81": "JP",
      "+86": "CN",
      "+971": "AE",
      "+65": "SG",
      "+34": "ES",
      "+39": "IT",
      "+7": "RU",
      "+55": "BR",
      "+52": "MX",
      "+27": "ZA",
      "+82": "KR",
      "+31": "NL",
      "+46": "SE",
      "+41": "CH",
    };
    return codeMap[phoneCode] || "US";
  };

  const countryCodes = [
    { code: "+1", name: "US/CA", iso: "US" },
    { code: "+44", name: "UK", iso: "GB" },
    { code: "+91", name: "India", iso: "IN" },
    { code: "+61", name: "Australia", iso: "AU" },
    { code: "+49", name: "Germany", iso: "DE" },
    { code: "+33", name: "France", iso: "FR" },
    { code: "+81", name: "Japan", iso: "JP" },
    { code: "+86", name: "China", iso: "CN" },
    { code: "+971", name: "UAE", iso: "AE" },
    { code: "+65", name: "Singapore", iso: "SG" },
    { code: "+34", name: "Spain", iso: "ES" },
    { code: "+39", name: "Italy", iso: "IT" },
    { code: "+7", name: "Russia", iso: "RU" },
    { code: "+55", name: "Brazil", iso: "BR" },
    { code: "+52", name: "Mexico", iso: "MX" },
    { code: "+27", name: "South Africa", iso: "ZA" },
    { code: "+82", name: "South Korea", iso: "KR" },
    { code: "+31", name: "Netherlands", iso: "NL" },
    { code: "+46", name: "Sweden", iso: "SE" },
    { code: "+41", name: "Switzerland", iso: "CH" },
  ];

  // Filter countries based on search query
  const filteredCountries = countryCodes.filter((country) => {
    const query = searchQuery.toLowerCase();
    return (
      country.name.toLowerCase().includes(query) ||
      country.code.includes(query) ||
      country.iso.toLowerCase().includes(query)
    );
  });

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "Content Marketing",
    "PPC Advertising",
    "Web Design",
    "Analytics & Insights"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value || "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value || "";
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value || "";
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || "";

    // Validate required fields
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    // All validations passed - show rocket animation
    setShowRocketAnimation(true);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      router.push("/thank-you");
    }, 2000);
  };
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 px-4 bg-gradient-hero text-white relative overflow-hidden">
      {/* Rocket Animation Overlay */}
      {showRocketAnimation && (
        <div className="fixed inset-0 z-[9999] bg-gradient-hero/95 backdrop-blur-sm flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full overflow-hidden">
            {/* Rocket moving from left to right */}
            <Rocket
              className="absolute top-1/2 text-primary-accent rocket-horizontal-animation"
              style={{
                width: '4rem',
                height: '4rem',
              }}
            />
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-primary-accent/90">
              Let's discuss how we can help you achieve your digital marketing goals
            </p>
            
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base">Email Us</div>
                  <div className="text-primary-accent/80 text-xs sm:text-sm break-all">info@arootdigital.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base">Call Us</div>
                  <div className="text-primary-accent/80 text-xs sm:text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-accent" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base">Visit Us</div>
                  <div className="text-primary-accent/80 text-xs sm:text-sm">123 Digital Avenue, Marketing City</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl sm:text-2xl font-bold">Get a Free Consultation</h3>
            
            <form ref={formRef} className="space-y-4" aria-label="Contact form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Your Name <span className="text-primary-accent">*</span>
                </label>
              <input
                  id="name"
                type="text"
                placeholder="Your Name"
                aria-label="Your name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors"
              />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Your Email <span className="text-primary-accent">*</span>
                </label>
              <input
                  id="email"
                type="email"
                placeholder="Your Email"
                aria-label="Your email address"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors"
              />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                  Your Phone <span className="text-primary-accent">*</span>
                </label>
                <div className="flex gap-2">
                  {/* Country Code Selector */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15 focus:outline-none focus:border-primary-accent transition-colors min-w-[100px]"
                      aria-label="Select country code"
                    >
                      <ReactCountryFlag
                        countryCode={getCountryCode(selectedCountryCode)}
                        svg
                        style={{
                          width: '1.5em',
                          height: '1.5em',
                        }}
                        title={selectedCountryCode}
                      />
                      <span className="text-sm">{selectedCountryCode}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown */}
                    {isCountryDropdownOpen && (
                      <div className="absolute z-50 mt-1 w-64 max-h-60 overflow-hidden rounded-lg bg-white border border-gray-200 shadow-xl flex flex-col">
                        {/* Search Input */}
                        <div className="p-2 border-b border-gray-200 sticky top-0 bg-white">
                          <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search country..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-accent text-sm"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        
                        {/* Country List */}
                        <div className="overflow-y-auto max-h-48">
                          <div className="p-2">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountryCode(country.code);
                                    setIsCountryDropdownOpen(false);
                                    setSearchQuery(""); // Reset search when selecting
                                  }}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                                selectedCountryCode === country.code 
                                  ? 'bg-primary-accent/20 border-2 border-primary-accent font-semibold' 
                                  : 'hover:bg-gray-100 border-2 border-transparent'
                              }`}
                            >
                              <ReactCountryFlag
                                countryCode={country.iso}
                                svg
                                style={{
                                  width: '1.25em',
                                  height: '1.25em',
                                }}
                                title={country.name}
                                className="flex-shrink-0"
                              />
                              <span className={`text-sm ${
                                selectedCountryCode === country.code ? 'text-primary font-semibold' : 'font-medium text-foreground'
                              }`}>{country.code}</span>
                              <span className={`text-xs ml-auto ${
                                selectedCountryCode === country.code ? 'text-primary' : 'text-muted-foreground'
                              }`}>{country.name}</span>
                                </button>
                              ))
                            ) : (
                              <div className="px-3 py-4 text-center text-sm text-muted-foreground">
                                No countries found
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Phone Input */}
              <input
                    id="phone"
                type="tel"
                    placeholder="Phone Number"
                aria-label="Your phone number"
                name="phone"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors"
              />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-white">
                  Select Services <span className="text-primary-accent">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 rounded border-white/30 bg-white/10 text-primary-accent focus:ring-primary-accent focus:ring-2"
                      />
                      <span className="text-sm text-white">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Tell us about your project
                </label>
              <textarea
                  id="message"
                placeholder="Tell us about your project"
                aria-label="Project details"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors resize-none"
              />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary-accent text-primary hover:bg-primary-accent/90 text-lg font-semibold py-6 rounded-full transition-all hover:scale-105"
              >
                Send Message <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;