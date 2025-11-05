import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";

const SummerProgram = () => {
  return (
    <>
      <Helmet>
        <title>Summer Program - LandWise</title>
        <meta name="description" content="Join our exclusive summer program to learn about land investment and explore opportunities." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Summer Program</h1>
            <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up">
              Join our exclusive summer program and immerse yourself in the world of land investment. 
              Learn from experts and discover unique opportunities.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SummerProgram;
