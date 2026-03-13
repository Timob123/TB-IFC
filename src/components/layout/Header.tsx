import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE, NAV_LINKS } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[var(--color-navy)]">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href) ? "text-[var(--color-gold)]" : "text-[var(--color-navy)] hover:text-[var(--color-gold)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {openDropdown === item.href && (
                      <div className="absolute top-full left-0 mt-0 w-56 rounded-md bg-white shadow-lg border border-slate-200 py-2">
                        {item.children.map((child: { href: string; label: string; external?: boolean }) =>
                          "external" in child && child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-[var(--color-navy)] hover:bg-[var(--color-off-white)]"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-[var(--color-navy)] hover:bg-[var(--color-off-white)]"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-[var(--color-gold)]" : "text-[var(--color-navy)] hover:text-[var(--color-gold)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${SITE.contact.phoneRaw}`} className="text-sm text-[var(--color-navy)] hover:text-[var(--color-gold)]">
              {SITE.contact.phone}
            </a>
            <a href={`mailto:${SITE.contact.email}`} className="text-sm text-[var(--color-navy)] hover:text-[var(--color-gold)]">
              {SITE.contact.email}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-[var(--color-navy)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => {
                if ("children" in item && item.children) {
                  return (
                    <div key={item.href}>
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-[var(--color-navy)] font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <div className="pl-4">
                        {item.children.map((child: { href: string; label: string; external?: boolean }) =>
                          "external" in child && child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-2 text-sm text-[var(--color-slate)]"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block py-2 text-sm text-[var(--color-slate)]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-[var(--color-navy)] font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
