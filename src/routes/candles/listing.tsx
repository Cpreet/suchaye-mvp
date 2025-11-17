import { useState, useMemo } from "react";
import { Section } from "@/components/sections/section";
import { ProductGrid } from "@/components/product/product-grid";
import { getProductsByCategory } from "@/data/products";
import type { ScentFamily } from "@/data/products";
import { Button } from "@/components/ui/button";

export function CandlesListingPage() {
  const allProducts = getProductsByCategory("candle");
  const [selectedScent, setSelectedScent] = useState<ScentFamily | "all">("all");

  const filteredProducts = useMemo(() => {
    if (selectedScent === "all") {
      return allProducts;
    }
    return allProducts.filter((p) => p.scentFamily === selectedScent);
  }, [selectedScent, allProducts]);

  const scents: (ScentFamily | "all")[] = [
    "all",
    "floral",
    "fresh",
    "woody",
    "sweet",
  ];

  return (
    <Section
      title="Handmade Scented Candles"
      subtitle="These are the candles you reach for when you want the day to slow down a little. Hand-poured in small batches, our candles are built around cozy, familiar scent stories — perfect for reading corners, bedside rituals, and gentle gifting."
    >
      {/* Filters */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        {scents.map((scent) => (
          <Button
            key={scent}
            variant={selectedScent === scent ? "default" : "outline"}
            onClick={() => setSelectedScent(scent)}
            className="capitalize rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium touch-manipulation"
          >
            {scent === "all" ? "All Scents" : scent}
          </Button>
        ))}
      </div>

      {/* Products */}
      <ProductGrid products={filteredProducts} />
    </Section>
  );
}

