import { useParams, Link } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import {
  PERSONAL_SERVICES,
  COMPANY_SERVICES,
  GROUP_RISK_SERVICES,
  INVOICE_FINANCE_SERVICES,
} from "@/content/pages";

const CONTENT_MAP: Record<string, Record<string, { title: string; description: string }>> = {
  personal: PERSONAL_SERVICES,
  company: COMPANY_SERVICES,
  "group-risk": GROUP_RISK_SERVICES,
  "invoice-finance": INVOICE_FINANCE_SERVICES,
};

export function ServiceSubpage({ section }: { section: string }) {
  const { slug } = useParams<{ slug: string }>();
  const content = CONTENT_MAP[section]?.[slug || ""];

  if (!content) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-[var(--color-navy)]">Page not found</h1>
        <Link to="/" className="mt-4 inline-block text-[var(--color-gold)] hover:underline">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Hero title={content.title} variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>
      <CTA
        title="Need advice?"
        description="Contact our team for professional guidance on your financial needs."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
