import { useState, useMemo } from "react";
import { Section } from "@/components/sections/section";
import { ProductGrid } from "@/components/product/product-grid";
import { getProductsByCategory } from "@/data/products";
import type { BagType, BagMaterial, BagProduct } from "@/data/products";
import { Button } from "@/components/ui/button";

function isBagProduct(p: { category: string }): p is BagProduct {
  return p.category === "bag";
}

export function BagsListingPage() {
  const allProducts = getProductsByCategory("bag");
  const [selectedType, setSelectedType] = useState<BagType | "all">("all");
  const [selectedMaterial, setSelectedMaterial] = useState<BagMaterial | "all">("all");

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;
    
    if (selectedType !== "all") {
      filtered = filtered.filter((p): p is BagProduct => isBagProduct(p) && p.type === selectedType);
    }
    
    if (selectedMaterial !== "all") {
      filtered = filtered.filter((p): p is BagProduct => isBagProduct(p) && p.material === selectedMaterial);
    }
    
    return filtered;
  }, [selectedType, selectedMaterial, allProducts]);

  const types: (BagType | "all")[] = [
    "all",
    "tote",
    "crossbody",
    "clutch",
    "backpack",
  ];

  const materials: (BagMaterial | "all")[] = [
    "all",
    "cotton",
    "linen",
    "leather",
    "canvas",
  ];

  return (
    <Section
      title="Handmade Bags by Suchaye"
      subtitle="Thoughtfully crafted bags for everyday adventures. From roomy totes to compact crossbody bags, each piece is made by hand with attention to detail, quality materials, and a focus on both form and function."
    >
      {/* Filters */}
      <div className="space-y-4 mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        <div className="flex flex-wrap gap-2 md:gap-3">
          <span className="text-xs md:text-sm font-medium text-muted-foreground self-center mr-2">Type:</span>
          {types.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="capitalize rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium touch-manipulation"
            >
              {type === "all" ? "All Types" : type}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          <span className="text-xs md:text-sm font-medium text-muted-foreground self-center mr-2">Material:</span>
          {materials.map((material) => (
            <Button
              key={material}
              variant={selectedMaterial === material ? "default" : "outline"}
              onClick={() => setSelectedMaterial(material)}
              className="capitalize rounded-full px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium touch-manipulation"
            >
              {material === "all" ? "All Materials" : material}
            </Button>
          ))}
        </div>
      </div>

      {/* Products */}
      <ProductGrid products={filteredProducts} />
    </Section>
  );
}

