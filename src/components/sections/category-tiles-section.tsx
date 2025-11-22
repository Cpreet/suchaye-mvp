import { CategoryTile } from "../product/category-tile";

export function CategoryTilesSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <CategoryTile
          title="Handmade Jewellery"
          description="Delicate, everyday-friendly pieces that add a quiet sparkle to your day."
          href="/jewellery"
        />
        <CategoryTile
          title="Handmade Candles"
          description="Slow-burning, scented candles to soften your evenings and brighten your corners."
          href="/candles"
        />
        <CategoryTile
          title="Handmade Bags"
          description="Thoughtfully crafted bags for everyday adventures, made with care and attention to detail."
          href="/bags"
        />
      </div>
    </section>
  );
}

