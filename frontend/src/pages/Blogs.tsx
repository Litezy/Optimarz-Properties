import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/hero-landscape.jpg";
import { useEffect, useState } from "react";
import { blogService } from "@/services/blog.service";
import { useBlogsStore } from "@/store/blogs.store";
import ApiLoader from "@/components/ApiLoader";

const STALE_TIME = 5 * 60 * 1000;

const Blogs = () => {
  const { blogs, setBlogs, setLastFetched } = useBlogsStore();
  const [isLoading, setIsLoading] = useState(false);

  const fetchIfStale = async () => {
    const { lastFetched } = useBlogsStore.getState();
    if (lastFetched && Date.now() - lastFetched < STALE_TIME) return;
    setIsLoading(true);
    try {
      const data = await blogService.fetchBlogs();
      setBlogs(data.data);
      setLastFetched(Date.now());
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIfStale();

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') fetchIfStale();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);
  return (
    <>
      <Helmet>
        <title>Land Investment Blog | North Texas Real Estate Insights | Optimarz</title>
        <meta name="description" content="Expert insights on Texas land investing, North Texas market trends, and land acquisition strategies. Read the latest from the Optimarz Properties team." />
        <meta name="keywords" content="Texas land investment blog, North Texas real estate insights, land investing tips Texas, Bonham TX real estate news, Gainesville TX land market, Texas land market trends, land investment strategies, North Texas property market" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optimarzproperties.com/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optimarz Properties" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://optimarzproperties.com/blogs" />
        <meta property="og:title" content="Land Investment Blog | North Texas Real Estate Insights | Optimarz" />
        <meta property="og:description" content="Expert insights on Texas land investing, North Texas market trends, and land acquisition strategies from the Optimarz Properties team." />
        <meta property="og:image" content="https://optimarzproperties.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Land Investment Blog | North Texas Real Estate Insights | Optimarz" />
        <meta name="twitter:description" content="Expert insights on Texas land investing, North Texas market trends, and land acquisition strategies from the Optimarz Properties team." />
        <meta name="twitter:image" content="https://optimarzproperties.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": "https://optimarzproperties.com/blogs",
          "url": "https://optimarzproperties.com/blogs",
          "name": "Optimarz Properties Land Investment Blog",
          "description": "Expert insights on Texas land investing, North Texas market trends, and land acquisition strategies.",
          "publisher": {
            "@type": "Organization",
            "name": "Optimarz Properties",
            "url": "https://optimarzproperties.com",
            "logo": { "@type": "ImageObject", "url": "https://optimarzproperties.com/logo.png" }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://optimarzproperties.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://optimarzproperties.com/blogs" }
            ]
          }
        })}</script>
      </Helmet>
      <PageLayout>
        {/* Hero Section */}
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">

          <ApiLoader isLoading={isLoading} message="loading blogs.."/>
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Blogs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
              Blogs
            </h1>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post, index) => (
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

export default Blogs;
