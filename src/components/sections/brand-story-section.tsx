import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function BrandStorySection() {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium">
          A Little About Suchaye
        </h2>
        <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed font-light px-4">
            Suchaye began as a small experiment at a home worktable — a place
            where metal, wax, scent and stories came together. Every piece is
            designed and finished by hand, in small batches, with an emphasis
            on comfort, longevity and a little bit of quiet joy. When you bring
            a Suchaye piece home, you're choosing something that was made
            slowly, intentionally, and just for you.
          </p>
        </div>
        <Link to="/about">
          <Button variant="outline" size="lg" className="rounded-full px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
}

