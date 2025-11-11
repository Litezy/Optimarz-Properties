import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";

const SummerProgram = () => {
  return (
    <>
      <Helmet>
        <title>Summer Program - Optimarz Properties</title>
        <meta name="description" content="Join our exclusive summer program to learn about land investment and explore opportunities." />
      </Helmet>
      <PageLayout>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Summer program</h1>
            <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up">
              Join our exclusive summer program and immerse yourself in the world of land investment. 
              Learn from experts and discover unique opportunities.
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default SummerProgram;
