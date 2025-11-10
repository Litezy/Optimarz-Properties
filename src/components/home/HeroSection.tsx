import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-landscape.jpg";
import heroImage2 from "@/assets/hero-landscape-2.jpg";

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Transition */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            currentImage === index
              ? "opacity-100 translate-x-0"
              : index < currentImage
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
          Welcome to Optimarz Properties
        </h1>
        <div className="text-xl max-w-3xl mx-auto mb-8 leading-normal">
          Are you ready to explore rich land opportunities? Dive into prime locations 
          with our comprehensive guide to land investment and exploration. Your gateway 
          to discovering hidden gems, historical landmarks, and promising projects.
        </div>
        <Button 
          asChild 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-lg px-8"
        >
          <Link to="/heritage-bloom">Learn More</Link>
        </Button>
      </div>
    </section>
  );
};
