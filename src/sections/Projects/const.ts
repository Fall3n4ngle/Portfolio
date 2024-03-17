export const projects = {
  ecommerce: {
    categories: ["Next.js", "Sanity", "Stripe"],
    title: "Ecommerce",
    githubLink: "https://github.com/Fall3n4ngle/ecommerce",
    siteLink: "https://ecommerce-amber-six.vercel.app",
    image: {
      light: "/projects/ecommerce-light.png",
      dark: "/projects/ecommerce-dark.png",
    },
  },
  messenger: {
    categories: ["Next.js", "Prisma", "Pusher"],
    title: "Messenger",
    githubLink: "https://github.com/Fall3n4ngle/messenger",
    siteLink: "https://messanger-lovat.vercel.app/",
    image: {
      light: "/projects/messenger-light.png",
      dark: "/projects/messenger-dark.png",
    },
  },
};

export type ProjectKey = keyof typeof projects;
