"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Rocket, Sparkles, Zap } from "lucide-react";
import { validateEmail, validatePhone, validateName, formatPhoneNumber } from "@/lib/validation";
import { submitForm as submitFormAPI, checkRateLimit, sendAutoReply } from "@/lib/formSubmission";

interface ChatMessage {
  type: "bot" | "user";
  message: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [hasInteractedInSession, setHasInteractedInSession] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      message: "Hello! I'm RAYA, your digital growth assistant. 👋\n\nI'd love to help you get started. What's your name?",
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    services: [] as string[],
    message: "",
  });
  const [userInput, setUserInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    services?: string;
  }>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableServices = [
    "Search Engine Optimization",
    "Digital Marketing",
    "App Marketing",
    "Content Marketing",
    "Meta and Performance Marketing",
    // "MarTech / Data Analytics",
    "Web Design and Development",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, currentStep]);

  // Show welcome message after component mounts (only if user hasn't interacted in this session)
  useEffect(() => {
    if (!hasInteractedInSession) {
      const timer = setTimeout(() => {
        setShowWelcomeMessage(true);
      }, 1500); // Show after 1.5 seconds for quick loading

      return () => clearTimeout(timer);
    }
  }, [hasInteractedInSession]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    setUserInput("");
    setMessages((prev) => [...prev, { type: "user", message: userMessage }]);

    // Process based on current step
    setTimeout(() => {
      processBotResponse(userMessage);
    }, 500);
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => {
      const currentServices = prev.services;
      const isSelected = currentServices.includes(service);
      
      let updatedServices: string[];
      if (isSelected) {
        // Remove service if already selected
        updatedServices = currentServices.filter((s) => s !== service);
      } else {
        // Add service if not selected
        updatedServices = [...currentServices, service];
      }
      
      return { ...prev, services: updatedServices };
    });
  };

  const handleContinueAfterServices = () => {
    // Read current services from state
    const currentServices = formData.services;
    
    const servicesError = validateServicesField(currentServices);
    if (servicesError) {
      setFieldErrors((prev) => ({ ...prev, services: servicesError }));
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          message: `❌ ${servicesError}\n\nPlease select at least one service to continue.`,
        },
      ]);
      return;
    }
    
    setFieldErrors((prev) => ({ ...prev, services: undefined }));
    setShowServiceOptions(false);
    setCurrentStep(4);
    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        message: `Excellent choices! 🚀\n\nSelected: ${currentServices.join(", ")}\n\nIs there anything specific you'd like to tell us about your project? (You can type "skip" if you prefer)`,
      },
    ]);
  };

  // Validation functions
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

  const validatePhoneField = (phone: string, countryCode: string = "+1"): string | undefined => {
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
    
    // Combine country code with phone for comprehensive validation
    const fullPhone = `${countryCode}${digits}`;
    const result = validatePhone(fullPhone);
    return result.isValid ? undefined : result.error;
  };

  const validateServicesField = (services: string[]): string | undefined => {
    if (services.length === 0) {
      return "Please select at least one service.";
    }
    return undefined;
  };

  const processBotResponse = (userMessage: string) => {
    switch (currentStep) {
      case 0: // Name
        const nameError = validateNameField(userMessage);
        if (nameError) {
          setFieldErrors((prev) => ({ ...prev, name: nameError }));
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              message: `❌ ${nameError}\n\nPlease provide a valid name.`,
            },
          ]);
          return;
        }
        setFieldErrors((prev) => ({ ...prev, name: undefined }));
        setFormData((prev) => ({ ...prev, name: userMessage }));
        setCurrentStep(1);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: `Nice to meet you, ${userMessage}! 😊\n\nWhat's your email address? (Optional - you can type "skip" if you prefer)`,
          },
        ]);
        break;

      case 1: // Email
        if (userMessage.toLowerCase().trim() === "skip") {
          setFormData((prev) => ({ ...prev, email: "" }));
          setFieldErrors((prev) => ({ ...prev, email: undefined }));
          setCurrentStep(2);
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              message: "No problem! Now, what's your phone number? (Please include country code, e.g., +91 6789012345)",
            },
          ]);
          return;
        }
        
        const emailError = validateEmailField(userMessage);
        if (emailError) {
          setFieldErrors((prev) => ({ ...prev, email: emailError }));
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              message: `❌ ${emailError}\n\nPlease provide a valid email address or type "skip" to continue without email.`,
            },
          ]);
          return;
        }
        setFieldErrors((prev) => ({ ...prev, email: undefined }));
        setFormData((prev) => ({ ...prev, email: userMessage }));
        setCurrentStep(2);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: "Great! Now, what's your phone number?\n\n📱 Requirements:\n• Must include country code (e.g., +91)\n• Must be exactly 10 digits (excluding country code)\n• Cannot start with 1, 2, 3, 4, or 5\n\nExample: +91 6789012345",
          },
        ]);
        break;

      case 2: // Phone
        const phoneError = validatePhoneField(userMessage, formData.countryCode);
        if (phoneError) {
          setFieldErrors((prev) => ({ ...prev, phone: phoneError }));
          setMessages((prev) => [
            ...prev,
            {
              type: "bot",
              message: `❌ ${phoneError}\n\n📱 Please provide a valid phone number:\n• Must include country code (e.g., +91)\n• Must be exactly 10 digits (excluding country code)\n• Cannot start with 1, 2, 3, 4, or 5\n\nExample: +91 6789012345`,
            },
          ]);
          return;
        }
        setFieldErrors((prev) => ({ ...prev, phone: undefined }));
        setFormData((prev) => ({ ...prev, phone: userMessage }));
        setCurrentStep(3);
        setShowServiceOptions(true);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: "Perfect! Which services are you interested in? Please select one or more services below:",
          },
        ]);
        break;

      case 3: // Services - handled by handleServiceSelect
        // This case is now handled by button clicks
        break;

      case 4: // Message
        if (userMessage.toLowerCase() !== "skip") {
          setFormData((prev) => ({ ...prev, message: userMessage }));
        }
        setCurrentStep(5);
        submitForm();
        break;
    }
  };

  const parseServices = (input: string): string[] => {
    const lowerInput = input.toLowerCase().trim();
    if (lowerInput === "all") {
      return availableServices;
    }

    const numbers = input
      .split(/[,\s]+/)
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n) && n >= 1 && n <= availableServices.length);

    return numbers.map((n) => availableServices[n - 1]);
  };

  const submitForm = async () => {
    // Validate all fields before submission
    const nameError = validateNameField(formData.name);
    const emailError = validateEmailField(formData.email);
    const phoneError = validatePhoneField(formData.phone, formData.countryCode);
    const servicesError = validateServicesField(formData.services);

    const errors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      services: servicesError,
    };

    setFieldErrors(errors);

    // If there are any errors (except email which is optional), don't submit
    if (nameError || phoneError || servicesError) {
      const errorMessages = [];
      if (nameError) errorMessages.push(`Name: ${nameError}`);
      if (phoneError) errorMessages.push(`Phone: ${phoneError}`);
      if (servicesError) errorMessages.push(`Services: ${servicesError}`);
      
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          message: `❌ Please fix the following errors:\n\n${errorMessages.join("\n")}\n\nPlease provide the correct information.`,
        },
      ]);
      return;
    }

    setIsSubmitting(true);
    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        message: "Perfect! Let me send your details to our team... 🚀",
      },
    ]);

    try {
      // Check rate limit
      const rateLimitCheck = checkRateLimit();
      if (!rateLimitCheck.allowed) {
        const resetTime = rateLimitCheck.resetTime!;
        const minutes = Math.ceil((resetTime - Date.now()) / (60 * 1000));
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: `⏰ Too many submissions. Please try again in ${minutes} minute${minutes !== 1 ? 's' : ''}.`,
          },
        ]);
        setIsSubmitting(false);
        return;
      }

      // Format phone number with country code
      const formattedPhone = formatPhoneNumber(formData.phone, formData.countryCode);

      // Submit form
      const result = await submitFormAPI({
        name: formData.name,
        email: formData.email || undefined,
        phone: formattedPhone,
        message: formData.message || "",
        selectedServices: formData.services,
      });

      if (!result.success) {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: `❌ ${result.error || "Failed to submit form. Please try again."}`,
          },
        ]);
        setIsSubmitting(false);
        return;
      }

      // Send auto-reply email if email is provided
      if (formData.email) {
        await sendAutoReply(formData.email, formData.name);
      }

      setIsSubmitting(false);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          message: `✅ All done! Our team has received your information:\n\n• Name: ${formData.name}\n${formData.email ? `• Email: ${formData.email}\n` : ''}• Phone: ${formData.phone}\n• Services: ${formData.services.join(", ")}\n\nWe'll reach out to you immediately! Thank you for choosing ARoot Digital Growth! 🎉`,
        },
      ]);
      setCurrentStep(6);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          message: "❌ An unexpected error occurred. Please try again.",
        },
      ]);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsOpen(false);
    setTimeout(() => {
      setMessages([
        {
          type: "bot",
          message: "Hello! I'm RAYA, your digital growth assistant. 👋\n\nI'd love to help you get started. What's your name?",
        },
      ]);
      setCurrentStep(0);
      setShowServiceOptions(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+1",
        services: [],
        message: "",
      });
      setUserInput("");
      setFieldErrors({});
    }, 300);
  };

  return (
    <>
      {/* Minimal Welcome Notification */}
      {showWelcomeMessage && !isOpen && (
        <div className="fixed bottom-12 right-20 sm:right-24 z-[9997] animate-slide-up-welcome max-w-xs">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-primary-accent/20 p-3 relative">
            <button
              onClick={() => {
                setShowWelcomeMessage(false);
                setHasInteractedInSession(true);
              }}
              className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
              aria-label="Close"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 pr-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-foreground leading-snug">
                  Hi! 👋 Need help with digital growth?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasInteractedInSession(true);
        }}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary via-primary-light to-primary text-white shadow-2xl hover:shadow-primary-accent/50 transition-all duration-300 flex items-center justify-center group ${
          isOpen ? "scale-90 rotate-90" : "hover:scale-110 hover:rotate-12"
        } relative overflow-hidden border-2 border-white/30 ring-2 sm:ring-4 ring-primary-accent/30`}
        aria-label="Open RAYA"
        style={{ 
          zIndex: 9999,
          position: 'fixed',
          backgroundColor: 'hsl(285, 95%, 20%)'
        }}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-primary-accent/50 rounded-full animate-ping opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-light/90 rounded-full" />
        
        {isOpen ? (
          <X className="w-6 h-6 relative z-10 transition-transform duration-300 text-white drop-shadow-lg" />
        ) : (
          <>
            <Image
              src="/assets/raya-img.webp"
              alt="RAYA"
              width={64}
              height={64}
              className="w-full h-full object-cover relative z-10 transition-transform duration-300 group-hover:scale-110 scale-125"
              style={{ objectPosition: 'center 10%' }}
            />
            {/* Sparkle effect */}
            <Sparkles className="absolute top-0 right-0 w-3 h-3 text-yellow-300 animate-pulse opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-24 z-[9998] w-auto sm:w-96 max-w-full sm:max-w-[calc(100vw-3rem)] h-[60vh] sm:h-[600px] max-h-[60vh] sm:max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-primary-accent/20 animate-slide-up-chat"
        style={{ zIndex: 9998 }}
        >
          {/* Header */}
          <div className="bg-gradient-primary text-white p-3 sm:p-4 flex items-center justify-between relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-accent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center relative group flex-shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                <Image
                  src="/assets/raya-img.webp"
                  alt="RAYA"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover relative z-10 scale-125"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg flex items-center gap-1 sm:gap-2">
                  RAYA
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 animate-pulse flex-shrink-0" />
                </h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  Online
                </p>
              </div>
            </div>
            {currentStep === 6 && (
              <Button
                onClick={handleReset}
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20 relative z-10 transition-all hover:scale-105"
              >
                <Rocket className="w-4 h-4 mr-1" />
                New Chat
              </Button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-message-slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center mr-2 flex-shrink-0 shadow-md overflow-hidden">
                    <Image
                      src="/assets/raya-img.webp"
                      alt="RAYA"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover scale-125"
                      style={{ objectPosition: 'center 10%' }}
                    />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${
                    msg.type === "user"
                      ? "bg-gradient-to-br from-primary-accent to-primary-lighter text-primary rounded-br-sm shadow-lg hover:shadow-xl"
                      : "bg-white text-foreground rounded-bl-sm shadow-md border border-gray-200 hover:border-primary-accent/30"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{msg.message}</p>
                </div>
                {msg.type === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-accent via-primary-lighter to-primary-accent flex items-center justify-center ml-2 flex-shrink-0 shadow-md ring-2 ring-white/50 hover:ring-primary-accent/50 transition-all">
                    {formData.name ? (
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">
                        {formData.name.trim().charAt(0)}
                      </span>
                    ) : (
                      <MessageCircle className="w-4 h-4 text-primary" />
                    )}
                  </div>
                )}
              </div>
            ))}
            {isSubmitting && (
              <div className="flex justify-start animate-message-slide-in">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center mr-2 flex-shrink-0 shadow-md overflow-hidden">
                  <Image
                    src="/assets/raya-img.webp"
                    alt="RAYA"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover animate-pulse scale-125"
                    style={{ objectPosition: 'center 10%' }}
                  />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-5 py-3 shadow-md border border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-primary-accent rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                    <div className="w-2.5 h-2.5 bg-primary-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2.5 h-2.5 bg-primary-accent rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </div>
            )}
            
            {/* Service Selection Options */}
            {showServiceOptions && (
              <div className="space-y-3 animate-message-slide-in">
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((service) => {
                    const isSelected = formData.services.includes(service);
                    return (
                      <button
                        key={service}
                        onClick={() => handleServiceSelect(service)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-gradient-to-br from-primary-accent to-primary-lighter text-primary shadow-lg ring-2 ring-primary-accent/50"
                            : "bg-white text-foreground border-2 border-gray-200 hover:border-primary-accent/50 hover:shadow-md"
                        }`}
                      >
                        {isSelected && "✓ "}
                        {service}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={handleContinueAfterServices}
                  disabled={formData.services.length === 0}
                  className="w-full px-4 py-3 bg-gradient-to-br from-primary-accent to-primary-lighter text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  Continue with {formData.services.length > 0 ? `${formData.services.length} service${formData.services.length > 1 ? 's' : ''}` : 'selected services'}
                </button>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {currentStep < 6 && !showServiceOptions && (
            <div className="p-3 sm:p-4 border-t-2 border-gray-200 bg-gradient-to-b from-white to-gray-50">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Type your message..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-xl focus:outline-none focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                    disabled={isSubmitting}
                  />
                  {userInput.trim() && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!userInput.trim() || isSubmitting}
                  className="bg-gradient-to-br from-primary-accent to-primary-lighter text-primary hover:from-primary-lighter hover:to-primary-accent px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group flex-shrink-0"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center hidden sm:block">
                Press <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">Enter</kbd> to send
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;

