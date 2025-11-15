import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Experienced team of digital marketing experts",
  "Proven track record of successful campaigns",
  "Customized strategies for your business goals",
  "Transparent reporting and measurable results",
  "Cutting-edge tools and technologies",
  "Dedicated account management and support"
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary-accent/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose A Root Digital?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just another digital marketing agency. We're your growth partners, 
              committed to understanding your business and delivering results that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience and hundreds of successful campaigns, 
              we combine creativity with data-driven strategies to help your business thrive 
              in the digital landscape.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-primary-accent flex-shrink-0 mt-1" />
                <span className="text-foreground text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;