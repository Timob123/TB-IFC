import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";

export function FinancialPlanningStepByStep() {
  return (
    <>
      <Hero title="Step-by-Step Process" subtitle="Our approach to financial planning" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            We follow a structured process to understand your goals, assess your current situation, and create a tailored financial plan. Our step-by-step approach ensures nothing is overlooked and you have a clear path to achieving your financial objectives.
          </p>
        </div>
      </section>
      <CTA title="Start your journey" description="Contact us to begin the financial planning process." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
