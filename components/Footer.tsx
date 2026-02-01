import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto max-w-7xl py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-start mb-6 sm:mb-8 md:mb-10">
          <div className="space-y-4 -mt-2 sm:-mt-4 md:-mt-6 flex flex-col items-center sm:items-start">
            <Image 
              src="/assets/ar-logo.png" 
              alt="A-Root Digital Growth - Digital Marketing Agency Logo" 
              width={256}
              height={256}
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
              loading="lazy"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
              quality={85}
            />
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-foreground">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm md:text-base">
              <li><a href="#" className="hover:text-primary transition-colors inline-block">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block">Content Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block">PPC Advertising</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-foreground">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm md:text-base">
              <li><a href="#" className="hover:text-primary transition-colors inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block">Contact</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-foreground">Geo Specific Offerings</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm md:text-base">
              <li><Link href="/services/seo-services-dubai" className="hover:text-primary transition-colors inline-block">SEO Services in Dubai</Link></li>
              <li><Link href="/services/seo-services-malaysia" className="hover:text-primary transition-colors inline-block">SEO Services in Malaysia</Link></li>
              <li><Link href="/services/digital-services-singapore" className="hover:text-primary transition-colors inline-block">Digital Services in Singapore</Link></li>
              <li><Link href="/services/digital-services-new-york-city" className="hover:text-primary transition-colors inline-block">Digital Services in New York City</Link></li>
              <li><Link href="/services/digital-services-pune" className="hover:text-primary transition-colors inline-block">Digital Services in Pune</Link></li>
              <li><Link href="/services/seo-services-pune" className="hover:text-primary transition-colors inline-block">SEO Services in Pune</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              {/* Phone Number */}
              <a 
                href="tel:+917498826065 " 
                className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>+91 7498826065</span>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:info@arootdigital.com" 
                className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start text-muted-foreground hover:text-primary transition-colors text-sm md:text-base break-all"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>info@arootdigital.com</span>
              </a>
              
              {/* Social Media Links */}
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start pt-2">
              <a href="https://facebook.com/arootdigital" aria-label="Visit our Facebook page" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors flex-shrink-0">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a href="https://instagram.com/arootdigital" aria-label="Visit our Instagram profile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors flex-shrink-0">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a href="https://linkedin.com/company/arootdigital" aria-label="Visit our LinkedIn company page" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors flex-shrink-0">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a href="https://twitter.com/arootdigital" aria-label="Visit our Twitter profile" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors flex-shrink-0">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              </div>
            </div>
            </div>
          </div>
        </div>

      {/* Purple Footer Section - Full Width */}
      <div className="bg-gradient-primary text-white pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10 w-full text-center text-xs sm:text-sm md:text-base">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <p className="mb-3 text-white/90">&copy; 2025 ARoot Digital. All rights reserved.</p>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Link href="/privacy-policy" className="text-white/90 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/50">|</span>
            <Link href="/terms-conditions" className="text-white/90 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;