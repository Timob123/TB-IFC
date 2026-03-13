import { Hero } from "@/components/sections/Hero";
import { ServiceHub } from "@/components/sections/ServiceHub";

export function Personal() {
  return (
    <>
      <Hero
        title="Personal Financial Planning"
        subtitle="Savings, Investments, Pensions & Protection"
        variant="compact"
      />
      <ServiceHub
        title="Your Financial Future"
        description="Financial Planning is not a choice it is a necessity. At IFC Finance we can help you with all your Financial Planning needs. We look at areas such as Savings & Investments, Pensions, Life, Home & Travel Assurance."
        links={[
          { href: "/personal/investing", label: "Investing" },
          { href: "/personal/pension", label: "Pension" },
          { href: "/personal/pension-calculator", label: "Pension Calculator" },
          { href: "/personal/prsa", label: "PRSA" },
          { href: "/personal/life-assurance", label: "Life Assurance" },
          { href: "/personal/protection-products", label: "Protection Products" },
          { href: "/personal/income-protection", label: "Income Protection" },
          { href: "/personal/home-insurance", label: "Home Insurance" },
          { href: "/personal/travel-insurance", label: "Travel Insurance" },
        ]}
      />
    </>
  );
}
