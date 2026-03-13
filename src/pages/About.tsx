import { Link } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";

export function About() {
  return (
    <>
      <Hero
        title="About IFC Finance"
        subtitle="Long-established Financial Advisors in Dublin"
        variant="compact"
        backgroundImage={IMAGES.dublinBridge}
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-6">
            {SITE.name} are a long-established firm of Financial Advisors operating in Dublin and regulated by the Central Bank of Ireland. We provide comprehensive financial planning services to individuals and businesses across Ireland and the UK.
          </p>
          <div className="mb-8">
            <TrustBadge />
          </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={IMAGES.dublinCityscape}
              alt="Dublin cityscape - home of IFC Finance"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              to="/about/team"
              className="p-6 rounded-lg border border-slate-200 hover:border-[var(--color-gold)]/30 transition-colors"
            >
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)]">Team</h3>
              <p className="text-sm text-[var(--color-slate)] mt-2">Meet our advisors</p>
            </Link>
            <Link
              to="/about/testimonials"
              className="p-6 rounded-lg border border-slate-200 hover:border-[var(--color-gold)]/30 transition-colors"
            >
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)]">Testimonials</h3>
              <p className="text-sm text-[var(--color-slate)] mt-2">What our clients say</p>
            </Link>
            <Link
              to="/about/charges"
              className="p-6 rounded-lg border border-slate-200 hover:border-[var(--color-gold)]/30 transition-colors"
            >
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)]">Charges</h3>
              <p className="text-sm text-[var(--color-slate)] mt-2">Our fee structure</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
