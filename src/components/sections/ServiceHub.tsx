import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";

export interface ServiceLink {
  href: string;
  label: string;
  image?: string;
  imageAlt?: string;
}

interface ServiceHubProps {
  title: string;
  description: string;
  links: ServiceLink[];
}

const DEFAULT_ICON = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export function ServiceHub({ title, description, links }: ServiceHubProps) {
  const hasImages = links.some((l) => l.image);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-4">
            {title}
          </h2>
          <p className="text-[var(--color-slate)] max-w-3xl text-lg">
            {description}
          </p>
        </motion.div>

        {hasImages ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map((link, i) => (
              <ServiceCard
                key={link.href}
                title={link.label}
                description=""
                href={link.href}
                icon={DEFAULT_ICON}
                image={link.image}
                imageAlt={link.imageAlt}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="block p-4 rounded-lg border border-slate-200 hover:border-[var(--color-gold)]/30 hover:bg-[var(--color-off-white)] transition-colors group"
                >
                  <span className="font-medium text-[var(--color-navy)] group-hover:text-[var(--color-gold)]">
                    {link.label}
                  </span>
                  <svg className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
