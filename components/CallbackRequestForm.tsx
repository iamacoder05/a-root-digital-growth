"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight, ChevronDown, Rocket, AlertCircle } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { submitForm, checkRateLimit, sendAutoReply } from "@/lib/formSubmission";
import { validateEmail, validatePhone, validateName, formatPhoneNumber } from "@/lib/validation";

interface CallbackRequestFormProps {
  serviceName: string;
}

const CallbackRequestForm = ({ serviceName }: CallbackRequestFormProps) => {
  const router = useRouter();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showRocketAnimation, setShowRocketAnimation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});
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

  // Validation functions
  const validatePhoneField = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Please enter your phone number.";
    }
    
    // Extract only digits
    const digits = phone.replace(/\D/g, "");
    
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
    
    // Combine country code with phone for comprehensive validation
    const fullPhone = `${selectedCountryCode}${digits}`;
    const result = validatePhone(fullPhone);
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

  const validateNameField = (name: string): string | undefined => {
    const result = validateName(name);
    return result.isValid ? undefined : result.error;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
    // Get form data from state
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = ""; // No message field in callback form

    // Validate fields
    const nameError = validateNameField(name);
    const emailError = validateEmailField(email); // Email is optional
    const phoneError = validatePhoneField(phone);

    setFieldErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
    });

    // If there are any errors (except email which is optional), don't submit
    if (nameError || phoneError) {
      setError("Please fix the errors below before submitting.");
      setIsSubmitting(false);
      return;
    }

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
        serviceName,
      });

      if (!result.success) {
        setError(result.error || "Failed to submit form. Please try again.");
        setIsSubmitting(false);
      return;
    }

      // Send auto-reply email only if email is provided
      if (email.trim()) {
        await sendAutoReply(email, name);
      }

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

          {/* Phone */}
          <div>
            <label htmlFor="callback-phone" className="block text-xs font-medium mb-1 text-foreground">
              Phone <span className="text-primary">*</span>
            </label>
            <div className="flex gap-1.5 items-stretch w-full">
              {/* Country Code Selector */}
              <div className="relative flex-shrink-0" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex items-center justify-center gap-0.5 px-1.5 py-2 rounded border border-border bg-background hover:bg-muted/50 focus:outline-none focus:border-primary transition-colors h-full w-[60px]"
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
                  <ChevronDown className={`w-2.5 h-2.5 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
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
              <div className="relative flex-1 min-w-0">
                <input
                  id="callback-phone"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  name="phone"
                  required
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    // Allow only numeric digits (no alphabets, spaces, dashes, etc.)
                    const value = e.target.value.replace(/\D/g, '');
                    setFormData(prev => ({ ...prev, phone: value }));
                  }}
                  onBlur={(e) => {
                    const error = validatePhoneField(e.target.value);
                    setFieldErrors(prev => ({ ...prev, phone: error }));
                  }}
                  className={`w-full px-2 py-2 text-xs rounded border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    fieldErrors.phone
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-border focus:border-primary'
                  }`}
                />
              </div>
            </div>
            {fieldErrors.phone && (
              <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>
            )}
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
              value={formData.name}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, name: e.target.value }));
              }}
              onBlur={(e) => {
                const error = validateNameField(e.target.value);
                setFieldErrors(prev => ({ ...prev, name: error }));
              }}
              className={`w-full px-2 py-2 text-xs rounded border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                fieldErrors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-border focus:border-primary'
              }`}
            />
            {fieldErrors.name && (
              <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="callback-email" className="block text-xs font-medium mb-1 text-foreground">
              Email
            </label>
            <input
              id="callback-email"
              type="email"
              placeholder="your@email.com (Optional)"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, email: e.target.value }));
              }}
              onBlur={(e) => {
                const error = validateEmailField(e.target.value);
                setFieldErrors(prev => ({ ...prev, email: error }));
              }}
              className={`w-full px-2 py-2 text-xs rounded border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                fieldErrors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-border focus:border-primary'
              }`}
            />
            {fieldErrors.email && (
              <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
            )}
          </div>


          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded text-destructive text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded transition-all hover:scale-105 shadow hover:shadow-primary/25 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>Submitting...</>
            ) : (
              <>Request Callback <ArrowRight className="ml-1 h-3 w-3" /></>
            )}
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
