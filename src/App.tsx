import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Contact } from "@/pages/Contact";

// Placeholder pages - will be implemented in phases
import { About } from "@/pages/About";
import { AboutTeam } from "@/pages/AboutTeam";
import { AboutTestimonials } from "@/pages/AboutTestimonials";
import { AboutCharges } from "@/pages/AboutCharges";
import { FinancialPlanning } from "@/pages/FinancialPlanning";
import { FinancialPlanningStepByStep } from "@/pages/FinancialPlanningStepByStep";
import { FinancialPlanningBenefits } from "@/pages/FinancialPlanningBenefits";
import { FinancialPlanningEthics } from "@/pages/FinancialPlanningEthics";
import { Personal } from "@/pages/Personal";
import { Company } from "@/pages/Company";
import { GroupRisk } from "@/pages/GroupRisk";
import { InvoiceFinance } from "@/pages/InvoiceFinance";
import { Blog } from "@/pages/Blog";
import { CalculatorsIpCalc } from "@/pages/CalculatorsIpCalc";
import { CalculatorsAutoEnrolment } from "@/pages/CalculatorsAutoEnrolment";
import { Privacy } from "@/pages/Privacy";

// Service subpages
import { ServiceSubpage } from "@/pages/ServiceSubpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="about/team" element={<AboutTeam />} />
          <Route path="about/testimonials" element={<AboutTestimonials />} />
          <Route path="about/charges" element={<AboutCharges />} />
          <Route path="financial-planning" element={<FinancialPlanning />} />
          <Route path="financial-planning/step-by-step" element={<FinancialPlanningStepByStep />} />
          <Route path="financial-planning/benefits" element={<FinancialPlanningBenefits />} />
          <Route path="financial-planning/ethics" element={<FinancialPlanningEthics />} />
          <Route path="personal" element={<Personal />} />
          <Route path="personal/:slug" element={<ServiceSubpage section="personal" />} />
          <Route path="company" element={<Company />} />
          <Route path="company/:slug" element={<ServiceSubpage section="company" />} />
          <Route path="group-risk" element={<GroupRisk />} />
          <Route path="group-risk/life-income-protection" element={<ServiceSubpage section="group-risk" />} />
          <Route path="invoice-finance" element={<InvoiceFinance />} />
          <Route path="invoice-finance/working-capital" element={<ServiceSubpage section="invoice-finance" />} />
          <Route path="blog" element={<Blog />} />
          <Route path="calculators/ip-calc" element={<CalculatorsIpCalc />} />
          <Route path="calculators/auto-enrolment" element={<CalculatorsAutoEnrolment />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
