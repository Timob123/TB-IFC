import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  index?: number;
}

export function ServiceCard({ title, description, href, icon, image, imageAlt, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--color-gold)]/30 transition-all duration-300"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={imageAlt ?? title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 lg:p-8">
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-navy)]/5 text-[var(--color-gold)] mb-4 group-hover:bg-[var(--color-gold)]/10 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-navy)] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-[var(--color-slate)] text-sm leading-relaxed mb-4">
          {description}
        </p>
      )}
      <Link
        to={href}
        className="inline-flex items-center text-[var(--color-gold)] font-medium text-sm hover:text-[var(--color-gold-light)] transition-colors"
      >
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      </div>
    </motion.div>
  );
}
