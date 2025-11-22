import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Section } from "@/components/sections/section";
import { ProductGrid } from "@/components/product/product-grid";
import { getProductsByCategory } from "@/data/products";
import type { JewelleryType, JewelleryProduct } from "@/data/products";
import { Button } from "@/components/ui/button";

function isJewelleryProduct(p: { category: string }): p is JewelleryProduct {
  return p.category === "jewellery";
}

export function JewelleryListingPage() {
  const allProducts = getProductsByCategory("jewellery");
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedType = (searchParams.get("type") as JewelleryType | null) || "all";

  const filteredProducts = useMemo(() => {
    if (selectedType === "all") {
      return allProducts;
    }
    return allProducts.filter((p): p is JewelleryProduct => isJewelleryProduct(p) && p.type === selectedType);
  }, [selectedType, allProducts]);

  const types: (JewelleryType | "all")[] = [
    "all",
    "earrings",
    "necklaces",
    "bracelets",
    "rings",
  ];

  const handleFilterChange = (type: JewelleryType | "all") => {
    if (type === "all") {
      searchParams.delete("type");
    } else {
      searchParams.set("type", type);
    }
    setSearchParams(searchParams);
  };

  return (
    <Section
      title="Handmade Jewellery by Suchaye"
      subtitle="Explore a collection of lightweight, thoughtfully crafted jewellery designed for everyday wear and small celebrations. From minimal hoops to delicate pendants, each piece is made in small batches and finished by hand, so that no two pieces feel exactly the same."
    >
      {/* Filters */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        {types.map((type) => (
          <Button
            key={type}
            variant={selectedType === type ? "default" : "outline"}
            onClick={() => handleFilterChange(type)}
            className="capitalize rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium touch-manipulation"
          >
            {type === "all" ? "All" : type}
          </Button>
        ))}
      </div>

      {/* Products */}
      <ProductGrid products={filteredProducts} />
    </Section>
  );
}
