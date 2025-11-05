import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - LandWise</title>
        <meta name="description" content="Read the latest insights, news, and updates about land investment and real estate." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl animate-slide-up">
              Stay updated with the latest insights, market trends, and expert advice on land 
              investment and real estate development.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
