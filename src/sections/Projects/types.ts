import { StaticImageData } from "next/image";

export type Project = {
  image: {
    dark: StaticImageData;
    light: StaticImageData;
  };
  categories: string[];
  title: string;
  description: string;
  siteLink: string;
  githubLink: string;
};
