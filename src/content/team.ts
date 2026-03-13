/**
 * Team members for IFC Finance.
 * Update with real names, photos, and bios when available.
 */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
}

/** Placeholder avatar – initials on navy/gold. Replace image with real headshots. */
const avatar = (initials: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&size=400&background=1e3a5f&color=c9a227&bold=true`;

export const TEAM: TeamMember[] = [
  {
    name: "Managing Director",
    role: "Managing Director",
    bio: "Leads IFC Finance with over 25 years of experience in financial planning and wealth management. Specialises in pension schemes for companies and high-net-worth individuals.",
    image: avatar("MD"),
  },
  {
    name: "Senior Financial Advisor",
    role: "Senior Financial Advisor",
    bio: "Expert in personal pensions, PRSAs, and retirement planning. Helps clients navigate pension transfers and AVC contributions.",
    image: avatar("SFA"),
  },
  {
    name: "Corporate Financial Advisor",
    role: "Corporate Financial Advisor",
    bio: "Focused on company pensions, group risk, and keyman insurance. Works with SMEs and multinationals across Ireland and the UK.",
    image: avatar("CFA"),
  },
  {
    name: "Financial Advisor",
    role: "Financial Advisor",
    bio: "Specialises in life assurance, income protection, and investment portfolios. Advises on protection products and long-term savings.",
    image: avatar("FA"),
  },
];
