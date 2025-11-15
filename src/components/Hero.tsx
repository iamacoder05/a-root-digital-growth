import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/ar-logo.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-lighter/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 shadow-2xl ring-4 ring-primary-accent/30 hover:ring-primary-accent/50 transition-all duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="A Root Digital" 
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain animate-scale-in drop-shadow-lg"
            />
          </div>
          
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your Digital Presence
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-accent/90 font-light">
              Expert digital marketing solutions that drive growth, engagement, and success
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary-accent text-primary hover:bg-primary-accent/90 text-lg font-semibold px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-2 border-primary-accent hover:bg-primary-accent/10 text-lg font-semibold px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Members" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-accent">{stat.number}</div>
                <div className="text-sm md:text-base text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;