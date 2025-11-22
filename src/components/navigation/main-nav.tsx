import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Gem, 
  Flame, 
  ShoppingBag, 
  Info, 
  Phone,
  type LucideIcon 
} from "lucide-react";

interface MainNavProps {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Jewellery", href: "/jewellery", icon: Gem },
  { label: "Candles", href: "/candles", icon: Flame },
  { label: "Bags", href: "/bags", icon: ShoppingBag },
  { label: "About", href: "/about", icon: Info },
  { label: "Contact", href: "/contact", icon: Phone },
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

        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={onNavigate}
            className={cn(
              "text-xs md:text-sm font-medium transition-all duration-200 relative touch-manipulation py-1 md:py-0 group flex items-center gap-3 md:gap-2",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Show icon only in vertical (mobile) mode or if specifically desired */}
            {orientation === "vertical" && (
              <Icon className={cn("h-4 w-4 md:hidden", isActive ? "text-primary" : "text-muted-foreground")} />
            )}
            
            <span>{item.label}</span>
            
            {isActive && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary md:block hidden" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
