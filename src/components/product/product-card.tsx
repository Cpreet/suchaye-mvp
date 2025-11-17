import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <Link to={`/${product.category}/${product.slug}`}>
      <Card
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 md:hover:-translate-y-2 border-0 shadow-sm bg-card",
          className
        )}
      >
        <div className="aspect-[3/4] w-full overflow-hidden bg-muted/30 relative">
          <img
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x500?text=Suchaye";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-3 md:p-4 lg:p-5 space-y-1.5 md:space-y-2">
          <div className="flex items-start justify-between gap-2 md:gap-3">
            <div className="flex-1 min-w-0 space-y-0.5 md:space-y-1">
              <h3 className="text-base md:text-lg lg:text-xl font-medium text-foreground truncate leading-tight">
                {product.name}
              </h3>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                {formatPrice(product.price)}
              </p>
            </div>
            <div className="flex flex-col gap-0.5 md:gap-1 shrink-0">
              {product.isBestseller && (
                <Badge variant="secondary" className="shrink-0 text-[10px] md:text-xs font-medium px-1.5 md:px-2 py-0.5">
                  Bestseller
                </Badge>
              )}
              {product.isNew && (
                <Badge variant="default" className="shrink-0 text-[10px] md:text-xs font-medium px-1.5 md:px-2 py-0.5">
                  New
                </Badge>
              )}
            </div>
          </div>
          {product.category === "candle" && (
            <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2 capitalize font-light">
              {product.scentFamily}
            </p>
          )}
          {product.category === "jewellery" && (
            <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2 capitalize font-light">
              {product.type}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

