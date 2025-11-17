import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-medium">Suchaye</h3>
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed font-light">
              Handcrafted jewellery and candles that feel like little rituals of
              care.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-5 uppercase tracking-wider text-foreground">Shop</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <Link
                  to="/jewellery"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Jewellery
                </Link>
              </li>
              <li>
                <Link
                  to="/candles"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Candles
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-5 uppercase tracking-wider text-foreground">About</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs md:text-sm font-semibold mb-3 md:mb-5 uppercase tracking-wider text-foreground">Policies</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <Link
                  to="/policies"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/40 text-center text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Suchaye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

