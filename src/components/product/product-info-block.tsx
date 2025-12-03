import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Product } from "@/data/products";
import { useRegion } from "@/lib/region-context";
import { CURRENCY_RATES } from "@/lib/types";

interface ProductInfoBlockProps {
  product: Product;
}

export function ProductInfoBlock({ product }: ProductInfoBlockProps) {
  const { currency } = useRegion();

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

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <div className="flex items-start justify-between gap-3 md:gap-4 mb-1.5 md:mb-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            {product.name}
          </h1>
          <div className="flex gap-1.5 md:gap-2 shrink-0">
            {product.isBestseller && (
              <Badge variant="secondary" className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5">Bestseller</Badge>
            )}
            {product.isNew && <Badge className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5">New</Badge>}
          </div>
        </div>
        <p className="text-xl md:text-2xl font-semibold text-foreground mt-1.5 md:mt-2">
          {formatPrice(product.price)}
        </p>
      </div>

      <Separator />

      <div className="prose prose-sm max-w-none">
        <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </div>

      <div className="text-xs md:text-sm text-muted-foreground">
        <p>Dispatched in {product.dispatchDays}–{product.dispatchDays + 2} working days</p>
      </div>
    </div>
  );
}

