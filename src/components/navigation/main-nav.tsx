import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

interface MainNavProps {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Jewellery", href: "/jewellery" },
  { label: "Candles", href: "/candles" },
  { label: "Bags", href: "/bags" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MainNav({
  orientation = "horizontal",
  onNavigate,
}: MainNavProps) {
  const location = useLocation();

  const baseClasses =
    orientation === "horizontal"
      ? "flex items-center gap-4 md:gap-6"
      : "flex flex-col gap-3 md:gap-4";

  return (
    <nav className={baseClasses}>
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={onNavigate}
            className={cn(
              "text-xs md:text-sm font-medium transition-all duration-200 relative touch-manipulation py-1 md:py-0",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
            {isActive && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

