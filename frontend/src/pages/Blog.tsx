import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/hero-landscape.jpg";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Optimarz Properties</title>
        <meta name="description" content="Read the latest insights, news, and updates about land investment and real estate." />
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Blog"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
              Blog
            </h1>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
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
        </div>
      </PageLayout>
    </>
  );
};

export default Blog;
