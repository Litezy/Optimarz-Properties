import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Optimarz Properties</title>
        <meta name="description" content="Learn about Optimarz Properties and our mission to provide premier land investment opportunities." />
      </Helmet>
      <PageLayout>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About us</h1>
            <div className="max-w-3xl space-y-6 animate-slide-up">
              <p className="text-xl text-muted-foreground">
                At Optimarz Properties, we are dedicated to helping investors discover and acquire prime land 
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
        </div>
      </PageLayout>
    </>
  );
};

export default About;
