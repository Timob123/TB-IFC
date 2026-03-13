import { Hero } from "@/components/sections/Hero";
import { ServiceHub } from "@/components/sections/ServiceHub";
import { IMAGES } from "@/content/images";

export function FinancialPlanning() {
  return (
    <>
      <Hero
        title="Financial Planning Benefits"
        subtitle="The benefits of professional financial advice"
        variant="compact"
        backgroundImage={IMAGES.irishHills}
      />
      <ServiceHub
        title="Why Financial Planning Matters"
        description="Financial Planning is not a choice it is a necessity. At IFC Finance we can help you with all your Financial Planning needs. Explore our process, benefits, and our commitment to ethics."
        links={[
          { href: "/financial-planning/step-by-step", label: "Step-by-Step Process" },
          { href: "/financial-planning/benefits", label: "The Benefits of a Good Financial Plan" },
          { href: "/financial-planning/ethics", label: "IFC Finance Ethics" },
        ]}
      />
    </>
  );
}
