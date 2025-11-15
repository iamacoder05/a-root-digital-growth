import { Card, CardContent } from "@/components/ui/card";
import { Search, Share2, FileText, MousePointerClick, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with data-driven SEO strategies that deliver measurable results.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms with creative campaigns that convert.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Compelling content that tells your story and resonates with your target audience.",
  },
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description: "Maximize ROI with strategic paid advertising campaigns across Google and social platforms.",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, responsive websites that combine aesthetics with functionality.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Data-driven insights that help you make informed decisions and track your growth.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your unique business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary-accent/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;