import { Outlet } from "react-router";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { MarqueeSection } from "../sections/marquee-section";

export function LayoutRoot() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

