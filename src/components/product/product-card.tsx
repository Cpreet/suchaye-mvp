import { Link, useNavigate } from "react-router";
import { useRegion } from "@/lib/region-context";
import { CURRENCY_RATES } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { Star, Minus, Plus } from "lucide-react";
import { addToCart, updateCartItemQuantity } from "@/lib/cart";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const navigate = useNavigate();
  const cart = useCart();
  const { currency } = useRegion();
  
  const cartItem = cart.items.find((item) => item.productId === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const isSoldOut = !product.inStock;

  const formatPrice = (price: number) => {
    if (currency === 'AED') {
      return `AED ${(price * CURRENCY_RATES.AED).toFixed(0)}`;
    }
    if (currency === 'USD') {
      return `$${(price * CURRENCY_RATES.USD).toFixed(2)}`;
    }
    if (currency === 'EUR') {
      return `€${(price * CURRENCY_RATES.EUR).toFixed(2)}`;
    }
    // Default to INR
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateCartItemQuantity(product.id, quantity - 1);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity === 0) {
      addToCart(product.id, 1);
      window.dispatchEvent(new Event("cart-updated"));
    }
    navigate("/checkout");
  };

  const variantCount = product.colors?.length || 0;
  const variantLabel = variantCount > 0 ? `${variantCount} Colors` : null;

  const getCategoryRoute = (category: string) => {
    switch (category) {
      case "candle":
        return "candles";
      case "bag":
        return "bags";
      default:
        return category;
    }
  };

  return (
    <Link to={`/${getCategoryRoute(product.category)}/${product.slug}`} className={cn("block h-full", isSoldOut && "opacity-75")}>
      <Card
        className={cn(
          "group h-full overflow-hidden transition-all duration-500 border border-transparent hover:border-primary/20 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-card flex flex-col",
          className
        )}
      >
        <div className="aspect-3/4 w-full overflow-hidden bg-muted/30 relative">
          {/* Primary Image */}
          <img
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x500?text=Suchaye";
            }}
          />
          {/* Secondary Image */}
          <img
            src={product.images[1] || product.images[0] || "/placeholder.jpg"}
            alt={`${product.name} view 2`}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 opacity-0 scale-105 group-hover:scale-100 group-hover:opacity-100"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x500?text=Suchaye";
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {isSoldOut ? (
              <Badge variant="destructive" className="shadow-sm">
                Sold Out
              </Badge>
            ) : (
              <>
                {product.isBestseller && (
                  <Badge variant="secondary" className="bg-white/90 hover:bg-white text-foreground shadow-sm backdrop-blur-sm">
                    Bestseller
                  </Badge>
                )}
                {product.isNew && (
                  <Badge variant="default" className="shadow-sm">
                    New
                  </Badge>
                )}
              </>
            )}
          </div>

          {/* Variant Indicator */}
          {variantLabel && !isSoldOut && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md z-10">
              {variantLabel}
            </div>
          )}
        </div>

        <CardContent className="p-4 flex flex-col gap-2 flex-grow">
          {/* Star Rating */}
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
          </div>

          <div className="space-y-1">
            <h3 className="font-serif text-base md:text-lg font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <p className="font-medium text-foreground">
                {formatPrice(product.price)}
              </p>
              <p className="text-xs text-muted-foreground capitalize font-light">
                {product.category === "candle" ? product.scentFamily : product.category === "jewellery" ? product.type : "Accessory"}
              </p>
            </div>
          </div>

          {!isSoldOut && (
            <div className="flex flex-col md:grid md:grid-cols-2 gap-2 mt-2 pt-2">
              {quantity > 0 ? (
                <div className="flex items-center justify-between bg-background rounded-full h-9 px-1 w-full border border-muted-foreground/20 shadow-sm" onClick={(e) => e.preventDefault()}>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 hover:bg-muted/50 rounded-full text-muted-foreground"
                    onClick={handleDecrement}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium tabular-nums">{quantity}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 hover:bg-muted/50 rounded-full text-muted-foreground"
                    onClick={handleIncrement}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  onClick={handleAddToCart}
                  variant="outline"
                  className="w-full text-xs font-medium h-9 rounded-full border-muted-foreground/20 hover:border-primary hover:text-primary hover:bg-background transition-colors"
                >
                  Add to Cart
                </Button>
              )}
              
              <Button
                size="sm"
                onClick={handleBuyNow}
                className="w-full text-xs font-medium h-9 bg-[#4A3B32] text-white hover:bg-[#4A3B32]/90 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Buy Now
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
