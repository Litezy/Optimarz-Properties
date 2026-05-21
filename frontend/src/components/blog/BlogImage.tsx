import { ImgHTMLAttributes, useEffect, useState } from "react";
import fallbackBlogImage from "@/assets/blog-1.jpg";
import { cn } from "@/lib/utils";

interface BlogImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string | null;
  fallbackSrc?: string;
}

export const BlogImage = ({
  src,
  alt,
  className,
  fallbackSrc = fallbackBlogImage,
  loading = "lazy",
  decoding = "async",
  ...props
}: BlogImageProps) => {
  const resolvedSrc = src?.trim() ? src : fallbackSrc;
  const [imageSrc, setImageSrc] = useState(resolvedSrc);
  const [isUsingFallback, setIsUsingFallback] = useState(resolvedSrc === fallbackSrc);

  useEffect(() => {
    const nextSrc = src?.trim() ? src : fallbackSrc;
    setImageSrc(nextSrc);
    setIsUsingFallback(nextSrc === fallbackSrc);
  }, [fallbackSrc, src]);

  const handleError = () => {
    if (!isUsingFallback) {
      setImageSrc(fallbackSrc);
      setIsUsingFallback(true);
    }
  };

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      className={cn("bg-muted", className)}
    />
  );
};
