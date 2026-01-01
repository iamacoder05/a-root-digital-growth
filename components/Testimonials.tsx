"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc",
    content: "ARoot Digital transformed our online presence completely. Our website traffic increased by 300% and conversions are through the roof!",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthCo",
    content: "The team's expertise in SEO and content marketing is unmatched. They've become an invaluable extension of our marketing team.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, StyleHub",
    content: "Professional, responsive, and results-driven. Our social media engagement has never been better. Highly recommend!",
    rating: 5
  }
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="testimonials" 
      aria-labelledby="testimonials-heading" 
      className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-b from-background via-primary/3 to-background border-b border-border/50"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`hover:shadow-xl transition-all duration-700 border-primary/10 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-accent text-primary-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;