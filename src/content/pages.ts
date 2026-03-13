export interface ServiceSection {
  heading?: string;
  paragraphs: string[];
  image?: string;
}

export interface ServiceContent {
  title: string;
  intro?: string;
  sections: ServiceSection[];
}

const S = (heading: string, paragraphs: string[], image?: string): ServiceSection => ({
  heading,
  paragraphs,
  image,
});

// Personal services - content from ifcfinance.com
export const PERSONAL_SERVICES: Record<string, ServiceContent> = {
  investing: {
    title: "Investing",
    intro: "IFC Finance provides expert advice on investing. We help you build a diversified portfolio tailored to your goals and risk tolerance.",
    sections: [
      S(
        "Professional Investment Advice",
        [
          "Financial Planning is not a choice it is a necessity. At IFC Finance we can help you with all your investment needs. We look at areas such as Savings & Investments, building a portfolio that matches your goals and risk profile.",
          "Whether you're saving for a specific goal or building long-term wealth, our advisors will help you understand your options and make informed decisions.",
        ],
        "officeDesk"
      ),
    ],
  },
  pension: {
    title: "Pension",
    intro: "A Pension is a long-term savings plan which helps build up a retirement fund. Tax Relief is available when you pay money into a Pension Fund.",
    sections: [
      S(
        "What is a Pension and How Does it Work?",
        [
          "Money is put into the fund on a regular basis or in lump sums (sometimes referred to as Additional Voluntary Contributions or AVC Pension Contributions). This is then invested with the aim of growing the fund over a period of time so that when you retire you will have another source of regular income that you can rely on for the rest of your life.",
        ],
        "irishHills"
      ),
      S(
        "What is a Personal Pension or Private Pension?",
        [
          "Personal Pensions or Private Pensions are set up by individuals who do not want to rely solely on the State Pension or feel that the amount paid out by the State will not fully fund the lifestyle they want.",
        ],
        "irishGlendalough"
      ),
      S(
        "Do I need a Personal Pension if I qualify for a State Pension?",
        [
          "People are living longer and leading more active lives in retirement. Just 53 per cent of the population has a personal pension, which means that 47 per cent of the Irish workforce will be depending on a State pension of €235 a week. Will you be able to have the lifestyle you want off €235 per week?",
          "The qualification age for the State Pension has risen, and it will increase to 67 in 2021 and 68 in 2028. If you think you should add to the State pension – contact IFC Finance today to discuss how to go about setting up a Personal Pension.",
        ],
        "irishGreenField"
      ),
      S(
        "Where will your income come from when you retire?",
        [
          "Broadly speaking most people's pensions come from one or more of the following: An Occupational Pension Scheme (Company Pension Plan), a PRSA, a Personal Pension Plan, or the State Pension.",
          "It takes a long time to save for retirement and the earlier a person starts to contribute to a Pension, the better. IFC Finance will help you to take control of your retirement planning.",
        ],
        "irishNewgrange"
      ),
    ],
  },
  "pension-calculator": {
    title: "Pension Calculator",
    intro: "Use our pension calculator to estimate your retirement income and plan for the future.",
    sections: [
      S(
        "Plan Your Retirement",
        [
          "Understanding how much you need to save for retirement is the first step. Contact IFC Finance for a free initial discussion about your pension requirements. We can help you estimate the level of income you may need and how to achieve it.",
        ],
        "irishGlendalough"
      ),
    ],
  },
  prsa: {
    title: "PRSA",
    intro: "Personal Retirement Savings Accounts (PRSA) offer flexibility for your retirement planning.",
    sections: [
      S(
        "What is a PRSA?",
        [
          "A PRSA is a flexible pension product that allows you to save for retirement with tax relief. PRSAs are portable – you can take them with you when you change jobs. IFC Finance will guide you through the options and help you choose the right PRSA for your circumstances.",
        ],
        "irishLandscape"
      ),
    ],
  },
  "life-assurance": {
    title: "Life Assurance",
    intro: "Protect your loved ones with life assurance. We help you find the right cover for your circumstances.",
    sections: [
      S(
        "Why Life Assurance Matters",
        [
          "Life assurance provides financial protection for your family if the unexpected happens. It can help cover mortgages, living expenses, and children's education. IFC Finance will help you determine the right level of cover for your needs.",
        ],
        "dublinBullIsland"
      ),
    ],
  },
  "protection-products": {
    title: "Protection Products",
    intro: "Comprehensive protection products to safeguard you and your family against life's uncertainties.",
    sections: [
      S(
        "Protection for You and Your Family",
        [
          "We offer a range of protection products including life assurance, income protection, and critical illness cover. Our advisors will assess your needs and recommend the right combination of products to protect your family's financial future.",
        ],
        "irishCliffs"
      ),
    ],
  },
  "income-protection": {
    title: "Income Protection",
    intro: "Income protection insurance ensures you maintain your lifestyle if you're unable to work due to illness or injury.",
    sections: [
      S(
        "Secure Your Income",
        [
          "If you couldn't work due to illness or injury, how would you pay the bills? Income protection provides a regular income when you need it most. IFC Finance will help you secure the right level of cover based on your income and commitments.",
        ],
        "businessHandshake"
      ),
    ],
  },
  "home-insurance": {
    title: "Home Insurance",
    intro: "Protect your home and belongings with the right home insurance policy.",
    sections: [
      S(
        "Comprehensive Home Cover",
        [
          "We compare options from leading insurers to find the best cover for your home and contents. Whether you own or rent, we can help you secure appropriate protection.",
        ],
        "dublinCastle"
      ),
    ],
  },
  "travel-insurance": {
    title: "Travel Insurance",
    intro: "Travel with peace of mind. We offer comprehensive travel insurance for holidays and business trips.",
    sections: [
      S(
        "Cover for Your Trips",
        [
          "Travel insurance protects you against medical expenses, lost luggage, and trip cancellations. Contact IFC Finance for single-trip or annual multi-trip policies.",
        ],
        "irishRingOfKerry"
      ),
    ],
  },
};

// Company services
export const COMPANY_SERVICES: Record<string, ServiceContent> = {
  pension: {
    title: "Company Pension",
    intro: "IFC Finance advise on and manage Company Pensions for businesses across Ireland and the UK.",
    sections: [
      S(
        "Occupational Pension Schemes",
        [
          "Company Pension Plans, or occupational pension plans as they are sometimes known, are set up by employers to provide retirement and death benefits for their employees.",
          "We manage Pension Schemes for FDI Companies, for subsidiary companies of UK operations, and for Indigenous Irish Companies. You can have a Personal Pension Plan at the same time as having a Company Pension Plan.",
        ],
        "dublinCitiHQ"
      ),
    ],
  },
  "partnership-insurance": {
    title: "Partnership Insurance",
    intro: "Protect your business partnership with the right insurance.",
    sections: [
      S(
        "Safeguard Your Partnership",
        [
          "Partnership insurance ensures that if one partner dies or becomes critically ill, the remaining partners have the funds to buy out their share. This protects both the business and the families of all partners. IFC Finance will help you secure cover that safeguards everyone.",
        ],
        "businessHandshake"
      ),
    ],
  },
  "keyman-insurance": {
    title: "Keyman Insurance",
    intro: "Keyman insurance protects your business against the loss of key personnel.",
    sections: [
      S(
        "Protect Your Key People",
        [
          "If a key person in your business died or became seriously ill, the impact could be devastating. Keyman insurance provides a lump sum to help the business survive – covering recruitment costs, lost revenue, or buying out a shareholder. IFC Finance will help you structure the right policy.",
        ],
        "dublinSpire"
      ),
    ],
  },
  "co-directors-insurance": {
    title: "Co-Directors Insurance",
    intro: "Co-Directors insurance provides protection when a director is unable to continue.",
    sections: [
      S(
        "Business Continuity",
        [
          "Co-Directors insurance ensures that if a director dies or becomes incapacitated, the remaining directors have the funds to purchase their shareholding. This protects the business and provides for the director's family. We advise on the best solutions for your company structure.",
        ],
        "officeDesk"
      ),
    ],
  },
  "pension-term-insurance": {
    title: "Pension Term Insurance",
    intro: "Pension term insurance links protection to your pension scheme.",
    sections: [
      S(
        "Integrated Protection",
        [
          "Pension term insurance provides life cover that is linked to your company pension scheme. It can offer tax-efficient protection for employees. IFC Finance will help you structure the right cover for your company.",
        ],
        "irishGreenField"
      ),
    ],
  },
};

// Group Risk - scraped from ifcfinance.com
export const GROUP_RISK_SERVICES: Record<string, ServiceContent> = {
  "life-income-protection": {
    title: "Group Life and Income Protection Insurance",
    intro: "IFC Finance are specialists in Group Risk. We help secure the best Group Risk Policies for Companies.",
    sections: [
      S(
        "What is Group Life Insurance?",
        [
          "Group Life Insurance is an Insurance Policy that covers an entire group of people, those people have some sort of common connection (either an employer or an organisation). If an insured person dies, the insurer will typically pay a lump sum to the beneficiaries of the deceased. This type of policy is typically bought by an employer or representative body. The policy covers the employees of the company or the organisation's members.",
        ],
        "irishCliffs"
      ),
      S(
        "What is Group Income Protection Insurance?",
        [
          "Group Income Protection Insurance can benefit employers by providing support to employees through times of sickness by helping them get back to health, thus reducing the amount of time they are absent from work. Group Income Protection Insurance benefits employees by providing continued income if they are sick or incapacitated. This helps relieve financial stress at a very difficult time.",
          "Contact IFC Finance today to discuss Group Life Insurance and Group Income Protection insurance with one of our experienced Financial Advisors. Visit our dedicated Group Risk website at grouprisk.ie for special offers.",
        ],
        "irishHills"
      ),
    ],
  },
};

// Invoice Finance - scraped from ifcfinance.com
export const INVOICE_FINANCE_SERVICES: Record<string, ServiceContent> = {
  "working-capital": {
    title: "Working Capital Finance for Companies",
    intro: "Invoice Finance allows businesses to raise cash against unpaid invoices. Waiting on payments for goods/services sold can be a burden – with Invoice Finance you no longer have a cashflow problem.",
    sections: [
      S(
        "IFC Finance – Helping Your Business Secure Invoice Finance",
        [
          "Unlock your Company's potential with a Trade Partner you can trust. IFC Finance will help you get working capital finance for your business. We partner with some of the leading Supply Chain Finance Companies operating in Ireland.",
          "You, the Client / Small and Medium Enterprises (SME), get access to the same rates as if you went directly to the Supply Chain Finance Companies; just that we do the legwork for you! We can help companies in securing that trade/sale or enable you to compete for contracts that otherwise you thought might be outside of your capability due to financial constraints.",
          "We enable your business to free up the cash trapped in your invoices. We ensure early payment on your outstanding invoices – you select which invoices you'd like to encash early. This allows you to improve your Cashflow, build your business and improve your bottom line. We only partner with Irish owned/managed Supply Chain Finance businesses who are keen to get you a pricing that makes the trade affordable for you.",
        ],
        "dublinAIBDocklands"
      ),
    ],
  },
};
