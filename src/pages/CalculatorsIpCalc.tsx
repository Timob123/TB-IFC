import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";

export function CalculatorsIpCalc() {
  return (
    <>
      <Hero title="IP Calculator" subtitle="Income Protection Calculator" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            Use our Income Protection calculator to estimate the level of cover you may need based on your income and expenses. Contact us for a detailed assessment and personalised recommendations.
          </p>
        </div>
      </section>
      <CTA title="Get a quote" description="Contact us for a personalised income protection quote." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
