import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-landscape.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Optimarz Properties
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Are you ready to explore rich land opportunities? Dive into prime locations 
          with our comprehensive guide to land investment and exploration. Your gateway 
          to discovering hidden gems, historical landmarks, and promising projects.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-lg px-8"
        >
          <Link to="/about">About Us</Link>
        </Button>
      </div>
    </section>
  );
};
