import { HeroSection } from "@/components/sections/hero-section";
import { CategoryTilesSection } from "@/components/sections/category-tiles-section";
import { BestsellersSection } from "@/components/sections/bestsellers-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";

export function HomePage() {
  return (
    <>
      <HeroSection
        title="Suchaye"
        subtitle="Handcrafted jewellery and candles that feel like little rituals of care."
        primaryAction={{
          label: "Shop Jewellery",
          href: "/jewellery",
        }}
        secondaryAction={{
          label: "Shop Candles",
          href: "/candles",
        }}
      />
      <CategoryTilesSection />
      <BestsellersSection />
      <BrandStorySection />
    </>
  );
}

