import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";

export function AboutTestimonials() {
  return (
    <>
      <Hero title="Testimonials" subtitle="What our clients say" variant="compact" />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            Our clients trust us with their financial planning. Read about their experiences and how we have helped them achieve their financial goals.
          </p>
        </div>
      </section>
      <CTA title="Become a client" description="Join our satisfied clients and start your financial planning journey." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
