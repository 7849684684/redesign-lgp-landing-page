export interface ServiceItem {
  slug: string;
  href: string;
  label: string;
  descriptor: string;
  format: string;
}

export const services: ServiceItem[] = [
  {
    slug: "workshops",
    href: "/services/workshops",
    label: "Workshops",
    descriptor:
      "Tabletop exercises that stress-test a strategy against the shocks your plan does not model.",
    format: "Half / full day",
  },
  {
    slug: "masterminds",
    href: "/services/masterminds",
    label: "Masterminds",
    descriptor:
      "Curated peer cohorts for leaders who have run out of people inside the building to challenge them.",
    format: "Six-month cohort",
  },
  {
    slug: "1-1-coaching",
    href: "/services/1-1-coaching",
    label: "1:1 Coaching",
    descriptor:
      "Confidential counsel for the decisions you cannot yet put in writing.",
    format: "Private retainer",
  },
  {
    slug: "strategy-sprints",
    href: "/services/strategy-sprints",
    label: "Strategy Sprints",
    descriptor:
      "Two weeks of partner-led work on one consequential question.",
    format: "Fixed-scope engagement",
  },
  {
    slug: "speaking",
    href: "/services/speaking",
    label: "Speaking",
    descriptor:
      "Keynotes and working sessions on strategy under uncertainty.",
    format: "Keynote / event",
  },
];
