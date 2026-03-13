import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";

export function FinancialPlanningBenefits() {
  return (
    <>
      <Hero title="Benefits of a Good Financial Plan" subtitle="Why plan matters" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            A good financial plan provides clarity, peace of mind, and a roadmap for your future. It helps you make informed decisions about savings, investments, pensions, and protection. Our advisors work with you to create a plan that reflects your goals and circumstances.
          </p>
        </div>
      </section>
      <CTA title="Discover the benefits" description="Speak to our team about how financial planning can help you." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
