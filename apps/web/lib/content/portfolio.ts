export type PortfolioHighlight = {
  id: number;
  name: string;
  summary: string;
  services: string[];
  results: string[];
  url?: string;
  logo?: string;
  image?: string;
  imageBackground?: string;
  quote?: string;
  isConfidential?: boolean;
};

export const PORTFOLIO_HIGHLIGHTS: PortfolioHighlight[] = [
  {
    id: 1,
    name: "Bill Generator",
    url: "https://bill-generator.in",
    logo: "/images/portfolio/logo/bill-generator.png",
    image: "/images/portfolio/bill-generator.png",
    imageBackground:
      "linear-gradient(135deg, rgba(36, 48, 80, 0.85) 0%, rgba(118, 167, 255, 0.35) 45%, rgba(24, 35, 62, 0.8) 100%)",
    quote:
      "bill-generator.in keeps invoicing compliant and effortless for Indian founders. Automated GST-ready templates, payment reminders, and razor-sharp reporting let the team focus on growth instead of paperwork.",
    summary:
      "Rebuilt a compliance-first invoicing platform with instant tax calculations, automated reminders, and reporting dashboards tuned for Indian founders.",
    services: [
      "Product UX & onboarding flows",
      "Recurring billing & GST compliance tooling",
      "Customer dashboards and reporting",
      "Design system & marketing site",
    ],
    results: [
      "1.8× faster invoice creation after launch",
      "55% reduction in overdue payments within 3 months",
      "Support tickets dropped by 40% following the redesign",
    ],
  },
  {
    id: 2,
    name: "Zipper",
    url: "https://zipper.com.bd",
    logo: "/images/portfolio/logo/zipper.png",
    image: "/images/portfolio/zipper.png",
    imageBackground:
      "linear-gradient(135deg, rgba(38, 40, 56, 0.85) 0%, rgba(255, 163, 210, 0.35) 50%, rgba(28, 30, 44, 0.8) 100%)",
    quote:
      "zipper.com.bd powers a nationwide marketplace in Bangladesh with lightning-fast search, advanced merchandising tools, and a checkout flow tuned for local payment gateways on every device.",
    summary:
      "Launched a nationwide marketplace with tailored search, multi-vendor tooling, and checkout flows built for local gateways and logistics partners.",
    services: [
      "Marketplace architecture & vendor onboarding",
      "Performance-focused Next.js storefront",
      "Inventory & merchandising dashboards",
      "Payments, logistics & tax integrations",
    ],
    results: [
      "Catalog scaled to 150k SKUs without slowing search",
      "Average checkout time reduced by 32%",
      "GMV doubled year-over-year after relaunch",
    ],
  },
  {
    id: 3,
    name: "Examon AI",
    url: "https://examon.ai",
    logo: "/images/portfolio/logo/examon.png",
    image: "/images/portfolio/examon.png",
    imageBackground:
      "linear-gradient(135deg, rgba(28, 36, 54, 0.85) 0%, rgba(176, 192, 210, 0.35) 45%, rgba(21, 29, 46, 0.8) 100%)",
    quote:
      "examon.ai delivers adaptive, AI-driven assessments for enterprise educators. Real-time feedback dashboards and automated question generation help instructors keep every learner on track.",
    summary:
      "Delivered an AI-assisted assessments platform with adaptive testing, proctoring, and instructor dashboards ready for enterprise rollouts.",
    services: [
      "AI prompt workflows & question generation",
      "Role-based dashboards for instructors & learners",
      "Secure proctoring & compliance tooling",
      "Analytics instrumentation & reporting",
    ],
    results: [
      "Cut exam creation time by 65% using AI tooling",
      "Instructor satisfaction up 47% after onboarding",
      "Deployed across 12 enterprise campuses in the first quarter",
    ],
  },
  {
    id: 4,
    name: "BillQuest",
    url: "https://billquest.in",
    logo: "/images/portfolio/logo/billquest.png",
    image: "/images/portfolio/billquest.png",
    imageBackground:
      "linear-gradient(135deg, rgba(20, 32, 63, 0.85) 0%, rgba(120, 167, 255, 0.3) 45%, rgba(15, 24, 47, 0.85) 100%)",
    quote:
      "BillQuest gives finance teams a single control centre for quotes, invoices, collections, and insight dashboards—without the spreadsheet chaos.",
    summary:
      "Built an end-to-end billing co-pilot for mid-market SaaS firms with automated approvals, smart reminders, and cashflow analytics connected to CRM and accounting stacks.",
    services: [
      "Quoting & billing workflows",
      "Role-based portals for sales and finance",
      "Automated dunning & collections",
      "Revenue analytics and forecasting",
    ],
    results: [
      "AR automation cut overdue receivables by 48%",
      "Finance teams reclaimed ~18 hours a week by eliminating manual reconciliations",
      "Sales cycle time dropped 22% after integrating quoting + billing",
    ],
  },
  {
    id: 5,
    name: "Rhythmo AI",
    url: "https://rhythmo.ai",
    logo: "/images/portfolio/logo/rhythmo.png",
    image: "/images/portfolio/rhythmo.png",
    imageBackground:
      "linear-gradient(135deg, rgba(32, 24, 54, 0.85) 0%, rgba(173, 118, 255, 0.3) 45%, rgba(24, 18, 45, 0.85) 100%)",
    quote:
      "rhythmo.ai helps product marketers orchestrate campaigns with AI-powered playbooks, creative intelligence, and actionable insights.",
    summary:
      "Built a marketing operations copilot that combines AI playbooks, asset generation, and real-time performance insights for distributed GTM teams.",
    services: [
      "AI-assisted workflow design",
      "Campaign asset management & collaboration",
      "Performance analytics dashboards",
      "Integrations with HubSpot, Salesforce, and ad platforms",
    ],
    results: [
      "Campaign launch time cut from five days to under 24 hours",
      "Creative testing velocity improved 3× across GTM teams",
      "Leadership gets live visibility into spend, pacing, and ROI",
    ],
  },
];
