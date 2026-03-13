import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import { ScrollToTopButton } from "@/components/ui/ScrollToTop";
import { ROUTE_TITLES } from "@/content/routeTitles";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const basePath = location.pathname;
    const title = ROUTE_TITLES[basePath];
    if (title) {
      document.title = `${title} | IFC Finance`;
    } else {
      document.title = "IFC Finance – Financial Advisors in Dublin";
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="absolute -top-full left-4 z-[100] px-4 py-2 bg-[var(--color-navy)] text-white rounded-md focus:top-4 transition-[top]"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1" role="main">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
}
