import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Helmet } from "react-helmet";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

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
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Stay updated with the latest insights, market trends, and expert advice on land 
                investment and real estate development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
