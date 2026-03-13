import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";

export function FinancialPlanningEthics() {
  return (
    <>
      <Hero title="IFC Finance Ethics" subtitle="Our commitment to integrity" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            Ethics and integrity are at the heart of everything we do. As a firm regulated by the Central Bank of Ireland, we adhere to the highest standards of professional conduct. We always act in our clients' best interests and provide advice that is transparent, fair, and tailored to individual needs.
          </p>
        </div>
      </section>
      <CTA title="Work with a trusted advisor" description="Contact us for ethical, professional financial advice." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
