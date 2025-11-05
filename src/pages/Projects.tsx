import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - LandWise</title>
        <meta name="description" content="Explore our curated land projects and investment opportunities across prime locations." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up">
              Discover our carefully curated land investment projects across premium locations. 
              Each project is selected for its unique potential and investment value.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
