import { z } from "zod";

/**
 * Comprehensive email validation
 * Validates according to RFC 5322 standard
 */
export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address")
  .refine(
    (email) => {
      // Additional checks for common issues
      const trimmed = email.trim();
      // Check for double @
      if ((trimmed.match(/@/g) || []).length !== 1) return false;
      // Check for valid domain
      const parts = trimmed.split("@");
      if (parts.length !== 2) return false;
      const [local, domain] = parts;
      // Local part should not be empty
      if (!local || local.length === 0) return false;
      // Domain should have at least one dot
      if (!domain.includes(".")) return false;
      // Domain should not start or end with dot
      if (domain.startsWith(".") || domain.endsWith(".")) return false;
      // Check for consecutive dots
      if (domain.includes("..")) return false;
      
      // Split domain into parts
      const domainParts = domain.split(".");
      const tld = domainParts[domainParts.length - 1];
      const domainName = domainParts.slice(0, -1).join(".");
      
      // TLD validation - should be 2-6 characters (common TLD lengths)
      if (!tld || tld.length < 2 || tld.length > 6) return false;
      
      // Check for suspicious TLD patterns (like .commm, .comcom, etc.)
      // Common valid TLDs: com, org, net, edu, gov, co, io, etc.
      // Reject if TLD has repeating characters suspiciously (like mmm, comcom)
      const tldLower = tld.toLowerCase();
      if (tldLower.length > 3) {
        // Check for suspicious patterns
        // If TLD is longer than 3 chars and has repeating patterns, it's likely invalid
        // Examples: commm, comcom, netnet
        if (/(.)\1{2,}/.test(tldLower)) {
          // Has 3+ repeating characters
          return false;
        }
        // Check if TLD looks like a common TLD repeated (commm = com + mm)
        const commonTlds = ['com', 'org', 'net', 'edu', 'gov', 'co', 'io', 'me', 'us', 'uk', 'in', 'au', 'de', 'fr', 'jp', 'cn'];
        for (const commonTld of commonTlds) {
          if (tldLower.startsWith(commonTld) && tldLower.length > commonTld.length + 1) {
            // Looks like common TLD with extra characters (commm, comcom, etc.)
            return false;
          }
        }
      }
      
      // Domain name should not be empty
      if (!domainName || domainName.length === 0) return false;
      
      // Check for invalid characters in domain
      if (!/^[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)*$/.test(domain)) {
        return false;
      }
      
      return true;
    },
    {
      message: "Please enter a valid email address (e.g., name@example.com)",
    }
  )
  .transform((email) => email.trim().toLowerCase());

/**
 * Comprehensive phone number validation
 * Supports international formats
 */
export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .refine(
    (phone) => {
      // Remove all non-digit characters except + for country code
      const cleaned = phone.replace(/[\s\-\(\)\.]/g, "");
      
      // Check if it starts with + (international format)
      if (cleaned.startsWith("+")) {
        // International format: + followed by 7-10 digits
        const digits = cleaned.substring(1);
        if (!/^\d{7,10}$/.test(digits)) {
          return false;
        }
      } else {
        // National format: 7-10 digits
        if (!/^\d{7,10}$/.test(cleaned)) {
          return false;
        }
      }
      return true;
    },
    {
      message: "Please enter a valid phone number (7-10 digits)",
    }
  )
  .refine(
    (phone) => {
      // Extract digits only
      const digits = phone.replace(/\D/g, "");
      if (digits.length === 0) return false;
      
      // Check if all digits are the same (e.g., 1111111, 2222222)
      const firstDigitChar = digits[0];
      if (digits.split("").every((d) => d === firstDigitChar)) {
        return false;
      }
      
      // Check for repeating patterns (e.g., 12121212, 123123123)
      if (digits.length >= 6) {
        // Check for simple repeating patterns
        for (let patternLength = 1; patternLength <= Math.floor(digits.length / 2); patternLength++) {
          const pattern = digits.substring(0, patternLength);
          const repetitions = Math.floor(digits.length / patternLength);
          const repeatedPattern = pattern.repeat(repetitions);
          if (repeatedPattern === digits.substring(0, repeatedPattern.length)) {
            return false; // Found repeating pattern
          }
        }
      }
      
      // Check for sequential patterns (e.g., 1234567, 9876543)
      if (digits.length >= 6) {
        let isSequential = true;
        let isReverseSequential = true;      
        
        for (let i = 1; i < digits.length; i++) {
          const current = parseInt(digits[i]);
          const previous = parseInt(digits[i - 1]);
          
          // Check ascending sequence        
          if (current !== previous + 1 && current !== 0 && previous !== 9) {
            isSequential = false;
          }
          
          // Check descending sequence       
          if (current !== previous - 1 && current !== 9 && previous !== 0) {
            isReverseSequential = false;     
          }
          
          // If both fail, break early       
          if (!isSequential && !isReverseSequential) {
            break;
          }
        }
        
        if (isSequential || isReverseSequential) {
          return false; // Sequential pattern detected
        }
      }
      
      // Check for too many zeros (e.g., 0000000, 1000000)
      const zeroCount = (digits.match(/0/g) || []).length;
      if (zeroCount > digits.length * 0.7) { 
        return false; // More than 70% zeros 
      }
      
      // Check for invalid starting digits (some countries don't allow certain starting digits)  
      // This is a basic check - can be expanded based on country
      const firstDigitNum = parseInt(digits[0]);
      if (digits.length >= 10 && firstDigitNum === 0) {
        // Most countries don't start with 0 in international format
        return false;
      }
      
      return true;
    },
    {
      message: "Phone number appears to be invalid. Please check and try again.",
    }
  );

/**
 * Name validation schema
 */
export const nameSchema = z
  .string()
  .min(1, "Name is required")
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name must be less than 100 characters")
  .refine(
    (name) => {
      const trimmed = name.trim();
      // Should contain at least one letter
      return /[a-zA-Z]/.test(trimmed);
    },
    {
      message: "Name must contain at least one letter",
    }
  )
  .transform((name) => name.trim());

/**
 * Services validation schema
 */
export const servicesSchema = z
  .array(z.string())
  .min(1, "Please select at least one service");

/**
 * Complete contact form validation schema
 */
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
  selectedServices: servicesSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validate email format
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  try {
    emailSchema.parse(email);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, error: error.errors[0].message };
    }
    return { isValid: false, error: "Invalid email address" };
  }
}

/**
 * Validate phone number format
 */
export function validatePhone(phone: string): { isValid: boolean; error?: string } {
  try {
    phoneSchema.parse(phone);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, error: error.errors[0].message };
    }
    return { isValid: false, error: "Invalid phone number" };
  }
}

/**
 * Validate name format
 */
export function validateName(name: string): { isValid: boolean; error?: string } {
  try {
    nameSchema.parse(name);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, error: error.errors[0].message };
    }
    return { isValid: false, error: "Invalid name" };
  }
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string, countryCode: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");
  
  // If phone already includes country code, return as is
  if (phone.startsWith("+")) {
    return phone;
  }
  
  // Add country code if not present
  const code = countryCode.replace("+", "");
  return `+${code}${digits}`;
}

