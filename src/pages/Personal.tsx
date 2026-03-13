import { Hero } from "@/components/sections/Hero";
import { ServiceHub } from "@/components/sections/ServiceHub";
import { IMAGES } from "@/content/images";

export function Personal() {
  return (
    <>
      <Hero
        title="Personal Financial Planning"
        subtitle="Savings, Investments, Pensions & Protection"
        variant="compact"
        backgroundImage={IMAGES.irishGreenField}
      />
      <ServiceHub
        title="Your Financial Future"
        description="Financial Planning is not a choice it is a necessity. At IFC Finance we can help you with all your Financial Planning needs. We look at areas such as Savings & Investments, Pensions, Life, Home & Travel Assurance."
        links={[
          { href: "/personal/investing", label: "Investing", image: IMAGES.officeDesk, imageAlt: "Investments and savings" },
          { href: "/personal/pension", label: "Pension", image: IMAGES.irishHills, imageAlt: "Retirement planning" },
          { href: "/personal/pension-calculator", label: "Pension Calculator", image: IMAGES.irishGlendalough, imageAlt: "Plan your retirement" },
          { href: "/personal/prsa", label: "PRSA", image: IMAGES.irishGreenField, imageAlt: "PRSA flexibility" },
          { href: "/personal/life-assurance", label: "Life Assurance", image: IMAGES.dublinBullIsland, imageAlt: "Protect your family" },
          { href: "/personal/protection-products", label: "Protection Products", image: IMAGES.irishCliffs, imageAlt: "Protection cover" },
          { href: "/personal/income-protection", label: "Income Protection", image: IMAGES.businessHandshake, imageAlt: "Secure your income" },
          { href: "/personal/home-insurance", label: "Home Insurance", image: IMAGES.dublinCastle, imageAlt: "Home and contents cover" },
          { href: "/personal/travel-insurance", label: "Travel Insurance", image: IMAGES.irishRingOfKerry, imageAlt: "Travel with peace of mind" },
        ]}
      />
    </>
  );
}
