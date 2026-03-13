import { Hero } from "@/components/sections/Hero";
import { ServiceHub } from "@/components/sections/ServiceHub";
import { IMAGES } from "@/content/images";

export function InvoiceFinance() {
  return (
    <>
      <Hero
        title="Invoice Finance"
        subtitle="Working Capital Finance for Companies"
        variant="compact"
        backgroundImage={IMAGES.dublinIFSC}
      />
      <ServiceHub
        title="Working Capital Solutions"
        description="We help secure Working Capital Finance for Companies. Invoice Finance unlocks the value of your unpaid invoices, providing the cash flow your business needs to grow."
        links={[
          { href: "/invoice-finance/working-capital", label: "Working Capital Finance for Companies", image: IMAGES.dublinAIBDocklands, imageAlt: "Working capital finance" },
        ]}
      />
    </>
  );
}
