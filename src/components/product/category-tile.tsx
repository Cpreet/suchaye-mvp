import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryTileProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  className?: string;
}

export function CategoryTile({
  title,
  description,
  href,
  image,
  className,
}: CategoryTileProps) {
  return (
    <Link to={href}>
      <Card
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 h-full border-0 shadow-md bg-card",
          className
        )}
      >
        {image && (
          <div className="aspect-[4/3] w-full overflow-hidden bg-muted/30 relative">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/600x450?text=Suchaye";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <CardContent className="p-5 md:p-6 lg:p-8 xl:p-10 space-y-3 md:space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium mb-2 md:mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base leading-relaxed">{description}</p>
          <Button variant="outline" size="lg" className="rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 font-medium">
            Explore {title.split(" ")[1]}
            <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}

