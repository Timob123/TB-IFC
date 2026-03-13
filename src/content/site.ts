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
    label: "Services",
    href: "/personal",
    children: [
      { label: "Financial Planning", href: "/financial-planning" },
      { label: "Personal", href: "/personal" },
      { label: "Company", href: "/company" },
      { label: "Group Risk", href: "/group-risk" },
      { label: "Invoice Finance", href: "/invoice-finance" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Team", href: "/about/team" },
      { label: "Testimonials", href: "/about/testimonials" },
      { label: "Charges", href: "/about/charges" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  {
    label: "Tools",
    href: "/calculators/ip-calc",
    children: [
      { label: "IP Calculator", href: "/calculators/ip-calc" },
      { label: "Auto Enrolment", href: "https://www.zurich.ie/corporate/auto-enrolment-calculator/", external: true },
    ],
  },
] as const;
