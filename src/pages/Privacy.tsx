import { Hero } from "@/components/sections/Hero";

export function Privacy() {
  return (
    <>
      <Hero title="Privacy Policy" subtitle="How we use your data" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            This site uses cookies for analytics and to improve your experience. We are committed to protecting your privacy and handling your data in an open and transparent manner. For full details of how we collect, use, and protect your information, please contact us.
          </p>
        </div>
      </section>
    </>
  );
}
