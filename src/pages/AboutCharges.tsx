import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";

export function AboutCharges() {
  return (
    <>
      <Hero title="Our Charges" subtitle="Transparent fee structure" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            We believe in transparency. Our charges are clearly explained before we begin any work. We offer a range of fee structures to suit different needs. Contact us for a detailed breakdown of our charges.
          </p>
        </div>
      </section>
      <CTA title="Discuss your needs" description="Contact us for a no-obligation discussion about our services and charges." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
