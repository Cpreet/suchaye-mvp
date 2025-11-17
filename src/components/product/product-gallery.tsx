import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-square w-full bg-muted rounded-lg md:rounded-xl flex items-center justify-center">
        <span className="text-sm md:text-base text-muted-foreground">No image available</span>
      </div>
    );
  }

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Main Image */}
      <div className="aspect-square w-full overflow-hidden rounded-lg md:rounded-xl bg-muted">
        <img
          src={images[selectedIndex] || images[0]}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/600x600?text=Suchaye";
          }}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-1.5 md:gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "aspect-square overflow-hidden rounded-md md:rounded-lg border-2 transition-all touch-manipulation",
                selectedIndex === index
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground/50 active:border-muted-foreground/70"
              )}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/150x150?text=Suchaye";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

