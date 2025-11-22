import { Link } from "react-router";
import { cn } from "@/lib/utils";

import jewelleryImg from "@/assets/images/categories/jewellery.png";
import candlesImg from "@/assets/images/categories/candles.png";
import bagsImg from "@/assets/images/categories/bags.png";

interface Category {
  title: string;
  description: string;
  href: string;
  image: string;
  className?: string;
}

const categories: Category[] = [
  {
    title: "Handcrafted Jewellery",
    description: "Delicate pieces that add a quiet sparkle.",
    href: "/jewellery",
    image: jewelleryImg,
    className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    title: "Artisanal Candles",
    description: "Scented candles to soften your evenings.",
    href: "/candles",
    image: candlesImg,
    className: "md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square",
  },
  {
    title: "Handmade Bags",
    description: "Thoughtfully crafted for everyday adventures.",
    href: "/bags",
    image: bagsImg,
    className: "md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square",
  },
];

export function CategoryTilesSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col space-y-2 mb-8 md:mb-12 lg:mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif font-medium">Shop by Category</h2>
        <p className="text-muted-foreground">Explore our curated collections.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:pb-0 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-6 lg:gap-8 scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.href}
            className={cn(
              "group relative overflow-hidden rounded-xl min-w-[85vw] md:min-w-0 snap-center bg-muted",
              category.className
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/800x600?text=Suchaye";
                }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-10 space-y-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium tracking-wide">
                {category.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-[80%] opacity-0 md:opacity-100 transition-opacity duration-300 md:group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
