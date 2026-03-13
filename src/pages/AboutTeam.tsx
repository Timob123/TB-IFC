import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";

export function AboutTeam() {
  return (
    <>
      <Hero title="Our Team" subtitle="Experienced Financial Advisors" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            Our team of experienced financial advisors brings decades of combined experience in financial planning, pensions, investments, and protection. We are committed to providing personalised advice tailored to your individual needs and goals.
          </p>
        </div>
      </section>
      <CTA title="Get to know us" description="Contact us to arrange a meeting with our team." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
