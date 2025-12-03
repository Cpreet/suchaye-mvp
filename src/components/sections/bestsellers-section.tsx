import { ProductGrid } from "../product/product-grid";
import { getBestsellers } from "@/data/products";
import { useRegion } from "@/lib/region-context";

export function BestsellersSection() {
  const { region } = useRegion();
  const bestsellers = getBestsellers(region);

  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="space-y-8 md:space-y-12 lg:space-y-16">
        <div className="text-center space-y-3 md:space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium">
            Loved by Our Customers
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light px-4">
            A small curation of Suchaye pieces that keep finding their way into
            people's carts.
          </p>
        </div>
        <ProductGrid products={bestsellers.slice(0, 6)} />
      </div>
    </section>
  );
}

