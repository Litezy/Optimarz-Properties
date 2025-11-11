import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
          Begin Your Land Ownership Journey
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up">
          Ready to embark on your journey into diverse landscapes and thriving communities of North Texas? 
          Dive into our website to learn more about exciting projects, landmarks, and discover 
          the endless possibilities that await you. Whether you're seeking investment opportunities, 
          recreational retreats, or simply a place to call home, we have something for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link to="/waitlist">Join the VIP Waitlist</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-white text-primary hover:bg-white/10"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
