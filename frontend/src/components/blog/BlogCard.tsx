import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/types/admin.types";
import { BlogImage } from "@/components/blog/BlogImage";

interface BlogCardProps {
  post: Blog;
  auth?: boolean
}

export const BlogCard = ({ post, auth = false }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group bg-card border-border">
      <Link to={auth ? `/admin/edit-blog?id=${post.id}` : `/blogs/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-56 overflow-hidden bg-muted">
          <BlogImage
            src={post.featuredImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors uppercase leading-tight">
            {post.title}
          </h2>

          <p className="text-muted-foreground mb-4 leading-relaxed flex-grow line-clamp-3">
            {post.description}
          </p>

          <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
            {auth ? 'Edit Blog' : ' Read More'}
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  );
};
