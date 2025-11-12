import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Mail, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[currentIndex];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "email":
        url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Optimarz Properties Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <PageLayout>
        <div className="py-12 bg-muted/30">
          <article className="container mx-auto px-4 max-w-4xl">
            <Button asChild variant="ghost" className="mb-8 hover:bg-muted">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8 shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none mb-12 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Separator className="my-8" />

            {/* Share Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-xl font-bold">Share Post</h3>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("facebook")}
                  className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("twitter")}
                  className="hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("linkedin")}
                  className="hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("email")}
                  className="hover:bg-gray-600 hover:text-white hover:border-gray-600 transition-colors"
                  aria-label="Share via Email"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-12">
              {previousPost ? (
                <Button asChild variant="outline" className="flex-1 justify-start group">
                  <Link to={`/blog/${previousPost.slug}`} className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground mb-1">Previous</div>
                      <div className="font-semibold line-clamp-1">{previousPost.title}</div>
                    </div>
                  </Link>
                </Button>
              ) : (
                <div className="flex-1" />
              )}

              {nextPost ? (
                <Button asChild variant="outline" className="flex-1 justify-end group">
                  <Link to={`/blog/${nextPost.slug}`} className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1">Next</div>
                      <div className="font-semibold line-clamp-1">{nextPost.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <div className="flex-1" />
              )}
            </div>

            {/* CTA */}
            <div className="bg-muted/50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Learning More?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with our team to explore investment opportunities and discover how Optimarz Properties can help you achieve your land investment goals.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </article>
        </div>
      </PageLayout>
    </>
  );
};

export default BlogPost;
