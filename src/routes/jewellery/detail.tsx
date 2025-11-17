import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { getProductBySlug } from "@/data/products";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfoBlock } from "@/components/product/product-info-block";
import { ProductSpecs } from "@/components/product/product-specs";
import { QuantitySelector } from "@/components/cart/quantity-selector";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/lib/cart";
import { Section } from "@/components/sections/section";
import { ShoppingCart } from "lucide-react";

export function JewelleryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = slug ? getProductBySlug(slug) : null;

  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => setAddedToCart(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  if (!product || product.category !== "jewellery") {
    return (
      <Section>
        <div className="text-center py-8 md:py-12">
          <h1 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Product not found</h1>
          <Link to="/jewellery">
            <Button variant="outline" className="text-sm md:text-base">Back to Jewellery</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setAddedToCart(true);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <Section className="max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {/* Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Info */}
        <div className="space-y-4 md:space-y-6">
          <ProductInfoBlock product={product} />
          <ProductSpecs product={product} />

          {/* Add to Cart */}
          <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-xs md:text-sm font-medium">Quantity:</span>
              <QuantitySelector
                value={quantity}
                onChange={setQuantity}
                min={1}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 text-sm md:text-base"
                size="lg"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </Button>
              <Link to="/cart" className="flex-1">
                <Button variant="outline" size="lg" className="w-full text-sm md:text-base">
                  Buy Now
                </Button>
              </Link>
            </div>
            {!product.inStock && (
              <p className="text-xs md:text-sm text-destructive">Out of stock</p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

