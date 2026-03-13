import { Link } from "react-router-dom";

interface CTAProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({ title, description, primaryLabel = "Contact Us", primaryHref = "/contact", secondaryLabel, secondaryHref }: CTAProps) {
  return (
    <section className="bg-[var(--color-navy)] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-slate-200 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryHref}
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold rounded-md hover:bg-[var(--color-gold-light)] transition-colors"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              to={secondaryHref}
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
