import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources - LandWise</title>
        <meta name="description" content="Access valuable resources, guides, and tools for land investment success." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up">
              Access our comprehensive collection of resources, guides, and tools designed to help 
              you make informed land investment decisions.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resources;
