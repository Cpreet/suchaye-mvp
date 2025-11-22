import { Link } from "react-router";
import { cn } from "@/lib/utils";

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
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    title: "Artisanal Candles",
    description: "Scented candles to soften your evenings.",
    href: "/candles",
    image: "https://images.unsplash.com/photo-1606800053560-4c5c0c0c0c0c?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-square",
  },
  {
    title: "Handmade Bags",
    description: "Thoughtfully crafted for everyday adventures.",
    href: "/bags",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
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
