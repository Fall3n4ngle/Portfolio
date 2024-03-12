import lightShop from "@/assets/projects/shop-light.png";
import drakShop from "@/assets/projects/shop-dark.png";

export const projects = {
  ecommerce: {
    categories: ["Next.js", "Sanity", "Stripe"],
    title: "Ecommerce",
    githubLink: "https://github.com/Fall3n4ngle/ecommerce",
    siteLink: "https://ecommerce-amber-six.vercel.app",
    image: {
      light: lightShop,
      dark: drakShop,
    },
  },
  messenger: {
    categories: ["Next.js", "Prisma", "Pusher"],
    title: "Messenger",
    githubLink: "https://github.com/Fall3n4ngle/messenger",
    siteLink: "https://messanger-lovat.vercel.app/",
    image: {
      light: lightShop,
      dark: drakShop,
    },
  },
};

export type ProjectKey = keyof typeof projects;
