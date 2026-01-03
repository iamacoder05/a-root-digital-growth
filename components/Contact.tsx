"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, ChevronDown, Rocket, AlertCircle, CheckCircle2 } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { submitForm, checkRateLimit, sendAutoReply } from "@/lib/formSubmission";
import { validateEmail, validatePhone, validateName, formatPhoneNumber } from "@/lib/validation";

const Contact = () => {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    services?: string;
  }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [touchedFields, setTouchedFields] = useState<{
    name: boolean;
    email: boolean;
    phone: boolean;
  }>({
    name: false,
    email: false,
    phone: false,
  });
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
    "Search Engine Optimization",
    "Digital Marketing",
    "App Marketing",
    "Content Marketing",
    "PPC/Paid Marketing",
    "MarTech / Data Analytics",
    "Web Design and Development"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
    // Clear services error when user selects a service
    if (fieldErrors.services) {
      setFieldErrors(prev => ({ ...prev, services: undefined }));
    }
  };

  // Validation functions using proper validation library
  const validateNameField = (name: string): string | undefined => {
    const result = validateName(name);
    return result.isValid ? undefined : result.error;
  };

  const validateEmailField = (email: string): string | undefined => {
    // Email is optional, only validate if provided
    if (!email.trim()) {
      return undefined; // No error if empty
    }
    const result = validateEmail(email);
    return result.isValid ? undefined : result.error;
  };

  const validatePhoneField = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Please enter your phone number.";
    }
    
    // Remove spaces, dashes, parentheses for validation
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, "");
    
    // Extract only digits
    const digits = cleaned.replace(/\D/g, "");
    
    // Check if empty after removing non-digits
    if (digits.length === 0) {
      return "Phone number must contain only numeric digits.";
    }
    
    // Check exact length (10 digits excluding country code)
    if (digits.length !== 10) {
      return "Phone number must be exactly 10 digits (excluding country code).";
    }
    
    // Check if starts with invalid digits (1, 2, 3, 4, or 5)
    const firstDigit = parseInt(digits[0]);
    if (firstDigit >= 1 && firstDigit <= 5) {
      return "Phone number cannot start with 1, 2, 3, 4, or 5.";
    }
    
    // If phone already has country code (starts with +), validate as is
    if (cleaned.startsWith("+")) {
      const result = validatePhone(cleaned);
      return result.isValid ? undefined : result.error;
    }
    
    // Combine country code with phone for comprehensive validation
    const fullPhone = `${selectedCountryCode}${digits}`;
    const result = validatePhone(fullPhone);
    return result.isValid ? undefined : result.error;
  };

  const validateServicesField = (services: string[]): string | undefined => {
    if (services.length === 0) {
      return "Please select at least one service.";
    }
    return undefined;
  };

  // Handle field blur (when user leaves field)
  const handleBlur = (fieldName: 'name' | 'email' | 'phone', value: string) => {
    setTouchedFields(prev => ({ ...prev, [fieldName]: true }));
    
    let error: string | undefined;
    switch (fieldName) {
      case 'name':
        error = validateNameField(value);
        break;
      case 'email':
        error = validateEmailField(value);
        break;
      case 'phone':
        error = validatePhoneField(value);
        break;
    }
    
    setFieldErrors(prev => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  // Handle field change (real-time validation)
  const handleFieldChange = (fieldName: 'name' | 'email' | 'phone', value: string) => {
    // Only validate if field has been touched
    if (touchedFields[fieldName]) {
      let error: string | undefined;
      switch (fieldName) {
        case 'name':
          error = validateNameField(value);
          break;
        case 'email':
          error = validateEmailField(value);
          break;
        case 'phone':
          error = validatePhoneField(value);
          break;
      }
      
      setFieldErrors(prev => ({
        ...prev,
        [fieldName]: error,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    // Get form data
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value || "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value || "";
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value || "";
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || "";

    // Mark all fields as touched
    setTouchedFields({
      name: true,
      email: true,
      phone: true,
    });

    // Validate all fields using proper validation
    const nameError = validateNameField(name);
    const emailError = validateEmailField(email); // Email is optional
    const phoneError = validatePhoneField(phone);
    const servicesError = validateServicesField(selectedServices);

    const errors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      services: servicesError,
    };

    setFieldErrors(errors);

    // If there are any errors (except email which is optional), don't submit
    if (nameError || phoneError || servicesError) {
      setError("Please fix the errors below before submitting.");
      return;
    }

    setIsSubmitting(true);
    
    try {

      // Check rate limit
      const rateLimitCheck = checkRateLimit();
      if (!rateLimitCheck.allowed) {
        const resetTime = rateLimitCheck.resetTime!;
        const minutes = Math.ceil((resetTime - Date.now()) / (60 * 1000));
        setError(`Too many submissions. Please try again in ${minutes} minute${minutes !== 1 ? 's' : ''}.`);
        setIsSubmitting(false);
      return;
    }

      // Format phone number with country code
      const formattedPhone = formatPhoneNumber(phone, selectedCountryCode);

      // Submit form with rate limiting and email notifications (CAPTCHA commented out for now)
      const result = await submitForm({
        name,
        email,
        phone: formattedPhone,
        message,
        selectedServices,
      });

      if (!result.success) {
        setError(result.error || "Failed to submit form. Please try again.");
        setIsSubmitting(false);
      return;
    }

      // Send auto-reply email
      await sendAutoReply(email, name);

    // All validations passed - show rocket animation
    setShowRocketAnimation(true);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      router.push("/thank-you");
    }, 2000);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-8 md:py-12 lg:py-16 px-3 sm:px-4 bg-gradient-hero text-white relative overflow-hidden">
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
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start lg:items-center">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in">
            <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Ready to Grow Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-accent/90">
              Let's discuss how we can help you achieve your digital marketing goals
            </p>
            
            <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-2 sm:pt-4">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-xs sm:text-sm md:text-base text-white">Email Us</div>
                  <div className="text-primary-accent/80 text-xs sm:text-sm break-all">info@arootdigital.com</div>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-xs sm:text-sm md:text-base text-white">Call Us</div>
                  <div className="text-primary-accent/80 text-xs sm:text-sm break-all">+91 9561964239</div>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-xs sm:text-sm md:text-base text-white">Visit Us</div>
                  <div className="text-primary-accent/80 text-xs sm:text-sm break-words">123 Digital Avenue, Marketing City</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Get a Free Consultation</h3>
            
            <form ref={formRef} className="space-y-3 sm:space-y-4" aria-label="Contact form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white">
                  Your Phone <span className="text-primary-accent">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* Country Code Selector */}
                  <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 py-2.5 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15 focus:outline-none focus:border-primary-accent transition-colors w-full sm:min-w-[110px] sm:w-auto"
                      aria-label="Select country code"
                    >
                      <ReactCountryFlag
                        countryCode={getCountryCode(selectedCountryCode)}
                        svg
                        style={{
                          width: '1.25em',
                          height: '1.25em',
                        }}
                        title={selectedCountryCode}
                        className="flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm">{selectedCountryCode}</span>
                      <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform flex-shrink-0 ml-auto sm:ml-0 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown */}
                    {isCountryDropdownOpen && (
                      <div className="absolute z-50 mt-1 w-full sm:w-64 max-h-60 overflow-hidden rounded-lg bg-white border border-gray-200 shadow-xl flex flex-col">
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
                              className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors ${
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
                              <span className={`text-xs sm:text-sm ${
                                selectedCountryCode === country.code ? 'text-primary font-semibold' : 'font-medium text-foreground'
                              }`}>{country.code}</span>
                              <span className={`text-xs ml-auto truncate ${
                                selectedCountryCode === country.code ? 'text-primary' : 'text-muted-foreground'
                              }`}>{country.name}</span>
                                </button>
                              ))
                            ) : (
                              <div className="px-3 py-4 text-center text-xs sm:text-sm text-muted-foreground">
                                No countries found
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Phone Input */}
                  <div className="relative flex-1">
              <input
                    id="phone"
                type="tel"
                      placeholder="Enter 10-digit mobile number"
                aria-label="Your phone number"
                name="phone"
                    required
                      inputMode="numeric"
                      maxLength={10}
                      onBlur={(e) => handleBlur('phone', e.target.value)}
                      onChange={(e) => {
                        // Allow only numeric digits (no alphabets, spaces, dashes, etc.)
                        const value = e.target.value.replace(/\D/g, '');
                        e.target.value = value;
                        handleFieldChange('phone', value);
                      }}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base rounded-lg bg-white/10 border text-white placeholder:text-white/60 focus:outline-none transition-colors ${
                        touchedFields.phone
                          ? fieldErrors.phone
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-green-400 focus:border-green-400'
                          : 'border-white/20 focus:border-primary-accent'
                      }`}
                    />
                    {touchedFields.phone && !fieldErrors.phone && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" />
                    )}
                    {touchedFields.phone && fieldErrors.phone && (
                      <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                    )}
                </div>
                </div>
                {touchedFields.phone && fieldErrors.phone && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white">
                  Your Name <span className="text-primary-accent">*</span>
                </label>
                <div className="relative">
              <input
                  id="name"
                type="text"
                placeholder="Your Name"
                aria-label="Your name"
                name="name"
                required
                    onBlur={(e) => handleBlur('name', e.target.value)}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base rounded-lg bg-white/10 border text-white placeholder:text-white/60 focus:outline-none transition-colors ${
                      touchedFields.name
                        ? fieldErrors.name
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-green-400 focus:border-green-400'
                        : 'border-white/20 focus:border-primary-accent'
                    }`}
                  />
                  {touchedFields.name && !fieldErrors.name && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" />
                  )}
                  {touchedFields.name && fieldErrors.name && (
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                  )}
                </div>
                {touchedFields.name && fieldErrors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white">
                  Your Email
                </label>
                <div className="relative">
              <input
                  id="email"
                type="email"
                placeholder="Your Email (Optional)"
                aria-label="Your email address"
                name="email"
                    onBlur={(e) => handleBlur('email', e.target.value)}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, email: e.target.value }));
                      handleFieldChange('email', e.target.value);
                    }}
                    value={formData.email}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base rounded-lg bg-white/10 border text-white placeholder:text-white/60 focus:outline-none transition-colors ${
                      touchedFields.email
                        ? fieldErrors.email
                          ? 'border-red-400 focus:border-red-400'
                          : formData.email.trim() ? 'border-green-400 focus:border-green-400' : 'border-white/20 focus:border-primary-accent'
                        : 'border-white/20 focus:border-primary-accent'
                    }`}
                  />
                  {touchedFields.email && !fieldErrors.email && formData.email.trim() && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" />
                  )}
                  {touchedFields.email && fieldErrors.email && (
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                  )}
                </div>
                {touchedFields.email && fieldErrors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-white">
                  Which services are you interested in? Please select one or more services below: <span className="text-primary-accent">*</span>
                </label>
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 ${fieldErrors.services ? 'border-2 border-red-400 rounded-lg p-2' : ''}`}>
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 cursor-pointer p-2 sm:p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 rounded border-white/30 bg-white/10 text-primary-accent focus:ring-primary-accent focus:ring-2 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-white break-words">{service}</span>
                    </label>
                  ))}
                </div>
                {fieldErrors.services && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {fieldErrors.services}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-white">
                  Tell us about your project
                </label>
              <textarea
                  id="message"
                placeholder="Tell us about your project"
                aria-label="Project details"
                name="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors resize-none"
              />
              </div>
              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-destructive/20 border border-destructive/40 rounded-lg text-white text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-accent text-primary hover:bg-primary-accent/90 text-base sm:text-lg font-semibold py-4 sm:py-5 md:py-6 rounded-full transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>Send Message <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;