export const SITE = {
  name: "IFC Finance",
  tagline: "Ireland's Leading Financial Advisor",
  contact: {
    phone: "+353 (0)1 660 1016",
    phoneRaw: "+35316601016",
    email: "admin@ifcfinance.com",
    address: "4 Fitzwilliam Square East",
    city: "Dublin 2",
    postcode: "D02 FE06",
    fax: "+353 (0)1 664 2988",
    website: "www.ifcfinance.com",
  },
  regulator: "Central Bank of Ireland",
  externalLinks: {
    groupRisk: "https://www.grouprisk.ie",
    autoEnrolment: "https://www.zurich.ie/corporate/auto-enrolment-calculator/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Team", href: "/about/team" },
      { label: "Testimonials", href: "/about/testimonials" },
      { label: "Charges", href: "/about/charges" },
    ],
  },
  {
    label: "Financial Planning",
    href: "/financial-planning",
    children: [
      { label: "Step-by-Step Process", href: "/financial-planning/step-by-step" },
      { label: "Benefits", href: "/financial-planning/benefits" },
      { label: "Ethics", href: "/financial-planning/ethics" },
    ],
  },
  {
    label: "Personal",
    href: "/personal",
    children: [
      { label: "Investing", href: "/personal/investing" },
      { label: "Pension", href: "/personal/pension" },
      { label: "Pension Calculator", href: "/personal/pension-calculator" },
      { label: "PRSA", href: "/personal/prsa" },
      { label: "Life Assurance", href: "/personal/life-assurance" },
      { label: "Protection Products", href: "/personal/protection-products" },
      { label: "Income Protection", href: "/personal/income-protection" },
      { label: "Home Insurance", href: "/personal/home-insurance" },
      { label: "Travel Insurance", href: "/personal/travel-insurance" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "Company Pension", href: "/company/pension" },
      { label: "Partnership Insurance", href: "/company/partnership-insurance" },
      { label: "Keyman Insurance", href: "/company/keyman-insurance" },
      { label: "Co-Directors Insurance", href: "/company/co-directors-insurance" },
      { label: "Pension Term Insurance", href: "/company/pension-term-insurance" },
    ],
  },
  {
    label: "Group Risk",
    href: "/group-risk",
    children: [
      { label: "Life & Income Protection", href: "/group-risk/life-income-protection" },
    ],
  },
  {
    label: "Invoice Finance",
    href: "/invoice-finance",
    children: [
      { label: "Working Capital", href: "/invoice-finance/working-capital" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  {
    label: "Calculators",
    href: "/calculators/ip-calc",
    children: [
      { label: "IP Calc", href: "/calculators/ip-calc" },
      { label: "Auto Enrolment", href: "https://www.zurich.ie/corporate/auto-enrolment-calculator/", external: true },
    ],
  },
] as const;
