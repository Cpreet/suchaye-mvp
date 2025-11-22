import { useParams, Link, useNavigate } from "react-router";
import { useState } from "react";
import { getProductBySlug } from "@/data/products";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfoBlock } from "@/components/product/product-info-block";
import { ProductSpecs } from "@/components/product/product-specs";
import { Button } from "@/components/ui/button";
import { addToCart, updateCartItemQuantity } from "@/lib/cart";
import { Section } from "@/components/sections/section";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

export function BagDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const cart = useCart();
  
  const product = slug ? getProductBySlug(slug) : null;
  const cartItem = product ? cart.items.find((item) => item.productId === product.id) : null;
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors?.[0] || ""
  );

  if (!product || product.category !== "bag") {
    return (
      <Section>
        <div className="text-center py-8 md:py-12">
          <h1 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Product not found</h1>
          <Link to="/bags">
            <Button variant="outline" className="text-sm md:text-base">Back to Bags</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, 1);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleIncrement = () => {
    addToCart(product.id, 1);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleDecrement = () => {
    updateCartItemQuantity(product.id, quantityInCart - 1);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleBuyNow = () => {
    if (quantityInCart === 0) {
      addToCart(product.id, 1);
      window.dispatchEvent(new Event("cart-updated"));
    }
    navigate("/checkout");
  };

  const isSoldOut = !product.inStock;

  return (
    <Section className="max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* Gallery */}
        <div className="relative">
          <ProductGallery images={product.images} productName={product.name} />
          {isSoldOut && (
            <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium z-10">
              Sold Out
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-4 md:space-y-6">
          <ProductInfoBlock product={product} />
          <ProductSpecs product={product} />

          {/* Variant Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-3 pt-2">
              <span className="text-sm font-medium text-muted-foreground">Select Color:</span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm border transition-all",
                      selectedColor === color
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-input hover:border-primary/50 text-muted-foreground"
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t">
            {!isSoldOut ? (
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {quantityInCart > 0 ? (
                  <div className="flex items-center justify-between bg-background rounded-full h-11 px-2 border border-muted-foreground/20 shadow-sm">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 hover:bg-muted/50 rounded-full text-muted-foreground"
                      onClick={handleDecrement}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-base font-medium tabular-nums">{quantityInCart}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 hover:bg-muted/50 rounded-full text-muted-foreground"
                      onClick={handleIncrement}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    variant="outline"
                    className="w-full text-sm md:text-base h-11 rounded-full border-muted-foreground/20 hover:border-primary hover:text-primary hover:bg-background transition-colors"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                )}
                
                <Button 
                  onClick={handleBuyNow}
                  size="lg" 
                  className="w-full text-sm md:text-base h-11 bg-[#4A3B32] text-white hover:bg-[#4A3B32]/90 rounded-full shadow-md hover:shadow-lg transition-all border-none"
                >
                  Buy Now
                </Button>
              </div>
            ) : (
              <div className="w-full bg-muted py-3 text-center rounded-md text-muted-foreground font-medium">
                Currently Unavailable
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
