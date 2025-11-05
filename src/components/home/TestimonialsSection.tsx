import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "LandWise made land investment simple and transparent. They kept me informed and guided me every step of the way. I ended the journey not just with land, but with confidence as an investor.",
    author: "Michael R.",
  },
  {
    id: 2,
    text: "My experience with LandWise was well executed and very informed. The process was smooth, the follow-ups were consistent, and everything was handled with care. Honestly, there was nothing bad to point out, just a positive and reassuring journey.",
    author: "Sarah K.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
          The LandWise Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
