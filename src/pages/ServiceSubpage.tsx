import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import {
  PERSONAL_SERVICES,
  COMPANY_SERVICES,
  GROUP_RISK_SERVICES,
  INVOICE_FINANCE_SERVICES,
} from "@/content/pages";
import { IMAGES } from "@/content/images";

const CONTENT_MAP: Record<string, Record<string, { title: string; intro?: string; sections: { heading?: string; paragraphs: string[]; image?: string }[] }>> = {
  personal: PERSONAL_SERVICES,
  company: COMPANY_SERVICES,
  "group-risk": GROUP_RISK_SERVICES,
  "invoice-finance": INVOICE_FINANCE_SERVICES,
};

function getImageUrl(key: string): string {
  return (IMAGES as Record<string, string>)[key] || "";
}

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {content.intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-[var(--color-slate)] leading-relaxed mb-12"
            >
              {content.intro}
            </motion.p>
          )}

          <div className="space-y-16">
            {content.sections.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={sec.image ? "grid lg:grid-cols-2 gap-8 items-start" : ""}
              >
                <div className={sec.image ? "lg:order-2" : ""}>
                  {sec.heading && (
                    <h2 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[var(--color-navy)] mb-4">
                      {sec.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {sec.paragraphs.map((p, j) => (
                      <p key={j} className="text-[var(--color-slate)] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                {sec.image && getImageUrl(sec.image) && (
                  <div className={`rounded-lg overflow-hidden shadow-md aspect-video lg:aspect-[4/3] ${sec.image ? "lg:order-1" : ""}`}>
                    <img
                      src={getImageUrl(sec.image)}
                      alt={sec.heading || content.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
