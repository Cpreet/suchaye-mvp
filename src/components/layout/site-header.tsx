import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { getCartItemCount } from "@/lib/cart";
import { useState, useEffect } from "react";
import { MainNav } from "../navigation/main-nav";
import { BrandLogo } from "../navigation/brand-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function SiteHeader() {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartItemCount());
    };
    updateCartCount();
    // Update cart count when storage changes (from other tabs/windows)
    window.addEventListener("storage", updateCartCount);
    // Custom event for same-tab updates
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center relative">
          {/* Left Section: Mobile Menu */}
          <div className="flex flex-1 items-center justify-start gap-4">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 touch-manipulation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] overflow-y-auto">
              <nav className="flex flex-col gap-4 mt-6">
                <BrandLogo />
                <MainNav
                  orientation="vertical"
                  onNavigate={() => setIsOpen(false)}
                />
              </nav>
            </SheetContent>
            </Sheet>
          </div>

          {/* Center Section: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <BrandLogo />
          </div>

          {/* Right Section: Cart */}
          <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative h-9 w-9 md:h-10 md:w-10 hover:bg-accent/50 transition-colors touch-manipulation">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 h-4 w-4 md:h-5 md:w-5 rounded-full bg-primary text-primary-foreground text-[10px] md:text-xs font-medium flex items-center justify-center shadow-sm">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation Row */}
        <div className="hidden md:flex items-center justify-center pb-4">
          <MainNav orientation="horizontal" />
        </div>
      </div>
    </header>
  );
}

