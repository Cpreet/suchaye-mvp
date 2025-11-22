import { Separator } from "@/components/ui/separator";
import type { JewelleryProduct, CandleProduct, BagProduct } from "@/data/products";

interface ProductSpecsProps {
  product: JewelleryProduct | CandleProduct | BagProduct;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  if (product.category === "jewellery") {
    return (
      <div className="space-y-3 md:space-y-4">
        <h2 className="text-lg md:text-xl font-semibold">Details</h2>
        <dl className="grid grid-cols-1 gap-2 md:gap-3 text-xs md:text-sm">
          <div>
            <dt className="font-medium text-muted-foreground">Material</dt>
            <dd className="mt-0.5 md:mt-1">{product.material}</dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Finish</dt>
            <dd className="mt-0.5 md:mt-1">{product.finish}</dd>
          </div>
          {product.closure && (
            <div>
              <dt className="font-medium text-muted-foreground">Closure</dt>
              <dd className="mt-0.5 md:mt-1">{product.closure}</dd>
            </div>
          )}
          {product.weight && (
            <div>
              <dt className="font-medium text-muted-foreground">Weight</dt>
              <dd className="mt-0.5 md:mt-1">{product.weight}</dd>
            </div>
          )}
        </dl>

        <Separator />

        <div>
          <h3 className="text-sm md:text-base font-medium mb-1.5 md:mb-2">Care Instructions</h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            {product.careInstructions}
          </p>
        </div>
      </div>
    );
  }

  if (product.category === "bag") {
    return (
      <div className="space-y-3 md:space-y-4">
        <h2 className="text-lg md:text-xl font-semibold">Details</h2>
        <dl className="grid grid-cols-1 gap-2 md:gap-3 text-xs md:text-sm">
          <div>
            <dt className="font-medium text-muted-foreground">Material</dt>
            <dd className="mt-0.5 md:mt-1 capitalize">{product.material}</dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Type</dt>
            <dd className="mt-0.5 md:mt-1 capitalize">{product.type}</dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Dimensions</dt>
            <dd className="mt-0.5 md:mt-1">{product.dimensions}</dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Closure</dt>
            <dd className="mt-0.5 md:mt-1">{product.closure}</dd>
          </div>
          {product.strapLength && (
            <div>
              <dt className="font-medium text-muted-foreground">Strap Length</dt>
              <dd className="mt-0.5 md:mt-1">{product.strapLength}</dd>
            </div>
          )}
          <div>
            <dt className="font-medium text-muted-foreground">Lining</dt>
            <dd className="mt-0.5 md:mt-1">{product.lining}</dd>
          </div>
        </dl>

        <Separator />

        <div>
          <h3 className="text-sm md:text-base font-medium mb-1.5 md:mb-2">Care Instructions</h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            {product.careInstructions}
          </p>
        </div>
      </div>
    );
  }

  // Candle specs
  return (
    <div className="space-y-3 md:space-y-4">
      <h2 className="text-lg md:text-xl font-semibold">Scent Notes</h2>
      <dl className="grid grid-cols-1 gap-2 md:gap-3 text-xs md:text-sm">
        <div>
          <dt className="font-medium text-muted-foreground">Top</dt>
          <dd className="mt-0.5 md:mt-1">{product.scentNotes.top}</dd>
        </div>
        <div>
          <dt className="font-medium text-muted-foreground">Heart</dt>
          <dd className="mt-0.5 md:mt-1">{product.scentNotes.heart}</dd>
        </div>
        <div>
          <dt className="font-medium text-muted-foreground">Base</dt>
          <dd className="mt-0.5 md:mt-1">{product.scentNotes.base}</dd>
        </div>
      </dl>

      <Separator />

      <h2 className="text-lg md:text-xl font-semibold">Details</h2>
      <dl className="grid grid-cols-1 gap-2 md:gap-3 text-xs md:text-sm">
        <div>
          <dt className="font-medium text-muted-foreground">Wax Type</dt>
          <dd className="mt-0.5 md:mt-1">{product.waxType}</dd>
        </div>
        <div>
          <dt className="font-medium text-muted-foreground">Wick Type</dt>
          <dd className="mt-0.5 md:mt-1">{product.wickType}</dd>
        </div>
        <div>
          <dt className="font-medium text-muted-foreground">Net Weight</dt>
          <dd className="mt-0.5 md:mt-1">{product.netWeight}</dd>
        </div>
        <div>
          <dt className="font-medium text-muted-foreground">Burn Time</dt>
          <dd className="mt-0.5 md:mt-1">{product.burnTime}</dd>
        </div>
      </dl>

      <Separator />

      <div>
        <h3 className="text-sm md:text-base font-medium mb-1.5 md:mb-2">Candle Care & Safety</h3>
        <p className="text-xs md:text-sm text-muted-foreground whitespace-pre-line">
          {product.safetyInstructions}
        </p>
      </div>
    </div>
  );
}

