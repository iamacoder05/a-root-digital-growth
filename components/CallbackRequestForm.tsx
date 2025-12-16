"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight, ChevronDown, Rocket } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

interface CallbackRequestFormProps {
  serviceName: string;
}

const CallbackRequestForm = ({ serviceName }: CallbackRequestFormProps) => {
  const router = useRouter();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
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

    // All validations passed - show rocket animation
    setShowRocketAnimation(true);

    // Redirect after 2 seconds
    setTimeout(() => {
      router.push("/thank-you");
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Rocket Animation Overlay */}
      {showRocketAnimation && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-background via-muted/20 to-background/95 backdrop-blur-sm flex items-center justify-center pointer-events-none">
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

      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary-accent rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-3 h-3 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-foreground leading-tight">Request a Callback</h3>
            <p className="text-xs text-muted-foreground leading-tight">Schedule a consultation</p>
          </div>
        </div>

        <form ref={formRef} className="space-y-2" onSubmit={handleSubmit}>
          {/* Service Context */}
          <div className="p-1.5 bg-primary/10 rounded border border-primary/20">
            <div className="flex items-center gap-1 text-xs">
              <Calendar className="w-2.5 h-2.5 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground truncate">Service:</span>
              <span className="text-primary font-semibold truncate ml-1">{serviceName}</span>
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="callback-name" className="block text-xs font-medium mb-1 text-foreground">
              Name <span className="text-primary">*</span>
            </label>
            <input
              id="callback-name"
              type="text"
              placeholder="Your name"
              name="name"
              required
              className="w-full px-2 py-2 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="callback-email" className="block text-xs font-medium mb-1 text-foreground">
              Email <span className="text-primary">*</span>
            </label>
            <input
              id="callback-email"
              type="email"
              placeholder="your@email.com"
              name="email"
              required
              className="w-full px-2 py-2 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="callback-phone" className="block text-xs font-medium mb-1 text-foreground">
              Phone <span className="text-primary">*</span>
            </label>
            <div className="flex gap-1">
              {/* Country Code Selector */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex items-center gap-1 px-2 py-2 rounded border border-border bg-background hover:bg-muted/50 focus:outline-none focus:border-primary transition-colors min-w-[70px]"
                >
                  <ReactCountryFlag
                    countryCode={getCountryCode(selectedCountryCode)}
                    svg
                    style={{
                      width: '0.875em',
                      height: '0.875em',
                    }}
                    title={selectedCountryCode}
                  />
                  <span className="text-xs font-medium">{selectedCountryCode}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                {isCountryDropdownOpen && (
                  <div className="absolute z-50 mt-1 w-48 max-h-48 overflow-hidden rounded-lg bg-background border border-border shadow-xl flex flex-col">
                    {/* Search Input */}
                    <div className="p-1.5 border-b border-border">
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-2 py-1.5 rounded border border-border focus:outline-none focus:border-primary text-xs"
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
                                setSearchQuery("");
                              }}
                              className={`w-full flex items-center gap-1.5 px-2 py-1 rounded transition-colors text-xs ${
                                selectedCountryCode === country.code
                                  ? 'bg-primary/10 border-2 border-primary font-semibold'
                                  : 'hover:bg-muted border-2 border-transparent'
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
                              />
                              <span className="text-sm font-medium">{country.code}</span>
                              <span className="text-sm text-muted-foreground ml-auto">{country.name}</span>
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
                id="callback-phone"
                type="tel"
                placeholder="Phone number"
                name="phone"
                required
                className="flex-1 px-2 py-2 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>


          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-accent hover:from-primary/90 hover:to-primary-accent/90 text-white font-semibold py-2 rounded transition-all hover:scale-105 shadow hover:shadow-primary/25 text-xs"
          >
            Request Callback <ArrowRight className="ml-1 h-3 w-3" />
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-2">
            We'll call you back within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
};

export default CallbackRequestForm;
