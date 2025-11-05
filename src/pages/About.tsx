import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - LandWise</title>
        <meta name="description" content="Learn about LandWise and our mission to provide premier land investment opportunities." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Us</h1>
            <div className="max-w-3xl space-y-6 animate-slide-up">
              <p className="text-xl text-muted-foreground">
                At LandWise, we are dedicated to helping investors discover and acquire prime land 
                opportunities. With years of expertise in real estate and land development, we provide 
                comprehensive guidance throughout your investment journey.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team carefully curates each project, ensuring that every opportunity meets our 
                high standards for quality, potential, and value. We believe in transparency, 
                integrity, and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
