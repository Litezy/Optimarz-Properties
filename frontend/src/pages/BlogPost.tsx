import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/layouts/PageLayout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  Clock,
  Calendar,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useBlogsStore } from "@/store/blogs.store";
import { blogService } from "@/services/blog.service";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blogs, setBlogs, getBlogBySlug } = useBlogsStore();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch blogs if not already loaded
  useEffect(() => {
    const fetchBlogs = async () => {
      if (blogs.length === 0) {
        setIsLoading(true);
        try {
          const data = await blogService.fetchBlogs();
          setBlogs(data.data);
        } catch (error) {
          console.error("Failed to fetch blogs:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchBlogs();
  }, [blogs.length, setBlogs]);

  const post = getBlogBySlug(slug || "");
  const currentIndex = blogs.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </PageLayout>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
    }
    if (url) window.open(url, "_blank", "width=600,height=400");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const inlineImages = [post.image_1, post.image_2, post.image_3].filter(
    Boolean,
  ) as string[];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const openImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Optimarz Properties Blog</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <PageLayout>
        <div className="py-12 border bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <Button asChild variant="ghost" className="mb-8 ">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8 shadow-lg">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{formatDate(post.createdAt)}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readingTime} min read</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-sm">By {post.author.fullname}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {post.description}
            </p>

            <Separator className="my-8" />

            {/* Content */}
            <div
              className="prose prose-lg max-w-none mb-12 dark:prose-invert 
  prose-headings:text-foreground prose-headings:font-bold 
  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 
  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 
  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 
  prose-strong:text-foreground 
  prose-a:text-primary prose-a:no-underline hover:prose-a:underline 
  prose-li:text-muted-foreground prose-li:mb-2
  prose-ul:my-6 prose-ol:my-6
  prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
  prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto prose-img:max-w-full
  [&_div[style]]:!block [&_div[style]]:!p-0 [&_div[style]]:!m-0 [&_div[style]]:!border-0 [&_div[style]]:!bg-transparent
  [&_table]:!w-full [&_table]:!border-collapse [&_table]:!table
  [&_span[style]]:!inline [&_figure]:!my-4 [&_figure]:!block [&_figure_img]:!my-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Dialog
              open={isImageOpen}
              onOpenChange={(open) => {
                if (!open) closeImage();
                setIsImageOpen(open);
              }}
            >
              <DialogContent className="max-w-5xl w p-0 overflow-hidden bg-transparent shadow-none">
                <div className="relative rounded-3xl overflow-hidden bg-background">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt={`${post.title} full-size preview`}
                      className="h-[80vh] w-full object-contain "
                    />
                  ) : null}
                </div>
              </DialogContent>
            </Dialog>

            <Separator className="my-8" />

            {/* Share Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-xl font-bold">Share this post</h3>
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
                  className="hover:bg-black hover:text-white hover:border-black transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("linkedin")}
                  className="hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-12">
              {previousPost ? (
                <Button
                  asChild
                  variant="outline"
                  className="w-fit px-5 justify-start group"
                >
                  <Link
                    to={`/blog/${previousPost.slug}`}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">
                        Previous
                      </div>
                    </div>
                  </Link>
                </Button>
              ) : (
                <div className="flex-1" />
              )}

              {nextPost ? (
                <Button
                  asChild
                  variant="outline"
                  className="w-fit px-5 justify-end group"
                >
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="flex items-center gap-2"
                  >
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Next</div>
                      {/* <div className="font-medium line-clamp-1">{nextPost.title}</div> */}
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <div className="flex-1" />
              )}
            </div>

            {/* CTA */}
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Interested in Learning More?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with our team to explore investment opportunities and
                discover how Optimarz Properties can help you achieve your land
                investment goals.
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
