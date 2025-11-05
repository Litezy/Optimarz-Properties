import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-white">
          {post.category}
        </Badge>
      </div>

      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Button asChild variant="outline" className="w-full">
          <Link to={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
