import messengerDark from "@/assets/projects/messenger-dark.png";
import messengerLight from "@/assets/projects/messenger-light.png";
import ecommerceLight from "@/assets/projects/ecommerce-light.png";
import ecommerceDark from "@/assets/projects/ecommerce-dark.png";

export const projects = {
  ecommerce: {
    categories: ["Next.js", "Sanity", "Stripe"],
    title: "Ecommerce",
    githubLink: "https://github.com/Fall3n4ngle/ecommerce",
    siteLink: "https://ecommerce-amber-six.vercel.app",
    image: {
      light: ecommerceLight,
      dark: ecommerceDark,
    },
  },
  messenger: {
    categories: ["Next.js", "Prisma", "Pusher"],
    title: "Messenger",
    githubLink: "https://github.com/Fall3n4ngle/messenger",
    siteLink: "https://messanger-lovat.vercel.app/",
    image: {
      light: messengerLight,
      dark: messengerDark,
    },
  },
};

export type ProjectKey = keyof typeof projects;
