import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group bg-card border-border">
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-56 overflow-hidden bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors uppercase leading-tight">
            {post.title}
          </h2>

          <p className="text-muted-foreground mb-4 leading-relaxed flex-grow line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  );
};
