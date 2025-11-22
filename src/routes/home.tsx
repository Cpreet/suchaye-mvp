import { HeroSection } from "@/components/sections/hero-section";
import { CategoryTilesSection } from "@/components/sections/category-tiles-section";
import { BestsellersSection } from "@/components/sections/bestsellers-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { MarqueeSection } from "@/components/sections/marquee-section";

export function HomePage() {
  return (
    <>
      <HeroSection
        title="Suchaye"
        subtitle="Handcrafted jewellery, candles, and bags that feel like little rituals of care."
        primaryAction={{
          label: "Shop Jewellery",
          href: "/jewellery",
        }}
        secondaryAction={{
          label: "Shop Candles",
          href: "/candles",
        }}
      />
      <MarqueeSection />
      <CategoryTilesSection />
      <BestsellersSection />
      <BrandStorySection />
    </>
  );
}

