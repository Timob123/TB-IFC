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
        backgroundImage={IMAGES.dublinIFSC}
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
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <Link
              to="/about/team"
              className="group p-0 rounded-lg border border-slate-200 hover:border-[var(--color-gold)]/30 overflow-hidden transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.officeDesk}
                  alt="Our team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)]">Team</h3>
                <p className="text-sm text-[var(--color-slate)] mt-2">Meet our advisors</p>
              </div>
            </Link>
            <Link
              to="/about/testimonials"
              className="group p-0 rounded-lg border border-slate-200 hover:border-[var(--color-gold)]/30 overflow-hidden transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.irishCliffs}
                  alt="Client testimonials"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)]">Testimonials</h3>
                <p className="text-sm text-[var(--color-slate)] mt-2">What our clients say</p>
              </div>
            </Link>
            <Link
              to="/about/charges"
              className="group p-0 rounded-lg border border-slate-200 hover:border-[var(--color-gold)]/30 overflow-hidden transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.dublinChristChurch}
                  alt="Our fee structure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)]">Charges</h3>
                <p className="text-sm text-[var(--color-slate)] mt-2">Our fee structure</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
