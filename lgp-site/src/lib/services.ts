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
    descriptor: "Tabletop exercises that pressure-test your strategy in a day.",
    format: "Half/full-day",
  },
  {
    slug: "masterminds",
    href: "/services/masterminds",
    label: "Masterminds",
    descriptor:
      "A small peer cohort that challenges your thinking for six months.",
    format: "Cohort",
  },
  {
    slug: "1-1-coaching",
    href: "/services/1-1-coaching",
    label: "1:1 Coaching",
    descriptor:
      "A sparring partner for the decisions you can't talk about internally.",
    format: "Ongoing, private",
  },
  {
    slug: "strategy-sprints",
    href: "/services/strategy-sprints",
    label: "Strategy Sprints",
    descriptor: "Two weeks. One sharp question. A defensible answer.",
    format: "Fixed-scope project",
  },
  {
    slug: "speaking",
    href: "/services/speaking",
    label: "Speaking",
    descriptor: "Talks that leave people thinking, not clapping.",
    format: "Keynote / event",
  },
];
