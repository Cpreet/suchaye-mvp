import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

// Lifestyle images showing people enjoying Suchaye products
// Replace these placeholder URLs with actual lifestyle images
const lifestyleImages = [
  {
    url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=1600&fit=crop&q=80",
    alt: "Person wearing handmade jewellery in a warm, natural setting",
  },
  {
    url: "https://images.unsplash.com/photo-1606800053560-4c5c0c0c0c0c?w=1200&h=1600&fit=crop&q=80",
    alt: "Handmade candle creating a warm, cozy atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1606800053560-4c5c0c0c0c0c?w=1200&h=1600&fit=crop&q=80",
    alt: "Person enjoying Suchaye products in their daily life",
  },
];

export function HeroSection({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % lifestyleImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lifestyleImages.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lifestyleImages.length) % lifestyleImages.length);
    setIsAutoPlaying(false);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4 lg:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight leading-[1.1] text-foreground">
                {title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center pt-2 md:pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 fill-mode-forwards opacity-0">
              <Link to={primaryAction.href}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-6 text-sm md:text-base rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group bg-[#4A3B32] text-white hover:bg-[#4A3B32]/90 border border-[#4A3B32]"
                >
                  {primaryAction.label}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              {secondaryAction && (
                <Link to={secondaryAction.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-6 text-sm md:text-base rounded-full font-medium border-2 hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    {secondaryAction.label}
                    <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-1 opacity-70" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-3/4 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
              {/* Main Image */}
              <div className="absolute inset-0">
                {lifestyleImages.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700 ease-in-out",
                      index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/600x800/faf5f0/b9805a?text=Suchaye";
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background shadow-md touch-manipulation"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background shadow-md touch-manipulation"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 md:gap-2">
                {lifestyleImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={cn(
                      "h-1.5 md:h-2 rounded-full transition-all duration-300 touch-manipulation",
                      index === currentImageIndex
                        ? "w-6 md:w-8 bg-primary"
                        : "w-1.5 md:w-2 bg-background/60 hover:bg-background/80"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Image Cards (Decorative) - Hidden on mobile */}
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-24 h-24 xl:w-32 xl:h-32 rounded-xl overflow-hidden shadow-xl opacity-60 animate-pulse-slow">
              <img
                src={lifestyleImages[1]?.url || ""}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="hidden lg:block absolute -top-8 -right-8 w-20 h-20 xl:w-24 xl:h-24 rounded-xl overflow-hidden shadow-xl opacity-60 animate-pulse-slow" style={{ animationDelay: "1s" }}>
              <img
                src={lifestyleImages[2]?.url || ""}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

