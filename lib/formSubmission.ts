/**
 * Form Submission Utility
 * Handles rate limiting, auto-reply, and lead email notifications
 * (CAPTCHA commented out for now)
 */

interface FormSubmissionData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  serviceName?: string;
  selectedServices?: string[];
}

interface RateLimitData {
  count: number;
  resetTime: number;
}

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_SUBMISSIONS_PER_WINDOW = 3; // Max 3 submissions per hour

/**
 * Check if user has exceeded rate limit
 */
export function checkRateLimit(): { allowed: boolean; resetTime: number | null } {
  if (typeof window === 'undefined') {
    return { allowed: true, resetTime: null };
  }

  const storageKey = 'form_submission_rate_limit';
  const stored = localStorage.getItem(storageKey);
  
  if (!stored) {
    return { allowed: true, resetTime: null };
  }

  try {
    const data: RateLimitData = JSON.parse(stored);
    const now = Date.now();

    // If reset time has passed, clear the data
    if (now > data.resetTime) {
      localStorage.removeItem(storageKey);
      return { allowed: true, resetTime: null };
    }

    // Check if limit exceeded
    if (data.count >= MAX_SUBMISSIONS_PER_WINDOW) {
      const resetTime = new Date(data.resetTime);
      return { 
        allowed: false, 
        resetTime: data.resetTime 
      };
    }

    return { allowed: true, resetTime: data.resetTime };
  } catch (error) {
    // If parsing fails, clear and allow
    localStorage.removeItem(storageKey);
    return { allowed: true, resetTime: null };
  }
}

/**
 * Record a form submission for rate limiting
 */
export function recordSubmission(): void {
  if (typeof window === 'undefined') return;

  const storageKey = 'form_submission_rate_limit';
  const stored = localStorage.getItem(storageKey);
  const now = Date.now();

  let data: RateLimitData;

  if (stored) {
    try {
      data = JSON.parse(stored);
      // If reset time has passed, start fresh
      if (now > data.resetTime) {
        data = { count: 1, resetTime: now + RATE_LIMIT_WINDOW };
      } else {
        data.count += 1;
      }
    } catch (error) {
      data = { count: 1, resetTime: now + RATE_LIMIT_WINDOW };
    }
  } else {
    data = { count: 1, resetTime: now + RATE_LIMIT_WINDOW };
  }

  localStorage.setItem(storageKey, JSON.stringify(data));
}

/**
 * Simple client-side CAPTCHA verification
 * For production, integrate with Google reCAPTCHA v3 or hCaptcha
 * COMMENTED OUT FOR NOW
 */
// export async function verifyCaptcha(): Promise<boolean> {
//   // TODO: Integrate with Google reCAPTCHA v3 or hCaptcha
//   // For now, return true (implement actual CAPTCHA in production)
//   
//   // Example: Google reCAPTCHA v3 integration
//   // const token = await window.grecaptcha.execute('YOUR_SITE_KEY', { action: 'submit' });
//   // const response = await fetch('/api/verify-captcha', { method: 'POST', body: JSON.stringify({ token }) });
//   // return response.ok;
//   
//   return true;
// }

/**
 * Format time remaining until rate limit resets
 */
export function formatTimeRemaining(resetTime: number): string {
  const now = Date.now();
  const remaining = resetTime - now;
  const minutes = Math.ceil(remaining / (60 * 1000));
  
  if (minutes <= 0) return 'now';
  if (minutes === 1) return '1 minute';
  return `${minutes} minutes`;
}

/**
 * Submit form data to API route (Vercel serverless function)
 * Handles Resend email and HubSpot CRM integration
 */
export async function submitForm(data: FormSubmissionData): Promise<{ success: boolean; error?: string }> {
  try {
    // Check rate limit first
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      const timeRemaining = formatTimeRemaining(rateLimitCheck.resetTime!);
      return {
        success: false,
        error: `Too many submissions. Please try again in ${timeRemaining}.`
      };
    }

    // Verify CAPTCHA - COMMENTED OUT FOR NOW
    // const captchaValid = await verifyCaptcha();
    // if (!captchaValid) {
    //   return {
    //     success: false,
    //     error: 'CAPTCHA verification failed. Please try again.'
    //   };
    // }

    // Submit to Vercel API route
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return {
        success: false,
        error: result.error || 'Failed to submit form. Please try again later.'
      };
    }

    // Record submission for rate limiting
    recordSubmission();

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: 'Failed to submit form. Please try again later.'
    };
  }
}

/**
 * Send auto-reply email to user
 * This is now handled by the API route (Resend)
 */
export async function sendAutoReply(email: string, name: string): Promise<void> {
  // Auto-reply is now handled server-side in the API route
  // No need to call separately as it's included in submitForm
}

