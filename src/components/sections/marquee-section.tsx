import { cn } from "@/lib/utils";

interface MarqueeSectionProps {
  items?: string[];
  className?: string;
}

const defaultItems = [
  "Handcrafted in India",
  "Sustainable Packaging",
  "Artisan Made",
  "Slow Fashion",
  "Ethically Sourced"
];

export function MarqueeSection({ items = defaultItems, className }: MarqueeSectionProps) {
  return (
    <div className={cn("w-full overflow-hidden bg-secondary/20 py-4", className)}>
      <div className="relative flex w-full overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {/* First set of items */}
          {items.map((item, index) => (
            <span key={`a-${index}`} className="mx-8 text-lg font-serif font-light tracking-wide text-muted-foreground/80 flex items-center">
              {item}
              <span className="ml-16 text-xs opacity-40">•</span>
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {/* Duplicate set for seamless loop */}
          {items.map((item, index) => (
            <span key={`b-${index}`} className="mx-8 text-lg font-serif font-light tracking-wide text-muted-foreground/80 flex items-center">
              {item}
              <span className="ml-16 text-xs opacity-40">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

