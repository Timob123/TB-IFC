import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { SITE } from "@/content/site";
import { TEAM } from "@/content/team";
import { IMAGES } from "@/content/images";

export function AboutTeam() {
  return (
    <>
      <Hero
        title="Our Team"
        subtitle="Experienced Financial Advisors"
        variant="compact"
        backgroundImage={IMAGES.officeDesk}
      />
      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-4">
              Meet Our Advisors
            </h2>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed">
              Our team of experienced financial advisors brings decades of combined experience in financial planning, pensions, investments, and protection. We are committed to providing personalised advice tailored to your individual needs and goals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <motion.article
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-lg">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-gold)] font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-slate)] text-sm leading-relaxed mt-4">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-navy)] mb-4">
                Regulated & Trusted
              </h2>
              <p className="text-[var(--color-slate)] leading-relaxed mb-4">
                {SITE.name} is regulated by the {SITE.regulator}. Our advisors hold the appropriate qualifications and are committed to maintaining the highest standards of professional conduct.
              </p>
              <p className="text-[var(--color-slate)] leading-relaxed">
                Based at {SITE.contact.address}, {SITE.contact.city}, we serve clients across Ireland and the UK. Contact us to arrange a meeting with our team.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={IMAGES.dublinIFSC}
                alt="IFC Finance – Dublin financial district"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Get to know us"
        description="Contact us to arrange a meeting with our team."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
