import { Hero } from "@/components/sections/Hero";
import { ServiceHub } from "@/components/sections/ServiceHub";
import { IMAGES } from "@/content/images";

export function Company() {
  return (
    <>
      <Hero
        title="Company-Led Financial Planning"
        subtitle="Business Financial Planning Experts"
        variant="compact"
        backgroundImage={IMAGES.dublinCityscape}
      />
      <ServiceHub
        title="Business Financial Solutions"
        description="IFC Finance advise on and manage Company Pensions, Group Risk, Partnership Insurance, Keyman Insurance, Co-Directors and Pension Term Insurance for companies all over Ireland and the UK. We manage Pension Schemes for FDI Companies, for subsidiary companies of UK operations and for Indigenous Irish Companies."
        links={[
          { href: "/company/pension", label: "Company Pension" },
          { href: "/company/partnership-insurance", label: "Partnership Insurance" },
          { href: "/company/keyman-insurance", label: "Keyman Insurance" },
          { href: "/company/co-directors-insurance", label: "Co-Directors Insurance" },
          { href: "/company/pension-term-insurance", label: "Pension Term Insurance" },
        ]}
      />
    </>
  );
}
