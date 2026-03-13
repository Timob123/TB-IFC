import { Hero } from "@/components/sections/Hero";
import { ServiceHub } from "@/components/sections/ServiceHub";
import { SITE } from "@/content/site";
import { IMAGES } from "@/content/images";

export function GroupRisk() {
  return (
    <>
      <Hero
        title="Group Risk"
        subtitle="Group Life and Income Protection Insurance"
        variant="compact"
        backgroundImage={IMAGES.irishCliffs}
      />
      <ServiceHub
        title="Group Risk Solutions"
        description="IFC Finance are specialists in the area of Group Risk. We can help secure the best Group Risk Policies for Companies looking to take out Income and Life Assurance for their business. We have a dedicated website for Group Risk with special offers."
        links={[
          { href: "/group-risk/life-income-protection", label: "Group Life and Income Protection Insurance" },
        ]}
      />
      <section className="py-12 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-slate)] mb-4">
            For special offers on Group Life Insurance, Group Income Protection and Group Critical Illness Cover:
          </p>
          <a
            href={SITE.externalLinks.groupRisk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[var(--color-navy)] text-white font-semibold rounded-md hover:bg-[var(--color-navy-light)] transition-colors"
          >
            Visit www.grouprisk.ie
          </a>
        </div>
      </section>
    </>
  );
}
