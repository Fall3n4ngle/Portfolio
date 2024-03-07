import Image, { StaticImageData } from "next/image";
import { buttonVariants } from "@/ui";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { cn } from "@/common/utils";
import { Project } from "./types";

type Props = Omit<Project, "image"> & {
  direction: "rtl" | "ltr";
  image: StaticImageData;
};

export default function ProjectCard({
  categories,
  description,
  githubLink,
  image,
  siteLink,
  title,
  direction,
}: Props) {
  return (
    <article className="flex flex-col items-center gap-7 sm:flex-row">
      <div
        className={cn("relative aspect-[9/6] w-full sm:basis-1/2", {
          "sm:order-2": direction === "ltr",
          "sm:order-1": direction === "rtl",
        })}
      >
        <Image src={image} alt={title} fill className="rounded-xl" />
      </div>
      <div
        className={cn("text-center sm:basis-1/2 sm:text-left", {
          "sm:order-1": direction === "ltr",
          "sm:order-2": direction === "rtl",
        })}
      >
        <div
          className={cn(
            "mb-4 flex items-center justify-center gap-4 sm:justify-start lg:mb-5",
          )}
        >
          {categories.map((category, index) => (
            <span key={category} className="italic text-muted-foreground">
              {category}
              {index !== categories.length - 1 && ","}
            </span>
          ))}
        </div>
        <h3 className="h4 mb-1.5 text-primary">{title}</h3>
        <p className="mb-4  text-sm leading-7 tracking-wide text-muted-foreground md:text-base lg:mb-6">
          {description}
        </p>
        <div className=" flex items-center justify-center gap-3 sm:justify-start">
          <Link
            href={siteLink}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "secondary",
              }),
              "hover:bg-primary hover:text-primary-foreground",
            )}
          >
            View site
          </Link>
          <Link
            href={githubLink}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "icon",
              }),
              "hover:bg-primary hover:text-primary-foreground",
            )}
            target="_blank"
            aria-label="Github"
          >
            <LuGithub className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </article>
  );
}
