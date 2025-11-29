import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
              className="hover:shadow-xl transition-all duration-300 border-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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