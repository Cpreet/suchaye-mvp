import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Gem, 
  Flame, 
  ShoppingBag, 
  Info, 
  Phone,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
  ArrowRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Mega-menu images
import jewelleryEverydayEssentials from '@/assets/images/mega-menu/jewellery-everyday-essentials.png';
import jewelleryStatementPieces from '@/assets/images/mega-menu/jewellery-statement-pieces.png';
import candlesCalmingCollection from '@/assets/images/mega-menu/candles-calming-collection.png';
import candlesAutumnWarmth from '@/assets/images/mega-menu/candles-autumn-warmth.png';
import bagsWeekendGetaway from '@/assets/images/mega-menu/bags-weekend-getaway.png';
import bagsOfficeEssentials from '@/assets/images/mega-menu/bags-office-essentials.png';

interface MainNavProps {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

interface SubLink {
  label: string;
  href: string;
}

interface MenuColumn {
  title: string;
  items: SubLink[];
}

interface FeaturedItem {
  title: string;
  image: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  menu?: {
    columns: MenuColumn[];
    featured?: FeaturedItem[];
  };
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { 
    label: "Jewellery", 
    href: "/jewellery", 
    icon: Gem,
    menu: {
      columns: [
        {
          title: "Shop by Category",
          items: [
            { label: "View All", href: "/jewellery" },
            { label: "Earrings", href: "/jewellery?type=earrings" },
            { label: "Necklaces", href: "/jewellery?type=necklaces" },
            { label: "Bracelets", href: "/jewellery?type=bracelets" },
            { label: "Rings", href: "/jewellery?type=rings" },
          ]
        },
        {
          title: "Collections",
          items: [
            { label: "New Arrivals", href: "/jewellery?sort=new" },
            { label: "Best Sellers", href: "/jewellery?sort=best" },
            { label: "Gold Vermeil", href: "/jewellery?finish=gold" },
            { label: "Sterling Silver", href: "/jewellery?finish=silver" },
            { label: "Bridal Edit", href: "/jewellery?collection=bridal" },
          ]
        }
      ],
      featured: [
        {
          title: "Everyday Essentials",
          image: jewelleryEverydayEssentials,
          href: "/jewellery?collection=essentials"
        },
        {
          title: "Statement Pieces",
          image: jewelleryStatementPieces,
          href: "/jewellery?collection=statement"
        }
      ]
    }
  },
  { 
    label: "Candles", 
    href: "/candles", 
    icon: Flame,
    menu: {
      columns: [
        {
          title: "Shop by Scent",
          items: [
            { label: "View All", href: "/candles" },
            { label: "Floral", href: "/candles?family=floral" },
            { label: "Fresh", href: "/candles?family=fresh" },
            { label: "Woody", href: "/candles?family=woody" },
            { label: "Sweet", href: "/candles?family=sweet" },
          ]
        },
        {
          title: "Collections",
          items: [
            { label: "Gift Sets", href: "/candles?type=gift-set" },
            { label: "Scent of the Month", href: "/candles?collection=featured" },
            { label: "Large 3-Wick", href: "/candles?size=large" },
            { label: "Travel Tins", href: "/candles?size=small" },
          ]
        }
      ],
      featured: [
        {
          title: "The Calming Collection",
          image: candlesCalmingCollection,
          href: "/candles?collection=calming"
        },
        {
          title: "Autumn Warmth",
          image: candlesAutumnWarmth,
          href: "/candles?collection=autumn"
        }
      ]
    }
  },
  { 
    label: "Bags", 
    href: "/bags", 
    icon: ShoppingBag,
    menu: {
      columns: [
        {
          title: "Shop by Style",
          items: [
            { label: "View All", href: "/bags" },
            { label: "Totes", href: "/bags?type=tote" },
            { label: "Crossbody", href: "/bags?type=crossbody" },
            { label: "Clutches", href: "/bags?type=clutch" },
            { label: "Backpacks", href: "/bags?type=backpack" },
          ]
        },
        {
          title: "Materials",
          items: [
            { label: "Genuine Leather", href: "/bags?material=leather" },
            { label: "Canvas", href: "/bags?material=canvas" },
            { label: "Sustainable Linen", href: "/bags?material=linen" },
            { label: "Handwoven", href: "/bags?material=cotton" },
          ]
        }
      ],
      featured: [
        {
          title: "Weekend Getaway",
          image: bagsWeekendGetaway,
          href: "/bags?collection=weekend"
        },
        {
          title: "Office Essentials",
          image: bagsOfficeEssentials,
          href: "/bags?collection=work"
        }
      ]
    }
  },
  { label: "About", href: "/about", icon: Info },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function MainNav({
  orientation = "horizontal",
  onNavigate,
}: MainNavProps) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [menuTop, setMenuTop] = useState<number>(0);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        // Check if clicking on dropdown content
        const target = event.target as HTMLElement;
        const dropdown = document.getElementById('mega-menu-dropdown');
        if (dropdown && dropdown.contains(target)) {
          return;
        }
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    // Only close if currently open to potentially avoid some redundant renders, 
    // but mainly we just want to close it on navigation.
    // Using a timeout to ensure this runs after the render cycle if needed, or just direct call.
    // The linter warning is because we are responding to a prop/state change by triggering another state change.
    // For navigation (location) changes, this is acceptable "reset" behavior.
    const handleLocationChange = () => setOpenDropdown(null);
    handleLocationChange();
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Calculate top position immediately on hover
    if (orientation === "horizontal" && navRef.current) {
      const header = navRef.current.closest('header');
      if (header) {
        setMenuTop(header.getBoundingClientRect().bottom);
      } else {
        setMenuTop(navRef.current.getBoundingClientRect().bottom);
      }
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Small delay to allow moving to the dropdown
  };

  const toggleDropdownMobile = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const baseClasses =
    orientation === "horizontal"
      ? "flex items-center gap-4 md:gap-6 h-full"
      : "flex flex-col gap-3 md:gap-4";

  return (
    <nav className={baseClasses} ref={navRef}>
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.href);

        const Icon = item.icon;
        const hasMenu = !!item.menu;
        const isOpen = openDropdown === item.label;

        if (orientation === "vertical") {
          // Mobile / Vertical Layout (Click based)
          return (
            <div key={item.label} className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link
                  to={hasMenu ? "#" : item.href}
                  onClick={(e) => {
                    if (hasMenu) {
                      e.preventDefault();
                      toggleDropdownMobile(item.label);
                    } else {
                      onNavigate?.();
                    }
                  }}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 py-2 flex items-center gap-3 w-full",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
                {hasMenu && (
                  <button
                    onClick={() => toggleDropdownMobile(item.label)}
                    className="p-2 -mr-2 text-muted-foreground"
                  >
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                )}
              </div>
              
              {/* Mobile Submenu */}
              {hasMenu && isOpen && (
                <div className="flex flex-col pl-7 gap-4 pb-2 animate-in slide-in-from-top-2 duration-200 border-l-2 border-muted ml-2 mt-1">
                  {item.menu!.columns.map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1">{col.title}</span>
                      {col.items.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={onNavigate}
                          className="text-sm text-muted-foreground hover:text-foreground py-1 block"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  {/* Mobile Featured Links */}
                  {item.menu!.featured && (
                    <div className="flex flex-col gap-1">
                       <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1">Featured</span>
                       {item.menu!.featured!.map((feat, idx) => (
                         <Link
                           key={idx}
                           to={feat.href}
                           onClick={onNavigate}
                           className="text-sm text-primary font-medium py-1 block"
                         >
                           {feat.title}
                         </Link>
                       ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }

        // Desktop / Horizontal Layout (Hover based)
        return (
          <div 
            key={item.label} 
            className="h-full flex items-center"
            onMouseEnter={() => hasMenu && handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.href}
              className={cn(
                "text-xs md:text-sm font-medium transition-all duration-200 relative touch-manipulation py-3 flex items-center gap-1 select-none z-60 h-full",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                 isOpen && "text-primary" 
              )}
            >
              <span>{item.label}</span>
              {hasMenu && (
                <ChevronDown className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  isOpen && "rotate-180"
                )} />
              )}
              
              {isActive && !hasMenu && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary md:block hidden" />
              )}
            </Link>

            {/* Mega Menu Dropdown - Fixed to sit below header */}
            {hasMenu && isOpen && (
               <>
                {/* Backdrop - explicitly positioned below header to avoid covering nav items */}
                <div 
                  className="fixed left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
                  style={{ top: `${menuTop}px` }}
                />
                
                {/* Dropdown Content */}
                <div 
                  id="mega-menu-dropdown"
                  className="fixed left-0 right-0 bg-background border-b border-border shadow-lg z-50 animate-in slide-in-from-top-2 duration-200 overflow-y-auto"
                  style={{ 
                    top: `${menuTop}px`,
                    maxHeight: `calc(100vh - ${menuTop}px)`
                  }}
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                      timeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-12 gap-8">
                      
                      {/* Link Columns - Aligned to right of their section (closer to separator) */}
                      <div className="col-span-5 flex justify-end gap-12">
                        {item.menu!.columns.map((col, idx) => (
                          <div key={idx} className="flex flex-col gap-4 w-40">
                            <h3 className="font-semibold text-sm text-foreground tracking-wide uppercase border-b border-border/50 pb-2">{col.title}</h3>
                            <div className="flex flex-col gap-2.5">
                              {col.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  to={sub.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Divider - Centered */}
                      <div className="col-span-1 flex justify-center">
                        <div className="w-px h-full bg-border" />
                      </div>
                      
                      {/* Featured Images - Aligned to left of their section (closer to separator) */}
                      <div className="col-span-6 grid grid-cols-2 gap-6">
                         {item.menu!.featured?.map((feat, idx) => (
                           <Link 
                              key={idx} 
                              to={feat.href}
                              onClick={() => setOpenDropdown(null)}
                              className="group relative overflow-hidden rounded-lg aspect-4/3 bg-muted"
                           >
                              <img 
                                src={feat.image} 
                                alt={feat.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-medium text-lg leading-none mb-1">{feat.title}</p>
                                <div className="flex items-center gap-1 text-xs font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                  <span>Shop Now</span>
                                  <ArrowRight className="h-3 w-3" />
                                </div>
                              </div>
                           </Link>
                         ))}
                      </div>

                    </div>
                  </div>
                </div>
               </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
