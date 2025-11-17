import { Link } from "react-router";

export function BrandLogo() {
  return (
    <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-serif font-medium tracking-tight text-foreground hover:opacity-80 transition-opacity touch-manipulation">
      Suchaye
    </Link>
  );
}

