import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/ar-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="A Root Digital" className="w-24 h-24 object-contain" />
            <p className="text-primary-accent/80 text-sm">
              Transforming businesses through innovative digital marketing solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-accent/80 text-sm">
              <li><a href="#" className="hover:text-primary-accent transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Content Marketing</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">PPC Advertising</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-primary-accent/80 text-sm">
              <li><a href="#" className="hover:text-primary-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-accent/20 rounded-full flex items-center justify-center hover:bg-primary-accent/30 transition-colors">
                <Facebook className="w-5 h-5 text-primary-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-accent/20 rounded-full flex items-center justify-center hover:bg-primary-accent/30 transition-colors">
                <Instagram className="w-5 h-5 text-primary-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-accent/20 rounded-full flex items-center justify-center hover:bg-primary-accent/30 transition-colors">
                <Linkedin className="w-5 h-5 text-primary-accent" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-accent/20 rounded-full flex items-center justify-center hover:bg-primary-accent/30 transition-colors">
                <Twitter className="w-5 h-5 text-primary-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-accent/20 pt-8 text-center text-primary-accent/60 text-sm">
          <p>&copy; 2025 A Root Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;