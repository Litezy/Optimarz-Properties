import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BlogImage } from "@/components/blog/BlogImage";

export interface GalleryImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImageItem[];
  title?: string;
  description?: string;
  className?: string;
}

const ImageGallery = ({
  images,
  title = "Gallery",
  description,
  className = "",
}: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);

  return (
    <section className={className}>
      <div className="rounded-3xl border border-border bg-card/70 px-6 py-10 shadow-sm backdrop-blur-sm md:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
          {description ? (
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{description}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group overflow-hidden rounded-2xl border border-border bg-background text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <div className="overflow-hidden">
                <BlogImage
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selectedImage)} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="w-[95vw] max-h-[70dvh]  overflow-hidden bg-transparent p-0 ">
          {selectedImage ? (
            <div className="overflow-hidden rounded-2xl">
              <BlogImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                loading="eager"
                className="max-h-[85vh] w-full object-contain "
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageGallery;
