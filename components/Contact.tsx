import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 px-4 bg-gradient-hero text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-primary-accent/90">
              Let's discuss how we can help you achieve your digital marketing goals
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-accent/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-primary-accent/80">info@arootdigital.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-accent/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-primary-accent/80">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-primary-accent/80">123 Digital Avenue, Marketing City</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold">Get a Free Consultation</h3>
            
            <form className="space-y-4" aria-label="Contact form">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your email address"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                aria-label="Your phone number"
                name="phone"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors"
              />
              <textarea
                placeholder="Tell us about your project"
                aria-label="Project details"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-accent transition-colors resize-none"
              />
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