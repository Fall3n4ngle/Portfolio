export const animationVariants = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const navigationItems = {
  home: {
    id: "home",
    href: "#home",
  },
  projects: {
    id: "projects",
    href: "#projects",
  },
  skills: {
    id: "skills",
    href: "#skills",
  },
  contacts: {
    id: "contacts",
    href: "#contacts",
  },
} as const;

export type NavigationKey = keyof typeof navigationItems;
export type SectionId = (typeof navigationItems)[NavigationKey]["id"];
