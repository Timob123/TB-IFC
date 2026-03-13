import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";

const PILLARS = [
  {
    title: "Personal Financial Planning",
    description: "Financial Planning is not a choice it is a necessity. At IFC Finance we can help you with all your Financial Planning needs. We look at area's such as Savings & Investments, Pensions, Life, Home & Travel Assurance.",
    href: "/personal",
    image: IMAGES.irishGreenField,
    imageAlt: "Irish countryside - green fields and nature",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Company-Led Financial Planning",
    description: "IFC Finance advise on and manage Company Pensions, Group Risk, Partnership Insurance, Keyman Insurance, Co-Directors and Pension Term Insurance for companies all over Ireland and the UK.",
    href: "/company",
    image: IMAGES.dublinIFSC,
    imageAlt: "Dublin IFSC - financial district",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Group Risk and Invoice Financing",
    description: "IFC Finance are specialists in the area of Group Risk. We can help secure the best Group Risk Policies for Companies looking to take out Income and Life Assurance for their business.",
    href: "/group-risk",
    image: IMAGES.irishCliffs,
    imageAlt: "Irish cliffs and coastline",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function Home() {
  return (
    <>
      <Hero
        title={`Welcome to ${SITE.name} – ${SITE.tagline}`}
        subtitle="A long-established firm of Financial Advisors operating in Dublin, regulated by the Central Bank of Ireland."
        backgroundImage={IMAGES.irishCliffs}
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-[var(--color-slate)] max-w-4xl">
              We look after the following areas for our clients: Financial Planning, Investing, Pension, PRSA, Life Assurance, Protection Products, Income Protection, Home Insurance, Travel Insurance, Company Pension, Group Risk, Partnership Insurance, Keyman Insurance, Co-Directors Insurance, Pension Term Insurance, Group Life and Income Protection Insurance and Working Capital Finance for Companies.
            </p>
            <div className="mt-6">
              <TrustBadge />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <ServiceCard
                key={pillar.href}
                title={pillar.title}
                description={pillar.description}
                href={pillar.href}
                icon={pillar.icon}
                image={pillar.image}
                imageAlt={pillar.imageAlt}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-md">
                <img
                  src={IMAGES.businessHandshake}
                  alt="Professional financial advice - IFC Finance"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-6">
                Best Financial Advisors in Dublin
              </h2>
              <p className="text-[var(--color-slate)] mb-4">
                Contact {SITE.name} today on {SITE.contact.phone} for professional advice on all your financial matters. Our friendly and knowledgeable Financial Advisors are more than happy to make recommendations on products and services that will help you achieve your financial goals.
              </p>
              <p className="text-[var(--color-slate)] mb-6">
                If you have any questions for {SITE.name} please call us on {SITE.contact.phone} or feel free to e-mail us at{" "}
                <a href={`mailto:${SITE.contact.email}`} className="text-[var(--color-gold)] hover:underline">
                  {SITE.contact.email}
                </a>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[var(--color-navy)] text-white font-semibold rounded-md hover:bg-[var(--color-navy-light)] transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href={SITE.externalLinks.groupRisk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-[var(--color-gold)] text-[var(--color-gold)] font-semibold rounded-md hover:bg-[var(--color-gold)]/10 transition-colors"
                >
                  Group Risk – Special Offers
                </a>
              </div>
            </div>
            <CallbackForm />
          </div>
        </div>
      </section>

      <CTA
        title="Ready to achieve your financial goals?"
        description="Our team of experienced advisors is here to help. Get in touch today for a no-obligation consultation."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
