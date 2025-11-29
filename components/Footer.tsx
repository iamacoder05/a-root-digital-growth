import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Footer" className="bg-white text-foreground py-8 sm:py-10 md:py-12 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-start mb-6 sm:mb-8 md:mb-10">
          <div className="space-y-4 -mt-2 sm:-mt-4 md:-mt-6 flex flex-col items-center sm:items-start">
            <Image 
              src="/assets/ar-logo.png" 
              alt="A-Root Digital Growth - Digital Marketing Agency Logo" 
              width={320} 
              height={320} 
              loading="lazy"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
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
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start mb-2">
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

        <div className="border-t border-border pt-6 sm:pt-8 md:pt-10 text-center text-muted-foreground text-xs sm:text-sm md:text-base">
          <p>&copy; 2025 ARoot Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;